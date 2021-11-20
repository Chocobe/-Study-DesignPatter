package _01_CreationalPattern._01_02_FactoryMethod.java.after;

public class Ship {
  private String name;
  private String color;
  private String logo;

  public String getName() {
    return this.name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public String getColor() {
    return this.color;
  }
  public void setColor(String color) {
    this.color = color;
  }

  public String getLogo() {
    return this.logo;
  }
  public void setLogo(String logo) {
    this.logo = logo;
  }

  @Override
  public String toString() {
    return "Ship{" +
      "name=\"" + name + "\"" +
      ", color=\"" + color + "\"" +
      ", logo=\"" + logo + "\"" +
      "}";
  }
}
