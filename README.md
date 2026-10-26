# PawfectlyDigital website

## Contact form → Supabase + email notification

The contact form posts to `/api/contact`. The Vercel serverless function validates the fields and inserts each successful submission into the private Supabase table `public.contact_submissions`. If Resend email settings are configured, it also sends a notification to `pawfectlydigital@gmail.com`.

### Supabase setup

The table schema is in [supabase/schema.sql](supabase/schema.sql). It has been applied to the connected Supabase project `pawfectlydigital-website`.

### Vercel environment variables

In Vercel → Project → Settings → Environment Variables, add these variables for Production (and Preview/Development if needed):

- `SUPABASE_URL` — the Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — the server-side service-role/secret key (never expose this in frontend code or a `NEXT_PUBLIC_*` variable)
- `RESEND_API_KEY` — API key from Resend, to enable email notifications
- `RESEND_FROM_EMAIL` — sender address on a domain verified in Resend, e.g. `PawfectlyDigital <forms@your-verified-domain.com>`

Email notifications go to `pawfectlydigital@gmail.com`; replies go to the email submitted by the customer. If email configuration is missing or the email provider fails, the contact is still stored in Supabase and the email failure is logged.

After changing environment variables, redeploy the Vercel project.

### Verify

Submit a test contact form and confirm a row appears in Supabase Table Editor → `public.contact_submissions`. Once Resend is configured, also confirm the notification arrives in `pawfectlydigital@gmail.com`.

### Security notes

The service-role key is used only by the server-side Vercel function. RLS is enabled and direct access by `anon` and `authenticated` is revoked. The endpoint includes basic method, payload, and field validation. Before a high-traffic public launch, add managed rate limiting and bot protection.
