import java.util.Scanner;

public class 1017{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        double horas = sc.nextDouble();
        double kmh =  sc.nextDouble();

        double kilometros = 12;

        double resultado = (horas * kmh) / kilometros;

        System.out.printf("%.3f\n", resultado);
        sc.close();
    }
}