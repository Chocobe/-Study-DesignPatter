package _03_BehavioralPattern._03_08_State.java.after;

public class DraftState implements State {

  private OnlineCourse onlineCourse;

  public DraftState(OnlineCourse onlineCourse) {
    this.onlineCourse = onlineCourse;
  }

  @Override
  public void addStudent(Student student) {
    this.onlineCourse.getStudents().add(student);

    if (this.onlineCourse.getStudents().size() > 1) {
      this.onlineCourse.changeState(new PrivateState(this.onlineCourse));
    }
  }

  @Override
  public void addReview(Student student, String review) {
    throw new UnsupportedOperationException("드래프트 상태에서는 리뷰를 남길 수 없습니다.");
  }
  
  @Override
  public String toString() {
    return "<Draft 상태>";
  }
  
}
