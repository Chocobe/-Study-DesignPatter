package _03_BehavioralPattern._03_03_Interpreter.java.after;

import java.util.Map;

public class PlusExpression implements PostfixExpression {

  private PostfixExpression lhs;
  private PostfixExpression rhs;

  public PlusExpression(PostfixExpression lhs, PostfixExpression rhs) {
    this.lhs = lhs;
    this.rhs = rhs;
  }
  
  @Override
  public int interpret(Map<Character, Integer> context) {
    return lhs.interpret(context) + rhs.interpret(context);
  }
  
}
