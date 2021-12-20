package _03_BehavioralPattern._03_03_Interpreter.java.after;

import java.util.Stack;

public class PostfixParser {

  public static PostfixExpression parse(String expression) {
    Stack<PostfixExpression> stack = new Stack<>();

    for (Character c: expression.toCharArray()) {
      stack.push(createExpression(c, stack));
    }

    return stack.pop();
  }

  private static PostfixExpression createExpression(Character c, Stack<PostfixExpression> stack) {
    switch(c) {
      case '+': {
        return new PlusExpression(stack.pop(), stack.pop());
      }

      case '-': {
        PostfixExpression rhs = stack.pop();
        PostfixExpression lhs = stack.pop();
        return new MinusExpression(lhs, rhs);
      }

      default: {
        return new VariableExpression(c);
      }
    }
  }
  
}
