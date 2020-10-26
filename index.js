window.onload = () => { //se crea la funcion que se ejecutará cuando se actualice la página.

    //dentro de la funcion de "onload" se declaran las funciones que generarán los números y suits aleatorios.
    let generateRandomNumber = () => {
        let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
        let indexNum = Math.floor(Math.random() * num.length);
        return num[indexNum];
    }
    let generateRandomSuit = () => {
        let suit = ["clubs", "spades", "hearts", "diamonds"];
        let indexSuit = Math.floor(Math.random() * suit.length);
        return suit[indexSuit];
    }

    //se llama a la clase para ingresarle los resultados
    document.querySelector(".numero").innerHTML = generateRandomNumber();
    document.querySelector(".numero").classList.add(generateRandomSuit());
}