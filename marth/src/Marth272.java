public class Marth272 {
    public static void main(String[] args) {
        int n=11;
        int count=0;
        for (int i = 1; i <=n ; i++) {
            if (n%i ==0){
                count++;
            }
        }
        if (count ==2){
            System.out.println(n+" là số nguyên tố");
        }
        else {
            System.out.println(n+" không phải số nguyên tố");
        }
    }
}
