let percorrenzaKm = prompt('Numero di km che vuoi percorrere?')
console.log(percorrenzaKm);

if (isNaN(percorrenzaKm)){
    alert('inserire solo numeri')
}

let userAge = prompt("Età del passegero");
console.log(userAge);

if (isNaN(userAge)){
    alert('inserire solo numeri')
}

let prezzoDelViaggio = (percorrenzaKm*0.21);
console.log(prezzoDelViaggio);

let dcVecchio = (ticketPrice / 100 * 40);
let dcGiovane = (ticketPrice / 100 * 20);

if (userAge >= 65){
console.log(prezzoDelViaggio - dcVecchio);

}else if (userAge < 65 || userAge > 18){
    console.log(percorrenzaKm * 0.21);
    
}if (userAge < 18){
    console.log(prezzoDelViaggio - dcGiovane);
} 

document.getElementById('treno').innerHTML = ((prezzoDelViaggio - dcGiovane,prezzoDelViaggio - dcVecchio,prezzoDelViaggio ));
