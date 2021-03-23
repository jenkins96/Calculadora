// OBJETO CON PROPIEDADES DE LA CALCULADORA
let myProps = {
    keys: document.querySelectorAll("li"),
    action: null,
    digit: null,
    operaciones: document.querySelector("#operaciones"),
    maxQuantitySymb: 0
}


// OBJETO CON LOS METODOS DE LA CALCULADORA
let myMethod = {
    init: _ => {

        for (let i = 0; i < myProps.keys.length; i++) {
            myProps.keys[i].addEventListener("click", myMethod.keyPress)

        }

    },
    keyPress: event => {

        myProps.action = event.target.getAttribute("class");
        myProps.digit = event.target.innerHTML;
        myMethod.calculator(myProps.action, myProps.digit);


    },
    calculator: function (action, digit) {
        switch (action) {
            //NUMBER
            case "number":
                myProps.maxQuantitySymb = 0;
                if (myProps.operaciones.innerHTML == 0) {
                    myProps.operaciones.innerHTML = digit;

                } else {
                    myProps.operaciones.innerHTML += digit;

                }

                break;
            //SYMBOL
            case "symbol":
                myProps.maxQuantitySymb++
                if (myProps.maxQuantitySymb == 1) {
                    if (myProps.operaciones.innerHTML == 0) {
                        myProps.operaciones.innerHTML = 0
                    } else {
                        myProps.operaciones.innerHTML += digit;
                    }

                }

                break;

            case "decimal":
                console.log("decimal");
                break;

            case "equal":
                console.log("equal");
                break;
        }
    },
    borrarCalculadora: _ => {
        myProps.operaciones.innerHTML = 0;
    }
}


myMethod.init()