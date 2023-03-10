function insert(entrada)
{
   var numero= document.getElementById('resultado').innerHTML ;
   document.getElementById('resultado').innerHTML = numero+entrada;
}
 function clean(){
    document.getElementById('resultado').innerHTML=('');
 }

 function back(){
    var every= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = every.substring(0,every.length -1);
}

function calculo(){
    var every= document.getElementById('resultado').innerHTML;
    if(every){
    document.getElementById('resultado').innerHTML=eval(every);
    }else{
            document.getElementById('resultado').innerHTML="digite..."
        }
    }

