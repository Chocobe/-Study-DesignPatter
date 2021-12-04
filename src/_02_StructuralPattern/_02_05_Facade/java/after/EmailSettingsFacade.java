package _02_StructuralPattern._02_05_Facade.java.after;

public class EmailSettingsFacade {
  
  private String host;

  public EmailSettingsFacade(String host) {
    this.host = host;
  }

  // host
  public String getHost() {
    return host;
  }
  public void setHost(String host) {
    this.host = host;
  }
  
}
