import { pedirCarta, valorCarta, crearCartaHtml } from "./";


/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {htmlElement} puntosHTML elemnto de html para mostrar los puntos 
 * @param {htmlElement} divCartasComputadora elemnto de carta para mostrar los las cartas de computadora
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error("puntosMinimos son necesarios");    
    if(!puntosHTML) throw new Error("puntosHtml son necesarios");    
    if(!divCartasComputadora) throw new Error("puntosHtml son necesarios");    

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}