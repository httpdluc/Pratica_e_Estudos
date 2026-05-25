import java.util.Scanner;
public class 1060{
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        double d = sc.nextDouble();
        double e = sc.nextDouble();
        int f = sc.nextInt();

        int n=0;

        if(a>0){
            n = n +1;
        }if(b>0){
            n = n +1;
        }if(c>0){
            n = n +1;
        }if(d>0){
            n = n +1;
        }if(e>0){
            n = n +1;
        }if(f>0){
            n = n +1;
        }

        System.out.println(n+" valores positivos");
        sc.close();
    }
}
