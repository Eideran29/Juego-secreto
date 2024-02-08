//variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;
//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    //promt metodo para preguntar
     numeroUsuario = parseInt (prompt(`Me indicas un muero entre 1 y ${numeroMaximo} por favor:`));  
     //Lado izquierdo se colocan las variables lado derecho los atributos
    //la variable va al lado izquierdo en este caso let y en el lado derecho el valor que se le va atribuir numeroUsuario
    //alert('Hola Mundo')
    console.log(typeof(numeroUsuario)); 
    //Este codigo realiza la comparacion numeroUsuario == signo de comparacion numeroSecreto 
    if (numeroUsuario == numeroSecreto) {
    //si numeroUsuario es igual numeroSecreto
    //Acertamos, fue verdadera la condicion 
    alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);       //template stream debemos usar comillas invertidas 
    
    }else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        }else {
            alert('El numero secreto es mayor');
        }
        // Incrementamos el contador cuando no acierta 
        //intentos = intentos + 1;
        //intentos += 1;
        intentos ++ ;                            //incrementadores
        //palabraVeces = 'veces'; 
        if (intentos > maximosIntentos ) {
            alert( `Llegaste al numero maximo de intentos ${maximosIntentos} intentos` );
            break;
        }
        
        //La condicion se cumplio 
        //alert('Lo siento, no acertaste el numero'); 
    }
}