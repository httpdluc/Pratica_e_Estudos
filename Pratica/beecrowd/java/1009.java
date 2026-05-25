import java.util.Scanner;

public class 1009{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        String nome = sc.nextLine();
        double salario = sc.nextDouble();
        double vendido = sc.nextDouble();
        
        double comissao = 0.15;
        
        double total = (salario)+(vendido*comissao);
        
        System.out.printf("TOTAL = R$ %.2f\n", total);
        
        sc.close();
    }
}