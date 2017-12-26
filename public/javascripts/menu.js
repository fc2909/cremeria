var arrGlobal, arrGlobalVF, arrGlobalRuta , fechacaptura, arrGlobalE, t_merc , valor, dateCash2 , precio_p, idGlobal, idGlobal2, idGlobal4, t_vende, rutas, idGlobal2, menu, today_v, nombre_vend, id_vend, n_vend, cred, boni ;
 var total_mercancia=0;
 var historial=0;
 var modalCreditos1="F";
 var s_vent=0;
 var s_vent2=0;
 var n, w, despachador, noSemana, idVentas2;
 var upin, pin,arrGlobal41, arrGlobalVehiculo, dsc, sc, sfc1;
 var t_v;
 var t_v2; 
 var piezasT, year2, month2, day2; 
var user;
var tipoUsuario = ['Director','Administrador','Contador','Despachador','Vendedor']
var medidas = ['Kg.','Pzas.','L'];
var combustibles = ['Gasolina - MAGNA','Gasolina - PREMIUM','Gasolina & Gas','Gas','Diesel'];


     
     



var t_rutas = ['C1','C2','C3','C4','C5','C6','C7','C8'];
var t_ventas = ['Detalle','Mayoreo','Detalle Foraneo','Restaurantes'];
var t_Empleado = ['Ayudante General','Vendedor','Gerente de Ventas','Gerente de Operaciones','Supervisor','Administrador','Consejo'];
var dias = ['LUNES',' MARTES ',' MIÉRCOLES ',' JUEVES ',' VIERNES ',' SÁBADO ',' DOMINGO '];
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp4);


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

anado=[1,7,6,5,4,3,2];
function saberSemana(d,m,a){
fecha=new Date(a,0,1);
primerDiaDelAno=anado[fecha.getDay()];
fecha=new Date(a,0,primerDiaDelAno);
fecha2=new Date(a,m,(d+primerDiaDelAno));
tiempopasado=fecha2-fecha;
semanas=Math.floor(tiempopasado/1000/60/60/24/7);
if(semanas==0){semanas=52}
//alert(semanas);
//alert(semanas);
noSemana=semanas;
}


//saberSemana(31,11,2017);
//saberSemana(25,10,2017);


function makeArray() {
for (i = 0; i<makeArray.arguments.length; i++)
this[i + 1] = makeArray.arguments[i];
}
  var months = new makeArray('ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE');
var date = new Date();
var today = date.getDay();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha =  day + " de " + months[month] + " del " + year;
var d = new Date();
var dias1, meses1;
//alert(day<10);
if(day<10){
  day = "0"+day;
  //alert(dias1);
}
if(month<10){
  month = "0"+month;
  //alert(meses1);
}

var today_vv = year+"-"+month+"-"+day; 
dateCash2 = today_vv;
//alert(today_vv);
/*
var d = new Date();
document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Hora UTC: '+d.getUTCHours(),'<br>Minutos: '+d.getMinutes(),'<br>Segundos: '+d.getSeconds());
*/



/*--------------------- otros ------------------------------*/
function mod(dividendo , divisor)
{
  resDiv = dividendo / divisor ;  
  parteEnt = Math.floor(resDiv);            // Obtiene la parte Entera de resDiv
  parteFrac = resDiv - parteEnt ;      // Obtiene la parte Fraccionaria de la división
  //modulo = parteFrac * divisor;  // Regresa la parte fraccionaria * la división (modulo)
  modulo = Math.round(parteFrac * divisor)
  return modulo;
}
// Fin de función mod
 
// Función ObtenerParteEntDiv, regresa la parte entera de una división
function ObtenerParteEntDiv(dividendo , divisor)
{
  resDiv = dividendo / divisor ;  
  parteEntDiv = Math.floor(resDiv);
  return parteEntDiv;
}
// Fin de función ObtenerParteEntDiv
 
// function fraction_part, regresa la parte Fraccionaria de una cantidad
function fraction_part(dividendo , divisor)
{
  resDiv = dividendo / divisor ;  
  f_part = Math.floor(resDiv);
  return f_part;
}
// Fin de función fraction_part
 
