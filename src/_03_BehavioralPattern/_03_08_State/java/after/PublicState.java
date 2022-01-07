package _03_BehavioralPattern._03_08_State.java.after;

public class PublicState implements State {
  
  private OnlineCourse onlineCourse;

  public PublicState(OnlineCourse onlineCourse) {
    this.onlineCourse = onlineCourse;
  }

  @Override
  public void addStudent(Student student) {
    this.onlineCourse.getStudents().add(student);
  }

  @Override
  public void addReview(Student student, String review) {
    this.onlineCourse.getReviews().add(review);
  }

  @Override
  public String toString() {
    return "<Public 상태>";
  }
  
}
