package _02_StructuralPattern._02_05_Facade.java.before.EmailLib;

public class InternetAddress {
  private String address;

  public InternetAddress(String address) {
    this.address = address;
  }

  public String getAddress() {
    return address;
  }
}
