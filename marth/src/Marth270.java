public class Marth270 {
    public static void main(String[] args) {
        int num = 3527;
        int n = 0;
        while (num != 0) {
            int soChia= num%10;
            n=n*10+soChia;
            num /= 10;
        }
        System.out.println(n);
    }
}
