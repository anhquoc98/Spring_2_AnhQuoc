import java.util.HashMap;
import java.util.Map;

public class Marth262 {
    public static void main(String[] args) {
        String str = "abcdde";

        Map<Character, Integer> integerMap = new HashMap<>();
        for (int i = 0; i < str.length(); i++) {

            if (integerMap.containsKey(str.charAt(i))) {
                int count = integerMap.get(str.charAt(i));
                integerMap.put(str.charAt(i), count + 1);
            } else {
                integerMap.put(str.charAt(i), 1);
            }
        }
        System.out.println(integerMap.entrySet());
    }
}
