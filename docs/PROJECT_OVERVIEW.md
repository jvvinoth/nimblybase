# Project Overview

NimblyBase is an agent-native backend and deployment control plane.

It gives AI coding agents a safe way to create and operate backend infrastructure through MCP, CLI, dashboard, and reusable Skills.

## Problem

AI coding agents can generate application code, but they do not automatically solve the operational work needed to ship a real product:

- creating databases
- creating auth flows
- storing files
- deploying backend functions
- deploying frontend apps
- connecting domains
- issuing SSL
- managing secrets
- debugging logs
- tracking cloud provider costs

This causes many AI-built applications to stall at the demo stage.

## Solution

NimblyBase provides a unified control plane where agents can:

- create a project
- provision services
- run migrations
- deploy functions
- deploy frontend/edge apps
- connect domains
- inspect logs
- track usage
- calculate cost
- produce verification evidence

## Product Principle

NimblyBase is plug-and-play.

Users can use only the services they need:

- only database
- only auth
- only storage
- only deployment
- only domains
- full managed stack

Users may also deploy frontend apps on external providers such as Vercel, Railway, Netlify, AWS, or their own VPS while still using NimblyBase backend services.

## First Target Users

- hackathon teams
- students
- AI builders
- indie hackers
- non-technical founders using AI coding tools
- agencies building many small apps

## First Product Promise

> Your AI agent builds the app. NimblyBase gives it the backend, deployment, domain, logs, and cost control.