// function string_literal conversion is the core of this program
// converts numbers to spanish strings, handling the general special
// cases in spanish language.
function string_literal_conversion(number)
{  
   // first, divide your number in hundreds, tens and units, cascadig
   // trough subsequent divisions, using the modulus of each division
   // for the next.
 
   centenas = ObtenerParteEntDiv(number, 100);
   number = mod(number, 100);
   decenas = ObtenerParteEntDiv(number, 10);
   number = mod(number, 10);
 
   unidades = ObtenerParteEntDiv(number, 1);
   number = mod(number, 1);  
   string_hundreds="";
   string_tens="";
   string_units="";
   
   // cascade trough hundreds. This will convert the hundreds part to
   // their corresponding string in spanish.
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
 // end switch hundreds
 
   // casgade trough tens. This will convert the tens part to corresponding
   // strings in spanish. Note, however that the strings between 11 and 19
   // are all special cases. Also 21-29 is a special case in spanish.
   if(decenas == 1){
           
      //Special case, depends on units for each conversion
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
   //alert("STRING_TENS ="+string_tens);
   
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
    // Fin of swicth decenas
 
   // cascades trough units, This will convert the units part to corresponding
   // strings in spanish. Note however that a check is being made to see wether
   // the special cases 11-19 were used. In that case, the whole conversion of
   // individual units is ignored since it was already made in the tens cascade.
   if (decenas == 1)
   {
      string_units="";  
          // empties the units check, since it has alredy been handled on the tens switch
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
       // end switch units
   } // end if-then-else
//final special cases. This conditions will handle the special cases which
//are not as general as the ones in the cascades. Basically four:
 
// when you've got 100, you dont' say 'ciento' you say 'cien'
// 'ciento' is used only for [101 >= number > 199]
if (centenas == 1 && decenas == 0 && unidades == 0)
{
   string_hundreds = "cien " ;
}  
// when you've got 10, you don't say any of the 11-19 special
// cases.. just say 'diez'
if (decenas == 1 && unidades ==0)
{
   string_tens = "diez " ;
}
// when you've got 20, you don't say 'veinti', which is used
// only for [21 >= number > 29]
if (decenas == 2 && unidades ==0)
{
  string_tens = "veinte " ;
}
// for numbers >= 30, you don't use a single word such as veintiuno
// (twenty one), you must add 'y' (and), and use two words. v.gr 31
// 'treinta y uno' (thirty and one)
if (decenas >=3 && unidades >=1)
{
   string_tens = string_tens+" y ";
}
// this line gathers all the hundreds, tens and units into the final string
// and returns it as the function value.
final_string = string_hundreds+string_tens+string_units;
return final_string ;
}
//end of function string_literal_conversion
// handle some external special cases. Specially the millions, thousands
// and hundreds descriptors. Since the same rules apply to all number triads
// descriptions are handled outside the string conversion function, so it can
// be re used for each triad.

function convertirNumLetras(number)
{
  //number = number_format (number, 2);
   number1=number.toString();
   //settype (number, "integer");
   cent = number1.split(".");  
   centavos = cent[1];
   //Mind Mod
   number=cent[0];
   if (centavos == 0 || centavos == undefined)
   {
        centavos = "00";
   }
   if (number == 0 || number == "")
   { // if amount = 0, then forget all about conversions,
      centenas_final_string=" cero "; // amount is zero (cero). handle it externally, to
      // function breakdown
  }
   else
   {
     millions  = ObtenerParteEntDiv(number, 1000000); // first, send the millions to the string
      number = mod(number, 1000000);           // conversion function
     
     if (millions != 0)
      {                      
      // This condition handles the plural case
         if (millions == 1)
         {              // if only 1, use 'millon' (million). if
            descriptor= " millon ";  // > than 1, use 'millones' (millions) as
            }
         else
         {                           // a descriptor for this triad.
              descriptor = " millones ";
            }
      }
      else
      {    
         descriptor = " ";                 // if 0 million then use no descriptor.
      }
      millions_final_string = string_literal_conversion(millions)+descriptor;
      thousands = ObtenerParteEntDiv(number, 1000);  // now, send the thousands to the string
        number = mod(number, 1000);            // conversion function.
      //print "Th:".thousands;
     if (thousands != 1)
      {                   // This condition eliminates the descriptor
         thousands_final_string =string_literal_conversion(thousands) + " mil ";
       //  descriptor = " mil ";          // if there are no thousands on the amount
      }
      if (thousands == 1)
      {
         thousands_final_string = " mil ";
     }
      if (thousands < 1)
      {
         thousands_final_string = " ";
      }
      // this will handle numbers between 1 and 999 which
      // need no descriptor whatsoever.
     centenas  = number;                    
      centenas_final_string = string_literal_conversion(centenas) ;
   } //end if (number ==0)
 
   /*if (ereg("un",centenas_final_string))
   {
     centenas_final_string = ereg_replace("","o",centenas_final_string);
   }*/
   //finally, print the output.
 
   /* Concatena los millones, miles y cientos*/
   cad = millions_final_string+thousands_final_string+centenas_final_string;
   /* Convierte la cadena a Mayúsculas*/
   cad = cad.toUpperCase();      
   if (centavos.length>2)
   {  
      if(centavos.substring(2,3)>= 5){
         centavos = centavos.substring(0,1)+(parseInt(centavos.substring(1,2))+1).toString();
      }   else{
         
        centavos = centavos.substring(0,1);
      }
   }
 
   /* Concatena a los centavos la cadena "/100" */
   if (centavos.length==1)
   {
      centavos = centavos+"0";
   }
   centavos = centavos+ "/100";
 
 
   /* Asigna el tipo de moneda, para 1 = PESO, para distinto de 1 = PESOS*/
   if (number == 1)
   {
      moneda = " PESO ";  
   }
   else
   {
      moneda = " PESOS ";  
   }
   /* Regresa el número en cadena entre paréntesis y con tipo de moneda y la fase M.N.*/
   //Mind Mod, si se deja MIL pesos y se utiliza esta función para imprimir documentos
   //de caracter legal, dejar solo MIL es incorrecto, para evitar fraudes se debe de poner UM MIL pesos
   if(cad == '  MIL ')
   {
        cad=' UN MIL ';
   }
    cantidadEnTexto=cad+moneda+centavos+" M.N.";
  // alert( "FINAL="+cad+moneda+centavos+" M.N.");
  //return cad+moneda+centavos+" M.N.";
}
function doSpanish(importe) {
        document.getElementById('spn').innerHTML='( '+convertirNumLetras(importe)+ ' )';
                return true;
        }
var cantidadEnTexto;
function pagare(){
  var usuario;
 
 var dayD = today_v.substring(8,10);
 var monthD = today_v.substring(5,7);
 var yearD = today_v.substring(0,4);
var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
   var diaD=(diasemaD.getUTCDay());
    var fechaDespachoD = dias[diaD-1]+", "+dayD+" DE "+months[monthD]+" DEL "+yearD+".";
  convertirNumLetras(total_merc);
  for(var h=0;h<upin.length; h++){
      if(pin==upin[h].pin){
        
usuario="CAPTURISTA: <u> "+ upin[h].usuario+". </u>";
        
      }
  }
  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto6').style.display = 'block';
  document.getElementById('oculto7').style.display = 'block';
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasPrint);
var nombreVendedor = "RUTA _<u>"+ruta3+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_";
var despachadorV = "DESPACHADOR: "+despachador+"";
var controlC = "CONTROL DE VENTAS Y COBRANZA";
  var pagare = '<p class="text-justify " >YO _<u> '+ nombre_vend+' </u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u> '+fechaDespachoD+' </u>_ LA CANTIDAD DE _<u> $ '+total_merc+' ('+cantidadEnTexto+') </u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center">'+nombre_vend+'.</p>';
  var fechaDespachoDD ='FECHA DE DESPACHO : '+fechaDespachoD;
$('.pagareD').html(pagare);
$('.controlC').html(controlC);
$('.nombreVendedor').html(nombreVendedor);
$('.nombreCapturista').html(usuario);
$('.nombreDespachador').html(despachadorV);
$('.fechaDespacho').html(fechaDespachoDD);
window.print();
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
 
 var dayD = today_v.substring(8,10);
 var monthD = today_v.substring(5,7);
 var yearD = today_v.substring(0,4);
var diasemaD= new Date((parseInt(monthD))+' '+parseInt(dayD)+' ,'+parseInt(yearD));
   var diaD=(diasemaD.getUTCDay());
    var fechaDespachoD = dias[diaD-1]+", "+dayD+" DE "+months[monthD]+" DEL "+yearD+".";
  //convertirNumLetras(total_merc);
  for(var h=0;h<upin.length; h++){
      if(pin==upin[h].pin){
        
usuario="CAPTURISTA: <u> "+ upin[h].usuario+". </u>";
        
      }
  }

  document.getElementById('oculto').style.display = 'block';
  document.getElementById('oculto2').style.display = 'block';
  document.getElementById('oculto3').style.display = 'block';
  document.getElementById('oculto4').style.display = 'block';
  document.getElementById('oculto5').style.display = 'block';
  document.getElementById('oculto6').style.display = 'block';
  document.getElementById('oculto7').style.display = 'block';
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasPrint);
var nombreVendedor = "RUTA _<u>"+rutas+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_";
var despachadorV = "DESPACHADOR: "+despachador+"";
var controlC = "CONTROL DE VENTAS Y COBRANZA";
//  var pagare = '<p class="text-justify " >YO _<u> '+ nombre_vend+' </u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u> '+fechaDespachoD+' </u>_ LA CANTIDAD DE _<u> $ '+total_merc+' ('+cantidadEnTexto+') </u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center">'+nombre_vend+'.</p>';
  var fechaDespachoDD ='FECHA DE DESPACHO : '+fechaDespachoD;
$('.pagareD').html(pagare);
$('.controlC').html(controlC);
$('.nombreVendedor').html(nombreVendedor);
$('.nombreCapturista').html(usuario);
$('.nombreDespachador').html(despachadorV);
$('.fechaDespacho').html(fechaDespachoDD);
window.print();
  document.getElementById('oculto').style.display = 'none';
  document.getElementById('oculto2').style.display = 'none';
  document.getElementById('oculto3').style.display = 'none';
  document.getElementById('oculto4').style.display = 'none';
  document.getElementById('oculto5').style.display = 'none';
  document.getElementById('oculto6').style.display = 'none';
  document.getElementById('oculto7').style.display = 'none';


}
function cambio(){
  var peso = $(".peso").val();

  if(peso == ""){
    document.getElementById('peso').focus();
  }else{
     document.getElementById('add').focus();
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

  }
  else{
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
 }
 else{
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

}
function loadUsuarios2(lista){
  upin = lista;
}
function loadInventarios(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    html+= '<tr class="seleccionar" onclick="cambiarcolor(this); selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + ' ' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
  $('.contCata').html(html);
  arrGlobal = lista;
}

function loadInventarioVenta(lista){
  arrGlobal = lista;
}
var ruta3;
function loadVendedores(lista){
  var html = '';
  




  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
        for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==lista[h].ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}
html+= '<tr class="seleccionar"  data-id="'+ lista[h].id +'"><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td onclick="selectVendedores2('+  lista[h].id +')">' +ruta3  + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + t_ventas[lista[h].t_venta - 1] + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].l_credito + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].l_bon + '</td><td onclick="selectVendedores2('+ lista[h].id +')">' + lista[h].merma +'</td><td onclick="selectVendedores2('+ lista[h].id +')">'+lista[h].telp+'</td><td><div class="btn-group" data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upVendedor1('+ lista[h].id +');">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="delVendedor('+ lista[h].id +');">Eliminar</button></div> </td></tr>';
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

