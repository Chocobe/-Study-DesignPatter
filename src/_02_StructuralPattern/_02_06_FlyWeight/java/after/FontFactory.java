package _02_StructuralPattern._02_06_FlyWeight.java.after;

import java.util.HashMap;
import java.util.Map;

public class FontFactory {
  
  private Map<String, Font> cache = new HashMap<String, Font>();

  public Font getFont(String font) {
    if(cache.containsKey(font)) {
      return cache.get(font);
    } else {
      String[] fontInfo = font.split(":");
      Font newFont = new Font(fontInfo[0], Integer.parseInt(fontInfo[1]));
      cache.put(font, newFont);

      return newFont;
    }
  }
  
}
