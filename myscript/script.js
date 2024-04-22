
const item = document.querySelector('ul');



for (let z = 1; z <= 100; z++) {
    let valore = z;
    let colore = "style=background-color:#F2F2F7;";
    if (z % 3 == 0 && z % 5 == 0) {
        valore = `fizz buzz`
        colore = "style=background-color:#EC407A;"
    }
    else if (z % 3 == 0) {
        valore = `fizz`
        colore = "style=background-color:#3DE770;"
    }
    else if (z % 5 == 0) {
        valore = `buzz`
        colore = "style=background-color:#0D68D8;"
    }
    item.innerHTML = item.innerHTML + `<li ${colore}>${valore}</li>`;
}

