import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Marth269 {
    public static void main(String[] args) {
        int[] num = {1, 3, 2, 4, 5};
        List<Integer> integers = new ArrayList<>();
        for (int i = 0; i < num.length; i++) {
            integers.add(num[i]);
        }
        Collections.sort(integers,Collections.reverseOrder());
        int sumLargest = 0;
        int sumSmallest = 0;
        for (int i = 0; i < integers.size() - 1; i++) {
            sumLargest += integers.get(i);
        }
        System.out.println("Tổng 4 số lớn nhất: " +sumLargest);
    }
}
