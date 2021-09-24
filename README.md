# vite-plugin-urbit

A plugin to setup proxying to a running Urbit on a vite devserver correctly. 
The plugin also inserts the correct script tags, so that window.ship and
window.desk are loaded correctly

## Usage

```typescript
import urbitPlugin from "@urbit/vite-plugin-urbit";
// rest of config
plugins: [
  urbitPlugin({
    base: "bitcoin",
    target: "http://localhost:8080",
  }),
];
```

The configuration object is defined as so.

```typescript
export interface UrbitPluginConfig {
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
