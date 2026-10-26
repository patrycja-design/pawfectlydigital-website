const MAX_BODY_BYTES = 20_000;

function json(res, status, payload) {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8').send(JSON.stringify(payload));
}

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { error: 'Method not allowed.' });
  }

  const contentType = req.headers['content-type'] || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return json(res, 415, { error: 'Please submit the form using the website.' });
  }

  const declaredLength = Number(req.headers['content-length'] || 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return json(res, 413, { error: 'Your message is too large. Please shorten it and try again.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json(res, 400, { error: 'The form data could not be read. Please try again.' });
  }

  const submission = {
    name: clean(body.name, 120),
    business: clean(body.business, 160),
    email: clean(body.email, 254).toLowerCase(),
    service: clean(body.service, 100),
    other_issue: clean(body.otherIssue, 2000),
    message: clean(body.message, 5000)
  };

  if (!submission.name || !submission.business || !submission.email || !submission.service || !submission.message) {
    return json(res, 400, { error: 'Please complete all required fields.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
    return json(res, 400, { error: 'Please enter a valid email address.' });
  }
  if (submission.service === 'other' && !submission.other_issue) {
    return json(res, 400, { error: 'Please tell us what other help you need.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error('Contact API configuration missing: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
    return json(res, 500, { error: 'The contact form is temporarily unavailable. Please try again later.' });
  }

  try {
    const response = await fetch(`${supabaseUrl.replace(/\/$/, '')}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify(submission)
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Supabase contact insert failed:', response.status, details.slice(0, 1000));
      return json(res, 502, { error: 'We could not save your message right now. Please try again later.' });
    }

    return json(res, 201, { ok: true });
  } catch (error) {
    console.error('Contact API request failed:', error);
    return json(res, 502, { error: 'We could not save your message right now. Please try again later.' });
  }
}
