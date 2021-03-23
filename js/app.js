// OBJETO CON PROPIEDADES DE LA CALCULADORA
let myProps = {
    keys: document.querySelectorAll("li")
}


// OBJETO CON LOS METODOS DE LA CALCULADORA
let myMethod ={
    init: function(){

        for(let i = 0; myProps.keys.length; i++){
            console.log(i)
        }
        
    }
}

myMethod.init();