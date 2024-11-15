
/**
 * Esta funcion pide una carta del arraya deck
 * @param {Array<String>} deck 
 * @returns {Array<String>} esto retorna una carta del array deck
 */ 
export const pedirCarta = (deck) => {
    if(!deck ) throw new Error("deck es obligatorio");
    
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}