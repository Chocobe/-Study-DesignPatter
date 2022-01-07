package _03_BehavioralPattern._03_08_State.java.before;

public class Client {

  public static void main(String[] args) {
    Student student = new Student("영우");
    OnlineCourse onlineCourse = new OnlineCourse();

    Student chocobe = new Student("Chocobe");
    chocobe.addPrivateClass(onlineCourse);

    onlineCourse.addStudent(student);
    onlineCourse.changeState(OnlineCourse.State.PRIVATE);

    onlineCourse.addStudent(chocobe);

    onlineCourse.addReview("Hello World", student);

    System.out.println(onlineCourse.getState());
    System.out.println(onlineCourse.getStudents());
    System.out.println(onlineCourse.getReviews());
  }
  
}