function loadVentasF(lista){
  valor =0;
  var total=0;
  var totalV;
  var num=0;
  for(var h=0;h<lista.length; h++){
 if( rutas==lista[h].ruta&&fechacaptura == lista[h].fechadespachof ){
//alert(rutas+" == "+lista[h].ruta+" && "+fechacaptura+" == "+lista[h].fechadespachof+" = "+lista[h].id+" ---- "+h);
if(lista[h].venta==''||lista[h].venta==NaN||lista[h].venta==undefined||lista[h].venta==null){
if(parseFloat(lista[h].peso)==0){
  
$('#rec'+h+'').val(lista[h].piezasv);
  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert(lista[h].piezasv);
t_v2[num]=parseFloat(lista[h].valorMercancia);
//alert("Venta___: "+lista[h].valorMercancia);

num++;
//alert(lista[h].valorMercancia);
total = total+valor;
  
  
}else{
 
      $('#p'+h+'').val(lista[h].piezasv);
  $('#rec'+h+'').val(lista[h].pesov);
//alert(lista[h].pesov);
valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert("Venta____: "+lista[h].valorMercancia);
t_v2[num]=parseFloat(lista[h].valorMercancia);
num++;
//alert(lista[h].valorMercancia);

total = total+valor;
//alert(total+" - "+valor);

  

}


}else{
if(parseFloat(lista[h].peso)==0){
  
$('#rec'+h+'').val(lista[h].piezasv);
  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert(lista[h].piezasv);
t_v2[num]=parseFloat(lista[h].venta);
//alert("Venta: "+lista[h].venta);

num++;
//alert(lista[h].valorMercancia);
total = total+valor;
  
  
}else{
 
      $('#p'+h+'').val(lista[h].piezasv);
  $('#rec'+h+'').val(lista[h].pesov);
//alert(lista[h].pesov);
valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert("Venta: "+lista[h].venta);
t_v2[num]=parseFloat(lista[h].venta);
num++;
//alert(lista[h].valorMercancia);

total = total+valor;
//alert(total+" - "+valor);

  

}}
  }
    }
arrGlobalVF = lista;
s_vent2=total;
  totalV = ' <h3 class="letras">VENTA TOTAL: $ '+(total).toFixed(2)+'</h3>';
   $(".totalVentas").html(totalV);
 
}
var element;
function cambiarcolor(elemento){
  if(element!=undefined){

    if(element.style.background=="gray"){
    
    element.style.background="#031727";
    //alert("ya fue seleccionado");
  }
  }
  if(elemento.style.background=="gray"){
    
    elemento.style.background="#031727";
    //alert("ya fue seleccionado");
  }else{
    elemento.style.background="gray";
  }
  
element=elemento;
}
function loadVDiaria(lista){
  var html = '';
  for(var h=0;h<lista.length; h++){
html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  lista[h].descripcionventa +'</td></tr>';

html += '';
  }
     $('.contCataModal').html(html);

  
}
function loadVentas(lista){
  var html = '';
  var htmlp = '';
  var no=1;
  total_merc =0;
  var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare();"  >IMPRIMIR</button></li>';
 var num=0;
  for(var h=0;h<lista.length; h++){
   // pagare();
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof){
if( total_merc==0){
        
var nombreV='<th colspan="7" class="nombreV" style="font-size:8px;">Nombre: '+lista[h].vendedor+'</th>'
$('nombreV').html(nombreV);
}
html+= '<tr class="seleccionar" id ="'+h+'" onclick="cambiarcolor(this); selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
htmlp+= '<tr class=" fila" style="font-size:8px;"><td class="text-center">' + no + '</td><td class="text-center">' + lista[h].horadespacho + '</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td class="text-right">' +parseFloat(lista[h].peso).toFixed(3) + '</td><td class="text-right"> $ ' + parseFloat(lista[h].precioUnitario).toFixed(2) + '</td><td class="text-right"> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
  total_merc =parseFloat(total_merc) + parseFloat(lista[h].valorMercancia);
      no++;
if(total_merc!=0){
    historial=0;
      //alert("hay baro");
      
    }else{
      //alert("no hay baro");
     
    }
  }

    }
    total_mercancia=total_merc;
if(total_merc==0){
    historial=0;
      //alert("no hay baro");
    }
htmlp+= '<tr class=" " style="font-size:10px;"><td colspan="6"></td><td class="text-right"> Total: </td><td class="text-right"> $ '+parseFloat(total_merc).toFixed(2)+'</td></tr>';
    
     $('.contCata').html(html);
     $('.contCatap').html(htmlp);
   
  arrGlobal3 = lista;
  var total = ' <h3 class="letras">TOTAL: $ '+parseFloat(total_merc).toFixed(2)+'</h3>';
    $(".totalVenta").html(total);
      $('.imprimir').html(imprimir);

}

function loadVentasNoPrint(lista){
  var html = '';
  var htmlp = '';
  total_merc =0;
  var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare();"  >IMPRIMIR</button></li>';
 var num=0;

  for(var h=0;h<lista.length; h++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof){

html+= '<tr class="seleccionar" id ="'+h+'" onclick="cambiarcolor(this); selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
  total_merc =parseFloat(total_merc) + parseFloat(lista[h].valorMercancia);
      
if(total_merc!=0){
    historial=0;
      //alert("hay baro");
      
    }else{
      //alert("no hay baro");
     
    }
  }

    }
    total_mercancia=total_merc;
if(total_merc==0){
    historial=0;
      //alert("no hay baro");
    }
    
     $('.contCata').html(html);
   
  arrGlobal3 = lista;
  var total = ' <h3 class="letras">TOTAL: $ '+parseFloat(total_merc).toFixed(2)+'</h3>';
    $(".totalVenta").html(total);
      $('.imprimir').html(imprimir);

}
function totalrec(h,piezas,pUnitario,rec){
  var piezas1 = $('#rec'+h+'').val();
 //alert(t_v2.length+" long vec pieza");

  
  //var rec = document.getElementById(rec1).val();
  if(piezas1==undefined){
    piezas1=0;
   // $('#rec'+h+'').val(piezas1);
  }
  valor = (piezas-piezas1)*pUnitario;
  //alert(piezas+" - "+piezas1 +" * "+pUnitario+" = "+valor);

t_v[h]=piezas1;
piezasT[h]=piezas1;
//alert("valor = "+t_v2[h]);

suma(valor, h,rec);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
}
function totalrec2(h,peso,pUnitario,rec){
  var peso1 = $('#rec'+h+'').val();
  var pieza1 = $('#p'+h+'').val();
 //alert(t_v2.length+" long peso");

 
  
  //var rec = document.getElementById(rec1).val();
  if(peso1==undefined){
    peso1=0;
    //$('#rec'+h+'').val(peso1);
  }
  valor = (peso-peso1)*pUnitario;
  //alert(piezas+" - "+piezas1 +" * "+pUnitario+" = "+valor);
t_v[h]=parseFloat(peso1).toFixed(2);
piezasT[h]=parseFloat(pieza1).toFixed(2);

//alert("valor = "+t_v2[h]);
suma(valor, h, rec);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));


 }

function suma(valor, r, v1){
  //alert(valor);
  var totales;
  
t_v2[v1]=parseFloat(valor).toFixed(2);
 //s_vent += +valor;
//alert(n+" v1: " +v1);
//alert(t_v2.length+" ----");
  for(var h=0;h<t_v2.length; h++){
  //  alert("h: "+h);
    if( t_v2[h]==NaN ||t_v2[h]==undefined ||t_v2[h]==null){
      t_v2[h]=0;
    // $('#rec'+h+'').val(t_v2[h]);
    s_vent += +0;
  // alert("entra");
   }else{
   // alert(s_vent+" + "+t_v2[h]);
    s_vent += +t_v2[h];
   }
   
 //alert("N"+f+". suma = "+s_vent +" + "+ t_v2[h]+" = "+(s_vent+t_v2[h]));
}
//alert(t_v2.length);
  totales = ' <h3 class="letras">VENTA TOTAL: $ '+(s_vent).toFixed(2)+'</h3>';
  
    s_vent2=s_vent;
    //alert(s_vent2);
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
function loadVentasr(lista){
var v=0;
var v1=0;
  var html = '';
  var htmlp = '';
  total_vent =0;
  var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare2();"  >IMPRIMIR</button></li>';
  var cantidad=0;
  var num=1;
  //alert(today_vv+" -------- "+fechacaptura);
  for(var h=0;h<lista.length; h++){
    //alert(rutas +"=="+ lista[h].ruta +"&&"+ today_v+" == "+lista[h].fecha);
    //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  //if(rutas==lista[h].ruta&&lista[h].dc==dscv&&lista[h].sc==scv){/////////////////////////// unificar
  if(rutas==lista[h].ruta&&lista[h].fechadespachof==fechacaptura){

if(parseFloat(lista[h].peso)==0){
html+= '<tr class="" data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td></td><td> <input type="text"  class="form-control clear " id="rec'+h+'" placeholder="0.00" onchange="totalrec('+h+', '+lista[h].piezas+', '+lista[h].precioUnitario+', '+v+')">' + '</td><td>  ' + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td>  <div id="'+h+'"> $ 0.00</div></td></tr>';
htmlp+= '<tr class="" style="font-size:7px; "><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td ><td class="text-right">0.00</td><td class="text-right">'+lista[h].piezasv + '</td><td class="text-right">0.000</td><td>'+(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv))+'</td><td>0.000</td><td class="text-right"> $ ' + lista[h].precioUnitario + '</td><td class="text-right"> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td class="text-right"> $ '+lista[h].venta+'</td></tr>';
//t_v.push(h);
num++
v++;
}else{
html+= '<tr class="" data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3)+ '</td><td> ' + '<input type="text" id="p'+h+'" class="form-control clear" placeholder="0.00" >' + '</td><td>  ' + '<input type="text"  class="form-control clear " id="rec'+h+'" placeholder="0.00" onchange="totalrec2('+h+', '+lista[h].peso+', '+lista[h].precioUnitario+','+v+')">'  + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td><div id="'+h+'"> $ 0.00</div></td></tr>';
htmlp+= '<tr class="" style="font-size:7px; "><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td  class="text-right">'+lista[h].peso+'</td><td class="text-right">'+lista[h].piezasv + '</td><td class="text-right">'+lista[h].pesov+'</td><td>'+(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv))+'</td><td>'+(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov))+'</td><td class="text-right"> $ ' + lista[h].precioUnitario + '</td><td class="text-right"> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td class="text-right"> $ '+lista[h].venta+'</td></tr>';
num++
//t_v.push(h);
v++;
}

  //total_merc = total_merc + parseFloat(lista[h].valorMercancia);
      

  }

    }
    //total_mercancia=total_merc;
