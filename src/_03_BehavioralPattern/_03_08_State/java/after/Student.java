package _03_BehavioralPattern._03_08_State.java.after;

import java.util.HashSet;
import java.util.Set;

public class Student {
  
  private String name;

  private Set<OnlineCourse> onlineCourses = new HashSet<>();
  
  public Student(String name) {
    this.name = name;
  }

  public boolean isAvailable(OnlineCourse onlineCourse) {
    return this.onlineCourses.contains(onlineCourse);
  }

  public void addPrivate(OnlineCourse onlineCourse) {
    this.onlineCourses.add(onlineCourse);
  }

  @Override
  public String toString() {
    return "\nStudent: { "
      + " name: " + this.name
      + " } ";
  }
  
}
