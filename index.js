
const input_peso = document.getElementById('peso');
const input_altura = document.getElementById('altura')

//Controle do cursor de texto nos inputs de dados
input_peso.addEventListener("keyup", ()=>{
    if(input_peso.value!=''){
        input_peso.style.caretColor = "black"
    } else{
        input_peso.style.caretColor = "transparent"
    }
});

input_altura.addEventListener("keyup", ()=>{
    if(input_altura.value!=''){
        input_altura.style.caretColor = "black"
    } else{
        input_altura.style.caretColor = "transparent"
    }
});

function utilitario_mudaCorResultado(corNova){
    document.getElementById('resultado').style.color = corNova
}

let imc = null;
function calcularIMC(){
    const peso = input_peso.value;
    const altura = input_altura.value;

    if(peso!='' && altura!='' && altura!=0){    //se entradas válidas
        imc = (peso/Math.pow(altura,2)).toFixed(1);
        let resultado = ""

        if(imc<16){  
            resultado = "Magreza Grau III";
            utilitario_mudaCorResultado("blue"); 
        } 
        else if(imc<17){  
            resultado = "Magreza Grau II"   
            utilitario_mudaCorResultado("blue"); 
        }
        else if(imc<18.5){  
            resultado = "Magreza Grau I"   
            utilitario_mudaCorResultado("blue"); 
        }
        else if(imc<25){  
            resultado = "Adequado"  
            utilitario_mudaCorResultado("green");  
        }
        else if(imc<30){  
            resultado = "Obesidade Grau I"  
            utilitario_mudaCorResultado("brown"); 
        }
        else if(imc<35){  
            resultado = "Obesidade Grau I" 
            utilitario_mudaCorResultado("brown"); 
        }
        else{  
            resultado = "Obesidade Grau III"   
            utilitario_mudaCorResultado("brown"); 
        }

        document.getElementById('resultado').value = `Sua classificação é: ${resultado}`;
        document.getElementById("ajuda").disabled = false;

    } else{
        utilitario_mudaCorResultado("red"); 
        document.getElementById('resultado').value = `❌Preencha todos os campos!`;
    }
}

function resetarIMC(){
    imc = 0;
    document.getElementById("ajuda").disabled = true;
}

function detalhesIMC(){
    alert(`Seu IMC é: ${imc}.\nEsse resultado é obtido por peso/altura^2`);
}