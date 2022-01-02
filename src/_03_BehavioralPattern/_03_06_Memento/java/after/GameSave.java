package _03_BehavioralPattern._03_06_Memento.java.after;

public class GameSave {
  
  private int blueTeamScore;

  private int redTeamScore;

  public GameSave(int blueTeamScore, int redTeamScore) {
    this.blueTeamScore = blueTeamScore;
    this.redTeamScore = redTeamScore;
  }

  public int getBlueTeamScore() {
    return this.blueTeamScore;
  }
  public int getRedTeamScore() {
    return this.redTeamScore;
  }
  
}
