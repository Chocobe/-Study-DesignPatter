package _01_CreationalPattern._01_01_SingleTon.java;

public class App {
  public static void main(String[] args) {
    Settings settings = Settings.getInstance();
    Settings settings1 = Settings.getInstance();

    System.out.println(settings == settings1);
  }
}
