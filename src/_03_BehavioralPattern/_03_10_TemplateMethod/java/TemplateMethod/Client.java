package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateMethod;

public class Client {

  public static void main(String[] args) {
    String path = "D:\\study_programming\\(2021) -Study-Design Pattern (Java)\\Design Pattern 실습 (Java)\\src\\_03_BehavioralPattern\\_03_10_TemplateMethod\\numbers.txt";

    FileProcessor plus = new Plus(path);
    System.out.println("더하기 결과: " + plus.process());

    FileProcessor multiply = new Multiply(path);
    System.out.println("곱하기 결과: " + multiply.process());
  }
  
}
