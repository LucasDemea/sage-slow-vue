import domReady from '@roots/sage/client/dom-ready';
import { createApp } from 'vue';
import { NMenu } from 'naive-ui';
/**
 * Application entrypointé
 */
domReady(async () => {
  const nav = createApp({
    components: {
      'n-menu': NMenu,
    },
    setup() {
      console.log('teuds');
      const menuItems = [];
    },
  });
});
