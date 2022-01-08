package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateMethod;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public abstract class FileProcessor {

  private String path;

  private int initValue;

  public FileProcessor(String path, int initValue) {
    this.path = path;
    this.initValue = initValue;
  }

  public int process() {
    try (BufferedReader reader = new BufferedReader(new FileReader(this.path))) {
      String line = null;
      int result = this.initValue;

      while((line = reader.readLine()) != null) {
        result = this.getResult(result, Integer.parseInt(line));
      }

      return result;
    } catch (IOException e) {
      throw new IllegalArgumentException(this.path + " 에 해당하는 파일이 없습니다.");
    }
  }

  protected abstract int getResult(int result, int value);
  
}
