import java.util.HashMap;
import java.util.Map;

public class Marth267 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 1, 2, 4, 6, 7, 8, 9, 10};
        int count = 0;
        Map<Integer, Integer> integerMap = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            count = integerMap.get(arr[i]);
            if (integerMap.containsKey(arr[i])) {
                integerMap.put(arr[i], count + 1);
            } else {
                integerMap.put(arr[i], 1);
            }
        }
        System.out.println(integerMap.entrySet());
    }
}
