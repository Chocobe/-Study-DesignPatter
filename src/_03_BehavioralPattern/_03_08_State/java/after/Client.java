package _03_BehavioralPattern._03_08_State.java.after;

public class Client {
  
  public static void main(String[] args) {
    OnlineCourse onlineCourse = new OnlineCourse();
    State draftState = new DraftState(onlineCourse);
    onlineCourse.changeState(draftState);

    Student kim = new Student("영우");
    kim.addPrivate(onlineCourse);
    
    // onlineCourse.addReview(kim, "Hello World"); // 에러 throw
    onlineCourse.addStudent(kim);

    onlineCourse.changeState(new PrivateState(onlineCourse));
    onlineCourse.addReview(kim, "Hello World");

    Student chocobe = new Student("Chocobe");
    chocobe.addPrivate(onlineCourse);
    onlineCourse.addStudent(chocobe);

    System.out.println("\n");
    System.out.println(onlineCourse.getState());
    System.out.println(onlineCourse.getReviews());
    System.out.println(onlineCourse.getStudents());
  }
  
}