//if(total_merc==0){
  //  historial=0;
      //alert("no hay baro");
   // }
 
    n=v;
    
    
t_v2 = new Array(n);
 t_v = new Array(n);
 piezasT = new Array(n);
 v=0;
   //alert(t_v2.length+" long vec");
     $('.contCata').html(html);
     $('.contCatap').html(htmlp);
   
  arrGlobalT = lista;

     $('.imprimir').html(imprimir);

}

function loadVentasp(lista){

  arrGlobal4 = lista;
  
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
  for(var h=0;h<lista.length; h++)
    if(lista[h].fecha == today_vv && lista[h].efectivo != null){
html3+= '<tr class="seleccionar" onclick="selectEV('+lista[h].id+');" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].efectivo +'</td></tr>';
   
    }

     //$('#modalEfectivo .contCataModal').html('hide');

     $('#modalEfectivo .contCataModal').html(html3);
  arrGlobalE = lista;
  arrGlobalF = lista;

      
}

    function loadVentaspasadasVF(lista){
  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (lista[h].fechaf==fechacaptura&&lista[h].ruta==rutas) {
  //alert("hey ----");
var efect;
var t_venta_;
var otr;
var fsd;
total_merc=lista[h].v_mercancia;
  $('.creditos').val(lista[h].creditos);
  $('.otros').val(lista[h].otros);
   $('.efectivo').html('');
  $('.f_s_dia').html('');
  $('.otros1').html('');
  $('.t_venta_merca').html('');
  //alert(lista[h].creditos);
  //alert(lista[h].otros);
  if(lista[h].f_s_dia==null||lista[h].f_s_dia==undefined||lista[h].f_s_dia==NaN){
   t_venta_=0.00;
   otr=0.00;
   fsd=0.00;
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
   
  }  else{
    efect=parseFloat(lista[h].efectivo).toFixed(2);
    sumaefe=parseFloat(lista[h].efectivo)+parseFloat(lista[h].otros);
  }
  //alert(sumaefe+" - "+fsd);
  $('.sumaefec').html('$ '+parseFloat(sumaefe).toFixed(2));
  $('.efectivo').html('$ '+parseFloat(efect).toFixed(2));
  $('.f_s_dia').html('$ '+parseFloat(fsd).toFixed(2));
  $('.otros1').html('$ '+parseFloat(otr).toFixed(2));
  $('.t_venta_merca').html(' $ '+parseFloat(t_venta_).toFixed(2));
}


    }

    
}


function loadVentasp3(lista){
  var html = '';
  arrGlobalE='';

  for(var h=0;h<lista.length; h++)
    if(lista[h].fecha == dateCash2 && lista[h].efectivo != null){
html+= '<tr class="remarca seleccionar"  onclick="selectEV('+lista[h].id+');"  data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].efectivo +'</td></tr>';

    }

    // $('#modalEfectivo contCataModal').html('hide');

     $('#modalEfectivo .contCataModal').html(html);
  arrGlobalE = lista;
  arrGlobalF = lista;

}
function loadVentaspasadasRS(lista){
  var html2 = '';
  $('contCata').html('');
//alert((noSemana+1));
var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
  var  dianum=(diasema.getUTCDay());
  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
//if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].cobrado==undefined)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
if(dianum==6){
 if (lista[h].fechaf==today_v||lista[h].sfc==(noSemana)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
  html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
}

}else{
  
   if (lista[h].fechaf==today_v||lista[h].sfc==(noSemana+1)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
  html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
  
  
}
}



    }

     $('.contCata').html(html2);

  arrGlobal4 = lista;
}


function loadVentaspasadas(lista){
  var html2 = '';
//alert((noSemana+1));
var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
  var  dianum=(diasema.getUTCDay());
  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
//if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].cobrado==undefined)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
if(dianum==6){
 if (lista[h].fechaf==today_v||lista[h].sfc==(noSemana)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
  html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
}

}else{
  
   if (lista[h].fechaf==today_v||(lista[h].sfc==(noSemana+1)&&lista[h].cobrado==undefined)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
  html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
  
  
}
}



    }

     $('.contCata').html(html2);

  arrGlobal4 = lista;
}

function loadVentaspasadasTF(lista){
  var html2 = '';
var mes=month-1;
var dia=day-1;
cobrado = cobrado +1;
//alert(mes);
saberSemana(dia,mes,year);
var cobrado=noSemana;
var t_vendido = today;

  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (lista[h].sfc==(noSemana+1)&&lista[h].ruta==rutas&&lista[h].f_s_real!=undefined&&lista[h].dsfc!=6) {
  html2+= '<tr class="" onclick="cambiarcolor(this);click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+');" data-id="'+ lista[h].id +'"><td> ' +dias[lista[h].dsfc-1]+'</td><td> $' + parseFloat(lista[h].creditos).toFixed(2) + '</td><td> $' + parseFloat(lista[h].f_s_dia).toFixed(2) + '</td><td> $ ' +parseFloat(lista[h].loquedeberiatraer).toFixed(2) + '</td><td> $ '+parseFloat(lista[h].f_s_real).toFixed(2) + '</td></tr>';
//alert(lista[h].cobrado+" == "+(cobrado+1)+" && "+lista[h].ruta+" == "+rutas);
}
if (lista[h].sfc==(noSemana+2)&&lista[h].ruta==rutas&&lista[h].f_s_real!=undefined&&lista[h].dsfc==6) {
  html2+= '<tr class="" onclick="cambiarcolor(this);click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+');" data-id="'+ lista[h].id +'"><td> ' +dias[lista[h].dsfc-1]+'</td><td> $' + parseFloat(lista[h].creditos).toFixed(2) + '</td><td> $' + parseFloat(lista[h].f_s_dia).toFixed(2) + '</td><td> $ ' +parseFloat(lista[h].loquedeberiatraer).toFixed(2) + '</td><td> $ '+parseFloat(lista[h].f_s_real).toFixed(2) + '</td></tr>';
//alert(lista[h].cobrado+" == "+(cobrado+1)+" && "+lista[h].ruta+" == "+rutas);
}


    }

     $('.contCata2').html(html2);
     html2='';
//alert(cobrado);
  arrGlobal4 = lista;
  arrGlobal41 = lista;
}
function loadDiaRec(lista){
  var html = '';
  var total_merc=0;

  for(var h=0;h<lista.length; h++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
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
}
function  loadRutas1(lista){
 
     arrGlobalRuta=lista;
}


function  loadMV(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++){
    html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); "><td onClick="selectControlVehicular2('+lista[h].id+')" >' + lista[h].numero+'</td><td onClick="selectControlVehicular2('+lista[h].id+')">' + lista[h].marca+'</td><td onClick="selectControlVehicular2('+lista[h].id+')"> ' + lista[h].modelo+'</td><td onClick="selectControlVehicular2('+lista[h].id+')">' + lista[h].placa+'</td><td style="width:40px" ><div class="btn-group"  data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upControlVehicular1('+ lista[h].id +');">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="delControlVehicular('+ lista[h].id +');">Eliminar</button></div> </td></tr>';
  }
     $('.contCata').html(html);
     arrGlobalVehiculo = lista;
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
//click_Salida('+ lista[h].id +')
}
function loadDays(lista){
  var html = '';

  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){

for (var i=0; i < arrGlobalRuta.length; i++) {
if(arrGlobalRuta[i].id==lista[h].ruta){
ruta3=arrGlobalRuta[i].nombre;
}
}


 
html+= '<tr class="seleccionar text-center" onclick="click_Salida('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].t_venta+', '+lista[h].l_credito + ', ' + lista[h].l_bon +')" data-id="'+ lista[h].id +'"><td>' + ruta3  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
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
     

  }
  else{

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
     

  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);

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

  if(idInventario != "" && descripcion != "" && detalle != "" && mayoreo != "" && foraneo != "" && restaurante != "" && cantidad != "" && medida != "" && s_min != "" && s_max != ""){

    var json = {idInventario: idInventario, descripcion: descripcion, detalle: detalle, mayoreo: mayoreo, foraneo: foraneo, restaurante: restaurante, cantidad: cantidad, medida: medida, s_min: s_min, s_max: s_max};
    addRegistro(json, 'inventarios', loadInventarios);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

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
  var tipocontrato = $("#modalVendedor .tipocontrato").val();
  var iniciocontrato = $("#modalVendedor .iniciocontrato").val();
  var fincontrato = $("#modalVendedor .fincontrato").val();
  var telp = $("#modalVendedor .telp").val();
  var tell = $("#modalVendedor .tell").val();
  var fnacimiento = $("#modalVendedor .fnacimiento").val();
 
$('#modalVendedor').modal('hide');


   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};
    addRegistro(json, 'empleados', loadVendedores);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}
