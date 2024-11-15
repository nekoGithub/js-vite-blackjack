/**
 * Esta funcion crea el valor de una carta
 * @param {int} carta 
 * @returns retorna el valor de una carta
 */
export const valorCarta = ( carta ) => {
    if(!carta) throw new Error("carta debe ser obligatorio");
    
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}