package _01_CreationalPattern._01_03_AbstractFactory.java.before;

public class Whiteship extends Ship {
  
  public Whiteship(String name) {
    this.setName(name);
    this.setType("whiteship");
    this.setColor("#fff");
    this.setLogo("\uD83D\uDEE5️");
  }

}
