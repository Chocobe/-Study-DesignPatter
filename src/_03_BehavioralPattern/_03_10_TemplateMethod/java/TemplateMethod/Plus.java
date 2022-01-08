package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateMethod;

public class Plus extends FileProcessor {

  public Plus(String path) {
    super(path, 0);
  }

  @Override
  protected int getResult(int result, int value) {
    return result + value;
  }
  
}
