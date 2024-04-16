// creo array di oggetti bici da corsa

const arrayBikes = [
    { name  : "bici 1", 
      weight: 10, 
    },
    { name  : "bici 2", 
      weight: 7, 
    },
    { name  : "bici 3", 
      weight: 9, 
    },
    { name  : "bici 4", 
      weight: 5, 
    },
    { name  : "bici 5", 
      weight: 6, 
    }
];

let lightBike = arrayBikes[0].weight; //number


arrayBikes.forEach((curBike) => {
    if (curBike.weight < lightBike) {
      lightBike = curBici.weight;
    }
});
console.log(lightBike);
//  stampo in console
const {name, weight} = lightBike;
console.log(name, weight);
    

const bike = document.querySelector(".bici-leggera")
bike.innerHTML += ` ${name} ${weight}`;
