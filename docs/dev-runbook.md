# Developer Runbook

Quick commands for local work on contracts, tests, and the frontend.

## Contracts
- Install deps: `npm install`
- Check Clarity code: `clarinet check`
- Update settings: `settings/Devnet.toml` for local devnet tweaks.

## Tests
- Run once: `npm test`
- Watch contracts/tests: `npm run test:watch`

## Frontend
- Install deps: `cd frontend && npm install`
- Dev server: `npm run dev`
- Network: configure `NEXT_PUBLIC_STACKS_NETWORK` (see `frontend/.env.example`).
