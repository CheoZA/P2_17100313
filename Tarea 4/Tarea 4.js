function Fibonacci()
{   
    var Num1 = parseInt(document.getElementById("Num1").value);
    var Num2 = parseInt(document.getElementById("Num2").value);
    var Cant = parseInt(document.getElementById("Iter").value);
    var actual = Num2, anterior = Num1, siguiente = 0;
    var Resultados = Num1 + ", " + Num2;
    var i = 1;

    do{
        siguiente = actual + anterior;
        anterior = actual;
        actual = siguiente;
        Resultados = Resultados + ", " + actual;
        i++;
    }while(i <= Cant);

    alert("Resultados: " +Resultados);
}

function Limpiar()
{
    document.getElementById("Num1").value = "";
    document.getElementById("Num2").value = "";
    document.getElementById("Iter").value = "";
}