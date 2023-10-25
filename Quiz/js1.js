//Validar formulario
let btnEvaluar = document.querySelector("#evaluar");
btnEvaluar.onclick=()=>{
    var correctas=[1 ,4 ,3 ,2,4 ,1 ,4 ,4,1 ,1];
    var aciertos=0;
for(i=1; i<=7; i++){
    let r1=document.querySelector("#p" +i+ "r1");
    let r2=document.querySelector("#p" +i+ "r2");
    let r3=document.querySelector("#p" +i+ "r3");
    let r4=document.querySelector("#p" +i+ "r4");
    let r5=document.querySelector("#p" +i+ "r5");
    let r6=document.querySelector("#p" +i+ "r6");
    let r7=document.querySelector("#p" +i+ "r7");
    let r8=document.querySelector("#p" +i+ "r8");
    let r9=document.querySelector("#p" +i+ "r9");
    let r10=document.querySelector("#p" +i+ "r10");

if(!r1.checked && !r2.checked && !r3.checked && !r4.checked ){
    Swal.fire({
        icon:'error',
        title:'ERROR',
        text:'RESPONDE TODAS LAS PREGUNTAS',
        footer:'Diagnostico'});
    return;
    
}
    var correcta=document.querySelector("#p"+i+"r"+correctas[i-1]);
    if(correcta.checked){
        aciertos++;
    }}


    if(aciertos>=7){
        Swal.fire({icon:'success',title:'Exelente, Tienes buenas bases en la musica',});
    }else{
        Swal.fire({icon:'success',title:'Estudia mas',text:'  ',footer:'Quiz'});
    }
}


let btnBorrar= document.querySelector("#borrar");
btnBorrar.onclick=()=>{
    for(i=1; i<=10; i++){
        document.querySelector("#p" +i+ "r1").checked=false;
        document.querySelector("#p" +i+ "r2").checked=false;
        document.querySelector("#p" +i+ "r3").checked=false;
        document.querySelector("#p" +i+ "r4").checked=false;  
                            
    }
}


