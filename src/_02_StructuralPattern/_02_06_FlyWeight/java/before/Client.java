package _02_StructuralPattern._02_06_FlyWeight.java.before;

public class Client {
  
  public static void main(String[] args) {
    Character c1 = new Character('h', "white", "nanum", 12);
    Character c2 = new Character('e', "white", "nanum", 12);
    Character c3 = new Character('l', "white", "nanum", 12);
    Character c4 = new Character('l', "white", "nanum", 12);
    Character c5 = new Character('o', "white", "nanum", 12);

    System.out.print(c1.getValue());
    System.out.print(c2.getValue());
    System.out.print(c3.getValue());
    System.out.print(c4.getValue());
    System.out.print(c5.getValue());
  }
  
}