function closeControlVehicular(){
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
  var km = $("#modalControlVehicular .km").val();
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
   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};
    addRegistro(json, 'empleados', loadAdministracion);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

}
function addfecha(){

var fecha = '<input type="date" class="form-control clear fecha selectfecha" >';
var dia = 
$(".fecha_hoy").html(fecha);

$('.imprimir').html('');
  }

function addVenta(){   
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcion").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  var vendedor=nombre_vend;
//alert(day2+" / "+month2+" / "+year2);
  
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
    //alert(noSemana);
    
     var diasema= new Date((parseInt(month2))+' '+parseInt(day2)+' ,'+parseInt(year2));
    dfc=(diasema.getUTCDay());
   // alert(dfc);
if(noSemana==52&&dfc==6){
    noSemana=52-1;
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
    noSemana=52-1;
   }
   if(noSemana==52){
    noSemana=0;
   }

    
     sc=noSemana+1;
    
  
    
   
   //sd=noSemana;
    //alert(sd);

  }else{
    saberSemana(parseInt(day2), (parseInt(month2)-1) ,parseInt(year2));
  var diasema= new Date(parseInt(day2), (parseInt(month2)) ,parseInt(year2));
   dc=(diasema.getUTCDay()-1);
  if(noSemana==52&&dc==6){
    noSemana=52-1;
   }
   if(noSemana==52){
    noSemana=0;
   } 
   
   sc=noSemana+1;
   dfc=dc;
   sfc=sc;
    //alert(noSemana+" no es igual");
  }
  dsfc=dfc;
  //alert(dsfc+" - "+dfc);
  
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
  
  var bonificacion_p = boni;
  var v_mercancia = parseFloat(total_mercancia) + parseFloat(valorMercancia);
  //alert(day2+" - "+month2+" - "+year2+(diasema.getUTCDay()-1));
    
  //alert(day2+" - "+month2+" - "+year2+" - "+dc+" -- "+sc);
    
      //alert(v_mercancia+" = "+total_mercancia+" + "+valorMercancia);                                                                 
  //alert(vendedor);
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc};
   addRegistro3(json, 'ventadiaria', loadVentas);
   var dsc= dc;
    //alert(dfc+" ---- "+sfc);
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta, dsc: dsc, sc: sc, fechaf: fechaf, dsfc: dsfc, sfc: sfc};
   

   //alert("num = "+num+" num 2 = "+num2);

  if(num==0 && num2==0){
   //alert("registrar ruta: "+rutas);
   //alert("add "+sc+" == "+sfc+" && "+dsfc+" == "+dfc+" && "+fechadespacho+" == "+fechadespachof);

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
 
 
 getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
  
limpiar();
    
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);
    

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
function delRuta(){
  var nombre = $(".nombre").val();


  if(nombre!= ""){
  delRegistro(idGlobal, 'rutas', loadRutas);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el usuario a eliminar.'); 
      $('#modal').modal('show');
 
}
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas);
limpiar();
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


function delVenta(){
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcionventa").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();

  if(idProducto != "" && descripcionventa != "" && piezas != ""){






  delRegistro(idGlobal,'ventadiaria', loadVentas);

   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);


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
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

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
    getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

limpiar();
}
/*-------------------- actualizar registro ------------------------*/
function upVendedor1(idV){
  addVendedormodal();
  selectVendedores(idV);

  var upVendedor1='<button type="button" class="btn btn-info addVendedor1" id="agregarp" onclick="upVendedor()">Guardar</button>'
$('#modalVendedor .addVendedor1').html(upVendedor1);

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
  var tipocontrato = $("#modalVendedor .tipocontrato").val();
  var iniciocontrato = $("#modalVendedor .iniciocontrato").val();
  var fincontrato = $("#modalVendedor .fincontrato").val();
  var telp = $("#modalVendedor .telp").val();
  var tell = $("#modalVendedor .tell").val();
  var fnacimiento = $("#modalVendedor .fnacimiento").val();
 
 
    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};


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
 

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento};


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

  var upControlVehicular1='<button type="button" class="btn btn-info addControlVehicular1" id="agregarp" onclick="upControlVehicular()">Guardar</button>'
