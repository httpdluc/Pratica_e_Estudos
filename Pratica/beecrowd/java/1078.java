import java.util.Scanner;

public class 1078 {
    public static void main(String[] args){
        Scanner sc = new Scanner (System.in);
        int valor = sc.nextInt();

        for(int x = 1; x <= 10; x++){
            int res = valor * x;
            System.out.println(x + " x " + valor + " = " + res);
        }
        sc.close();
    }
}
