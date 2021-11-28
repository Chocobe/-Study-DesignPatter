package _02_StructuralPattern._02_02_Bridge.java.after;

public class App {
  
  public static void main(String[] args) {
    Champion KDA아리 = new 아리(new KDA());
    KDA아리.move();
    KDA아리.skillQ();
    KDA아리.skillW();
    KDA아리.skillE();
    KDA아리.skillR();

    Champion poolParty아리 = new 아리(new PoolParty());
    poolParty아리.move();
    poolParty아리.skillQ();
    poolParty아리.skillW();
    poolParty아리.skillE();
    poolParty아리.skillR();

    Champion KDA아칼리 = new 아칼리(new KDA());
    KDA아칼리.move();
    KDA아칼리.skillQ();
    KDA아칼리.skillW();
    KDA아칼리.skillE();
    KDA아칼리.skillR();

    Champion poolParty아칼리 = new 아칼리(new PoolParty());
    poolParty아칼리.move();
    poolParty아칼리.skillQ();
    poolParty아칼리.skillW();
    poolParty아칼리.skillE();
    poolParty아칼리.skillR();

    Champion KDA카이사 = new 카이사(new KDA());
    KDA카이사.move();
    KDA카이사.skillQ();
    KDA카이사.skillW();
    KDA카이사.skillE();
    KDA카이사.skillR();

    Champion poolParty카이사 = new 카이사(new PoolParty());
    poolParty카이사.move();
    poolParty카이사.skillQ();
    poolParty카이사.skillW();
    poolParty카이사.skillE();
    poolParty카이사.skillR();
  }
  
}
