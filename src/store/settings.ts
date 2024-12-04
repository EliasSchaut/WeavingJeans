export const settingsStore = defineStore('settings', {
  state: (): SettingsType => {
    return {
      theme: 'dark',
    };
  },
  actions: {
    setTheme(theme: SettingsType['theme']) {
      this.theme = theme;
      useColorMode().preference = theme;
    },
  },
});

class SettingsType {
  theme!: 'light' | 'dark' | 'system';
}
