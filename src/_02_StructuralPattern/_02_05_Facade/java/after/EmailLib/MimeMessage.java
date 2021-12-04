package _02_StructuralPattern._02_05_Facade.java.after.EmailLib;

import java.util.ArrayList;
import java.util.List;

public class MimeMessage {
  
  private Session session;
  private InternetAddress from;
  private List<InternetAddress> recipients;
  private String subject;
  private String text;

  public MimeMessage(Session session) {
    this.session = session;
    this.recipients = new ArrayList<InternetAddress>();
  }

  // session
  public Session getSession() {
    return session;
  }
  public void setSession(Session session) {
    this.session = session;
  }

  // from
  public InternetAddress getFrom() {
    return from;
  }
  public void setFrom(InternetAddress from) {
    this.from = from;
  }

  // recipients
  public List<InternetAddress> getRecipients() {
    return recipients;
  }
  public void addRecipient(InternetAddress recipient) {
    recipients.add(recipient);
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
