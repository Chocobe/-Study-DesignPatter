package _02_StructuralPattern._02_06_FlyWeight.java.before;

public class Character {
  
  private char value;
  private String color;
  private String fontFamily;
  private int fontSize;

  public Character(char value, String color, String fontFamily, int fontSize) {
    this.value = value;
    this.color = color;
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
  }

  public char getValue() {
    return value;
  }

  public String getColor() {
    return color;
  }

  public String getFontFamily() {
    return fontFamily;
  }

  public int getFontSize() {
    return fontSize;
  }
  
}
