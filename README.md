# Subscription Tracker API

A secure backend API for tracking user subscriptions, managing lifecycle workflows, and sending proactive email reminders before subscriptions expire.  
Designed to help users stay in control of their subscriptions and avoid unexpected renewals.

---

## Features

- **Subscription Management**
  - Create, update, fetch, and delete subscriptions
  - Track renewal dates, billing cycles, and status

- **Automated Email Reminders**
  - Sends reminder emails **7 days before a subscription ends**
  - Helps users manage renewals and cancellations proactively

- **Authentication & Security**
  - Secure, authenticated API endpoints
  - User-level authorization to protect subscription data

- **Workflow Automation**
  - Scheduled background jobs to monitor subscription expiration
  - Event-driven workflows for reminders and status updates

- **Scalable Infrastructure**
  - Uses Upstash for queues, cron jobs, and background processing
  - Built for serverless and cloud-native deployments

---

## Tech Stack

- **Backend**: Node.js (API-based architecture)
- **Database / Queue / Cron**: Upstash
- **Authentication**: Token-based authentication (e.g. JWT)
- **Email Service**: SMTP or third-party email provider
- **Workflows**: Scheduled background tasks

---

## Security

- All protected routes require authentication
- Users can only access their own subscriptions
- Secrets managed via environment variables
- Secure execution of background workflows

---

## Email Reminder Workflow

1. Subscriptions are stored with an expiration or renewal date
2. A scheduled job runs daily
3. Subscriptions expiring in **7 days** are identified
4. Reminder emails are sent to users
5. Subscription status is updated automatically after expiration

---

## API Endpoints (Example)

POST /auth/register
POST /auth/login

GET /subscriptions
POST /subscriptions
GET /subscriptions/:id
PUT /subscriptions/:id
DELETE /subscriptions/:id


> All subscription endpoints require authentication.

---

## Environment Variables

```env
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=

EMAIL_PROVIDER_API_KEY=
EMAIL_FROM_ADDRESS=

JWT_SECRET=
APP_BASE_URL=
Getting Started

Clone the repository

Install dependencies

Configure environment variables

Start the development server

Deploy to your preferred cloud or serverless platform

Background Jobs & Scheduling

Subscription checks run on a scheduled interval

Jobs are powered by Upstash for reliability and scalability

No dedicated worker server required

Use Cases

SaaS subscription tracking

Personal finance or budgeting apps

Subscription reminder services

Admin dashboards for subscription management
