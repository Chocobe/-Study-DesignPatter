package _03_BehavioralPattern._03_06_Memento.java.after;

public class Game {

  private int blueTeamScore;

  private int redTeamScore;

  public int getBlueTeamScore() {
    return this.blueTeamScore;
  }
  public void setBlueTeamScore(int blueTeamScore) {
    this.blueTeamScore = blueTeamScore;
  }

  public int getRedTeamScore() {
    return this.redTeamScore;
  }
  public void setRedTeamScore(int redTeamScore) {
    this.redTeamScore = redTeamScore;
  }

  public GameSave save() {
    return new GameSave(this.blueTeamScore, this.redTeamScore);
  }

  public void restore(GameSave gameSave) {
    this.blueTeamScore = gameSave.getBlueTeamScore();
    this.redTeamScore = gameSave.getRedTeamScore();
  }
  
}
