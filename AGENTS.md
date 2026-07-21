# polkadot-watcher-validator — agent context

TypeScript app watching Substrate validators over a websocket RPC. Actively
maintained `ironoa` fork of the dormant `w3f/polkadot-watcher-validator`.

## Invariants

- **Every async handler fired from a subscription callback must go through
  `_guarded()`** (`src/subscriber.ts`): an un-caught promise rejection kills the
  Node process. This was a real production crash loop (load-balanced RPC backends
  can miss a just-announced block hash) — don't regress it.
- Releases are git tags `vX.Y.Z` matching `package.json`, published as the
  `ironoa/polkadot-watcher` Docker image. **Build with `--platform linux/amd64`** —
  the image targets amd64 clusters; a default build on Apple Silicon produces arm64.

## Toolchain & tests

- Node 18 + yarn; `yarn build` (tsc), `yarn lint`. The Dockerfile is the reference
  build; a dev container setup is available (see DEV_CONTAINER_GUIDE.md).
- `yarn test` needs a live substrate dev node (`@w3f/test-utils` spins one up) —
  designed for CI, may not work offline.
- The CircleCI config is inherited from w3f upstream and does not run on this fork:
  releases are manual.

## Layout

- `src/subscriber.ts` — all the watching logic (events, new heads, handlers)
- `charts/polkadot-watcher` — the helm chart consumed by deployment repos
