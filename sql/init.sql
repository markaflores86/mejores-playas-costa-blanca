-- SQL inicial para Supabase: crea tablas básicas

create extension if not exists "pgcrypto";

create table if not exists points (
  id uuid default gen_random_uuid() primary key,
  title text,
  description text,
  lat numeric,
  lng numeric,
  email text,
  language text default 'es',
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists photos (
  id uuid default gen_random_uuid() primary key,
  point_id uuid references points(id) on delete cascade,
  storage_path text,
  caption text,
  created_at timestamptz default now()
);

create table if not exists comments (
  id uuid default gen_random_uuid() primary key,
  point_id uuid references points(id) on delete cascade,
  body text,
  email text,
  approved boolean default false,
  created_at timestamptz default now()
);

create table if not exists ad_events (
  id bigserial primary key,
  ad_slot text,
  event_type text,
  point_id uuid,
  email text,
  created_at timestamptz default now()
);
