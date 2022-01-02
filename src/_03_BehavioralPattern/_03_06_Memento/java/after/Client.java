package _03_BehavioralPattern._03_06_Memento.java.after;

public class Client {
  
  public static void main(String[] args) {
    Game game = new Game();
    game.setBlueTeamScore(10);
    game.setRedTeamScore(20);

    GameSave gameSave = game.save();

    game.setBlueTeamScore(15);
    game.setRedTeamScore(25);

    game.restore(gameSave);

    System.out.println(game.getBlueTeamScore());
    System.out.println(game.getRedTeamScore());
  }
  
}
