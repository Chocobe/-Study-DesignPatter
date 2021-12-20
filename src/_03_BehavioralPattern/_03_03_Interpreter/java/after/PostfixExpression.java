package _03_BehavioralPattern._03_03_Interpreter.java.after;

import java.util.Map;

public interface PostfixExpression {
  
  int interpret(Map<Character, Integer> context);
  
}
