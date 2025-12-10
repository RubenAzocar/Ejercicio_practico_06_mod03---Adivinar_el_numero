// Número secreto aleatorio entre 1 y 10
const secreto = Math.floor(Math.random() * 10) + 1;
console.log('Número secreto:', secreto); // Para depuración

const usados = [];

// Función para verificar si un número ya fue usado
function yaUsado(numero, lista) {
    return lista.includes(numero);
}

// Iniciar juego
alert('¡Bienvenido! Adivina el número del 1 al 10. Tienes 3 intentos.');

let intentos = 0;

while (intentos < 3) {
    const entrada = prompt(`Intento ${intentos + 1} de 3\nIngresa un número del 1 al 10:`);

    if (entrada === null) {
        alert('Juego cancelado.');
        break;
    }

    const numero = parseInt(entrada);

    // Validar rango
    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert('Entrada inválida. Debes ingresar un número entre 1 y 10.');
        console.log('Entrada inválida:', entrada);
        continue;
    }

    // Validar repetido
    if (yaUsado(numero, usados)) {
        alert(`Ya usaste el número ${numero}. Elige otro.`);
        console.log('Número repetido:', numero);
        continue;
    }

    usados.push(numero);
    intentos++;
    console.log(`Intento ${intentos}: ${numero}`);

    // Actualizar historial en la página
    document.getElementById('historial').innerHTML = `<strong>Historial de intentos:</strong> ${usados.join(', ')}`;

    // Verificar acierto
    if (numero === secreto) {
        alert(`¡FELICITACIONES! Adivinaste el número: ${secreto}\nLo lograste en ${intentos} intento(s).`);
        console.log('¡Juego ganado!');
        break;
    } else {
        const restantes = 3 - intentos;
        if (restantes > 0) {
            const pista = numero < secreto ? 'MAYOR' : 'MENOR';
            alert(`Incorrecto. El número es ${pista}. Te quedan ${restantes} intento(s).`);
        } else {
            alert(`Se acabaron los intentos. El número era: ${secreto}`);
        }
    }
}
