(() => {
  /** @type {(collection: string, icon: string) => Promise<string>} */
  const getIcon = (collection, icon) =>
    fetch(`https://api.iconify.design/${collection}:${icon}.svg`).then((res) =>
      res.text(),
    );

  window.__unocss = {
    presets: [
      () => window.__unocss_runtime?.presets.presetMini(),
      () =>
        window.__unocss_runtime?.presets.presetIcons({
          collections: {
            /** @type {(icon: string) => Promise<string>} */
            uil: (icon) => getIcon("uil", icon),
          },
        }),
    ],
  };
})();
