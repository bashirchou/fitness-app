# Fitness App

A social fitness app for lifters. This repo is currently just the skeleton; no features yet.

```
backend/   Node.js + Express API (Dockerized, Cloud Run ready, listens on $PORT)
mobile/    React Native + Expo app (shows "Fitness App")
docker-compose.yml   Local backend + PostgreSQL
.github/workflows/   CI (backend tests + Docker build)
```

## Backend
```
cd backend && npm install && npm start   # http://localhost:8080/health
npm test
```
Or run everything with `docker compose up --build`.

## Mobile
```
cd mobile && npm install && npm start
```

## Planned next steps
Database schema (User → Workouts → WorkoutExercises → WorkoutSets), workout logging, PRs,
then deployment to GCP (Cloud Run + Cloud SQL) and Terraform.
