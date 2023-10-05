import java.util.Objects;

public class Marth263 {
    public static void main(String[] args) {
        String str = "Hello word";
        String[] str1 = str.split("");
        String seach = "o";
        int count = 0;
        for (int i = 0; i < str1.length; i++) {
            if (Objects.equals(str1[i], seach)) {
                count++;
            }
        }
        System.out.println("số lần xuất hiện " + count);
    }
}
