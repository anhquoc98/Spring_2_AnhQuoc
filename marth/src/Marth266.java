import java.util.HashMap;
import java.util.Map;

public class Marth266 {
    public static void main(String[] args) {
        String str = "acddawqa";
        Map<Character, Integer> stringIntegerMap = new HashMap<>();
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if (stringIntegerMap.containsKey(str.charAt(i))) {
                count = stringIntegerMap.get(str.charAt(i));
                stringIntegerMap.put(str.charAt(i), count+1);
            }
            else {
                stringIntegerMap.put(str.charAt(i),1);
            }
        }
        System.out.println(stringIntegerMap.entrySet());
    }
}
