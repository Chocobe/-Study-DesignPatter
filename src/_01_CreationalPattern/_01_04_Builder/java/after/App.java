package _01_CreationalPattern._01_04_Builder.java.after;

import java.time.LocalDate;

public class App {
  public static void main(String[] args) {
    System.out.println("");
    
    testBuilder();
    
    System.out.println("\n");
    
    testBuilderDirector();
    
    System.out.println("");
  }

  // Builder 테스트
  public static void testBuilder() {
    DefaultTourPlanBuilder builder = new DefaultTourPlanBuilder();

    TourPlan shortTrip = builder.initTourPlan()
      .title("짧은 여행")
      .startDate(LocalDate.of(2021, 11, 23))
      .build();

    System.out.println(shortTrip.toString());

    TourPlan longTrip = builder.initTourPlan()
      .title("긴 여행")
      .startDate(LocalDate.of(2021, 12, 24))
      .nightsAndDays(2, 3)
      .whereToStay("우리집")
      .addPlan(0, "KTX 타기")
      .addPlan(1, "늦잠 자기")
      .addPlan(2, "SRT 타기")
      .build();

    System.out.println(longTrip.toString());
  }

  // Builder Director 테스트
  public static void testBuilderDirector() {
    TourDirector director = new TourDirector(new DefaultTourPlanBuilder());

    TourPlan shortTrip = director.createShortTrip();
    System.out.println(shortTrip.toString());

    TourPlan longTrip = director.createLongTrip();
    System.out.println(longTrip.toString());
  }
}