$('#modalControlVehicular .addControlVehicular1').html(upControlVehicular1);

}
function upControlVehicular(){

$('#modalControlVehicular').modal('hide');


  var marca = $("#modalControlVehicular .marca").val();
  var noserie = $("#modalControlVehicular .noserie").val();
  var modelo = $("#modalControlVehicular .modelo").val();
  var tipo = $("#modalControlVehicular .tipo").val();
  var color = $("#modalControlVehicular .color").val();
  var combustible = $("#modalControlVehicular .combustible").val();
  var km = $("#modalControlVehicular .km").val();
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
var f_s_dia, fechaf;
function upRecepcion(){

var idc, creditos, otros,temp;
var piezasv, pesov, validar, dsd, sd;
var credito_manual=0;
   $(".totalVentas").html('');
var fecharecepcion=today_vv;

creditos=$(".creditos").val();
otros=$(".otros").val();

if(creditos!="" && otros !=""){


for (var i = 0; i < arrGlobalT.length; i++) {
 if(rutas==arrGlobalT[i].ruta &&arrGlobalT[i].dfc==dscv&&arrGlobalT[i].sfc==scv ){
//alert(dscv+"- semana= "+scv);
validar==1;
if(parseFloat(arrGlobalT[i].peso)==0){
piezasv= $('#rec'+i+'').val();
pesov=0;
//alert("("+parseInt(arrGlobalT[i].piezas)+"-"+piezasv+")*"+parseInt(arrGlobalT[i].precioUnitario));
venta=(parseInt(arrGlobalT[i].piezas)-parseInt(piezasv))*parseInt(arrGlobalT[i].precioUnitario);
var json1={piezasv: piezasv, venta: venta, fecharecepcion: fecharecepcion};
idc=arrGlobalT[i].id;
//suma2(venta, i);
upRegistro3(idc, json1, 'ventadiaria', loadVentasp);
//alert( t_v[i] +" = "+t_v2[i]);
s_vent+=t_v2[i];
}else{
pesov=$('#rec'+i+'').val();
piezasv=$('#p'+i+'').val();
//alert(piezasT[i]+"------");
venta=(parseInt(arrGlobalT[i].peso)-parseInt(pesov))*parseInt(arrGlobalT[i].precioUnitario);

//venta=(arrGlobalT[i].peso-pesov)*arrGlobalT[i].precioUnitario;
//alert(venta);
var json1={piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
idc=arrGlobalT[i].id;
//suma2(venta, i);

upRegistro3(idc, json1, 'ventadiaria', loadVentasp);
//alert( t_v[i] +" = "+t_v2[i]);
s_vent+=t_v2[i];

}
  }
 //alert(arrGlobalT[i].descripcionventa);
}
//alert(s_vent);
//creditos=$(".creditos").val();
//otros=$(".otros").val();
var  t_venta_merca = s_vent2;
//alert("modalc "+modalCreditos1);

 for(var m=0;m<arrGlobal4.length; m++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (arrGlobal4[m].dsfc==dscv&&arrGlobal4[m].ruta==rutas&&arrGlobal4[m].sfc==scv) {
  fechaf=arrGlobal4[m].fechaf;
  if(arrGlobal4[m].efectivo==null || arrGlobal4[m].efectivo==undefined || arrGlobal4[m].efectivo== NaN ){
//alert(scv);

      f_s_dia=otros-t_venta_merca; 
      $('.sumaefec').html('$ '+parseFloat(otros).toFixed(2));
//alert(f_s_dia + " -------"+t_venta_merca);
break;
  }else{
      f_s_dia=(parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros))-parseFloat(t_venta_merca); 
//alert("<<<<<>>>>>("+parseFloat(arrGlobal4[m].efectivo)+" + "+parseFloat(arrGlobal4[m].otros)+") - "+parseFloat(arrGlobal4[m].t_venta_merca)+" = "+f_s_dia);
     var suma = parseFloat(arrGlobal4[m].efectivo)+parseFloat(otros);
      $('.sumaefec').html('$ '+parseFloat(suma).toFixed(2));
//alert(f_s_dia + " -------otro");
break;
  }
}}
var mes=month-1;
var dia=day-1;
//alert(dia+" - "+mes+" - "+anio);
saberSemana(dia,mes,year);
//alert("fechaf"+fechaf);
var cobrado=noSemana;
var t_vendido = today;
dsd=today;
sd=noSemana+1;
//alert(f_s_dia+" -.-.-.-.-.-");
cobrado = cobrado +1;
var temp=today;
var loquedeberiatraer, f_s_real;
 
 var day3 = fechaf.substring(8,10);
 var month3 = fechaf.substring(5,7);
 var year3 = fechaf.substring(0,4);



var diasema3= new Date((parseInt(month3))+' '+parseInt(day3)+' ,'+parseInt(year3));
   var dia31=(diasema3.getUTCDay());
//alert("Hoy es: "+dia31+" -- "+fechaf);
//alert("modalc "+modalCreditos1);


if(dia31==1){

//alert("Hoy es lunes xD")

//alert (cobrado);

for(var h=0;h<arrGlobal4.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>'); 
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (arrGlobal4[h].id==id_vend) {
for(var hh=0;hh<arrGlobal4.length; hh++){
  //alert(arrGlobal4[hh].cobrado+" == "+(cobrado-1)+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+6+" == "+arrGlobal4[hh].t_venta);

if (arrGlobal4[hh].sc==(scv-1)&&arrGlobal4[hh].ruta==rutas&&6==arrGlobal4[hh].dsc) {
loquedeberiatraer=parseFloat(arrGlobal4[hh].creditos)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(creditos+" entraaaaaaaa");
 credito_manual=1;
 //alert(arrGlobal4[hh].creditos+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}
}
}
  }

}
if(credito_manual==0){
//Modal!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! creditos
modalCreditos2();

if(modalCreditos1!="F"){
//alert(modalCreditos1);
loquedeberiatraer=parseFloat(modalCreditos1)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(creditos+" entraaaaaaaa");
 credito_manual=1;
//alert(modalCreditos1+" - "+f_s_dia+" = "+ loquedeberiatraer);
//alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}


}
}



}else{

//alert("otro dia de la semana..."); 
//alert (arrGlobal4.length+" medida");
var med=arrGlobal4.length;
var hk=20;
var hhc=20;
//alert(id_vend+" id_vend");
for(var h=0;h<arrGlobal4.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>'); 
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
 // alert(arrGlobal4[h].id+" == "+id_vend);

if (arrGlobal4[h].id==id_vend) {//<--------------------------------------------------------------------------------------- here!
 //alert(creditos+" - "+otros+ " - "+id_vend+" sem "+ cobrado);
for(var hh=0;hh<arrGlobal41.length; hh++){
  //alert(arrGlobal4[hh].sc+" == "+cobrado+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+(t_vendido-1)+" == "+arrGlobal4[hh].t_venta);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////here change

if (arrGlobal41[hh].sfc==cobrado&&arrGlobal41[hh].ruta==rutas&&(dscv-1)==arrGlobal41[hh].dsfc) {
  //alert(arrGlobal4[hh].sfc+" == "+cobrado+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+(dscv-1)+" == "+arrGlobal4[hh].dsfc);
hk=20;
loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(arrGlobal4[hh].f_s_real);
 if(arrGlobal4[hh].loquedeberiatraer!=null){
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
credito_manual=1;
  //alert("entra");
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}
  break;
}else{
  $('#modal .textModal').html('La carga anterior, no ha sido recibida.'); 
      $('#modal').modal('show');

  modalCreditos1="F";
  break;
}
 

}else{
  if(arrGlobal41[hh].sfc==cobrado&&arrGlobal41[hh].ruta==rutas){
    hhc=hh;
    
   // alert("cobradooo: "+cobrado +" - dia: "+arrGlobal41[hh].dsfc+" dscv: "+dscv);
    
    
    for (var ii = dscv; ii <= dscv; ii--){
  //  alert(ii+" == "+arrGlobal41[hh].dsfc);
    if (ii==arrGlobal41[hh].dsfc&&ii!=dscv) {
//alert("ultimo dia con carga: "+ii);
  hk=30;
  if(arrGlobal41[hh].loquedeberiatraer!=null){
    loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}
  
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
    if(arrGlobal4[FF].sfc==scv&&arrGlobal4[FF].ruta==rutas&&arrGlobal4[FF].dsfc==6){
    //alert("se tomara el valor del credito sabado");
    hk=1;
    loquedeberiatraer=parseFloat(arrGlobal41[FF].creditos)-parseFloat(f_s_dia);
  f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
modalCreditos1=1;
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}
  
   
  }
  }
  if(hk==20){
  

   // alert("aun no ha sido cargado _ "+hk+" -- "+arrGlobal41[hhc].sfc+" -- "+scv+" -  "+arrGlobal41[hhc].dsfc);
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
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd}


}

  }




}
//alert(modalCreditos1);
  

if(modalCreditos1!="F"){
upRegistro3(id_vend, json2, 'ventaspasada', loadVentaspasadasTF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
s_vent=0;
s_vent2=0;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);

modalCreditos1="F";
}else{
  if(credito_manual==1){
upRegistro3(id_vend, json2, 'ventaspasada', loadVentaspasadasTF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
//alert(id_vend);
s_vent=0;
s_vent2=0;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);

credito_manual=0;
  }
}


}
else{
  $('#modal .textModal').html('Faltan datos.'); 
      $('#modal').modal('show');
}
t_venta_merca="";
}
//alert(day+" / "+ month+ " / "+year);
function agregarCredito(){
modalCreditos1=  $('#modalCreditos .creditos').val();
$('#modalCreditos').modal('hide');

upRecepcion();
}
function modalCreditos2(){
  $('#modalCreditos').modal('show');
  $('#modalCreditos .creditos').val('');

 
}
function upVenta(){

  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcionventa").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var ruta = rutas;
  var fecha = today_v;
  var precioUnitario, valorMercancia;
  var user ="YO";
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
    upRegistro(idGlobal, json, 'ventadiaria', loadVentas);
 getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);
    
  var id = id_vend;
  var idVentap = id_vend;
  var fecha = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var bonificacion_p = boni;
  var v_mercancia = total_mercancia-valor+valorMercancia;
  var json2 = {id: id, idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia};
 
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
 getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

}


/*----------------------- seleccionar en la tabla ------------------------*/
function u(){
    $('.guardau').html('');
    $('.eliminau').html('');

}
function selectUsuario(id){
  idGlobal = id;
  var guardau=' <button type="button" class="btn usuario1 modificar" onclick="upUsuario()">Guargar</button>';
  var eliminau = '<button type="button" class="btn usuario1 eliminar" onclick="delUsuario()">Eliminar</button>';
    


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
var guardau=' <button type="button" class="btn usuario1 modificar" onclick="upRuta()">Guargar</button>';
var eliminau = '<button type="button" class="btn usuario1 eliminar" onclick="delRuta()">Eliminar</button>';
     idGlobal=id;
    for(var a=0; a<arrGlobalRuta.length; a++){
     

    if(arrGlobalRuta[a].id == id){
            $(".nombre").val(arrGlobalRuta[a].nombre);
      $(".descripcion").val(arrGlobalRuta[a].descripcion);
     
    $('.guardar').html(guardau);
    $('.eliminar').html(eliminau);
    }
  }
}
function inv(){

$(".eliminari").html('');
$(".agregari").html('');
}
function selectInventario(id){
  idGlobal = id;
  var eliminari='<button type="button" class="btn botoninv eliminar" onclick="delInventario()">Eliminar</button>';
  var agregari='<button type="button" class="btn botoninv modificar" onclick="modalInventario()">Agregar inventario</button>';

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
      $(".eliminari").html(eliminari);
      $(".agregari").html(agregari);
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
      $("#modalControlVehicular .km").val(arrGlobalVehiculo[a].km);
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
    }
  }
}
function selectVendedores2(id){
  idGlobal = id;
  var textmodal;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
      textmodal='<div class="row ">';
      textmodal+='<div class="col-md-2 form-group ">';
      textmodal+='<label class="" ><strong>ID: </strong>  '+arrGlobal[a].idEmpleados+'</label></div>';
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
      textmodal+='<label class=""><strong>Teléfono Local:  </strong> '+arrGlobal[a].tell+'</label></div></div>';
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
      textmodal+='<div class="col-md-2 form-group ">';
      textmodal+='<label class="" ><strong>ID:</strong>  '+arrGlobal[a].idEmpleados+'</label></div>';
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
      textmodal+='<label class=""><strong>Teléfono Local: </strong>'+arrGlobal[a].tell+'</label></div></div>';
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

 for (var i = 0; i < arrGlobalE.length; i++) {
 //alert(arrGlobal4[i].id +" == "+id);
  var rutav ='<select class="form-control rv clear" id="rv" name="select">';
var conta=1;
var n_=0;

  if (arrGlobalE[i].id == id) { 
  var nombre = t_rutas[arrGlobalE[i].ruta]+' - '+arrGlobalE[i].nombre;
  //alert(nombre +" - "+arrGlobal4[i].efectivo);
      
  rutav += '<option id="'+arrGlobalE[i].id+'" value="'+arrGlobalE[i].id+'" >'+t_rutas[arrGlobalE[i].ruta-1]+' - '+arrGlobalE[i].nombre+'</option>';
n++;

for (var j = 0; j <  arrGlobalE.length; j++) {
  //alert(arrGlobal4[j].fecha+" == "+today_vv +" && "+ arrGlobal4[j].efectivo +" == null"+arrGlobal4[i].nombre);
   if(arrGlobalE[j].fecha==today_vv && arrGlobalE[j].efectivo==null ){
    
  rutav += '<option id="'+arrGlobalE[j].id+'" value="'+arrGlobalE[j].id+'" >'+t_rutas[arrGlobalE[j].ruta-1]+' - '+arrGlobalE[j].nombre+'</option>';
   conta++;
   }
}
rutav +='</select>';

//alert(rutav);
$("#modalEfectivo .selectCash").html(rutav);




  //$("#modalEfectivo #rv").val(nombre);
  $("#modalEfectivo .cash").val(arrGlobalE[i].efectivo);
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
     
    }
  }
}

