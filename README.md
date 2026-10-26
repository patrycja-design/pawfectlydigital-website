# PawfectlyDigital website

## Contact form → Supabase

The contact form posts to `/api/contact`. The Vercel serverless function validates the fields and inserts each successful submission into the private Supabase table `public.contact_submissions`.

### One-time Supabase setup

1. Open the SQL Editor in the Supabase project you want to use.
2. Run the SQL in [supabase/schema.sql](supabase/schema.sql).
3. In the Supabase project settings, copy the project URL and the **service_role secret** (legacy key) or server-side secret key that is authorized to write to the Data API. Never put this key in frontend code or any `NEXT_PUBLIC_*` variable.

### Vercel setup

In Vercel → Project → Settings → Environment Variables, add:

- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — your Supabase server-side service-role/secret key

Set them for Production (and Preview/Development if you want to test those environments), then redeploy.

### Verify

Submit the contact form with a test entry and confirm a matching row appears in Supabase Table Editor → `public.contact_submissions`. The form only shows success after the insert succeeds.

### Security notes

The service-role key is used only by the server-side Vercel function. RLS is enabled and direct access by `anon` and `authenticated` is revoked. The endpoint includes basic method, payload, and field validation. Before promoting the form to a high-traffic public launch, add a managed rate limit and bot protection (for example, Turnstile) to reduce spam.
