# Scenes REST demo
This is an example project for using API.stream scene-based composition via our REST APIs.

This creates a broadcast with 3 RTMP sources, transitioning between them at an interval. The broadcast is published via RTMP.

## Getting started
Make sure to place your API key into the top of `src/index.ts`.

```bash
npm install
npm run start
```


A broadcast will start and an RTMP destination will be logged where you can preview the broadcast. The 3rd camera is configured as an RTMP source which you can publish to.
