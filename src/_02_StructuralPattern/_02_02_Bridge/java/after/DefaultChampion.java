package _02_StructuralPattern._02_02_Bridge.java.after;

public class DefaultChampion implements Champion {

  private String name;
  private Skin skin;

  public DefaultChampion(String name, Skin skin) {
    this.name = name;
    this.skin = skin;
  }
  
  @Override
  public void move() {
    System.out.printf("%s %s move\n", skin.getName(), name);
  }

  @Override
  public void skillQ() {
    System.out.printf("%s %s skillQ\n", skin.getName(), name);
  }

  @Override
  public void skillW() {
    System.out.printf("%s %s skillW\n", skin.getName(), name);
  }

  @Override
  public void skillE() {
    System.out.printf("%s %s skillE\n", skin.getName(), name);
  }

  @Override
  public void skillR() {
    System.out.printf("%s %s skillR\n", skin.getName(), name);
  }
  
}
