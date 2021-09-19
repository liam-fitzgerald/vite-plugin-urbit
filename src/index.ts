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

/**
 * Setup a vite dev server for urbit development
 *
 */
export default (desk: string, base: string, target: string) => {
  const basePath = `/apps/${base}/`;
  return {
    name: "return-partial",
    config: () => ({
      base: basePath,
      server: {
        proxy: {
          [`^${basePath}desk.js`]: {
            target,
          },
          [`^((?!${basePath}).)*$`]: {
            target,
          },
        },
      },
    }),
  };
};
