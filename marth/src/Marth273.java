import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Marth273 {
    public static void main(String[] args) {
        int num=500;
        List<Integer> integerList=new ArrayList<>();
        while (num !=0){
            int a =num%8;
            integerList.add(a);
            num=num/8;
        }
        Collections.reverse(integerList);
        System.out.println(integerList);
    }
}
