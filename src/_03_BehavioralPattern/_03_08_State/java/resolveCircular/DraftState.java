package _03_BehavioralPattern._03_08_State.java.resolveCircular;

public class DraftState implements State {

  @Override
  public void addStudent(Student student, OnlineCourse onlineCourse) {
    onlineCourse.addStudentDirectly(student);

    if (onlineCourse.getStudents().size() > 1) {
      onlineCourse.changeState(new PrivateState());
    }
  }

  @Override
  public void addReview(Student student, String review, OnlineCourse onlineCourse) {
    if (onlineCourse.isRegisteredStudent(student)) {
      onlineCourse.addReviewDirectly(review);
    } else {
      throw new UnsupportedOperationException("수강중인 학생만 리뷰를 등록할 수 있습니다.");
    }
  }

  @Override
  public String toString() {
    return "초안 상태";
  }
  
}
