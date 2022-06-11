let rockPaperScissors = ['piedra', 'papel', 'tijera'];

let resultado = 'Nadie, porque introdujiste cualquier cosa, escribí bien, por favor.';

function computerSelection(arr){ //3
    
    let eleccionComputadora = Math.round(Math.random()*arr.length-1);


    return rockPaperScissors[eleccionComputadora];  
    
}


function playerSelection(){

    let eleccionUsuario = window.prompt();
        // validacion de cada elemento por si se escribio mal
    if (

        eleccionUsuario === 'Piedra' ||
        eleccionUsuario === 'PIEDRA' ||
        eleccionUsuario === 'pIEDRA' ||
        eleccionUsuario === 'roca'   ||
        eleccionUsuario === 'ROCA' ||
        eleccionUsuario === 'Roca' ||
        eleccionUsuario === 'rOCA' 

    )
        eleccionUsuario = 'piedra';

    if (

        eleccionUsuario === 'Papel' ||
        eleccionUsuario === 'pAPEL' ||
        eleccionUsuario === 'PAPEL' ||
        eleccionUsuario === 'paper'   ||
        eleccionUsuario === 'Paper' ||
        eleccionUsuario === 'PAPER' ||
        eleccionUsuario === 'pAPER' 

    )
        eleccionUsuario = 'papel';


    if (

        eleccionUsuario === 'Tijera' ||
        eleccionUsuario === 'TIJERA' ||
        eleccionUsuario === 'tIJERA' ||
        eleccionUsuario === 'tijeras' ||
        eleccionUsuario === 'Tijeras' ||
        eleccionUsuario === 'TIJERAS' ||
        eleccionUsuario === 'tIJERAS'        

    )  
        eleccionUsuario = 'tijera';    

    // console.log("ejecutando playerSelection()");
    return eleccionUsuario;


}



function juegaRonda(){ // 4


    let jugador = playerSelection();
        // console.log(jugador);

    let computadora = computerSelection(rockPaperScissors);
        // console.log(computadora);
    

    //switch aca?
    


    if (jugador == 'piedra' && computadora == 'piedra')
        resultado = 'Nadie, fue un empate';

        else if(jugador == 'piedra' && computadora == 'papel')
            resultado = 'la computadora';

        else if( jugador == 'piedra' && computadora == 'tijera')
            resultado = 'el humanoide';


        else if( jugador == 'papel' && computadora == 'papel')
            resultado = 'Nadie, fue un empate';

        else if(jugador == 'papel' && computadora == 'piedra')
            resultado = 'el humanoide';
        
        else if (jugador == 'papel' && computadora == 'tijera')
            resultado = 'la computadora';


        else if(jugador == 'tijera' && computadora == 'tijera')
            resultado = 'Nadie, fue un empate';

        else if(jugador == 'tijera' && computadora == 'papel')
            resultado = 'el humanoide';

        else if (jugador == 'tijera' && computadora == 'piedra')
            resultado = 'la computadora';






    /*  switch (jugador && computadora){        

        case(jugador == 'piedra' && computadora == 'papel'):
            console.log('dentro de switch 1');
            resultado = 'gana pc';
            break;
        case(jugador == 'piedra' && computadora == 'piedra'):
        console.log('dentro de switch 2');
            resultado = 'empate';
            break;   
        case(jugador == 'piedra' && computadora == 'tijera'):
        console.log('dentro de switch 3');
            resultado = 'gana jugador';
            break;

        case(jugador == 'papel' && computadora == 'papel'):
        console.log('dentro de switch 4');
            resultado = 'empate';
            break; 
        case(jugador == 'papel' && computadora == 'tijera'):
        console.log('dentro de switch 5');
            resultado = 'gana pc';
            break;
        case(jugador == 'papel' && computadora == 'piedra'):
        console.log('dentro de switch 6');
            resultado = 'gana jugador';
            break;
        case(jugador == 'tijera' && computadora == 'tijera'):
        console.log('dentro de switch 7');
            resultado = 'empate';
            break;
        case(jugador == 'tijera' && computadora == 'papel'):
        console.log('dentro de switch 8');
            resultado = 'gana jugador';
            break;
        case(jugador == 'tijera' && computadora == 'piedra'):
        console.log('dentro de switch 9');
            resultado = 'gana pc';
            break;

    }  */
    
}

function game(){ // maximo 5 rondas, no hay 'al mejor de'

    let roundCounter = 1; //asi tiene que estar para que le promptee 5 veces exactas al user

    while(roundCounter<=20){ //EN 2 PA TEST

        juegaRonda();

        // let resultadoRonda = 

        console.log('El ganador de la ronda es : ' + resultado);

        roundCounter++; 

    }    

}

game();