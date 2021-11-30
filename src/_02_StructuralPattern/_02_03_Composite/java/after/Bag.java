package _02_StructuralPattern._02_03_Composite.java.after;

import java.util.ArrayList;
import java.util.List;

public class Bag implements Component {

  private List<Component> components = new ArrayList<>();

  public List<Component> getComponents() {
    return components;
  }

  public Bag add(Component component) {
    components.add(component);
    return this;
  }
  
  @Override
  public int getPrice() {
    return components.stream().mapToInt(Component::getPrice).sum();
  }
  
}
