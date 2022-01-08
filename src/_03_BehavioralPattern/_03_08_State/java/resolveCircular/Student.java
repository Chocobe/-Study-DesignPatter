package _03_BehavioralPattern._03_08_State.java.resolveCircular;

import java.util.ArrayList;
import java.util.List;

public class Student {
  
  private String name;

  private List<OnlineCourse> myOnlineCourses;
  
  public Student(String name) {
    this.name = name;
    this.myOnlineCourses = new ArrayList<>();
  }

  public String getName() {
    return this.name;
  }

  public boolean isAvailable(OnlineCourse onlineCourse) {
    return this.myOnlineCourses.contains(onlineCourse);
  }

  public void addMyOnlineCourse(OnlineCourse onlineCourse) {
    this.myOnlineCourses.add(onlineCourse);
  }

  @Override
  public String toString() {
    return "Student: { "
      + "name: " + this.name
      + " }";
  }
  
}
