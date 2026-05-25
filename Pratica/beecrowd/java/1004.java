import java.util.Scanner;

public class 1004 {
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        
        int a = sc.nextInt();
        int b = sc.nextInt();
        int prod = a * b;

        System.out.printf("PROD = %d%n", prod);

        sc.close();
    }
}
