import java.util.ArrayList;
import java.util.List;

public class ThuatToan3 {
    public static void main(String[] args) {
        int numb =15;
        List<Integer> integerList=new ArrayList<>();
       while (numb!=0){
           int numb1=numb%2;
           integerList.add(numb1);
           numb=numb/2;
       }
        System.out.println(integerList);
    }
}
