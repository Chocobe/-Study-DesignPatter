package _03_BehavioralPattern._03_08_State.java.before;

import java.util.ArrayList;
import java.util.List;

public class OnlineCourse {

  public enum State {
    DRAFT, PUBLISHED, PRIVATE
  }

  private State state = State.DRAFT;

  private List<Student> students = new ArrayList<>();

  private List<String> reviews = new ArrayList<>();

  public void addStudent(Student student) {
    if (this.state == State.DRAFT || this.state == State.PUBLISHED) {
      this.students.add(student);
    } else if (this.state == State.PRIVATE && this.availableTo(student)) {
      this.students.add(student);
    } else {
      throw new UnsupportedOperationException("해당 수업에 학생을 추가할 수 없습니다.");
    }

    if (this.students.size() > 1) {
      this.state = State.PRIVATE;
    }
  }

  public void addReview(String review, Student student) {
    if (this.state == State.PUBLISHED) {
      this.reviews.add(review);
    } else if (this.state == State.PRIVATE && this.students.contains(student)) {
      this.reviews.add(review);
    } else {
      throw new UnsupportedOperationException("리뷰를 작성할 수 없습니다.");
    }
  }

  private boolean availableTo(Student student) {
    return student.isEnabledForPrivateClass(this);
  }

  public State getState() {
    return this.state;
  }

  public List<Student> getStudents() {
    return this.students;
  }

  public List<String> getReviews() {
    return this.reviews;
  }

  public void changeState(State state) {
    this.state = state;
  }
  
}
