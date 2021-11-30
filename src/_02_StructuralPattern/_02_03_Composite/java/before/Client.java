package _02_StructuralPattern._02_03_Composite.java.before;

public class Client {
  
  public static void main(String[] args) {
    Item doranBlade = new Item("도란검", 450);
    Item healPotion = new Item("체력 물약", 50);

    Bag bag = new Bag();
    bag.add(doranBlade);
    bag.add(healPotion);
    
    Client client = new Client();
    client.printPrice(doranBlade);
    client.printPrice(bag);
  }

  public void printPrice(Item item) {
    System.out.println(item.getPrice());
  }

  public void printPrice(Bag bag) {
    // int sum = bag.getItems().stream().mapToInt(item -> item.getPrice()).sum();
    int sum = bag.getItems().stream().mapToInt(Item::getPrice).sum();
    System.out.println(sum);
  }
  
}
