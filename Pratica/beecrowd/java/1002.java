
import java.util.Scanner;

public class 1002 {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        double pi = 3.14159f;

        double raio = sc.nextDouble();

        double a = (pi * (raio * raio));

        System.out.printf("A=%.4f%n", a);

        sc.close();
    }
    
}
