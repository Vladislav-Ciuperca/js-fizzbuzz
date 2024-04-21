// console.log(12 % 4);
// console.log(1 % 3);

const item = document.querySelector('ul');



for (let z = 1; z < 43; z++) {
    if (z % 3 == 0) {
        // document.querySelector('li').innerHTML = "si zio";
        console.log("si zio");
    }
    else {
        // console.log(`${numero} non e multiplo di 3`)
        console.log("no zio");
        // document.querySelector('li').innerHTML = "no zio";
    }
    item.innerHTML = item.innerHTML + `
         <li data-value ="${z}">
         ${z}
         </li>
         `;
}
// let numero = document.querySelector('li').getAttribute('data-value');
// console.log(numero);



// for (let z = 1; z < 101; z++) {
// const newp = document.createElement('li');
// newp.append(z);
// item.append(newp);
// const numero = document.querySelector('li').getAttribute
// console.log(numero);

// if (numero % 0 == 0) {
// document.querySelector('li').innerHTML = "si zio";
// }
// else {
// // console.log(`${numero} non e multiplo di 3`)
// document.querySelector('li').innerHTML = "no zio";

// }
// }

