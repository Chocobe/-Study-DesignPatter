package _03_BehavioralPattern._03_08_State.java.resolveCircular;

public class PublicState implements State {
  
  @Override
  public void addStudent(Student student, OnlineCourse onlineCourse) {
    onlineCourse.addStudentDirectly(student);
  }

  @Override
  public void addReview(Student student, String review, OnlineCourse onlineCourse) {
    onlineCourse.addReviewDirectly(review);
  }

  @Override
  public String toString() {
    return "공개 상태";
  }
  
}
