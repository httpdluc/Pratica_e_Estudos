import java.util.Scanner;

public class 1019{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int horas, minutos, segundos;

        horas = n / 3600;
        minutos = (n%3600) / 60;
        segundos = (n%60);
        
        System.out.println(horas + ":" + minutos +":"+ segundos);
        sc.close();
    }
}