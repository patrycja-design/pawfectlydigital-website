create table if not exists public.contact_submissions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  business text not null,
  email text not null,
  service text not null,
  other_issue text,
  message text not null
);

alter table public.contact_submissions enable row level security;

-- Contact details must never be readable or writable directly by anonymous website visitors.
revoke all on table public.contact_submissions from anon, authenticated;
grant insert on table public.contact_submissions to service_role;

-- Keep the table private to the server-side endpoint; do not add public read policies.
