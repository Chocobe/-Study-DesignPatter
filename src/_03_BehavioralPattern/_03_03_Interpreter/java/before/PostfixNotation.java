package _03_BehavioralPattern._03_03_Interpreter.java.before;

import java.util.Stack;

public class PostfixNotation {

  private String expression;

  public PostfixNotation(String expression) {
    this.expression = expression;
  }

  public void calculate() {
    Stack<Integer> numbers = new Stack<>();

    for(char c: this.expression.toCharArray()) {
      switch(c) {
        case '+': {
          numbers.push(numbers.pop() + numbers.pop());
          break;
        }

        case '-': {
          int rhs = numbers.pop();
          int lhs = numbers.pop();
          numbers.push(lhs - rhs);
          break;
        }

        default: {
          numbers.push(Integer.parseInt(c + ""));
        }
      }
    }

    System.out.println(numbers.pop());
  }

  public static void main(String[] args) {
    PostfixNotation postfixNotation = new PostfixNotation("123+-");
    postfixNotation.calculate();
  }
  
}
