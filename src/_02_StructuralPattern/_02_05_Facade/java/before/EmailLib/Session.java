package _02_StructuralPattern._02_05_Facade.java.before.EmailLib;

import java.util.Properties;

public class Session {
  
  private Properties properties;
  
  private Session(Properties properties) {
    this.properties = properties;
  }

  public static Session getDefaultInstance(Properties properties) {
    return new Session(properties);
  }

  public Properties getProperties() {
    return this.properties;
  }
}
