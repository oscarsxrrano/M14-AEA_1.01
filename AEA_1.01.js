// Ex1
function comparaNumeros(a, b) {
    if(a>b) {
        console.log (a + ' es mes gran')
    } else if (a==b) {
        console.log ('Son iguals')
    } else {
        console.log ('b + es mes gran')
    }
}

// Ex2
function suma1a100() {
    let num = 0;
    for (var i = 0; i <100; i++) {
        num = num + i;
    }
    console.log(num)
}

// Ex3
function PedraPaper() {
    let num = 0

    for (var i = 0; i <20; i++) {

        if (num % 3 == 0 && num % 5 == 0) {
            console.log('Tisores')
        } else if (num % 5 == 0) {
            console.log('Paper')
        } else if (num % 3 == 0) {
            console.log('Pedra')
        } else {
            console.log(num)
        }

        num++;
    }
}

// Ex4
function esParell(num) {
    if (num % 2 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// Ex5
function revertirCadena(cadena) {
    var cadena2 = cadena.split("")
    var cadena3 = cadena2.reverse()
    var cadena4 = cadena3.join("")

    console.log(cadena4)
}

// Ex6
function factorial(n) {

    for (var i = n -1; i>1; i--) {
        n*=i
    }

    console.log(n)
}

// Ex7
function filtrarPositius(array) {
    
    let filtrados = []
    for (num of array) {
        if (num >= 0) {
            filtrados.push(num)
        }
    }
    console.log(filtrados)
}