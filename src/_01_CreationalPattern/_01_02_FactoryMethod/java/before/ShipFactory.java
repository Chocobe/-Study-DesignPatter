package _01_CreationalPattern._01_02_FactoryMethod.java.before;

public class ShipFactory {
  public static Ship orderShip(String name, String email) {
    // 유효성 검사
    if(name == null || name.isBlank()) {
      throw new IllegalArgumentException("배 이름을 지어주세요.");
    }

    if(email == null || email.isBlank()) {
      throw new IllegalArgumentException("연락처를 남겨주세요");
    }

    prepareFor(name);

    Ship ship = new Ship();
    ship.setName(name);

    // 배이름에 따라, logo 설정
    if(name == "whiteship") {
      ship.setLogo("\uD83D\uDEE5");
    } else if(name == "blackship") {
      ship.setLogo("⚓");
    }

    // 배이름에 따라, color 설정
    if(name == "whiteship") {
      ship.setColor("whiteship");
    } else if(name == "blackship") {
      ship.setColor("black");
    }

    sendEmailTo(email, ship);

    return ship;
  }

  private static void prepareFor(String name) {
    System.out.println(name + " 만들 준비 중");
  }

  private static void sendEmailTo(String email, Ship ship) {
    System.out.println(ship.getName() + " 다 만들었습니다.");
  }
}
