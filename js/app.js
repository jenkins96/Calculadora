// OBJETO CON PROPIEDADES DE LA CALCULADORA
let myProps = {
    keys: document.querySelectorAll("li"),
    action: null,
    digit: null,
    operaciones: document.querySelector("#operaciones"),
    maxQuantitySymb: 0,
    maxQuantityDec: false,
    result: false
}


// OBJETO CON LOS METODOS DE LA CALCULADORA
let myMethod = {
    init: _ => {

        for (let i = 0; i < myProps.keys.length; i++) {
            myProps.keys[i].addEventListener("click", myMethod.keyPress)

        }

    },
    keyboard: function () {
        document.addEventListener("keydown", myMethod.press)

    },
    press: function (key) {



        if (key.keyCode == 48 || key.keyCode == 96) {
            myProps.action = "number";
            myProps.digit = 0;
        }
        if (key.keyCode == 49 || key.keyCode == 97) {
            myProps.action = "number";
            myProps.digit = 1;
        }
        if (key.keyCode == 50 || key.keyCode == 98) {
            myProps.action = "number";
            myProps.digit = 2;
        }
        if (key.keyCode == 51 || key.keyCode == 99) {
            myProps.action = "number";
            myProps.digit = 3;
        }
        if (key.keyCode == 52 || key.keyCode == 100) {
            myProps.action = "number";
            myProps.digit = 4;
        }
        if (key.keyCode == 53 || key.keyCode == 101) {
            myProps.action = "number";
            myProps.digit = 5;
        }
        if (key.keyCode == 54 || key.keyCode == 102) {
            myProps.action = "number";
            myProps.digit = 6;
        }
        if (key.keyCode == 55 || key.keyCode == 103) {
            myProps.action = "number";
            myProps.digit = 7;
        }
        if (key.keyCode == 56 || key.keyCode == 104) {
            myProps.action = "number";
            myProps.digit = 8;
        }
        if (key.keyCode == 57 || key.keyCode == 105) {
            myProps.action = "number";
            myProps.digit = 9;
        }
        if (key.keyCode == 187 || key.keyCode == 107) {
            myProps.action = "symbol";
            myProps.digit = "+";
        }
        if (key.keyCode == 189 || key.keyCode == 109) {
            myProps.action = "symbol";
            myProps.digit = "-";
        }
        if (key.keyCode == 88 || key.keyCode == 106) {
            myProps.action = "symbol";
            myProps.digit = "*";
        }
        if (key.keyCode == 111) {
            myProps.action = "symbol";
            myProps.digit = "/";
        }
        if (key.keyCode == 190 || key.keyCode == 110) {
            myProps.action = "decimal";
            myProps.digit = ".";
        }
        if (key.keyCode == 13) {
            myProps.action = "equal";
        }
        if (key.keyCode == 8) {
            myProps.action = "";
            myMethod.borrarCalculadora();
        }

        myMethod.calculator(myProps.action, myProps.digit);
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
                    if (myProps.result) {
                        myProps.result = false;
                        myProps.operaciones.innerHTML = digit;

                    } else {
                        myProps.operaciones.innerHTML += digit;
                    }


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
                        myProps.maxQuantityDec = false;
                        myProps.result = false;
                    }

                }

                break;

            case "decimal":
                if (!myProps.maxQuantityDec && myProps.maxQuantitySymb != 1) {

                    myProps.operaciones.innerHTML += digit;
                    myProps.maxQuantityDec = true;
                    myProps.result = false;
                }
                break;

            case "equal":
                myProps.operaciones.innerHTML = eval(myProps.operaciones.innerHTML);
                let expression = /./g;
                if (!expression.test(myProps.operaciones.innerHTML)) {
                    myProps.maxQuantityDec = true;
                }
                myProps.result = true;
                break;
        }
    },
    borrarCalculadora: _ => {
        myProps.result = false;
        myProps.operaciones.innerHTML = 0;
    }
}


myMethod.init();
myMethod.keyboard();