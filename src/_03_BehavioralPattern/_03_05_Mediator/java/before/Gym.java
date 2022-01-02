package _03_BehavioralPattern._03_05_Mediator.java.before;

public class Gym {

  private CleaningService cleaningService;

  public void clean() {
    cleaningService.clean(this);
  }
  
}
