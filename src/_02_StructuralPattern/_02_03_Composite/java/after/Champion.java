package _02_StructuralPattern._02_03_Composite.java.after;

public class Champion implements Component {

  private Bag bag = new Bag();

  @Override
  public int getPrice() {
    return bag.getPrice();
  }

  public Champion add(Component component) {
    bag.add(component);
    return this;
  }
  
}
