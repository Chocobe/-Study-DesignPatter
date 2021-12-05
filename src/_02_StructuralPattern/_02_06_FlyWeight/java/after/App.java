package _02_StructuralPattern._02_06_FlyWeight.java.after;

public class App {
  public static void main(String[] args) {
    FontFactory fontFactory = new FontFactory();

    Character c1 = new Character('h', "#ff1493", fontFactory.getFont("나눔:12"));
    Character c2 = new Character('e', "#ff1493", fontFactory.getFont("나눔:12"));
    Character c3 = new Character('l', "#ff1493", fontFactory.getFont("나눔:12"));
    Character c4 = new Character('l', "#ff1493", fontFactory.getFont("나눔:12"));
    Character c5 = new Character('o', "#ff1493", fontFactory.getFont("나눔:12"));

    System.out.println(c1.toString());
    System.out.println(c2.toString());
    System.out.println(c3.toString());
    System.out.println(c4.toString());
    System.out.println(c5.toString());
  }
}
