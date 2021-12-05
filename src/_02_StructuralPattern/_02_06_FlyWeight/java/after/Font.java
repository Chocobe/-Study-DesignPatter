package _02_StructuralPattern._02_06_FlyWeight.java.after;

public class Font {
  
  private String fontFamily;
  private int fontSize;

  public Font(String fontFamily, int fontSize) {
    this.fontFamily = fontFamily;
    this.fontSize = fontSize;
  }

  public String getFontFamily() {
    return fontFamily;
  }

  public int getFontSize() {
    return fontSize;
  }
  
}
