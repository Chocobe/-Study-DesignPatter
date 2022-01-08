package _03_BehavioralPattern._03_08_State.java.resolveCircular;

public class Client {
  
  public static void main(String args[]) {
    OnlineCourse onlineCourse = new OnlineCourse();
    onlineCourse.changeState(new PublicState());
    onlineCourse.changeState(new PrivateState());
    onlineCourse.changeState(new DraftState());

    // 학생 kim
    Student kim = new Student("KIM");
    kim.addMyOnlineCourse(onlineCourse);
    onlineCourse.addStudent(kim);

    onlineCourse.addReview(kim, "Hello World");
    onlineCourse.addStudent(kim);

    // 학생 chocobe
    Student chocobe = new Student("초코비");
    chocobe.addMyOnlineCourse(onlineCourse);
    onlineCourse.addStudent(chocobe);

    onlineCourse.addReview(chocobe, "안녕하세요");

    System.out.println(onlineCourse.getState());
    System.out.println(onlineCourse.getStudents());
    System.out.println(onlineCourse.getReviews());
  }
  
}
