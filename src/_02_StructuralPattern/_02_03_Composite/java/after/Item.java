package _02_StructuralPattern._02_03_Composite.java.after;

public class Item implements Component {

  private String name;
  private int price;

  public Item(String name, int price) {
    this.name = name;
    this.price = price;
  }

  // name
  public String getName() {
    return name;
  }
  
  @Override
  public int getPrice() {
    return price;
  }
  
}
