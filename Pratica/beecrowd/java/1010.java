import java.util.Scanner;

public class 1010{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);
        
        int cod1 = sc.nextInt();
        int pec1 = sc.nextInt();
        float val1 = sc.nextFloat();
        
        int cod2 = sc.nextInt();
        int pec2 = sc.nextInt();
        float val2 = sc.nextFloat();
        
        float total = (pec1 * val1)+(pec2*val2);
        
        System.out.printf("VALOR A PAGAR: R$ %.2f\n", total);
        
        sc.close();
    }
}