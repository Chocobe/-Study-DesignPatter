package _03_BehavioralPattern._03_10_TemplateMethod.java.before;

public class Client {
  
  public static void main(String[] args) {
    String path = "D:\\study_programming\\(2021) -Study-Design Pattern (Java)\\Design Pattern 실습 (Java)\\src\\_03_BehavioralPattern\\_03_10_TemplateMethod\\numbers.txt";
    
    FileProcessor fileProcessor = new FileProcessor(path);

    int result = fileProcessor.processor();
    System.out.println("더하기: " + result);

    MultiplyFileProcessor multiplyFileProcessor = new MultiplyFileProcessor(path);

    result = multiplyFileProcessor.processor();
    System.out.println("곱하기: " + result);
  }
  
}
