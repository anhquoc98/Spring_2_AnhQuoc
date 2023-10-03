public class Marth261 {
    public static void main(String[] args) {
        int num = 10;
        int sum = 0;
        int count;

        for (int i = 0; i <= num; i++) {
            count = 0;
            for (int j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                sum += i;
            }
        }
        System.out.println(sum);
    }
}
