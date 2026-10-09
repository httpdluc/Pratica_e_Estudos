import java.io.IOException;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws IOException {

        Scanner sc = new Scanner(System.in);

        double[] N = new double[100];
        double X = sc.nextDouble();

        for (int i = 0; i < N.length; i++) {
            N[i] = X;
            X /= 2;
        }

        for (int i = 0; i < N.length; i++) {
            System.out.printf("N[%d] = %.4f%n", i, N[i]);
        }

        sc.close();
    }
}
