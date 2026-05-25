import java.util.Scanner;

public class 1016{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int y = sc.nextInt();

        int minutos = y * 2;

        System.out.println( minutos + " minutos");
        sc.close();
    }
}