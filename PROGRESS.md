# Maji - Project Project Log

## Stack
- Frontend: HTML + CSS + Vanilla JS + Leaflet.js
- Backend: Node.js + Express
- Database: PostgreSQL + PostGIS
- SMS: Africa's Talking
- Deploy: Render.com

## Why this stack
- Node.js chosen over Django: one language (JS)    across   frontend and backend, better fit for real-time IOT/SMS event handling
- PostgreSQL chosen over MySQL: PostGIS extension enables native geographic queries (ST_DWithin, GEOGRAPHY type) essential for mapping water points
- Vanilla JS over React: no build step, faster prototype, Leaflte.js integrates cleanly without a framework

## Module Progress
- [x] Module 1: Environment + GitHub setup
- [ ] Module 2: Dtabase schema + seed data
- [ ] Module 3: Backend API routes
- [ ] Module 4: Frontenf map + UI
- [ ] Module 5: SMS integration
- [ ] Module 6: Deploymemt

## Git Branch Strategy
- main        -> production only, never commit directly
- dev         -> integration, merge features here first
- feature/*   -> one branch per feature/ module

## Team Roles (update with real names)
- Backend / API
- Frontend / MAP
- Database / Seed data
- SMS/Alerts

