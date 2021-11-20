package _01_CreationalPattern._01_01_SingleTon.java;

public class Settings {
  private Settings() {}

  private static class SettingsHolder {
    private static final Settings INSTANCE = new Settings();
  }

  public static Settings getInstance() {
    return SettingsHolder.INSTANCE;
  }
}
