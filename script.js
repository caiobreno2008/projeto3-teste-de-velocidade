const vehicle1 = 'Carro A'; // Nome do primeiro veículo
const vehicle2 = 'Carro B'; // Nome do segundo veículo
const speed1 = 120; // Velocidade do primeiro veículo (em km/h)
const speed2 = 100; // Velocidade do segundo veículo (em km/h)

if (speed1 > speed2) {
    console.log(`${vehicle1} está a ${speed1} km/h, e é mais rápido que o ${vehicle2}, que está a ${speed2} km/h.`);
} else if (speed1 < speed2) {
    console.log(`${vehicle2} está a ${speed2} km/h, e é mais rápido que o ${vehicle1}, que está a ${speed1} km/h.`);
} else {
    console.log(`Tanto ${vehicle1} quanto ${vehicle2} estão a ${speed1} km/h.`);
}
