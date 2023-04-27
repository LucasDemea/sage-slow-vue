/**
 * Build configuration
 *
 * @see {@link https://roots.io/docs/sage/ sage documentation}
 * @see {@link https://bud.js.org/guides/configure/ bud.js configuration guide}
 *
 * @typedef {import('@roots/bud').Bud} Bud
 * @typedef {import('@roots/bud-babel')}
 * @typedef {import('@roots/bud-imagemin')}
 * @typedef {import('@roots/bud-wordpress-theme-json')}
 * @typedef {import('@roots/bud-typescript')}
 * @typedef {import('@roots/bud-postcss')}
 * @param {Bud} app
 */
export default async (app) => {
  /**
   * Application entrypoints
   * @see {@link https://bud.js.org/docs/bud.entry/}
   */
  app.entry({
    app: ['@scripts/app'],
  });

  app.vue.set(`runtimeOnly`, false);

  app.define({
    __VUE_OPTIONS_API__: true, // If you are using the options api.
    __VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
  });

  /**
   * Development server settings
   *
   * @see {@link https://bud.js.org/docs/bud.setUrl}
   * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
   * @see {@link https://bud.js.org/docs/bud.watch}
   */
  app
    .setUrl('http://localhost:3003')
    .setProxyUrl('http://example.test')
    .watch(['resources/views', 'app']);

  /**
   * Preserve svg viewBox
   * @see {@link https://discourse.roots.io/t/disable-removeviewbox-doesnt-work-bud-imagemin-svgo/}
   */
};
