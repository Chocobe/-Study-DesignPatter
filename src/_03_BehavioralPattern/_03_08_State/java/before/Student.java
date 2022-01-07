package _03_BehavioralPattern._03_08_State.java.before;

import java.util.ArrayList;
import java.util.List;

public class Student {

  private String name;

  public Student(String name) {
    this.name = name;
  }

  private List<OnlineCourse> privateClasses = new ArrayList<>();

  public void addPrivateClass(OnlineCourse onlineCourse) {
    this.privateClasses.add(onlineCourse);
  }
  
  public boolean isEnabledForPrivateClass(OnlineCourse onlineCourse) {
    return this.privateClasses.contains(onlineCourse);
  }
  
  @Override
  public String toString() {
    return "Student { "
      + "name: \"" + this.name + "\""
      + " }";
  }
  
}
