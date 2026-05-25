import java.util.Scanner;

public class 1070{
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int valor = sc.nextInt();
        int x = 0;

        while(x < 6){
            if(valor%2!=0){
                System.out.println(valor);    
            }else{
                valor = valor+1;
                System.out.println(valor);
            }
            valor = valor + 2;
            x++;
        }
        sc.close();
    }
}
