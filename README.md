# vite-plugin-urbit

A plugin to setup proxying to a running Urbit on a vite devserver correctly

## Usage

```typescript
import urbitPlugin from "@urbit/vite-plugin-urbit";
// rest of config
plugins: [
  urbitPlugin({
    desk: "btc-wallet",
    base: "bitcoin",
    target: "http://localhost:8080",
  }),
];
```

The configuration object is defined as so.

```typescript
export interface UrbitPluginConfig {
  /**
   * The desk that the agents for this app are running off
   */
  desk: string;
  /**
   * The base that this app will be served at. This should be the same
   * as the `base` property on the docket file
   */
  base: string;
  /**
   * URL of urbit to proxy requests to
   *
   * @example `"http://localhost:8080"`
   */
  target: string;
}
```
