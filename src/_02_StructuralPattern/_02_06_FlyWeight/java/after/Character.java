package _02_StructuralPattern._02_06_FlyWeight.java.after;

public class Character {
  
  private char value;
  private String color;
  private Font font;

  public Character(char value, String color, Font font) {
    this.value = value;
    this.color = color;
    this.font = font;
  }

  public char getValue() {
    return value;
  }

  public String getColor() {
    return color;
  }

  public Font getFont() {
    return font;
  }

  @Override
  public String toString() {
    return "문자: " + value
      + ", 색상: " + color
      + ", 폰트: " + font.getFontFamily()
      + ", 사이즈: " + font.getFontSize();
  }
  
}
