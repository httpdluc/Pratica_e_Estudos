import java.util.Scanner;

public class 1011{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        int raio = sc.nextInt();
        double pi = 3.14159;
        
        double calculo = (4.0/3.0) * pi * Math.pow(raio,3);
        
        System.out.printf("VOLUME = %.3f\n", calculo);
        
        sc.close();
    }
}