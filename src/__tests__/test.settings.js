import Settings from '../js/settings';

describe('Settings', () => {
  test('Default settings are correct', () => {
    const settings = new Settings();
    expect(settings.settings.get('theme')).toBe('dark');
    expect(settings.settings.get('music')).toBe('trance');
    expect(settings.settings.get('difficulty')).toBe('easy');
  });

  test('User can set a valid setting', () => {
    const settings = new Settings();
    settings.setSettings('theme', 'light');
    settings.setSettings('music', 'rock');
    expect(settings.settings.get('theme')).toBe('light');
    expect(settings.settings.get('music')).toBe('rock');
  });

  test('Setting an unknown setting throws an error', () => {
    const settings = new Settings();
    expect(() => settings.setSettings('unknown', 'value')).toThrow('Unknown setting');
  });

  test('Invalid value for setting throws an error', () => {
    const settings = new Settings();
    expect(() => settings.setSettings('theme', 'invalid')).toThrow('Invalid value for theme.');
    expect(() => settings.setSettings('music', 'invalid')).toThrow('Invalid value for music.');
  });
});