function selectVentas(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso impre form-control clear peso" onchange="document.getElementById("add").focus();" placeholder="Kg.">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upVenta()">Guardar</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delVenta()">Eliminar</button>';
  var seleccionado;
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
function v(){
  $(".upventa").html('hide')
  $(".delventa").html('hide')
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
    alert("seleccione de la tabla un usuario");
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
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/usuarios.html');

 $('.tituloPantalla').html('<h3 class="inventario"> USUARIOS </h3>');

getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

}
function click_inventario(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 
 $('#contenido').load('/html/inventario.html');
 $('.tituloPantalla').html('<h3 class="inventario"> INVENTARIO </h3>');
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}

function click_ventas(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/ventas.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><input  type="text" class="form-control buscar text-rigth"  placeholder="BUSCAR"/><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1(); " role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion1(); ">RECEPCIÓN </button></li><div class="imprimir"></div></ul> </div>');




 
}
function click_empleados(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mEmpleados.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> EMPLEADOS </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="ocultar()">Notas </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_vendedores()" role="tab">Ventas</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_administracion()">Administración</button></li><div class="imprimir"></div></ul> </div>');
 
 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/


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
   
$('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

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

function click_Despacho(){
 
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/salida_venta.html');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><input  type="text" class="form-control buscar text-rigth"  placeholder="BUSCAR"/><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" disabled aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div></ul> </div>');
  
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
   
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

}else{
 today_v = fecha; 
 day2 = fecha.substring(8,10);
 month2 = fecha.substring(5,7);
 year2 = fecha.substring(0,4);
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+today_v+' )</p>');  
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

}
 function click_Recepcion1(){
      
      $('#modalPin2').modal('show');

}
function modal_VDiaria(){
  $('#modalVDiaria').modal('show');
}
function click_Recepcion(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion3').load('/html/rec_venta.html');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><input  type="text" class="form-control buscar text-rigth"  placeholder="BUSCAR"/><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div><div class="ventaDiaria"></div><div type="button" class="btn semanaRuta ventascss letras text-center" onclick="VentaspasadasRS()">Ruta Semanal</div><div type="button" class="btn semanaRuta ventascss letras text-center" onclick="">Unificar Recepción</div></ul> </div>');
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
   
$('.tituloPantalla').html('<h3 class="ventas impre"> RECEPCIÓN  </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

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

function click_Rutas(){
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
          map: map
        });
        map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
  });


        // This event listener will call addMarker() when the map is clicked.
        map.addListener('click', function(event) {
          addMarker(event.latLng);
        });

        // Adds a marker at the center of the map.
        addMarker(uluru)

 var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  document.getElementById('submit').addEventListener('click', function() {
    geocodeLatLng(geocoder, map, infowindow);
  });



      }
  function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);


   // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }
}



mapa = {
 map : false, 
 marker : false,

 initMap : function() {
 
 // Creamos un objeto mapa y especificamos el elemento DOM donde se va a mostrar.
 
 mapa.map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 24.033618, lng: -104.634402},
   scrollwheel: false,
   zoom: 14,
   zoomControl: true,
   rotateControl : false,
   mapTypeControl: true,
   streetViewControl: false,
 });
 
 // Creamos el marcador
 mapa.marker = new google.maps.Marker({
 position: {lat: 24.033618, lng: -104.634402},
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
// Mostramos las coordenadas obtenidas en el p con id coordenadas
var coordenada21 = "("+results[0].geometry.location.lat()+', '+results[0].geometry.location.lng()+")";
alert(coordenada21+" ---- "+umarcador);

addMarker(coordenada21);
   document.getElementById("coordenadas").innerHTML='Coordenadas:   '+results[0].geometry.location.lat()+', '+results[0].geometry.location.lng();
var marker = new google.maps.Marker({
          position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()},
          map: map

        });
// Posicionamos el marcador en las coordenadas obtenidas
  // mapa.marker.setPosition(results[0].geometry.location);
// Centramos el mapa en las coordenadas obtenidas
  // mapa.map.setCenter(mapa.marker.getPosition());
  // agendaForm.showMapaEventForm();
   }
  });
 }
 }
}


      // In the following example, markers appear when the user clicks on the map.
      // The markers are stored in an array.
      // The user can then click an option to hide, show or delete the markers.
      var map;
      var markers = [];
      var umarcador;
   

      // Adds a marker to the map and push to the array.
      function addMarker(location) {
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
        umarcador=location; //ultima localicacion al clickear
       // alert(umarcador);

      }

      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }

      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }

      // Shows any markers currently in the array.
      function showMarkers() {
        setMapOnAll(map);
      }

      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }
//////////////////////////////////////////////////////////////////////////////////////



function geocodeLatLng(geocoder, map, infowindow) {
 // var input = document.getElementById('latlng').value;
  //var input = umarcador;
 // var latlngStr = input.split(',', 2);
  var latlng = {
     umarcador
  };
  alert( umarcador);
  geocoder.geocode({
    'location': umarcador
  }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: umarcador,
          map: map
        });
        infowindow.setContent(results[1].place_id);
        infowindow.open(map, marker);
      } else {
        window.alert('No hay resultados');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////


function click_Mapa(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/clientes.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> CLIENTES </h3>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">MAPA</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Mapa();" role="tab">CLIENTES</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Rutas()">RUTAS</button></li><div class="imprimir"></div></ul> </div>');
 
 //7 alert("mapa!");
}

function click_mvehicular(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mVehiculat.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> VEHICULOS  </h3>');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="click_mvehicular()">Notificaciones</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_CVehicular()" role="tab">Control Vehicular</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">Mantenimiento</button></li><div class="imprimir"></div></ul> </div>');

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
  $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">1</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">2</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">3</button></li><div class="imprimir"></div></ul> </div>');
 

}

function click_nomina(){


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}

function click_reportes() {
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mReportes.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> REPORTES </h3>');
  $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">Ventas</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">Movimientos</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">Inventario</button><button href="#seccion4" aria-controls="seccion4" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">Clientes</button><button href="#seccion5" aria-controls="seccion5" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">M. Vehicular</button><button href="#seccion6" aria-controls="seccion6" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">Logística</button><button href="#seccion7" aria-controls="seccion7" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">Empleados</button><button href="#seccion8" aria-controls="seccion8" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">Usuarios</button></li><div class="imprimir"></div></ul> </div>');
 

}
function click_bitacoras(){
$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/mBitacoras.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> BITÁCORAS </h3>');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">1</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="" role="tab">2</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="">3</button></li><div class="imprimir"></div></ul> </div>');
 
