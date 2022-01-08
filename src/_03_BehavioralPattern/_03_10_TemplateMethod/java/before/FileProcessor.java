package _03_BehavioralPattern._03_10_TemplateMethod.java.before;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileProcessor {

  private String path;

  public FileProcessor(String path) {
    this.path = path;
  }

  public int processor() {
    try (BufferedReader reader = new BufferedReader(new FileReader(this.path))) {
      int result = 0;
      String line = null;

      while((line = reader.readLine()) != null) {
        result += Integer.parseInt(line);
      }

      return result;
    } catch(IOException e) {
      throw new IllegalArgumentException(this.path + " 에 해당하는 파일이 없습니다.");
    }
  }
  
}
