var arrGlobal, arrGlobalVF, arrGlobalRuta , fechacaptura, arrGlobalE, t_merc , valor, dateCash2 , precio_p, idGlobal, idGlobal2, idGlobal4, t_vende, rutas, idGlobal2, menu, today_v, nombre_vend, id_vend, n_vend, cred, boni ;
var total_mercancia=0;
var historial=0;
var modalCreditos1="F";
var s_vent=0;
var s_vent2=0;
var n, w, despachador, noSemana, idVentas2;
var upin, pin,arrGlobal41, arrGlobalVehiculo, dsc, sc, sfc1;
var t_v, gas, gasolina, diesel, km;
var t_v2; 
var arrGlobalEmpleados, arrGlobalNotas;
var piezasT, year2, month2, day2; 
var user, vahiculoA, vahiculoA2, tipoCombustible;
var tipoUsuario = ['DIRECTOR','ADMINISTRADOR','CONTADOR','DESPACHADOR','VENTAS']
var tipoMantinimiento = ['PREDICTIVO','PREVENTIVO','CORRECTIVO','OTROS']
var medidas = ['KG.','PZAS.','L'];
var combustibles = ['GASOLINA - MAGNA','GASOLINA - PREMIUM','GASOLINA & GAS','GAS','DIESEL'];
var t_rutas = ['C1','C2','C3','C4','C5','C6','C7','C8'];
var t_ventas = ['DETALLE','MAYOREO','DETALLE FORANEO','RESTAURANTES'];
var t_Empleado = ['AYUDANTE GENERAL','VENTAS','GERENTE DE VENTAS','GERENTE DE OPERACIONES','SUPERVISOR','ADMINISTRADOR','CONSEJO'];
var dias = ['LUNES',' MARTES ',' MIÉRCOLES ',' JUEVES ',' VIERNES ',' SÁBADO ',' DOMINGO '];

//--------------------------------------------- Datos cargados --------------------------------------------------------//
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp4);
getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV2);
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas1);
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventario2);
getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadCategorias2);
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEmpleados3);

//--------------------------------------------- cargar tipo de usuarios -----------------------------------------------//
$(document).ready(function(){
      user = window.usuario.idUsuario;
  var usuario = window.usuario.tipo;
      menu="/html/menu_";
  if(usuario == 1){
      menu+='director';
  }
  if(usuario == 2){
      menu+='administrador';
  }
  if(usuario == 3){
      menu+='contador';
  }
  if(usuario == 4){
      menu+='despachador';
  }
  if(usuario == 5){
      menu+='vendedor';
  }
      $('#contenido').load(menu + '.html');
      $('.btnMenu').removeClass('hidden');
      $('.btnMenu').html('Salir');
});
//-------------------------------------------- Calculo de fecha actual ----------------------------------------------//
    var months = new makeArray('ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE');
    var date = new Date();
    var today = date.getDay();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    var nomdia = new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    var fecha = dias[nomdia.getUTCDay()-1]+", "+ day + " DE " + months[month] + " DEL " + year;
    var d = new Date();
    var dias1, meses1;
    if(day<10){
        day = "0"+day;
    }
    if(month<10){
        month = "0"+month;
    }
    var today_vv = year+"-"+month+"-"+day; 
        dateCash2 = today_vv;


//--------------------------------------------- Calculo de semanas ----------------------------------------------//
      anado=[1,7,6,5,4,3,2];
function saberSemana(d,m,a){
      fecha=new Date(a,0,1);
      primerDiaDelAno=anado[fecha.getDay()];
      fecha=new Date(a,0,primerDiaDelAno);
      fecha2=new Date(a,m,(d+primerDiaDelAno));
      tiempopasado=fecha2-fecha;
      semanas=Math.floor(tiempopasado/1000/60/60/24/7);
  if(semanas==0){
      semanas=52
    }
  if(semanas==52){
      semanas=0
    }
      noSemana=semanas;
}

//-------------------------------------------- tipos de combustible --------------------------------------------------//

var timer = setInterval("cerrarSesion()", 3.6e+6);
function cerrarSesion(){
click_cerrarSesion();
}
function actualizarPagina(){
location.reload();
}
function newTimer(){
   timer = setInterval("actualizarPagina()", 1.8e+6);
  
}
function ninguno(){
    var combustible2='';
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gasolinaygas(){
    var combustible2=' <label for="">KMS:</label><input type="number" pattern="[0-9]{10}" class="col-md-12 km1"><label for="">GASOLINA (L)</label><input type="text" class="col-md-12 gasolina1"><label for="">GAS (L)</label><input type="text" class="col-md-12 gas1">';
        tipoCombustible=3;
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gas2(){
    var combustible2=' <label for="">KMS:</label><input type="number" pattern="[0-9]{10}" class="col-md-12 km1"><label for="">GAS (L)</label><input type="text" class="col-md-12 gas1">';
        tipoCombustible=2
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gasolina2(){
    var combustible2=' <label for="">KMS:</label><input type="number" pattern="[0-9]{10}" class="col-md-12 km1"><label for="">GASOLINA (L)</label><input type="text" class="col-md-12 gasolina1">';
        tipoCombustible=1
        $('#modalDesp2 .combustible2').html(combustible2);
}
function diesel2(){
    var combustible2=' <label for="">KMS:</label><input type="number" pattern="[0-9]{10}" class="col-md-12 km1"><label for="">DIESEL (L)</label><input type="text" class="col-md-12 diesel1">';
        tipoCombustible=4
        $('#modalDesp2 .combustible2').html(combustible2);
}
function makeArray() {
    for (i = 0; i<makeArray.arguments.length; i++)
        this[i + 1] = makeArray.arguments[i];
}



/*--------------------- otros ------------------------------*/




function mayusU(e) {
  e.value = e.value.split(" ").join("_");
     e.value = e.value.toUpperCase();

}
function mayus(e) {
     e.value = e.value.toUpperCase();

}
function validar_campo(evento){
 evento.value = evento.value.replace(/[^0-9]/g,"");
}
function mod(dividendo , divisor){
        resDiv = dividendo / divisor ;  
        parteEnt = Math.floor(resDiv);            // Obtiene la parte Entera de resDiv
        parteFrac = resDiv - parteEnt ;      // Obtiene la parte Fraccionaria de la división
      //modulo = parteFrac * divisor;  // Regresa la parte fraccionaria * la división (modulo)
        modulo = Math.round(parteFrac * divisor)
        return modulo;
}
// Fin de función mod 
// Función ObtenerParteEntDiv, regresa la parte entera de una división
function ObtenerParteEntDiv(dividendo , divisor){
        resDiv = dividendo / divisor ;  
        parteEntDiv = Math.floor(resDiv);
        return parteEntDiv;
}
// Fin de función ObtenerParteEntDiv
// function fraction_part, regresa la parte Fraccionaria de una cantidad
function fraction_part(dividendo , divisor){
        resDiv = dividendo / divisor ;  
        f_part = Math.floor(resDiv);
        return f_part;
}
function string_literal_conversion(number){  
        centenas = ObtenerParteEntDiv(number, 100);
        number = mod(number, 100);
        decenas = ObtenerParteEntDiv(number, 10);
        number = mod(number, 10);
        unidades = ObtenerParteEntDiv(number, 1);
        number = mod(number, 1);  
        string_hundreds="";
        string_tens="";
        string_units="";
    if(centenas == 1){
        string_hundreds = "ciento ";
    }
    if(centenas == 2){
        string_hundreds = "doscientos ";
    }
    if(centenas == 3){
        string_hundreds = "trescientos ";
    }
    if(centenas == 4){
        string_hundreds = "cuatrocientos ";
    }
    if(centenas == 5){
        string_hundreds = "quinientos ";
    }
    if(centenas == 6){
        string_hundreds = "seiscientos ";
    }
    if(centenas == 7){
        string_hundreds = "setecientos ";
   }
    if(centenas == 8){
        string_hundreds = "ochocientos ";
   }
    if(centenas == 9){
        string_hundreds = "novecientos ";
   }
    if(decenas == 1){
      if(unidades == 1){
         string_tens = "once";
      }
      if(unidades == 2){
         string_tens = "doce";
      }
      if(unidades == 3){
         string_tens = "trece";
      }
      if(unidades == 4){
         string_tens = "catorce";
      }
      if(unidades == 5){
         string_tens = "quince";
      }
      if(unidades == 6){
         string_tens = "dieciseis";
      }
      if(unidades == 7){
         string_tens = "diecisiete";
      }
      if(unidades == 8){
         string_tens = "dieciocho";
      }
      if(unidades == 9){
         string_tens = "diecinueve";
      }
   }   
   if(decenas == 2){
      string_tens = "veinti";
   }
   if(decenas == 3){
      string_tens = "treinta";
   }
   if(decenas == 4){
      string_tens = "cuarenta";
   }
   if(decenas == 5){
      string_tens = "cincuenta";
   }
   if(decenas == 6){
      string_tens = "sesenta";
   }
   if(decenas == 7){
      string_tens = "setenta";
   }
   if(decenas == 8){
      string_tens = "ochenta";
   }
   if(decenas == 9){
      string_tens = "noventa";
   }
   if (decenas == 1)
   {
      string_units="";  
   }
   else
   {
      if(unidades == 1){
         string_units = "un";
      }
      if(unidades == 2){
         string_units = "dos";
      }
      if(unidades == 3){
         string_units = "tres";
      }
      if(unidades == 4){
         string_units = "cuatro";
      }
      if(unidades == 5){
         string_units = "cinco";
      }
      if(unidades == 6){
         string_units = "seis";
      }
      if(unidades == 7){
         string_units = "siete";
      }
      if(unidades == 8){
         string_units = "ocho";
      }
      if(unidades == 9){
         string_units = "nueve";
      }
   } 
  if(centenas == 1 && decenas == 0 && unidades == 0){
    string_hundreds = "cien " ;
  }  
  if (decenas == 1 && unidades ==0){
    string_tens = "diez " ;
  }
  if (decenas == 2 && unidades ==0){
    string_tens = "veinte " ;
  }
  if (decenas >=3 && unidades >=1){
   string_tens = string_tens+" y ";
  }
      final_string = string_hundreds+string_tens+string_units;
      return final_string ;
}
function convertirNumLetras(number){
      number1=number.toString();
      cent = number1.split(".");  
      centavos = cent[1];
      number=cent[0];
    if (centavos == 0 || centavos == undefined){
      centavos = "00";
    }
    if (number == 0 || number == ""){
      centenas_final_string=" cero "; 
    }else{
      millions  = ObtenerParteEntDiv(number, 1000000); 
      number = mod(number, 1000000);   
    if (millions != 0){                      
      if (millions == 1){              
          descriptor= " millon "; 
      }else{
          descriptor = " millones ";
       }
      }else{    
          descriptor = " ";                 
      }
          millions_final_string = string_literal_conversion(millions)+descriptor;
          thousands = ObtenerParteEntDiv(number, 1000); 
          number = mod(number, 1000);            
      if(thousands != 1){
        thousands_final_string =string_literal_conversion(thousands) + " mil ";
      }
      if(thousands == 1){
        thousands_final_string = " mil ";
      }
      if (thousands < 1){
        thousands_final_string = " ";
      }
        centenas  = number;                    
        centenas_final_string = string_literal_conversion(centenas) ;
   }
        cad = millions_final_string+thousands_final_string+centenas_final_string;
        cad = cad.toUpperCase();      
      if (centavos.length>2){  
      if(centavos.substring(2,3)>= 5){
         centavos = centavos.substring(0,1)+(parseInt(centavos.substring(1,2))+1).toString();
      }else{  
        centavos = centavos.substring(0,1);
      }
   }
   if (centavos.length==1){
      centavos = centavos+"0";
   }
   centavos = centavos+ "/100"; 
   if (number == 1){
      moneda = " PESO ";  
   }else{
      moneda = " PESOS ";  
   }
   if(cad == '  MIL '){
      cad=' UN MIL ';
   }
      cantidadEnTexto=cad+moneda+centavos+" M.N.";
}
function doSpanish(importe) {
      document.getElementById('spn').innerHTML='( '+convertirNumLetras(importe)+ ' )';
      return true;
      }
var cantidad;
var cantidad2;
var cantidad3;
function formatNumber(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    cantidad = (((sign) ? '' : '-') + num + '.' + cents);
}
function formatNumber2(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    cantidad2 = (((sign) ? '' : '-') + num + '.' + cents);
}
function formatNumber3(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    cantidad3 = (((sign) ? '' : '-') + num + '.' + cents);
}
var formatoNumero = {
 separador: ",", // separador para los miles
 sepDecimal: '.', // separador para los decimales
 formatear:function (num){
 num +='';
 var splitStr = num.split(',');
 var splitLeft = splitStr[0];
 var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : '';
 var regx = /(\d+)(\d{3})/;
 while (regx.test(splitLeft)) {
 splitLeft = splitLeft.replace(regx, '$1' + this.separador + '$2');
 }
 return this.simbol + splitLeft +splitRight;
 },
 new:function(num, simbol){
 this.simbol = simbol ||'';
 return this.formatear(num);
 }
}
function formatoMoneda2(number) {
   if(isNaN(parseFloat(number))){
    var result="0.000";
    return result;
  }else{
    
number = parseFloat(number).toFixed(3);

    var number1 = number.toString(), result = '', estado = true;
    var pos = number1.indexOf('.');
    var numberDec = number1.substring(pos, number1.length);

    if (parseInt(number1) < 0) {
        estado = false;
        number1 = parseInt(number1) * -1;
        number1 = number1.toString();
    }
    if (number1.indexOf('.') == -1) {
        while (number1.length > 3) {
            result = ',' + '' + number1.substr(number1.length - 3) + '' + result;
            number1 = number1.substring(0, number1.length - 3);
        }
        result = number1 + result+numberDec;
        if (estado == false) {
            result = '-' + result;
        }
    }
    else {
        var pos = number1.indexOf('.');
        var numberInt = number1.substring(0, pos);
        
        while (numberInt.length > 3) {
            result = ',' + '' + numberInt.substr(numberInt.length - 3) + '' + result;
            numberInt = numberInt.substring(0, numberInt.length - 3);
        }
        result = numberInt + result + numberDec;
        result = result
        if (estado == false) {
            result = '-' + result;
        }
    }

    return result;
}
  }

function formatoMoneda1(number) {
  
  if(isNaN(parseFloat(number))){
    var result="0.00";
    return result;
  }else{
    
number = parseFloat(number).toFixed(2);

    var number1 = number.toString(), result = '', estado = true;
    var pos = number1.indexOf('.');
    var numberDec = number1.substring(pos, number1.length);

    if (parseInt(number1) < 0) {
        estado = false;
        number1 = parseInt(number1) * -1;
        number1 = number1.toString();
    }
    if (number1.indexOf('.') == -1) {
        while (number1.length > 3) {
            result = ',' + '' + number1.substr(number1.length - 3) + '' + result;
            number1 = number1.substring(0, number1.length - 3);
        }
        result = number1 + result+numberDec;
        if (estado == false) {
            result = '-' + result;
        }
    }
    else {
        var pos = number1.indexOf('.');
        var numberInt = number1.substring(0, pos);
        
        while (numberInt.length > 3) {
            result = ',' + '' + numberInt.substr(numberInt.length - 3) + '' + result;
            numberInt = numberInt.substring(0, numberInt.length - 3);
        }
        result = numberInt + result + numberDec;
        result = result
        if (estado == false) {
            result = '-' + result;
        }
    }

    return result;
}
  }

separadorDecimalesInicial="."; //Modifique este dato para poder obtener la nomenclatura que utilizamos en mi pais
separadorDecimales="."; //Modifique este dato para poder obtener la nomenclatura que utilizamos en mi pais
separadorMiles=","; //Modifique este dato para poder obtener la nomenclatura que utilizamos en mi pais

function arreglar(numero)
{ 
var numeroo=""; 
numero=""+numero; 
partes=numero.split(separadorDecimalesInicial);
entero=partes[0];
if(partes.length>1)
{ 
decimal=partes[1]; 
} 
cifras=entero.length; 
cifras2=cifras 
for(a=0;a<cifras;a++)
{
cifras2-=1;
numeroo+=entero.charAt(a);
if(cifras2%3==0 &&cifras2!=0)
{
numeroo+=separadorMiles;
}
} 
if(partes.length>1)
{
numeroo+=separadorDecimales+decimal;
}
return numeroo 
}
/*esta es la parte que cambie para poder crear la accion que necesitaba en mi formulario */

function formatoMoneda(form)
{
var moneda;
m= form.pepito.value;
moneda=parseFloat(m);
document.getElementById('pepe').value=arreglar(moneda);
}
//-------------------------------------------- Impresion -----------------------------------------------------------------// 
    var cantidadEnTexto;
function pagare(){
    var usuario;
    for (var i=0; i < arrGlobalRuta.length; i++) {
    if(arrGlobalRuta[i].id==rutas){
      ruta3=arrGlobalRuta[i].nombre;
    }
    }
    var dayD = today_v.substring(8,10);
    var monthD = today_v.substring(5,7);
    var yearD = today_v.substring(0,4);
    var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
    var diaD=(diasemaD.getUTCDay());
    var fechaDespachoD = dias[diaD-1]+", "+dayD+" DE "+months[parseInt(monthD)]+" DEL "+yearD+".";
      convertirNumLetras(total_merc);
    for(var h=0;h<upin.length; h++){
      if(pin==upin[h].pin){
        usuario="CAPTURISTA: <u> <strong>"+ upin[h].usuario+". </strong></u>";
      }
  }
        formatNumber(parseFloat(total_merc));
        document.getElementById('fondoBlanco').style.display = 'block';

        document.getElementById('oculto').style.display = 'block';
        document.getElementById('oculto2').style.display = 'block';
        document.getElementById('oculto3').style.display = 'block';
        document.getElementById('oculto4').style.display = 'block';
        document.getElementById('oculto5').style.display = 'block';
        document.getElementById('oculto6').style.display = 'block';
        document.getElementById('oculto7').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
            
    var nombreVendedor = "RUTA _<u><strong>"+ruta3+". </strong></u>_ VENDEDOR: _<u><strong> "+nombre_vend+". </strong></u>_  VEHICULO: _<u><strong> "+vehiculoA+". </strong></u>_";
    var despachadorV = "DESPACHADOR:<strong> "+despachador+"</strong>";
    var controlC = '<strong class="text-center">CONTROL DE VENTAS Y COBRANZA</strong>';
    var pagare = '<p class="text-justify " >YO _<u> <strong>'+ nombre_vend+'</strong> </u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u><strong> '+fechaDespachoD+' </strong></u>_ LA CANTIDAD DE _<u><strong> $ '+cantidad +' ('+cantidadEnTexto+') </strong></u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center"><strong>'+nombre_vend+'.</strong></p>';
    var fechaDespachoDD ='DESPACHO : <strong>'+fechaDespachoD+'</strong>';
        $('.pagareD').html(pagare);
        $('.controlC').html(controlC);
        $('.nombreVendedor').html(nombreVendedor);
        $('.nombreCapturista').html(usuario);
        $('.nombreDespachador').html(despachadorV);
        $('.fechaDespacho').html(fechaDespachoDD);
        window.print();
        document.getElementById('fondoBlanco').style.display = 'none';
  
        document.getElementById('ocultoImagen').style.display = 'none';
        
        document.getElementById('oculto').style.display = 'none';
        document.getElementById('oculto2').style.display = 'none';
        document.getElementById('oculto3').style.display = 'none';
        document.getElementById('oculto4').style.display = 'none';
        document.getElementById('oculto5').style.display = 'none';
        document.getElementById('oculto6').style.display = 'none';
        document.getElementById('oculto7').style.display = 'none';
      
}
function pagare2(){
    var usuario;
    if(gasolina!=""||gasolina!=undefined||gasolina!=NaN){ 
    }
    if(km!=""||km!=undefined||km!=NaN){
    }
    if(gas!=""||gas!=undefined||gas!=NaN){
    }
    if(diesel!=""||diesel!=undefined||diesel!=NaN){
    }
    for (var i=0; i < arrGlobalRuta.length; i++) {
    //alert(arrGlobalRuta[i].id)
    if(arrGlobalRuta[i].id==rutas){
    ruta3=arrGlobalRuta[i].nombre;
    }
    }
    var dayD = today_v.substring(8,10);
    var monthD = today_v.substring(5,7);
    var yearD = today_v.substring(0,4);
    var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
    var diaD=(diasemaD.getUTCDay());
    var fechaRecepcionD = dias[diaD-1]+", "+dayD+" DE "+months[parseInt(monthD)]+" DEL "+yearD+".";
    convertirNumLetras(total_merc);
    for(var h=0;h<upin.length; h++){
    if(pin==upin[h].pin){
        usuario="CAPTURISTA: <strong>"+ upin[h].usuario+".</strong>";    
    }
    }

    document.getElementById('oculto').style.display = 'block';
    document.getElementById('oculto2').style.display = 'block';
    document.getElementById('oculto3').style.display = 'block';
    document.getElementById('oculto4').style.display = 'block';
    document.getElementById('oculto5').style.display = 'block';
    document.getElementById('oculto6').style.display = 'block';
    document.getElementById('oculto7').style.display = 'block';
    document.getElementById('oculto88').style.display = 'block';
    document.getElementById('oculto89').style.display = 'block';
    document.getElementById('oculto90').style.display = 'block';
    document.getElementById('oculto91').style.display = 'block';
    document.getElementById('oculto9').style.display = 'block';
    document.getElementById('oculto10').style.display = 'block';
    document.getElementById('oculto11').style.display = 'block';
    document.getElementById('oculto12').style.display = 'block';
    document.getElementById('ocultoImagen').style.display = 'block';
    document.getElementById('fondoBlanco').style.display = 'block';

    //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasPrint);
    var nombreVendedor = "RUTA: <strong> "+ruta3+".</strong>       VENDEDOR: <strong>"+nombre_vend+". </strong>      VEHICULO: <strong>"+arrGlobalF[h].vehiculo+".</strong>";
    var despachadorV = "DESPACHADOR:<strong> "+despachadorR+"</strong>";
    var controlC = "<strong>CONTROL DE VENTAS Y COBRANZA</strong>";
    var pagare = '<p class="text-justify " >YO _<u><strong> '+ nombre_vend+' </strong></u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u> <strong>'+fechaRecepcionD+'</strong> </u>_ LA CANTIDAD DE _<u><strong> $ '+formatoMoneda1(total_merc)+' </strong>(<strong>'+cantidadEnTexto+'</strong>) </u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center"><strong>'+nombre_vend+'.</strong></p>';
    var fechaRecepcionDD ='RECEPCIÓN: '+fechaRecepcionD;
        gasolina = $('#modalDesp2 .gasolina1').val();
        km = $('#modalDesp2 .km1').val();
        gas = $('#modalDesp2 .gas1').val();
        diesel = $('#modalDesp2 .diesel1').val();
    var imagenFondo='<img class="ImagenDurango" src="/images/logoD.png" onclick="">';
    if(tipoCombustible==1){
        $('.gasolina').html("GASOLINA: "+gasolina+" L.");
        $('.km').html("KM: "+km);
    }
    if(tipoCombustible==2){
        $('.gas').html("GAS: "+gas+" L.");
        $('.km').html("KM: "+km);
    }
    if(tipoCombustible==3){
        $('.gasolina').html("GASOLINA: "+gasolina+" L.");
        $('.gas').html("GAS: "+gas+" L.");
        $('.km').html("KM: "+km);
    }
;
        $('.controlC').html(controlC);
        $('.pagareD').html(pagare);
        $('.nombreVendedor').html(nombreVendedor);
        $('.nombreCapturista').html(usuario);
        $('.nombreDespachador').html(despachadorV);
        $('.fechaDespacho').html(fechaRecepcionDD);
        window.print();
        document.getElementById('oculto').style.display = 'none';
        document.getElementById('oculto2').style.display = 'none';
        document.getElementById('oculto3').style.display = 'none';
        document.getElementById('oculto4').style.display = 'none';
        document.getElementById('oculto5').style.display = 'none';
        document.getElementById('oculto6').style.display = 'none';
        document.getElementById('oculto7').style.display = 'none';
        document.getElementById('oculto88').style.display = 'none';
        document.getElementById('oculto89').style.display = 'none';
        document.getElementById('oculto90').style.display = 'none';
        document.getElementById('oculto91').style.display = 'none';
        document.getElementById('oculto9').style.display = 'none';
        document.getElementById('oculto10').style.display = 'none';
        document.getElementById('oculto11').style.display = 'none';
        document.getElementById('oculto12').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';

}
function imprimirVD3(){
  for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==rutas){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
        document.getElementById('oculto2').style.display = 'block';
        document.getElementById('oculto7').style.display = 'block';
        document.getElementById('ocultoVD').style.display = 'block';
        document.getElementById('ocultoVD2').style.display = 'block';
        document.getElementById('ocultoVD33').style.display = 'block';
        document.getElementById('ocultoVD3333').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
    var nombreVendedor = "RUTA _<u>"+ruta3+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_  ";
    var controlC = 'VENTA DIARIA (SEMANA: '+(scv+1)+')';
        $('.nombreVendedor').html(nombreVendedor);
        $('.controlC').html(controlC);
        window.print(); 
        document.getElementById('oculto2').style.display = 'none';
        document.getElementById('oculto7').style.display = 'none';
        document.getElementById('ocultoVD').style.display = 'none';
        document.getElementById('ocultoVD2').style.display = 'none';
        document.getElementById('ocultoVD33').style.display = 'none';
        document.getElementById('ocultoVD3333').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
}
function ventaDiariaCPrint(){

        document.getElementById('ocultoVDC').style.display = 'block';
        document.getElementById('ocultoVDCT').style.display = 'block';
        document.getElementById('ocultoImagen2').style.display = 'block';
        document.getElementById('fondoBlanco').style.display = 'block';
        
    var controlC = 'VENTA DIARIA (SEMANA: '+(scv+1)+')';
        $('.controlCP').html(controlC);
        window.print(); 
        document.getElementById('ocultoVDC').style.display = 'none';
        document.getElementById('ocultoVDCT').style.display = 'none';
        document.getElementById('ocultoImagen2').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';

}
function ventaGeneralPrint(){
          document.getElementById('ocultoVGT').style.display = 'block';
        document.getElementById('ocultoVGTT').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
        document.getElementById('fondoBlanco').style.display = 'block';
        
    var controlC = 'VENTA GENERAL (SEMANA: '+(scv+1)+')';
        $('.controlVGT').html(controlC);
        window.print(); 
        document.getElementById('ocultoVGT').style.display = 'none';
        document.getElementById('ocultoVGTT').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';

}
function mermaGeneralPrint(){
        document.getElementById('oculto7').style.display = 'block';
        document.getElementById('ocultoVGTT').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
        document.getElementById('fondoBlanco').style.display = 'block';
        
    var controlC = 'MERMA GENERAL (SEMANA: '+(scv+1)+')';
        $('.controlC').html(controlC);
        window.print(); 
        document.getElementById('oculto7').style.display = 'none';
        document.getElementById('ocultoVGTT').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';

}
function imprimirNomina(){
        document.getElementById('ocultoNominaO').style.display = 'none';
        document.getElementById('ocultoNomina').style.display = 'block';
        document.getElementById('ocultoNominaT').style.display = 'block';
        document.getElementById('ocultoImagen2').style.display = 'block';
        document.getElementById('fondoBlanco').style.display = 'block';
        
    var controlC = 'NOMINA (SEMANA: '+(scv+1)+')';
        $('.controlCP').html(controlC);
        window.print(); 
        document.getElementById('ocultoNominaO').style.display = 'block';
        document.getElementById('ocultoNomina').style.display = 'none';
        document.getElementById('ocultoNominaT').style.display = 'none';
        document.getElementById('ocultoImagen2').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';

}
function cambio(){
    var peso = $(".peso").val();
    if(peso == ""){
        document.getElementById('peso').focus();
    }else{
        document.getElementById('add').focus();
    }  
}

function cambioP(){
    var peso = $(".pesoP").val();
    if(peso == ""){
        document.getElementById('pesoP').focus();
    }else{
        document.getElementById('addP').focus();
    }  
}
function cambioMP(){
    var peso = $(".pesoMP").val();
    if(peso == ""){
        document.getElementById('pesoMP').focus();
    }else{
        document.getElementById('addMP').focus();
    }  
}
function cambioMerma(){
    var peso = $("#modalMerma .pesoM").val();
    if(peso == ""){
        document.getElementById('pesoM').focus();
    }else{
        document.getElementById('addM').focus();
    }
}
function cambior(n){
    var peso = $(".peso").val();
    var pesos='<input type="text" class="form-control clear rec" placeholder="0.000">';
    if(n == 0){
    //document.getElementById('peso').focus();
    }else{
    // document.getElementById('add').focus();
    }
}
function tipoempleado(value){
    var licencia = ' <label class="letras">N. Licencia</label><input type="text" class="form-control clear n_licencia" placeholder="Licencia">' ;
    var exp = '<label class="letras">Fecha de Expiración</label><input type="date" class="form-control clear f_licencia" placeholder="Expiración">' ;
    var ruta = '<label class="letras">Ruta</label><select class="form-control clear ruta" ><option value="1">C1</option><option value="2">C2</option><option value="3">C3</option><option value="4">C4</option><option value="5">C5</option><option value="6">C6</option><option value="7">C7</option><option value="8">C8</option> </select>';
    var tipovende = ' <label class="letras">Tipo de Venta</label><select class="form-control clear tipoventa" ><option value="1">Detalle</option><option value="2">Mayoreo</option><option value="3">Detalle Foráneo</option><option value="4">Restaurantes</option></select>';
    if(value==2){
        $(".licencia").html(licencia);
        $(".exp").html(exp);
        $(".ruta").html(ruta);
        $(".tipovende").html(tipovende);
        $('#modal .textModal').html('El vendedor por asignar aparecerá automáticamente en la sección de vendedores.'); 
        $('#modal').modal('show');
    }else{
        $('.licencia').removeClass('hidden');
        $('.exp').removeClass('hidden');
        $('.ruta').removeClass('hidden');
        $('.tipovende').removeClass('hidden');
        $('.licencia').html('');
        $('.exp').html('');
        $('.ruta').html('');
        $('.tipovende').html('');
    }
}
function getVenta(url, mensajes, functionFinal){
        $.ajax({    
        url : url,    
        data : {},    
        type : 'GET',    
        success : function(json) {   
        $('#modal .textModal').html(mensajes.success); 
        functionFinal(json);
        },    
        error : function(xhr, status) {    
        $('#modal .textModal').html(mensajes); 
        $('#modal').modal('show');
        },    
        complete : function(xhr, status) { 
        }});
}
/*--------------------- Regresar menu ----------------------*/
function click_regresar(){
      //$('.btnMenu').addClass('hidden');
        var htm = $('.btn-nav').html();
        if(htm == '<h3>Salir</h3>'){
        click_cerrarSesion();
        }else{
        $('.barraIzq').html('');
        $('.btn-nav').html('<h3>Salir</h3>');
        $('#contenido').load(menu+'.html');
        $('.tituloPantalla').html('<h3> MENÚ </h3>');
        }   
 }
/*-------------------- cargar listas ---------------------------------*/
function loadUsuarios(lista){
        var html = '';
        for(var h=0;h<lista.length; h++){
        html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); selectUsuario('+ lista[h].idUsuario +')" data-id="'+ lista[h].idUsuario +'"><td>' + lista[h].usuario + '</td><td>' + lista[h].contrasenia +'</td><td>' + lista[h].pin +'</td><td>' + tipoUsuario[lista[h].tipo - 1] + '</td></tr>';
        $('.contCata').html('');
        $('.contCata').html(html);
        }
        arrGlobal = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadEmpleados2(lista){
        var html = '';
        for(var h=0;h<lista.length; h++){
        if(lista[h].km!=1)     
        html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); click_notas('+ lista[h].id +', '+h+')" data-id="'+ lista[h].idUsuario +'"><td>' +  lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple +'</td></tr>';
        $('.contCata2').html(html);
        }
        arrGlobalEmpleados = lista; 
}
function loadEmpleados3(lista){
        
        arrGlobalEmpleados = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadNotas(lista){
        var html = '';
        var v= 0;
        for(var h=0;h<lista.length; h++){ 
          if(lista[h].idnombre==id_vend ){
            v++;
            html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); selectnotas('+ lista[h].id +')" ><td>'+v+'</td><td>' +  lista[h].descripcion +'</td></tr>';
          }
        }
        arrGlobalNotas = lista;
        $('#modalNotas .contCata3').html(html);
}
function loadUsuarios2(lista){
        upin = lista;
}
function loadInventarios(lista){
        var html = '';
        for(var h=0;h<lista.length; h++){
          var categoria="-----";
          for(var j=0;j<arrGlobalCategoria.length; j++){
            if(lista[h].tipoP==arrGlobalCategoria[j].id){

             categoria=arrGlobalCategoria[j].nombre;

            }
          }
          html+= '<tr style="font-size:12px;" class="seleccionar" onclick="cambiarcolor(this); selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + ' ' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td> <td>' + lista[h].s_max + '</td><td>' + categoria + '</td> <td>' + lista[h].proporcion + '</td> </tr>';

          }
          $('.contCata').html(html);
          arrGlobal = lista;
          var selectCategoria= '<label class="letras">CATEGORÍA</label><select name="selectCat" id="selC" class="selectCategoria col-md-8 form-control"><option value="0"></option>'

for(var h=0;h<arrGlobalCategoria.length; h++)
selectCategoria+= ' <option value="'+arrGlobalCategoria[h].id+'">' +arrGlobalCategoria[h].nombre +'</option>';
    
selectCategoria +='</select>';

$('.cate').html(selectCategoria);
        document.getElementById('loader').style.display = 'none';

}
function loadInventario2(lista){
        
          arrGlobalInventario = lista;
}
var arrGlobalCategoria;
function loadCategorias(lista){
        var html = '';
        var producto='';
        for(var h=0;h<lista.length; h++){
            
            for(var i=0;i<arrGlobalInventario.length; i++){
             if(arrGlobalInventario[i].tipoP==lista[h].id){
             producto += arrGlobalInventario[i].descripcion+', ';

             }
            }
          html+= '<tr class="seleccionar move" onclick="cambiarcolor(this); selectCategoria('+ lista[h].id +')"><td>' + lista[h].jerarquia + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].descripcion + '</td><td>' + producto + '</td> </tr>';
        producto='';
        }
          $('.contCataC').html(html);
          arrGlobalCategoria=lista;
        document.getElementById('loader').style.display = 'none';

}
function loadComision(lista){
        var html = '';
        var producto='';
        for(var h=0;h<lista.length; h++){
            
            for(var i=0;i<arrGlobalInventario.length; i++){
             if(arrGlobalInventario[i].tipoP==lista[h].id){
             producto += arrGlobalInventario[i].descripcion+', ';

             }
            }
          html+= '<tr class="seleccionar move" onclick="cambiarcolor(this); selectComision('+ lista[h].id +')"><td>' + lista[h].nombre + '</td><td>$ ' + formatoMoneda1(lista[h].n1) + '</td> <td>$ ' + formatoMoneda1(lista[h].n2) + '</td><td>$ ' + formatoMoneda1(lista[h].n3 )+ '</td><td>$ ' + formatoMoneda1(lista[h].n4) + '</td></tr>';
        producto='';
        }
          $('.contCataC').html(html);
          arrGlobalCategoria=lista;
        document.getElementById('loader').style.display = 'none';

}


function loadCategorias2(lista){
          arrGlobalCategoria=lista;
}
function loadInventario(lista){
        var html = '';
        for(var h=0;h<lista.length; h++)
          html+= '<tr class="seleccionar" onclick="cambiarcolor(this); selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + ' ' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
          $('.contCata').html(html);
          arrGlobalInventario = lista;
}
function loadInventarioVenta(lista){
          arrGlobal = lista;
          arrGlobalInventario = lista;
}
          var ruta3;
function loadVendedores(lista){
          var html = '';
  $("#modalVendedor .f_Ahorro").val(100);

          for(var h=0;h<lista.length; h++)
            if(lista[h].tipo==2 && lista[h].km!=1){
              for (var i=0; i < arrGlobalRuta.length; i++) {
                if(arrGlobalRuta[i].id==lista[h].ruta){
                  ruta3=arrGlobalRuta[i].nombre;
                }
              }
              html+= '<tr class="seleccionar"  data-id="'+ lista[h].id +'"> <td onclick="selectVendedores2('+  lista[h].id +')">' +lista[h].idEmpleados  + '</td> <td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td> <td onclick="selectVendedores2('+  lista[h].id +')">' +ruta3  + '</td> <td onclick="selectVendedores2('+ lista[h].id +')">' + t_ventas[lista[h].t_venta - 1] + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].l_credito + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].l_bon + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].merma +'</td><td onclick="selectVendedores2('+ lista[h].id +')">'+lista[h].telp+'</td><td><div class="btn-group" data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upVendedor1('+ lista[h].id +');">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="delVendedor('+ lista[h].id +');">Eliminar</button></div> </td></tr>';
            
            }
            $('.contCata').html(html);
            arrGlobal = lista;
}
function loadAdministracion(lista){
          var html = '';
          for(var h=0;h<lista.length; h++)
            if(lista[h].tipo != 2){
              html+= '<tr class=" letras"  data-id="'+ lista[h].id +'"><td onclick="selectAdministracion2('+ lista[h].id +')">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td onclick="selectAdministracion2('+ lista[h].id +')">' +  t_Empleado[lista[h].tipo-1]  + '</td><td onclick="selectAdministracion2('+ lista[h].id +')">' + lista[h].domicilio+ '</td><td onclick="selectAdministracion2('+ lista[h].id +')">' + lista[h].n_seguro + ' </td><td onclick="selectAdministracion2('+ lista[h].id +')">'+lista[h].telp+'</td><td><div class="btn-group" data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upEmpleado1('+ lista[h].id +');">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="delEmpleado('+ lista[h].id +');">Eliminar</button></div> </td></tr>';
            }
            $('.contCata').html(html);
            arrGlobal = lista;
}
function loadEClientes(lista){
          var html = '';
          for(var h=0;h<lista.length; h++)
            if(lista[h].km == 1 ){
              html+= '<tr class=" letras"  ><td>'+lista[h].idEmpleados+'</td><td >' + lista[h].nombre_Emple + '</td><td><div class="btn-group" data-toggle="buttons"></button> <button type="button" class="btn btn-danger btn-sm" onclick="delECliente1('+ lista[h].id +');">ELIMINAR</button></div> </td></tr>';
            }
            $('.contCata').html(html);
            arrGlobal = lista;
}
var pedidos;
var arrGlobalPedidos;
function loadPedidos(lista){

          var html = '';
          for(var h=0;h<lista.length; h++)
            if(lista[h].km == 1 ){
              html+= '<tr class=" letras" onclick="click_SPedidos('+lista[h].id +','+h+')" ><td>'+lista[h].idEmpleados+'</td><td >' + lista[h].nombre_Emple + '</td></tr>';
           
            }
            $('.contCata').html(html);
            arrGlobalPedidos = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadVentasF(lista){
              valor =0;
          var total=0;
          var totalV;
          var num=0;
          for(var h=0;h<lista.length; h++){
            if( rutas==lista[h].ruta&&fechacaptura == lista[h].fechadespachof&&lista[h].merma!=1 ){
              //alert(rutas+" == "+lista[h].ruta+" && "+fechacaptura+" == "+lista[h].fechadespachof+" = "+lista[h].id+" ---- "+h);
              if(lista[h].venta==''||lista[h].venta==NaN||lista[h].venta==undefined||lista[h].venta==null){
             $('.imprimir').html('');   
                if(parseFloat(lista[h].medida)==2){
                  if(lista[h].piezasv==0){

                  $('#rec'+h+'').val('');

                  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                  //suma2(valor, h);
                  $('#'+h+'').html('$ '+formatoMoneda1(valor));
                  //alert(lista[h].piezasv);
                  t_v2[num]=lista[h].valorMercancia;
                  // ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡
                  num++;
                  total = total+valor;

                  }else{

                    $('#rec'+h+'').val(lista[h].piezasv);
                  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                  //suma2(valor, h);
                  $('#'+h+'').html('$ '+formatoMoneda1(valor));
                  //alert(lista[h].piezasv);
                  t_v2[num]=lista[h].valorMercancia;
                  //alert("Venta___: "+lista[h].valorMercancia);
                  num++;
                  total = total+valor;
                  }
                  

                  }else{

                   if(lista[h].piezasv==0&&lista[h].pesov==0){

                  $('#p'+h+'').val('');
                  $('#rec'+h+'').val('');
                //alert(lista[h].pesov);
                  valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
                //suma2(valor, h);
                  $('#'+h+'').html('$ '+formatoMoneda1(valor));
                //alert("Venta____: "+lista[h].valorMercancia);
                  t_v2[num]=parseFloat(lista[h].valorMercancia);
                  num++;
                //alert(lista[h].valorMercancia);
                  total = total+valor;
                //alert(total+" - "+valor);

}else{

                  $('#p'+h+'').val(lista[h].piezasv);
                  $('#rec'+h+'').val(lista[h].pesov);
                //alert(lista[h].pesov);
                  valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
                //suma2(valor, h);
                  $('#'+h+'').html('$ '+formatoMoneda1(valor));
                //alert("Venta____: "+lista[h].valorMercancia);
                  t_v2[num]=parseFloat(lista[h].valorMercancia);
                  num++;
                //alert(lista[h].valorMercancia);
                  total = total+valor;
                //alert(total+" - "+valor);

}

                 
                }
                }else{
                if(parseFloat(lista[h].medida)==2){

                    $('#rec'+h+'').val(lista[h].piezasv);
                    valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                    $('#'+h+'').html('$ '+formatoMoneda1(valor));
                    t_v2[num]=lista[h].venta;
                    num++;
                    total = total+valor;
                    }else{

                    $('#p'+h+'').val(lista[h].piezasv);
                    $('#rec'+h+'').val(lista[h].pesov);
                    valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
                    $('#'+h+'').html('$ '+formatoMoneda1(valor));
                    t_v2[num]=parseFloat(lista[h].venta);
                    num++;
                    total = total+valor;
                }
              }
            }
          }
                  arrGlobalVF = lista;
                  s_vent2=total;
                  totalV = ' <h3 class="letras">VENTA TOTAL: $ '+formatoMoneda1(total)+'</h3>';
                  $(".totalVentas").html(totalV);
        document.getElementById('loader').style.display = 'none';
          
          }
              var element;
function cambiarcolor(elemento){
                  if(element!=undefined){
                  if(element.style.background=="gray"){
                    element.style.background="#031727";
                    }
                    }
                  if(elemento.style.background=="gray"){
                    elemento.style.background="#031727";
                  }else{
                    elemento.style.background="gray";
                  }
                    element=elemento;
}
function loadVDiariaR2(lista){ //imprime en reportes
              var html = '';
              var htmlp = '';
              var html2 = '';
              var htmlC = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0;
              
          for(var hh=0;hh<arrGlobalInventario.length; hh++){
            for(var h=0;h<lista.length; h++){
              if(0==lista[h].merma&&rutas==lista[h].ruta&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                   pasa=1;
                  if(lista[h].dfc==1){
                    if(lista[h].medida==1){
                      l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                    }
                    if(lista[h].medida==2){
                      l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      lp+=0;
                    }
                    if(lista[h].medida==3){
                      l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      lp+=0;
                    }
                  }
                  if(lista[h].dfc==2){
                    if(lista[h].medida==1){
                      m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                    }
                    if(lista[h].medida==2){
                      m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      mp+=0;
                    }
                    if(lista[h].medida==3){
                      m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      mp+=0;
                    }
                  }
                  if(lista[h].dfc==3){
                    if(lista[h].medida==1){
                      x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                    }
                    if(lista[h].medida==2){
                      x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      xp+=0;
                    }
                    if(lista[h].medida==3){
                      x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      xp+=0;
                    }
                  }
                  if(lista[h].dfc==4){
                    if(lista[h].medida==1){
                      j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                    }
                    if(lista[h].medida==2){
                      j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      jp+=0;
                    }
                    if(lista[h].medida==3){
                      j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      jp+=0;
                    }
                  }
                  if(lista[h].dfc==5){
                    if(lista[h].medida==1){
                      v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                    }
                    if(lista[h].medida==2){
                      v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      vp+=0;
                    }
                    if(lista[h].medida==3){
                      v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                      vp+=0;
                      }
                    }
                    if(lista[h].dfc==6){
                      if(lista[h].medida==1){
                        s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                        sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                      }
                      if(lista[h].medida==2){
                        s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                        sp+=0;
                      }
                      if(lista[h].medida==3){
                        s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                        sp +=0;
                      }
                    }
                  }
                }
              

if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                if(l==0){l=""}else{l=parseFloat(l).toFixed(2)}
                if(lp==0){lp=""}else{lp=parseFloat(lp).toFixed(3)}
                if(m==0){m=""}else{m=parseFloat(m).toFixed(2)}
                if(mp==0){mp=""}else{mp=parseFloat(mp).toFixed(3)}
                if(x==0){x=""}else{x=parseFloat(x).toFixed(2)}
                if(xp==0){xp=""}else{xp=parseFloat(xp).toFixed(3)}
                if(j==0){j=""}else{j=parseFloat(j).toFixed(2)}
                if(jp==0){jp=""}else{jp=parseFloat(jp).toFixed(3)}
                if(v==0){v=""}else{v=parseFloat(v).toFixed(2)}
                if(vp==0){vp=""}else{vp=parseFloat(vp).toFixed(3)}
                if(s==0){s=""}else{s=parseFloat(s).toFixed(2)}
                if(sp==0){sp=""}else{sp=parseFloat(sp).toFixed(3)}
                if(suma==0){suma=""}else{suma="<strong> "+parseFloat(suma).toFixed(2)+"</strong>"}
                if(suma2==0){suma2=""}else{suma2="<strong> "+parseFloat(suma2).toFixed(3)+"</strong>"}
                  //html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' '+lp+'</td><td>'+m+' '+mp+'</td><td>'+ x +' '+xp+' </td><td>'+ j+' '+jp+'  </td><td>'+ v +' '+vp+' </td><td>'+ s +' '+sp+' </td><td style="background:green;">'+suma+' '+suma2+' </td></tr>';
                  htmlp+= '<tr class="negro" style="font-size:9px; "><td class="text-left"><strong>' +  arrGlobalInventario[hh].descripcion +'</strong></td><td class="text-center">'+ l+' </td><td class="text-center">'+lp+' </td><td class="text-center">'+m+'</td><td class="text-center">'+mp+' </td><td class="text-center">'+ x +'</td><td class="text-center">'+xp+' </td><td class="text-center">'+ j+' </td><td class="text-center">'+jp+' </td><td class="text-center">'+ v +' </td><td class="text-center">'+vp+' </td><td class="text-center">'+ s +'</td><td class="text-center">'+sp+' </td><td class="text-right">'+suma+'</td><td class="text-right">'+suma2+' </td></tr>';
                  l=0;
                        m=0;
                        x=0;
                        j=0;
                        v=0;
                        s=0;
                        lp=0;
                        mp=0;
                        xp=0;
                        jp=0;
                        vp=0;
                        sp= 0;
                        cambio =1;  
                      }
                    }
                    cambio =0;  
                    pasa=0;
                  }
              var l2=0;
              var m2=0;
              var x2=0;
              var j2=0;
              var v2=0;
              var s2=0;
              var l3=0;
              var m3=0;
              var x3=0;
              var j3=0;
              var v3=0;
              var s3= 0;
              var l4 =0, m4=0, x4=0, j4=0, v4=0, s4=0;
              var l5=0, m5=0, x5=0, j5=0, v5=0, s5=0;
              var l6=0, m6=0, x6=0, j6=0, v6=0, s6=0;
              var l7=0, m7=0, x7=0, j7=0, v7=0, s7=0;
              var contador =0;
              var promedio =0;
              var ventaT =0;
              var bon =0;
              var bonT =0;
              var efecT =0;
              var mer =0;
              var credits =0;
              var efectivos =0;
              var f_s_dia2 =0;
              var f_s_real2 =0;
              var diferenciaT =0;
              var pasa2=0;
              var creditosFTemp=0;
              var creditosITemp=0;
              var f_s_t=0;
              var f_s_tR=0;
              for(var h=0;h<arrGlobalF.length; h++){
                if(rutas==arrGlobalF[h].ruta&&(scv+1)==arrGlobalF[h].sfc&&year==((arrGlobalF[h].fechaf).substring(0,4))){
                  bon=arrGlobalF[h].otros;
                  mer=arrGlobalF[h].v_mercancia;
                  efectivos=arrGlobalF[h].efectivo;
                  credits =arrGlobalF[h].creditos;
                  f_s_dia2 =arrGlobalF[h].f_s_dia;
                  f_s_real2 =arrGlobalF[h].f_s_real;
                if(f_s_real2==undefined)f_s_real2=0;
                if(f_s_dia2==undefined)f_s_dia2=0;
                if(credits==undefined)credits=0;
                if(bon==undefined)bon=0;
                if(mer==""||mer==NaN||mer==undefined)mer=0;
                if(efectivos==""||efectivos==NaN||efectivos==undefined)efectivos=0;
                if(arrGlobalF[h].dsfc==1){
                  l=credits;
                  lp=bon;
                  l2=arrGlobalF[h].t_venta_merca;
                  l4=mer;
                  l5=efectivos;
                  l6=f_s_dia2;
                  l7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  l3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(l3==Infinity){l3=100;}
                  
                  contador++;
                  promedio += l3;
                  ventaT += parseFloat(l2);
                  bonT += parseFloat(lp);
                  efecT += parseFloat(l5);
                   
                   if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                  
                   }
                  
                  }
                if(arrGlobalF[h].dsfc==2){
                  m=credits;
                  mp=bon;
                  m2=arrGlobalF[h].t_venta_merca;
                  m4=mer;
                  m5=efectivos;
                  m6=f_s_dia2;
                  m7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  m3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(m3==Infinity){m3=100;}
                  
                  contador++;
                  promedio += m3;
                  ventaT += parseFloat(m2);
                  bonT += parseFloat(mp);
                  efecT += parseFloat(m5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }             
                }
                if(arrGlobalF[h].dsfc==3){
                  x=credits;
                  xp=bon;
                  x2=arrGlobalF[h].t_venta_merca;
                  x4=mer;
                  x5=efectivos;
                  x6=f_s_dia2;
                  x7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  x3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(x3==Infinity){x3=100;}
                  
                  contador++;
                  promedio += x3;
                  ventaT += parseFloat(x2);
                  bonT += parseFloat(xp);
                  efecT += parseFloat(x5);
                   
                 if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==4){
                  j=credits;
                  jp=bon;
                  j2=arrGlobalF[h].t_venta_merca;
                  j4=mer;
                  j5=efectivos;
                  j6=f_s_dia2;
                  j7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  j3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(j3==Infinity){j3=100;}
                  
                  contador++;
                  promedio += j3;
                  ventaT += parseFloat(j2);
                  bonT += parseFloat(jp);
                  efecT += parseFloat(j5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==5){
                  v=credits;
                  vp=bon;
                  v2=arrGlobalF[h].t_venta_merca;
                  v4=mer;
                  v5=efectivos;
                  v6=f_s_dia2;
                  v7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  v3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(v3==Infinity){v3=100;}
                  
                  contador++;
                  promedio += v3;
                  ventaT += parseFloat(v2);
                  bonT += parseFloat(vp);
                  efecT += parseFloat(v5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                 pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==6){
                  s=credits;
                  sp=bon;
                  s2=arrGlobalF[h].t_venta_merca;
                  s4=mer;
                  s5=efectivos;
                  s6=f_s_dia2;
                  s7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  s3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(s3==Infinity){s3=100;}
                  
                  contador++;
                  promedio += s3;
                  ventaT += parseFloat(s2);
                  bonT += parseFloat(sp);
                  efecT += parseFloat(s5);
                  
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                  f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
              }
            }
            if(contador==0){
                  p=0;
              }else{
                //formatNumber2(parseFloat(l).toFixed(2));l=cantidad2;formatNumber2(parseFloat(lp).toFixed(2));lp=cantidad2;formatNumber2(parseFloat(l4).toFixed(2));l4=cantidad2;formatNumber2(parseFloat(l2).toFixed(2));l2=cantidad2;formatNumber2(parseFloat(l3).toFixed(2));l3=cantidad2;formatNumber2(parseFloat(l5).toFixed(2));l5=cantidad2;formatNumber2(parseFloat(l6).toFixed(2));l6=cantidad2;formatNumber2(parseFloat(l7).toFixed(2));l7=cantidad2;
              var p =(diferenciaT*100)/(ventaT-bonT); 
                  var controlInterno=parseFloat(efecT)-parseFloat(f_s_t);
                
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">CRÉDITOS</td><td>$ '+formatoMoneda1(l)+' </td><td>$ '+formatoMoneda1(m)+'</td><td>$ '+ formatoMoneda1(x) +' </td><td>$ '+ formatoMoneda1(j)+'  </td><td>$ '+ formatoMoneda1(v) +' </td><td>$ '+ formatoMoneda1(s) +' </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">BONIFICACIÓN</td><td> $ '+formatoMoneda1(lp)+' </td><td>$ '+formatoMoneda1(mp)+'</td><td>$ '+ formatoMoneda1(xp) +' </td><td>$ '+ formatoMoneda1(jp)+'  </td><td>$ '+ formatoMoneda1(vp) +' </td><td>$ '+ formatoMoneda1(sp) +' </td><td><strong>$ '+ formatoMoneda1(bonT) +'</strong> </td></tr>';  
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">MERCANCIA</td><td> $ '+formatoMoneda1(l4)+' </td><td>$ '+formatoMoneda1(m4)+'</td><td>$ '+ formatoMoneda1(x4) +' </td><td>$ '+ formatoMoneda1(j4)+'  </td><td>$ '+ formatoMoneda1(v4) +' </td><td>$ '+ formatoMoneda1(s4) +' </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">VENTA</td><td>$ '+formatoMoneda1(l2)+' </td><td>$ '+formatoMoneda1(m2)+'</td><td> $ '+ formatoMoneda1(x2) +' </td><td>$ '+ formatoMoneda1(j2)+'  </td><td>$ '+ formatoMoneda1(v2) +' </td><td> $ '+ formatoMoneda1(s2) +' </td><td><strong> $ '+ formatoMoneda1(ventaT) +'</strong> </td></tr>';
                  html2+= '<tr  class="text-right"  style="font-size:9px;   "><td class="text-left">NO VENTA</td><td><strong> % '+formatoMoneda1(l3)+'</strong> </td><td><strong> % '+formatoMoneda1(m3)+' </strong></td><td> <strong>% '+ formatoMoneda1(x3) +' </strong></td><td><strong> % '+ formatoMoneda1(j3)+'  </strong></td><td><strong> % '+ formatoMoneda1(v3) +'</strong> </td><td><strong> % '+ formatoMoneda1(s3) +' </strong></td><td><strong> % '+  formatoMoneda1(p) +' </strong></td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">EFECTIVO</td><td>$ '+formatoMoneda1(l5)+' </td><td>$ '+formatoMoneda1(m5)+'</td><td> $ '+ formatoMoneda1(x5) +' </td><td>$ '+ formatoMoneda1(j5)+'  </td><td>$ '+ formatoMoneda1(v5) +' </td><td> $ '+ formatoMoneda1(s5) +' </td><td><strong> $ '+ formatoMoneda1(efecT) +'</strong> </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">FALT/SOB DIA</td><td>$ '+formatoMoneda1(l6)+' </td><td >$ '+formatoMoneda1(m6)+'</td><td> $ '+ formatoMoneda1(x6) +' </td><td>$ '+ formatoMoneda1(j6)+'  </td><td>$ '+ formatoMoneda1(v6) +' </td><td> $ '+ formatoMoneda1(s6) +' </td><td> $ '+ formatoMoneda1(f_s_t) +' </td></tr>';
                  html2+= '<tr class="text-right" style="font-size:9px;   "><td  class="text-left">CONTROL INTERNO</td><td></td><td ></td><td></td><td></td><td></td><td></td><td>'+formatoMoneda1(controlInterno)+'</td></tr>';
                 
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">FALT/SOB REAL</td><td>$ '+formatoMoneda1(l7)+' </td><td>$ '+formatoMoneda1(m7)+'</td><td> $ '+ formatoMoneda1(x7) +' </td><td>$ '+ formatoMoneda1(j7)+'  </td><td>$ '+ formatoMoneda1(v7) +' </td><td> $ '+ formatoMoneda1(s7) +' </td><td><strong> $ '+ formatoMoneda1(f_s_tR) +'</strong> </td></tr>';
                  htmlC+='<tr  class="text-right" style="font-size:9px;   "><td></td><td class="text-right"> $ '+formatoMoneda1(creditosFTemp)+'</td><td class="text-right"> $ - '+formatoMoneda1(creditosITemp)+'</td><td> $ '+formatoMoneda1(creditosFTemp-creditosITemp) +'</td><td> $ '+formatoMoneda1(f_s_t)+'</td><td><strong> $ '+formatoMoneda1((creditosFTemp-creditosITemp)+parseFloat(f_s_t))+' </strong></td></tr>'
                  
            }

                  $('.contCataModalDC').html(htmlC);
                  $('.contCataModalDP').html(html2);
                  $('.ventaDiariaSemanal').html(htmlp);
        document.getElementById('fondoBlanco').style.display = 'block';
              
                  imprimirVD3();
        document.getElementById('fondoBlanco').style.display = 'none';

}
function loadVDiariaR3(lista){ //venta general
              var html = '';
              var htmlp = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                  
       //           if(0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                  
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                    
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                if(l==0){l=""}else{l=formatoMoneda1(l)}
                if(lp==0){lp=""}else{lp=formatoMoneda2(lp)}
                if(m==0){m=""}else{m=formatoMoneda1(m)}
                if(mp==0){mp=""}else{mp=formatoMoneda2(mp)}
                if(x==0){x=""}else{x=formatoMoneda1(x)}
                if(xp==0){xp=""}else{xp=formatoMoneda2(xp)}
                if(j==0){j=""}else{j=formatoMoneda1(j)}
                if(jp==0){jp=""}else{jp=formatoMoneda2(jp)}
                if(v==0){v=""}else{v=formatoMoneda1(v)}
                if(vp==0){vp=""}else{vp=formatoMoneda2(vp)}
                if(s==0){s=""}else{s=formatoMoneda1(s)}
                if(sp==0){sp=""}else{sp=formatoMoneda2(sp)}
                if(suma==0){suma=""}else{suma=formatoMoneda1(suma)}
                if(suma2==0){suma2=""}else{suma2=formatoMoneda2(suma2)}
                  html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +'</td><td> '+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +' </td><td>'+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +'</td><td> '+sp+' </td><td style="background:green;">'+suma+'</td><td style="background:green;"> '+suma2+' </td></tr>';
                  htmlp+= '<tr style="font-size:8px;" ><td class="grisclaro">' +  arrGlobalInventario[hh].descripcion +'</td><td class="text-right">'+ l +'</td><td class="text-right">'+lp+'</td><td class="text-right">'+m+'</td><td class="text-right">'+mp+'</td><td class="text-right">'+x +'</td><td class="text-right">'+xp+'</td><td class="text-right">'+j+'</td><td class="text-right">'+jp+'</td><td class="text-right">'+v+'</td><td class="text-right">'+vp+'</td><td class="text-right">'+ s+'</td><td class="text-right">'+sp+'</td><td class="text-right">'+suma+'</td><td class="text-right">'+suma2+' </td></tr>';
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
                  $('.contCataR').html(html);
                  $('.ventaDiariaSemanal').html(htmlp);
        document.getElementById('loader').style.display = 'none';

}
  var prodTotales; 
  
function loadVentaDiariaMapa(lista){ //por mayoreo
         
                    var html = '';
       var encuentraRuta=0;
       var rutatemp=0;
       var diaCarga=1;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }



  
 var f=arrGlobalF[j].fechaf;
          var dayp = f.substring(8,10);
          var monthp = f.substring(5,7);
          var yearp = f.substring(0,4);
          var nomdiap = new Date((parseInt(monthp))+' '+parseInt(dayp)+' ,'+parseInt(yearp));
          var fechap = dias[nomdiap.getUTCDay()-1];
if(encuentraRuta==0){
  encuentraRuta=1; 
  rutatemp=rutas;

html+= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td> ';      

 if(arrGlobalF[j].despachador!=undefined){
html+='<td style=" color:white;"><strong>'+fechap+'</strong> </td>';

   }else{
    html+='<td style="background:yellow; color:black;"><strong>'+fechap+'</strong></td>';

   }

}else{
  if(rutatemp==rutas){
      if(arrGlobalF[j].despachador!=undefined){
html+='<td style=" color:white;">  <strong>'+fechap+'</strong> </td>';

   }else{
    html+='<td style="background:yellow; color:black;">  <strong>'+fechap+'</strong> </td>';

   }
  }else{

    rutatemp=rutas;
    encuentraRuta=1;
html+='</tr><tr style="font-size:12px; " class="seleccionar text-center" onclick="" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';      
 if(arrGlobalF[j].despachador!=undefined){
html+='<td style=" color:white;">  <strong>'+fechap+'</strong>   </td>';

   }else{
    html+='<td style="background:yellow; color:black"> <strong>'+fechap+'</strong></td>';

   }


  }
}  

        }

        }

       
       }

     }
         


              if(html==undefined){html='';}else{
               $('.contCataMapa').html(html); 
              }

   document.getElementById('loader').style.display = 'none';

}


function loadVentaDiariaMayoreoNominaFaltante(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
      var html = '';
      var htmlP = '';
      var identificacion='';
      var identificacionP='';
      var bonificacionT=0;
      var t_venta_mercaT=0;
      var mer;
      var pNoVenta;
      var creditosT=0; 
      var bonificacionTotal=0; 
      var ventasT=0; 
      var productoTotalS=""; 
      var productoTotal=0; 
      var productoTotalP=0; 
      var prodT = new Array(arrGlobalCategoria.length);
      var porcentajeTotal=0;
      var credits=0;
      var mermaT=0;
      var encuentra=0;
      var diferenciaT=0;
      var faltanteT;
      var f_Ahorro="F";
      var ret=0;
      var infonavit=0;
      var idNomina;
  for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
       if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){       
  for(var j=0;j<arrGlobalF.length; j++){
       if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
 for (var i=0; i < arrGlobalRuta.length; i++) {
       if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
          ruta3=arrGlobalRuta[i].nombre;
          rutas=arrGlobalF[j].ruta;
          }
         }
       if(arrGlobalF[j].id!=(undefined||NaN||"")){
          idNomina = arrGlobalF[j].id;
          }
        if(arrGlobalF[j].n2!=(undefined||NaN||"")){
          f_Ahorro = arrGlobalF[j].n2;
          }
       if(arrGlobalF[j].n3!=(undefined||NaN||"")){
          ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=(undefined||NaN||"")){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=(undefined||NaN||"")){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=(undefined||NaN||"")){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 

identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
          
              
              var titulos=""; 
              var titulosP=""; 
       

              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);

          html+=identificacion+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> </tr>';
          htmlP+=identificacionP+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td>  </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
              // $('.tituloNominaF').html(titulos); 
               $('.titulo2PF').html(titulosP); 
               $('.contCataMayoreoNF').html(html); 
               $('.contCataMayoreoPF').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}


function loadVentaDiariaRestauranteNominaFaltante(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
      var html = '';
      var htmlP = '';
      var identificacion='';
      var identificacionP='';
      var bonificacionT=0;
      var t_venta_mercaT=0;
      var mer;
      var pNoVenta;
      var creditosT=0; 
      var bonificacionTotal=0; 
      var ventasT=0; 
      var productoTotalS=""; 
      var productoTotal=0; 
      var productoTotalP=0; 
      var prodT = new Array(arrGlobalCategoria.length);
      var porcentajeTotal=0;
      var credits=0;
      var mermaT=0;
      var encuentra=0;
      var diferenciaT=0;
      var faltanteT;
      var f_Ahorro="F";
      var ret=0;
      var infonavit=0;
      var idNomina;
  for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
       if(arrGlobalEmpleados[hh2].t_venta==4&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){       
  for(var j=0;j<arrGlobalF.length; j++){
       if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
 for (var i=0; i < arrGlobalRuta.length; i++) {
       if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
          ruta3=arrGlobalRuta[i].nombre;
          rutas=arrGlobalF[j].ruta;
          }
         }
       if(arrGlobalF[j].id!=(undefined||NaN||"")){
          idNomina = arrGlobalF[j].id;
          }
        if(arrGlobalF[j].n2!=(undefined||NaN||"")){
          f_Ahorro = arrGlobalF[j].n2;
          }
       if(arrGlobalF[j].n3!=(undefined||NaN||"")){
          ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=(undefined||NaN||"")){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=(undefined||NaN||"")){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=(undefined||NaN||"")){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 

identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
          
              
              var titulos=""; 
              var titulosP=""; 
       

              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);

          html+=identificacion+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> </tr>';
          htmlP+=identificacionP+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td>  </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
              // $('.tituloNominaF').html(titulos); 
               $('.titulo2PF').html(titulosP); 
               $('.contCataRestauranteNF').html(html); 
               $('.contCataRestaurantePF').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}


function loadVentaDiariaForaneoNominaFaltante(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
      var html = '';
      var htmlP = '';
      var identificacion='';
      var identificacionP='';
      var bonificacionT=0;
      var t_venta_mercaT=0;
      var mer;
      var pNoVenta;
      var creditosT=0; 
      var bonificacionTotal=0; 
      var ventasT=0; 
      var productoTotalS=""; 
      var productoTotal=0; 
      var productoTotalP=0; 
      var prodT = new Array(arrGlobalCategoria.length);
      var porcentajeTotal=0;
      var credits=0;
      var mermaT=0;
      var encuentra=0;
      var diferenciaT=0;
      var faltanteT;
      var f_Ahorro="F";
      var ret=0;
      var infonavit=0;
      var idNomina;
  for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
       if(arrGlobalEmpleados[hh2].t_venta==3&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){       
  for(var j=0;j<arrGlobalF.length; j++){
       if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
 for (var i=0; i < arrGlobalRuta.length; i++) {
       if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
          ruta3=arrGlobalRuta[i].nombre;
          rutas=arrGlobalF[j].ruta;
          }
         }
       if(arrGlobalF[j].id!=(undefined||NaN||"")){
          idNomina = arrGlobalF[j].id;
          }
        if(arrGlobalF[j].n2!=(undefined||NaN||"")){
          f_Ahorro = arrGlobalF[j].n2;
          }
       if(arrGlobalF[j].n3!=(undefined||NaN||"")){
          ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=(undefined||NaN||"")){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=(undefined||NaN||"")){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=(undefined||NaN||"")){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 

identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
          
              
              var titulos=""; 
              var titulosP=""; 
       

              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);

          html+=identificacion+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> </tr>';
          htmlP+=identificacionP+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td>  </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
              // $('.tituloNominaF').html(titulos); 
               $('.titulo2PF').html(titulosP); 
               $('.contCataForaneoNF').html(html); 
               $('.contCataForaneoPF').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}



function loadVentaDiariaDetalleNominaFaltante(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
      var html = '';
      var htmlP = '';
      var identificacion='';
      var identificacionP='';
      var bonificacionT=0;
      var t_venta_mercaT=0;
      var mer;
      var pNoVenta;
      var creditosT=0; 
      var bonificacionTotal=0; 
      var ventasT=0; 
      var productoTotalS=""; 
      var productoTotal=0; 
      var productoTotalP=0; 
      var prodT = new Array(arrGlobalCategoria.length);
      var porcentajeTotal=0;
      var credits=0;
      var mermaT=0;
      var encuentra=0;
      var diferenciaT=0;
      var faltanteT;
      var f_Ahorro="F";
      var ret=0;
      var infonavit=0;
      var idNomina;
  for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
       if(arrGlobalEmpleados[hh2].t_venta==1&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){       
  for(var j=0;j<arrGlobalF.length; j++){
       if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
 for (var i=0; i < arrGlobalRuta.length; i++) {
       if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
          ruta3=arrGlobalRuta[i].nombre;
          rutas=arrGlobalF[j].ruta;
          }
         }
       if(arrGlobalF[j].id!=(undefined||NaN||"")){
          idNomina = arrGlobalF[j].id;
          }
        if(arrGlobalF[j].n2!=(undefined||NaN||"")){
          f_Ahorro = arrGlobalF[j].n2;
          }
       if(arrGlobalF[j].n3!=(undefined||NaN||"")){
          ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=(undefined||NaN||"")){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=(undefined||NaN||"")){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=(undefined||NaN||"")){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 

identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
          
              
              var titulos=""; 
              var titulosP=""; 
       

              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);

          html+=identificacion+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> </tr>';
          htmlP+=identificacionP+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td>  </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
              // $('.tituloNominaF').html(titulos); 
               $('.titulo2PF').html(titulosP); 
               $('.contCataDetalleNF').html(html); 
               $('.contCataDetallePF').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}


  function loadVentaDiariaMayoreoNomina(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
                    var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var mermaT=0;
          var encuentra=0;
          var diferenciaT=0;
          var faltanteT;
          var f_Ahorro="F";
          var ret=0;
          var infonavit=0;
          var idNomina;

      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          if(arrGlobalF[j].id!=undefined){
           idNomina = arrGlobalF[j].id;
          }
          if(arrGlobalF[j].n2!=undefined){
           f_Ahorro = arrGlobalF[j].n2;
          }
          if(arrGlobalF[j].n3!=undefined){
           ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=undefined){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=undefined){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=undefined){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;
 var pago=0;
        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}
          

              if(prodC[y]==arrGlobalCategoria[y].id){
                   var comision;
                   // productoTotal+=parseFloat(prod[y]);
                   if(arrGlobalCategoria[y].n2==undefined){
                     comision=0;
                   }else{
                    comision = parseFloat(arrGlobalCategoria[y].n2)*parseFloat(prod[y]);

                   }
                     productosT+= '<td > '+formatoMoneda1(comision)+' </td>';
                     productosTP+= '<td > '+formatoMoneda1(comision)+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
                      pago+=parseFloat(comision);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          if(prodTotales[y]==NaN||prodTotales[y]==""||prodTotales[y]==undefined||prodTotales[y]==null){prodTotales[y]=0;}
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);

         var totalNomina = parseFloat(pago)-parseFloat(f_Ahorro)-parseFloat(faltanteT)-parseFloat(ret)-parseFloat(infonavit);
          html+=identificacion+'<td> '+formatoMoneda1( pago)+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          htmlP+=identificacionP+'<td> '+formatoMoneda1( pago)+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.tituloNomina').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataMayoreoN').html(html); 
               $('.contCataMayoreoP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}

  function loadVentaDiariaDetalleNomina(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
                    var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var mermaT=0;
          var encuentra=0;
          var diferenciaT=0;
          var faltanteT;
          var f_Ahorro="F";
          var ret=0;
          var infonavit=0;
          var idNomina;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
      //if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
        if(arrGlobalEmpleados[hh2].t_venta==1&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          if(arrGlobalF[j].id!=undefined){
           idNomina = arrGlobalF[j].id;
          }
          if(arrGlobalF[j].n2!=undefined){
           f_Ahorro = arrGlobalF[j].n2;
          }
          if(arrGlobalF[j].n3!=undefined){
           ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=undefined){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=undefined){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=undefined){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;
 var pago=0;
        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}
          

              if(prodC[y]==arrGlobalCategoria[y].id){
                   var comision;
                   // productoTotal+=parseFloat(prod[y]);
                   if(arrGlobalCategoria[y].n1==undefined){
                     comision=0;
                   }else{
                    comision = parseFloat(arrGlobalCategoria[y].n1)*parseFloat(prod[y]);

                   }
                     productosT+= '<td > '+formatoMoneda1(comision)+' </td>';
                     productosTP+= '<td > '+formatoMoneda1(comision)+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
                      pago+=parseFloat(comision);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          if(prodTotales[y]==NaN||prodTotales[y]==""||prodTotales[y]==undefined||prodTotales[y]==null){prodTotales[y]=0;}
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
        
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);
         var totalNomina = parseFloat(pago)-parseFloat(f_Ahorro)-parseFloat(faltanteT)-parseFloat(ret)-parseFloat(infonavit);
          html+=identificacion+'<td> '+formatoMoneda1( pago)+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          htmlP+=identificacionP+'<td> '+formatoMoneda1( pago)+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.tituloNomina').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataDetalleN').html(html); 
               $('.contCataDetalleP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;
document.getElementById('loader').style.display = 'none';
}
  function loadVentaDiariaForaneoNomina(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
                    var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var mermaT=0;
          var encuentra=0;
          var diferenciaT=0;
          var faltanteT;
          var f_Ahorro="F";
          var ret=0;
          var infonavit=0;
          var idNomina;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
      //if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
        if(arrGlobalEmpleados[hh2].t_venta==3&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          if(arrGlobalF[j].id!=undefined){
           idNomina = arrGlobalF[j].id;
          }
          if(arrGlobalF[j].n2!=undefined){
           f_Ahorro = arrGlobalF[j].n2;
          }
          if(arrGlobalF[j].n3!=undefined){
           ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=undefined){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=undefined){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=undefined){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;
 var pago=0;
        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}
          

              if(prodC[y]==arrGlobalCategoria[y].id){
                   var comision;
                   // productoTotal+=parseFloat(prod[y]);
                   if(arrGlobalCategoria[y].n3==undefined){
                     comision=0;
                   }else{
                    comision = parseFloat(arrGlobalCategoria[y].n3)*parseFloat(prod[y]);

                   }
                     productosT+= '<td > '+formatoMoneda1(comision)+' </td>';
                     productosTP+= '<td > '+formatoMoneda1(comision)+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
                      pago+=parseFloat(comision);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          if(prodTotales[y]==NaN||prodTotales[y]==""||prodTotales[y]==undefined||prodTotales[y]==null){prodTotales[y]=0;}
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);
         var totalNomina = parseFloat(pago)-parseFloat(f_Ahorro)-parseFloat(faltanteT)-parseFloat(ret)-parseFloat(infonavit);
          html+=identificacion+'<td> '+formatoMoneda1( pago)+'</td>'+productosT+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+' </td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          htmlP+=identificacionP+'<td> '+formatoMoneda1( pago)+'</td>'+productosTP+'<td>   '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>   '+formatoMoneda1(f_Ahorro)+'</td> <td>  '+formatoMoneda1(infonavit)+' </td> <td>  '+formatoMoneda1(faltanteT)+'</td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.tituloNomina').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataForaneoN').html(html); 
               $('.contCataForaneoP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}
  function loadVentaDiariaRestauranteNomina(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
                    var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var mermaT=0;
          var encuentra=0;
          var diferenciaT=0;
          var faltanteT;
          var f_Ahorro="F";
          var ret=0;
          var infonavit=0;
          var idNomina;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
      //if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
        if(arrGlobalEmpleados[hh2].t_venta==4&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          if(arrGlobalF[j].id!=undefined){
           idNomina = arrGlobalF[j].id;
          }
          if(arrGlobalF[j].n2!=undefined){
           f_Ahorro = arrGlobalF[j].n2;
          }
          if(arrGlobalF[j].n3!=undefined){
           ret = arrGlobalF[j].n3;
          }
          if(arrGlobalF[j].n4!=undefined){
           infonavit = arrGlobalF[j].n4;
          }
          if(arrGlobalF[j].f_s_real!=undefined){
           faltanteT = arrGlobalF[j].f_s_real;
          }
          if(arrGlobalF[j].n1!=undefined){
mermaT += parseFloat(arrGlobalF[j].n1);
}else{
mermaT += 0;

}
if(f_Ahorro=="F"){f_Ahorro=100;}
  encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" onclick="upNomina('+ret+', '+f_Ahorro+', '+infonavit+', '+arrGlobalF[j].id+');" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;
 var pago=0;
        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}
          

              if(prodC[y]==arrGlobalCategoria[y].id){
                   var comision;
                   // productoTotal+=parseFloat(prod[y]);
                   if(arrGlobalCategoria[y].n4==undefined){
                     comision=0;
                   }else{
                    comision = parseFloat(arrGlobalCategoria[y].n4)*parseFloat(prod[y]);
                      
                   }
                     productosT+= '<td > '+formatoMoneda1(comision)+' </td>';
                     productosTP+= '<td > '+formatoMoneda1(comision)+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
                      pago+=parseFloat(comision);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          if(prodTotales[y]==NaN||prodTotales[y]==""||prodTotales[y]==undefined||prodTotales[y]==null){prodTotales[y]=0;}
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
         
         if(infonavit==0){infonavit=0;}
         if(ret==0){ret=0;}
         if(faltanteT==undefined)faltanteT=0;
         if(faltanteT>0)faltanteT=0;
         if(faltanteT<0)faltanteT=(faltanteT)*(-1);
         var totalNomina = parseFloat(pago)-parseFloat(f_Ahorro)-parseFloat(faltanteT)-parseFloat(ret)-parseFloat(infonavit);
         //alert(totalNomina +"  - "+pago+" - "+f_Ahorro+"  - "+ret+" - "+faltanteT+" - "+infonavit);
          html+=identificacion+'<td> '+formatoMoneda1( pago)+'</td>'+productosT+'<td>  '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>  '+formatoMoneda1(f_Ahorro)+'</td> <td> '+formatoMoneda1(infonavit)+' </td> <td> '+formatoMoneda1(faltanteT)+' </td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          htmlP+=identificacionP+'<td> '+formatoMoneda1( pago)+'</td>'+productosTP+'<td>  '+formatoMoneda1(mermaT)+'</td> <td>'+formatoMoneda1(ret)+' </td> <td>  '+formatoMoneda1(f_Ahorro)+'</td> <td> '+formatoMoneda1(infonavit)+' </td> <td> '+formatoMoneda1(faltanteT)+'</td> <td> '+formatoMoneda1(totalNomina)+' </td> </tr>';
          mermaT=0;
          faltanteT=0;
          pago=0;
          f_Ahorro="F";
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          totalNomina=0;
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 70px; ">__PAGO__</th>'+titulos+'<th class="letras" style="width: 70px; ">___MERMA___ </th> <th>RET/ML</th><th>FONDO DE AHORRO</th><th>INFONAVIT</th><th>FALTANTE</th><th>TOTAL</th>';
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th><th colspan="1" class=" text-center" style="width: 70px; ">___PAGO___</th>'+titulosP+'<th class="" style="width: 70px; ">___MERMA___</th><th  class="text-center">RET/ML</th>  <th class="text-center">FONDO DE AHORRO</th><th class="text-center">INFONAVIT</th><th class="text-center">FALTANTE</th><th>___TOTAL___</th> ';
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
 // html+='</tr>';
//htmlP+='</tr>';
var renglon = 10+parseInt(arrGlobalCategoria.length)

html+='<tr class=""><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.tituloNomina').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataRestauranteN').html(html); 
               $('.contCataRestauranteP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;

}
function loadVentaDiariaMayoreo(lista){ //por mayoreo
          prodTotales = new Array(arrGlobalCategoria.length);
          credi=0;
          boni=0;
          s_vent=0;
                    var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].t_venta==2&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          mer=arrGlobalF[j].v_mercancia;
          if(mer==""||mer==NaN||mer==undefined)mer=0;
          //diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
          pNoVenta=((mer-arrGlobalF[j].t_venta_merca)*100)/parseFloat(arrGlobalF[j].t_venta_merca);
          diferenciaT+=( parseFloat(mer) - parseFloat(arrGlobalF[j].t_venta_merca));
    
          
          if(arrGlobalF[j].t_venta_merca==0)pNoVenta=100;
          if(arrGlobalF[j].t_venta_merca==0)diferenciaT=0;
if(arrGlobalF[j].otros==null||arrGlobalF[j].otros==NaN||arrGlobalF[j].otros==undefined){
  bonificacionT+=parseFloat(0);
  
}else{
  bonificacionT+=parseFloat(arrGlobalF[j].otros);
  
}
          //bonificacionT+=parseFloat(arrGlobalF[j].creditos);
          t_venta_mercaT+=parseFloat(arrGlobalF[j].t_venta_merca);



if(arrGlobalF[j].creditos==null||arrGlobalF[j].creditos==NaN||arrGlobalF[j].creditos==undefined){
  credits=0
  
}else{
  credits=arrGlobalF[j].creditos;
  
}
if(diferenciaT==0){
porcentajeTotal=0;
}else{
  porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
  
}
        //alert(porcentajeTotal+" - Bonificacion: "+bonificacionT+" - Diferencia: "+diferenciaT+" - ventatotal: "+t_venta_mercaT+" - ");

  encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td><td >$ ' + formatoMoneda1(credits)+ '</td> <td >$ ' + formatoMoneda1(bonificacionT)+ '</td>  <td > % ' + formatoMoneda1(porcentajeTotal) + '</td> <td >$ ' + formatoMoneda1(t_venta_mercaT)+ '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td><td class="text-right">$ ' + formatoMoneda1(credits) + '</td> <td class="text-right">$ ' + formatoMoneda1(bonificacionT) + '</td>  <td class="text-right"> % ' + formatoMoneda1(porcentajeTotal) + '</td> <td class="text-right">$ ' + formatoMoneda1(t_venta_mercaT) + '</td>';
      
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}
          

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          if(prodTotales[y]==NaN||prodTotales[y]==""||prodTotales[y]==undefined||prodTotales[y]==null){prodTotales[y]=0;}
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+productosT+'</tr>';
          htmlP+=identificacionP+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }

             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">CRÉDITOS</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">VENTA</th>'+titulos;
             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____VENTA_____</th>'+titulosP;
         
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
  html+='<tr style="background:black; font-size:12px;"><td>TOTAL</td> <td>MAYOREO</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td> $ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td> $ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-right" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>MAYOREO</strong></td><td></td><td class=" text-right" ><strong> $ '+ formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong> $ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
var renglon = 7+parseInt(arrGlobalCategoria.length)

htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataMayoreo').html(html); 
               $('.contCataMayoreoP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;
}
function loadVentaDiariaDetalle(lista){ //por categoria
           var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].t_venta==1&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          mer=arrGlobalF[j].v_mercancia;
          if(mer==""||mer==NaN||mer==undefined)mer=0;
          //diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
          pNoVenta=((mer-arrGlobalF[j].t_venta_merca)*100)/parseFloat(arrGlobalF[j].t_venta_merca);
          diferenciaT+=( parseFloat(mer) - parseFloat(arrGlobalF[j].t_venta_merca));
    
          
          if(arrGlobalF[j].t_venta_merca==0)pNoVenta=100;
          if(arrGlobalF[j].t_venta_merca==0)diferenciaT=0;
if(arrGlobalF[j].otros==null||arrGlobalF[j].otros==NaN||arrGlobalF[j].otros==undefined){
  bonificacionT+=parseFloat(0);
  
}else{
  bonificacionT+=parseFloat(arrGlobalF[j].otros);
  
}
          //bonificacionT+=parseFloat(arrGlobalF[j].creditos);
          t_venta_mercaT+=parseFloat(arrGlobalF[j].t_venta_merca);



if(arrGlobalF[j].creditos==null||arrGlobalF[j].creditos==NaN||arrGlobalF[j].creditos==undefined){
  credits=0
  
}else{
  credits=arrGlobalF[j].creditos;
  
}
if(diferenciaT==0){
porcentajeTotal=0;
}else{
  porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
  
}
         encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td><td >$ ' + formatoMoneda1(credits)+ '</td> <td >$ ' + formatoMoneda1(bonificacionT)+ '</td>  <td > % ' + formatoMoneda1(porcentajeTotal) + '</td> <td >$ ' + formatoMoneda1(t_venta_mercaT)+ '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td><td class="text-right">$ ' + formatoMoneda1(credits) + '</td> <td class="text-right">$ ' + formatoMoneda1(bonificacionT) + '</td>  <td class="text-right"> % ' + formatoMoneda1(porcentajeTotal) + '</td> <td class="text-right">$ ' + formatoMoneda1(t_venta_mercaT) + '</td>';
        
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+productosT+'</tr>';
          htmlP+=identificacionP+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }
             titulos=' <th class="letras text-center ">_RUTA_</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">_____CRÉDITOS_____</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">_____VENTA_____</th>'+titulos;
            

             titulosP=' <th   class=" text-center" style="width: 50px; font-size:8px;">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">______VENTA______</th>'+titulosP;

if(html!=""){
  credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
  html+='<tr style="background:black; font-size:12px;"><td>TOTAL</td> <td>DETALLE</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td> $ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>DETALLE</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong>$ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong> $ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
var renglon = 7+parseInt(arrGlobalCategoria.length)

htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{

               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataDetalle').html(html); 
               $('.contCataDetalleP').html(htmlP); 
              }
           for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
           //  totalesCategorias();

prodT=0;
        document.getElementById('loader').style.display = 'none';

}
function loadVentaDiariaForaneo(lista){ //por categoria
                   var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].t_venta==3&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          mer=arrGlobalF[j].v_mercancia;
          if(mer==""||mer==NaN||mer==undefined)mer=0;
          //diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
          pNoVenta=((mer-arrGlobalF[j].t_venta_merca)*100)/parseFloat(arrGlobalF[j].t_venta_merca);
          diferenciaT+=( parseFloat(mer) - parseFloat(arrGlobalF[j].t_venta_merca));
    
          
          if(arrGlobalF[j].t_venta_merca==0)pNoVenta=100;
          if(arrGlobalF[j].t_venta_merca==0)diferenciaT=0;
if(arrGlobalF[j].otros==null||arrGlobalF[j].otros==NaN||arrGlobalF[j].otros==undefined){
  bonificacionT+=parseFloat(0);
  
}else{
  bonificacionT+=parseFloat(arrGlobalF[j].otros);
  
}
          //bonificacionT+=parseFloat(arrGlobalF[j].creditos);
          t_venta_mercaT+=parseFloat(arrGlobalF[j].t_venta_merca);



if(arrGlobalF[j].creditos==null||arrGlobalF[j].creditos==NaN||arrGlobalF[j].creditos==undefined){
  credits=0
  
}else{
  credits=arrGlobalF[j].creditos;
  
}
porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
if(diferenciaT==0){
porcentajeTotal=0;
}else{
  porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
  
}
         encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td><td >$ ' + formatoMoneda1(credits)+ '</td> <td >$ ' + formatoMoneda1(bonificacionT)+ '</td>  <td > % ' + formatoMoneda1(porcentajeTotal) + '</td> <td >$ ' + formatoMoneda1(t_venta_mercaT)+ '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td><td class="text-right">$ ' + formatoMoneda1(credits) + '</td> <td class="text-right">$ ' + formatoMoneda1(bonificacionT) + '</td>  <td class="text-right"> % ' + formatoMoneda1(porcentajeTotal) + '</td> <td class="text-right">$ ' + formatoMoneda1(t_venta_mercaT) + '</td>';
       
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;

        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
         
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+productosT+'</tr>';
          htmlP+=identificacionP+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }
             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">CRÉDITOS</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">VENTA</th>'+titulos;


             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____VENTA_____</th>'+titulosP;
           
if(html!=""){
  credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
  html+='<tr  style="background:black; font-size:12px;"><td>TOTAL</td> <td>FORANEO</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td>$ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>FORANEO</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong>$ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
var renglon = 7+parseInt(arrGlobalCategoria.length)

htmlP+='<tr class="gris" ><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{

               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataForaneo').html(html); 
               $('.contCataForaneoP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
              for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;
}
function loadVentaDiariaRestaurante(lista){ //por categoria
                   var html = '';
          var htmlP = '';
           var identificacion='';
           var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
      for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
        if(arrGlobalEmpleados[hh2].t_venta==4&&arrGlobalEmpleados[hh2].tipo==2&&arrGlobalEmpleados[hh2].estado==1){
          
       for(var j=0;j<arrGlobalF.length; j++){

        if(arrGlobalEmpleados[hh2].ruta==arrGlobalF[j].ruta&&(scv+1)==arrGlobalF[j].sfc&&year==((arrGlobalF[j].fechaf).substring(0,4))){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==arrGlobalF[j].ruta){
              ruta3=arrGlobalRuta[i].nombre;
              rutas=arrGlobalF[j].ruta;
            }
          }
          mer=arrGlobalF[j].v_mercancia;
          if(mer==""||mer==NaN||mer==undefined)mer=0;
          //diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
          pNoVenta=((mer-arrGlobalF[j].t_venta_merca)*100)/parseFloat(arrGlobalF[j].t_venta_merca);
          diferenciaT+=( parseFloat(mer) - parseFloat(arrGlobalF[j].t_venta_merca));
    
          
          if(arrGlobalF[j].t_venta_merca==0)pNoVenta=100;
          if(arrGlobalF[j].t_venta_merca==0)diferenciaT=0;
if(arrGlobalF[j].otros==null||arrGlobalF[j].otros==NaN||arrGlobalF[j].otros==undefined){
  bonificacionT+=parseFloat(0);
  
}else{
  bonificacionT+=parseFloat(arrGlobalF[j].otros);
  
}
          //bonificacionT+=parseFloat(arrGlobalF[j].creditos);
          t_venta_mercaT+=parseFloat(arrGlobalF[j].t_venta_merca);



if(arrGlobalF[j].creditos==null||arrGlobalF[j].creditos==NaN||arrGlobalF[j].creditos==undefined){
  credits=0
  
}else{
  credits=arrGlobalF[j].creditos;
  
}
//porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
if(diferenciaT==0){
porcentajeTotal=100;
}else{
  porcentajeTotal=(diferenciaT*100)/(parseFloat(t_venta_mercaT)-parseFloat(bonificacionT));
  //alert(""+porcentajeTotal+"=("+diferenciaT+"*100)/(parseFloat("+t_venta_mercaT+")-parseFloat("+bonificacionT+"));");
}
         encuentra=1; 
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td >' + ruta3  + '</td><td >'+t_ventas[arrGlobalF[j].tipo-1]+'</td> <td >' + arrGlobalF[j].nombre + '</td><td >$ ' + formatoMoneda1(credits)+ '</td> <td >$ ' + formatoMoneda1(bonificacionT)+ '</td>  <td > % ' + formatoMoneda1(porcentajeTotal) + '</td> <td >$ ' + formatoMoneda1(t_venta_mercaT)+ '</td>';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td><strong> ' + ruta3  + '</strong></td><td ><strong>'+t_ventas[arrGlobalF[j].tipo-1]+'</strong></td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td><td class="text-right">$ ' + formatoMoneda1(credits) + '</td> <td class="text-right">$ ' + formatoMoneda1(bonificacionT) + '</td>  <td class="text-right"> % ' + formatoMoneda1(porcentajeTotal) + '</td> <td class="text-right">$ ' + formatoMoneda1(t_venta_mercaT) + '</td>';
       
        }

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;

        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(lista[h].fecharecepcion!=null&&arrGlobalEmpleados[hh2].ruta==lista[h].ruta&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                  if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
         
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+productosT+'</tr>';
          htmlP+=identificacionP+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }

     }
             titulos=' <th class="letras">RUTA</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">CRÉDITOS</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">VENTA</th>'+titulos;


             titulosP=' <th colspan="1" class=" text-center" style="width: 50px; ">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____VENTA_____</th>'+titulosP;
           
if(html!=""){
  credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
  html+='<tr  style="background:black; font-size:12px;"><td>TOTAL</td> <td>RESTAURANTE</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td>$ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>RESTAURANTES</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong>$ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
var renglon = 7+parseInt(arrGlobalCategoria.length)

htmlP+='<tr class="gris" ><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{

               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataRestaurante').html(html); 
               $('.contCataRestauranteP').html(htmlP); 
              }
              //arrGlobal2 = lista;
             // $('.imprimir').html('');
              for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
prodT=0;
}

function loadVentaDiariaOtros(lista){ //por categoria
          var html = '';
          var htmlP = '';
          var identificacion='';
          var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
          var VOtrosT=0;
    for(var hh2=0;hh2<arrGlobalEmpleados.length; hh2++){
     if(arrGlobalEmpleados[hh2].km==1){
       for(var j=0;j<arrGlobalF.length; j++){
        
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td ></td><td >PEDIDOS</td> <td >' + arrGlobalEmpleados[hh2].nombre_Emple + '</td><td ></td> <td ></td>  <td ></td> ';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td></td><td >PEDIDOS</td> <td ><strong>' +  arrGlobalEmpleados[hh2].nombre_Emple + '</strong></td><td class="text-right"></td> <td class="text-right"></td>  <td class="text-right"></td> ';
        
        

        }
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(arrGlobalEmpleados[hh2].id==lista[h].vendedor&&0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                         
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);

                        }
                        }
                        if(lista[h].dfc==2){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);

                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);

                        }
                        }
                        if(lista[h].dfc==3){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==4){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==6){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+'<td >'+formatoMoneda1(VOtrosT)+'</td>'+productosT+'</tr>';
          htmlP+=identificacionP+'<td class="text-right">'+formatoMoneda1(VOtrosT)+'</td>'+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
ventasT+=VOtrosT;
      
        VOtrosT=0;
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       }
     }
             titulos=' <th class="letras text-center ">_RUTA_</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">_____CRÉDITOS_____</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">_____VENTA_____</th>'+titulos;
             titulosP=' <th   class=" text-center" style="width: 50px; font-size:8px;">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">______VENTA______</th>'+titulosP;
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
          html+='<tr style="background:black; font-size:12px;"><td>TOTAL</td> <td>PEDIDOS</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td> $ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
          htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>PEDIDOS</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong>$ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong> $ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
      var renglon = 7+parseInt(arrGlobalCategoria.length)
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataOtros').html(html); 
               $('.contCataOtrosP').html(htmlP); 
              }
           for(var w=0;w<prodTotales.length; w++){
     prodTotales[w]+=parseFloat(prodT[w]);
}
             totalesCategorias();






prodT=0;
        document.getElementById('loader').style.display = 'none';

}

function loadVentaDiariaMerma(lista){ //por categoria
          var html = '';
          var htmlP = '';
           var renglon = 7+parseInt(arrGlobalCategoria.length)
          html+='<tr class=" " style="background:black;"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          html+='<tr class=" " style="background:black;"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          html+='<tr class=" " style="background:black;"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

          var identificacion='';
          var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
          var VOtrosT=0;
    
      
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td ></td><td >MERMA</td> <td ></td><td ></td> <td ></td>  <td ></td> ';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td></td><td >MERMA</td> <td ><strong></strong></td><td class="text-right"></td> <td class="text-right"></td>  <td class="text-right"></td> ';
        
        

    
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(1==lista[h].merma&& (scv+1)==lista[h].sfc&&lista[h].horarecepcion!=1&& year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==2){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==3){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==4){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==6){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+'<td>'+formatoMoneda1(VOtrosT)+'</td>'+productosT+'</tr>';
          htmlP+=identificacionP+'<td>'+formatoMoneda1(VOtrosT)+'</td>'+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
ventasT=VOtrosT;
      
         VOtrosT=0;
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
      
             titulos=' <th class="letras text-center ">_RUTA_</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">_____CRÉDITOS_____</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">_____VENTA_____</th>'+titulos;
             titulosP=' <th   class=" text-center" style="width: 50px; font-size:8px;">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">______VENTA______</th>'+titulosP;
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
         // html+='<tr style="background:black; font-size:12px;"><td>TOTAL</td> <td>MERMA</td><td></td><td>$ '+formatoMoneda1(creditosT)+'</td> <td> $ '+formatoMoneda1(bonificacionTotal)+'</td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
         // htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>PEDIDOS</strong></td><td></td><td class=" text-right" ><strong>$ '+formatoMoneda1(creditosT)+'</strong></td> <td class=" text-right" ><strong>$ '+formatoMoneda1(bonificacionTotal)+'</strong></td><td></td><td class=" text-right" ><strong> $ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
      var renglon = 7+parseInt(arrGlobalCategoria.length)
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          html+='<tr class="" style="background: black;"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataMermaC').html(html); 
               $('.contCataMermaP').html(htmlP); 
              }
           for(var w=0;w<prodTotales.length; w++){
     //prodTotales[w]+=parseFloat(prodT[w]);
}
            // totalesCategorias();

prodT=0;
        document.getElementById('loader').style.display = 'none';

}
function loadVentaDiariaDegustacion(lista){ //por categoria
          var html = '';
          var htmlP = '';
          var identificacion='';
          var identificacionP='';
          var bonificacionT=0;
          var t_venta_mercaT=0;
          var mer;
          var pNoVenta;
          var creditosT=0; 
          var bonificacionTotal=0; 
          var ventasT=0; 
          var productoTotalS=""; 
          var productoTotal=0; 
          var productoTotalP=0; 
          var prodT = new Array(arrGlobalCategoria.length);
          var porcentajeTotal=0;
          var credits=0;
          var encuentra=0;
          var diferenciaT=0;
          var VOtrosT=0;
   
      
identificacion= '<tr style="font-size:12px; " class="seleccionar text-center" ><td ></td><td >DEGUSTACION</td> <td ></td><td ></td> <td ></td>  <td ></td> ';
identificacionP= '<tr style="font-size:8px; " class="text-center" ><td></td><td >DEGUSTACION</td> <td ><strong></strong></td><td class="text-right"></td> <td class="text-right"></td>  <td class="text-right"></td> ';
        
        

    
ventasT+=t_venta_mercaT;
creditosT+=parseFloat(credits);
bonificacionTotal+=parseFloat(bonificacionT);
bonificacionT=0;
diferenciaT=0;
t_venta_mercaT=0;
        var productosT="";
        var productosTP="";
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              var titulos=""; 
              var titulosP=""; 
              var prod = new Array(arrGlobalCategoria.length);
              var prodN = new Array(arrGlobalCategoria.length);
              var prodC = new Array(arrGlobalCategoria.length);
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(1==lista[h].horarecepcion&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                   
                    if(arrGlobalInventario[hh].idInventario==lista[h].idProducto){
                      pasa=1;

                      if(lista[h].dfc==1){
                        if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==2){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==3){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==4){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                        if(lista[h].dfc==6){
                         if(lista[h].peso!=0){
                          l+=parseFloat(lista[h].piezas);
                          lp+=parseFloat(lista[h].peso);
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }else{
                          l+=parseFloat(lista[h].piezas);
                          lp+=0;
                          VOtrosT+=parseFloat(lista[h].valorMercancia);
                        
                        }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                
               
                  
                   if(suma2==0){
                    for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                       
                            
                           suma=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0}
                           prod[y]+= parseFloat(suma);
                      
                      


                      



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                 
                  }else{
                     for(var y=0;y<arrGlobalCategoria.length; y++){
                           if(arrGlobalInventario[hh].tipoP==arrGlobalCategoria[y].id){
                         
                           suma2=parseFloat(arrGlobalInventario[hh].proporcion)*parseFloat(suma2);
                           if(prod[y]==NaN||prod[y]==""||prod[y]==undefined||prod[y]==null){prod[y]=0;}
                           prod[y]+= parseFloat(suma2);
                 



                           prodN[y]=arrGlobalCategoria[y].nombre;
                           prodC[y]=arrGlobalInventario[hh].tipoP;
                           } 
                    }
                  }
               
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
cantidadproducto=0;
var su=0;

        for(var y=0;y<arrGlobalCategoria.length; y++){
          titulos+='<th class="letras text-center">'+arrGlobalCategoria[y].nombre+'</th>';
          titulosP+='<th colspan="1" class=" text-center" style="width: 70px; ">'+arrGlobalCategoria[y].nombre+'</th>';
          if(prodT[y]==NaN||prodT[y]==""||prodT[y]==undefined||prodT[y]==null){prodT[y]=0;}

              if(prodC[y]==arrGlobalCategoria[y].id){
                   // productoTotal+=parseFloat(prod[y]);
                     productosT+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                     productosTP+= '<td >'+formatoMoneda1(prod[y])+' </td>';
                      prodT[y]+=parseFloat(prod[y]);
              }else{
                     productosT+= '<td >  </td>';
                     productosTP+= '<td >  </td>';
              //productoTotal+=0;
             prodT[y]+=0;
              
              }
             
          productoTotal+='<td  style="background:black;" >'+formatoMoneda1(prodT[y])+' </td>';
          productoTotalP+='<td  class="text-center" ><strong>'+formatoMoneda1(prodT[y])+' </strong></td>';
          
        }
        //alert("vendedor "+arrGlobalCategoria.length+" - "+prod.length);
        
        prodN=0;
         prodC=0;
         prod =0;
              
         if(identificacion==''){html=html;}else{
          html+=identificacion+'<td>'+formatoMoneda1(VOtrosT)+'</td>'+productosT+'</tr>';
          htmlP+=identificacionP+'<td>'+formatoMoneda1(VOtrosT)+'</td>'+productosTP+'</tr>';
          productoTotalS=productoTotal;
          productoTotalSP=productoTotalP;
          
         }
ventasT=VOtrosT;
         VOtrosT=0;
        productoTotal='';
        productoTotalP='';
        productosT='';
        productosTP='';
        identificacion='';
        identificacionP='';
        //alert(prod.length+" - "+prodN.length);
        bonificacionT=0;
        credits=0;
        t_venta_mercaT=0;
       
     
             titulos=' <th class="letras text-center ">_RUTA_</th> <th class="letras">TIPO</th> <th class="letras" style="width: 70px; ">NOMBRE</th> <th class="letras" style="width: 150px; ">_____CRÉDITOS_____</th> <th class="letras">BONIFICACIÓN </th> <th class="letras text-center">PORCENTAJE NO VENTA</th> <th class="letras">_____VENTA_____</th>'+titulos;
             titulosP=' <th   class=" text-center" style="width: 50px; font-size:8px;">RUTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">TIPO</th> <th colspan="1" class=" text-center" style="width: 70px; ">NOMBRE</th> <th colspan="1" class=" text-center" style="width: 70px; ">_____CRÉDITOS_____</th> <th colspan="1" class=" text-center" style="width: 70px; ">BONIFICACIÓN</th> <th colspan="1" class=" text-center" style="width: 70px; ">PORCENTAJE NO VENTA</th> <th colspan="1" class=" text-center" style="width: 70px; ">______VENTA______</th>'+titulosP;
if(html!=""){
          credi+= parseFloat(creditosT);
          boni+=parseFloat(bonificacionTotal);
          s_vent+=parseFloat(ventasT);
          //html+='<tr style="background:black; font-size:12px;"><td>TOTAL</td> <td>DEGUSTACION</td><td></td><td></td> <td></td><td></td><td>$ '+formatoMoneda1(ventasT)+'</td> '+productoTotalS+'</tr>';
          //htmlP+='<tr class="grisclaro" style="font-size:8px;   " class=" text-center" ><td><strong>TOTAL</strong></td> <td class=" text-center" ><strong>DEGUSTACION</strong></td><td></td><td class=" text-right" ><strong></strong></td> <td class=" text-right" ><strong></strong></td><td></td><td class=" text-right" ><strong> $ '+formatoMoneda1(ventasT)+'</strong></td> '+productoTotalSP+'</tr>';
      var renglon = 7+parseInt(arrGlobalCategoria.length)
          htmlP+='<tr class="gris"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';
          html+='<tr class="" style="background: black;"><td colspan="'+renglon+'" style="font-size:6px;" class=" text-center">.</td></tr>';

}

              if(html==undefined){html='';}else{
               $('.titulo2').html(titulos); 
               $('.titulo2P').html(titulosP); 
               $('.contCataDegustacionC').html(html); 
               $('.contCataDegustacionesP').html(htmlP); 
              }
           for(var w=0;w<prodTotales.length; w++){
     //prodTotales[w]+=parseFloat(prodT[w]);
}
            // totalesCategorias();

prodT=0;
        document.getElementById('loader').style.display = 'none';

}






function loadMermaG(lista){ //merma general
              var html = '';
              var htmlp = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 

              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(1==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                          }
                        }
                        if(lista[h].dfc==2){
                          if(lista[h].medida==1){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                          if(lista[h].medida==3){
                            m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            mp+=0;
                          }
                        }
                        if(lista[h].dfc==3){
                          if(lista[h].medida==1){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                          if(lista[h].medida==3){
                            x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            xp+=0;
                          }
                        }
                        if(lista[h].dfc==4){
                          if(lista[h].medida==1){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                          if(lista[h].medida==3){
                            j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            jp+=0;
                          }
                        }
                        if(lista[h].dfc==5){
                          if(lista[h].medida==1){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                          if(lista[h].medida==3){
                            v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            vp+=0;
                          }
                        }
                        if(lista[h].dfc==6){
                          if(lista[h].medida==1){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                          }
                          if(lista[h].medida==2){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp+=0;
                          }
                          if(lista[h].medida==3){
                            s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                            sp +=0;
                          }
                        }
                      }
                    }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                if(l==0){l=""}else{l=formatoMoneda1(l);}
                if(lp==0){lp=""}else{lp=formatoMoneda2(lp);}
                if(m==0){m=""}else{m=formatoMoneda1(m);}
                if(mp==0){mp=""}else{mp=formatoMoneda2(mp);}
                if(x==0){x=""}else{x=formatoMoneda1(x);}
                if(xp==0){xp=""}else{xp=formatoMoneda2(xp);}
                if(j==0){j=""}else{j=formatoMoneda1(j);}
                if(jp==0){jp=""}else{jp=formatoMoneda2(jp);}
                if(v==0){v=""}else{v=formatoMoneda1(v);}
                if(vp==0){vp=""}else{vp=formatoMoneda2(vp);}
                if(s==0){s=""}else{s=formatoMoneda1(s);}
                if(sp==0){sp=""}else{sp=formatoMoneda2(sp);}
                if(suma==0){suma=""}else{suma=formatoMoneda1(suma);}
                if(suma2==0){suma2=""}else{suma2=formatoMoneda2(suma2);}
                  html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +'</td><td>'+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +'</td><td> '+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +' </td><td>'+sp+' </td><td style="background:black;">'+suma+'</td><td style="background:black;"> '+suma2+' </td></tr>';
                  htmlp+= '<tr class="text-right " style="font-size: 7px;" ><td class="text-left grisclaro">' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +'</td><td>'+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +'</td><td> '+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +' </td><td>'+sp+' </td><td >'+suma+'</td><td > '+suma2+' </td></tr>';
                  l=0;
                  m=0;
                  x=0;
                  j=0;
                  v=0;
                  s=0;
                  lp=0;
                  mp=0;
                  xp=0;
                  jp=0;
                  vp=0;
                  sp= 0;
                  cambio =1;  
                  }
                }
                  cambio =0;  
                  pasa=0;
                }
                  $('.contCataR').html(html);
                  $('.ventaDiariaSemanal').html(htmlp);
        document.getElementById('loader').style.display = 'none';

}
function loadVDiariaR(lista){//modal
              var html = '';
              var htmlp = '';
              var html2 = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(0==lista[h].merma&&rutas==lista[h].ruta&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                      }
                      if(lista[h].dfc==2){
                        if(lista[h].medida==1){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                        if(lista[h].medida==3){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                      }
                      if(lista[h].dfc==3){
                        if(lista[h].medida==1){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));

                        }
                        if(lista[h].medida==2){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                        if(lista[h].medida==3){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                      }
                      if(lista[h].dfc==4){
                        if(lista[h].medida==1){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                        if(lista[h].medida==3){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                      }
                      if(lista[h].dfc==5){
                        if(lista[h].medida==1){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                        if(lista[h].medida==3){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                      }
                      if(lista[h].dfc==6){
                        if(lista[h].medida==1){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=0;
                        }
                        if(lista[h].medida==3){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp +=0;
                        }
                      }
                    }
                  }
                  if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                      if(l==0){l=""}else{l=formatoMoneda1(l)}
                      if(lp==0){lp=""}else{lp=formatoMoneda2(lp)}
                      if(m==0){m=""}else{m=formatoMoneda1(m)}
                      if(mp==0){mp=""}else{mp=formatoMoneda2(mp)}
                      if(x==0){x=""}else{x=formatoMoneda1(x)}
                      if(xp==0){xp=""}else{xp=formatoMoneda2(xp)}
                      if(j==0){j=""}else{j=formatoMoneda1(j)}
                      if(jp==0){jp=""}else{jp=formatoMoneda2(jp)}
                      if(v==0){v=""}else{v=formatoMoneda1(v)}
                      if(vp==0){vp=""}else{vp=formatoMoneda2(vp)}
                      if(s==0){s=""}else{s=formatoMoneda1(s)}
                      if(sp==0){sp=""}else{sp=formatoMoneda2(sp)}
                      if(suma==0){suma=""}else{suma=formatoMoneda1(suma)}
                      if(suma2==0){suma2=""}else{suma2=formatoMoneda2(suma2)}
                        html+= '<tr class="seleccionar" id ="'+h+'" style="font-size:12px;   "><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' </td><td>'+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +' </td><td>'+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +' </td><td>'+sp+' </td><td style="background:green;">'+suma+' </td><td >'+suma2+' </td></tr>';
                        //htmlp+= '<tr class="negro" style="font-size:9px; "><td class="text-center">' +  arrGlobalInventario[hh].descripcion +'</td><td class="text-center">'+ l+'  '+lp+'</td><td class="text-center">'+m+' '+mp+'</td><td class="text-center">'+ x +' '+xp+' </td><td class="text-center">'+ j+' '+jp+'  </td><td class="text-center">'+ v +' '+vp+' </td><td class="text-center">'+ s +' '+sp+' </td><td class="text-right">'+suma+' '+suma2+' </td></tr>';
                       l=0;
                        m=0;
                        x=0;
                        j=0;
                        v=0;
                        s=0;
                        lp=0;
                        mp=0;
                        xp=0;
                        jp=0;
                        vp=0;
                        sp= 0;
                        cambio =1;  
                      }
                    }
                    cambio =0;  
                    pasa=0;
                  }
              var l2=0;
              var m2=0;
              var x2=0;
              var j2=0;
              var v2=0;
              var s2=0;
              var l3=0;
              var m3=0;
              var x3=0;
              var j3=0;
              var v3=0;
              var s3= 0;
              var l4 =0, m4=0, x4=0, j4=0, v4=0, s4=0;
              var l5=0, m5=0, x5=0, j5=0, v5=0, s5=0;
              var l6=0, m6=0, x6=0, j6=0, v6=0, s6=0;
              var l7=0, m7=0, x7=0, j7=0, v7=0, s7=0;
              var contador =0;
              var promedio =0;
              var ventaT =0;
              var bon =0;
              var bonT =0;
              var efecT =0;
              var mer =0;
              var credits =0;
              var efectivos =0;
              var f_s_dia2 =0;
              var f_s_real2 =0;
              var diferenciaT =0;
              var pasa2=0;
              var creditosFTemp=0;
              var creditosITemp=0;
              var f_s_t=0;
              var f_s_tR=0;
              for(var h=0;h<arrGlobalF.length; h++){
                if(rutas==arrGlobalF[h].ruta&&(scv+1)==arrGlobalF[h].sfc&&year==((arrGlobalF[h].fechaf).substring(0,4))){
                  bon=arrGlobalF[h].otros;
                  mer=arrGlobalF[h].v_mercancia;
                  efectivos=arrGlobalF[h].efectivo;
                  credits =arrGlobalF[h].creditos;
                  f_s_dia2 =arrGlobalF[h].f_s_dia;
                  f_s_real2 =arrGlobalF[h].f_s_real;
                if(f_s_real2==undefined)f_s_real2=0;
                if(f_s_dia2==undefined)f_s_dia2=0;
                if(credits==undefined)credits=0;
                if(bon==undefined)bon=0;
                if(mer==""||mer==NaN||mer==undefined)mer=0;
                if(efectivos==""||efectivos==NaN||efectivos==undefined)efectivos=0;
                if(arrGlobalF[h].dsfc==1){
                  l=credits;
                  lp=bon;
                  l2=arrGlobalF[h].t_venta_merca;
                  l4=mer;
                  l5=efectivos;
                  l6=f_s_dia2;
                  l7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  l3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(l3==Infinity){l3=100;}
                  
                  contador++;
                  promedio += l3;
                  ventaT += parseFloat(l2);
                  bonT += parseFloat(lp);
                  efecT += parseFloat(l5);
                   
                   if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                  
                   }
                  
                  }
                if(arrGlobalF[h].dsfc==2){
                  m=credits;
                  mp=bon;
                  m2=arrGlobalF[h].t_venta_merca;
                  m4=mer;
                  m5=efectivos;
                  m6=f_s_dia2;
                  m7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  m3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(m3==Infinity){m3=100;}
                  
                  contador++;
                  promedio += m3;
                  ventaT += parseFloat(m2);
                  bonT += parseFloat(mp);
                  efecT += parseFloat(m5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }             
                }
                if(arrGlobalF[h].dsfc==3){
                  x=credits;
                  xp=bon;
                  x2=arrGlobalF[h].t_venta_merca;
                  x4=mer;
                  x5=efectivos;
                  x6=f_s_dia2;
                  x7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  x3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(x3==Infinity){x3=100;}
                  
                  contador++;
                  promedio += x3;
                  ventaT += parseFloat(x2);
                  bonT += parseFloat(xp);
                  efecT += parseFloat(x5);
                   
                 if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==4){
                  j=credits;
                  jp=bon;
                  j2=arrGlobalF[h].t_venta_merca;
                  j4=mer;
                  j5=efectivos;
                  j6=f_s_dia2;
                  j7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  j3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(j3==Infinity){j3=100;}
                  
                  contador++;
                  promedio += j3;
                  ventaT += parseFloat(j2);
                  bonT += parseFloat(jp);
                  efecT += parseFloat(j5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==5){
                  v=credits;
                  vp=bon;
                  v2=arrGlobalF[h].t_venta_merca;
                  v4=mer;
                  v5=efectivos;
                  v6=f_s_dia2;
                  v7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  v3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(v3==Infinity){v3=100;}
                  
                  contador++;
                  promedio += v3;
                  ventaT += parseFloat(v2);
                  bonT += parseFloat(vp);
                  efecT += parseFloat(v5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                 pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==6){
                  s=credits;
                  sp=bon;
                  s2=arrGlobalF[h].t_venta_merca;
                  s4=mer;
                  s5=efectivos;
                  s6=f_s_dia2;
                  s7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  s3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  if(s3==Infinity){s3=100;}
                  
                  contador++;
                  promedio += s3;
                  ventaT += parseFloat(s2);
                  bonT += parseFloat(sp);
                  efecT += parseFloat(s5);
                  
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                  f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
              }
            }
            if(contador==0){
                  p=0;
              }else{
              var p =(diferenciaT*100)/(ventaT-bonT); 
            diferenciaT=0;
            ventaT=0;
            bonT=0;




            }
                
              var lC="black;";
              var mC="black;";
              var xC="black;";
              var jC="black;";
              var vC="black;";
              var sC="black;";
              var tC="black;";
              var lC2="black;";
              var mC2="black;";
              var xC2="black;";
              var jC2="black;";
              var vC2="black;";
              var sC2="black;";
              var tC2="black;";
                if(l3<20){lC="green"}
                if(l3>=20&&l3<40){lC="blue"}
                if(l3>=40&&l3<60){lC="yellow; color:black;"}
                if(l3>=60&&l3<80){lC="orange"}
                if(l3>=80&&l3<100){lC="red"}
                if(m3<20){mC="green"}
                if(m3>=20&&m3<40){mC="blue"}
                if(m3>=40&&m3<60){mC="yellow; color:black;"}
                if(m3>=60&&m3<80){mC="orange"}
                if(m3>=80&&m3<100){mC="red"}
                if(x3<20){xC="green"}
                if(x3>=20&&x3<40){xC="blue"}
                if(x3>=40&&x3<60){xC="yellow; color:black;"}
                if(x3>=60&&x3<80){xC="orange"}
                if(x3>=80&&x3<100){xC="red"}
                if(j3<20){jC="green"}
                if(j3>=20&&j3<40){jC="blue"}
                if(j3>=40&&j3<60){jC="yellow; color:black;"}
                if(j3>=60&&j3<80){jC="orange"}
                if(j3>=80&&j3<100){jC="red"}
                if(v3<20){vC="green"}
                if(v3>=20&&v3<40){vC="blue"}
                if(v3>=40&&v3<60){vC="yellow; color:black;"}
                if(v3>=60&&v3<80){vC="orange"}
                if(v3>=80&&v3<100){vC="red"}
                if(s3<20){sC="green"}
                if(s3>=20&&s3<40){sC="blue"}
                if(s3>=40&&s3<60){sC="yellow; color:black;"}
                if(s3>=60&&s3<80){sC="orange"}
                if(s3>=80&&s3<100){sC="red"}
                if(p <20){tC="green"}
                if(p>=20&&p<40){tC="blue"}
                if(p>=40&&p<60){tC="yellow; color:black;"}
                if(p>=60&&p<80){tC="orange"}
                if(p>=80&&p<100){tC="red"}
                if(l6>0){lC2="green"}else{lC2="red"}
                if(m6>0){mC2="green"}else{mC2="red"}
                if(x6>0){xC2="green"}else{xC2="red"}
                if(j6>0){jC2="green"}else{jC2="red"}
                if(v6>0){vC2="green"}else{vC2="red"}
                if(s6>0){sC2="green"}else{sC2="red"}
                  var controlInterno=parseFloat(efecT)-parseFloat(f_s_t);
                
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CRÉDITOS</td><td>$ '+formatoMoneda1(l)+' </td><td>$ '+formatoMoneda1(m)+'</td><td>$ '+ formatoMoneda1(x) +' </td><td>$ '+formatoMoneda1(j)+'  </td><td>$ '+ formatoMoneda1(v) +' </td><td>$ '+ formatoMoneda1(s)+' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>BONIFICACIÓN</td><td> $ '+formatoMoneda1(lp)+' </td><td>$ '+formatoMoneda1(mp)+'</td><td>$ '+ formatoMoneda1(xp) +' </td><td>$ '+ formatoMoneda1(jp)+'  </td><td>$ '+ formatoMoneda1(vp) +' </td><td>$ '+ formatoMoneda1(sp) +' </td><td>$ '+ formatoMoneda1(bonT) +' </td></tr>';  
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>MERCANCIA</td><td> $ '+formatoMoneda1(l4)+' </td><td>$ '+formatoMoneda1(m4)+'</td><td>$ '+ formatoMoneda1(x4) +' </td><td>$ '+ formatoMoneda1(j4)+'  </td><td>$ '+ formatoMoneda1(v4) +' </td><td>$ '+ formatoMoneda1(s4) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>VENTA</td><td>$ '+formatoMoneda1(l2)+' </td><td>$ '+formatoMoneda1(m2)+'</td><td> $ '+ formatoMoneda1(x2) +' </td><td>$ '+ formatoMoneda1(j2)+'  </td><td>$ '+ formatoMoneda1(v2) +' </td><td> $ '+formatoMoneda1(s2) +' </td><td> $ '+ formatoMoneda1(ventaT) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>EFECTIVO</td><td>$ '+formatoMoneda1(l5)+' </td><td>$ '+formatoMoneda1(m5)+'</td><td> $ '+ formatoMoneda1(x5) +' </td><td>$ '+ formatoMoneda1(j5)+'  </td><td>$ '+ formatoMoneda1(v5) +' </td><td> $ '+formatoMoneda1(s5) +' </td><td> $ '+ formatoMoneda1(efecT) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB DIA</td><td style="background:'+lC2+'">$ '+formatoMoneda1(l6)+' </td><td style="background:'+mC2+'">$ '+formatoMoneda1(m6)+'</td><td style="background:'+xC2+'"> $ '+ formatoMoneda1(x6) +' </td><td style="background:'+jC2+'">$ '+ formatoMoneda1(j6)+'  </td><td style="background:'+vC2+'">$ '+ formatoMoneda1(v6) +' </td><td style="background:'+sC2+'"> $ '+ formatoMoneda1(s6) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CONTROL INTERNO</td><td></td><td ></td><td></td><td></td><td></td><td></td><td>'+formatoMoneda1(controlInterno)+'</td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB REAL</td><td>$ '+formatoMoneda1(l7)+' </td><td>$ '+formatoMoneda1(m7)+'</td><td> $ '+ formatoMoneda1(x7) +' </td><td>$ '+ formatoMoneda1(j7)+'  </td><td>$ '+ formatoMoneda1(v7) +' </td><td> $ '+formatoMoneda1(s7) +' </td><td> $ '+ formatoMoneda1(s7) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>NO VENTA</td><td  id="lunes" style="background:'+lC+'"> % '+formatoMoneda1(l3)+' </td><td  id="martes" style="background:'+mC+'"> % '+formatoMoneda1(m3)+'</td><td  id="miercoles" style="background:'+xC+'"> % '+ formatoMoneda1(x3) +' </td><td  id="jueves" style="background:'+jC+'"> % '+ formatoMoneda1(j3) +'  </td><td  id="viernes" style="background:'+vC+'"> % '+ formatoMoneda1(v3) +' </td><td id="sabado" style="background:'+sC+'"> % '+ formatoMoneda1(s3) +' </td><td id="totalP" style="background:'+tC+'"> % '+  formatoMoneda1(p) +' </td></tr>';
                 
                  $('.contCataModalD').html(html2);
                  $('.contCataModal').html(html);
                  $('.ventaDiariaSemanal').html(htmlp);
}
function loadMermaModal(lista){//modal Merma
              var html = '';
              var htmlp = '';
              var html2 = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(1==lista[h].merma&&rutas==lista[h].ruta&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                      }
                      if(lista[h].dfc==2){
                        if(lista[h].medida==1){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                        if(lista[h].medida==3){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                      }
                      if(lista[h].dfc==3){
                        if(lista[h].medida==1){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));

                        }
                        if(lista[h].medida==2){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                        if(lista[h].medida==3){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                      }
                      if(lista[h].dfc==4){
                        if(lista[h].medida==1){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                        if(lista[h].medida==3){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                      }
                      if(lista[h].dfc==5){
                        if(lista[h].medida==1){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                        if(lista[h].medida==3){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                      }
                      if(lista[h].dfc==6){
                        if(lista[h].medida==1){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=0;
                        }
                        if(lista[h].medida==3){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp +=0;
                        }
                      }
                    }
                  }
                  if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                      if(l==0){l=""}else{l=formatoMoneda1(l);}
                      if(lp==0){lp=""}else{lp=formatoMoneda2(lp);}
                      if(m==0){m=""}else{m=formatoMoneda1(m);}
                      if(mp==0){mp=""}else{mp=formatoMoneda2(mp);}
                      if(x==0){x=""}else{x=formatoMoneda1(x);}
                      if(xp==0){xp=""}else{xp=formatoMoneda2(xp);}
                      if(j==0){j=""}else{j=formatoMoneda1(j);}
                      if(jp==0){jp=""}else{jp=formatoMoneda2(jp);}
                      if(v==0){v=""}else{v=formatoMoneda1(v);}
                      if(vp==0){vp=""}else{vp=formatoMoneda2(vp);}
                      if(s==0){s=""}else{s=formatoMoneda1(s);}
                      if(sp==0){sp=""}else{sp=formatoMoneda2(sp);}
                      if(suma==0){suma=""}else{suma=formatoMoneda1(suma);}
                      if(suma2==0){suma2=""}else{suma2=formatoMoneda2(suma2);}
                        html+= '<tr class="seleccionar" id ="'+h+'" style="font-size:12px;   "><td>' +  arrGlobalInventario[hh].descripcion +'</td><td> '+ l +' </td><td>'+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +' </td><td>'+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +'</td><td> '+sp+' </td><td style="background:green;">'+suma+'</td><td style="background:green;"> '+suma2+' </td></tr>';
                        htmlp+= '<tr class="negro text-right" style="font-size:7px; "><td class="text-left">' +  arrGlobalInventario[hh].descripcion +'</td><td class="text-center">'+ l+'</td><td>  '+lp+'</td><td class="text-center">'+m+'</td><td> '+mp+'</td><td class="text-center">'+ x +'</td><td> '+xp+' </td><td class="text-center">'+ j+'</td><td> '+jp+'  </td><td class="text-center">'+ v +'</td><td> '+vp+' </td><td class="text-center">'+ s +'</td><td> '+sp+' </td><td class="text-right">'+suma+'</td><td> '+suma2+' </td></tr>';
                       l=0;
                        m=0;
                        x=0;
                        j=0;
                        v=0;
                        s=0;
                        lp=0;
                        mp=0;
                        xp=0;
                        jp=0;
                        vp=0;
                        sp= 0;
                        cambio =1;  
                      }
                    }
                    cambio =0;  
                    pasa=0;
                  }
              var l2=0;
              var m2=0;
              var x2=0;
              var j2=0;
              var v2=0;
              var s2=0;
              var l3=0;
              var m3=0;
              var x3=0;
              var j3=0;
              var v3=0;
              var s3= 0;
              var l4 =0, m4=0, x4=0, j4=0, v4=0, s4=0;
              var l5=0, m5=0, x5=0, j5=0, v5=0, s5=0;
              var l6=0, m6=0, x6=0, j6=0, v6=0, s6=0;
              var l7=0, m7=0, x7=0, j7=0, v7=0, s7=0;
              var contador =0;
              var promedio =0;
              var ventaT =0;
              var bon =0;
              var bonT =0;
              var efecT =0;
              var mer =0;
              var credits =0;
              var efectivos =0;
              var f_s_dia2 =0;
              var f_s_real2 =0;
              var diferenciaT =0;
              var pasa2=0;
              var creditosFTemp=0;
              var creditosITemp=0;
              var f_s_t=0;
              var f_s_tR=0;
              for(var h=0;h<arrGlobalF.length; h++){
                if(rutas==arrGlobalF[h].ruta&&(scv+1)==arrGlobalF[h].sfc&&year==((arrGlobalF[h].fechaf).substring(0,4))){
                  bon=arrGlobalF[h].otros;
                  mer=arrGlobalF[h].v_mercancia;
                  efectivos=arrGlobalF[h].efectivo;
                  credits =arrGlobalF[h].creditos;
                  f_s_dia2 =arrGlobalF[h].f_s_dia;
                  f_s_real2 =arrGlobalF[h].f_s_real;
                if(f_s_real2==undefined)f_s_real2=0;
                if(f_s_dia2==undefined)f_s_dia2=0;
                if(credits==undefined)credits=0;
                if(bon==undefined)bon=0;
                if(mer==""||mer==NaN||mer==undefined)mer=0;
                if(efectivos==""||efectivos==NaN||efectivos==undefined)efectivos=0;
                if(arrGlobalF[h].dsfc==1){
                  l=credits;
                  lp=bon;
                  l2=arrGlobalF[h].t_venta_merca;
                  l4=mer;
                  l5=efectivos;
                  l6=f_s_dia2;
                  l7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  l3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += l3;
                  ventaT += parseFloat(l2);
                  bonT += parseFloat(lp);
                  efecT += parseFloat(l5);
                   
                   if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                  
                   }
                  
                  }
                if(arrGlobalF[h].dsfc==2){
                  m=credits;
                  mp=bon;
                  m2=arrGlobalF[h].t_venta_merca;
                  m4=mer;
                  m5=efectivos;
                  m6=f_s_dia2;
                  m7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  m3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += m3;
                  ventaT += parseFloat(m2);
                  bonT += parseFloat(mp);
                  efecT += parseFloat(m5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }             
                }
                if(arrGlobalF[h].dsfc==3){
                  x=credits;
                  xp=bon;
                  x2=arrGlobalF[h].t_venta_merca;
                  x4=mer;
                  x5=efectivos;
                  x6=f_s_dia2;
                  x7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  x3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += x3;
                  ventaT += parseFloat(x2);
                  bonT += parseFloat(xp);
                  efecT += parseFloat(x5);
                   
                 if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==4){
                  j=credits;
                  jp=bon;
                  j2=arrGlobalF[h].t_venta_merca;
                  j4=mer;
                  j5=efectivos;
                  j6=f_s_dia2;
                  j7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  j3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += j3;
                  ventaT += parseFloat(j2);
                  bonT += parseFloat(jp);
                  efecT += parseFloat(j5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==5){
                  v=credits;
                  vp=bon;
                  v2=arrGlobalF[h].t_venta_merca;
                  v4=mer;
                  v5=efectivos;
                  v6=f_s_dia2;
                  v7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  v3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += v3;
                  ventaT += parseFloat(v2);
                  bonT += parseFloat(vp);
                  efecT += parseFloat(v5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                 pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==6){
                  s=credits;
                  sp=bon;
                  s2=arrGlobalF[h].t_venta_merca;
                  s4=mer;
                  s5=efectivos;
                  s6=f_s_dia2;
                  s7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  s3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += s3;
                  ventaT += parseFloat(s2);
                  bonT += parseFloat(sp);
                  efecT += parseFloat(s5);
                  
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                  f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
              }
            }
            if(contador==0){
                  p=0;
              }else{
              var p =(diferenciaT*100)/(ventaT-bonT); 
            




            }
                
              var lC="black;";
              var mC="black;";
              var xC="black;";
              var jC="black;";
              var vC="black;";
              var sC="black;";
              var tC="black;";
              var lC2="black;";
              var mC2="black;";
              var xC2="black;";
              var jC2="black;";
              var vC2="black;";
              var sC2="black;";
              var tC2="black;";
                if(l3<20){lC="green"}
                if(l3>=20&&l3<40){lC="blue"}
                if(l3>=40&&l3<60){lC="yellow; color:black;"}
                if(l3>=60&&l3<80){lC="orange"}
                if(l3>=80&&l3<100){lC="red"}
                if(m3<20){mC="green"}
                if(m3>=20&&m3<40){mC="blue"}
                if(m3>=40&&m3<60){mC="yellow; color:black;"}
                if(m3>=60&&m3<80){mC="orange"}
                if(m3>=80&&m3<100){mC="red"}
                if(x3<20){xC="green"}
                if(x3>=20&&x3<40){xC="blue"}
                if(x3>=40&&x3<60){xC="yellow; color:black;"}
                if(x3>=60&&x3<80){xC="orange"}
                if(x3>=80&&x3<100){xC="red"}
                if(j3<20){jC="green"}
                if(j3>=20&&j3<40){jC="blue"}
                if(j3>=40&&j3<60){jC="yellow; color:black;"}
                if(j3>=60&&j3<80){jC="orange"}
                if(j3>=80&&j3<100){jC="red"}
                if(v3<20){vC="green"}
                if(v3>=20&&v3<40){vC="blue"}
                if(v3>=40&&v3<60){vC="yellow; color:black;"}
                if(v3>=60&&v3<80){vC="orange"}
                if(v3>=80&&v3<100){vC="red"}
                if(s3<20){sC="green"}
                if(s3>=20&&s3<40){sC="blue"}
                if(s3>=40&&s3<60){sC="yellow; color:black;"}
                if(s3>=60&&s3<80){sC="orange"}
                if(s3>=80&&s3<100){sC="red"}
                if(p <20){tC="green"}
                if(p>=20&&p<40){tC="blue"}
                if(p>=40&&p<60){tC="yellow; color:black;"}
                if(p>=60&&p<80){tC="orange"}
                if(p>=80&&p<100){tC="red"}
                if(l6>0){lC2="green"}else{lC2="red"}
                if(m6>0){mC2="green"}else{mC2="red"}
                if(x6>0){xC2="green"}else{xC2="red"}
                if(j6>0){jC2="green"}else{jC2="red"}
                if(v6>0){vC2="green"}else{vC2="red"}
                if(s6>0){sC2="green"}else{sC2="red"}
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td>$ '+ parseFloat(bonT).toFixed(2) +' </td></tr>';  
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td> $ '+ parseFloat(ventaT).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td> $ '+ parseFloat(efecT).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB DIA</td><td style="background:'+lC2+'">$ '+parseFloat(l6).toFixed(2)+' </td><td style="background:'+mC2+'">$ '+parseFloat(m6).toFixed(2)+'</td><td style="background:'+xC2+'"> $ '+ parseFloat(x6).toFixed(2) +' </td><td style="background:'+jC2+'">$ '+ parseFloat(j6).toFixed(2)+'  </td><td style="background:'+vC2+'">$ '+ parseFloat(v6).toFixed(2) +' </td><td style="background:'+sC2+'"> $ '+ parseFloat(s6).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>NO VENTA</td><td  id="lunes" style="background:'+lC+'"> % '+parseFloat(l3).toFixed(2)+' </td><td  id="martes" style="background:'+mC+'"> % '+parseFloat(m3).toFixed(2)+'</td><td  id="miercoles" style="background:'+xC+'"> % '+ parseFloat(x3).toFixed(2) +' </td><td  id="jueves" style="background:'+jC+'"> % '+ parseFloat(j3).toFixed(2) +'  </td><td  id="viernes" style="background:'+vC+'"> % '+ parseFloat(v3).toFixed(2) +' </td><td id="sabado" style="background:'+sC+'"> % '+ parseFloat(s3).toFixed(2) +' </td><td id="totalP" style="background:'+tC+'"> % '+  (p).toFixed(2) +' </td></tr>';
                  
                  $('.contCataModalD').html(html2);
                  
                  $('.contCataModal').html(html);
                
}
function loadMermaPrint(lista){//modal Merma
              var html = '';
              var htmlp = '';
              var html2 = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0; 
              var vendedorM;
              
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(1==lista[h].merma&&rutas==lista[h].ruta&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                      }
                      if(lista[h].dfc==2){
                        if(lista[h].medida==1){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                        if(lista[h].medida==3){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                      }
                      if(lista[h].dfc==3){
                        if(lista[h].medida==1){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));

                        }
                        if(lista[h].medida==2){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                        if(lista[h].medida==3){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                      }
                      if(lista[h].dfc==4){
                        if(lista[h].medida==1){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                        if(lista[h].medida==3){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                      }
                      if(lista[h].dfc==5){
                        if(lista[h].medida==1){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                        if(lista[h].medida==3){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                      }
                      if(lista[h].dfc==6){
                        if(lista[h].medida==1){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=0;
                        }
                        if(lista[h].medida==3){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp +=0;
                        }
                      }
                    }
                  }
                  if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                      if(l==0){l=""}else{l=formatoMoneda1(l);}
                      if(lp==0){lp=""}else{lp=formatoMoneda2(lp);}
                      if(m==0){m=""}else{m=formatoMoneda1(m);}
                      if(mp==0){mp=""}else{mp=formatoMoneda2(mp);}
                      if(x==0){x=""}else{x=formatoMoneda1(x);}
                      if(xp==0){xp=""}else{xp=formatoMoneda2(xp);}
                      if(j==0){j=""}else{j=formatoMoneda1(j);}
                      if(jp==0){jp=""}else{jp=formatoMoneda2(jp);}
                      if(v==0){v=""}else{v=formatoMoneda1(v);}
                      if(vp==0){vp=""}else{vp=formatoMoneda2(vp);}
                      if(s==0){s=""}else{s=formatoMoneda1(s);}
                      if(sp==0){sp=""}else{sp=formatoMoneda2(sp);}
                      if(suma==0){suma=""}else{suma=formatoMoneda1(suma);}
                      if(suma2==0){suma2=""}else{suma2=formatoMoneda2(suma2);}
                        html+= '<tr class="seleccionar" id ="'+h+'" style="font-size:12px;   "><td>' +  arrGlobalInventario[hh].descripcion +'</td><td> '+ l +' </td><td>'+lp+'</td><td>'+m+' </td><td>'+mp+'</td><td>'+ x +' </td><td>'+xp+' </td><td>'+ j+' </td><td>'+jp+'  </td><td>'+ v +' </td><td>'+vp+' </td><td>'+ s +'</td><td> '+sp+' </td><td style="background:green;">'+suma+'</td><td style="background:green;"> '+suma2+' </td></tr>';
                        htmlp+= '<tr class="negro text-right" style="font-size:7px; "><td class="text-left">' +  arrGlobalInventario[hh].descripcion +'</td><td class="text-center">'+ l+'</td><td>  '+lp+'</td><td class="text-center">'+m+'</td><td> '+mp+'</td><td class="text-center">'+ x +'</td><td> '+xp+' </td><td class="text-center">'+ j+'</td><td> '+jp+'  </td><td class="text-center">'+ v +'</td><td> '+vp+' </td><td class="text-center">'+ s +'</td><td> '+sp+' </td><td class="text-right">'+suma+'</td><td> '+suma2+' </td></tr>';
                       l=0;
                        m=0;
                        x=0;
                        j=0;
                        v=0;
                        s=0;
                        lp=0;
                        mp=0;
                        xp=0;
                        jp=0;
                        vp=0;
                        sp= 0;
                        cambio =1;  
                      }
                    }
                    cambio =0;  
                    pasa=0;
                  }
              var l2=0;
              var m2=0;
              var x2=0;
              var j2=0;
              var v2=0;
              var s2=0;
              var l3=0;
              var m3=0;
              var x3=0;
              var j3=0;
              var v3=0;
              var s3= 0;
              var l4 =0, m4=0, x4=0, j4=0, v4=0, s4=0;
              var l5=0, m5=0, x5=0, j5=0, v5=0, s5=0;
              var l6=0, m6=0, x6=0, j6=0, v6=0, s6=0;
              var l7=0, m7=0, x7=0, j7=0, v7=0, s7=0;
              var contador =0;
              var promedio =0;
              var ventaT =0;
              var bon =0;
              var bonT =0;
              var efecT =0;
              var mer =0;
              var credits =0;
              var efectivos =0;
              var f_s_dia2 =0;
              var f_s_real2 =0;
              var diferenciaT =0;
              var pasa2=0;
              var creditosFTemp=0;
              var creditosITemp=0;
              var f_s_t=0;
              var f_s_tR=0;
              for(var h=0;h<arrGlobalF.length; h++){
                if(rutas==arrGlobalF[h].ruta&&(scv+1)==arrGlobalF[h].sfc&&year==((arrGlobalF[h].fechaf).substring(0,4))){
                      vendedorM=arrGlobalF[h].nombre;                  
                  bon=arrGlobalF[h].otros;
                  mer=arrGlobalF[h].v_mercancia;
                  efectivos=arrGlobalF[h].efectivo;
                  credits =arrGlobalF[h].creditos;
                  f_s_dia2 =arrGlobalF[h].f_s_dia;
                  f_s_real2 =arrGlobalF[h].f_s_real;
                if(f_s_real2==undefined)f_s_real2=0;
                if(f_s_dia2==undefined)f_s_dia2=0;
                if(credits==undefined)credits=0;
                if(bon==undefined)bon=0;
                if(mer==""||mer==NaN||mer==undefined)mer=0;
                if(efectivos==""||efectivos==NaN||efectivos==undefined)efectivos=0;
                if(arrGlobalF[h].dsfc==1){
                  l=credits;
                  lp=bon;
                  l2=arrGlobalF[h].t_venta_merca;
                  l4=mer;
                  l5=efectivos;
                  l6=f_s_dia2;
                  l7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  l3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += l3;
                  ventaT += parseFloat(l2);
                  bonT += parseFloat(lp);
                  efecT += parseFloat(l5);
                   
                   if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                  
                   }
                  
                  }
                if(arrGlobalF[h].dsfc==2){
                  m=credits;
                  mp=bon;
                  m2=arrGlobalF[h].t_venta_merca;
                  m4=mer;
                  m5=efectivos;
                  m6=f_s_dia2;
                  m7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  m3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += m3;
                  ventaT += parseFloat(m2);
                  bonT += parseFloat(mp);
                  efecT += parseFloat(m5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }             
                }
                if(arrGlobalF[h].dsfc==3){
                  x=credits;
                  xp=bon;
                  x2=arrGlobalF[h].t_venta_merca;
                  x4=mer;
                  x5=efectivos;
                  x6=f_s_dia2;
                  x7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  x3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += x3;
                  ventaT += parseFloat(x2);
                  bonT += parseFloat(xp);
                  efecT += parseFloat(x5);
                   
                 if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==4){
                  j=credits;
                  jp=bon;
                  j2=arrGlobalF[h].t_venta_merca;
                  j4=mer;
                  j5=efectivos;
                  j6=f_s_dia2;
                  j7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  j3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += j3;
                  ventaT += parseFloat(j2);
                  bonT += parseFloat(jp);
                  efecT += parseFloat(j5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==5){
                  v=credits;
                  vp=bon;
                  v2=arrGlobalF[h].t_venta_merca;
                  v4=mer;
                  v5=efectivos;
                  v6=f_s_dia2;
                  v7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  v3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += v3;
                  ventaT += parseFloat(v2);
                  bonT += parseFloat(vp);
                  efecT += parseFloat(v5);
                   
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                   f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                 pasa2=1
                  }
                   }
                }
                if(arrGlobalF[h].dsfc==6){
                  s=credits;
                  sp=bon;
                  s2=arrGlobalF[h].t_venta_merca;
                  s4=mer;
                  s5=efectivos;
                  s6=f_s_dia2;
                  s7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  s3=((mer-arrGlobalF[h].t_venta_merca)*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += s3;
                  ventaT += parseFloat(s2);
                  bonT += parseFloat(sp);
                  efecT += parseFloat(s5);
                  
                  if(f_s_dia2!=0){
                    creditosFTemp=credits;
              f_s_t+=parseFloat(f_s_dia2);
                  f_s_tR=parseFloat(f_s_real2);

                  if(pasa2==0){
                    creditosITemp=parseFloat(arrGlobalF[h].loquedeberiatraer)+parseFloat(f_s_dia2);
                  pasa2=1
                  }
                   }
                }
              }
            }
            if(contador==0){
                  p=0;
              }else{
              var p =(diferenciaT*100)/(ventaT-bonT); 
            




            }
                
              var lC="black;";
              var mC="black;";
              var xC="black;";
              var jC="black;";
              var vC="black;";
              var sC="black;";
              var tC="black;";
              var lC2="black;";
              var mC2="black;";
              var xC2="black;";
              var jC2="black;";
              var vC2="black;";
              var sC2="black;";
              var tC2="black;";
                if(l3<20){lC="green"}
                if(l3>=20&&l3<40){lC="blue"}
                if(l3>=40&&l3<60){lC="yellow; color:black;"}
                if(l3>=60&&l3<80){lC="orange"}
                if(l3>=80&&l3<100){lC="red"}
                if(m3<20){mC="green"}
                if(m3>=20&&m3<40){mC="blue"}
                if(m3>=40&&m3<60){mC="yellow; color:black;"}
                if(m3>=60&&m3<80){mC="orange"}
                if(m3>=80&&m3<100){mC="red"}
                if(x3<20){xC="green"}
                if(x3>=20&&x3<40){xC="blue"}
                if(x3>=40&&x3<60){xC="yellow; color:black;"}
                if(x3>=60&&x3<80){xC="orange"}
                if(x3>=80&&x3<100){xC="red"}
                if(j3<20){jC="green"}
                if(j3>=20&&j3<40){jC="blue"}
                if(j3>=40&&j3<60){jC="yellow; color:black;"}
                if(j3>=60&&j3<80){jC="orange"}
                if(j3>=80&&j3<100){jC="red"}
                if(v3<20){vC="green"}
                if(v3>=20&&v3<40){vC="blue"}
                if(v3>=40&&v3<60){vC="yellow; color:black;"}
                if(v3>=60&&v3<80){vC="orange"}
                if(v3>=80&&v3<100){vC="red"}
                if(s3<20){sC="green"}
                if(s3>=20&&s3<40){sC="blue"}
                if(s3>=40&&s3<60){sC="yellow; color:black;"}
                if(s3>=60&&s3<80){sC="orange"}
                if(s3>=80&&s3<100){sC="red"}
                if(p <20){tC="green"}
                if(p>=20&&p<40){tC="blue"}
                if(p>=40&&p<60){tC="yellow; color:black;"}
                if(p>=60&&p<80){tC="orange"}
                if(p>=80&&p<100){tC="red"}
                if(l6>0){lC2="green"}else{lC2="red"}
                if(m6>0){mC2="green"}else{mC2="red"}
                if(x6>0){xC2="green"}else{xC2="red"}
                if(j6>0){jC2="green"}else{jC2="red"}
                if(v6>0){vC2="green"}else{vC2="red"}
                if(s6>0){sC2="green"}else{sC2="red"}
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td>$ '+ parseFloat(bonT).toFixed(2) +' </td></tr>';  
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td> $ '+ parseFloat(ventaT).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td> $ '+ parseFloat(efecT).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB DIA</td><td style="background:'+lC2+'">$ '+parseFloat(l6).toFixed(2)+' </td><td style="background:'+mC2+'">$ '+parseFloat(m6).toFixed(2)+'</td><td style="background:'+xC2+'"> $ '+ parseFloat(x6).toFixed(2) +' </td><td style="background:'+jC2+'">$ '+ parseFloat(j6).toFixed(2)+'  </td><td style="background:'+vC2+'">$ '+ parseFloat(v6).toFixed(2) +' </td><td style="background:'+sC2+'"> $ '+ parseFloat(s6).toFixed(2) +' </td></tr>';
                 // html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>NO VENTA</td><td  id="lunes" style="background:'+lC+'"> % '+parseFloat(l3).toFixed(2)+' </td><td  id="martes" style="background:'+mC+'"> % '+parseFloat(m3).toFixed(2)+'</td><td  id="miercoles" style="background:'+xC+'"> % '+ parseFloat(x3).toFixed(2) +' </td><td  id="jueves" style="background:'+jC+'"> % '+ parseFloat(j3).toFixed(2) +'  </td><td  id="viernes" style="background:'+vC+'"> % '+ parseFloat(v3).toFixed(2) +' </td><td id="sabado" style="background:'+sC+'"> % '+ parseFloat(s3).toFixed(2) +' </td><td id="totalP" style="background:'+tC+'"> % '+  (p).toFixed(2) +' </td></tr>';
                  //alert(htmlp);
                  //$('.contCataModalD').html(html2);
                  
                  //$('.contCataModal').html(html);
                  $('.MermaSemanalM').html(htmlp);
      document.getElementById('oculto7M').style.display = 'block';
        document.getElementById('oculto7MT').style.display = 'block';
        document.getElementById('oculto2MT').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
        document.getElementById('fondoBlanco').style.display = 'block';
        
    var controlC = 'MERMA POR VENDEDOR (SEMANA: '+(scv+1)+')';
        vendedorM = 'VENDEDOR:<strong> '+ vendedorM+'</strong>';
        $('.controlC').html(controlC);
        $('.nombreVendedor').html(vendedorM);
        window.print(); 
        document.getElementById('oculto7M').style.display = 'none';
        document.getElementById('oculto7MT').style.display = 'none';
        document.getElementById('oculto2MT').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
        document.getElementById('fondoBlanco').style.display = 'none';


}
function loadVDiaria(lista){
              var html = '';
              var htmlp = '';
              var html2 = '';
              var html2p = '';
              var l=0;
              var m=0;
              var x=0;
              var j=0;
              var v=0;
              var s=0;
              var lp=0;
              var mp=0;
              var xp=0;
              var jp=0;
              var vp=0;
              var sp=0;
              var cambio=0;
              var pasa=0;
              for(var hh=0;hh<arrGlobalInventario.length; hh++){
                for(var h=0;h<lista.length; h++){
                  if(0==lista[h].merma&&rutas==lista[h].ruta&&scv==lista[h].sfc&&year2==((lista[h].fechadespachof).substring(0,4))){
                    if(arrGlobalInventario[hh].descripcion==lista[h].descripcionventa){
                      pasa=1;
                      if(lista[h].dfc==1){
                        if(lista[h].medida==1){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                        if(lista[h].medida==3){
                          l+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          lp+=0;
                        }
                      }
                      if(lista[h].dfc==2){
                        if(lista[h].medida==1){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                        if(lista[h].medida==3){
                          m+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          mp+=0;
                        }
                      }
                      if(lista[h].dfc==3){
                        if(lista[h].medida==1){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                        if(lista[h].medida==3){
                          x+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          xp+=0;
                        }
                      }
                      if(lista[h].dfc==4){
                        if(lista[h].medida==1){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                        if(lista[h].medida==3){
                          j+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          jp+=0;
                        }
                      }
                      if(lista[h].dfc==5){
                        if(lista[h].medida==1){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                        if(lista[h].medida==3){
                          v+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          vp+=0;
                        }
                      }
                      if(lista[h].dfc==6){
                        if(lista[h].medida==1){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov));
                        }
                        if(lista[h].medida==2){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp+=0;
                        }
                        if(lista[h].medida==3){
                          s+=(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv));
                          sp +=0;
                        }
                      }
                    }
                  }
              if((lista.length-1)==h&&pasa==1){
              var suma= parseFloat(l)+parseFloat(m)+parseFloat(x)+parseFloat(j)+parseFloat(v)+parseFloat(s);
              var suma2= parseFloat(lp)+parseFloat(mp)+parseFloat(xp)+parseFloat(jp)+parseFloat(vp)+parseFloat(sp);
                if(l==0){l="0"}else{l=parseFloat(l).toFixed(2)}
                if(lp==0){lp="0"}else{lp=parseFloat(lp).toFixed(3)}
                if(m==0){m="0"}else{m=parseFloat(m).toFixed(2)}
                if(mp==0){mp="0"}else{mp=parseFloat(mp).toFixed(3)}
                if(x==0){x="0"}else{x=parseFloat(x).toFixed(2)}
                if(xp==0){xp="0"}else{xp=parseFloat(xp).toFixed(3)}
                if(j==0){j="0"}else{j=parseFloat(j).toFixed(2)}
                if(jp==0){jp="0"}else{jp=parseFloat(jp).toFixed(3)}
                if(v==0){v="0"}else{v=parseFloat(v).toFixed(2)}
                if(vp==0){vp="0"}else{vp=parseFloat(vp).toFixed(3)}
                if(s==0){s="0"}else{s=parseFloat(s).toFixed(2)}
                if(sp==0){sp="0"}else{sp=parseFloat(sp).toFixed(3)}
                if(suma==0){suma="0.000"}else{suma="<strong> "+parseFloat(suma).toFixed(2)+"</strong>"}
                if(suma2==0){suma2="0.000"}else{suma2="<strong> "+parseFloat(suma2).toFixed(3)+"</strong>"}
                  //html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' '+lp+'</td><td>'+m+' '+mp+'</td><td>'+ x +' '+xp+' </td><td>'+ j+' '+jp+'  </td><td>'+ v +' '+vp+' </td><td>'+ s +' '+sp+' </td><td style="background:green;">'+suma+' '+suma2+' </td></tr>';
                 
              html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' '+lp+'</td><td>'+m+' '+mp+'</td><td>'+ x +' '+xp+' </td><td>'+ j+' '+jp+'  </td><td>'+ v +' '+vp+' </td><td>'+ s +' '+sp+' </td><td style="background:green;">'+suma+' '+suma2+' </td></tr>';
                  
                  htmlp+= '<tr class="negro" style="font-size:7px; "><td class="text-left"><strong>' +  arrGlobalInventario[hh].descripcion +'</strong></td><td class="text-center">'+ l+' </td><td class="text-center">'+lp+' </td><td class="text-center">'+m+'</td><td class="text-center">'+mp+' </td><td class="text-center">'+ x +'</td><td class="text-center">'+xp+' </td><td class="text-center">'+ j+' </td><td class="text-center">'+jp+' </td><td class="text-center">'+ v +' </td><td class="text-center">'+vp+' </td><td class="text-center">'+ s +'</td><td class="text-center">'+sp+' </td><td class="text-right">'+suma+'</td><td class="text-right">'+suma2+' </td></tr>';


                 // htmlp+= '<tr class="negro" style="font-size:9px; "><td class="text-center">' +  arrGlobalInventario[hh].descripcion +'</td><td class="text-center">'+ l+'  '+lp+'</td><td class="text-center">'+m+' '+mp+'</td><td class="text-center">'+ x +' '+xp+' </td><td class="text-center">'+ j+' '+jp+'  </td><td class="text-center">'+ v +' '+vp+' </td><td class="text-center">'+ s +' '+sp+' </td><td class="text-right">'+suma+' '+suma2+' </td></tr>';
                l=0;
                        m=0;
                        x=0;
                        j=0;
                        v=0;
                        s=0;
                        lp=0;
                        mp=0;
                        xp=0;
                        jp=0;
                        vp=0;
                        sp= 0;
                        cambio =1;  
                      }
                    }
                    cambio =0;  
                    pasa=0;
                  }
              var l2=0;
              var m2=0;
              var x2=0;
              var j2=0;
              var v2=0;
              var s2=0;
              var l3=0;
              var m3=0;
              var x3=0;
              var j3=0;
              var v3=0;
              var s3= 0;
              var l4 =0, m4=0, x4=0, j4=0, v4=0, s4=0;
              var l5=0, m5=0, x5=0, j5=0, v5=0, s5=0;
              var l6=0, m6=0, x6=0, j6=0, v6=0, s6=0;
              var l7=0, m7=0, x7=0, j7=0, v7=0, s7=0;
              var contador =0;
              var promedio =0;
              var ventaT =0;
              var bon =0;
              var bonT =0;
              var efecT =0;
              var mer =0;
              var credits =0;
              var efectivos =0;
              var f_s_dia2 =0;
              var f_s_real2 =0;
              var diferenciaT =0;

              for(var h=0;h<arrGlobal4.length; h++){
                if(rutas==arrGlobal4[h].ruta&&(scv)==arrGlobal4[h].sfc&&year==((arrGlobal4[h].fechaf).substring(0,4))){
                  bon=arrGlobalF[h].otros;
                  mer=arrGlobalF[h].v_mercancia;
                  efectivos=arrGlobalF[h].efectivo;
                  credits =arrGlobalF[h].creditos;
                  f_s_dia2 =arrGlobalF[h].f_s_dia;
                  f_s_real2 =arrGlobalF[h].f_s_real;
                if(f_s_real2==undefined)f_s_real2=0;
                if(f_s_dia2==undefined)f_s_dia2=0;
                if(credits==undefined)credits=0;
                if(bon==undefined)bon=0;
                if(mer==""||mer==NaN||mer==undefined)mer=0;
                if(efectivos==""||efectivos==NaN||efectivos==undefined)efectivos=0;
                if(arrGlobalF[h].dsfc==1){
                  l=credits;
                  lp=bon;
                  l2=arrGlobalF[h].t_venta_merca;
                  l4=mer;
                  l5=efectivos;
                  l6=f_s_dia2;
                  l7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  l3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += l3;
                  ventaT += parseFloat(l2);
                  bonT += parseFloat(lp);
                  efecT += parseFloat(l5);
                  }
                if(arrGlobalF[h].dsfc==2){
                  m=credits;
                  mp=bon;
                  m2=arrGlobalF[h].t_venta_merca;
                  m4=mer;
                  m5=efectivos;
                  m6=f_s_dia2;
                  m7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  m3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += m3;
                  ventaT += parseFloat(m2);
                  bonT += parseFloat(mp);
                  efecT += parseFloat(m5);
                }
                if(arrGlobalF[h].dsfc==3){
                  x=credits;
                  xp=bon;
                  x2=arrGlobalF[h].t_venta_merca;
                  x4=mer;
                  x5=efectivos;
                  x6=f_s_dia2;
                  x7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  x3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += x3;
                  ventaT += parseFloat(x2);
                  bonT += parseFloat(xp);
                  efecT += parseFloat(x5);
                }
                if(arrGlobalF[h].dsfc==4){
                  j=credits;
                  jp=bon;
                  j2=arrGlobalF[h].t_venta_merca;
                  j4=mer;
                  j5=efectivos;
                  j6=f_s_dia2;
                  j7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  j3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += j3;
                  ventaT += parseFloat(j2);
                  bonT += parseFloat(jp);
                  efecT += parseFloat(j5);
                }
                if(arrGlobalF[h].dsfc==5){
                  v=credits;
                  vp=bon;
                  v2=arrGlobalF[h].t_venta_merca;
                  v4=mer;
                  v5=efectivos;
                  v6=f_s_dia2;
                  v7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  v3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += v3;
                  ventaT += parseFloat(v2);
                  bonT += parseFloat(vp);
                  efecT += parseFloat(v5);
                }
                if(arrGlobalF[h].dsfc==6){
                  s=credits;
                  sp=bon;
                  s2=arrGlobalF[h].t_venta_merca;
                  s4=mer;
                  s5=efectivos;
                  s6=f_s_dia2;
                  s7=f_s_real2;
                  diferenciaT+=(mer-arrGlobalF[h].t_venta_merca);
                  s3=(diferenciaT*100)/parseFloat(arrGlobalF[h].t_venta_merca);
                  contador++;
                  promedio += s3;
                  ventaT += parseFloat(s2);
                  bonT += parseFloat(sp);
                  efecT += parseFloat(s5);
                }
              }
            }
            if(contador==0){
                  p=0;
              }else{
              var p =(diferenciaT*100)/(ventaT-bonT); 
            




            }
                
              var lC="black;";
              var mC="black;";
              var xC="black;";
              var jC="black;";
              var vC="black;";
              var sC="black;";
              var tC="black;";
              var lC2="black;";
              var mC2="black;";
              var xC2="black;";
              var jC2="black;";
              var vC2="black;";
              var sC2="black;";
              var tC2="black;";
                if(l3<20){lC="green"}
                if(l3>=20&&l3<40){lC="blue"}
                if(l3>=40&&l3<60){lC="yellow; color:black;"}
                if(l3>=60&&l3<80){lC="orange"}
                if(l3>=80&&l3<100){lC="red"}
                if(m3<20){mC="green"}
                if(m3>=20&&m3<40){mC="blue"}
                if(m3>=40&&m3<60){mC="yellow; color:black;"}
                if(m3>=60&&m3<80){mC="orange"}
                if(m3>=80&&m3<100){mC="red"}
                if(x3<20){xC="green"}
                if(x3>=20&&x3<40){xC="blue"}
                if(x3>=40&&x3<60){xC="yellow; color:black;"}
                if(x3>=60&&x3<80){xC="orange"}
                if(x3>=80&&x3<100){xC="red"}
                if(j3<20){jC="green"}
                if(j3>=20&&j3<40){jC="blue"}
                if(j3>=40&&j3<60){jC="yellow; color:black;"}
                if(j3>=60&&j3<80){jC="orange"}
                if(j3>=80&&j3<100){jC="red"}
                if(v3<20){vC="green"}
                if(v3>=20&&v3<40){vC="blue"}
                if(v3>=40&&v3<60){vC="yellow; color:black;"}
                if(v3>=60&&v3<80){vC="orange"}
                if(v3>=80&&v3<100){vC="red"}
                if(s3<20){sC="green"}
                if(s3>=20&&s3<40){sC="blue"}
                if(s3>=40&&s3<60){sC="yellow; color:black;"}
                if(s3>=60&&s3<80){sC="orange"}
                if(s3>=80&&s3<100){sC="red"}
                if(p <20){tC="green"}
                if(p>=20&&p<40){tC="blue"}
                if(p>=40&&p<60){tC="yellow; color:black;"}
                if(p>=60&&p<80){tC="orange"}
                if(p>=80&&p<100){tC="red"}
                if(l6>0){lC2="green"}else{lC2="red"}
                if(m6>0){mC2="green"}else{mC2="red"}
                if(x6>0){xC2="green"}else{xC2="red"}
                if(j6>0){jC2="green"}else{jC2="red"}
                if(v6>0){vC2="green"}else{vC2="red"}
                if(s6>0){sC2="green"}else{sC2="red"}
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td>$ '+ parseFloat(bonT).toFixed(2) +' </td></tr>';  
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td> $ '+ parseFloat(ventaT).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td> $ '+ parseFloat(efecT).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB DIA</td><td style="background:'+lC2+'">$ '+parseFloat(l6).toFixed(2)+' </td><td style="background:'+mC2+'">$ '+parseFloat(m6).toFixed(2)+'</td><td style="background:'+xC2+'"> $ '+ parseFloat(x6).toFixed(2) +' </td><td style="background:'+jC2+'">$ '+ parseFloat(j6).toFixed(2)+'  </td><td style="background:'+vC2+'">$ '+ parseFloat(v6).toFixed(2) +' </td><td style="background:'+sC2+'"> $ '+ parseFloat(s6).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>NO VENTA</td><td  id="lunes" style="background:'+lC+'"> % '+parseFloat(l3).toFixed(2)+' </td><td  id="martes" style="background:'+mC+'"> % '+parseFloat(m3).toFixed(2)+'</td><td  id="miercoles" style="background:'+xC+'"> % '+ parseFloat(x3).toFixed(2) +' </td><td  id="jueves" style="background:'+jC+'"> % '+ parseFloat(j3).toFixed(2) +'  </td><td  id="viernes" style="background:'+vC+'"> % '+ parseFloat(v3).toFixed(2) +' </td><td id="sabado" style="background:'+sC+'"> % '+ parseFloat(s3).toFixed(2) +' </td><td id="totalP" style="background:'+tC+'"> % '+  (p).toFixed(2) +' </td></tr>';
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td 8ss="text-center">BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td><strong>$ '+ parseFloat(bonT).toFixed(2) +'</strong> </td></tr>';  
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td><strong> $ '+ parseFloat(ventaT).toFixed(2) +'</strong> </td></tr>';
                  html2p+= '<tr class="text-right"  style="font-size:8px;   "><td class="text-center">NO VENTA</td><td><strong> % '+parseFloat(l3).toFixed(2)+'</strong> </td><td><strong> % '+parseFloat(m3).toFixed(2)+' </strong></td><td> <strong>% '+ parseFloat(x3).toFixed(2) +' </strong></td><td><strong> % '+ parseFloat(j3).toFixed(2) +'  </strong></td><td><strong> % '+ parseFloat(v3).toFixed(2) +'</strong> </td><td><strong> % '+ parseFloat(s3).toFixed(2) +' </strong></td><td><strong> % '+  (p).toFixed(2) +' </strong></td></tr>';
                  
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td><strong> $ '+ parseFloat(efecT).toFixed(2) +'</strong> </td></tr>';
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">FALT/SOB DIA</td><td>$ '+parseFloat(l6).toFixed(2)+' </td><td >$ '+parseFloat(m6).toFixed(2)+'</td><td> $ '+ parseFloat(x6).toFixed(2) +' </td><td>$ '+ parseFloat(j6).toFixed(2)+'  </td><td>$ '+ parseFloat(v6).toFixed(2) +' </td><td> $ '+ parseFloat(s6).toFixed(2) +' </td></tr>';
                  html2p+= '<tr  class="text-right" style="font-size:8px;   "><td class="text-center">FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td><strong> $ '+ parseFloat(s7).toFixed(2) +'</strong> </td></tr>';
                  $('.contCataModalDP').html(html2p);
                  $('.contCataModalD').html(html2);
                  $('.contCataModal').html(html);
        document.getElementById('loader').style.display = 'none';
                  $('.ventaDiariaSemanal').html(htmlp);
}
function loadVentas(lista){
              var html = '';
              var htmlm = '';
              var htmlp = '';
              var no=1;
                  total_merc =0;
              var imprimir = '<li class="impre imprimirList text-center"  onclick="pagare(); ">IMPRIMIR </li>  ';
               




              var num=0;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof){
                  if( total_merc==0){      
                    var nombreV='<th colspan="7" class="nombreV" style="font-size:8px;">Nombre: '+lista[h].vendedor+'</th>'
                        $('nombreV').html(nombreV);
                  }
                  if(lista[h].merma==1){
                        htmlm+= '<tr class="seleccionar" id ="'+h+'" onclick="selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" style="background: red;" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td style="color:red;">' + lista[h].descripcionventa + ' (MERMA)</td><td>' + formatoMoneda1(lista[h].piezas) + '</td><td>' +formatoMoneda2(lista[h].peso) + '</td><td> $ ' + formatoMoneda1(lista[h].precioUnitario) + '</td><td> $ ' + formatoMoneda1(lista[h].valorMercancia) +'</td></tr>';
                  }else{
                        
                        html+= '<tr class="seleccionar" id ="'+h+'" onclick="cambiarcolor(this); selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + formatoMoneda1(lista[h].piezas) + '</td><td>' +formatoMoneda1(lista[h].peso) + '</td><td> $ ' + formatoMoneda1(lista[h].precioUnitario) + '</td><td> $ ' + formatoMoneda1(lista[h].valorMercancia) +'</td></tr>';
                        htmlp+= '<tr class=" " style="font-size:8px;"><td class="text-center">' + no + '</td><td class="text-center">' + lista[h].horadespacho + '</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-left">' + lista[h].descripcionventa + '</td><td class="text-right">' + formatoMoneda1(lista[h].piezas) + '</td><td class="text-right">' +formatoMoneda1(lista[h].peso) + '</td><td class="text-right"> $ ' + formatoMoneda1(lista[h].precioUnitario) + '</td><td class="text-right"><strong> $ ' + formatoMoneda1(lista[h].valorMercancia) +'<strong></td></tr>';
                        total_merc =parseFloat(total_merc) + parseFloat(lista[h].valorMercancia);
                        no++;
                      }
                    }
                  }
                  total_mercancia=total_merc;
                  if(total_merc==0){
                    historial=0;
                  }
                  formatNumber(parseFloat(total_merc));
                  htmlp+= '<tr class=" grisclaro " style="font-size:8px;"><td colspan="6"></td><td class="text-right"><strong> Total: </strong></td><td class="text-right"><strong> $ '+cantidad+'</strong></td></tr>';
                  $('.contCata').html(html);
                  $('.contCatam').html(html);
                  $('.contCatap').html(htmlp);
                  arrGlobal3 = lista;
                  formatNumber(parseFloat(total_merc));
                if(total_merc==0){
              var total = ' <h3 class="letras">TOTAL: $ 0.00</h3>';
                  $('.imprimir').html('');
                }else{
              var total = ' <h3 class="letras">TOTAL: $ '+cantidad+'</h3>';
                  $('.imprimir').html(imprimir);
                }
                  $(".totalVenta").html(total);
}
function loadVPedidos(lista){
              var html = '';
              var htmlm = '';
              var htmlp = '';
              var no=1;
                  total_merc =0;
              var imprimir = '<li class="impre imprimirList text-center"  onclick="pagare(); ">IMPRIMIR </li>  ';
               var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
                 dfc=(diasema.getUTCDay());




              var num=0;
              for(var h=0;h<lista.length; h++){
      
                 
                  if(dfc==lista[h].dfc){
                      html+= '<tr class="seleccionar" id ="'+h+'" onclick="cambiarcolor(this); selectPedido('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + formatoMoneda1(lista[h].piezas) + '</td><td>' +formatoMoneda1(lista[h].peso) + '</td><td> $ ' + formatoMoneda1(lista[h].valorMercancia) +'</td></tr>';
                        htmlp+= '<tr class=" " style="font-size:8px;"><td class="text-center">' + no + '</td><td class="text-center">' + lista[h].horadespacho + '</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-left">' + lista[h].descripcionventa + '</td><td class="text-right">' + formatoMoneda1(lista[h].piezas) + '</td><td class="text-right">' +formatoMoneda1(lista[h].peso) + '</td><td class="text-right"> $ ' + formatoMoneda1(lista[h].precioUnitario) + '</td><td class="text-right"><strong> $ ' + formatoMoneda1(lista[h].valorMercancia) +'<strong></td></tr>';
                        total_merc =parseFloat(total_merc) + parseFloat(lista[h].valorMercancia);
                        no++;
                  }
                                          
                      
                      
                    
                  }
                  total_mercancia=total_merc;
                  if(total_merc==0){
                    historial=0;
                  }
                  formatNumber(parseFloat(total_merc));
                  htmlp+= '<tr class=" grisclaro " style="font-size:8px;"><td colspan="6"></td><td class="text-right"><strong> Total: </strong></td><td class="text-right"><strong> $ '+cantidad+'</strong></td></tr>';
                  $('.contCata').html(html);
                  $('.contCatam').html(html);
                  $('.contCatap').html(htmlp);
                  arrGlobal3 = lista;
                  formatNumber(parseFloat(total_merc));
                if(total_merc==0){
              var total = ' <h3 class="letras">TOTAL: $ 0.00</h3>';
                }else{
              var total = ' <h3 class="letras">TOTAL: $ '+cantidad+'</h3>';
                }
                  $(".totalVenta").html(total);
}
function loadMerma(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectMerma('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $('#modalMerma .contCataMerma').html(htmlm);
                  $('#modalMerma #totalMerma').html('$ '+formatoMoneda1(totalMerma));
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
 var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
       executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}


function loadDeg(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].horarecepcion==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectDeg('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $(' .contCataDeg').html(htmlm);
                  $(' .totalMerma').html('<h3 class="letras">$ '+formatoMoneda1(totalMerma)+'</h3>');
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
var jsonC = {where:{ruta:ruta}}
//upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
  //     executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}



function loadMermaP(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectMermaP('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $(' .contCataMermaP').html(htmlm);
                  $(' .totalMerma').html('<h3 class="letras">$ '+formatoMoneda1(totalMerma)+'</h3>');
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
       executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}


function loadMermaP2(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(0==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectMermaP('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $(' .contCata').html(htmlm);
                  $(' .totalMerma').html('<h3 class="letras">$ '+formatoMoneda1(totalMerma)+'</h3>');
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
       executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}
function loadMermaP3(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(0==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectMermaP3('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $(' .contCataMermaP').html(htmlm);
                  $(' .totalMerma').html('<h3 class="letras">$ '+formatoMoneda1(totalMerma)+'</h3>');
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
var jsonC = {where:{ruta:ruta}}
//7upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
  //     executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}

function loadDeg2(lista){
              var htmlm = '';
              var totalMerma =0 ;
              for(var h=0;h<lista.length; h++){
                if(1==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectDeg2('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                totalMerma += parseFloat(lista[h].valorMercancia);
                }
              }
            
                  $(' .contCataDeg').html(htmlm);
                  $(' .totalMerma').html('<h3 class="letras">$ '+formatoMoneda1(totalMerma)+'</h3>');
                 arrGlobalMerma=lista;
                
var n1 = totalMerma;
var ruta = rutas;
var json2 = {n1:n1};
var jsonC = {where:{ruta:ruta}}
//7upRegistroA2(id_vend,json2,jsonC,  'ventaspasada', loadVentaspasadasSV);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasSV);
  //     executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasSV);


 totalMerma=0; 
}

var arrGlobalMerma;
function totalrec(h,piezas,pUnitario,rec){
              var piezas1 = $('#rec'+h+'').val();
              if(piezas1==undefined){
                piezas1=0;
                }
                valor = (piezas-piezas1)*pUnitario;
                t_v[h]=parseFloat(piezas1).toFixed(2);
                piezasT[h]=parseFloat(piezas1).toFixed(2) ;
                suma(valor, h,rec);
                $('#'+h+'').html('$ '+formatoMoneda1(valor));
}
function totalrec2(h,peso,pUnitario,rec){
            var peso1 = $('#rec'+h+'').val();
            var pieza1 = $('#p'+h+'').val();
              if(peso1==undefined){
                peso1=0;
              }
                valor = (peso-peso1)*pUnitario;
                t_v[h]=parseFloat(peso1).toFixed(2);
                piezasT[h]=parseFloat(pieza1).toFixed(2);
                suma(valor, h, rec);
                $('#'+h+'').html('$ '+formatoMoneda1(valor));
}
function suma(valor, r, v1){
            var totales;
                t_v2[v1]=parseFloat(valor).toFixed(2);
                for(var h=0;h<t_v2.length; h++){
                if( t_v2[h]==NaN ||t_v2[h]==undefined ||t_v2[h]==null){
                  t_v2[h]=0;
                  s_vent += +0;
                }else{
                  s_vent += + parseFloat(t_v2[h]);
                }
              }
              totales = ' <h3 class="letras">VENTA TOTAL: $ '+formatoMoneda1(s_vent)+'</h3>';
              s_vent2=s_vent;
              s_vent=0;
              $(".totalVentas").html(totales);
}
function suma2(valor1, r){
  //arrGlobalVF
  //var totales;
  //alert(s_vent2);
//t_v2[r]=valor;
 //s_vent += +valor;

//s_vent2 += +valor1;
  

  //totales = ' <h3 class="letras">VENTA TOTAL: $ '+(s_vent2).toFixed(2)+'</h3>';

    
    //$(".totalVentas").html(totales);
  
    
} 
var idConta=new Array();
function loadVentasr(lista){
              var v=0;
              var v1=0;
              var html = '';
              var htmlp = '';
                  total_vent =0;
              var imprimir = '  <li class="impre  text-center imprimirList"  onclick="pagare2();">IMPRIMIR</li>';
              var cantidad=0;
              var num=1;
              var total_merc2=0;
              var p=0;
              var saltos=0;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta&&lista[h].fechadespachof==fechacaptura&&lista[h].merma!=1){
                  if(parseFloat(lista[h].medida)==2){
                    p++;
                var p2=p+1;
                    idConta[saltos]='rec'+h;
                    saltos++;
  
                    html+= '<tr style="font-size:13px; " class=""  data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + formatoMoneda1(lista[h].piezas) + '</td><td></td><td> <input type="number" pattern="[0-9]{10}"    class="p'+p+' form-control " id="rec'+h+'" placeholder="0.00" onchange="totalrec('+h+', '+lista[h].piezas+', '+lista[h].precioUnitario+', '+v+'); nextInput('+h+');">' + '</td><td>  ' + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + formatoMoneda1(lista[h].valorMercancia) + '</td><td>  <div id="'+h+'"> $ 0.00</div></td></tr>';
                    htmlp+= '<tr class="" style="font-size:7px; color:black; "><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-left">' + lista[h].descripcionventa + '</td><td class="text-right">' + formatoMoneda1(lista[h].piezas) + '</td ><td class="text-right"></td><td class="text-right">'+formatoMoneda1(lista[h].piezasv) + '</td><td class="text-right"></td><td class="text-right"><strong>'+formatoMoneda1(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv))+'</strong></td><td class="text-right"></td><td class="text-right"> $ ' +formatoMoneda1(lista[h].precioUnitario) + '</td><td class="text-right"> $ ' + formatoMoneda1(lista[h].valorMercancia) + '</td><td class="text-right"> $ '+  formatoMoneda1(lista[h].venta)+'</td></tr>';
                    num++;
                    v++;
                    total_merc2 += parseFloat(lista[h].valorMercancia);
                    total_vent += parseFloat(lista[h].venta);
                  }else{
                    p++;
                    idConta[saltos]='p'+h;
                    saltos++;
                    idConta[saltos]='rec'+h;
                    saltos++;
                    html+= '<tr class="" style="font-size:13px; " data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + formatoMoneda1(lista[h].piezas) + '</td><td>' +formatoMoneda2(lista[h].peso)+ '</td><td> ' + '<input type="number" pattern="[0-9]{10}"  id="p'+h+'" class="p'+p+' form-control " placeholder="0.00" onchange="nextInput2('+h+');" >' + '</td><td>  ' + '<input type="number" pattern="[0-9]{10}"   class="p'+(p+1)+' form-control " id="rec'+h+'" placeholder="0.00" onchange="totalrec2('+h+', '+lista[h].peso+', '+lista[h].precioUnitario+','+v+'); nextInput('+h+');">'  + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + formatoMoneda1(lista[h].valorMercancia) + '</td><td><div id="'+h+'"> $ 0.00</div></td></tr>';
                    p++;
                    
                    
                    htmlp+= '<tr class="" style="font-size:7px;  color: black;"><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-left">' + lista[h].descripcionventa + '</td><td class="text-right">' + formatoMoneda1(lista[h].piezas) + '</td><td  class="text-right">'+formatoMoneda2(lista[h].peso)+'</td><td class="text-right">'+ formatoMoneda1(lista[h].piezasv) + '</td><td class="text-right">'+formatoMoneda2(lista[h].pesov)+'</td><td class="text-right"><strong>'+formatoMoneda2(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv))+'</strong></td><td class="text-right"><strong> '+formatoMoneda2(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov))+'</strong></td><td class="text-right"> $ ' +formatoMoneda1(lista[h].precioUnitario) + '</td><td class="text-right"> $ ' + formatoMoneda1(lista[h].valorMercancia) + '</td><td class="text-right"> $ '+formatoMoneda1(lista[h].venta)  +'</td></tr>';
                    num++;
                    v++;
                    total_merc2 += parseFloat(lista[h].valorMercancia);
                    total_vent += parseFloat(lista[h].venta);
                  }
                }
              }
                    n=v;
                    t_v2 = new Array(n);
                    t_v = new Array(n);
                    piezasT = new Array(n);
                    v=0;
                var noVenta =parseFloat(total_merc2)-parseFloat(total_vent);
                    htmlp+= '<tr class=" " style="font-size:8px;"><td colspan="9"></td><td class="text-right grisclaro"> TOTALES: </td><td class="text-right"> $ '+formatoMoneda1(total_merc2)+'</td><td class="text-right"> $ '+ formatoMoneda1(total_vent)+'</td></tr>';
                    htmlp+= '<tr class=" " style="font-size:8px;"><td colspan="9"></td><td class="text-right grisclaro"> NO VENTA: </td><td class="text-center" colspan="2"> $ '+formatoMoneda1(noVenta)+'</td></tr>';
                    total_vent=0;
                    $('.contCata').html(html);
                    $('.contCatap').html(htmlp);
                    arrGlobalT = lista;
                  if(despachadorR==undefined){
                    $('.imprimir').html('');
                  }else{
                    $('.imprimir').html(imprimir);
                  }
}
function nextInput(num){
              for(var h=0;h<idConta.length; h++){
                if(idConta[h]==('rec'+num)){
              var j=h+1;
                if(idConta[j]==undefined){
                  document.getElementById(idConta[h]).focus();
                  //document.getElementById(idConta[h]).selectionStart = 0;
                }else{
                  document.getElementById(idConta[j]).focus();
                 // document.getElementById(idConta[j]).selectionStart = 0;
                }
              }
            }
}
function nextInput2(num){
            for(var h=0;h<idConta.length; h++){
               if(idConta[h]==('rec'+num)){
              var j=h+1;
                  document.getElementById(idConta[h]).focus();
                 // document.getElementById(idConta[h]).selectionStart = 0;
                }
              }
}
function loadVentasp(lista){
                  arrGlobal4 = lista;
        document.getElementById('loader').style.display = 'none';
        var idProducto = "'idProducto'";
 $('.addV').html('<button type="button" id="add" class="btn btn-ventas insertar add" onclick="addVenta(); document.getElementById('+idProducto+').focus();">INSERTAR</button>');
}
function loadVentasPR(lista){
                  arrGlobal4 = lista;
        //document.getElementById('loader').style.display = 'none';
        var idProducto = "'idProducto'";
 $('.addV').html('<button type="button" id="add" class="btn btn-ventas insertar add" onclick="addVenta(); document.getElementById('+idProducto+').focus();">INSERTAR</button>');
}
function loadVentasp4(lista){
                  arrGlobalF = lista;
}
function loadLogs(lista){
              var html = '';
          for(var h=0;h<lista.length; h++){
               if(lista[h].tipo=="post"||lista[h].tipo=="put"||lista[h].tipo=="delete"){
                  html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this);"><td>' + lista[h].idLog + '</td><td>' + lista[h].data + '</td><td>' + lista[h].idUsuario+ '</td><td>' + lista[h].fecha + '</td><td>' + lista[h].hora +'</td></tr>';
          }
        }
                  $('.contCata').html('');
                  $('.contCata').html(html);
}
function loadVentasp2(lista){
              var html3 = '';
                  arrGlobalE='';
          for(var h=0;h<lista.length; h++){
            if(lista[h].fechaf == today_vv && lista[h].efectivo != null){
              for (var ii=0; ii < arrGlobalRuta.length; ii++) {
                if(arrGlobalRuta[ii].id==lista[h].ruta){
                  ruta3=arrGlobalRuta[ii].nombre;
                }
              }
                  html3+= '<tr class="seleccionar" onclick="selectEV('+lista[h].id+');" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + formatoMoneda1(parseFloat(lista[h].efectivo).toFixed(2)) +'</td></tr>';
            }
          }
                  $('#modalEfectivo .contCataModal').html(html3);
                  arrGlobalE = lista;
                  arrGlobalF = lista;    
}
function loadVentaspasadasVF(lista){
     
}
function loadVentasp3(lista){
            var html = '';
                arrGlobalE='';
            var rutav ='<select class="form-control rv clear" id="rv" name="select">';
            var conta=1;
        for(var i = 0; i <  arrGlobalF.length; i++) {
          if(arrGlobalF[i].fechaf==dateCash2 && arrGlobalF[i].efectivo==null ){
            for (var ii=0; ii < arrGlobalRuta.length; ii++) {
              if(arrGlobalRuta[ii].id==arrGlobalF[i].ruta){
                ruta3=arrGlobalRuta[ii].nombre;
              }
            }
                rutav += '<option onclick="limpiar()" id="'+arrGlobalF[i].id+'" value="'+arrGlobalF[i].id+'" >'+ruta3+' - '+arrGlobalF[i].nombre+'</option>';
                conta++;
              }
            }
                rutav +='</select>';
                $("#modalEfectivo .selectCash").html(rutav);
        for(var h=0;h<lista.length; h++)
          if(lista[h].fechaf == dateCash2 && lista[h].efectivo != null){
            for (var ii=0; ii < arrGlobalRuta.length; ii++) {
              if(arrGlobalRuta[ii].id==lista[h].ruta){
                ruta3=arrGlobalRuta[ii].nombre;
              }
            }
                html+= '<tr class=" seleccionar"  onclick="selectEV('+lista[h].id+');"  data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + formatoMoneda1(parseFloat(lista[h].efectivo).toFixed(2)) +'</td></tr>';
          }
                $('#modalEfectivo .contCataModal').html(html);
                arrGlobalE = lista;
                arrGlobalF = lista;
}
function loadVentaspasadasRS(lista){
            var html2 = '';
                $('contCata').html('');
            var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
            var dianum=(diasema.getUTCDay());
        for(var h=0;h<lista.length; h++){
          if(dianum==6){
            if(lista[h].fechaf==today_v||lista[h].sfc==(noSemana)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[parseInt(lista[h].ruta)-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+formatoMoneda1(parseFloat(lista[h].credito_p).toFixed(2)) + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
            }
          }else{
            if(lista[h].fechaf==today_v||lista[h].sfc==(noSemana+1)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[parseInt(lista[h].ruta)-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+formatoMoneda1(parseFloat(lista[h].credito_p).toFixed(2)) + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>'; 
          }
        }
      }
              $('.contCata').html(html2);
              arrGlobal4 = lista;
}
function loadVentaspasadas(lista){
          var html2 = '';
          var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
          var dianum=(diasema.getUTCDay());
      for(var h=0;h<lista.length; h++){
        if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].f_s_real==undefined)){
          var f=lista[h].fechaf;
          var dayp = f.substring(8,10);
          var monthp = f.substring(5,7);
          var yearp = f.substring(0,4);
          var nomdiap = new Date((parseInt(monthp))+' '+parseInt(dayp)+' ,'+parseInt(yearp));
          var fechap = dias[nomdiap.getUTCDay()-1];
      for(var i=0; i < arrGlobalRuta.length; i++) {
        if(arrGlobalRuta[i].id==lista[h].ruta ){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + t_ventas[lista[h].tipo-1] + '</td><td> $ '+ formatoMoneda1(lista[h].credito_p) + '</td><td> $ ' + formatoMoneda1(lista[h].bonificacion_p) +  '</td><td> $ ' + formatoMoneda1(lista[h].v_mercancia) + '</td><td>'+fechap +'</td></tr>';
              km=lista[h].km;
              gas=lista[h].gas;
              diesel=lista[h].diesel;
              gasolina=lista[h].gasolina;
          }
        }
              $('.contCata').html(html2);
              arrGlobal4 = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadVentaspasadasMerma(lista){
          var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
          var dianum=(diasema.getUTCDay());
          var html2 = '<tr class="seleccionar" onclick="click_mer2();" ><td>  </td><td>CUARTO FRIÓ </td><td></td><td> </td><td></td><td> </td><td></td></tr>';

      for(var h=0;h<lista.length; h++){
        if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].f_s_real==undefined)){
          var f=lista[h].fechaf;
          var dayp = f.substring(8,10);
          var monthp = f.substring(5,7);
          var yearp = f.substring(0,4);
          var nomdiap = new Date((parseInt(monthp))+' '+parseInt(dayp)+' ,'+parseInt(yearp));
          var fechap = dias[nomdiap.getUTCDay()-1];
      for(var i=0; i < arrGlobalRuta.length; i++) {
        if(arrGlobalRuta[i].id==lista[h].ruta ){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html2+= '<tr class="seleccionar" onclick="click_Mer('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + t_ventas[lista[h].tipo-1] + '</td><td> $ '+ formatoMoneda1(lista[h].credito_p) + '</td><td> $ ' + formatoMoneda1(lista[h].bonificacion_p) +  '</td><td> $ ' + formatoMoneda1(lista[h].n1) + '</td><td>'+fechap +'</td></tr>';
              km=lista[h].km;
              gas=lista[h].gas;
              diesel=lista[h].diesel;
              gasolina=lista[h].gasolina;
          }
        }
              $('.contCata').html(html2);
              arrGlobal4 = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadVentaspasadasDeg(lista){
          var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
          var dianum=(diasema.getUTCDay());
          var html2 = '<tr class="seleccionar" onclick="click_Deg2();" ><td>  </td><td>PROMOTORIA </td><td></td><td> </td><td></td><td> </td><td></td></tr>';

      for(var h=0;h<lista.length; h++){
        if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].f_s_real==undefined)){
          var f=lista[h].fechaf;
          var dayp = f.substring(8,10);
          var monthp = f.substring(5,7);
          var yearp = f.substring(0,4);
          var nomdiap = new Date((parseInt(monthp))+' '+parseInt(dayp)+' ,'+parseInt(yearp));
          var fechap = dias[nomdiap.getUTCDay()-1];
      for(var i=0; i < arrGlobalRuta.length; i++) {
        if(arrGlobalRuta[i].id==lista[h].ruta ){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html2+= '<tr class="seleccionar" onclick="click_Deg('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + t_ventas[lista[h].tipo-1] + '</td><td> $ '+ formatoMoneda1(lista[h].credito_p) + '</td><td> $ ' + formatoMoneda1(lista[h].bonificacion_p) +  '</td><td> $ ' + formatoMoneda1(lista[h].n1) + '</td><td>'+fechap +'</td></tr>';
              km=lista[h].km;
              gas=lista[h].gas;
              diesel=lista[h].diesel;
              gasolina=lista[h].gasolina;
          }
        }
              $('.contCata').html(html2);
              arrGlobal4 = lista;
        document.getElementById('loader').style.display = 'none';

}
function loadVentaspasadasSV(lista){}

function loadVentaspasadasSV2(lista){

}
function loadVentaspasadasTF(lista){
          var html2 = '';
          var htmlp = '';
          var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;
      for(var h=0;h<lista.length; h++){
        if (lista[h].sfc==(noSemana+1)&&lista[h].ruta==rutas&&lista[h].despachador!=undefined) {
              html2+= '<tr class="" onclick="cambiarcolor(this);click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+');" data-id="'+ lista[h].id +'"><td> ' +dias[lista[h].dsfc-1]+'</td><td> $' + formatoMoneda1(lista[h].creditos) + '</td><td> $' + formatoMoneda1(lista[h].f_s_dia) + '</td><td> $ ' +formatoMoneda1(lista[h].loquedeberiatraer) + '</td><td> $ '+formatoMoneda1(lista[h].f_s_real) + '</td></tr>';
              htmlp+= '<tr  style="font-size:7px; "><td class="text-center grisclaro">' +dias[lista[h].dsfc-1]+'</td><td class="text-center"> $ ' + formatoMoneda1(lista[h].creditos) + '</td><td class="text-center"> $ ' + formatoMoneda1(lista[h].f_s_dia) + '</td><td class="text-center"> $ ' +formatoMoneda1(lista[h].loquedeberiatraer) + '</td><td class="text-center"> $ '+ formatoMoneda1(lista[h].f_s_real) + '</td></tr>';
        }


 if (lista[h].fechaf==fechacaptura&&lista[h].ruta==rutas) {
            var efect;
            var t_venta_;
            var otr;
            var fsd;
            var creditos;
                total_merc=lista[h].v_mercancia;

                $('.creditos').val(lista[h].creditos);
                $('.otros').val(lista[h].otros);
                $('.efectivo').html('');
                $('.f_s_dia').html('');
                $('.otros1').html('');
                $('.t_venta_merca').html('');
              if(lista[h].f_s_dia==null||lista[h].f_s_dia==undefined||lista[h].f_s_dia==NaN){
                t_venta_=0;
                otr=0;
                fsd=0;
              }else{
                t_venta_=parseFloat(lista[h].t_venta_merca).toFixed(2);
                otr=parseFloat(lista[h].otros).toFixed(2);
                fsd=parseFloat(lista[h].f_s_dia).toFixed(2);
              }
            var sumaefe;
              if(lista[h].efectivo==null||lista[h].efectivo==undefined||lista[h].efectivo==NaN){
                efect="0.00";
              if(lista[h].otros==null||lista[h].otros==undefined||lista[h].otros==NaN){
                sumaefe="0.00";
              }else{
                sumaefe=parseFloat(lista[h].otros).toFixed(2); 
              }
            }else{
                efect=parseFloat(lista[h].efectivo).toFixed(2);
                sumaefe=parseFloat(lista[h].efectivo)+parseFloat(lista[h].otros);
              }
              
             
                $('.otros1').html('$ '+formatoMoneda1(otr));

              
             
                $('.t_venta_merca').html(' $ '+formatoMoneda1(t_venta_));

              
                $('.sumaefec').html('$ '+formatoMoneda1(sumaefe));
                $('.efectivo').html('$ '+formatoMoneda1(efect));
                $('.f_s_dia').html('$ '+formatoMoneda1(fsd));
            }



        
      }
              $('.contCata2').html(html2);
              $('.contCatapp').html(htmlp);
              html2='';
              arrGlobal4 = lista;
              arrGlobal41 = lista;
//document.getElementById('loader').style.display = 'none';
}
function loadDiaRec(lista){
          var html = '';
          var total_merc=0;
      for(var h=0;h<lista.length; h++){
        if(id_vend==lista[h].empleado && today_v == lista[h].fecha){
              html+= '<tr class="seleccionar" onclick="selectVentas('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td> $ ' +0+'</td><td> $ '+0+'</td><td> $ '+ lista[h].precioUnitario + '</td><td> $ ' + lista[h].valorMercancia +'</td><td> $ '+0+'</td></tr>';
              total_merc = total_merc + parseFloat(lista[h].valorMercancia);
        }
      }
              $('.contCata').html(html);
              arrGlobal3 = lista;
          var total = ' <h3 class="letras">TOTAL: $ '+total_merc.toFixed(3)+'</h3>';
              $(".totalVenta").html(total);
}
function loadEmpleados(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo != 2){
              html+= '<tr class="seleccionar" onclick="selectAdministracion('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idEmpleados + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + lista[h].n_seguro + '</td><td>' + lista[h].curp + '</td><td>' + lista[h].domicilio  + '</td><td>' + lista[h].rfc + '</td><td>' + lista[h].tipo + '</td></tr>';
          }else{
              html+= '<tr class="seleccionar" onclick="selectVendedores('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idEmpleados + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + lista[h].n_seguro + '</td><td>' + lista[h].curp + '</td><td>' + lista[h].domicilio  + '</td><td>' + lista[h].rfc + '</td><td>' +  lista[h].n_licencia + '</td><td>' + lista[h].f_exp + '</td><td>' + lista[h].ruta+ '</td><td>' + lista[h].t_venta + '</td><td>' + l_credito + '</td><td>' + l_bon + '</td><td>' + l_merma +'</td></tr>';
          }
              $('.contCata').html(html);
              arrGlobal = lista;
}
function loadEmpleados1(lista){
              arrGlobal2 = lista;
}
function  loadRutas(lista){
          var html = ''; 
          for(var h=0;h<lista.length; h++){
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); selectRuta('+lista[h].id+');" data-id="'+ lista[h].id +'"><td>' + lista[h].nombre  + '</td><td>' + lista[h].descripcion+ '</td></tr>';
          }
          $('.contCata').html(html);
              arrGlobalRuta=lista;
        document.getElementById('loader').style.display = 'none';

}
function  loadRutasUp(lista){
              arrGlobalRuta=lista;
}
function  loadRutas3(lista){
          var html = '';
          var numeroclientes=0;
      for(var h=0;h<lista.length; h++){
        if(n==lista[h].numero){
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); " data-id="'+ lista[h].id +'"><td>' + lista[h].local  + '</td><td>' + lista[h].propietario+'</td><td>' + lista[h].direccion+'</td><td>' + lista[h].telefono + '</td><td style="width:40px" ><div class="btn-group"  data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upCliente1('+ lista[h].id +');">EDITAR</button> <button type="button" class="btn btn-danger btn-sm" onclick="delCliente('+ lista[h].id +');">ELIMINAR</button></div> </td></tr>';  
              numeroclientes++; 
        }
      }
              $('.contCata').html(html);
              arrGlobalClientes=lista;
          if(numeroclientes>=1){
              n1 = numeroclientes;
              json={n1: n1}
              upRegistro2(id_vend,json,'rutas',loadRutasUp)
        }
}
function  loadClientes(lista){
              arrGlobalClientes=lista;
     
}
function  loadRutas2(lista){
          var html = '';
          var num;
      for(var h=0;h<lista.length; h++){
        if(lista[h].n1==null){
              num=0;
        }else{
              num=lista[h].n1;
        }
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); click_Clientes1('+lista[h].id+', '+h+');" data-id="'+ lista[h].id +'"><td>' + lista[h].nombre  + '</td><td>' + num+ '</td></tr>';
        }
              $('.contCata').html(html);
              arrGlobalRuta=lista;
        document.getElementById('loader').style.display = 'none';
}
function  loadRutas1(lista){
              arrGlobalRuta=lista;
}
function  loadMV(lista){
          var html = '';
      for(var h=0;h<lista.length; h++){
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); "><td onClick="selectControlVehicular2('+lista[h].id+')" >' + lista[h].numero+'</td><td onClick="selectControlVehicular2('+lista[h].id+')">' + lista[h].marca+'</td><td onClick="selectControlVehicular2('+lista[h].id+')"> ' + lista[h].modelo+'</td><td onClick="selectControlVehicular2('+lista[h].id+')">' + lista[h].placa+'</td><td style="width:40px" ><div class="btn-group"  data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upControlVehicular1('+ lista[h].id +');">EDITAR</button> <button type="button" class="btn btn-danger btn-sm" onclick="delControlVehicular('+ lista[h].id +');">ELIMINAR</button></div> </td></tr>';
      }
              $('.contCata').html(html);
              arrGlobalVehiculo = lista;
}
function  loadMV2(lista){
              arrGlobalVehiculo = lista;
}
function  loadMantenimiento(lista){
          var html = '';
      for(var h=0;h<lista.length; h++){
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); selectMantenimiento('+lista[h].id+')"><td >' +tipoMantinimiento[lista[h].jerarquia-1]+'</td><td >' + lista[h].vehiculo+'</td><td > ' + lista[h].descripcion+'</td></tr>';
      }
              $('.contCata3').html(html);
              arrGlobalMantenimiento = lista;
      }
          var arrGlobalMantenimiento;
function  loadMantenimientoTipo(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
          if (lista[h].servicio==1) {
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); "><td >'  +lista[h].id+'</td><td>'+ lista[h].vehiculo +'</td><td > ' + lista[h].fecha+'</td><td > ' + tipoMantinimiento[lista[h].jerarquia-1]+'</td><td >'+ lista[h].descripcion+'</td></tr>';
            }
              $('.contCata3').html(html);
              arrGlobalMantenimiento = lista;
}
function loadSalida(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2){
              html+= '<tr class="seleccionar" onclick="click_Salida('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
            }
              $('.contCata').html(html);
              arrGlobal = lista;
}
function modal_Salida(){
              $('#modal_Salida').modal('show');
}
function loadVentaDiariaR(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2&&lista[h].estado==1){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html+= '<tr class="seleccionar text-center" ><td onClick="modal_VDiaria(); rutasR('+ lista[h].ruta+', '+h+');">' + ruta3  + '</td><td onClick="modal_VDiaria(); rutasR('+ lista[h].ruta+', '+h+');">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td> <td onClick="modal_VDiaria(); rutasR('+ lista[h].ruta+', '+h+');">'+t_ventas[lista[h].t_venta-1]+'</td><td onClick=""><button class="btn btn-warning" onclick="rutasRP('+ lista[h].ruta+', '+h+'); ">IMPRIMIR</button></td></tr>';
        }
              $('.contCataR').html(html); 
              arrGlobal2 = lista;
              $('.imprimir').html('');
        document.getElementById('loader').style.display = 'none';

}
function loadVentaDiariaR2(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2&&lista[h].estado==1){
          for(var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html+= '<tr class="seleccionar text-center" ><td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">' + ruta3  + '</td><td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td> <td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">'+t_ventas[lista[h].t_venta-1]+'</td><td onClick=""><button class="btn btn-warning" onclick="rutasRP2('+ lista[h].ruta+', '+h+'); ">IMPRIMIR</button></td></tr>';
        }
              $('.contCataR').html(html);
              arrGlobal2 = lista;
              $('.imprimir').html('');
}
function loadVentaDiariaVG(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2&&lista[h].estado==1){
          for(var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html+= '<tr class="seleccionar text-center" ><td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">' + ruta3  + '</td><td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td> <td onClick="modal_VDiaria(); rutasR2('+ lista[h].ruta+', '+h+');">'+t_ventas[lista[h].t_venta-1]+'</td><td onclick=""><button class="btn btn-warning" onclick="rutasRP2('+ lista[h].ruta+', '+h+'); ">IMPRIMIR</button></td></tr>';
        }
              $('.contCataR').html(html);
              arrGlobal2 = lista;
              $('.imprimir').html('');
}
function loadMermaGV(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2&&lista[h].estado==1){
          for(var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
            }
          }
              html+= '<tr class="seleccionar text-center" ><td onClick="modal_VDiaria(); rutasRM('+ lista[h].ruta+', '+h+');">' + ruta3  + '</td><td onClick="modal_VDiaria(); rutasRM('+ lista[h].ruta+', '+h+');">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td> <td onClick="modal_VDiaria(); rutasRM('+ lista[h].ruta+', '+h+');">'+t_ventas[lista[h].t_venta-1]+'</td><td><button class="btn btn-warning" onclick="rutasRM2('+ lista[h].ruta+', '+h+');">IMPRIMIR</button></td></tr>';
        }
              $('.contCataR').html(html);
              arrGlobal2 = lista;
              $('.imprimir').html('');
        document.getElementById('loader').style.display = 'none';

}

function loadVentaDiariaRS(lista){
          var html = '';
      for(var h=0;h<lista.length; h++)
        if(lista[h].tipo==2&&lista[h].estado==1){
          for (var i=0; i < arrGlobalRuta.length; i++) {
            if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
          }
        }
              html+= '<tr class="seleccionar text-center" onclick="ventaSemanal('+ lista[h].ruta+', '+h+');"><td>' + ruta3  + '</td><td>' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td>'+t_ventas[lista[h].tipo]+'</tr>';
      }
              $('.contCataR').html(html);
              arrGlobal2 = lista;
              $('.imprimir').html('');
}
function loadVentaDiariaRM(lista){
          var html = '';
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2&&lista[h].estado==1){
      for(var i=0; i < arrGlobalRuta.length; i++) {
        if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
        }
      }
              html+= '<tr class="seleccionar text-center"><td>' + ruta3  + '</td><td>' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td>'+t_ventas[lista[h].tipo]+'</tr>';
    }
          $('.contCataR').html(html);
              arrGlobal2 = lista;
          $('.imprimir').html('');
}
function loadDays(lista){
          var html = '';
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2&&lista[h].estado==1){
      for (var i=0; i < arrGlobalRuta.length; i++) {
        if(arrGlobalRuta[i].id==lista[h].ruta){
              ruta3=arrGlobalRuta[i].nombre;
        }
      }
              html+= '<tr class="seleccionar text-center" onclick="click_Salida('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].t_venta+', '+lista[h].l_credito + ', ' + lista[h].l_bon +', '+lista[h].km+')" data-id="'+ lista[h].id +'"><td>' + ruta3  + '</td><td>' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td> $ ' + formatoMoneda1(lista[h].l_credito) + '</td><td> $ ' + formatoMoneda1(lista[h].l_bon) + '</td></tr>';
    }
              $('.contCata').html(html);
              arrGlobal2 = lista;
              $('.imprimir').html('');
}
function ocultar(){
              $('.imprimir').html('');
}
function loadRec(lista){
          var html = '';
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
              html+= '<tr class="seleccionar" onclick="click_Entrada('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].t_venta+', '+lista[h].l_credito + ', ' + lista[h].l_bon +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta - 1]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
    }
              $('.contCata').html(html);
              arrGlobal2 = lista;
}
/*-------------------- agregar registros -----------------------------*/
function addUsuario(){
          var nombre = $(".nombre").val();
          var contrasenia = $(".contrasenia").val();
          var pin = $(".pin").val();
          var tipo = $(".tipo").val();
            if(nombre!= "" && contrasenia != "" && tipo != ""){
          var json = {usuario: nombre, contrasenia: contrasenia, pin: pin, tipo: tipo};
              addRegistro(json, 'usuarios', loadUsuarios);
            }else{
              $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
            }
              getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);
}
function addRuta(){
          var nombre = $(".nombre").val();
          var descripcion = $(".descripcion").val();
            if(nombre!= ""){
              if(descripcion==""){
                descripcion="-";
              }
          var json = {nombre: nombre, descripcion: descripcion};
              addRegistro(json, 'rutas', loadRutas);
          }else{
              $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
          }
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);

}
function addCategoria(){
          var nombre = $(".nombre").val();
          var descripcion = $(".descripcion1").val();
          var jerarquia = $(".jerarquia").val();
            if(nombre!= ""){
              if(descripcion==""){
                descripcion="-";
              }
          var json = {nombre: nombre, descripcion: descripcion, jerarquia: jerarquia};
              addRegistro(json, 'categorias', loadCategorias);
          }else{
              $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
          }
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadCategorias);

}

function addMantenimiento(){
  
  var descripcion = $(".descripcion").val();
  var fecha = $(".fecha").val();
  var vehiculo2 = $(".vehiculo2").val();
  var jerarquia = $(".jerarquia").val();
  var servicio = $(".servicio").val();
var vehiculo= arrGlobalVehiculo[vehiculo2].numero+' - '+ arrGlobalVehiculo[vehiculo2].marca+' ('+arrGlobalVehiculo[vehiculo2].placa+')';
  if(descripcion!= "" && fecha!= ""&& jerarquia!= "" && vehiculo!= ""&&servicio!=""){
    var json = {descripcion: descripcion, jerarquia: jerarquia, vehiculo: vehiculo, fecha: fecha, servicio: servicio};
      
    addRegistro(json, 'mantenimiento', loadMantenimiento);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimiento);

}
function addModalCliente(){
  $('#modalCliente').modal('show');
$('#modalCliente .ruta').val(n);

  
}
function closeCliente(){
  $('#modalCliente').modal('hide');

}

function addCliente(){
  var local = $("#modalCliente .local").val();
  var propietario = $("#modalCliente .propietario").val();
  var credito = $("#modalCliente .credito").val();
  var bonificacion = $("#modalCliente .bonificacion").val();
  var email = $("#modalCliente .email").val();
  var direccion = $("#modalCliente .direccion").val();
  var lng = $("#modalCliente .lng").val();
  var lat = $("#modalCliente .lat").val();
  var fechai = $("#modalCliente .fecha").val();
  var telefono = $("#modalCliente .telefono").val();
  var telefonop = $("#modalCliente .telefonop").val();
  var descripcion = $("#modalCliente .descripcion").val();
  var numero = $("#modalCliente .ruta").val();
$('#modalCliente').modal('hide');
  if(local != "" && propietario != "" &&  direccion != ""){

    var json = {local: local, propietario: propietario, credito: credito, bonificacion: bonificacion, email: email, direccion: direccion, lng: lng, lat: lat, fechai: fechai, telefono: telefono, telefonop: telefonop, descripcion: descripcion, numero: numero};
    addRegistro(json, 'clientes', loadRutas3);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('clientes', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas3);

}



function addInventario(){
  var idInventario = $(".idInventario").val();
  var descripcion = $(".descripcion").val();
  var detalle = $(".detalle").val();
  var mayoreo = $(".mayoreo").val();
  var foraneo = $(".foraneo").val();
  var restaurante = $(".restaurante").val();
  var cantidad = $(".cantidad").val();
  var medida = $(".medida").val();
  var s_min = $(".s_min").val();
  var s_max = $(".s_max").val();
  var tipoP = $(".selectCategoria").val();
  var proporcion = $(".proporcion").val();
if(proporcion=="")proporcion=1;
  if(idInventario != "" && descripcion != "" && detalle != "" && mayoreo != "" && foraneo != "" && restaurante != "" && cantidad != "" && medida != "" && s_min != "" && s_max != ""&& tipoP != ""){

    var json = {idInventario: idInventario, descripcion: descripcion, detalle: detalle, mayoreo: mayoreo, foraneo: foraneo, restaurante: restaurante, cantidad: cantidad, medida: medida, s_min: s_min, s_max: s_max, tipoP: tipoP, proporcion: proporcion};
    addRegistro(json, 'inventarios', loadInventarios);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}

function addNota(){
  var descripcion = $("#modalNotas .descripcion").val();
 var idnombre =id_vend;
  if(descripcion != ""){

    var json = {idnombre: idnombre, descripcion: descripcion};
    addRegistro(json, 'notase', loadNotas);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('notase', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadNotas);
limpiar();
$('eliminarN').html('');
$('guardarN').html('');
}
function addVendedormodal(){
var rutas2 = '<select class="form-control clear rutavende" id:"rutavende" name="rutavende">';

$('#modalVendedor').modal('show');
for (var i=0; i < arrGlobalRuta.length; i++) {

rutas2+='<option value="'+arrGlobalRuta[i].id+'">'+arrGlobalRuta[i].nombre+'</option>';  
}

rutas2+='</select>';  


$('#modalVendedor .noruta').html(rutas2);

}
function addVendedor(){

  var idEmpleados = $(" #modalVendedor .idVendedor").val();
  var nombre_Emple = $("#modalVendedor .nombre").val();
  var paterno_Emple = $("#modalVendedor .a_paterno").val();
  var materno_Emple = $("#modalVendedor .a_materno").val();
  var n_seguro = $("#modalVendedor .n_seguro").val();
  var curp = $("#modalVendedor .curp").val();
  var domicilio = $("#modalVendedor .domicilio").val();
  var rfc = $("#modalVendedor .rfc").val();
  var tipo = 2;
  var n_licencia = $("#modalVendedor .n_licencia").val();
  var f_exp = $("#modalVendedor .f_licencia").val();
  
 // var ruta = document.getElementById('#modalVendedor rutavende');
  //alert(ruta);
  var ruta = $("#modalVendedor .rutavende").val();
  var t_venta = $("#modalVendedor .tipoventa").val();
  var l_credito = $("#modalVendedor .credito").val();
  var l_bon = $("#modalVendedor .bonificacion").val();
  var merma = $("#modalVendedor .merma").val();
  var km = $("#modalVendedor .f_Ahorro").val();
  var tipocontrato = $("#modalVendedor .tipocontrato").val();
  var iniciocontrato = $("#modalVendedor .iniciocontrato").val();
  var fincontrato = $("#modalVendedor .fincontrato").val();
  var telp = $("#modalVendedor .telp").val();
  var tell = $("#modalVendedor .tell").val();
  var fnacimiento = $("#modalVendedor .fnacimiento").val();

  var estado = $(" #modalVendedor .estado").val();
  var ingreso = $("#modalVendedor .fnacimiento").val();
  var vacaciones = $("#modalVendedor .vacaciones").val();
  var renuncia = $("#modalVendedor .renuncia").val();
  var reingresos = $("#modalVendedor .reingresos").val();
  var razon = $(" .razon").val();
  var solicitud = $("#modalVendedor .solicitud:checked").val();
  var ine2 = $("#modalVendedor .ine2:checked").val();
  var curp2 = $("#modalVendedor .curp2:checked").val();
  var rfc2 = $("#modalVendedor .rfc2:checked").val();
  var nss = $("#modalVendedor .nss:checked").val();
  var acta = $("#modalVendedor .acta:checked").val();
  var cdomicilio = $("#modalVendedor .cdomicilio:checked").val();
  var foto = $("#modalVendedor .foto:checked").val();
  var recomendaciones = $("#modalVendedor .recomendaciones:checked").val();
  var licenciac = $("#modalVendedor .licenciac:checked").val();
  var antecedentes = $("#modalVendedor .antecedentes:checked").val();
  var ineaval = $("#modalVendedor .ineaval:checked").val();
  var predial = $("#modalVendedor .predial:checked").val();
  var comprobanted = $("#modalVendedor .comprobanted:checked").val();
  var pagare = $("#modalVendedor .pagare:checked").val();
 //   var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes, ineaval: ineaval, predial: predial, comprobanted: comprobanted, pagare:pagare };

  


$('#modalVendedor').modal('hide');


   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes, ineaval: ineaval, predial: predial, comprobanted: comprobanted, pagare:pagare, km:km };
    addRegistro(json, 'empleados', loadVendedores);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
  limpiar();
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}
function closeControlVehicular(){
  limpiar();
$('#modalControlVehicular').modal('hide');

}
function modalControlVehicular(){
$('#modalControlVehicular').modal('show');
}
function addVehiculo(){
$('#modalControlVehicular').modal('hide');

  var marca = $("#modalControlVehicular .marca").val();
  var noserie = $("#modalControlVehicular .noserie").val();
  var modelo = $("#modalControlVehicular .modelo").val();
  var tipo = $("#modalControlVehicular .tipo").val();
  var color = $("#modalControlVehicular .color").val();
  var combustible = $("#modalControlVehicular .combustible").val();
  var km = $("#modalControlVehicular .kmV").val();
  var placa = $("#modalControlVehicular .placas").val();
  var numero = $("#modalControlVehicular .numero").val();
  var aseguradora = $("#modalControlVehicular .aseguradora").val();
  var poliza = $("#modalControlVehicular .poliza").val();
  var iniciopoliza = $("#modalControlVehicular .iniciopoliza").val();
  var finpoliza = $("#modalControlVehicular .finpoliza").val();
  var endoso = $("#modalControlVehicular .endoso").val();
  var inciso = $("#modalControlVehicular .inciso").val();
  var tel = $("#modalControlVehicular .tel").val();
    var json = {marca: marca, noserie: noserie, modelo: modelo, tipo: tipo, color: color, combustible: combustible, km: km, placa: placa, aseguradora: aseguradora, numero: numero, poliza: poliza, iniciopoliza: iniciopoliza, finpoliza: finpoliza, endoso: endoso, inciso: inciso, tel: tel};
 
  if(marca != "" && noserie != "" && modelo != "" && tipo != "" && color != "" && combustible != "" && km != "" && placa != ""){

    addRegistro(json, 'm_vehicular', loadMV);
    $(".eliminam").html('');
$(".guardam").html('');
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV);

}

function addModalEmpleado(){
  $('#modalAdministracion').modal('show');
}
function addECliente(){
  var nombre_Emple = $('#modalECliente .eCliente').val();
var tipo = 2;
var km = 1;
var ruta = nombre_Emple;
var idEmpleados = $('#modalECliente .idECliente').val();
if(idEmpleados != "" && nombre_Emple != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, tipo:tipo, km:km, ruta: ruta };   
    //var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};
    addRegistro(json,'empleados', loadEClientes);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEClientes);
limpiar();
$('#modalECliente').modal('hide');
}
function addEmpleado(){
   $('#modalAdministracion').modal('hide');
  var idEmpleados = $("#modalAdministracion .idEmpleado").val();
  var nombre_Emple = $("#modalAdministracion .nombre").val();
  var paterno_Emple = $("#modalAdministracion .a_paterno").val();
  var materno_Emple = $("#modalAdministracion .a_materno").val();
  var n_seguro = $("#modalAdministracion .n_seguro").val();
  var curp = $("#modalAdministracion .curp").val();
  var domicilio = $("#modalAdministracion .domicilio").val();
  var rfc = $("#modalAdministracion .rfc").val();
  var tipo = $("#modalAdministracion .tipoempleado").val();
  var n_licencia = $("#modalAdministracion .n_licencia").val();
  var f_exp = $("#modalAdministracion .f_licencia").val();
  var ruta = $("#modalAdministracion .rutavende").val();
  var t_venta = $("#modalAdministracion .tipoventa").val();
  var tipocontrato = $("#modalAdministracion .tipocontrato").val();
  var iniciocontrato = $("#modalAdministracion .iniciocontrato").val();
  var fincontrato = $("#modalAdministracion .fincontrato").val();
  var telp = $("#modalAdministracion .telp").val();
  var tell = $("#modalAdministracion .tell").val();
  var fnacimiento = $("#modalAdministracion .fnacimiento").val();

   
  var estado = $(" #modalAdministracion .estado").val();
  var ingreso = $("#modalAdministracion .fnacimiento").val();
  var vacaciones = $("#modalAdministracion .vacaciones").val();
  var renuncia = $("#modalAdministracion .renuncia").val();
  var reingresos = $("#modalAdministracion .reingresos").val();
  var razon = $("#modalAdministracion .razon").val();

  var solicitud = $("#modalAdministracion .solicitud:checked").val();
  var ine2 = $("#modalAdministracion .ine2:checked").val();
  var curp2 = $("#modalAdministracion .curp2:checked").val();
  var rfc2 = $("#modalAdministracion .rfc2:checked").val();
  var nss = $("#modalAdministracion .nss:checked").val();
  var acta = $("#modalAdministracion .acta:checked").val();
  var cdomicilio = $("#modalAdministracion .cdomicilio:checked").val();
  var foto = $("#modalAdministracion .foto:checked").val();
  var recomendaciones = $("#modalAdministracion .recomendaciones:checked").val();
  var licenciac = $("#modalAdministracion .licenciac:checked").val();
  var antecedentes = $("#modalAdministracion .antecedentes:checked").val();
   // var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes};

   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes};
    
    //var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};
    addRegistro(json,'empleados', loadAdministracion);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);
limpiar();
}
function addfecha(){
var fecha = '<input type="date" class="form-control clear fecha selectfecha" >';
var dia = 
$(".fecha_hoy").html(fecha);

$('.imprimir').html('');
  }

function addVenta(){ 
   newTimer();
var dateVenta = new Date();  
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcion").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  var vendedor=nombre_vend;
  var horaVenta = dateVenta.getHours();
  var minutosVenta = dateVenta.getMinutes();
  var segundosVenta = dateVenta.getSeconds();
  if(horaVenta.length==1){horaVenta="0"+horaVenta;}
  if(minutosVenta.length==1){minutosVenta="0"+minutosVenta;}
  if(segundosVenta.length==1){segundosVenta="0"+segundosVenta;}
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var n2=f_Ahorro;
 var piezasv=0;
  var hora = horaVenta+":"+minutosVenta+":"+segundosVenta; 
  var horadespacho = horaVenta+":"+minutosVenta+":"+segundosVenta; 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var merma=0;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
  
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobal.length; h++){

    if(arrGlobal[h].idInventario==idProducto){
     
         if(arrGlobal[h].medida==2 || arrGlobal[h].medida==3){//si es pieza y litros
             medida=arrGlobal[h].medida;
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              //alert(arrGlobal2[n_vend].t_venta);
              if(arrGlobal2[n_vend].t_venta==1){
                 precioUnitario=arrGlobal[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==2){
                precioUnitario=arrGlobal[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==3){
                precioUnitario=arrGlobal[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==4){
                precioUnitario=arrGlobal[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobal[h].medida;
               if(arrGlobal2[n_vend].t_venta==1){
                 precioUnitario=arrGlobal[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==2){
                precioUnitario=arrGlobal[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==3){
                precioUnitario=arrGlobal[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==4){
                precioUnitario=arrGlobal[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
 
  for(var i=0;i<arrGlobal4.length; i++){
  for(var j=0;j<arrGlobal2.length; j++){
 //alert(arrGlobal4[i].ruta+" == "+arrGlobal2[j].ruta);
 if(arrGlobal4[i].ruta==arrGlobal2[j].ruta){
  
 num=1;  //alert(arrGlobal4[i].ruta+" == "+rutas);
        
               
       //        alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fecha+"=="+today_v);

        if(arrGlobal4[i].ruta==rutas && arrGlobal4[i].fechaf==today_v && num2 == 0 ){
     
     //          alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fechaf+"=="+today_v);
             num2=1;
         }else{
          //num2=0;
          num=0;
         }
        }
      }} 
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var vehiculo = vehiculoA2;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var t_venta_merca = 0;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}

  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistroA(json,jsonC, 'ventadiaria', loadVentas);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);





   var dsc= dc;
    //alert(dfc+" ---- "+sfc);
   
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta, dsc: dsc, sc: sc, fechaf: fechaf, dsfc: dsfc, sfc: sfc, vehiculo: vehiculo, despachador2: despachador2};

   //alert("num = "+num+" num 2 = "+num2);

  if(num==0 && num2==0){
   //alert("registrar ruta: "+rutas);
   //alert("add "+sc+" == "+sfc+" && "+dsfc+" == "+dfc+" && "+fechadespacho+" == "+fechadespachof);
 $('.addV').html('');
    document.getElementById('loader').style.display = 'block';
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta, dsc: dsc, sc: sc, fechaf: fechaf, dsfc: dsfc, sfc: sfc, vehiculo: vehiculo, despachador2: despachador2, t_venta_merca: t_venta_merca, n2:n2};

   addRegistro2(json2, 'ventaspasada', loadVentasp);
     
//click_Salida(id_vend , n_vend, ruta, tipo, credito_p, bonificacion_p)
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

num2=1;
  }else{
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

for(var j=0;j<arrGlobal4.length; j++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(arrGlobal4[j].ruta==rutas && arrGlobal4[j].fechaf==today_v){
    //alert(arrGlobal4[j].ruta+" - "+arrGlobal4[j].fecha);
  var idv= arrGlobal4[j].id;
    //alert("up "+sc+" == "+sfc+" && "+dc+" == "+dsfc+" && "+fechadespacho+" == "+fechadespachof);

  upRegistro2(idv, json2, 'ventaspasada', loadVentasp);
  
  }

    }
    
     //alert("actualizar ruta: "+rutas+" id: "+id);
             //alert("almacenar: "+arrGlobal2[i].id+", "+today_v+", "+rutas+", "+nombre_vend+", "+cred+ ", "+boni);
  //upRegistro2(id, json2, 'ventaspasada', loadVentasp);
   //addRegistro(json2, 'ventaspasada', loadVentasp);
  
  }
   
  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }


 

 //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}
function addPedido(){ 
   newTimer();
var dateVenta = new Date();  
  var idProducto = $(".idProductoP").val();
  var descripcionventa = $(".descripcionP").val();
  var piezas = $(".piezasP").val();
  var peso = $(".pesoP").val();
  var valorMercancia = $(".importeP").val();
  var vendedor=nombre_vend;
  var horaVenta = dateVenta.getHours();
  var minutosVenta = dateVenta.getMinutes();
  var segundosVenta = dateVenta.getSeconds();
  if(horaVenta.length==1){horaVenta="0"+horaVenta;}
  if(minutosVenta.length==1){minutosVenta="0"+minutosVenta;}
  if(segundosVenta.length==1){segundosVenta="0"+segundosVenta;}
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var n2=f_Ahorro;
 var piezasv=0;
  var hora = horaVenta+":"+minutosVenta+":"+segundosVenta; 
  var horadespacho = horaVenta+":"+minutosVenta+":"+segundosVenta; 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;
var vendedor = f_Ahorro;

  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var merma=0;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
  if(idProducto != "" && descripcionventa != "" && piezas != "" && valorMercancia != ""){
 
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;

  var despachador2=despachador22;

  var t_venta_merca = 0;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  var jsonC = {where:{fechadespachof:fechadespachof, vendedor:vendedor}}

  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, valorMercancia: valorMercancia, vendedor:vendedor, horadespacho: horadespacho, empleado: empleado, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, valorMercancia:valorMercancia, merma: merma};
   addRegistroA(json,jsonC, 'ventadiaria', loadVPedidos);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);

 executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVPedidos);

   
  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }


 

 //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}
function loadVentasS(lista){}

function addMerma(){   
   newTimer();
  var idProducto = $("#modalMerma .idProductoM").val();
  var descripcionventa = $("#modalMerma .descripcionM").val();
  var piezas = $("#modalMerma .piezasM").val();
  var peso = $("#modalMerma .pesoM").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var piezasv=0;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
 // alert(t_vende);
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobalInventario[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
                // alert(arrGlobalMerma[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
           //  alert(arrGlobalMerma[n_vend1].tipo);
            //  alert(n_vend+" -- "+id_vend);
              if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
  // addRegistro3(json, 'ventadiaria', loadMerma);
  
//getFunction('ventadiaria','error al agregar registro',loadMerma );
  
  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}}
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistroA(json,jsonC, 'ventadiaria', loadMerma);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMerma);





  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}

function addMermaP(){   
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var piezasv=0;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
 // alert(t_vende);
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobalInventario[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
                // alert(arrGlobalMerma[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
           //  alert(arrGlobalMerma[n_vend1].tipo);
            //  alert(n_vend+" -- "+id_vend);
              if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
  // addRegistro3(json, 'ventadiaria', loadMerma);
  
//getFunction('ventadiaria','error al agregar registro',loadMerma );
  
  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}}
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistroA(json,jsonC, 'ventadiaria', loadMermaP);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP);





  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}



function addDeg(){   
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var piezasv=0;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
 // alert(t_vende);
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobalInventario[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
                // alert(arrGlobalMerma[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
           //  alert(arrGlobalMerma[n_vend1].tipo);
            //  alert(n_vend+" -- "+id_vend);
              if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}


  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
  // addRegistro3(json, 'ventadiaria', loadMerma);
  
//getFunction('ventadiaria','error al agregar registro',loadMerma );
  
  var horarecepcion = 1;
 var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta, horarecepcion:horarecepcion}}
  
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma, horarecepcion: horarecepcion};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistroA(json,jsonC, 'ventadiaria', loadDeg);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg);





  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}




function addMermaP2(){   
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var piezasv=0;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
 // alert(t_vende);
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobalInventario[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
            
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                
              
              

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
            
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
             
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
 
  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}}
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
  addRegistroA(json,jsonC, 'ventadiaria', loadMermaP3);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP3);

  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}

function addDeg2(){   
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0;
  }
 var pesov=0;
 var piezasv=0;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
 // alert(t_vende);
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobalInventario[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
            
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                
              
              

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
            
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
             
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = 1;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var horarecepcion = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
 
  var jsonC = {where:{fechadespachof: fechadespachof, horarecepcion: horarecepcion}}
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, horarecepcion: horarecepcion, merma: merma};
  addRegistroA(json,jsonC, 'ventadiaria', loadDeg2);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg2);

  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}









/*------------------- limpiar funciones --------------------------*/
function limpiar(){
  $(".clear").val("");
  
  if(element!=undefined){
element.style.background="#031727";
//alert(element);
  }


}
function limpiarm(){
  $("#modalInventario .clear").val("");
}
/*-------------------- eliminar elementos -------------------------*/
function delUsuario(){
  var nombre = $(".nombre").val();
  var contrasenia = $(".contrasenia").val();
  var tipo = $(".tipo").val();

  if(nombre!= "" && contrasenia != "" && tipo != ""){
  delRegistro(idGlobal, 'usuarios', loadUsuarios);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el usuario a eliminar.'); 
      $('#modal').modal('show');
 
}
getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);
limpiar();
}

function delMantenimiento1(){
  
  var descripcion = $(".descripcion").val();
  var fecha = $(".fecha").val();
  var vehiculo2 = $(".vehiculo2").val();
  var jerarquia = $(".jerarquia").val();
  var servicio = $(".servicio").val();
  if(descripcion!= "" && fecha!= ""&& jerarquia!= "" && vehiculo!= ""&&servicio!=""){
  delRegistro(idGlobal,'mantenimiento', loadMantenimiento);      
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimiento);

}




function delRuta(){
  var nombre = $(".nombre").val();


  if(nombre!= ""){
  delRegistro(idGlobal, 'rutas', loadRutas);
}else {
   $('#modal .textModal').html('Seleccione de la tabla la ruta a eliminar.'); 
      $('#modal').modal('show');
 
}
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);
limpiar();
}
function delNota(){
  
var descripcion=$('#modalNotas .descripcion').val();  

if(descripcion!=""){

  delRegistro2(idGlobal,'notase',loadNotas);

getFunction('notase', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadNotas);

}

getFunction('notase', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadNotas);

}
function delInventario(){
  var idInventario = $(".idInventario").val();
  var descripcion = $(".descripcion").val();
  var detalle = $(".detalle").val();
  var mayoreo = $(".mayoreo").val();
  var foraneo = $(".foraneo").val();
  var restaurante = $(".restaurante").val();
  var cantidad = $(".cantidad").val();
  var medida = $(".medida").val();
  var s_min = $(".s_min").val();
  var s_max = $(".s_max").val();

  if(idInventario != "" && descripcion != "" && detalle != "" && mayoreo != "" && foraneo != "" && restaurante != "" && cantidad != "" && medida != "" && s_min != "" && s_max != ""){

  delRegistro(idGlobal,'inventarios', loadInventarios);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
limpiar();
}

function delVendedor(idV){



  delRegistro(idV,'empleados', loadVendedores);

 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

limpiar();
}
function delECliente1(idEC){
delRegistro(idEC,'empleados', loadEClientes);

 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEClientes);

limpiar();
}
function delEmpleado(idA){


  
  delRegistro(idA,'empleados', loadAdministracion);

 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

limpiar();
}


function delControlVehicular(idV){

  delRegistro(idV,'m_vehicular', loadMV);
  getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV);

limpiar();

}
function delCliente(idc){

  delRegistro(idc,'clientes', loadRutas3);
  getFunction('clientes', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas3);

limpiar();

}
function delCategoria(){

  delRegistro(idGlobal,'categorias', loadCategorias);
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadCategorias);

limpiar();

}

function delVenta(){
  document.getElementById("idProducto").disabled = false;
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcionventa").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
  
var fechadespachof = today_v;
var ruta = rutas;
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
  delRegistroA(idGlobal,jsonC,'ventadiaria', loadVentas);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);





  //delRegistro(idGlobal,'ventadiaria', loadVentas);

   //getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);


var id = id_vend;
  var idVentap = id_vend;
  var fechaf = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var bonificacion_p = boni;
  var v_mercancias = total_mercancia-valor;
  var v_mercancia = total_mercancia-valor;
 
 var idv;
for(var j=0;j<arrGlobal4.length; j++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
    //alert(arrGlobal4[j].ruta+" - "+rutas+" - "+arrGlobal4[j].fecha+" - "+today_v+" - "+v_mercancias);
 
  if(parseInt(arrGlobal4[j].ruta)==parseInt(rutas) && arrGlobal4[j].fechaf==today_v && v_mercancias==0){
    //alert(arrGlobal4[j].ruta+" - "+arrGlobal4[j].fecha+" - "+total_mercancia);
  idv= arrGlobal4[j].id;
   //alert("Eliminando registro: "+idv);
    delRegistro2(idv,'ventaspasada', loadVentasp);
    
   //getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

  }

  if(parseInt(arrGlobal4[j].ruta)==parseInt(rutas) && arrGlobal4[j].fecha==today_v){
    //alert(arrGlobal4[j].ruta+" - "+arrGlobal4[j].fecha+" - "+total_mercancia);
  idv= arrGlobal4[j].id;
   //alert("Eliminando registro: "+idv);
   var json3 = {v_mercancia: v_mercancia};
    //alert(idv+" = "+total_mercancia+" - "+valor+" = "+v_mercancia);
    upRegistro2(idv, json3, 'ventaspasada', loadVentasp);
 
  }

    }

 

}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
    //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

limpiar();
}

function delPedido(){
  var idProducto = $(".idProductoP").val();
  var descripcionventa = $(".descripcionventaP").val();
  var piezas = $(".piezasP").val();
  var peso = $(".pesoP").val();
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
  var vendedor = f_Ahorro;
var fechadespachof = today_v;
var ruta = rutas;
  var jsonC = {where:{fechadespachof:fechadespachof, vendedor:vendedor}}

  
  delRegistroA(idGlobal,jsonC,'ventadiaria', loadVPedidos);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVPedidos);
    
  
}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
    //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

limpiar();
}






function delMerma(){
  var idProducto = $("#modalMerma .idProductoM").val();
  var descripcionventa = $("#modalMerma .descripcionventaM").val();
  var piezas = $("#modalMerma .piezasM").val();
  var peso = $("#modalMerma .pesoM").val();
 var merma =1;
 var ruta = rutas;
var fechadespachof = fechacaptura;
  if(idProducto != "" && descripcionventa != "" && piezas != ""){


  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}};
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   //upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    delRegistroA2(idGlobal,jsonC,'ventadiaria', loadMerma);

      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMerma);





  //delRegistro(idGlobal,'ventadiaria', loadMerma);

   //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}

limpiar();
}
function delMermaP(){
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionventaMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
 var merma =1;
 var ruta = rutas;
var fechadespachof = today_v;
  if(idProducto != "" && descripcionventa != "" && piezas != ""){


  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}};
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   //upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    delRegistroA2(idGlobal,jsonC,'ventadiaria', loadMermaP);

      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP);





  //delRegistro(idGlobal,'ventadiaria', loadMerma);

   //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}

limpiar();
}

function delDeg(){
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionventaMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
 var merma =1;
 var ruta = rutas;
var fechadespachof = today_v;
var horarecepcion =1;
  if(idProducto != "" && descripcionventa != "" && piezas != ""){


  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, horarecepcion: horarecepcion}};
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   //upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    delRegistroA2(idGlobal,jsonC,'ventadiaria', loadDeg);

      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg);





  //delRegistro(idGlobal,'ventadiaria', loadMerma);

   //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}

limpiar();
}


function delMermaP2(){
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionventaMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
 var merma =1;
 var ruta = rutas;
var fechadespachof = today_v;
  if(idProducto != "" && descripcionventa != "" && piezas != ""){


  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}};
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   //upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    delRegistroA2(idGlobal,jsonC,'ventadiaria', loadMermaP3);

      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP3);





  //delRegistro(idGlobal,'ventadiaria', loadMerma);

   //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}

limpiar();
}
function delDeg2(){
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionventaMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
 var merma =1;
 var ruta = 1;
 var horarecepcion = 1;
var fechadespachof = today_v;
  if(idProducto != "" && descripcionventa != "" && piezas != ""){


  var jsonC = {where:{horarecepcion:horarecepcion, fechadespachof: fechadespachof, merma: merma}};
  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   //upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    delRegistroA2(idGlobal,jsonC,'ventadiaria', loadDeg2);

      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg2);





  //delRegistro(idGlobal,'ventadiaria', loadMerma);

   //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}

limpiar();
}


/*-------------------- actualizar registro ------------------------*/

function upCliente(){
  var local = $("#modalCliente .local").val();
  var propietario = $("#modalCliente .propietario").val();
  var credito = $("#modalCliente .credito").val();
  var bonificacion = $("#modalCliente .bonificacion").val();
  var email = $("#modalCliente .email").val();
  var direccion = $("#modalCliente .direccion").val();
  var lng = $("#modalCliente .lng").val();
  var lat = $("#modalCliente .lat").val();
  var fechai = $("#modalCliente .fecha").val();
  var telefono = $("#modalCliente .telefono").val();
  var telefonop = $("#modalCliente .telefonop").val();
  var descripcion = $("#modalCliente .descripcion").val();
$('#modalCliente').modal('hide');
  if(local != "" && propietario != "" &&  direccion != ""){

    var json = {local: local, propietario: propietario, credito: credito, bonificacion: bonificacion, email: email, direccion: direccion, lng: lng, lat: lat, fechai: fechai, telefono: telefono, telefonop: telefonop, descripcion: descripcion};
    upRegistro(idGlobal,json, 'clientes', loadRutas3);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('clientes', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas3);
 var upCliente1='<button type="button" class="btn btn-success " id="agregarp" onclick="addCliente()">Ingresar</button>';
limpiar()
$('#modalCliente .addCliente1').html('');
$('#modalCliente .addCliente1').html(upCliente1);

}

function upCliente1(idC){
  var ruta1='<label>Ruta</label><select>'
  for(var i=0; i<arrGlobalRuta.length;i++){
ruta1+='<option value="'+i+'">'+arrGlobalRuta[i].nombre+'</option>';
  }
  ruta1+='</select>';
  addModalCliente();

  selectCliente(idC);

  var upCliente1='<button type="button" class="btn btn-info addVendedor1" id="agregarp" onclick="upCliente()">GUARDAR</button>'
$('#modalCliente .addCliente1').html(upCliente1);

}

var idVendedor93;
function upVendedor1(idV){
  addVendedormodal();
  selectVendedores(idV);
idVendedor93=idV;
  var upVendedor1='<button type="button" class="btn btn-info addVendedor1" id="agregarp" onclick="upVendedor()">Guardar</button>'
$('#modalVendedor .addVendedor1').html(upVendedor1);

}
function upInventario(){
  var idInventario = $(".idInventario").val();
  var descripcion = $(".descripcion").val();
  var detalle = $(".detalle").val();
  var mayoreo = $(".mayoreo").val();
  var foraneo = $(".foraneo").val();
  var restaurante = $(".restaurante").val();
  var cantidad = $(".cantidad").val();
  var medida = $(".medida").val();
  var s_min = $(".s_min").val();
  var s_max = $(".s_max").val();
 var tipoP = $(".selectCategoria").val();
  var proporcion = $(".proporcion").val();
if(proporcion=="")proporcion=1;
  if(idInventario != "" && descripcion != "" && detalle != "" && mayoreo != "" && foraneo != "" && restaurante != "" && cantidad != "" && medida != "" && s_min != "" && s_max != ""&& tipoP != ""){

    var json = {idInventario: idInventario, descripcion: descripcion, detalle: detalle, mayoreo: mayoreo, foraneo: foraneo, restaurante: restaurante, cantidad: cantidad, medida: medida, s_min: s_min, s_max: s_max, tipoP: tipoP, proporcion: proporcion};
     upRegistro(idGlobal,json, 'inventarios', loadInventarios);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}
function upMantenimiento(){
  
  var descripcion = $(".descripcion").val();
  var fecha = $(".fecha").val();
  var vehiculo2 = $(".vehiculo2").val();
  var jerarquia = $(".jerarquia").val();
  var servicio = $(".servicio").val();
  if(descripcion!= "" && fecha!= ""&& jerarquia!= "" && vehiculo!= ""&&servicio!=""){
    var json = {descripcion: descripcion, jerarquia: jerarquia, fecha: fecha, servicio: servicio};
      
    upRegistro(idGlobal,json, 'mantenimiento', loadMantenimiento);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimiento);

}


function upVendedor(){

$('#modalVendedor').modal('hide');

  var idEmpleados = $(" #modalVendedor .idVendedor").val();
  var nombre_Emple = $("#modalVendedor .nombre").val();
  var paterno_Emple = $("#modalVendedor .a_paterno").val();
  var materno_Emple = $("#modalVendedor .a_materno").val();
  var n_seguro = $("#modalVendedor .n_seguro").val();
  var curp = $("#modalVendedor .curp").val();
  var domicilio = $("#modalVendedor .domicilio").val();
  var rfc = $("#modalVendedor .rfc").val();
  var tipo = 2;
  var n_licencia = $("#modalVendedor .n_licencia").val();
  var f_exp = $("#modalVendedor .f_licencia").val();
  var ruta = $("#modalVendedor .rutavende").val();
  var t_venta = $("#modalVendedor .tipoventa").val();
  var l_credito = $("#modalVendedor .credito").val();
  var l_bon = $("#modalVendedor .bonificacion").val();
  var merma = $("#modalVendedor .merma").val();
  var km = $("#modalVendedor .f_Ahorro").val();
  var tipocontrato = $("#modalVendedor .tipocontrato").val();
  var iniciocontrato = $("#modalVendedor .iniciocontrato").val();
  var fincontrato = $("#modalVendedor .fincontrato").val();
  var telp = $("#modalVendedor .telp").val();
  var tell = $("#modalVendedor .tell").val();
  var fnacimiento = $("#modalVendedor .fnacimiento").val();
 
 
  var estado = $(" #modalVendedor .estado").val();
  var ingreso = $("#modalVendedor .fnacimiento").val();
  var vacaciones = $("#modalVendedor .vacaciones").val();
  var renuncia = $("#modalVendedor .renuncia").val();
  var reingresos = $("#modalVendedor .reingresos").val();
  var razon = $(" .razon").val();

  var solicitud = $("#modalVendedor .solicitud:checked").val();
  var ine2 = $("#modalVendedor .ine2:checked").val();
  var curp2 = $("#modalVendedor .curp2:checked").val();
  var rfc2 = $("#modalVendedor .rfc2:checked").val();
  var nss = $("#modalVendedor .nss:checked").val();
  var acta = $("#modalVendedor .acta:checked").val();
  var cdomicilio = $("#modalVendedor .cdomicilio:checked").val();
  var foto = $("#modalVendedor .foto:checked").val();
  var recomendaciones = $("#modalVendedor .recomendaciones:checked").val();
  var licenciac = $("#modalVendedor .licenciac:checked").val();
  var antecedentes = $("#modalVendedor .antecedentes:checked").val();
  var ineaval = $("#modalVendedor .ineaval:checked").val();
  var predial = $("#modalVendedor .predial:checked").val();
  var comprobanted = $("#modalVendedor .comprobanted:checked").val();
  var pagare = $("#modalVendedor .pagare:checked").val();

if(solicitud==""||solicitud==undefined||solicitud==null){
solicitud=0;
}
if(ine2==""||ine2==undefined||ine2==null){
ine2=0;
}
if(curp2==""||curp2==undefined||curp2==null){
curp2=0;
}
if(rfc2==""||rfc2==undefined||rfc2==null){
rfc2=0;
}
if(nss==""||nss==undefined||nss==null){
nss=0;
}
if(acta==""||acta==undefined||acta==null){
acta=0;
}
if(cdomicilio==""||cdomicilio==undefined||cdomicilio==null){
cdomicilio=0;
}
if(foto==""||foto==undefined||foto==null){
foto=0;
}
if(recomendaciones==""||recomendaciones==undefined||recomendaciones==null){
recomendaciones=0;
}
if(licenciac==""||licenciac==undefined||licenciac==null){
licenciac=0;
}
if(antecedentes==""||antecedentes==undefined||antecedentes==null){
antecedentes=0;
}
if(ineaval==""||ineaval==undefined||ineaval==null){
ineaval=0;
}
if(predial==""||predial==undefined||predial==null){
predial=0;
}
if(comprobanted==""||comprobanted==undefined||comprobanted==null){
comprobanted=0;
}
if(pagare==""||pagare==undefined||pagare==null){
pagare=0;
}
    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes, ineaval: ineaval, predial: predial, comprobanted: comprobanted, pagare:pagare, km:km };
  
  //  var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};


 if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    upRegistro(idGlobal, json, 'empleados', loadVendedores);
    
  }
  else{

       $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);
var upVendedor1='<button type="button" class="btn btn-success " id="agregarp" onclick="addVendedor()">Ingresar</button>';
limpiar()
$('#modalVendedor .addVendedor1').html('');
$('#modalVendedor .addVendedor1').html(upVendedor1);
selectVendedores(idVendedor93);
click_vendedores();
// -*-------------------------------------------------------- checar ------------------------------------------------------- //
/*
$("#modalVendedor .solicitud").prop('checked', false);

$("#modalVendedor .ine2").prop('checked', false);
$("#modalVendedor .curp2").prop('checked', false);

$("#modalVendedor .rfc2").prop('checked', false);

$("#modalVendedor .nss").prop('checked', false);

$("#modalVendedor .acta").prop('checked', false);

$("#modalVendedor .cdomicilio").prop('checked', false);

$("#modalVendedor .foto").prop('checked', false);

$("#modalVendedor .recomendaciones").prop('checked', false);

$("#modalVendedor .licenciac").prop('checked', false);

$("#modalVendedor .antecedentes").prop('checked', false);

$("#modalVendedor .ineaval").prop('checked', false);

$("#modalVendedor .predial").prop('checked', false);

$("#modalVendedor .comprobanted").prop('checked', false);

$("#modalVendedor .pagare").prop('checked', false);
*/
// ---------------------------------------------------------------------------------------------------------------------------- //








}
function upEmpleado1(idV){
  addModalEmpleado();
  selectAdministracion12(idV);

  var upEmpleado1='<button type="button" class="btn btn-info addEmpleado1" id="agregarp" onclick="upEmpleado()">Guardar</button>'
$('#modalAdministracion .addEmpleado1').html(upEmpleado1);

}

function upEmpleado(){
$('#modalAdministracion').modal('hide');
  var idEmpleados = $("#modalAdministracion .idEmpleado").val();
  var nombre_Emple = $("#modalAdministracion .nombre").val();
  var paterno_Emple = $("#modalAdministracion .a_paterno").val();
  var materno_Emple = $("#modalAdministracion .a_materno").val();
  var n_seguro = $("#modalAdministracion .n_seguro").val();
  var curp = $("#modalAdministracion .curp").val();
  var domicilio = $("#modalAdministracion .domicilio").val();
  var rfc = $("#modalAdministracion .rfc").val();
  var tipo = $("#modalAdministracion .tipoempleado").val();
  var tipocontrato = $("#modalAdministracion .tipocontrato").val();
  var iniciocontrato = $("#modalAdministracion .iniciocontrato").val();
  var fincontrato = $("#modalAdministracion .fincontrato").val();
  var telp = $("#modalAdministracion .telp").val();
  var tell = $("#modalAdministracion .tell").val();
  var fnacimiento = $("#modalAdministracion .fnacimiento").val();
   
  var estado = $(" #modalAdministracion .estado").val();
  var ingreso = $("#modalAdministracion .fnacimiento").val();
  var vacaciones = $("#modalAdministracion .vacaciones").val();
  var renuncia = $("#modalAdministracion .renuncia").val();
  var reingresos = $("#modalAdministracion .reingresos").val();
  var razon = $("#modalAdministracion .razon").val();

  var solicitud = $("#modalAdministracion .solicitud:checked").val();
  var ine2 = $("#modalAdministracion .ine2:checked").val();
  var curp2 = $("#modalAdministracion .curp2:checked").val();
  var rfc2 = $("#modalAdministracion .rfc2:checked").val();
  var nss = $("#modalAdministracion .nss:checked").val();
  var acta = $("#modalAdministracion .acta:checked").val();
  var cdomicilio = $("#modalAdministracion .cdomicilio:checked").val();
  var foto = $("#modalAdministracion .foto:checked").val();
  var recomendaciones = $("#modalAdministracion .recomendaciones:checked").val();
  var licenciac = $("#modalAdministracion .licenciac:checked").val();
  var antecedentes = $("#modalAdministracion .antecedentes:checked").val();
if(solicitud==""||solicitud==undefined||solicitud==null){
solicitud=0;
}
if(ine2==""||ine2==undefined||ine2==null){
ine2=0;
}
if(curp2==""||curp2==undefined||curp2==null){
curp2=0;
}
if(rfc2==""||rfc2==undefined||rfc2==null){
rfc2=0;
}
if(nss==""||nss==undefined||nss==null){
nss=0;
}
if(acta==""||acta==undefined||acta==null){
acta=0;
}
if(cdomicilio==""||cdomicilio==undefined||cdomicilio==null){
cdomicilio=0;
}
if(foto==""||foto==undefined||foto==null){
foto=0;
}
if(recomendaciones==""||recomendaciones==undefined||recomendaciones==null){
recomendaciones=0;
}
if(licenciac==""||licenciac==undefined||licenciac==null){
licenciac=0;
}
if(antecedentes==""||antecedentes==undefined||antecedentes==null){
antecedentes=0;
}
alert(solicitud+ine2+curp2+rfc2+nss+acta+cdomicilio+foto+recomendaciones+licenciac+antecedentes+" test_line:2813");

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes};

 if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    upRegistro(idGlobal, json, 'empleados', loadAdministracion);
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);
    
  }
  else{

       $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);
  var upEmpleado1='<button type="button" class="btn btn-success " id="agregarp" onclick="addEmpleado()">Ingresar</button>';

limpiar();
$('#modalAdministracion .addEmpleado1').html('');
$('#modalAdministracion .addEmpleado1').html(upEmpleado1);


  $("#modalVendedor .solicitud").attr('checked', false);
$("#modalVendedor .ine2").attr('checked', false);

$("#modalVendedor .curp2").attr('checked', false);

$("#modalVendedor .rfc2").attr('checked', false);

$("#modalVendedor .nss").attr('checked', false);

$("#modalVendedor .acta").attr('checked', false);

$("#modalVendedor .cdomicilio").attr('checked', false);

$("#modalVendedor .foto").attr('checked', false);

$("#modalVendedor .recomendaciones").attr('checked', false);

//$("#modalVendedor .licenciac").attr('checked', false);

//$("#modalVendedor .antecedentes").attr('checked', false);

//$("#modalVendedor .ineaval").attr('checked', false);

//$("#modalVendedor .predial").attr('checked', false);

//$("#modalVendedor .comprobanted").attr('checked', false);

//$("#modalVendedor .pagare").attr('checked', false);

}
function upUsuario(){
  var nombre = $(".nombre").val();
  var contrasenia = $(".contrasenia").val();
  var pin = $(".pin").val();
  var tipo = $(".tipo").val();

  var json = {usuario: nombre, contrasenia: contrasenia, pin: pin, tipo: tipo};
  if(nombre != '' && contrasenia != ''){
    //$('.contCata').html('');
    upRegistro(idGlobal, json, 'usuarios', loadUsuarios);
    getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);
u();
limpiar();

  }else{
     $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
  getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

}
function upControlVehicular1(idV){
  modalControlVehicular();
  selectControlVehicular(idV);

  var upControlVehicular1='<button type="button" class="btn btn-info addControlVehicular1" id="agregarp" onclick="upControlVehicular()">GUARDAR</button>'
$('#modalControlVehicular .addControlVehicular1').html(upControlVehicular1);

}



function upNota(){
  var descripcion = $("#modalNotas .descripcion").val();
 var idnombre =id_vend;

  if(descripcion != ""){

    var json = {idnombre: idnombre, descripcion: descripcion};
    upRegistro(idGlobal,json, 'notase', loadNotas);
  }
  else{

      $('#modal .textModal').html('Seleccione de la tabla la nota a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('notase', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadNotas);

}
function upControlVehicular(){

$('#modalControlVehicular').modal('hide');


  var marca = $("#modalControlVehicular .marca").val();
  var noserie = $("#modalControlVehicular .noserie").val();
  var modelo = $("#modalControlVehicular .modelo").val();
  var tipo = $("#modalControlVehicular .tipo").val();
  var color = $("#modalControlVehicular .color").val();
  var combustible = $("#modalControlVehicular .combustible").val();
  var km = $("#modalControlVehicular .kmV").val();
  var placa = $("#modalControlVehicular .placas").val();
  var numero = $("#modalControlVehicular .numero").val();
  var aseguradora = $("#modalControlVehicular .aseguradora").val();
  var poliza = $("#modalControlVehicular .poliza").val();
  var iniciopoliza = $("#modalControlVehicular .iniciopoliza").val();
  var finpoliza = $("#modalControlVehicular .finpoliza").val();
  var endoso = $("#modalControlVehicular .endoso").val();
  var inciso = $("#modalControlVehicular .inciso").val();
  var tel = $("#modalControlVehicular .tel").val();
    var json = {marca: marca, noserie: noserie, modelo: modelo, tipo: tipo, color: color, combustible: combustible, km: km, placa: placa, aseguradora: aseguradora, numero: numero, poliza: poliza, iniciopoliza: iniciopoliza, finpoliza: finpoliza, endoso: endoso, inciso: inciso, tel: tel};
 
 


 if(marca != '' && noserie != ''){
    //$('.contCata').html('');
  upRegistro(idGlobal, json, 'm_vehicular', loadMV);
  getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV);
   
limpiar();
$(".eliminam").html('');
$(".guardam").html('');
  }else{
     $('#modal .textModal').html('Seleccione de la tabla el registro a modificar.'); 
      $('#modal').modal('show');
  }
  getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV);
  
  var upControlVehicular1='<button type="button" class="btn btn-success " id="agregarp" onclick="addVehiculo()">Ingresar</button>';

limpiar();
$('#modalControlVehicular .addControlVehicular1').html('');
$('#modalControlVehicular .addControlVehicular1').html(upControlVehicular1);




}
function upRuta(){
  var nombre = $(".nombre").val();
  var descripcion = $(".descripcion").val();

  var json = {nombre: nombre, descripcion: descripcion};
  if(nombre != ''){
    //$('.contCata').html('');
    upRegistro(idGlobal, json, 'rutas', loadRutas);
u();
limpiar();

  }else{
     $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);


}
function upCategoria(){
          var nombre = $(".nombre").val();
          var descripcion = $(".descripcion1").val();
           var jerarquia = $(".jerarquia").val();
            if(nombre!= ""){
              if(descripcion==""){
                descripcion="-";
              }
          var json = {nombre: nombre, descripcion: descripcion, jerarquia: jerarquia};
              upRegistro(idGlobal,json, 'categorias', loadCategorias);
          }else{
              $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
          }
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadCategorias);

}
function upComision(){
          var n1 = $(".detalleC").val();
          var n2 = $(".mayoreoC").val();
           var n3 = $(".foraneoC").val();
           var n4 = $(".restauranteC").val();
            if(n1!= ""||n2!= ""||n3!= ""||n4!= ""){
              
          var json = {n1:n1, n2:n2, n3:n3, n4:n4};
              upRegistro2(idGlobal,json, 'categorias', loadComision);
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadComision);
              
          }else{
              $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
          }
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadComision);

}

var f_s_dia, fechaf;
function aviso(excedente){

}
function upRecepcionProducto(){
   newTimer();
  document.getElementById('loader').style.display = 'block';
  var fechadespachof = fechacaptura;
  var ruta = rutas; 
  var gasolinaT = $('#modalDesp2 .gasolina1').val();
  var gasT = $('#modalDesp2 .gas1').val();
  var dieselT = $('#modalDesp2 .diesel1').val();
  var kmT = $('#modalDesp2 .km1').val();
      gasolina=gasolinaT;
      km=kmT;
      gas=gasT;
      diesel=dieselT;
      creditos=$(".creditos").val();
      otros=$(".otros").val();
  var idc, creditos, otros,temp;
  var piezasv, pesov, validar, dsd, sd, lo;
  var credito_manual=0;
      $(".totalVentas").html('');
  var fecharecepcion=today_vv;
  var excedenteC=0;
  var excedenteB=0;
   if(cred<creditos)creditos = cred;
   if(boni<otros)otros=boni;
   if(creditos!="" && otros !=""){
for (var i = 0; i < arrGlobalT.length; i++) {
   if(rutas==arrGlobalT[i].ruta &&arrGlobalT[i].dfc==dscv&&arrGlobalT[i].sfc==scv&&arrGlobalT[i].merma!=1 ){
      validar==1;
   if(parseFloat(arrGlobalT[i].medida)==2){
      piezasv= $('#rec'+i+'').val();
   if(piezasv==""){
      piezasv=0;
      }
      pesov=0;
      venta=(parseFloat(arrGlobalT[i].piezas)-parseFloat(piezasv))*parseFloat(arrGlobalT[i].precioUnitario);
  var json1={piezasv: piezasv, venta: venta, fecharecepcion: fecharecepcion};
      idc=arrGlobalT[i].id;
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      upRegistroA2(idc, json1, jsonC, 'ventadiaria', loadVentasPR);
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasr);
    

      s_vent+=t_v2[i];
      }else{
      pesov=$('#rec'+i+'').val();
      piezasv=$('#p'+i+'').val();
   if(piezasv==""){
      piezasv=0;
      }
   if(pesov==""){
      pesov=0;
      }
      venta=(parseFloat(arrGlobalT[i].peso)-parseFloat(pesov))*parseFloat(arrGlobalT[i].precioUnitario);
  if((parseFloat(arrGlobalT[i].peso)-parseFloat(pesov))==0){
  var piezas = piezasv;
  var json1={piezas: piezas, piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
      }else{
  var json1={piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
      }
      idc=arrGlobalT[i].id;
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      upRegistroA2(idc, json1, jsonC, 'ventadiaria', loadVentasPR);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasr);
    
      s_vent+=t_v2[i];

      f_s_dia
      }
  }
}

 var  t_venta_merca = s_vent2;
for(var m=0;m<arrGlobal4.length; m++){
  if (arrGlobal4[m].dsfc==dscv&&arrGlobal4[m].ruta==rutas&&arrGlobal4[m].sfc==scv) {
      fechaf=arrGlobal4[m].fechaf;
   if(arrGlobal4[m].efectivo==null || arrGlobal4[m].efectivo==undefined || arrGlobal4[m].efectivo== NaN ){
      f_s_dia=otros-t_venta_merca; 
      $('.sumaefec').html('$ '+parseFloat(otros).toFixed(2));
      break;
      }else{
      f_s_dia=(parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros))-parseFloat(t_venta_merca); 
  var suma = parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros);
      $('.sumaefec').html('$ '+parseFloat(suma).toFixed(2));

      break;
      }
  }}
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasr);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasF);



upRecepcionFaltante(creditos,otros,f_s_dia,ruta,id_vend,t_venta_merca);
}else{
   $('#modal .textModal').html('Faltan Datos.'); 
              $('#modal').modal('show');
  document.getElementById('loader').style.display = 'none';

  //alert("faltan datos");
}
}
function upRecepcionFaltante(creditos,otros,f_s_dia,ruta,id_vend,t_venta_merca){
/////////////////////////////// CALCULO DE FALTANTES ////////////////////////////////////////////////
  var imprimir = '  <li class="impre  text-center imprimirList"  onclick="pagare2();">IMPRIMIR</li>';
  var credito_manual=0;
  var mes=month-1;
  var dia=day-1;
      saberSemana(dia,mes,year);
  var cobrado=noSemana;
  var t_vendido = today;
      dsd=today;
      sd=noSemana+1;
  var user;
  for(var h=0;h<upin.length; h++){
   if(pin==upin[h].pin){
      user=upin[h].usuario;  
      }
  }
  var despachador = despachadorR;
      cobrado = cobrado +1;
  var temp=today;
  var loquedeberiatraer, f_s_real;
  var despachador=despachadorR;
  var day3 = fechaf.substring(8,10);
  var month3 = fechaf.substring(5,7);
  var year3 = fechaf.substring(0,4);
  var diasema3= new Date((parseInt(month3))+' '+parseInt(day3)+' ,'+parseInt(year3));
  var dia31=(diasema3.getUTCDay());

   if(dia31==1){ ////////////////////// LUNES ////////////////////////////////////////
for(var h=0;h<arrGlobal4.length; h++){ 
  if (arrGlobal4[h].id==id_vend) {
for(var hh=0;hh<arrGlobal4.length; hh++){
  if (arrGlobal4[hh].sfc==(scv-1)&&arrGlobal4[hh].ruta==rutas&&6==arrGlobal4[hh].dsfc) {
      loquedeberiatraer=parseFloat(arrGlobal4[hh].creditos)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador, user: user }
     
      }
    }
  }
}
if(credito_manual==0){ ////////////// NO ENCUENTRA CREDITO DE LA SEMANA PASADA ////////////////////
      modalCreditos2();
   if(modalCreditos1!="F"){

      loquedeberiatraer=parseFloat(modalCreditos1)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
      }
    }
  }else{ ////////////////////////////////////// OTRO DIA DE LA SEMANA ////////////////////////////////
  var med=arrGlobal4.length;
  var hk=20;
  var hhc=20;
for(var h=0;h<arrGlobal4.length; h++){
   if (arrGlobal4[h].id==id_vend) {///// PIVOTE CARGA PRINCIPAL /////////////
     var SemanaPivote = arrGlobal4[h].sfc;
     
     var anioActual= arrGlobal4[h].fechaf.substring(0,4);
for(var hh=0;hh<arrGlobal41.length; hh++){
   if (arrGlobal4[h].fechaf.substring(0,4)==anioActual&&arrGlobal41[hh].sfc==SemanaPivote&&arrGlobal41[hh].ruta==ruta&&(dscv-1)==arrGlobal41[hh].dsfc) {
  ////// ENCUENTRA LA CARGA DEL DIA ANTERIOR //////////////////  
      hk=80;
      loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      modalCreditos1=1;
      credito_manual=1;
    if(arrGlobal4[hh].loquedeberiatraer!=null){
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador, user: user}
  break;
}else{
  $('#modal .textModal').html('La carga anterior, no ha sido recibida o regrese a rutas '); 
      $('#modal').modal('show');

  modalCreditos1="F";
  break;

}
 

}else{
 // alert(arrGlobal41[hh].sfc+"==("+cobrado+")&&"+arrGlobal41[hh].ruta+"=="+rutas);

  if(arrGlobal4[h].fechaf.substring(0,4)==anioActual&&arrGlobal41[hh].sfc==SemanaPivote&&arrGlobal41[hh].ruta==rutas){
  // if (arrGlobal4[h].fechaf.substring(0,4)==anioActual&&arrGlobal41[hh].sfc==SemanaPivote&&arrGlobal41[hh].ruta==ruta&&(dscv-1)==arrGlobal41[hh].dsfc) {
   


    hhc=hh;
    
 // alert("cobradooo: "+cobrado +" - dia: "+arrGlobal41[hh].dsfc+" dscv: "+dscv);
    
    
    for (var ii = dscv; ii <= dscv; ii--){
  //alert(ii+" == "+arrGlobal41[hh].dsfc+" limite: "+dscv);
    if (ii==arrGlobal41[hh].dsfc&&ii!=(dscv)) {
//alert("ultimo dia con carga: "+ii);

  hk=30;
  if(arrGlobal41[hh].loquedeberiatraer!=null){
    //alert("GUARDADO dia_anterior = false" + arrGlobal41[hh].loquedeberiatraer+" - "+arrGlobal41[hh].ruta);
    loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
  
  }else{
     $('#modal .textModal').html('La carga anterior, no ha sido recibida.'); 
      $('#modal').modal('show');
      modalCreditos1="F";
  }
  
         
  
  break;


  }
  if(ii==0){
      break;

  }
  }  

 
}

}

}




  }}
  //alert(f_s_dia+" here!!!");





}

if(hk==20){
  for (var FF = 0; FF < arrGlobal4.length; FF++) {
    if(arrGlobal4[FF].sfc==(scv-1)&&arrGlobal4[FF].ruta==rutas&&arrGlobal4[FF].dsfc==6){
  //  alert("se tomara el valor del credito sabado");
    hk=1;
    loquedeberiatraer=parseFloat(arrGlobal41[FF].creditos)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
  
   
  }else{
   
    lo=1;
   // alert("lo "+lo);
  }
  }
 // alert("entra hk= "+hk+" lo "+lo);
  if(hk==20&&lo==1){
  //alert("aun no ha sido cargado _ "+hk+" -- "+arrGlobal41[hhc].sfc+" -- "+scv+" -  "+arrGlobal41[hhc].dsfc);
if(modalCreditos1=="F"){

modalCreditos2();
}else{

loquedeberiatraer=parseFloat(modalCreditos1)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(creditos+" entraaaaaaaa");
 credito_manual=1;
//alert(modalCreditos1+" - "+f_s_dia+" = "+ loquedeberiatraer);
//alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}


}

  }



}
//alert(modalCreditos1);
  

if(modalCreditos1!="F"){
  var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend, json2, jsonC, 'ventaspasada', loadVentaspasadasVF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);



      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 

//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
s_vent=0;
s_vent2=0;
                    $('.imprimir').html(imprimir);
                    $('.guardarR').html('');


//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
//alert(modalCreditos1);
modalCreditos1="F";
recur =1;
}else{
  
  if(credito_manual==1){
   
  var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend, json2, jsonC, 'ventaspasada', loadVentaspasadasVF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);



      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 
//upRegistro3(id_vend, json2, 'ventaspasada', loadVentaspasadasTF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
                    $('.imprimir').html(imprimir);
                    $('.guardarR').html('');

s_vent=0;
s_vent2=0;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);

credito_manual=0;
  }
}

}

function upRecepcion(){
      document.getElementById('loader').style.display = 'block';
  var fechadespachof = fechacaptura;
  var ruta = rutas; 
  var imprimir = '  <li class="impre  text-center imprimirList"  onclick="pagare2();">IMPRIMIR</li>';
  var gasolinaT = $('#modalDesp2 .gasolina1').val();
  var gasT = $('#modalDesp2 .gas1').val();
  var dieselT = $('#modalDesp2 .diesel1').val();
  var kmT = $('#modalDesp2 .km1').val();
      gasolina=gasolinaT;
      km=kmT;
      gas=gasT;
      diesel=dieselT;
      creditos=$(".creditos").val();
      otros=$(".otros").val();
  var idc, creditos, otros,temp;
  var piezasv, pesov, validar, dsd, sd, lo;
  var credito_manual=0;
      $(".totalVentas").html('');
  var fecharecepcion=today_vv;
  var excedenteC=0;
  var excedenteB=0;
   if(cred<creditos)creditos = cred;
   if(boni<otros)otros=boni;
   if(creditos!="" && otros !=""){
for (var i = 0; i < arrGlobalT.length; i++) {
   if(rutas==arrGlobalT[i].ruta &&arrGlobalT[i].dfc==dscv&&arrGlobalT[i].sfc==scv&&arrGlobalT[i].merma!=1 ){
      validar==1;
   if(parseFloat(arrGlobalT[i].medida)==2){
      piezasv= $('#rec'+i+'').val();
   if(piezasv==""){
      piezasv=0;
      }
      pesov=0;
      venta=(parseFloat(arrGlobalT[i].piezas)-parseFloat(piezasv))*parseFloat(arrGlobalT[i].precioUnitario);
  var json1={piezasv: piezasv, venta: venta, fecharecepcion: fecharecepcion};
      idc=arrGlobalT[i].id;
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      upRegistroA2(idc, json1, jsonC, 'ventadiaria', loadVentasPR);
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasF);
      s_vent+=t_v2[i];
      }else{
      pesov=$('#rec'+i+'').val();
      piezasv=$('#p'+i+'').val();
   if(piezasv==""){
      piezasv=0;
      }
   if(pesov==""){
      pesov=0;
      }
      venta=(parseFloat(arrGlobalT[i].peso)-parseFloat(pesov))*parseFloat(arrGlobalT[i].precioUnitario);
  if((parseFloat(arrGlobalT[i].peso)-parseFloat(pesov))==0){
  var piezas = piezasv;
  var json1={piezas: piezas, piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
      }else{
  var json1={piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
      }
      idc=arrGlobalT[i].id;
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      upRegistroA2(idc, json1, jsonC, 'ventadiaria', loadVentasPR);
  var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasr);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasF);
    var jsonC = {where:{ruta:ruta}}
      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasVF);
      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 

      s_vent+=t_v2[i];
      }
  }
}
/////////////////////////////////////////DIFERENCIA//////////////////////////////////////////////////////////////////////////////////////////////////
 var  t_venta_merca = s_vent2;
for(var m=0;m<arrGlobal4.length; m++){
  if (arrGlobal4[m].dsfc==dscv&&arrGlobal4[m].ruta==rutas&&arrGlobal4[m].sfc==scv) {
      fechaf=arrGlobal4[m].fechaf;
   if(arrGlobal4[m].efectivo==null || arrGlobal4[m].efectivo==undefined || arrGlobal4[m].efectivo== NaN ){
      f_s_dia=otros-t_venta_merca; 
      $('.sumaefec').html('$ '+parseFloat(otros).toFixed(2));
      break;
      }else{
      f_s_dia=(parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros))-parseFloat(t_venta_merca); 
  var suma = parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros);
      $('.sumaefec').html('$ '+parseFloat(suma).toFixed(2));

      break;
      }
  }}
/////////////////////////////// CALCULO DE FALTANTES ////////////////////////////////////////////////
  var mes=month-1;
  var dia=day-1;
      saberSemana(dia,mes,year);
  var cobrado=noSemana;
  var t_vendido = today;
      dsd=today;
      sd=noSemana+1;
  var user;
  for(var h=0;h<upin.length; h++){
   if(pin==upin[h].pin){
      user=upin[h].usuario;  
      }
  }
  var despachador = despachadorR;
      cobrado = cobrado +1;
  var temp=today;
  var loquedeberiatraer, f_s_real;
  var despachador=despachadorR;
  var day3 = fechaf.substring(8,10);
  var month3 = fechaf.substring(5,7);
  var year3 = fechaf.substring(0,4);
  var diasema3= new Date((parseInt(month3))+' '+parseInt(day3)+' ,'+parseInt(year3));
  var dia31=(diasema3.getUTCDay());

   if(dia31==1){ ////////////////////// LUNES ////////////////////////////////////////
for(var h=0;h<arrGlobal4.length; h++){ 
  if (arrGlobal4[h].id==id_vend) {
for(var hh=0;hh<arrGlobal4.length; hh++){
  if (arrGlobal4[hh].sfc==(scv-1)&&arrGlobal4[hh].ruta==rutas&&6==arrGlobal4[hh].dsfc) {
      alert("GUARDADO ");
      loquedeberiatraer=parseFloat(arrGlobal4[hh].creditos)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador, user: user }
      }
    }
  }
}
if(credito_manual==0){ ////////////// NO ENCUENTRA CREDITO DE LA SEMANA PASADA ////////////////////
      modalCreditos2();
   if(modalCreditos1!="F"){
    alert("GUARDADO ");
      loquedeberiatraer=parseFloat(modalCreditos1)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
      }
    }
  }else{ ////////////////////////////////////// OTRO DIA DE LA SEMANA ////////////////////////////////
  var med=arrGlobal4.length;

  var hk=20;
  var hhc=20;
for(var h=0;h<arrGlobal4.length; h++){
   if (arrGlobal4[h].id==id_vend) {///// PIVOTE CARGA PRINCIPAL /////////////
     var SemanaPivote = arrGlobal4[h].sfc;
         
     var anioActual= arrGlobal4[h].fechaf.substring(0,4);
for(var hh=0;hh<arrGlobal41.length; hh++){
   if (arrGlobal4[h].fechaf.substring(0,4)==anioActual&&arrGlobal41[hh].sfc==SemanaPivote&&arrGlobal41[hh].ruta==rutas&&(dscv-1)==arrGlobal41[hh].dsfc) {
   
  ////// ENCUENTRA LA CARGA DEL DIA ANTERIOR //////////////////
     
      
      hk=80;
      loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
      f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
      modalCreditos1=1;
      credito_manual=1;
    if(arrGlobal4[hh].loquedeberiatraer!=null){
      credito_manual=1;
      json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador, user: user}
  break;
}else{
  $('#modal .textModal').html('La carga anterior, no ha sido recibida o regrese a rutas '); 
      $('#modal').modal('show');

  modalCreditos1="F";
  break;

}
 

}else{
 // alert(arrGlobal41[hh].sfc+"==("+cobrado+")&&"+arrGlobal41[hh].ruta+"=="+rutas);

  if(arrGlobal41[hh].sfc==(cobrado)&&arrGlobal41[hh].ruta==rutas){
    hhc=hh;
    
 // alert("cobradooo: "+cobrado +" - dia: "+arrGlobal41[hh].dsfc+" dscv: "+dscv);
    
    
    for (var ii = dscv; ii <= dscv; ii--){
  //alert(ii+" == "+arrGlobal41[hh].dsfc+" limite: "+dscv);
    if (ii==arrGlobal41[hh].dsfc&&ii!=dscv) {
//alert("ultimo dia con carga: "+ii);
  hk=30;
  if(arrGlobal41[hh].loquedeberiatraer!=null){
    loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
  
  }else{
     $('#modal .textModal').html('La carga anterior, no ha sido recibida.'); 
      $('#modal').modal('show');
      modalCreditos1="F";
  }
  
  
  break;


  }
  if(ii==0){
      break;

  }
  }  

 
}

}

}




  }}
  //alert(f_s_dia+" here!!!");





}

if(hk==20){
  for (var FF = 0; FF < arrGlobal4.length; FF++) {
    if(arrGlobal4[FF].sfc==(scv-1)&&arrGlobal4[FF].ruta==rutas&&arrGlobal4[FF].dsfc==6){
  //  alert("se tomara el valor del credito sabado");
    hk=1;
    loquedeberiatraer=parseFloat(arrGlobal41[FF].creditos)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}
  
   
  }else{
   
    lo=1;
   // alert("lo "+lo);
  }
  }
 // alert("entra hk= "+hk+" lo "+lo);
  if(hk==20&&lo==1){
  //alert("aun no ha sido cargado _ "+hk+" -- "+arrGlobal41[hhc].sfc+" -- "+scv+" -  "+arrGlobal41[hhc].dsfc);
if(modalCreditos1=="F"){

modalCreditos2();
}else{
loquedeberiatraer=parseFloat(modalCreditos1)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(creditos+" entraaaaaaaa");
 credito_manual=1;
//alert(modalCreditos1+" - "+f_s_dia+" = "+ loquedeberiatraer);
//alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd,  km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}


}

  }



}
//alert(modalCreditos1);
  

if(modalCreditos1!="F"){
  var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend, json2, jsonC, 'ventaspasada', loadVentaspasadasVF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);


      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasVF);

      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 

//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
s_vent=0;
s_vent2=0;
                    $('.imprimir').html(imprimir);

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
//alert(modalCreditos1);
modalCreditos1="F";
recur =1;
}else{
  
  if(credito_manual==1){
   
  var jsonC = {where:{ruta:ruta}}
upRegistroA2(id_vend, json2, jsonC, 'ventaspasada', loadVentaspasadasVF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);

      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasVF);


      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 
//upRegistro3(id_vend, json2, 'ventaspasada', loadVentaspasadasTF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
                    $('.imprimir').html(imprimir);

s_vent=0;
s_vent2=0;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);

credito_manual=0;
  }
}


}else{
      $('#modal .textModal').html('Faltan datos.'); 
      $('#modal').modal('show');
        document.getElementById('loader').style.display = 'none';

}


t_venta_merca="";

}
var recur=0;
//alert(day+" / "+ month+ " / "+year);
function agregarCredito(){
modalCreditos1=  $('#modalCreditos .creditos').val();
$('#modalCreditos').modal('hide');

upRecepcionProducto();

}
function modalCreditos2(){
  $('#modalCreditos').modal('show');
  $('#modalCreditos .creditos').val('');

 
}
function upNomina(ret, fA, infonavit, id){
var nombreNomina="";

       for(var j=0;j<arrGlobalF.length; j++){
if(arrGlobalF[j].id==id){
  nombreNomina = arrGlobalF[j].nombre;
}
}


$('#modalNomina').modal('show');
$('#modalNomina #nombreNomina').html(nombreNomina);
$('#modalNomina .ret').val(ret);
$('#modalNomina .fA').val(fA);
$('#modalNomina .infonavit').val(infonavit);
$('#modalNomina .idNominaF').val(id);

}
function upNomina1(){
   var semanaVS1 = $('.semanaNomina1').val();

var idNominaT = $('#modalNomina .idNominaF').val();
var n3 =$('#modalNomina .ret').val();
var n2 =$('#modalNomina .fA').val();
var n4 =$('#modalNomina .infonavit').val();
if(n2=="")n2=0;
if(n3=="")n3=0;
if(n4=="")n4=0;
closeModalNom();
limpiar();

  $('.contCataMayoreoN').html(''); 
               $('.contCataMayoreoP').html(''); 
  
if(semanaVS1!=""){

year =  parseInt(semanaVS1.substring(0,4));
scv = parseInt(semanaVS1.substring(6,8))-1;
  $('.tituloPantalla').html('<h3 class="text-center impre">NOMINA SEMANA: '+(scv+1)+'</h3>');
  
}



     var sfc = (scv+1)+"";
             
var json={n2:n2,n3:n3,n4:n4}
      var json2 = {where:{sfc:sfc}}

//alert(n2+"  - "+n3+' + '+n4+' + + '+idNominaT);
upRegistroA2(idNominaT, json, json2,'ventaspasada',  loadVentasp4);
      executeFunctionDone(json2, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ",  loadVentasp4);
   
var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasp4);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleNominaFaltante);
 
 }







    }
function upVenta(){
document.getElementById("idProducto").disabled = false;
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcionventa").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var ruta = rutas;
  var fecha = today_v;
  var fechadespachof = today_v;
  var precioUnitario, valorMercancia;
  var user ="YO";
  var n2=f_Ahorro;
  for(var h=0;h<arrGlobal.length; h++){

    if(arrGlobal[h].idInventario==idProducto){
     
         if(arrGlobal[h].medida==2 || arrGlobal[h].medida==3){//si es pieza y litros
             
              if(arrGlobal2[n_vend].t_venta==1){
                 precioUnitario=arrGlobal[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==2){
                precioUnitario=arrGlobal[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==3){
                precioUnitario=arrGlobal[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==4){
                precioUnitario=arrGlobal[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              
               if(arrGlobal2[n_vend].t_venta==1){
                 precioUnitario=arrGlobal[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==2){
                precioUnitario=arrGlobal[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==3){
                precioUnitario=arrGlobal[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal2[n_vend].t_venta==4){
                precioUnitario=arrGlobal[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}
//}

    var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, precioUnitario: precioUnitario, valorMercancia: valorMercancia, hora: hora, empleado: empleado, ruta:ruta, fecha: fecha, user: user };

  if(idProducto != "" && descripcionventa != "" && piezas != ""){
    
var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
     upRegistroA(idGlobal, json,jsonC, 'ventadiaria', loadVentas);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);


    
  var id = id_vend;
  var idVentap = id_vend;
  var fechaDespacho = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var bonificacion_p = boni;
  var v_mercancia = total_mercancia-valor+valorMercancia;
  var json2 = {id: id, idVentap: idVentap, fechaDespacho: fechaDespacho, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, n2:n2};
 
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
for(var j=0;j<arrGlobal4.length; j++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(arrGlobal4[j].ruta==rutas && arrGlobal4[j].fecha==today_v){
    //alert(arrGlobal4[j].ruta+" - "+arrGlobal4[j].fecha);
  var idv= arrGlobal4[j].id;
  upRegistro2(idv, json2, 'ventaspasada', loadVentasp);
  
  }

    }








}
  else{
     $('#modal .textModal').html('Seleccione de la tabla el producto a modificar.'); 
      $('#modal').modal('show');
  }

limpiar();
}






function upMerma(){   
  var idProducto = $("#modalMerma .idProductoM").val();
  var descripcionventa = $("#modalMerma .descripcionM").val();
  var piezas = $("#modalMerma .piezasM").val();
  var peso = $("#modalMerma .pesoM").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0.00;
  }
 var pesov=0.00;
 var piezasv=0.00;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
  
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobal[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
             //alert(arrGlobal4[n_vend].tipo);
             // alert(n_vend+" -- "+id_vend);
              if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
//  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
 //  upRegistro3(idGlobal, json, 'ventadiaria', loadMerma);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);

  
  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}};
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMerma);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMerma);


  
   
  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}

function upMermaP(){   
  var idProducto = $(".idProductoMP").val();
  var descripcionventa = $(".descripcionMP").val();
  var piezas = $(".piezasMP").val();
  var peso = $(".pesoMP").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  if(peso==""||peso==NaN||peso==undefined){
    peso=0.00;
  }
 var pesov=0.00;
 var piezasv=0.00;
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var sc,dc,dsfc,sfc;


  var num = 0;
  var num2 = 0;
  var dfc,sfc;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
 // alert(today_v+" == "+today_vv);
  if(today_v!=today_vv){
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
   // alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
if(noSemana==52&&dfc==6){
    noSemana=0;
   }
if(noSemana==52){
    noSemana=0;
   } 
     
   
     sfc=noSemana+1;
    saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
    //alert(noSemana);
    diasema= new Date((parseInt(month))+' '+parseInt(day)+' ,'+parseInt(year));
    dc=(diasema.getUTCDay());
if(noSemana==52&&dc==6){
    noSemana=0;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
 // var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
  // alert(day2+" - "+month2+" - "+year2);
   dc=(diasema.getUTCDay());
  if(noSemana==52&&dc==6){
    noSemana=0;
    dc=6;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
   // alert(sc+" no es igual"+dc);
  }
  dsfc=dfc;
 // alert("dsfc: "+dsfc+". dfc: "+dfc+".  dc:"+dc+". sc:"+sc);
  
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
  for(var h=0;h<arrGlobalInventario.length; h++){

    if(arrGlobalInventario[h].idInventario==idProducto){
     
         if(arrGlobalInventario[h].medida==2 || arrGlobal[h].medida==3){//si es pieza y litros
             medida=arrGlobalInventario[h].medida;
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
             //alert(arrGlobal4[n_vend].tipo);
             // alert(n_vend+" -- "+id_vend);
              if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(t_vende==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(t_vende==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*peso;
                

                 //alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }
             }
    }}

 
  if(idProducto != "" && descripcionventa != "" && piezas != ""){
   //alert("modifico: "+num+" tipo: "+t_vende);
  var id = rutas;
  var idVentap = id_vend;
  var fecha = today_vv;
  var fechaf = today_v;
  var fechadespacho = today_vv;
  var fechadespachof = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var merma = 1;
  var despachador2=despachador22;
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
//  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
 //  upRegistro3(idGlobal, json, 'ventadiaria', loadMerma);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);

  
  var jsonC = {where:{ruta:ruta, fechadespachof: fechadespachof, merma: merma}};
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};

  //var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   upRegistroA2(idGlobal,json,jsonC, 'ventadiaria', loadMermaP);
    
      //executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP);


  
   
  }else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
 
 
// getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
 //  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

}



/*----------------------- seleccionar en la tabla ------------------------*/
function u(){
    $('.guardau').html('');
    $('.eliminau').html('');

}
function selectUsuario(id){
  idGlobal = id;
  var guardau=' <button type="button" class="btn usuario1 modificar" onclick="upUsuario()">GUARDAR</button>';
  var eliminau = '<button type="button" class="btn usuario1 eliminar" onclick="delUsuario()">ELIMINAR</button>';
    


  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idUsuario == id){
      $(".nombre").val(arrGlobal[a].usuario);
      $(".contrasenia").val(arrGlobal[a].contrasenia);
      $(".pin").val(arrGlobal[a].pin);
      $(".tipo").val(arrGlobal[a].tipo);
    $('.guardau').html(guardau);
    $('.eliminau').html(eliminau);
    }
  }
}
function selectRuta(id){
var guardau=' <button type="button" class="btn usuario1 modificar" onclick="upRuta()">GUARDAR</button>';
var eliminau = '<button type="button" class="btn usuario1 eliminar" onclick="delRuta()">ELIMINAR</button>';
     idGlobal=id;
    for(var a=0; a<arrGlobalRuta.length; a++){
     
    if(arrGlobalRuta[a].id == id){
            $(".nombre").val(arrGlobalRuta[a].nombre);
      $(".descripcion").val(arrGlobalRuta[a].descripcion);
     
    $('.guardarR').html(guardau);
    $('.eliminarR').html(eliminau);
    }
  }
}
function inv(){

$(".eliminari").html('');
$(".agregari").html('');
}
function selectInventario(id){
  idGlobal = id;
  var eliminari='<button type="button" class="btn botoninv eliminar" onclick="delInventario()">ELIMINAR</button>';
  var agregari='<button type="button" class="btn botoninv modificar" onclick="modalInventario()">AGREGAR INVENTARIO</button>';
  var guardari='<button type="button" class="btn botoninv modificar" onclick="upInventario()">GUARDAR</button>';

  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
      $(".idInventario").val(arrGlobal[a].idInventario);
      $(".descripcion").val(arrGlobal[a].descripcion);
      $(".detalle").val(arrGlobal[a].detalle);
      $(".mayoreo").val(arrGlobal[a].mayoreo);
      $(".foraneo").val(arrGlobal[a].foraneo);
      $(".restaurante").val(arrGlobal[a].restaurante);
      $(".cantidad").val(arrGlobal[a].cantidad);
      $(".medida").val(arrGlobal[a].medida);
      $(".s_min").val(arrGlobal[a].s_min);
      $(".s_max").val(arrGlobal[a].s_max);
      $(".selectCategoria").val(arrGlobal[a].tipoP);
      $(".proporcion").val(arrGlobal[a].proporcion);
      $(".eliminari").html(eliminari);
      $(".agregari").html(agregari);
      $(".guardari").html(guardari);
    }
  }
}
function selectCategoria(id){
  idGlobal = id;
  var eliminari='<button type="button" class="btn btn-ventas eliminar" onclick="delCategoria()">ELIMINAR</button>';
  var guardari='<button type="button" class="btn btn-ventas modificar" onclick="upCategoria()">GUARDAR</button>';

  for(var a=0; a<arrGlobalCategoria.length; a++){
    if(arrGlobalCategoria[a].id == id){
      $(".descripcion1").val(arrGlobalCategoria[a].descripcion);
      $(".nombre").val(arrGlobalCategoria[a].nombre);
      $(".jerarquia").val(arrGlobalCategoria[a].jerarquia);
 
      $(".eliminarC").html(eliminari);
      $(".guardarC").html(guardari);
    }
  }
}
function selectComision(id){
  idGlobal = id;

  for(var a=0; a<arrGlobalCategoria.length; a++){
    if(arrGlobalCategoria[a].id == id){
      $(".nombreC").val(arrGlobalCategoria[a].nombre);
      $(".detalleC").val(arrGlobalCategoria[a].n1);
      $(".mayoreoC").val(arrGlobalCategoria[a].n2);
      $(".foraneoC").val(arrGlobalCategoria[a].n3);
      $(".restauranteC").val(arrGlobalCategoria[a].n4);

    }
  }
}
function selectnotas(id){
  idGlobal = id;
  var eliminarN='<button type="button" class="btn usuario1 eliminar" onclick="delNota()">ELIMINAR</button>';
  var guardarN='<button type="button" class="btn usuario1 modificar" onclick="upNota()">GUARDAR</button>';

  for(var a=0; a<arrGlobalNotas.length; a++){
    if(arrGlobalNotas[a].id == id){
      $("#modalNotas .descripcion").val(arrGlobalNotas[a].descripcion);
      
      $(" .eliminarN").html(eliminarN);
      $(" .guardarN").html(guardarN);
    }
  }
}

function selectControlVehicular (id){
  idGlobal = id;
 
  for(var a=0; a<arrGlobalVehiculo.length; a++){
    if(arrGlobalVehiculo[a].id == id){
      $("#modalControlVehicular .marca").val(arrGlobalVehiculo[a].marca);
      $("#modalControlVehicular .noserie").val(arrGlobalVehiculo[a].noserie);
      $("#modalControlVehicular .modelo").val(arrGlobalVehiculo[a].modelo);
      $("#modalControlVehicular .tipo").val(arrGlobalVehiculo[a].tipo);
      $("#modalControlVehicular .color").val(arrGlobalVehiculo[a].color);
      $("#modalControlVehicular .combustible").val(arrGlobalVehiculo[a].combustible);
      $("#modalControlVehicular .kmV").val(arrGlobalVehiculo[a].km);
      $("#modalControlVehicular .placas").val(arrGlobalVehiculo[a].placa);
      $("#modalControlVehicular .aseguradora").val(arrGlobalVehiculo[a].aseguradora);
      $("#modalControlVehicular .numero").val(arrGlobalVehiculo[a].numero);
      $("#modalControlVehicular .inciso").val(arrGlobalVehiculo[a].inciso);
      $("#modalControlVehicular .endoso").val(arrGlobalVehiculo[a].endoso);
      $("#modalControlVehicular .tel").val(arrGlobalVehiculo[a].tel);
      $("#modalControlVehicular .iniciopoliza").val(arrGlobalVehiculo[a].iniciopoliza);
      $("#modalControlVehicular .finpoliza").val(arrGlobalVehiculo[a].finpoliza);
      $("#modalControlVehicular .poliza").val(arrGlobalVehiculo[a].poliza);
  }
  }
}

function selectVendedores(id){
  idGlobal = id;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
       $("#modalVendedor .idVendedor").val(arrGlobal[a].idEmpleados);
       $("#modalVendedor .nombre").val(arrGlobal[a].nombre_Emple);
       $("#modalVendedor .a_paterno").val(arrGlobal[a].paterno_Emple);
       $("#modalVendedor .a_materno").val(arrGlobal[a].materno_Emple);
       $("#modalVendedor .n_seguro").val(arrGlobal[a].n_seguro);
       $("#modalVendedor .curp").val(arrGlobal[a].curp);
       $("#modalVendedor .domicilio").val(arrGlobal[a].domicilio);
       $("#modalVendedor .rfc").val(arrGlobal[a].rfc);
   
       $("#modalVendedor .n_licencia").val(arrGlobal[a].n_licencia);
       $("#modalVendedor .f_licencia").val(arrGlobal[a].f_exp);
       $("#modalVendedor .rutavende").val(arrGlobal[a].ruta);
       $("#modalVendedor .tipoventa").val(arrGlobal[a].t_venta);
       $("#modalVendedor .credito").val(arrGlobal[a].l_credito);
       $("#modalVendedor .bonificacion").val(arrGlobal[a].l_bon);
       $("#modalVendedor .merma").val(arrGlobal[a].merma);
       $("#modalVendedor .tipocontrato").val(arrGlobal[a].tipocontrato);
       $("#modalVendedor .iniciocontrato").val(arrGlobal[a].iniciocontrato);
       $("#modalVendedor .fincontrato").val(arrGlobal[a].fincontrato);
       $("#modalVendedor .telp").val(arrGlobal[a].telp);
       $("#modalVendedor .tell").val(arrGlobal[a].tell);
       $("#modalVendedor .fnacimiento").val(arrGlobal[a].fnacimiento);
       $("#modalVendedor .estado").val(arrGlobal[a].estado);
       $("#modalVendedor .fnacimiento").val(arrGlobal[a].ingreso);
       $("#modalVendedor .vacaciones").val(arrGlobal[a].vacaciones);
       $("#modalVendedor .renuncia").val(arrGlobal[a].renuncia);
       $("#modalVendedor .reingresos").val(arrGlobal[a].reingresos);
       $("#modalVendedor .razon").val(arrGlobal[a].razon);
if(arrGlobal[a].solicitud==1){
  $("#modalVendedor .solicitud").prop('checked', true);
}else{
$("#modalVendedor .solicitud").prop('checked', false);;
}
if(arrGlobal[a].ine2==1){
$("#modalVendedor .ine2").prop('checked', true);
}else{
$("#modalVendedor .ine2").prop('checked', false);;
}
if(arrGlobal[a].curp2==1){
$("#modalVendedor .curp2").prop('checked', true);
}else{
$("#modalVendedor .curp2").prop('checked', false);;
}
if(arrGlobal[a].rfc2==1){
$("#modalVendedor .rfc2").prop('checked', true);
}else{
$("#modalVendedor .rfc2").prop('checked', false);;
}
if(arrGlobal[a].nss==1){
$("#modalVendedor .nss").prop('checked', true);
}else{
$("#modalVendedor .nss").prop('checked', false);;
}
if(arrGlobal[a].acta==1){
$("#modalVendedor .acta").prop('checked', true);
}else{
$("#modalVendedor .acta").prop('checked', false);;
}
if(arrGlobal[a].cdomicilio==1){
$("#modalVendedor .cdomicilio").prop('checked', true);
}else{
$("#modalVendedor .cdomicilio").prop('checked', false);;
}
if(arrGlobal[a].foto==1){
$("#modalVendedor .foto").prop('checked', true);
}else{
$("#modalVendedor .foto").prop('checked', false);;
}
if(arrGlobal[a].recomendaciones==1){
$("#modalVendedor .recomendaciones").prop('checked', true);
}else{
$("#modalVendedor .recomendaciones").prop('checked', false);;
}
if(arrGlobal[a].licenciac==1){
$("#modalVendedor .licenciac").prop('checked', true);
}else{
$("#modalVendedor .licenciac").prop('checked', false);;
}
if(arrGlobal[a].antecedentes==1){
$("#modalVendedor .antecedentes").prop('checked', true);
}else{
$("#modalVendedor .antecedentes").prop('checked', false);;
}
if(arrGlobal[a].ineaval==1){
$("#modalVendedor .ineaval").prop('checked', true);
}else{
$("#modalVendedor .ineaval").prop('checked', false);;
}
if(arrGlobal[a].predial==1){
$("#modalVendedor .predial").prop('checked', true);
}else{
$("#modalVendedor .predial").prop('checked', false);;
}
if(arrGlobal[a].comprobanted==1){
$("#modalVendedor .comprobanted").prop('checked', true);
}else{
$("#modalVendedor .comprobanted").prop('checked', false);;
}
if(arrGlobal[a].pagare==1){
$("#modalVendedor .pagare").prop('checked', true);
}else{
$("#modalVendedor .pagare").prop('checked', false);;
}

    }
  }
}


function selectCliente(id){
  idGlobal = id;
  for(var a=0; a<arrGlobalClientes.length; a++){
    if(arrGlobalClientes[a].id == id){
       $("#modalCliente .local").val(arrGlobalClientes[a].local);
       $("#modalCliente .propietario").val(arrGlobalClientes[a].propietario);
       $("#modalCliente .credito").val(arrGlobalClientes[a].credito);
       $("#modalCliente .bonificacion").val(arrGlobalClientes[a].bonificacion);
       $("#modalCliente .email").val(arrGlobalClientes[a].email);
       $("#modalCliente .direccion").val(arrGlobalClientes[a].direccion);
       $("#modalCliente .lng").val(arrGlobalClientes[a].lng);
       $("#modalCliente .lat").val(arrGlobalClientes[a].lat);
       $("#modalCliente .fecha").val(arrGlobalClientes[a].fechai);
       $("#modalCliente .telefono").val(arrGlobalClientes[a].telefono);
       $("#modalCliente .telefonop").val(arrGlobalClientes[a].telefonop);
       $("#modalCliente .descripcion").val(arrGlobalClientes[a].descripcion);
    }
  }
}
function selectVendedores2(id){

  idGlobal = id;
  var textmodal;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
      textmodal='<div class="row ">';
      textmodal+='<div class="col-md-10 form-group">';
      textmodal+='<label class=""><strong>Nombre: </strong> '+arrGlobal[a].nombre_Emple+' '+arrGlobal[a].paterno_Emple+' '+arrGlobal[a].materno_Emple+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>Fecha de Nacimiento:  </strong>  '+arrGlobal[a].fnacimiento+'</label></div>'; 
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>N. Seguro Social:</strong>  '+arrGlobal[a].n_seguro+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>Curp:</strong>  '+arrGlobal[a].curp+'</label></div>';
      textmodal+='<div class="col-md-12 form-group">';
      textmodal+='<label class=""><strong>Domicilio: </strong>  '+arrGlobal[a].domicilio+'</label></div>';
      textmodal+='<div class=" col-md-6 form-group">';
      textmodal+='<label class=""><strong>RFC: </strong>  '+arrGlobal[a].rfc+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Tipo de contrato: </strong>'+arrGlobal[a].tipocontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Inicio del contrato:  </strong> '+arrGlobal[a].iniciocontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Fin del contrato: </strong>'+arrGlobal[a].fincontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>Tipo de Empleado: </strong>Vendedor</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>N. Licencia:</strong> '+arrGlobal[a].n_licencia+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Fecha de Expiración: </strong>  '+arrGlobal[a].f_exp+'</label></div>';
      textmodal+='<div class="col-md-6 form-group ">';
      textmodal+='<label class=""><strong>Ruta: </strong>'+ruta3+'</label></div>';
      textmodal+='<div class="col-md-6 form-group tipovende">';
      textmodal+='<label class=""><strong>Tipo de Venta: </strong>  '+t_ventas[arrGlobal[a].t_venta-1]+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Limite de crédito:  </strong> '+arrGlobal[a].l_credito+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Limite de bonificación:  </strong> '+arrGlobal[a].l_bon+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Limite de Merma:</strong>  '+arrGlobal[a].merma+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Teléfono Personal:  </strong> '+arrGlobal[a].telp+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Teléfono Local:  </strong> '+arrGlobal[a].tell+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de nacimiento:  </strong> '+arrGlobal[a].fnacimiento+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de ingreso:  </strong> '+arrGlobal[a].ingreso+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Vacaciones próximas:  </strong> '+arrGlobal[a].vacaciones+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de renuncia:  </strong> '+arrGlobal[a].renuncia+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Reingresos:  </strong> '+arrGlobal[a].reingresos+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Razón de la renuncia:  </strong> '+arrGlobal[a].razon+'</label></div>';
      textmodal+='<div class="col-md-12 form-group licencia">';
      textmodal+='<label class=""><strong>Papelería:  </strong></label></div>';
var jj=0;
if(arrGlobal[a].solicitud==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Solicitud.</label></div>';
}else{
   jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Solicitud.</label></div>';
}
if(arrGlobal[a].ine2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- INE.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- INE.</label></div>';
}
if(arrGlobal[a].curp2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- CURP.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- CURP.</label></div>';
}
if(arrGlobal[a].rfc2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- RFC.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- RFC.</label></div>';
}
if(arrGlobal[a].nss==1){
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" >'+jj+'.- NSS.</label></div>';
}else{
     jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- NSS.</label></div>';
}
if(arrGlobal[a].acta==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Acta de nacimiento</label></div>';
}else{
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Acta de nacimiento</label></div>';
}
if(arrGlobal[a].cdomicilio==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Comprobante de domicilio.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Comprobante de domicilio.</label></div>';

}
if(arrGlobal[a].foto==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Fotografía.</label></div>';
}else{
      jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Fotografía.</label></div>';
}
if(arrGlobal[a].recomendaciones==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" >'+jj+'.- Recomendaciones personales.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Recomendaciones personales.</label></div>';

}
if(arrGlobal[a].licenciac==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Licencia de conducir.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Licencia de conducir.</label></div>';
}
if(arrGlobal[a].antecedentes==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Carta de no antecedentes penales.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Carta de no antecedentes penales.</label></div>';

}
if(arrGlobal[a].ineaval==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" >'+jj+'.- INE del aval.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- INE del aval.</label></div>';
}
if(arrGlobal[a].predial==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Predial.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Predial.</label></div>';
}
if(arrGlobal[a].comprobanted==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Comprobante de domicilio del aval.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Comprobante de domicilio del aval.</label></div>';

}
if(arrGlobal[a].pagare==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Pagaré firmado.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Pagaré firmado.</label></div>';
}





     textmodal+=' </div>';
 }

  $('#modal .modalTitulo').html('<h2>INFORMACIÓN </h2>'); 
  $('#modal .textModal').html(textmodal); 
  }
  $('#modal ').modal('show');

}
function selectAdministracion2(id){
  idGlobal = id;
  var textmodal;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
      textmodal='<div class="row ">';
      textmodal+='<div class="col-md-10 form-group">';
      textmodal+='<label class=""><strong>Nombre: </strong> '+arrGlobal[a].nombre_Emple+' '+arrGlobal[a].paterno_Emple+' '+arrGlobal[a].materno_Emple+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>N. Seguro Social:</strong>  '+arrGlobal[a].n_seguro+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>Curp:</strong>  '+arrGlobal[a].curp+'</label></div>';
      textmodal+='<div class="col-md-12 form-group">';
      textmodal+='<label class=""><strong>Domicilio:</strong>  '+arrGlobal[a].domicilio+'</label></div>';
      textmodal+='<div class=" col-md-6 form-group">';
      textmodal+='<label class=""><strong>RFC: </strong>  '+arrGlobal[a].rfc+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Tipo de contrato: </strong>'+arrGlobal[a].tipocontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Inicio del contrato:  </strong>'+arrGlobal[a].iniciocontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>Fin del contrato: </strong>'+arrGlobal[a].fincontrato+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>Fecha de nacimiento: </strong>'+arrGlobal[a].fnacimiento+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Tipo de Empleado:</strong> '+t_Empleado[arrGlobal[a].tipo-1]+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Teléfono Personal:  </strong>'+arrGlobal[a].telp+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Teléfono Local: </strong>'+arrGlobal[a].tell+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de nacimiento:  </strong> '+arrGlobal[a].fnacimiento+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de ingreso:  </strong> '+arrGlobal[a].ingreso+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Vacaciones próximas:  </strong> '+arrGlobal[a].vacaciones+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Fecha de renuncia:  </strong> '+arrGlobal[a].renuncia+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Reingresos:  </strong> '+arrGlobal[a].reingresos+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>Razón de la renuncia:  </strong> '+arrGlobal[a].razon+'</label></div>';
      textmodal+='<div class="col-md-12 form-group licencia">';
      textmodal+='<label class=""><strong>Papelería:  </strong></label></div>';
var jj=0;
if(arrGlobal[a].solicitud==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Solicitud.</label></div>';
}else{
   jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Solicitud.</label></div>';
}
if(arrGlobal[a].ine2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- INE.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- INE.</label></div>';
}
if(arrGlobal[a].curp2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- CURP.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- CURP.</label></div>';
}
if(arrGlobal[a].rfc2==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- RFC.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- RFC.</label></div>';
}
if(arrGlobal[a].nss==1){
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" >'+jj+'.- NSS.</label></div>';
}else{
     jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- NSS.</label></div>';
}
if(arrGlobal[a].acta==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Acta de nacimiento</label></div>';
}else{
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Acta de nacimiento</label></div>';
}
if(arrGlobal[a].cdomicilio==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Comprobante de domicilio.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Comprobante de domicilio.</label></div>';

}
if(arrGlobal[a].foto==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Fotografía.</label></div>';
}else{
      jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Fotografía.</label></div>';
}
if(arrGlobal[a].recomendaciones==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" >'+jj+'.- Recomendaciones personales.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Recomendaciones personales.</label></div>';

}
if(arrGlobal[a].licenciac==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Licencia de conducir.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Licencia de conducir.</label></div>';
}
if(arrGlobal[a].antecedentes==1){
  jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="">'+jj+'.- Carta de no antecedentes penales.</label></div>';
}else{
    jj++;
  textmodal+='<div class="col-md-6 form-group licencia">';
  textmodal+='<label class="" style="color:red;">'+jj+'.- Carta de no antecedentes penales.</label></div>';

}






     textmodal+=' </div>';
 }

  $('#modal .modalTitulo').html('<h2>INFORMACIÓN</h2>'); 
  $('#modal .textModal').html(textmodal); 
  }
  $('#modal ').modal('show');

}
function selectControlVehicular2(id){
  idGlobal = id;
  var textmodal;
  for(var a=0; a<arrGlobalVehiculo.length; a++){
    if(arrGlobalVehiculo[a].id == id){
      textmodal='<div class="row ">';
      textmodal+='<div class="col-md-6 form-group ">';
      textmodal+='<label class="" ><strong>NUMERO:</strong>  '+arrGlobalVehiculo[a].numero+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>MARCA: </strong> '+arrGlobalVehiculo[a].marca+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>NO. SERIE</strong>  '+arrGlobalVehiculo[a].noserie+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>MODELO:</strong>  '+arrGlobalVehiculo[a].modelo+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>TIPO:</strong>  '+arrGlobalVehiculo[a].tipo+'</label></div>';
      textmodal+='<div class=" col-md-6 form-group">';
      textmodal+='<label class=""><strong>COLOR: </strong>  '+arrGlobalVehiculo[a].color+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>COMBUSTIBLE: </strong>'+combustibles[arrGlobalVehiculo[a].combustible-1]+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>KILOMETRAJE INICIAL:</strong>'+arrGlobalVehiculo[a].km+'</label></div>';
      textmodal+='<div class="col-md-6 form-group exp">';
      textmodal+='<label class=""><strong>PLACAS: </strong>'+arrGlobalVehiculo[a].placa+'</label></div>';
      textmodal+='<div class="col-md-6 form-group">';
      textmodal+='<label class=""><strong>ASEGURADORA: </strong>'+arrGlobalVehiculo[a].aseguradora+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>POLIZA:</strong>'+arrGlobalVehiculo[a].poliza+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>INICIO DE POLIZA:  </strong>'+arrGlobalVehiculo[a].iniciopoliza+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>FIN DE POLIZA: </strong>'+arrGlobalVehiculo[a].finpoliza+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>ENDOSO:</strong>  '+arrGlobalVehiculo[a].endoso+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>INCISO:</strong>  '+arrGlobalVehiculo[a].inciso+'</label></div>';
      textmodal+='<div class="col-md-6 form-group licencia">';
      textmodal+='<label class=""><strong>TELEFONO:</strong>  '+arrGlobalVehiculo[a].tel+'</label></div> </div>';
 }

  $('#modal .modalTitulo').html('<h2>INFORMACIÓN</h2>'); 
  $('#modal .textModal').html(textmodal); 
  }
  $('#modal ').modal('show');

}
function selectEV(id){
  var rutav ='<select class="form-control rv clear" id="rv" name="select">';
        document.getElementById('opcionesAvanzadas').style.display = 'block';

var conta=1;
var n_=0;
 for (var i = 0; i < arrGlobalE.length; i++) {
 //alert(arrGlobal4[i].id +" == "+id);

for (var ii=0; ii < arrGlobalRuta.length; ii++) {
if(arrGlobalRuta[ii].id==arrGlobalE[i].ruta){
//alert(ruta3);
ruta3=arrGlobalRuta[ii].nombre;
}
}





  if (arrGlobalE[i].id == id) { 
  var nombre = t_rutas[arrGlobalE[i].ruta]+' - '+arrGlobalE[i].nombre;
  //alert(nombre +" - "+arrGlobal4[i].efectivo);
      
  rutav += '<option id="'+arrGlobalE[i].id+'" value="'+arrGlobalE[i].id+'" >'+ruta3+' - '+arrGlobalE[i].nombre+'</option>';
n++;

for (var j = 0; j <  arrGlobalE.length; j++) {
 // alert(arrGlobal4[j].fecha+" == "+today_vv +" && "+ arrGlobal4[j].efectivo +" == null"+arrGlobal4[i].nombre);
   if(arrGlobalE[j].fechaf==today_vv && arrGlobalE[j].efectivo==null ){




for (var iii=0; iii < arrGlobalRuta.length; iii++) {
if(arrGlobalRuta[iii].id== arrGlobalE[j].ruta){
//alert(ruta3);
ruta3=arrGlobalRuta[iii].nombre;
}
}


    
  rutav += '<option id="'+arrGlobalE[j].id+'" value="'+arrGlobalE[j].id+'" >'+ruta3+' - '+arrGlobalE[j].nombre+'</option>';
   conta++;
   }
}
rutav +='</select>';

//alert(rutav);
$("#modalEfectivo .selectCash").html(rutav);

  //$("#modalEfectivo #rv").val(nombre);
  $("#modalEfectivo .cash").val(arrGlobalE[i].efectivo);
  $("#modalEfectivo .iV").val(arrGlobalE[i].creditos);
  $("#modalEfectivo .fSD").val(arrGlobalE[i].f_s_dia);
  $("#modalEfectivo .lDT").val(arrGlobalE[i].loquedeberiatraer);
  $("#modalEfectivo .fSR").val(arrGlobalE[i].f_s_real);
  $("#modalEfectivo .cL").val(arrGlobalE[i].credito_p);
  $("#modalEfectivo .bL").val(arrGlobalE[i].bonificacion_p);

  }
}
}
function selectAdministracion12(id){
  idGlobal = id;

  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
       $("#modalAdministracion .idEmpleado").val(arrGlobal[a].idEmpleados);
       $("#modalAdministracion .nombre").val(arrGlobal[a].nombre_Emple);
       $("#modalAdministracion .a_paterno").val(arrGlobal[a].paterno_Emple);
       $("#modalAdministracion .a_materno").val(arrGlobal[a].materno_Emple);
       $("#modalAdministracion .n_seguro").val(arrGlobal[a].n_seguro);
       $("#modalAdministracion .curp").val(arrGlobal[a].curp);
       $("#modalAdministracion .domicilio").val(arrGlobal[a].domicilio);
       $("#modalAdministracion .rfc").val(arrGlobal[a].rfc);
       $("#modalAdministracion .tipoempleado").val(arrGlobal[a].tipo);
       $("#modalAdministracion .tipocontrato").val(arrGlobal[a].tipocontrato);
       $("#modalAdministracion .iniciocontrato").val(arrGlobal[a].iniciocontrato);
       $("#modalAdministracion .fincontrato").val(arrGlobal[a].fincontrato);
       $("#modalAdministracion .telp").val(arrGlobal[a].telp);
       $("#modalAdministracion .tell").val(arrGlobal[a].tell);
       $("#modalAdministracion .fnacimiento").val(arrGlobal[a].fnacimiento);
       $("#modalAdministracion .tipocontrato").val(arrGlobal[a].tipocontrato);
       $("#modalAdministracion .iniciocontrato").val(arrGlobal[a].iniciocontrato);
       $("#modalAdministracion .fincontrato").val(arrGlobal[a].fincontrato);
       $("#modalAdministracion .telp").val(arrGlobal[a].telp);
       $("#modalAdministracion .tell").val(arrGlobal[a].tell);
       $("#modalAdministracion .fnacimiento").val(arrGlobal[a].fnacimiento);
       $("#modalAdministracion .estado").val(arrGlobal[a].estado);
       $("#modalAdministracion .fnacimiento").val(arrGlobal[a].ingreso);
       $("#modalAdministracion .vacaciones").val(arrGlobal[a].vacaciones);
       $("#modalAdministracion .renuncia").val(arrGlobal[a].renuncia);
       $("#modalAdministracion .reingresos").val(arrGlobal[a].reingresos);
       $("#modalAdministracion .razon").val(arrGlobal[a].razon);
if(arrGlobal[a].solicitud==1){
  $("#modalAdministracion .solicitud").attr('checked', true);
}
if(arrGlobal[a].ine2==1){
$("#modalAdministracion .ine2").attr('checked', true);
}
if(arrGlobal[a].curp2==1){
$("#modalAdministracion .curp2").attr('checked', true);
}
if(arrGlobal[a].rfc2==1){
$("#modalAdministracion .rfc2").attr('checked', true);
}
if(arrGlobal[a].nss==1){
$("#modalAdministracion .nss").attr('checked', true);
}
if(arrGlobal[a].acta==1){
$("#modalAdministracion .acta").attr('checked', true);
}
if(arrGlobal[a].cdomicilio==1){
$("#modalAdministracion .cdomicilio").attr('checked', true);
}
if(arrGlobal[a].foto==1){
$("#modalAdministracion .foto").attr('checked', true);
}
if(arrGlobal[a].recomendaciones==1){
$("#modalAdministracion .recomendaciones").attr('checked', true);
}
if(arrGlobal[a].licenciac==1){
$("#modalAdministracion .licenciac").attr('checked', true);
}
if(arrGlobal[a].antecedentes==1){
$("#modalAdministracion .antecedentes").attr('checked', true);
}

    }
  }
}


function selectMantenimiento(id){
  idGlobal = id;

 var upMantenimiento1='<button type="button" class="btn usuario1 modificar" onclick="upMantenimiento()">GUARDAR</button>';
 var delMantenimiendo1 = '<button type="button" class="btn usuario1 eliminar" onclick="delMantenimiento1()">ELIMINAR</button>';
  var vehiculo3='<label >VEHICULO</label><input type="text" id="peso" disabled class="form-control clear vehiculo2" placeholder="">';
  for(var a=0; a< arrGlobalMantenimiento.length; a++){
    if( arrGlobalMantenimiento[a].id == id){
       $(".guardarM").html(upMantenimiento1);
       $(".eliminarM").html(delMantenimiendo1);
       $("#vehiculo7").html(vehiculo3);
       $(".jerarquia").val( arrGlobalMantenimiento[a].jerarquia);
       $(".descripcion").val( arrGlobalMantenimiento[a].descripcion);
       $(".fecha").val( arrGlobalMantenimiento[a].fecha);
       $(".servicio").val( arrGlobalMantenimiento[a].servicio); 
       $(".vehiculo2").val( arrGlobalMantenimiento[a].vehiculo); 
  }
}
       
}
function selectVentas(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class="letras impre" >PESO</label><input type="text" id="peso" class="peso impre form-control clear peso" onchange="document.getElementById("add").focus();" placeholder="">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upVenta()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delVenta()">ELIMINAR</button>';
  var seleccionado;
  document.getElementById("idProducto").disabled = true;
  for(var a=0; a<arrGlobal3.length; a++){
    if(arrGlobal3[a].id == id){
       $(".upventa").html(upventas1);
       $(".delventa").html(delventas1);
       $(".idProducto").val(arrGlobal3[a].idProducto);
       $(".descripcion").val(arrGlobal3[a].descripcionventa);
       $(".piezas").val(arrGlobal3[a].piezas);
       if(arrGlobal3[a].medida == "1"){
            $(".pesos").html(peso);
            $(".peso").val(arrGlobal3[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesos').removeClass('hidden');
            $('.pesos').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectPedido(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class="letras impre" >PESO</label><input type="text" id="pesoP" class="pesoP impre form-control clear" onchange="document.getElementById("addP").focus();" placeholder="">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upVenta()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delPedido()">ELIMINAR</button>';
  var seleccionado;
  for(var a=0; a<arrGlobal3.length; a++){
    if(arrGlobal3[a].id == id){
       $(".upventaP").html(delventas1);
       //$(".delventaP").html(delventas1);
       $(".idProductoP").val(arrGlobal3[a].idProducto);
       $(".descripcionP").val(arrGlobal3[a].descripcionventa);
       $(".piezasP").val(arrGlobal3[a].piezas);
       $(".importeP").val(arrGlobal3[a].valorMercancia);
       if(arrGlobal3[a].peso != 0 ){
            $(".pesosP").html(peso);
            $(".pesoP").val(arrGlobal3[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesosP').removeClass('hidden');
            $('.pesosP').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectMerma(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class=" impre " >Peso</label><input type="text" id="pesoM" class=" impre form-control clear pesoM" onchange="document.getElementById("addM").focus();" placeholder="">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMerma()">Guardar</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delMerma()">Eliminar</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalMerma.length; a++){
    if(arrGlobalMerma[a].id == id){
       $("#modalMerma .upventa").html(upventas1);
       $("#modalMerma .delventa").html(delventas1);
       $("#modalMerma .idProductoM").val(arrGlobalMerma[a].idProducto);
       $("#modalMerma .descripcionM").val(arrGlobalMerma[a].descripcionventa);
       $("#modalMerma .piezasM").val(arrGlobalMerma[a].piezas);
       if(arrGlobalMerma[a].medida == "1"){
            $("#modalMerma .pesosM").html(peso);
            $("#modalMerma .pesoM").val(arrGlobalMerma[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('#modalMerma .pesosM').removeClass('hidden');
            $('#modalMerma .pesosM').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectMermaP(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class=" impre letras " >PESO</label><input type="text" id="pesoMP" class=" impre form-control clear pesoMP" onchange="document.getElementById("addMP").focus();" placeholder="">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMermaP()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delMermaP()">ELIMINAR</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalMerma.length; a++){
    if(arrGlobalMerma[a].id == id){
       $(".upventaMP").html(upventas1);
       $(".delventaMP").html(delventas1);
       $(".idProductoMP").val(arrGlobalMerma[a].idProducto);
       $(".descripcionMP").val(arrGlobalMerma[a].descripcionventa);
       $(".piezasMP").val(arrGlobalMerma[a].piezas);
       if(arrGlobalMerma[a].medida == "1"){
            $(".pesosMP").html(peso);
            $(".pesoMP").val(arrGlobalMerma[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesosMP').removeClass('hidden');
            $('.pesosMP').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectDeg(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class=" impre letras " >PESO</label><input type="text" id="pesoMP" class=" impre form-control clear pesoMP" onchange="document.getElementById("addMP").focus();" placeholder="">';
 //var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMermaP()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delDeg()">ELIMINAR</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalMerma.length; a++){
    if(arrGlobalMerma[a].id == id){
       //$(".upventaMP").html(upventas1);
       $(".upventaMP").html(delventas1);
       $(".idProductoMP").val(arrGlobalMerma[a].idProducto);
       $(".descripcionMP").val(arrGlobalMerma[a].descripcionventa);
       $(".piezasMP").val(arrGlobalMerma[a].piezas);
       if(arrGlobalMerma[a].medida == "1"){
            $(".pesosMP").html(peso);
            $(".pesoMP").val(arrGlobalMerma[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesosMP').removeClass('hidden');
            $('.pesosMP').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectMermaP3(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class=" impre letras " >PESO</label><input type="text" id="pesoMP" class=" impre form-control clear pesoMP" onchange="document.getElementById("addMP").focus();" placeholder="">';
 //var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMermaP()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delMermaP2()">ELIMINAR</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalMerma.length; a++){
    if(arrGlobalMerma[a].id == id){
       $(".upventaMP").html(delventas1);
       $(".idProductoMP").val(arrGlobalMerma[a].idProducto);
       $(".descripcionMP").val(arrGlobalMerma[a].descripcionventa);
       $(".piezasMP").val(arrGlobalMerma[a].piezas);
       if(arrGlobalMerma[a].medida == "1"){
            $(".pesosMP").html(peso);
            $(".pesoMP").val(arrGlobalMerma[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesosMP').removeClass('hidden');
            $('.pesosMP').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function selectDeg2(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class=" impre letras " >PESO</label><input type="text" id="pesoMP" class=" impre form-control clear pesoMP" onchange="document.getElementById("addMP").focus();" placeholder="">';
 //var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMermaP()">GUARDAR</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delDeg2()">ELIMINAR</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalMerma.length; a++){
    if(arrGlobalMerma[a].id == id){
       $(".upventaMP").html(delventas1);
       $(".idProductoMP").val(arrGlobalMerma[a].idProducto);
       $(".descripcionMP").val(arrGlobalMerma[a].descripcionventa);
       $(".piezasMP").val(arrGlobalMerma[a].piezas);
       if(arrGlobalMerma[a].medida == "1"){
            $(".pesosMP").html(peso);
            $(".pesoMP").val(arrGlobalMerma[a].peso);
            //valor=arrGlobal3[a].peso;
       }else{
        $('.pesosMP').removeClass('hidden');
            $('.pesosMP').html('');
            //valor=arrGlobal3[a].piezas;
       }
valor=valorM;
 
      
  }
}
       
}
function v2(){
  $(".upventa").html('')
  $(".delventa").html('')
}
function v(){
  $(".upventa").html('')
  $(".delventa").html('')
}
function closeModalMerma(){
  $('#modalMerma').modal('hide');
}
function vP(){
  $(".upventaMP").html('')
  $(".delventaMP").html('')
}
/*-------------------- funciones globales -------------------------*/
function addRegistro(json, url, loadFuncion ){
    var mensajes = {success: "Registrado", error: "Ocurrio un error al insertar el registro", tipo: 'POST'};
    
  
    executeFunction(json, url, mensajes);

    getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);
}
function addRegistro2(json, url, loadFuncion ){
    var mensajes = {success: "Registrado", error: "Ocurrio un error al insertar el registro", tipo: 'POST'};
    
  
    executeFunction2(json, url, mensajes);

   // getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);
}
function addRegistro3(json, url, loadFuncion ){
    var mensajes = {success: "Registrado", error: "Ocurrio un error al insertar el registro", tipo: 'POST'};
    
  
    executeFunction2(json, url, mensajes);

    getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);
}
function addRegistroA(json,jsonC, url, loadFuncion ){
    var mensajes = {success: "Registrado", error: "Ocurrio un error al insertar el registro", tipo: 'POST'};
    
  
    executeFunction2(json, url, mensajes);
    
    executeFunctionDone(jsonC, url, "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadFuncion);
 

 //   getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);
}
function upRegistro(id, json, url, loadFuncion ){

  if(id!=null){
    var mensajes = {success: "Registro actualizado", error: "Ocurrio un error al actualizar el registro", tipo: 'PUT'};
    executeFunction(json, url + "/" + id, mensajes);
    getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);

  }
  else{
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}

function upRegistroA(id, json,jsonC, url, loadFuncion ){

  if(id!=null){
    var mensajes = {success: "Registro actualizado", error: "Ocurrio un error al actualizar el registro", tipo: 'PUT'};
    executeFunction(json, url + "/" + id, mensajes);
    executeFunctionDone(jsonC, url, "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadFuncion);
 

  }
  else{
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}
function upRegistroA2(id, json,jsonC, url, loadFuncion ){

  if(id!=null){
    var mensajes = {success: "", error: "Ocurrio un error al actualizar el registro", tipo: 'PUT'};
    executeFunction2(json, url + "/" + id, mensajes);
    executeFunctionDone(jsonC, url, "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadFuncion);
   

  }
  else{
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}
function upRegistro3(id, json, url, loadFuncion ){

  if(id!=null){
    var mensajes = {success: "", error: "Ocurrio un error al actualizar el registro", tipo: 'PUT'};
    executeFunction2(json, url + "/" + id, mensajes);
    getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadFuncion);

  }

}

function upRegistro2(id, json, url, loadFuncion ){

  if(id!=null){
    var mensajes = {success: "", error: "Ocurrio un error al actualizar el registro de la venta", tipo: 'PUT'};
    executeFunction2(json, url + "/" + id, mensajes);
    
  }

}

function delRegistro(id, url, loadLista){

  if(id!= null){
    var mensajes = {success: "Registro eliminado", error: "Ocurrio un error al eliminar el registro", tipo: 'DELETE'};
    executeFunction(null, url +"/" + id, mensajes);
  
    getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadLista);

  }
  else{
    
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}

function delRegistroA(id,jsonC,url, loadLista){

  if(id!= null){
    var mensajes = {success: "Registro eliminado", error: "Ocurrio un error al eliminar el registro", tipo: 'DELETE'};
    executeFunction(null, url +"/" + id, mensajes);
      executeFunctionDone(jsonC, url, "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadLista);
  
  //  getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadLista);

  }
  else{
    
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}
function delRegistroA2(id,jsonC,url, loadLista){

  if(id!= null){
    var mensajes = {success: "", error: "Ocurrio un error al eliminar el registro", tipo: 'DELETE'};
    executeFunction2(null, url +"/" + id, mensajes);
      executeFunctionDone(jsonC, url, "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadLista);
  
  //  getFunction(url, "Ocurrio un error al actualizar el formulario, reintentar más tarde.", loadLista);

  }
  else{
    
    $('#modal .textModal').html('Seleccionar un registro.'); 
      $('#modal').modal('show');
  }
}

function delRegistro2(id, url, loadLista){

  if(id!= null){
    var mensajes = {success: "Registro eliminado", error: "Ocurrio un error al eliminar el registro", tipo: 'DELETE'};
    executeFunction2(null, url +"/" + id, mensajes);
  
  }

}

function executeFunction(data, url, mensajes){
  
  $.ajax({    
    url : url,    
    data : data,    
    type : mensajes.tipo,    
    success : function(json) {    
      $('#modal .textModal').html(mensajes.success); 
      $('#modalProveedor').modal('hide');
      $('#modal').modal('show');

    },    

    error : function(xhr, status) {    
    $('#modal .textModal').html(mensajes.error); 
      $('#modal').modal('show');
     
    },    
    complete : function(xhr, status) {        
    }});
}
function executeFunction2(data, url, mensajes){
  
  $.ajax({    
    url : url,    
    data : data,    
    type : mensajes.tipo,    
    success : function(json) {    
     

    },    

    error : function(xhr, status) {    
    $('#modal .textModal').html(mensajes.error); 
      $('#modal').modal('show');
     
    },    
    complete : function(xhr, status) {        
    }});
}
function getFunction(url, mensajes, functionFinal){
  $.ajax({    
    url : url,    
    data : {},    
    type : 'GET',    
    success : function(json) {   
      $('#modal .textModal').html(mensajes.success); 

      functionFinal(json);
      
    },    

    error : function(xhr, status) {    
    $('#modal .textModal').html(mensajes); 
      $('#modal').modal('show');
    },    
    complete : function(xhr, status) { 

    }});
 
}
function executeFunctionDone(data, url, mensajes, done){
   
  $.ajax({    
    url : url,    
    data : data,    
    type : mensajes.tipo,    
    success : function(json) {    

      done(json);
    
    },    

    error : function(xhr, status) {    
    $('#modal .textModal').html(mensajes.error); 
      $('#modal').modal('show');
    },    
    complete : function(xhr, status) {        
    }});
}
/*-------------------- Click a los diferentes menu -------------------*/


function click_usuarios(){
        document.getElementById('loader').style.display = 'block';

  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/usuarios.html');

 $('.tituloPantalla').html('<h3 class="inventario"> USUARIOS </h3>');

getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

}
function click_inventario(){
 document.getElementById('loader').style.display = 'block';

 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 
 $('#contenido').load('/html/mInventario.html');
 //$('.seccion1').html('/html/inventario.html');
 $('.tituloPantalla').html('<h3 class="inventario"> INVENTARIO </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="click_inventario2()">Inventario</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="click_Categorias()" role="tab">Categorías</button></li></div>');
          

 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}

function click_Categorias(){
  document.getElementById('loader').style.display = 'block';
  $('.btn-nav').removeClass('hidden');
  $('.btn-nav').html('<h3> Menú </h3>');
  $('.seccion2').load('/html/categoria.html');
 // $('.tituloPantalla').html('<h3 class="inventario">CATEGORÍAS</h3>');
  $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">Inventario</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="click_Categorias()" role="tab">Categorías</button></li></div>');
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadCategorias);


 }
function click_inventario2(){

 }
function click_ventas(){
 newTimer();
  if(today==0)
    today=7;
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/ventas.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho1(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <li role="presentation" class="impre recepcionList text-center" href="#seccion3" aria-controls="seccion3" data-toggle="tab" role="tab" onclick="click_Recepcion1(); ">RECEPCIÓN </li>  <span class="border border-primary"></span> <li role="presentation" class="impre productosList text-center" href="#seccion5" aria-controls="seccion5" data-toggle="tab" role="tab" onclick="click_Pedidos1(); ">PEDIDOS  </li>  <span class="border border-white"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion4" aria-controls="seccion4" data-toggle="tab" role="tab" onclick="click_Merma1(); ">MERMA </li>  <span class="border border-warning"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion6" aria-controls="seccion6" data-toggle="tab" role="tab" onclick="click_Degustaciones1(); "> DEGUSTACIONES</li>  <span class="border border-warning"></span> <div class="imprimir"></div></ul> </div>');

   document.getElementById('loader').style.display = 'block';
 saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
          scv=noSemana;
    
      
var sfc = (scv+1)+"";
  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMapa);
   

}
 
}

function click_notas(id,h){
  $('#modalNotas').modal('show');
  id_vend=id;
   var nombre= '<h3>'+ arrGlobalEmpleados[h].nombre_Emple + ' ' + arrGlobalEmpleados[h].paterno_Emple + ' ' + arrGlobalEmpleados[h].materno_Emple+'</h3>';
$('#modalNotas .nombreempleado').html(nombre);
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');

getFunction('notase', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadNotas);
}
function closeModalNota(){
  $('#modalNotas').modal('hide');
}
function click_empleados(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mEmpleados.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> EMPLEADOS </h3>');
 //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick=" click_empleados(); ">Notas </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick=" click_vendedores() " role="tab">Ventas</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick=" click_administracion() ">Administración</button></li><div class="imprimir"></div></ul> </div>');
   $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick=" click_empleados(); "> NOTAS </li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick=" click_vendedores(); " role="tab">VENTAS </li> <span class="border border-success"></span> <li role="presentation" class="impre recepcionList text-center" href="#seccion3" aria-controls="seccion3" data-toggle="tab" role="tab" onclick=" click_administracion() ">ADMINISTRACIÓN </li>  <span class="border border-primary"></span><li role="presentation" class="impre mermaList text-center" href="#seccion4" aria-controls="seccion4" data-toggle="tab" role="tab" onclick="click_EClientes();">CLIENTES</li>  <span class="border border-warning"></span> <li role="presentation" class="impre productosList text-center" href="#seccion5" aria-controls="seccion5" data-toggle="tab" role="tab" onclick="click_Fabrica(); ">FABRICA </li>  <span class="border border-white"></span> <div class="imprimir"></div></ul> </div>');
 
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEmpleados2);



}

function click_salidaventa(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/salida_venta.html');
 
var fecha = $(".selectfecha").val(); 

var day2 = fecha.substring(8,10);
var month2 = fecha.substring(5,7);
var year2 = fecha.substring(0,4);

today_v = year+'-'+month+'-'+day;
//alert(day2+" / "+month2+" / "+year2);






fecha = year2+'-'+month+'-'+day;

if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  /*alert(fecha+"hey");*/
  
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
   today_v = fecha; 
$('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+today_v+' )</p>');  
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
}

}
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEmpleados1);

function click_Despacho1(){

      $('#modalPin').modal('show');
}
function click_Pedidos1(){

      $('#modalPedidos').modal('show');
}

function click_Despacho(){
        document.getElementById('loader').style.display = 'block';
 
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/salida_venta.html');
//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" disabled aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button> </li><div class="imprimir"></div></ul> </div>');
   $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar()">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho1(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <s<div class="imprimir"></div></ul> </div>');


var fecha = $(".selectfecha").val(); 


//today_v = year+'-'+month+'-'+day;
//alert(day2+" / "+month2+" / "+year2);



var dia= ""+day+"";
if(dia.length == 1){
  dia = "0"+dia;
  //alert(dia);
}
var mes= ""+month+"";
if(mes.length == 1){
  mes = "0"+mes;
  //alert(dia);
}
  //alert(dia+"- "+dia.length);

today_v = year+'-'+mes+'-'+dia;

if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  //alert(today_v+"hey");
  day2 = today_v.substring(8,10);
 month2 = today_v.substring(5,7);
 year2 = today_v.substring(0,4);
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
 var diasemaD= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
   var diaD=(diasemaD.getUTCDay());
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+dias[diaD-1]+', '+day2+' DE '+months[parseInt(month2)]+' DEL '+year2+' )</p>');   

//$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+today_v+' )</p>');  
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

}
 function click_Recepcion1(){
      
      $('#modalPin2').modal('show');

}
function click_Merma1(){
$('#modalPin3').modal('show');
}
function click_Degustaciones1(){
$('#modalPin4').modal('show');
}
function modal_VDiaria(){
  $('#modalVDiaria').modal('show');
}
function click_Merma(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion4').load('/html/rec_venta.html');
 //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div><div class="ventaDiaria"></div><div type="button" class="btn btn-dark totala text-center" onclick="VentaspasadasRS()">RUTA SEMANAL</div><div type="button" class="btn btn-dark totala text-center" onclick="">U. RECEPCIÓN</div></ul> </div>');
   //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar()">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion3" aria-controls="seccion3" id="desp" data-toggle="tab" onclick="click_Recepcion1()" role="tab">RECEPCIÓN </li> <span class="border border-success"></span> <s<div class="imprimir"></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion4" aria-controls="seccion4" data-toggle="tab" role="tab" onclick="click_Merma1(); ">MERMA </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
      

        document.getElementById('loader').style.display = 'block';

var fecha = $(".selectfecha").val(); 
//$('.semanaRuta').html();
var dia= ""+day+"";
if(dia.length == 1){
  dia = "0"+dia;
  //alert(dia);
}
var mes= ""+month+"";
if(mes.length == 1){
  mes = "0"+mes;
  //alert(dia);
}
today_v = year+'-'+mes+'-'+dia;
/*
if(fecha!=undefined){
 
var dd = fecha.substring(8,10);
var mm = fecha.substring(5,7);
var yy = fecha.substring(0,4);
//alert(dd+" / "+mm+" / "+yy);

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
  
}
*/
  //alert(dia+"- "+dia.length);



if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  //alert(fecha+"hey");
  //alert(today_v+"hey");
  day2 = today_v.substring(8,10);
  month2 = today_v.substring(5,7);
  year2 = today_v.substring(0,4);
  saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasMerma);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> MERMA  </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
   
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
 saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
 //alert(today_v+"hey");
$('.tituloPantalla').html('<h3 class="ventas impre"> MERMA  </h3><p>( '+today_v+' )</p>');  
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasMerma);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasMerma);
$('.imprimir').html('');
}

function click_Degustaciones(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion6').load('/html/rec_venta.html');
 //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div><div class="ventaDiaria"></div><div type="button" class="btn btn-dark totala text-center" onclick="VentaspasadasRS()">RUTA SEMANAL</div><div type="button" class="btn btn-dark totala text-center" onclick="">U. RECEPCIÓN</div></ul> </div>');
   //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar()">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion3" aria-controls="seccion3" id="desp" data-toggle="tab" onclick="click_Recepcion1()" role="tab">RECEPCIÓN </li> <span class="border border-success"></span> <s<div class="imprimir"></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion6" aria-controls="seccion6" data-toggle="tab" role="tab" onclick="click_Degustaciones(); ">DEGUSTACIONES </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
      

        document.getElementById('loader').style.display = 'block';

var fecha = $(".selectfecha").val(); 
//$('.semanaRuta').html();
var dia= ""+day+"";
if(dia.length == 1){
  dia = "0"+dia;
  //alert(dia);
}
var mes= ""+month+"";
if(mes.length == 1){
  mes = "0"+mes;
  //alert(dia);
}
today_v = year+'-'+mes+'-'+dia;
/*
if(fecha!=undefined){
 
var dd = fecha.substring(8,10);
var mm = fecha.substring(5,7);
var yy = fecha.substring(0,4);
//alert(dd+" / "+mm+" / "+yy);

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
  
}
*/
  //alert(dia+"- "+dia.length);



if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  //alert(fecha+"hey");
  //alert(today_v+"hey");
  day2 = today_v.substring(8,10);
  month2 = today_v.substring(5,7);
  year2 = today_v.substring(0,4);
  saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasDeg);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> DEGUSTACIONES  </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
   
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
 saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
 //alert(today_v+"hey");
$('.tituloPantalla').html('<h3 class="ventas impre"> DEGUSTACIONES  </h3><p>( '+today_v+' )</p>');  
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasDeg);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasDeg);
$('.imprimir').html('');
}
function click_Recepcion(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion3').load('/html/rec_venta.html');
 //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div><div class="ventaDiaria"></div><div type="button" class="btn btn-dark totala text-center" onclick="VentaspasadasRS()">RUTA SEMANAL</div><div type="button" class="btn btn-dark totala text-center" onclick="">U. RECEPCIÓN</div></ul> </div>');
   $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar()">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion3" aria-controls="seccion3" id="desp" data-toggle="tab" onclick="click_Recepcion1()" role="tab">RECEPCIÓN </li> <span class="border border-success"></span> <s<div class="imprimir"></div></ul> </div>');
      


        document.getElementById('loader').style.display = 'block';

var fecha = $(".selectfecha").val(); 
//$('.semanaRuta').html();
var dia= ""+day+"";
if(dia.length == 1){
  dia = "0"+dia;
  //alert(dia);
}
var mes= ""+month+"";
if(mes.length == 1){
  mes = "0"+mes;
  //alert(dia);
}
today_v = year+'-'+mes+'-'+dia;
/*
if(fecha!=undefined){
 
var dd = fecha.substring(8,10);
var mm = fecha.substring(5,7);
var yy = fecha.substring(0,4);
//alert(dd+" / "+mm+" / "+yy);

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
  
}
*/
  //alert(dia+"- "+dia.length);



if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  //alert(fecha+"hey");
  //alert(today_v+"hey");
  day2 = today_v.substring(8,10);
  month2 = today_v.substring(5,7);
  year2 = today_v.substring(0,4);
  saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
  getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> RECEPCIÓN  </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
   
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
 saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
 //alert(today_v+"hey");
$('.tituloPantalla').html('<h3 class="ventas impre"> RECEPCIÓN  </h3><p>( '+today_v+' )</p>');  
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
$('.imprimir').html('');
}
function VentaspasadasRS(){
  //$('.btn-nav').removeClass('hidden');
 //$('.btn-nav').html('<h3> Menú </h3>');
 //$('.seccion3').load('/html/rec_venta.html');<
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasRS);
}
function click_recepcionventa(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/rec_venta.html');
 
var fecha = $(".selectfecha").val(); 

today_v = year+'-'+month+'-'+day;

if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  /*alert(fecha+"hey");*/
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRec);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

}else{
   today_v = fecha; 
$('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+today_v+' )</p>');  
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRec);
   
}
}
function click_clientes(){

$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mRutas.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> CLIENTES </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">MAPA</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Mapa();" role="tab">CLIENTES</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Rutas()">RUTAS</button></li><div class="imprimir"></div></ul> </div>');

 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/


}
getFunction('clientes', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadClientes);

function click_Rutas(){
        document.getElementById('loader').style.display = 'block';

   $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion3').load('/html/rutas.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> RUTAS </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">MAPA</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Mapa();" role="tab">CLIENTES</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Rutas()">RUTAS</button></li><div class="imprimir"></div></ul> </div>');
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);
 
//  alert("rutas!");
}
function botones(){
  var boton = '<input type="button" class="btn btn-success" value="Agregar cliente" onClick="addCliente();">';
$('.addCliente1').html(boton);
}

 function initMap() {

        var uluru = {lat: 24.033618, lng: -104.634402};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map,
          title: 'CREMERIA'
        });

      for(var h=0;h<arrGlobalClientes.length; h++){
      var longitud = parseFloat(arrGlobalClientes[h].lng);
      var latitud = parseFloat(arrGlobalClientes[h].lat);
       
       uluru = {lat: latitud, lng: longitud};
     
      var marker = new google.maps.Marker({
      position: uluru,
       map: map,

       draggable: true,
       animation: google.maps.Animation.DROP,
       title: 'Ruta: '+arrGlobalClientes[h].numero+'. Local: '+arrGlobalClientes[h].local+'. Propietario: '+arrGlobalClientes[h].propietario+'. Domicilio: '+arrGlobalClientes[h].direccion
  });


      }
       

      



      }



mapa = {
 map : false,
 marker : false,

 initMap : function() {

 // Creamos un objeto mapa y especificamos el elemento DOM donde se va a mostrar.

 mapa.map = new google.maps.Map(document.getElementById('mapa'), {
   center: {lat: 43.2686751, lng: -2.9340005},
   scrollwheel: false,
   zoom: 14,
   zoomControl: true,
   rotateControl : false,
   mapTypeControl: true,
   streetViewControl: false,
 });

 // Creamos el marcador
 mapa.marker = new google.maps.Marker({
 position: {lat: 43.2686751, lng: -2.9340005},
 draggable: true
 });

 // Le asignamos el mapa a los marcadores.
  mapa.marker.setMap(mapa.map);

 },

// función que se ejecuta al pulsar el botón buscar dirección
getCoords : function()
{
  // Creamos el objeto geodecoder
 var geocoder = new google.maps.Geocoder();

 address = document.getElementById('search').value;
 if(address!='')
 {
  // Llamamos a la función geodecode pasandole la dirección que hemos introducido en la caja de texto.
 geocoder.geocode({ 'address': address}, function(results, status)
 {
   if (status == 'OK')
   {

$('#modalCliente .lat').val(results[0].geometry.location.lat());
$('#modalCliente .lng').val(results[0].geometry.location.lng());
   }
  });
 }
 }
}






function click_Mapa(){
        document.getElementById('loader').style.display = 'block';

 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/clientes.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> CLIENTES </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">MAPA</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Mapa();" role="tab">CLIENTES</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Rutas()">RUTAS</button></li><div class="imprimir"></div></ul> </div>');
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas2);
 
}
 //7 alert("mapa!");






  function click_Clientes1(id,h){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/clientes1.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> CLIENTES </h3><p>RUTA: '+arrGlobalRuta[h].nombre+'</p>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">MAPA</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Mapa();" role="tab">CLIENTES</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Rutas()">RUTAS</button></li><div class="imprimir"></div></ul> </div>');
n=arrGlobalRuta[h].nombre;
id_vend=id;
getFunction('clientes', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas3);
 
}
function click_mvehicular(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mVehiculat.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> MANTENIMIENTOS PENDIENTES </h3>');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="click_mvehicular()">Notificaciones</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_CVehicular()" role="tab">Control Vehicular</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_MantenimientoV()">Mantenimiento</button></li><div class="imprimir"></div></ul> </div>');
getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimientoTipo);
 


//getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimiento);


}



function vehiculo(){
var vehiculo2 ='<label >Vehiculo</label><select class="form-control vehiculo2" id="vehiculo2">';
for (var i = 0; i < arrGlobalVehiculo.length ; i++) {
  vehiculo2 += '<option value="'+(i)+'" class="form-control">'+arrGlobalVehiculo[i].numero+' - '+ arrGlobalVehiculo[i].marca+' ('+arrGlobalVehiculo[i].placa+')</option>';
}
vehiculo2 +='</select>';
$("#vehiculo7").html(vehiculo2);

}
function click_MantenimientoV(){
$('.btn-nav').removeClass('hidden');
$('.btn-nav').html('<h3> Menú </h3>');
$('.seccion3').load('/html/mantenimientoV.html');
$('.tituloPantalla').html('<h3 class="ventas impre"> MANTENIMIENTO  </h3>');


getFunction('mantenimiento', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMantenimiento);


}
function click_CVehicular(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/controlVehicular.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> CONTROL VEHICULAR  </h3>');
 
 
getFunction('m_vehicular', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMV);

}


function click_logistica(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mLogistica.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> LOGÍSTICA </h3>');
  //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">1</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">2</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">3</button></li><div class="imprimir"></div></ul> </div>');


}
function nomina(){
  document.getElementById('loader').style.display = 'block';
 saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
          scv=noSemana;
    
      
var sfc = (scv+1)+"";
  if(scv != ""){

$('.tituloPantalla').html('<h3 class="nomina"> NOMINA SEMANA: '+(scv+1)+'</h3>');
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreoNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleNomina);
//      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteN);
//      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoN);
//      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleN);
  
  }


}
function click_nomina(){

 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 
 $('#contenido').load('/html/mNomina.html');
 //$('.seccion1').html('/html/inventario.html');
// $('.tituloPantalla').html('<h3 class="nomina"> NOMINA </h3>');
 //$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">NOMINA</li><li role="presentation" class="impre"></li></div>');
   $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">TOTALES</li> <span class="border border-danger"></span> <li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Comision(); " role="tab">COMISIÓN  </li> <span class="border border-success"></span> <li role="presentation" class="impre recepcionList text-center" href="#seccion3" aria-controls="seccion3" data-toggle="tab" role="tab" onclick="nomina(); ">NOMINA</li>  <span class="border border-primary"></span><div class="imprimir"></div></ul> </div>');
      //  document.getElementById('loader').style.display = 'block';
 saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
          scv=noSemana;
    
      
var sfc = (scv+1)+"";
  if(scv != ""){

$('.tituloPantalla').html('<h3 class="nomina"> NOMINA SEMANA: '+(scv+1)+'</h3>');
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasp4);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleNominaFaltante);
     

  }

}
function click_Comision(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/comision.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> COMISIÓN  </h3>');
 getFunction('categorias', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadComision);

}
function click_reportes() {
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mReportes.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> REPORTES </h3>');

}
function ventaDiariaR(){
  $('.tituloResp').html('<h3 class="text-center impre">VENTA DIARIA</h3>');
  $('.contenidoR').load('/html/ventaDiariaR.html');

}
function ventaDiariaC(){
  document.getElementById('loader').style.display = 'block';
  saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
  scv=noSemana;
  $('.tituloResp').html('<div class=" impre col-md-12 form-group row"><input class="form-control col-md-3 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-3" onClick="click_buscarVCategorias()">BUSCAR</button><div class="col-md-3"></div><button class="btn btn-warning impre totala col-md-3" value="Imprimir" onclick="ventaDiariaCPrint();"  >IMPRIMIR</button></div><h3 class="text-center impre">VENTA DIARIA (SEMANA: '+(scv+1)+')</h3>');
//  $('.tituloResp').html('<div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVCategorias()">BUSCAR</button></div><h3 class="text-center impre">VENTA DIARIA</h3>');
  $('.contenidoR').load('/html/ventaDiariaC.html');
var sfc = (scv+1)+"";

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreo);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestaurante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneo);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalle);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaOtros);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMerma);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDegustacion);
  }
}
function totalesCategorias(){

var html='<tr class="grisclaro text-center"  style="font-size:8px;   " > <td><strong>TOTALES</strong></td><td></td><td></td><td class="text-right"><strong>$ '+formatoMoneda1(credi)+'</strong></td> <td class="text-right"><strong>$ '+formatoMoneda1(boni)+'</strong></td><td></td><td class="text-right"><strong> $ '+formatoMoneda1(s_vent)+'</strong></td>';
var html2='<tr class=" text-center"  style="font-size:12px; background:black;  " > <td><strong>TOTALES</strong></td><td></td><td></td><td class=""><strong>$ '+formatoMoneda1(credi)+'</strong></td> <td class=""><strong>$ '+formatoMoneda1(boni)+'</strong></td><td></td><td class=""><strong> $ '+formatoMoneda1(s_vent)+'</strong></td>';
//alert(cred+' - '+boni);
  for(var h=0;h<prodTotales.length; h++){
    
     html+='<td><strong>'+formatoMoneda1(prodTotales[h])+'</strong></td>';
     html2+='<td><strong>'+formatoMoneda1(prodTotales[h])+'</strong></td>';
}
html+='</tr>';
$('.contCataTotalesP').html(html); 
$('.contCataTotales').html(html2); 
credi=0;
          boni=0;
          s_vent=0;
}
function click_buscarNomina(){
   var semanaVS = $('.semanaNominaN').val();
        document.getElementById('loader').style.display = 'block';
if(semanaVS!=""){


year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
  $('.tituloPantalla').html('<h3 class="text-center impre">NOMINA SEMANA: '+(scv+1)+'</h3>');
var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreoNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoNomina);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleNomina);
 
 }
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
}
function click_buscarNomina1(){
   var semanaVS1 = $('.semanaNomina1').val();
       // document.getElementById('loader').style.display = 'block';
if(semanaVS1!=""){


year =  parseInt(semanaVS1.substring(0,4));
scv = parseInt(semanaVS1.substring(6,8))-1;
  
  $('.tituloPantalla').html('<h3 class="text-center impre">NOMINA SEMANA: '+(scv+1)+'</h3>');
var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasp4);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestauranteNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneoNominaFaltante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalleNominaFaltante);
 
 }
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
}
function click_buscarVCategorias(){
 var semanaVS = $('.semanaVD').val();
          
        document.getElementById('loader').style.display = 'block';

if(semanaVS!=""){


year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
  
  $('.tituloResp').html('<div class=" impre col-md-12 form-group row"><input class="form-control col-md-3 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-3" onClick="click_buscarVCategorias()">BUSCAR</button><div class="col-md-3"></div> <button class="btn btn-warning impre totala col-md-3" value="Imprimir" onclick="ventaDiariaCPrint();"  >IMPRIMIR</button> </div> <h3 class="text-center impre">VENTA DIARIA (Semana: '+(scv+1)+')</h3>');
var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMayoreo);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaRestaurante);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaForaneo);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDetalle);

      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaOtros);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaMerma);
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaDiariaDegustacion);
  

  }
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
}
function rutasR(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR);
saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR);
  }

}
function rutasR2(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR);
var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR);
  } 
//alert(ruta)
}
function rutasRM(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaModal);
var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaModal);
  } 
}
function rutasRM2(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaModal);
var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaPrint);
  } 
}
function rutasRP(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR2);
var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR2);
  }

//alert(ruta)
}
function rutasRP2(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR2);

var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR2);
  }

}
function rutasMP(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR2);

var sfc = (scv+1);
if(scv != ""){
      var json = {where:{sfc:sfc, ruta:ruta}}
    //  executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR2);
  }

}
function ventaDiariaRS(){
        document.getElementById('loader').style.display = 'block';

  $('.tituloResp').html('<div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVD()">BUSCAR</button></div><h3 class="text-center impre">VENTA SEMANAL</h3>  ');

  $('.contenidoR').load('/html/ventaDiariaR.html');
  $('.contenidoR').html('');
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaR);
}
function click_buscarVG(){

//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaRS);
var semanaVS = $('.semanaVD').val();
if(semanaVS!=""){


year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
//  $('.tituloResp').html('<div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVG()">BUSCAR</button></div><h3 class="text-center impre">SEMANA: '+semanaVS.substring(6,8)+'</h3>  ');
  $('.tituloResp').html(' <div class=" row col-md-12"><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6  semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVG()">BUSCAR</button> </div> <div class="col-md-6 "><div class="col-md-6"></div> <button class="btn btn-warning impre totala col-md-6" value="Imprimir" onclick="ventaGeneralPrint();"  >IMPRIMIR</button> </div> </div>  <h3 class="text-center impre">VENTA GENERAL (SEMANA: '+(scv+1)+')</h3> ');

var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR3);
 }

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR3);

//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaR2);
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
//alert(semanaVS.substring(0,4)+" - "+semanaVS.substring(6,8));

}
function ventaSemanal(){

  rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
  $('.tituloResp').html('<h3 class="text-center">'+nombre_vend+'</h3>');

  $('.contenidoR').html('');

}
function ventaDiariaRM(){
  $('.tituloResp').html('<h3 class="text-center">VENTA MENSUAL</h3>');

  $('.contenidoR').load('/html/ventaDiariaR.html');
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaRM);

}
function ventaGeneral(){
        document.getElementById('loader').style.display = 'block';

   saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
  $('.tituloResp').html(' <div class=" row col-md-12"><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6  semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVG()">BUSCAR</button> </div> <div class="col-md-6 "><div class="col-md-6"></div> <button class="btn btn-warning impre totala col-md-6" value="Imprimir" onclick="ventaGeneralPrint();"  >IMPRIMIR</button> </div> </div>  <h3 class="text-center impre">VENTA GENERAL (SEMANA: '+(scv+1)+')</h3> ');
  //$('.contenidoR').html('');
  $('.contenidoR').load('/html/ventaGeneral.html');
 var sfc = (scv+1);

  if(scv != ""){
      var json = {where:{sfc:sfc}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiariaR3);
 }

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR3);

}
function mermaV(){
        document.getElementById('loader').style.display = 'block';

   saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
  $('.tituloResp').html(' <div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaV()">BUSCAR</button></div> <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+(scv+1)+')</h3> ');
  //$('.contenidoR').html('');
  $('.contenidoR').load('/html/ventaDiariaR.html');
 
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaGV);

}
function mermaD(){
        document.getElementById('loader').style.display = 'block';

   saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
 // $('.tituloResp').html('<div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaD()">BUSCAR</button></div>  <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+(scv+1)+')</h3> ');
  $('.tituloResp').html('<div class=" row col-md-12"><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6  semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaD()">BUSCAR</button> </div> <div class="col-md-6 "><div class="col-md-6"></div> <button class="btn btn-warning impre totala col-md-6" value="Imprimir" onclick="mermaGeneralPrint();"  >IMPRIMIR</button> </div> </div>  <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+(scv+1)+')</h3> ');
  
  //$('.contenidoR').html('');
  $('.contenidoR').load('/html/ventaGeneral.html');
  var sfc = (scv+1);
  var merma = 1;

  if(scv != ""){
      var json = {where:{sfc:sfc, merma:merma}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaG);
 }
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);

}
function buscarMermaD(){
  var semanaVS = $('.semanaVD').val();
if(semanaVS!=""){
year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
//  $('.tituloResp').html(' <div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaD()">BUSCAR</button></div>   <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+semanaVS.substring(6,8)+')</h3>');
  $('.tituloResp').html('<div class=" row col-md-12"><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6  semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaD()">BUSCAR</button> </div> <div class="col-md-6 "><div class="col-md-6"></div> <button class="btn btn-warning impre totala col-md-6" value="Imprimir" onclick="mermaGeneralPrint();"  >IMPRIMIR</button> </div> </div>  <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+(scv+1)+')</h3> ');

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);
 var sfc = (scv+1);
  var merma = 1;

  if(scv != ""){
      var json = {where:{sfc:sfc, merma:merma}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaG);
 }
//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
}
function buscarMermaV(){
  var semanaVS = $('.semanaVD').val();
if(semanaVS!=""){
year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
  $('.tituloResp').html(' <div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="buscarMermaV()">BUSCAR</button></div>   <h3 class="text-center impre">MERMA GENERAL (SEMANA: '+semanaVS.substring(6,8)+')</h3>');
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);
//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaGV);
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaGV);

//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMermaG);
}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
}
function click_buscarVD(){

//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaRS);
var semanaVS = $('.semanaVD').val();
if(semanaVS!=""){
year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
  $('.tituloResp').html('   <div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVD()">BUSCAR</button></div> <h3 class="text-center impre">VENTA GENERAL (SEMANA: '+semanaVS.substring(6,8)+')</h3> ');


getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaVG);


}else{
    $('#modal .textModal').html('Seleccione una semana.'); 
      $('#modal').modal('show');
}
//alert(semanaVS.substring(0,4)+" - "+semanaVS.substring(6,8));

}
function click_bitacoras(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mBitacoras.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> BITÁCORAS </h3>');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">1</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">2</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">3</button></li><div class="imprimir"></div></ul> </div>');
 
//getFunction('bitacoras', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadLogs);

}
function click_vendedores(){

$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menu </h3>');

 $('.seccion2').load('/html/vendedores.html');
 $('.tituloPantalla').html('<h3 class="vendedor"> VENDEDORES  </h3>');
// $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="ocultar()">Notas </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_vendedores()" role="tab">Ventas</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_administracion()">Administración</button></li><div class="imprimir"></div></ul> </div>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);
}

function click_administracion(){



 $('.seccion3').load('/html/administracion.html');

 $('.tituloPantalla').html('<h3 class="administracion">  ADMINISTRACIÓN   </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

}
function click_Pedidos(){


 $('.seccion5').load('/html/pedidos.html');

 $('.tituloPantalla').html('<h3 class="administracion">  PEDIDOS  </h3>');

 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre productosList text-center" href="#seccion5" aria-controls="seccion5" data-toggle="tab" role="tab" onclick="click_Pedidos1(); ">PEDIDOS  </li>  <span class="border border-white"></span>  <div class="imprimir"></div></ul> </div>');



        document.getElementById('loader').style.display = 'block';

var fecha = $(".selectfecha").val(); 
var dia= ""+day+"";
if(dia.length == 1){
  dia = "0"+dia;
  //alert(dia);
}
var mes= ""+month+"";
if(mes.length == 1){
  mes = "0"+mes;
  //alert(dia);
}
  //alert(dia+"- "+dia.length);

today_v = year+'-'+mes+'-'+dia;

if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  //alert(today_v+"hey");
  day2 = today_v.substring(8,10);
 month2 = today_v.substring(5,7);
 year2 = today_v.substring(0,4);
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadPedidos);
 

$('.tituloPantalla').html('<h3 class="ventas impre"> PEDIDOS </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');   

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
 var diasemaD= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
   var diaD=(diasemaD.getUTCDay());
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+dias[diaD-1]+', '+day2+' DE '+months[parseInt(month2)]+' DEL '+year2+' )</p>');   

//$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+today_v+' )</p>');  
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadPedidos);   
}
limpiar();



}
function click_EClientes(){



 $('.seccion4').load('/html/eClientes.html');

 $('.tituloPantalla').html('<h3 class="administracion">  CLIENTES  </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadEClientes);

}
function modalDespachador(){

      $('#modalDesp').modal('show');
      var selectdes= '<select name="select" class="selectDespachador col-md-8 form-control"><option value="0"></option>'
      var selectVe= '<select name="select" class="selectVehiculo col-md-8 form-control"><option value="0"></option>'

for(var h=0;h<arrGlobal2.length; h++)
    if(arrGlobal2[h].tipo!=2){
selectdes+= ' <option value="'+h+'">' +arrGlobal2[h].nombre_Emple + ' ' + arrGlobal2[h].paterno_Emple + ' ' + arrGlobal2[h].materno_Emple +'</option>';
    }
selectdes +='</select>';


 for(var hh=0;hh<arrGlobalVehiculo.length; hh++)
    selectVe+= ' <option value="'+hh+'">' +arrGlobalVehiculo[hh].numero + ' (' + arrGlobalVehiculo[hh].placa + ' ).</option>';
    

selectVe +='</select>';



$('#modalDesp .vehiculomodal').html(selectVe);
$('#modalDesp .despachador').html(selectdes);
   


}
function click_modalProducto(){
  
  var productos= '<select multiple class="form-control" id="">';
for (var i=0; i < arrGlobalInventario.length; i++) {
productos+='<option value="'+arrGlobalInventario[i].idInventario+'">'+arrGlobalInventario[i].idInventario+' - '+arrGlobalInventario[i].descripcion+'</option>';
}
productos+='</select>'; 
 
$('#modalProducto .productom').html(productos);
$('#modalProducto').modal('show');
}
var f_Ahorro;
function click_SPedidos(id,h){
  var num = 0;
  var num2 = 0;
 n_vend=h;
 f_Ahorro = id;
 var vendedor = id;
   $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion5').load('/html/pedidosV.html');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre productosList text-center" href="#seccion5" aria-controls="seccion5" data-toggle="tab" role="tab" onclick="click_Pedidos(); ">PEDIDOS  </li>  <span class="border border-white"></span>  <div class="imprimir"></div></ul> </div>');

//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><div class="imprimir"></div></ul> </div>');
// $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"></span><div class="imprimir"></div></ul> </div>');
var pedidosNombre="";
for(var p=0;p<arrGlobalPedidos.length;p++){
  if(id==arrGlobalPedidos[p].id){
pedidosNombre=arrGlobalPedidos[p].ruta;
  }
}


 var dayD = today_v.substring(8,10);
 var monthD = today_v.substring(5,7);
 var yearD = today_v.substring(0,4);
var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
   var diaD=(diasemaD.getUTCDay());
    var fechaDespachoD = dias[diaD-1]+", "+dayD+" DE "+months[parseInt(monthD)]+" DEL "+yearD+".";
 



   $('.tituloPantalla').html('<h3 class="vendedor impre"> PEDIDOS </h3> <p>( '+fechaDespachoD+' ) - '+pedidosNombre+' </p>');


getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);

var ruta= rutas;
var fechadespachof=today_v;

  if(ruta!= ""&&fechadespachof!= ""){
      var json = {where:{fechadespachof:fechadespachof, vendedor:vendedor}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVPedidos);
 }

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);


  for(var i=0;i<arrGlobalPedidos.length; i++){
  for(var j=0;j<arrGlobal2.length; j++){
 //alert(arrGlobal4[i].ruta+" == "+arrGlobal2[j].ruta);
 if(arrGlobalPedidos[i].ruta==arrGlobal2[j].ruta){
  
 num=1; 
        
               
       //        alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fecha+"=="+today_v);

        if(arrGlobalPedidos[i].ruta==rutas && arrGlobalPedidos[i].fechaf==today_v && num2 == 0 ){
     
     //          alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fechaf+"=="+today_v);
             num2=1;
         }else{
          //num2=0;
          num=0;
         }
        }
      }} 


if(num==0 && num2==0){

var totalI=0;


num2=1;
  }else{
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

for(var j=0;j<arrGlobalPedidos.length; j++){
   
  if(arrGlobalPedidos[j].ruta==rutas && arrGlobal4[j].fechaf==today_v){
   
//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick=" click_modalVehiculo() ">D & V</button> </li> <div class="imprimir"></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"></span>  <li class="impre dvList text-center"  onclick="click_modalVehiculo() "> D & V </li>  <span class="border border-info"></span> <div class="imprimir"></div></ul> </div>');

   despachador = '<u style="width:100px;">'+ arrGlobal4[j].despachador2+'. </u>';
   vehiculoA = '<u style="width:100px;">'+arrGlobal4[j].vehiculo+ '</u>';
vehiculoA2=arrGlobal4[j].vehiculo;
despachador22=arrGlobal4[j].despachador2;
$("#modalDesp .despachadorl").html("<strong>DESPACHADOR:</strong> "+despachador22);
$("#modalDesp .vehiculol").html("<strong>VEHICULO:</strong> "+vehiculoA2);

  }

    }
    
     //alert("actualizar ruta: "+rutas+" id: "+id);
             //alert("almacenar: "+arrGlobal2[i].id+", "+today_v+", "+rutas+", "+nombre_vend+", "+cred+ ", "+boni);
  //upRegistro2(id, json2, 'ventaspasada', loadVentasp);
   //addRegistro(json2, 'ventaspasada', loadVentasp);
  
  }
   





}
function click_Salida(id , h, ruta, tipo, credito, bonificaciones,f_ahorro){
  var num = 0;
  var num2 = 0;
  f_Ahorro = f_ahorro;
   $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion2').load('/html/venta.html');
//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><div class="imprimir"></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"></span><div class="imprimir"></div></ul> </div>');



  

 nombre_vend = arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
 id_vend=id;
 n_vend=h;
 rutas=ruta;
 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}
 var dayD = today_v.substring(8,10);
 var monthD = today_v.substring(5,7);
 var yearD = today_v.substring(0,4);
var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
   var diaD=(diasemaD.getUTCDay());
    var fechaDespachoD = dias[diaD-1]+", "+dayD+" DE "+months[parseInt(monthD)]+" DEL "+yearD+".";
 



   $('.tituloPantalla').html('<h3 class="vendedor impre"> VENTA </h3> <p>( '+fechaDespachoD+' ) - VENDEDOR: '+nombre_vend+'. RUTA: ' +ruta3+'. TIPO: '+t_ventas[t_vende-1]+ '. CRÉDITO: ' +cred+'. BONIFICACIÓN: '+boni+'. </p>');


getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);

var ruta= rutas;
var fechadespachof=today_v;

  if(ruta!= ""&&fechadespachof!= ""){
      var json = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentas);
 }


//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);


  for(var i=0;i<arrGlobal4.length; i++){
  for(var j=0;j<arrGlobal2.length; j++){
 //alert(arrGlobal4[i].ruta+" == "+arrGlobal2[j].ruta);
 if(arrGlobal4[i].ruta==arrGlobal2[j].ruta){
  
 num=1;  //alert(arrGlobal4[i].ruta+" == "+rutas);
        
               
       //        alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fecha+"=="+today_v);

        if(arrGlobal4[i].ruta==rutas && arrGlobal4[i].fechaf==today_v && num2 == 0 ){
     
     //          alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fechaf+"=="+today_v);
             num2=1;
         }else{
          //num2=0;
          num=0;
         }
        }
      }} 


if(num==0 && num2==0){

var totalI=0;
modalDespachador();

num2=1;
  }else{
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

for(var j=0;j<arrGlobal4.length; j++){
   
  if(arrGlobal4[j].ruta==rutas && arrGlobal4[j].fechaf==today_v){
   
//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick=" click_modalVehiculo() ">D & V</button> </li> <div class="imprimir"></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" class="impre despachoList text-center" href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" onclick="click_Despacho(); " role="tab">DESPACHO </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"></span>  <li class="impre dvList text-center"  onclick="click_modalVehiculo() "> D & V </li>  <span class="border border-info"></span> <div class="imprimir"></div></ul> </div>');

   despachador = '<u style="width:100px;">'+ arrGlobal4[j].despachador2+'. </u>';
   vehiculoA = '<u style="width:100px;">'+arrGlobal4[j].vehiculo+ '</u>';
vehiculoA2=arrGlobal4[j].vehiculo;
despachador22=arrGlobal4[j].despachador2;
$("#modalDesp .despachadorl").html("<strong>DESPACHADOR:</strong> "+despachador22);
$("#modalDesp .vehiculol").html("<strong>VEHICULO:</strong> "+vehiculoA2);

  }

    }
    
     //alert("actualizar ruta: "+rutas+" id: "+id);
             //alert("almacenar: "+arrGlobal2[i].id+", "+today_v+", "+rutas+", "+nombre_vend+", "+cred+ ", "+boni);
  //upRegistro2(id, json2, 'ventaspasada', loadVentasp);
   //addRegistro(json2, 'ventaspasada', loadVentasp);
  
  }
   





}
function click_modalVehiculo(){
var upDV = '<button type="button" class="btn btn-modals salida2" id="agregarp" onclick="add_Salida2()">Guardar</button>';
 
  $("#modalDesp .salida2").html(upDV);
  modalDespachador();
}
function add_Salida2(){
   var despachadorV = $('#modalDesp .selectDespachador ').val();
 var vehiculoV = $('#modalDesp .selectVehiculo ').val();
   despachador = '<u style="width:100px;">'+ arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple+'. </u>';
   vehiculoA = '<u style="width:100px;">'+ arrGlobalVehiculo[vehiculoV].numero + ' (' + arrGlobalVehiculo[vehiculoV].placa + ') </u>';
vehiculoA2=arrGlobalVehiculo[vehiculoV].numero + ' (' + arrGlobalVehiculo[vehiculoV].placa + ')';
despachador22=arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple;
$('#modalDesp').modal('hide');

  var vehiculo = vehiculoA2;
  var despachador2=despachador22;
  var json2 = {vehiculo: vehiculo, despachador2: despachador2};
for(var j=0;j<arrGlobal4.length; j++){
  if(arrGlobal4[j].ruta==rutas && arrGlobal4[j].fechaf==today_v){
  var idv= arrGlobal4[j].id;
  upRegistro2(idv, json2, 'ventaspasada', loadVentasp);
  
$("#modalDesp .despachadorl").html("Despachador: "+despachador2);
$("#modalDesp .vehiculol").html("Vehiculo: "+vehiculo);



  }}


}
function addModalECliente(){
$('#modalECliente').modal('show');
}
function closeModalDesp(){
$('#modalDesp').modal('hide');
}
function closeModalNom(){
$('#modalNomina').modal('hide');
}
function closeModalECliente(){
  $('#modalECliente').modal('hide');
}
var despachador22;
function click_Salida2(){
 var despachadorV = $('#modalDesp .selectDespachador ').val();
 var vehiculoV = $('#modalDesp .selectVehiculo ').val();
   despachador = '<u style="width:100px;">'+ arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple+'. </u>';
   vehiculoA = '<u style="width:100px;">'+ arrGlobalVehiculo[vehiculoV].numero + ' (' + arrGlobalVehiculo[vehiculoV].placa + ') </u>';
vehiculoA2=arrGlobalVehiculo[vehiculoV].numero + ' (' + arrGlobalVehiculo[vehiculoV].placa + ')';
despachador22=arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple;
$('#modalDesp').modal('hide');





}
function modalDespachador2(){

      $('#modalDesp2').modal('show');
      var selectdes= '<select name="select" class="selectDespachador col-md-8 form-control"><option value="0" class="primero"></option>'
for(var hhh=0;hhh<arrGlobal2.length; hhh++)
    if(arrGlobal2[hhh].tipo!=2){
selectdes+= ' <option value="'+hhh+'">' +arrGlobal2[hhh].nombre_Emple + ' ' + arrGlobal2[hhh].paterno_Emple + ' ' + arrGlobal2[hhh].materno_Emple +'</option>';
//alert(h);
    }

   
selectdes +='</select>';


$('#modalDesp2 .despachador').html(selectdes);

   


}
//getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutasUp);
var despachadorR,  n_vend1;
function click_Rec(id , h, ruta, tipo, credito, bonificaciones, fechacap, dsc, sc){
        document.getElementById('loader').style.display = 'block';
 
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion3').load('/html/recep.html');

 nombre_vend = arrGlobal4[h].nombre;
 id_vend=id;
 n_vend=h;
 n_vend1=h;
 rutas=arrGlobal4[h].ruta;

 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 fechacaptura=arrGlobal4[h].fechaf;
 dscv=dsc;
 scv=sc;
 var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;
 for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}
 if(arrGlobal4[h].despachador==undefined){
  modalDespachador2();
 // $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li>  <li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li> <li role="presentation" class="impre"> <div type="button" class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalMerma()">MERMA</div> </li> <li role="presentation" class="impre" >  <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modal_VDiaria()">VENTA DIARIA</div>  </li>     <li role="presentation" class="impre" >   <div href="" aria-controls="" type="button" class="btn btn-warning totala" data-toggle="tab" role="tab" onclick="imprimirVD3();">VENTA DIARIA</div>  </li></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"> <ul class="nav flex-column col-md-12" role="tablist"> <li role="presentation" class="impre despachoList text-center" href="#seccion3" aria-controls="seccion3" id="desp" data-toggle="tab" onclick="click_Recepcion();" role="tab">RECEPCIÓN </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"> </span>  <li class="impre  text-center mermaList"  onclick="modalMerma()">MERMA </li>  <span class="border border-warning"> </span> <div class="imprimir"></div></ul> </div>');


  
}else{
  despachadorR=arrGlobal4[h].despachador;

$('#modalDesp2 .despachador819').html(' <strong> DESPACHADOR: </strong>'+despachadorR);
//$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li>  <li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li> <li role="presentation" class="impre"> <div type="button" class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalMerma()">MERMA</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalDespachador2();">D & C</div> </li> <li role="presentation" class="impre" >  <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modal_VDiaria()">VENTA DIARIA</div>  </li>     <li role="presentation" class="impre" >   <div href="" aria-controls="" type="button" class="btn btn-warning totala" data-toggle="tab" role="tab" onclick="imprimirVD3();">VENTA DIARIA</div>  </li></div></ul> </div>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"> <ul class="nav flex-column col-md-12" role="tablist"> <li role="presentation" class="impre despachoList text-center" href="#seccion3" aria-controls="seccion3" id="desp" data-toggle="tab" onclick="click_Recepcion();" role="tab">RECEPCIÓN </li> <span class="border border-success"></span> <li class="impre productosList text-center"  onclick="click_modalProducto() ">PRODUCTOS </li>  <span class="border border-white"> </span>  <li class="impre  text-center mermaList"  onclick="modalMerma()">MERMA </li>  <span class="border border-warning"> </span> <li class="impre  text-center dcList"  onclick="modalDespachador2();">D & C </li>  <span class="border border-info"> </span> <div class="imprimir"></div></ul> </div>');
  
}

if(arrGlobal4[h].despachador!=null){
 // alert(arrGlobal4[h].despachador);
 $('#modalDesp2 .selectDespachador').val(arrGlobal4[h].despachador);
}
if(arrGlobal4[h].tipoCombustible==1){
gasolina2();
}
if(arrGlobal4[h].tipoCombustible==2){
gas2();
}
if(arrGlobal4[h].tipoCombustible==3){
gasolinaygas();
}
if(arrGlobal4[h].tipoCombustible==4){
diesel2();
}
 $('#modalDesp2 .gasolina1').val(arrGlobal4[h].gasolina);
 $('#modalDesp2 .gas1').val(arrGlobal4[h].gas);
 $('#modalDesp2 .diesel1').val(arrGlobal4[h].diesel);
 $('#modalDesp2 .km1').val(arrGlobal4[h].km);

$('.tituloPantalla').html('<h3 class="vendedor impre"> RECEPCIÓN </h3> <p>( '+today_v+' ) - NOMBRE: '+nombre_vend+'. RUTA: ' +ruta3+'. TIPO: '+t_ventas[t_vende-1]+ '. CRÉDITO: ' +cred+'. BONIFICACIÓN : '+boni+'. </p>');
 var fechadespachof = fechacaptura;
 var fechaf = fechacaptura;
 var ruta = rutas;
 var sfc = noSemana+1;
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);

 var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasr);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentasF);
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMerma);
 var jsonC = {where:{fechaf:fechaf, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasVF);
 var jsonC = {where:{ruta:ruta}}
      executeFunctionDone(jsonC, 'ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVentaspasadasTF);
 var jsonC = {where:{ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadVDiaria);

//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
  //var vDiaria ='';
//<button href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalRecarga()">RECARGA</div>
//$('.ventaDiaria').html(vDiaria);
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiaria);
if(arrGlobal4[h].despachador==undefined){
  $('.imprimir').html('');
}
}

function click_Deg(id , h, ruta, tipo, credito, bonificaciones, fechacap, dsc, sc){
 
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion6').load('/html/degustacion.html');

 nombre_vend = arrGlobal4[h].nombre;
 id_vend=id;
 n_vend=h;
 n_vend1=h;
 rutas=arrGlobal4[h].ruta;

 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 fechacaptura=arrGlobal4[h].fechaf;
 dscv=dsc;
 scv=sc;
  for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}
 var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;



 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion6" aria-controls="seccion6" data-toggle="tab" role="tab" onclick="click_Degustaciones(); ">DEGUSTACIONES </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
$('.tituloPantalla').html('<h3 class="vendedor impre"> DEGUSTACIONES </h3> <p>( '+today_v+' ) - NOMBRE: '+nombre_vend+'. RUTA: ' +ruta3+'. TIPO: '+t_ventas[t_vende-1]+ '. CRÉDITO: ' +cred+'. BONIFICACIÓN : '+boni+'. </p>');
 var fechadespachof = today_v;
 var fechaf = fechacaptura;
 var ruta = rutas;

 var sfc = noSemana+1;
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
var horarecepcion = 1;
 var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta, horarecepcion:horarecepcion}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg);


}

function click_Mer(id , h, ruta, tipo, credito, bonificaciones, fechacap, dsc, sc){
 
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion4').load('/html/merma.html');

 nombre_vend = arrGlobal4[h].nombre;
 id_vend=id;
 n_vend=h;
 n_vend1=h;
 rutas=arrGlobal4[h].ruta;

 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 fechacaptura=arrGlobal4[h].fechaf;
 dscv=dsc;
 scv=sc;
  for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}
 var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;



 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion4" aria-controls="seccion4" data-toggle="tab" role="tab" onclick="click_Merma(); ">MERMA </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
$('.tituloPantalla').html('<h3 class="vendedor impre"> MERMA </h3> <p>( '+today_v+' ) - NOMBRE: '+nombre_vend+'. RUTA: ' +ruta3+'. TIPO: '+t_ventas[t_vende-1]+ '. CRÉDITO: ' +cred+'. BONIFICACIÓN : '+boni+'. </p>');
 var fechadespachof = today_v;
 var fechaf = fechacaptura;
 var ruta = rutas;

 var sfc = noSemana+1;
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);

 var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP);


}

function click_mer2(){
 
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion4').load('/html/merma2.html');

 nombre_vend = "CUARTO FRIO";
 id_vend=1;
 n_vend=1;
 n_vend1=1;
 rutas="CUARTO FRIO";

 var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;



 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion4" aria-controls="seccion4" data-toggle="tab" role="tab" onclick="click_Merma(); ">MERMA </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
$('.tituloPantalla').html('<h3 class="vendedor impre"> MERMA CUARTO FRIÓ </h3><p>( '+today_v+' )  </p>');
 var fechadespachof = today_v;
 var fechaf = fechacaptura;
 var ruta = rutas;
 var sfc = noSemana+1;
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);

 var jsonC = {where:{fechadespachof:fechadespachof, ruta:ruta}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadMermaP3);


}

function click_Deg2(){
 
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion6').load('/html/degustacion2.html');

 nombre_vend = "DEGUSTACION";
 id_vend=1;
 n_vend=1;
 n_vend1=1;
 rutas="DEGUSTACION";

 var dayVS = today_v.substring(8,10);
          var monthVS = today_v.substring(5,7);
          var yearVS = today_v.substring(0,4);
          var cobrado=noSemana;
          var mes=month-1;
          var dia=day-1;
              cobrado = cobrado +1;
              saberSemana(parseInt(dayVS), (parseInt(monthVS)-1), parseInt(yearVS));
          var t_vendido = today;



 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre ventasList text-center" href="#seccion1"  aria-controls="seccion1" data-toggle="tab" role="tab" onclick="ocultar(); ">FECHA</li> <span class="border border-danger"></span> <li role="presentation" class="impre mermaList text-center" href="#seccion6" aria-controls="seccion6" data-toggle="tab" role="tab" onclick="click_Degustaciones(); ">DEGUSTACIONES </li>  <span class="border border-warning"></span><div class="imprimir"></div></ul> </div>');
$('.tituloPantalla').html('<h3 class="vendedor impre"> PROMOTORIA </h3><p>( '+today_v+' )  </p>');
 var fechadespachof = today_v;
 var fechaf = fechacaptura;
 var ruta = 1;
 var sfc = noSemana+1;
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
var horarecepcion=1;
 var jsonC = {where:{fechadespachof:fechadespachof, horarecepcion: horarecepcion}}
      executeFunctionDone(jsonC, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDeg2);


}


function modalMerma(){
$('#modalMerma').modal('show');
}
function modalRecarga(){
$('#modalRecarga').modal('show');
}
function closeModalRecarga(){

$('#modalRecarga').modal('hide');
}
function closeVD(){

$('#modalVDiaria').modal('hide');
}

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventario);

function ModalDesp2(){




var despachadorRR; 

   var despachadorV = $('#modalDesp2 .selectDespachador ').val();
   despachador = '<u style="width:100px;">'+ arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple+'. </u>';
  //alert(despachadorV);


 despachadorR = arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple;
  

$('#modalDesp2').modal('hide');
}
function click_Rec2(){

}

function click_V(id , h, ruta, tipo, credito, bonificacion){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion2').load('/html/venta.html');
 nombre_vend = arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
 id_vend=id;
 n_vend=h;
 $('.tituloPantalla').html('<h3 class="vendedor impre"> VENTA </h3> <p>( '+today_v+' ) - Nombre: '+arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple+'. Ruta: ' +t_rutas[ruta-1]+'. Tipo: '+t_ventas[tipo-1]+ '. Credito: ' +credito+'. Bonificacion: '+bonificacion+'. </p>');

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
}


function click_Entrada(id , h, ruta, tipo, credito, bonificacion){
  
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('#contenido').load('/html/salida_venta.html');
 nombre_vend = arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
 id_vend=id;
 n_vend=h;
 $('.tituloPantalla').html('<h3 class="vendedor impre"> RECEPCIÓN </h3> <p>( '+today_v+' ) - Nombre: '+arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple+'. Ruta: ' +t_rutas[ruta-1]+'. Tipo: '+t_ventas[tipo-1]+ '. Credito: ' +credito+'. Bonificacion: '+bonificacion+'. </p>');
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);


var empleado= id_vend;
var fecha=today_v;

  if(fecha!= ""&&empleado!= ""){
      var json = {where:{fecha:fecha, empleado:empleado}}
      executeFunctionDone(json, 'ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", loadDiaRec);
 }



//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDiaRec);

}
function oAvanzadasE(){
  if(historial==0){
        document.getElementById('oAvanzadasE').style.display = 'block';
        historial=1;
  }else{
        document.getElementById('oAvanzadasE').style.display = 'none';
historial=0;
  }

}
var historial2=0;
function mAvanzadasE(){
  if(historial2==0){
        document.getElementById('mAvanzadasE').style.display = 'block';
        historial2=1;
  }else{
        document.getElementById('mAvanzadasE').style.display = 'none';
historial2=0;
  }

}
function addEfectivo(){
var efectivo = $("#modalEfectivo .cash").val();
var rVendedor = $("#modalEfectivo .rv").val();
var fechacash = $("#modalDateC .dateVC").val();
var creditos = $("#modalEfectivo .iV").val();
var f_s_dia = $("#modalEfectivo .fSD").val();
var loquedeberiatraer = $("#modalEfectivo .lDT").val();
var f_s_real = $("#modalEfectivo .fSR").val();
var credito_p = $("#modalEfectivo .cL").val();
var bonificacion_p = $("#modalEfectivo .bL").val();
//alert(rVendedor+" - "+efectivo+" - "+dateCash2);
//----------------------------------- Pendiente --------------------------
        


if(credito_p==""||bonificacion_p==""){
if(efectivo=="")efectivo=0;


for (var i = 0; i < arrGlobalE.length; i++) {
  

  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==dateCash2 && arrGlobalE[i].fechaf!=today_v){
   

     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){
//alert(f_s_dia +" null");
      //f_s_dia=efectivo; 

  }else{
      //f_s_dia=parseFloat(efectivo).toFixed(2)+parseFloat(arrGlobalE[i].otros).toFixed(2)-parseFloat(arrGlobalE[i].t_venta_merca).toFixed(2); 
//alert(f_s_dia+" else ------- "+efectivo+" +  "+arrGlobalE[i].otros+" - "+arrGlobalE[i].t_venta_merca);

  }
var json = {efectivo: efectivo};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp3);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp3);


  }
  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==today_vv){
     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){

      //f_s_dia=efectivo; 

  }else{
      //f_s_dia=parseFloat(efectivo)+parseFloat(arrGlobalE[i].otros)-parseFloat(arrGlobalE[i].t_venta_merca); 

  }
//var json = {creditos: creditos, efectivo: efectivo, f_s_dia: f_s_dia, f_s_real: f_s_real, loquedeberiatraer:loquedeberiatraer};
var json = {efectivo: efectivo};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp2);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp2);


  }
  
}



}else{
if(efectivo=="")efectivo=0;


for (var i = 0; i < arrGlobalE.length; i++) {
  

  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==dateCash2 && arrGlobalE[i].fechaf!=today_v){
   

     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){
//alert(f_s_dia +" null");
      //f_s_dia=efectivo; 

  }else{
      //f_s_dia=parseFloat(efectivo).toFixed(2)+parseFloat(arrGlobalE[i].otros).toFixed(2)-parseFloat(arrGlobalE[i].t_venta_merca).toFixed(2); 
//alert(f_s_dia+" else ------- "+efectivo+" +  "+arrGlobalE[i].otros+" - "+arrGlobalE[i].t_venta_merca);

  }
var json = {creditos: creditos, efectivo: efectivo, f_s_dia: f_s_dia, f_s_real: f_s_real, loquedeberiatraer:loquedeberiatraer, credito_p: credito_p, bonificacion_p:bonificacion_p};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp3);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp3);


  }
  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==today_vv){
     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){

      //f_s_dia=efectivo; 

  }else{
      //f_s_dia=parseFloat(efectivo)+parseFloat(arrGlobalE[i].otros)-parseFloat(arrGlobalE[i].t_venta_merca); 

  }
//var json = {creditos: creditos, efectivo: efectivo, f_s_dia: f_s_dia, f_s_real: f_s_real, loquedeberiatraer:loquedeberiatraer};
var json = {creditos: creditos, efectivo: efectivo, f_s_dia: f_s_dia, f_s_real: f_s_real, loquedeberiatraer:loquedeberiatraer, credito_p: credito_p, bonificacion_p:bonificacion_p};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp2);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp2);


  }
  
}


}





//alert(fechacash);

//arrGlobalE='';
// $('#modalEfectivo').modal('hide');


     limpiar();

     
}
/*-------------------- modales ----------------------*/

function modalDates(){
  $('#modalDateC').modal('show');
}
function addDateCash(){
dateCash2 = $("#modalEfectivo .dateVC").val();
//dateCash2 = $("#modalEfectivo .dateVC").val();


if(dateCash2=="" || dateCash2 == today_v){
  dateCash2=today_vv;
}

 daycambiomodalE = dateCash2.substring(8,10);
 monthcambiomodalE = dateCash2.substring(5,7);
 yearcambiomodalE = dateCash2.substring(0,4);
 var nomdia2 = new Date((parseInt(monthcambiomodalE))+' '+parseInt(daycambiomodalE)+' ,'+parseInt(yearcambiomodalE));

var fecha2E = "<strong>"+dias[nomdia2.getUTCDay()-1]+", "+ daycambiomodalE + " DE " + months[parseInt(monthcambiomodalE)] + " DEL " + yearcambiomodalE+"</strong>";



$("#modalEfectivo .today_E").html(fecha2E);

getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp3);

$("#modalDateC").modal('hide');
limpiar();
}
function modalEfectivos(){

getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp2);

var rutav ='<select class="form-control rv clear" id="rv" name="select">';
var conta=1;


//alert(today_vv);
for (var i = 0; i <  arrGlobalF.length; i++) {
   if(arrGlobalF[i].fechaf==today_vv && arrGlobalF[i].efectivo==null ){
    for (var ii=0; ii < arrGlobalRuta.length; ii++) {
if(arrGlobalRuta[ii].id==arrGlobalF[i].ruta){
//alert(ruta3);
ruta3=arrGlobalRuta[ii].nombre;
}
}
    rutav += '<option onclick="limpiar()" id="'+arrGlobalF[i].id+'" value="'+arrGlobalF[i].id+'" >'+ruta3+' - '+arrGlobalF[i].nombre+'</option>';
   conta++;
   }
}
rutav +='</select>';
//alert(rutav);
$("#modalEfectivo .selectCash").html(rutav);
$("#modalEfectivo .today_E").html(fecha);
//alert(rutav);
$('#modalEfectivo').modal('show');
//arrGlobalE='';
}
function closeModalPin(){

      $('#modalPin').modal('hide')

}
function closeModalPedidos(){

      $('#modalPedidos').modal('hide')

}
function closeEmpleado(){

      $('#modalAdministracion').modal('hide')

}
function closeVendedor(){

      $('#modalVendedor').modal('hide')

}
function closeModalPin2(){

      $('#modalPin2').modal('hide')

}
function modalCloseP(){
  $('#modalProducto').modal('hide');
}

function closeModalPin3(){

      $('#modalPin3').modal('hide');


}
function closeModalPin4(){

      $('#modalPin4').modal('hide');


}

function closeModaladdusuario(){
  $('#modaladdusuario').modal('hide');
}
function closeModal(){
  $('#modal').modal('hide');
}
function modalInventario(){


      $('#modalInventario').modal('show');
     updateListaModal();

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}
function updateListaModal(){
    var tipo = $("#modalInventario .tipo").val();
    var html ="";
   for (var f=0; f<arrGlobal.length;f++){
        if(arrGlobal[f].idInventario == tipo){
          html+="<option value="+arrGlobal[f].id+">"+arrGlobal[f].descripcion+"</option>"
        }
      }
      $("#modalInventario .descripcionInventario").html(html);
      $("#modalInventario .descripcionInventario").val("0");
}
function updateListaVenta(){
    var tipo = $(" .idProducto").val();
    var html ="";
     var add = "'add'";
    var encontrado = 0;
    var peso = ' <label class="letras impre" >PESO</label><input type="number" pattern="[0-9]{10}" id="peso" class="peso form-control clear peso impre" onchange="document.getElementById('+add+').focus();" placeholder="">';
   for (var f=0; f<arrGlobal.length;f++){
        if(arrGlobal[f].idInventario == tipo){   
          encontrado = 1;     
          $(".descripcion").val(arrGlobal[f].descripcion);

      if(arrGlobal[f].medida ==1){
        
$(".pesos").html(peso);
      }else{
     $('.pesos').removeClass('hidden');
     $('.pesos').html('');
  }
        } 
    }  
    if(encontrado == 0){
          $('#modal .textModal').html('La clave del producto no se encuentra registrado en el inventario.'); 
          $('#modal').modal('show');
          limpiar();
        }

}

function updateListaPedidos(){
    var tipo = $(" .idProductoP").val();
    var html ="";
     var add = "'addP'";
    var encontrado = 0;
    var peso = ' <label class="letras impre" >PESO</label><input type="number" pattern="[0-9]{10}" id="pesoP" class=" form-control clear pesoP impre" onchange="document.getElementById('+add+').focus();" placeholder="">';
   for (var f=0; f<arrGlobal.length;f++){
        if(arrGlobal[f].idInventario == tipo){   
          encontrado = 1;     
          $(".descripcionP").val(arrGlobal[f].descripcion);

      if(arrGlobal[f].medida ==1){
        
$(".pesosP").html(peso);
      }else{
     $('.pesosP').removeClass('hidden');
     $('.pesosP').html('');
  }
        } 
    }  
    if(encontrado == 0){
          $('#modal .textModal').html('La clave del producto no se encuentra registrado en el inventario.'); 
          $('#modal').modal('show');
          limpiar();
        }

}

function updateListaMermaP(){
    var tipo = $(" .idProductoMP").val();
    var html ="";
     var add = "'addMP'";
    var encontrado = 0;
    var peso = ' <label class="letras impre" >PESO</label><input type="number" pattern="[0-9]{10}" id="pesoMP" class="pesoMP form-control clear  impre" onchange="document.getElementById('+add+').focus();" placeholder="">';
   for (var f=0; f<arrGlobal.length;f++){
        if(arrGlobal[f].idInventario == tipo){   
          encontrado = 1;     
          $(".descripcionMP").val(arrGlobal[f].descripcion);

      if(arrGlobal[f].medida ==1){
        
$(".pesosMP").html(peso);
      }else{
     $('.pesosMP').removeClass('hidden');
     $('.pesosMP').html('');
  }
        } 
    }  
    if(encontrado == 0){
          $('#modal .textModal').html('La clave del producto no se encuentra registrado en el inventario.'); 
          $('#modal').modal('show');
          limpiar();
        }

}


function updateListaMerma(){
    var tipo = $("#modalMerma .idProductoM").val();
    var html ="";
     var add = "'addM'";
    var encontrado = 0;
    var peso = ' <label class=" impre" >PESO</label><input type="text" id="pesoM" class="pesoM form-control clear  impre" onchange="document.getElementById('+add+').focus();" placeholder="">';
   for (var f=0; f<arrGlobalInventario.length;f++){
        if(arrGlobalInventario[f].idInventario == tipo){   
          encontrado = 1;     
          $("#modalMerma .descripcionM").val(arrGlobalInventario[f].descripcion);

      if(arrGlobalInventario[f].medida ==1){
        
$("#modalMerma .pesosM").html(peso);
      }else{
     $('#modalMerma .pesosM').removeClass('hidden');
     $('#modalMerma .pesosM').html('');
  }
        } 
    }  
    if(encontrado == 0){
          $('#modal .textModal').html('La clave del producto no se encuentra registrado en el inventario.'); 
          $('#modal').modal('show');
          limpiar();
        }

}


function updateListaRecarga(){
    var tipo = $("modalRecarga .idProducto").val();
    var html ="";
     var add = "'add'";
    var encontrado = 0;
    var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso form-control clear peso impre" onchange="document.getElementById('+add+').focus();" placeholder="Kg.">';
   for (var f=0; f<arrGlobalInventario.length;f++){
        if(arrGlobalInventario[f].idInventario == tipo){   
          encontrado = 1;     
          $("#modalMerma .descripcion").val(arrGlobalInventario[f].descripcion);

      if(arrGlobalInventario[f].medida ==1){
        
$("#modalRecarga .pesos").html(peso);
      }else{
     $('#modalRecarga .pesos').removeClass('hidden');
     $('#modalRecarga .pesos').html('');
  }
        } 
    }  
    if(encontrado == 0){
          $('#modal .textModal').html('La clave del producto no se encuentra registrado en el inventario.'); 
          $('#modal').modal('show');
          limpiar();
        }

}
function updateListaModalMedida(){
  var tipo = $("#modalInventario .tipo").val();

   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo)
       $("#modalInventario .medidaInv").val(medidas[arrGlobal[a].medida - 1]); 
    }
}
function updateListaVentaMedidaMP(){
  var tipo = $(".idProductoMP").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $(".descripcionMP").val(arrGlobal[a].descripcion); 

    }
       
    
    }

}

function updateListaVentaMedida(){
  var tipo = $(".idProducto").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $(".descripcion").val(arrGlobal[a].descripcion); 

    }
       
    
    }

}

function updateListaVentaMedidaPedidos(){
  var tipo = $(".idProductoP").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $(".descripcionP").val(arrGlobal[a].descripcion); 

    }
       
    
    }

}
function updateListaVentaMedidaMerma(){
  var tipo = $("#modalMerma .idProductoM").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $("#modalMerma .descripcionM").val(arrGlobal[a].descripcion); 

    }
       
    
    }

}

function closeModalInventario(){
      $('#modalInventario').modal('hide');
      limpiarm();

}
function closeModalInventario2(lista){
      getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
      limpiar();
      $('#modalInventario').modal('hide');
            
}
function agregarCantidad(){




  var data = {idInventario: $("#modalInventario .tipo").val(),
                    cantidad: $("#modalInventario .cantidad").val()
                    , costo:0};
 
        executeFunctionDone(data, '/inventarios/agregar', {tipo:"POST", error: "Ocurrio un error al agregar inventario."},
        closeModalInventario2);
     
 

}
getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios2);

function agregarpin(){

  var data =  $("#modalPin .pin").val();
  for(var h=0;h<upin.length; h++){
      if(data==upin[h].pin ){
        closeModalPin();
        pin=upin[h].pin;

        click_Despacho();

        data=0;
      }
  }

  if(data!=0){
    closeModalPin();
    $('#modal .textModal').html('PIN incorrecto y/o seleccione al Despachador'); 
    $('#modal').modal('show');
    click_ventas();
  }
     $("#modalPin .pin").val('')
}
function agregarPedido(){

  var data =  $("#modalPedidos .pin").val();
  for(var h=0;h<upin.length; h++){
      if(data==upin[h].pin ){
        closeModalPedidos();
        pin=upin[h].pin;

        click_Pedidos();

        data=0;
      }
  }

  if(data!=0){
    closeModalPin();
    $('#modal .textModal').html('PIN incorrecto y/o seleccione al Despachador'); 
    $('#modal').modal('show');
    click_ventas();
  }
     $("#modalPin .pin").val('')
}
function agregarpin2(){

  var data =  $("#modalPin2 .pin").val();
  for(var h=0;h<upin.length; h++){
      if(data==upin[h].pin){
        closeModalPin2();
        click_Recepcion();
        pin=upin[h].pin;
        data=0;

      }
  }

  if(data!=0){
    closeModalPin2();
    $('#modal .textModal').html('PIN INCORRECTO.'); 
    $('#modal').modal('show');
     click_ventas();
  }
    $("#modalPin2 .pin").val('');
     
}

function agregarpin3(){

  var data =  $("#modalPin3 .pin").val();
  for(var h=0;h<upin.length; h++){
      if(data==upin[h].pin){
        closeModalPin3();
        click_Merma();
        pin=upin[h].pin;
        data=0;

      }
  }

  if(data!=0){
    closeModalPin3();
    $('#modal .textModal').html('PIN INCORRECTO.'); 
    $('#modal').modal('show');
     click_ventas();
  }
    $("#modalPin3 .pin").val('');
     
}
/*function updateGanadosDatos(){
  // url:, data:{idGanado:1, ganado_detalle:{ folioFactura:'folio_factura', titulo:'titulo', fechaTitulo:'2017-04-16', numeroTb:'numero dictamen tb', fechaTb:'2017-04-16', fechaUpp:'2017-04-16', guia:1 }, proveedor:{ idMunicipio: 1, idLocalidad: 1 }, ganado:{idProveedor:1, fechaEntrada, color:'Ahumado', idJaula:1, peso:'55.2', sexo:'M'}, type:'POST'
  var arete = areteG;
  if(arete != ""){
      var json = {where:{arete:arete}}
      executeFunctionDone(json, 'ganados', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", updateGanadosDatos2);
  }
 }
*/

function agregarpin4(){

  var data =  $("#modalPin4 .pin").val();
  for(var h=0;h<upin.length; h++){
      if(data==upin[h].pin){
        closeModalPin4();
        click_Degustaciones();
        pin=upin[h].pin;
        data=0;

      }
  }

  if(data!=0){
    closeModalPin4();
    $('#modal .textModal').html('PIN INCORRECTO.'); 
    $('#modal').modal('show');
     click_ventas();
  }
    $("#modalPin4 .pin").val('');
     
}
/*function updateGanadosDatos(){
  // url:, data:{idGanado:1, ganado_detalle:{ folioFactura:'folio_factura', titulo:'titulo', fechaTitulo:'2017-04-16', numeroTb:'numero dictamen tb', fechaTb:'2017-04-16', fechaUpp:'2017-04-16', guia:1 }, proveedor:{ idMunicipio: 1, idLocalidad: 1 }, ganado:{idProveedor:1, fechaEntrada, color:'Ahumado', idJaula:1, peso:'55.2', sexo:'M'}, type:'POST'
  var arete = areteG;
  if(arete != ""){
      var json = {where:{arete:arete}}
      executeFunctionDone(json, 'ganados', "Ocurrio un error al cargar el formulario, reintentar más tarde. ", updateGanadosDatos2);
  }
 }
*/

/*-------------------- Cerrar sesion --------------------*/
function click_cerrarSesion(){

  $.ajax({    
    url : '/log_out',    
    //data : { usuario: name, contrasenia: pass},    
    type : 'DELETE',    
    success : function(json) {  
   
      console.log(json);
    },    

    error : function(xhr, status) {  
         
      $('#modal').modal('show');
    },    
    complete : function(xhr, status) {        
    }});
}