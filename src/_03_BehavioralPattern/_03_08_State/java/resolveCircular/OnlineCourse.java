package _03_BehavioralPattern._03_08_State.java.resolveCircular;

import java.util.ArrayList;
import java.util.List;

public class OnlineCourse {

  private State state;
  
  private List<Student> students;

  private List<String> reviews;

  public OnlineCourse() {
    this.students = new ArrayList<>();
    this.reviews = new ArrayList<>();
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

  public void addStudent(Student student) {
    this.state.addStudent(student, this);
  }

  public void addStudentDirectly(Student student) {
    this.students.add(student);
  }

  public void addReview(Student student, String review) {
    this.state.addReview(student, review, this);
  }

  public void addReviewDirectly(String review) {
    this.reviews.add(review);
  }

  public boolean isRegisteredStudent(Student student) {
    return this.students.contains(student);
  }

  public void changeState(State state) {
    this.state = state;
  }
  
}
