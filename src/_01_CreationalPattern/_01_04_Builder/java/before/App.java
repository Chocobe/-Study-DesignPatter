package _01_CreationalPattern._01_04_Builder.java.before;

import java.time.LocalDate;
import java.util.ArrayList;

public class App {

  public static void main(String[] args) {
    TourPlan shortTrip = new TourPlan();
    shortTrip.setTitle("짧은 여행");
    shortTrip.setStartDate(LocalDate.of(2021, 11, 23));

    System.out.println(shortTrip.toString());

    TourPlan longTrip = new TourPlan();
    longTrip.setTitle("긴 여행");
    longTrip.setNights(2);
    longTrip.setDays(3);
    longTrip.setStartDate(LocalDate.of(2021, 12, 23));
    longTrip.setWhereToStay("우리집");
    longTrip.setPlans(new ArrayList<>());
    longTrip.addPlan(0, "KTX 타기");
    longTrip.addPlan(0, "저녁 식사");
    longTrip.addPlan(1, "늦잠자기");
    longTrip.addPlan(1, "점심 먹기");
    longTrip.addPlan(1, "놀러 가기");
    longTrip.addPlan(2, "SRT 타기");
    longTrip.addPlan(2, "복귀");

    System.out.println(longTrip.toString());
  }
  
}
