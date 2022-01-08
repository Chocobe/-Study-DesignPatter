package _03_BehavioralPattern._03_10_TemplateMethod.java.TemplateCallback;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileProcessor {
  
  private String path;

  public FileProcessor(String path) {
    this.path = path;
  }

  public int process(Callback callback) {
    try (BufferedReader reader = new BufferedReader(new FileReader(this.path))) {
      int result = callback.getInitValue();
      String line = null;

      while((line = reader.readLine()) != null) {
        result = callback.getResult(result, Integer.parseInt(line));
      }

      return result;
    } catch(IOException e) {
      throw new IllegalArgumentException(this.path + " 에 파일이 존재하지 않습니다.");
    }
  }
  
}
