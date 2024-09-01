const vehicle1 = ('Dê um nome para um veículo.')
const vehicle2 = ('Dê outro nome para outro veículo.')
const speed1 = parseFloat(prompt(`Determine a velocidade de ${vehicle1}`));
const speed2 = parseFloat(prompt(`Determine a velocidade de ${vehicle2}`));

if (speed1 > speed2) {
    console.log(`${vehicle1} está a ${speed1} km/h, e é mais rápido que o ${vehicle2}, que está a ${speed2} km/h.`);
} else if (speed1 < speed2) {
    console.log(`${vehicle2} está a ${speed2} km/h, e é mais rápido que o ${vehicle1}, que está a ${speed1} km/h.`);
} else {
    console.log(`Tanto ${vehicle1} quanto ${vehicle2} estão a ${speed1} km/h.`);
}
