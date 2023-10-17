public class Marth271 {
    public static void main(String[] args) {
        int a = 0;
        int b = 1;
        while (a < 100) {
            System.out.println(a);
            int num = a + b;
            a = b;
            b = num;

        }
    }
}
