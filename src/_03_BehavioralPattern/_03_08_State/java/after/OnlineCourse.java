package _03_BehavioralPattern._03_08_State.java.after;

import java.util.ArrayList;
import java.util.List;

public class OnlineCourse {
  
  private State state;
  
  private List<Student> students = new ArrayList<>();

  private List<String> reviews = new ArrayList<>();

  public void addStudent(Student student) {
    this.state.addStudent(student);
  }

  public void addReview(Student student, String review) {
    this.state.addReview(student, review);
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
