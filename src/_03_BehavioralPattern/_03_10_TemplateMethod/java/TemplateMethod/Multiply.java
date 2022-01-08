package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateMethod;

public class Multiply extends FileProcessor {

  public Multiply(String path) {
    super(path, 1);
  }

  @Override
  protected int getResult(int result, int value) {
    return result * value;
  }
  
}
