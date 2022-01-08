package _03_BehavioralPattern._03_08_State.java.resolveCircular;

public class PrivateState implements State {

  @Override
  public void addStudent(Student student, OnlineCourse onlineCourse) {
    if (student.isAvailable(onlineCourse)) {
      onlineCourse.addStudentDirectly(student);
    } else {
      throw new UnsupportedOperationException("[" + student.getName() + "] (은)는 수강 권한이 없습니다.");
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
    return "비공개 상태";
  }
  
}
