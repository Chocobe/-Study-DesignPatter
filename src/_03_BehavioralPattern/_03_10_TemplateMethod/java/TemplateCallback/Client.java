package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateCallback;

public class Client {

  public static void main(String[] args) {
    String path = "D:\\study_programming\\(2021) -Study-Design Pattern (Java)\\Design Pattern 실습 (Java)\\src\\_03_BehavioralPattern\\_03_10_TemplateMethod\\numbers.txt";

    FileProcessor fileProcessor = new FileProcessor(path);

    int plusResult = fileProcessor.process(new Callback() {
      @Override
      public int getInitValue() {
        return 0;
      }

      @Override
      public int getResult(int result, int value) {
        return result + value;
      }
    });

    System.out.println("더하기 결과: " + plusResult);

    int multiplyResult = fileProcessor.process(new Callback() {
      @Override
      public int getInitValue() {
        return 1;
      }

      @Override
      public int getResult(int result, int value) {
        return result * value;
      }
    });

    System.out.println("곱하기 결과: " + multiplyResult);
  }
  
}
