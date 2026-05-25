const n = 7

let i = 1
let vezes = 1;

while(i <= n){
    
    if(vezes % 4 == 0){
        console.log('PUM')
        i++
    } else {
        process.stdout.write(vezes + ' ')
    }    
    vezes++
}
