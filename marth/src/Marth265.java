import java.util.HashMap;
import java.util.Map;

public class Marth265 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int[] arr1 = {5, 6, 7, 8, 9, 10};
        int count = 0;
        Map<Integer, Integer> integerMap = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            integerMap.put(arr[i], count++);
        }
        for (int i = 0; i < arr1.length; i++) {
            if (integerMap.containsKey(arr[i])) {
                integerMap.put(arr1[i], count++);
            }
        }
        System.out.println(integerMap.keySet());
    }
}