getFunction('bitacoras', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadLogs);

}
function click_vendedores(){

$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menu </h3>');

 $('.seccion2').load('/html/vendedores.html');
 $('.tituloPantalla').html('<h3 class="vendedor"> VENDEDORES  </h3>');
// $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="ocultar()">Notas </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_vendedores()" role="tab">Ventas</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_administracion()">Administración</button></li><div class="imprimir"></div></ul> </div>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}
getFunction('rutas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadRutas1);

function click_administracion(){



 $('.seccion3').load('/html/administracion.html');

 $('.tituloPantalla').html('<h3 class="administracion">  ADMINISTRACIÓN   </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

}
function modalDespachador(){

      $('#modalDesp').modal('show');
      var selectdes= '<select name="select" class="selectDespachador col-md-8 form-control"><option value="0"></option>'
for(var h=0;h<arrGlobal2.length; h++)
    if(arrGlobal2[h].tipo!=2){
selectdes+= ' <option value="'+h+'">' +arrGlobal2[h].nombre_Emple + ' ' + arrGlobal2[h].paterno_Emple + ' ' + arrGlobal2[h].materno_Emple +'</option>';
    }
selectdes +='</select>';
$('#modalDesp .despachador').html(selectdes);
   


}
function click_Salida(id , h, ruta, tipo, credito, bonificaciones){
modalDespachador();
  

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

}
function closeModalDesp(){
$('#modalDesp').modal('hide');
}

function click_Salida2(){
 var despachadorV = $('#modalDesp .selectDespachador ').val();
   despachador = '<u style="width:100px;">'+ arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple+'. </u>';
if(despachadorV==0){
click_Despacho();
$('#modalDesp').modal('hide');

}else{
$('#modalDesp').modal('hide');
   $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion2').load('/html/venta.html');

   $('.tituloPantalla').html('<h3 class="vendedor impre"> VENTA </h3> <p>( '+today_v+' ) - Nombre: '+nombre_vend+'. Ruta: ' +ruta3+'. Tipo: '+t_ventas[t_vende-1]+ '. Credito: ' +cred+'. Bonificacion: '+boni+'. </p>');

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

}

}
function modalDespachador2(){

      $('#modalDesp2').modal('show');
      var selectdes= '<select name="select" class="selectDespachador col-md-8 form-control"><option value="0"></option>'
for(var h=0;h<arrGlobal2.length; h++)
    if(arrGlobal2[h].tipo!=2){
selectdes+= ' <option value="'+h+'">' +arrGlobal2[h].nombre_Emple + ' ' + arrGlobal2[h].paterno_Emple + ' ' + arrGlobal2[h].materno_Emple +'</option>';
    }
selectdes +='</select>';
$('#modalDesp2 .despachador').html(selectdes);
   


}

function click_Rec(id , h, ruta, tipo, credito, bonificaciones, fechacap, dsc, sc){
modalDespachador2()
 nombre_vend = arrGlobal4[h].nombre;
 id_vend=id;
 n_vend=h;
 rutas=ruta;
 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 fechacaptura=arrGlobal4[h].fechaf;
 dscv=dsc;
 scv=sc;


}
function closeModalDesp2(){
$('#modalDesp2').modal('hide');
}
function click_Rec2(){
 var despachadorV = $('#modalDesp2 .selectDespachador ').val();
   despachador = '<u style="width:100px;">'+ arrGlobal2[despachadorV].nombre_Emple + ' ' + arrGlobal2[despachadorV].paterno_Emple + ' ' + arrGlobal2[despachadorV].materno_Emple+'. </u>';
if(despachadorV==0){
click_Recepcion();
$('#modalDesp2').modal('hide');

}else{
$('#modalDesp2').modal('hide');



    var vDiaria ='<li role="presentation" class="impre" ><button href="" aria-controls="" class="btn btn-success impre totala" data-toggle="tab" role="tab" onclick="modal_VDiaria()">VENTA DIARIA </button></li>';
  
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion3').load('/html/recep.html');
 $('.tituloPantalla').html('<h3 class="vendedor impre"> RECEPCIÓN </h3> <p>( '+today_v+' ) - Nombre: '+nombre_vend+'. Ruta: ' +t_rutas[rutas-1]+'. Tipo: '+t_ventas[t_vende-1]+ '. Credito: ' +cred+'. Bonificacion: '+boni+'. </p>');

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
$('.ventaDiaria').html(vDiaria);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiaria);
}
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
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDiaRec);

}

function addEfectivo(){
var efectivo = $("#modalEfectivo .cash").val();
var rVendedor = $("#modalEfectivo .rv").val();
var fechacash = $("#modalEfectivo .today_E").val();
//alert(rVendedor+" - "+efectivo+" - "+dateCash2);


var f_s_dia;
 for(var m=0;m<arrGlobalE.length; m++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (arrGlobalE[m].fecha==today_v&&arrGlobalE[m].ruta==rutas) {

}}



//alert(fechacash);
for (var i = 0; i < arrGlobalE.length; i++) {
  

  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fecha==dateCash2 && arrGlobalE[i].fecha!=today_v){
   

     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){
//alert(f_s_dia +" null");
      f_s_dia=efectivo; 

  }else{
      f_s_dia=parseFloat(efectivo).toFixed(2)+parseFloat(arrGlobalE[i].otros).toFixed(2)-parseFloat(arrGlobalE[i].t_venta_merca).toFixed(2); 
//alert(f_s_dia+" else ------- "+efectivo+" +  "+arrGlobalE[i].otros+" - "+arrGlobalE[i].t_venta_merca);

  }
var json = {efectivo: efectivo, f_s_dia: f_s_dia};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp3);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp3);


  }
  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fecha==today_vv){
     if(arrGlobalE[i].otros==null || arrGlobalE[i].otros==undefined){

      f_s_dia=efectivo; 

  }else{
      f_s_dia=parseFloat(efectivo)+parseFloat(arrGlobalE[i].otros)-parseFloat(arrGlobalE[i].t_venta_merca); 

  }
var json = {efectivo: efectivo, f_s_dia: f_s_dia};

    //  alert("up: "+arrGlobalE[i].efectivo+" DateCompareTo: "+arrGlobalE[i].fecha+ " == "+dateCash2);
    upRegistro3(rVendedor, json, 'ventaspasada', loadVentasp2);
    
    getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp2);


  }
  
}
//arrGlobalE='';
// $('#modalEfectivo').modal('hide');


     limpiar();

     
}
/*-------------------- modales ----------------------*/

function modalDates(){
  $('#modalDateC').modal('show');
}
function addDateCash(){
dateCash2 = $("#modalDateC .dateVC").val();
if(dateCash2=="" || dateCash2 == today_v){
  dateCash2=fecha;
}
//alert(dateCash2);
$("#modalEfectivo .today_E").html(dateCash2);

getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp3);

$("#modalDateC").modal('hide');
limpiar();
}
function modalEfectivos(){

getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp2);

var rutav ='<select class="form-control rv clear" id="rv" name="select">';
var conta=1;
alert(today_vv);
for (var i = 0; i <  arrGlobalF.length; i++) {
   if(arrGlobalF[i].fecha==today_vv && arrGlobalF[i].efectivo==null ){
    rutav += '<option onclick="limpiar()" id="'+arrGlobalF[i].id+'" value="'+arrGlobalF[i].id+'" >'+t_rutas[arrGlobalF[i].ruta-1]+' - '+arrGlobalF[i].nombre+'</option>';
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
function closeEmpleado(){

      $('#modalAdministracion').modal('hide')

}
function closeVendedor(){

      $('#modalVendedor').modal('hide')

}
function closeModalPin2(){

      $('#modalPin2').modal('hide')

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
    var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso form-control clear peso impre" onchange="document.getElementById('+add+').focus();" placeholder="Kg.">';
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

function updateListaModalMedida(){
  var tipo = $("#modalInventario .tipo").val();

   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo)
       $("#modalInventario .medidaInv").val(medidas[arrGlobal[a].medida - 1]); 
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
    $('#modal .textModal').html('PIN incorrecto.'); 
    $('#modal').modal('show');
     click_ventas();
  }
    $("#modalPin2 .pin").val('');
     
}
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