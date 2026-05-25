public class 1096 {
    public static void main(String[] args){

    int i = 1;
    int j = 7;
    do { 
        System.out.println("I="+ i + " " +"J=" + j);
        
        if(j==5){
            i+=2;
            j+=3;
        }
        j-=1;
    } while (i<10);
}
}
