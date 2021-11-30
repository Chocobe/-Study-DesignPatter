package _02_StructuralPattern._02_03_Composite.java.before;

import java.util.ArrayList;
import java.util.List;

public class Bag {
  
  private List<Item> items = new ArrayList<>();

  public List<Item> getItems() {
    return items;
  }
  public void add(Item item) {
    items.add(item);
  }
  
}
