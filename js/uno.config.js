window.__unocss = {
  presets: [
    () => window.__unocss_runtime.presets.presetMini(),
    () =>
      window.__unocss_runtime.presets.presetIcons({
        cdn: "https://esm.sh/",
      }),
  ],
};
