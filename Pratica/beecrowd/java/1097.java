public class 1097 {
    public static void main(String[] args){

    int i = 1;
    int j = 7;
    int n = 5;
    do { 
        System.out.println("I="+ i + " " +"J=" + j);
        if(j==n){
            i+=2;
            j+=5;
            n+=2;
        }
        j-=1;
    } while (i<10);
}
}
