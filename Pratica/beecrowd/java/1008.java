import java.util.Scanner;

public class 1008{
    public static void main(String[] args){
            
            Scanner sc = new Scanner(System.in);

            int funcionario = sc.nextInt();
            int salario = sc.nextInt();
            double horasTrabalhadas = sc.nextDouble();
            
            double recebera = salario * horasTrabalhadas;
            
            System.out.printf("NUMBER = %d\nSALARY = U$ %.2f\n",funcionario,recebera);
            
            sc.close();
    }
}