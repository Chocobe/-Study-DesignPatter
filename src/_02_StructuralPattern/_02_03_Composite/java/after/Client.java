package _02_StructuralPattern._02_03_Composite.java.after;

public class Client {
  
  public static void main(String[] args) {
    Component doranBlade = new Item("도란검", 450);
    Component healPotion = new Item("체력 물약", 50);

    Bag bag = new Bag();
    bag.add(doranBlade).add(healPotion);

   Champion champion = new Champion();
   champion.add(doranBlade).add(healPotion).add(bag);
   
   Client client = new Client();
   client.printPrice(doranBlade);
   client.printPrice(healPotion);
   client.printPrice(bag);
   client.printPrice(champion);
  }

  public void printPrice(Component component) {
    System.out.println(component.getPrice());
  }
  
}
