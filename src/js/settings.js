export default class Settings {
  constructor() {
    this.defaults = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();

    this.validValues = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  setSettings(name, value) {
    if (this.defaults.has(name)) {
      if (this.validValues[name].includes(value)) {
        this.userSettings.set(name, value);
      } else {
        throw new Error(`Invalid value for ${name}.`);
      }
    } else {
      throw new Error('Unknown setting');
    }
  }

  get settings() {
    const combinedSettings = new Map(this.defaults);
    this.userSettings.forEach((value, key) => {
      combinedSettings.set(key, value);
    });
    return combinedSettings;
  }
}
