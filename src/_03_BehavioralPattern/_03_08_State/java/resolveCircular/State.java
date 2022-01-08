package _03_BehavioralPattern._03_08_State.java.resolveCircular;

public interface State {
  
  public void addStudent(Student student, OnlineCourse onlineCourse);

  public void addReview(Student student, String review, OnlineCourse onlineCourse);
  
}
