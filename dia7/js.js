function crearTiendas(contenedorID, min, ct){
    //encontrar contenedor por su id
    let elementoContenedor=document.getElementById(contenedorID);

    //loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas<=ct; conteoTiendas++) {

        //crear el texto de label para poder llamar a la funcion
        let textoEtiqueta="Tienda"+conteoTiendas;

        //crear teindas con crearParradoTienda
        let parrafoTienda=crearParrafoTienda(textoEtiqueta, min);

        //agregar el parrafo al contenedor
        elementoContenedor.appendChild(parrafoTienda);
    }

   

}

function crearParrafoTienda(textoLabel, valorMin){
    //crear las etiquetas <p>
    let elementoParrafo=document.createElement("p");

    //crear la etiqueta label
    let elementoEtiquetado=document.createElement("label");

    //ESTABLECER EL TEXTO DEL LABEL
    elementoEtiquetado.textContent = textoLabel + ": ";

    //conectar con input
    elementoEtiquetado.setAttribute("for",textoLabel);

    //crear input
    let elementoInput=document.createElement("input");

    //establecer atributos de input
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value",0);

    //agregar label e input al parrafo
    elementoParrafo.appendChild(elementoEtiquetado);
    elementoParrafo.appendChild(elementoInput);

    //devolver el parrafo completo
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){

    let miTexto=elemento.value;
    let miNumero=Number(miTexto);

    return miNumero;
}

function calcular(){
    let ventas=[];
    let posicionVentas=0;
    let elementosVentas=document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta=extraerNumeroDesdeElemento(item.children[1]);
        ventas[posicionVentas]=valorVenta;
        posicionVentas=posicionVentas+1;
    }

    let totalVentas= sumarTotal(ventas);
    let ventaMayor= calcularMayor(ventas);
    let ventaMenor= calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta=extraerNumeroDesdeElemento(item.children[1]);

        item.children[1].className="menuNeutro";

        if(valorVenta==ventaMayor){
            item.children[1].className="menuInputMayor"
        }
        if(valorVenta==ventaMenor){
            item.children[1].className="menuInputMenor"
        }
    }

    let mensajeSalida="Total Ventas: " + totalVentas ;
    let elementoSalida= document.getElementById("parrafoSalida");

    elementoSalida.textContent=mensajeSalida;
}

function sumarTotal(array){

    let total=0;

    for(let venta of array){
        total=total+venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo= array[0];

    for(let venta of array){
        if(venta>maximo){
            maximo=venta;
        }
        
    }
    return maximo;
}

function calcularMenor(array){
    let minimo=array[0];

    for(let venta of array){
        if(venta<minimo){
            minimo=venta;
        }
    }return minimo;
}