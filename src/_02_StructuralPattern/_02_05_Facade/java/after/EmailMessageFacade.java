package _02_StructuralPattern._02_05_Facade.java.after;

public class EmailMessageFacade {
  
  private String from;
  private String to;
  private String subject;
  private String text;

  // from
  public String getFrom() {
    return from;
  }
  public void setFrom(String from) {
    this.from = from;
  }

  // to
  public String getTo() {
    return to;
  }
  public void setTo(String to) {
    this.to = to;
  }

  // subject
  public String getSubject() {
    return subject;
  }
  public void setSubject(String subject) {
    this.subject = subject;
  }

  // text
  public String getText() {
    return text;
  }
  public void setText(String text) {
    this.text = text;
  }
  
}
