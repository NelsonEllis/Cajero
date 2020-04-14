var imagenes = [];
imagenes ["50"] = "50.jpg";
imagenes ["20"] = "20.jpg";
imagenes ["10"] = "10.jpg";

class Billete
{
    constructor(v, c)
    {
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagenes[this.valor];
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if (dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push (new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
        
    }

    if (dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    }
    else
    {
        for(e of entregado)
        {
            if (e.cantidad > 0)
            {
                for(paso = 0; paso < e.cantidad; paso++)
                {
                    resultado.appendChild(e.imagen);
                    resultado.innerHTML = resultado.innerHTML + "&nbsp; &nbsp; &nbsp; ";
                }
                resultado.innerHTML = resultado.innerHTML + "<br>";
            }
        }           
    }
}

var paso;
var caja = [];
var entregado = [];

caja.push( new Billete(50, 3));
caja.push( new Billete(20, 2));
caja.push( new Billete(10, 2));
var dinero;
var div = 0;
var papeles = 0;

var estatus = document.getElementById('estatus');
var r = document.getElementById("resultado");
var b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero);

