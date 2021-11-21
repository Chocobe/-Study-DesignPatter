package _01_CreationalPattern._01_03_AbstractFactory.java.after;

public class Ship {

  private String name;
  private String type;
  private String color;
  private String logo;
  private Anchor anchor;
  private Wheel wheel;
  
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  public String getType() {
    return type;
  }
  public void setType(String type) {
    this.type = type;
  }

  public String getColor() {
    return color;
  }
  public void setColor(String color) {
    this.color = color;
  }

  public String getLogo() {
    return logo;
  }
  public void setLogo(String logo) {
    this.logo = logo;
  }

  public Anchor getAnchor() {
    return anchor;
  }
  public void setAnchor(Anchor anchor) {
    this.anchor = anchor;
  }
  
  public Wheel getWheel() {
    return wheel;
  }
  public void setWheel(Wheel wheel) {
    this.wheel = wheel;
  }
}
