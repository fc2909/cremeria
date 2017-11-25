var arrGlobal, arrGlobalVF, arrGlobalE, t_merc , valor, dateCash2 , precio_p, idGlobal, idGlobal2, idGlobal4, t_vende, rutas, idGlobal2, menu, today_v, nombre_vend, id_vend, n_vend, cred, boni ;
 var total_mercancia=0;
 var historial=0;
 var s_vent=0;
 var s_vent2=0;
 var n, w, noSemana;
 var upin, pin;
 var t_v;
 var t_v2; 
 var piezasT; 
var user;
var tipoUsuario = ['Director','Administrador','Contador','Despachador','Vendedor']
var medidas = ['Kg.','Pzas.','L'];
var t_rutas = ['C1','C2','C3','C4','C5','C6','C7','C8'];
var t_ventas = ['Detalle','Mayoreo','Detalle Foraneo','Restaurantes'];
var t_Empleado = ['Ayudante General','Vendedor','Gerente de Ventas','Gerente de Operaciones','Supervisor','Administrador','Consejo'];
var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
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
noSemana=semanas;
}
//saberSemana(25,10,2017);


function makeArray() {
for (i = 0; i<makeArray.arguments.length; i++)
this[i + 1] = makeArray.arguments[i];
}

  var months = new makeArray('Enero','Febrero','Marzo','Abril','Mayo',
'Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
var date = new Date();
var today = date.getDay();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
var fecha =  day + " de " + months[month] + " del " + year;
var d = new Date();
if(day.length == 1){
  day = "0"+day;
  //alert(dia);
}
if(month.length == 1){
  month = "0"+month;
  //alert(dia);
}
//alert(today);
var today_vv = year+"-"+month+"-"+day; 
dateCash2 = today_vv;
/*
var d = new Date();
document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Hora UTC: '+d.getUTCHours(),'<br>Minutos: '+d.getMinutes(),'<br>Segundos: '+d.getSeconds());
*/



/*--------------------- otros ------------------------------*/


function pagare(){
  var pagare = '<font size=1 class="text-center">YO '+ nombre_vend+' POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA '+today_v+' LA CANTIDAD DE $ '+total_merc+' ESTE PAGARE CAUSARA EL ____ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO</font><br><br><h6 class="text-center">___________________________________________</h6><font size=1>'+nombre_vend+'.</font>';

$('.pagare').html(pagare);

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
    html+= '<tr class="seleccionar" onclick="selectUsuario('+ lista[h].idUsuario +')" data-id="'+ lista[h].idUsuario +'"><td>' + lista[h].usuario + '</td><td>' + lista[h].contrasenia +'</td><td>' + lista[h].pin +'</td><td>' + tipoUsuario[lista[h].tipo - 1] + '</td></tr>';
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
    html+= '<tr class="seleccionar" onclick="selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + '</td><td>' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
  $('.contCata').html(html);
  arrGlobal = lista;
}

function loadInventarioVenta(lista){
  arrGlobal = lista;
}

function loadVendedores(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
html+= '<tr class="seleccionar" onclick="selectVendedores('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idEmpleados + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + lista[h].n_seguro + '</td><td>' + lista[h].curp + '</td><td>' + lista[h].domicilio  + '</td><td>' + lista[h].rfc + '</td><td>' +  lista[h].n_licencia + '</td><td>' + lista[h].f_exp + '</td><td>' + t_rutas[lista[h].ruta - 1] + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td><td>' + lista[h].merma +'</td></tr>';
    }
     $('.contCata').html(html);
  arrGlobal = lista;
}


function loadAdministracion(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo != 2){
html+= '<tr class="seleccionar" onclick="selectAdministracion('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idEmpleados + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + lista[h].n_seguro + '</td><td>' + lista[h].curp + '</td><td>' + lista[h].domicilio  + '</td><td>' + lista[h].rfc + '</td><td>' + t_Empleado[lista[h].tipo-1] + '</td></tr>';
    }
     $('.contCata').html(html);
  arrGlobal = lista;
}

function loadVentasF(lista){
  valor =0;
  var total=0;
  var totalV;
  for(var h=0;h<lista.length; h++){
 if(rutas==lista[h].ruta && today_v == lista[h].fechadespacho){


if(parseFloat(lista[h].peso)==0){
  $('#rec'+h+'').val(lista[h].piezasv);
  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert(lista[h].piezasv);
t_v2[h]=parseInt(lista[h].valorMercancia);
total = total+valor;
}else{
  $('#p'+h+'').val(lista[h].piezasv);
  $('#rec'+h+'').val(lista[h].pesov);
//alert(lista[h].pesov);
valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
  //suma2(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
//alert(lista[h].piezasv);
t_v2[h]=parseInt(lista[h].valorMercancia);

total = total+valor;
//alert(total+" - "+valor);

}
  }
    }
arrGlobalVF = lista;
s_vent2=0;
  totalV = ' <h3 class="letras">VENTA TOTAL: $ '+(total).toFixed(2)+'</h3>';
   $(".totalVentas").html(totalV);
 
}


function loadVentas(lista){
  var html = '';
  total_merc =0;
  var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare(); window.print();"  >IMPRIMIR</button></li>';
 var num=0;
  for(var h=0;h<lista.length; h++){
   // alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(rutas==lista[h].ruta && today_v == lista[h].fechadespacho){
html+= '<tr class="seleccionar" onclick="selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
  total_merc = total_merc + parseFloat(lista[h].valorMercancia);
      
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
  var total = ' <h3 class="letras">TOTAL: $ '+total_merc.toFixed(2)+'</h3>';
    $(".totalVenta").html(total);
      $('.imprimir').html(imprimir);

}
function totalrec(h,piezas,pUnitario,rec){
  var piezas1 = $('#rec'+h+'').val();

  
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

suma(valor, h);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
}
function totalrec2(h,peso,pUnitario,rec){
  var peso1 = $('#rec'+h+'').val();
  var pieza1 = $('#p'+h+'').val();
 
  
  //var rec = document.getElementById(rec1).val();
  if(peso1==undefined){
    peso1=0;
    //$('#rec'+h+'').val(peso1);
  }
  valor = (peso-peso1)*pUnitario;
  //alert(piezas+" - "+piezas1 +" * "+pUnitario+" = "+valor);
t_v[h]=peso1;
piezasT[h]=pieza1;

//alert("valor = "+t_v2[h]);
suma(valor, h, rec);
  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));


 }

function suma(valor, r, f){
  
  var totales;
  
t_v2[r]=valor;
 //s_vent += +valor;

  for(var h=0;h<t_v2.length; h++){
    if(t_v2[h]==undefined || t_v2[h]==NaN){
      t_v2[h]=0;
    // $('#rec'+h+'').val(t_v2[h]);
   }
 //alert("N"+f+". suma = "+s_vent +" + "+ t_v2[h]+" = "+(s_vent+t_v2[h]));
  s_vent += +t_v2[h];
}
//alert(t_v2.length);
  totales = ' <h3 class="letras">VENTA TOTAL: $ '+(s_vent).toFixed(2)+'</h3>';
  s_vent=0;
    
    $(".totalVentas").html(totales);
    
    
}
function suma2(valor1, r){
  arrGlobalVF
  var totales;
  //alert(s_vent2);
//t_v2[r]=valor;
 //s_vent += +valor;

s_vent2 += +valor1;
  

  //totales = ' <h3 class="letras">VENTA TOTAL: $ '+(s_vent2).toFixed(2)+'</h3>';

    
    //$(".totalVentas").html(totales);
  
    
}
function loadVentasr(lista){
var v=0;
  var html = '';
  total_vent =0;
  var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="window.print();"  >IMPRIMIR</button></li>';
  var cantidad=0;
  for(var h=0;h<lista.length; h++){
    //alert(rutas +"=="+ lista[h].ruta +"&&"+ today_v+" == "+lista[h].fecha);
    //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  if(rutas==lista[h].ruta && today_v == lista[h].fechadespacho){

if(parseFloat(lista[h].peso)==0){
html+= '<tr class="seleccionar" data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td></td><td> <input type="text"  class="form-control clear " id="rec'+h+'" placeholder="#" onchange="totalrec('+h+', '+lista[h].piezas+', '+lista[h].precioUnitario+', '+v+')">' + '</td><td>  ' + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td>  <div id="'+h+'"> $ 0.00</div></td></tr>';
//t_v.push(h);
v++;
}else{
html+= '<tr class="seleccionar" data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3)+ '</td><td> ' + '<input type="text" id="p'+h+'" class="form-control clear" placeholder="#" >' + '</td><td>  ' + '<input type="text"  class="form-control clear " id="rec'+h+'" placeholder="#" onchange="totalrec2('+h+', '+lista[h].peso+', '+lista[h].precioUnitario+','+v+')">'  + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td><div id="'+h+'"> $ 0.00</div></td></tr>';
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
    //alert(t_v2.length);
     $('.contCata').html(html);
   
  arrGlobalT = lista;

     $('.imprimir').html(imprimir);

}

function loadVentasp(lista){

  arrGlobal4 = lista;
  
}
function loadVentasp4(lista){

  arrGlobalF = lista;

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
if (lista[h].fecha==today_v&&lista[h].id==id_vend) {
  //alert("hey ----");

  $('.creditos').val(lista[h].creditos);
  $('.otros').val(lista[h].otros);
}


    }

    
}


function loadVentasp3(lista){
  var html = '';
  arrGlobalE='';

  for(var h=0;h<lista.length; h++)
    if(lista[h].fecha == dateCash2 && lista[h].efectivo != null){
html+= '<tr class="seleccionar"  onclick="selectEV('+lista[h].id+');"  data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].efectivo +'</td></tr>';

    }

    // $('#modalEfectivo contCataModal').html('hide');

     $('#modalEfectivo .contCataModal').html(html);
  arrGlobalE = lista;
  arrGlobalF = lista;

}

function loadVentaspasadas(lista){
  var html2 = '';

  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (lista[h].fecha==today_v) {
  html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>';

}


    }

     $('.contCata').html(html2);

  arrGlobal4 = lista;
}

function loadVentaspasadasTF(lista){
  var html2 = '';

  for(var h=0;h<lista.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (lista[h].fecha==today_v&&lista[h].ruta==rutas) {
  html2+= '<tr class="seleccionar"  data-id="'+ lista[h].id +'"><td>' + lista[h].creditos + '</td><td>' + lista[h].f_s_dia + '</td><td>' + lista[h].loquedeberiatraer + '</td><td>'+lista[h].f_s_real + '</td></tr>';

}


    }

     $('.contCata2').html(html2);

  arrGlobal4 = lista;
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

function loadSalida(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
html+= '<tr class="seleccionar" onclick="click_Salida('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
    }
     $('.contCata').html(html);
  arrGlobal = lista;
}

function loadDays(lista){
  var html = '';

  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
 
html+= '<tr class="seleccionar text-center" onclick="click_Salida('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].t_venta+', '+lista[h].l_credito + ', ' + lista[h].l_bon +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta - 1]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
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
  var tipo = $(".tipo").val();

  if(nombre!= "" && contrasenia != "" && tipo != ""){

    var json = {usuario: nombre, contrasenia: contrasenia, tipo: tipo};
      
    addRegistro(json, 'usuarios', loadUsuarios);
     

  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

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

function addVendedor(){
  var idEmpleados = $(".idVendedor").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();
  var n_licencia = $(".n_licencia").val();
  var f_exp = $(".f_licencia").val();
  var ruta = $(".rutavende").val();
  var t_venta = $(".tipoventa").val();
  var l_credito = $(".credito").val();
  var l_bon = $(".bonificacion").val();
  var merma = $(".merma").val();
 


   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma};
    addRegistro(json, 'empleados', loadVendedores);
  }
  else{

      $('#modal .textModal').html('Faltan Datos.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}

function addEmpleado(){
  var idEmpleados = $(".idEmpleado").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();
  var n_licencia = $(".n_licencia").val();
  var f_exp = $(".f_licencia").val();
  var ruta = $(".rutavende").val();
  var t_venta = $(".tipoventa").val();
   
  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta};
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
$(".fecha_hoy").html(fecha);
$('.imprimir').html('');
  }

function addVenta(){   
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcion").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
  
  var hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var horadespacho = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds(); 
  var empleado = id_vend;
  var fecha = today_v;
  var num = 0;
  var num2 = 0;
  var t_venta=today;
  var precioUnitario, valorMercancia,medida, bonificacion, credito;
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

        if(arrGlobal4[i].ruta==rutas && arrGlobal4[i].fecha==today_v && num2 == 0 ){
     
     //          alert(arrGlobal4[i].ruta+" == "+rutas+" - "+arrGlobal4[i].fecha+"=="+today_v);
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
  var fecha = today_v;
  var fechadespacho = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var bonificacion_p = boni;
  var v_mercancia = total_mercancia+valorMercancia;
                                                                       
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user };
   addRegistro3(json, 'ventadiaria', loadVentas);
   
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta};
   

   //alert("num = "+num+" num 2 = "+num2);

  if(num==0 && num2==0){
   //alert("registrar ruta: "+rutas);
   addRegistro2(json2, 'ventaspasada', loadVentasp);
//click_Salida(id_vend , n_vend, ruta, tipo, credito_p, bonificacion_p)
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

num2=1;
  }else{
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

function delVendedor(){
  var idEmpleados = $(".idVendedor").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();
  var n_licencia = $(".n_licencia").val();
  var f_exp = $(".f_licencia").val();
  var ruta = $(".rutavende").val();
  var t_venta = $(".tipoventa").val();
   
 
  

  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){


  delRegistro(idGlobal,'empleados', loadVendedores);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

limpiar();
}

function delEmpleado(){
  var idEmpleados = $(".idEmpleado").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();

 
  

  if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){


  delRegistro(idGlobal,'empleados', loadAdministracion);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el empleado a eliminar.'); 
      $('#modal').modal('show');
 
}
 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

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
  var fecha = today_v;
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
 
  if(parseInt(arrGlobal4[j].ruta)==parseInt(rutas) && arrGlobal4[j].fecha==today_v && v_mercancias==0){
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
function upVendedor(){
  var idEmpleados = $(".idVendedor").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();
  var n_licencia = $(".n_licencia").val();
  var f_exp = $(".f_licencia").val();
  var ruta = $(".rutavende").val();
  var t_venta = $(".tipoventa").val();
  var l_credito = $(".credito").val();
  var l_bon = $(".bonificacion").val();
  var merma = $(".merma").val();
   
    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma};


 if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    upRegistro(idGlobal, json, 'empleados', loadVendedores);
    
  }
  else{

       $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}

function upEmpleado(){
  var idEmpleados = $(".idEmpleado").val();
  var nombre_Emple = $(".nombre").val();
  var paterno_Emple = $(".a_paterno").val();
  var materno_Emple = $(".a_materno").val();
  var n_seguro = $(".n_seguro").val();
  var curp = $(".curp").val();
  var domicilio = $(".domicilio").val();
  var rfc = $(".rfc").val();
  var tipo = $(".tipoempleado").val();

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo};


 if(idEmpleados != "" && nombre_Emple != "" && paterno_Emple != "" && materno_Emple != "" && n_seguro != "" && curp != "" && domicilio != "" && rfc != "" && tipo != ""){

    upRegistro(idGlobal, json, 'empleados', loadAdministracion);
    
  }
  else{

       $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

}

function upUsuario(){
  var nombre = $(".nombre").val();
  var contrasenia = $(".contrasenia").val();
  var pin = $(".pin").val();
  var tipo = $(".tipo").val();
  var json = {usuario: nombre, contrasenia: contrasenia, pin: pin, tipo: tipo};
  if(nombre != '' && contrasenia != '')
    upRegistro(idGlobal, json, 'usuarios', loadUsuarios);


  else{
     $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
  getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

}
function upRecepcion(){
var idc, creditos, otros,temp;
var piezasv, pesov, validar
   $(".totalVentas").html('hide');
var fecharecepcion=today_vv;
for (var i = 0; i < arrGlobalT.length; i++) {
 if(rutas==arrGlobalT[i].ruta && today_v == arrGlobalT[i].fechadespacho){
validar==1;
if(parseFloat(arrGlobalT[i].peso)==0){
piezasv= $('#rec'+i+'').val();
//alert("("+parseInt(arrGlobalT[i].piezas)+"-"+piezasv+")*"+parseInt(arrGlobalT[i].precioUnitario));
venta=(parseInt(arrGlobalT[i].piezas)-parseInt(piezasv))*parseInt(arrGlobalT[i].precioUnitario);
var json1={piezasv: piezasv, venta: venta, fecharecepcion: fecharecepcion};
idc=arrGlobalT[i].id;
suma2(venta, i);
upRegistro3(idc, json1, 'ventadiaria', loadVentasp);
//alert( t_v[i] +" = "+t_v2[i]);
s_vent+=t_v2[i];
}else{
pesov=$('#rec'+i+'').val();
piezasv=piezasT[i];
//alert(piezasT[i]+"------");
venta=(arrGlobalT[i].peso-pesov)*arrGlobalT[i].precioUnitario;
//alert(piezasv);
var json1={piezasv: piezasv, pesov: pesov, venta: venta, fecharecepcion: fecharecepcion};
idc=arrGlobalT[i].id;
suma2(venta, i);

upRegistro3(idc, json1, 'ventadiaria', loadVentasp);
//alert( t_v[i] +" = "+t_v2[i]);
s_vent+=t_v2[i];

}
  }
 //alert(arrGlobalT[i].descripcionventa);
}
//alert(s_vent);
creditos=$(".creditos").val();
otros=$(".otros").val();
var t_venta_merca = s_vent2;
var f_s_dia;

 for(var m=0;m<arrGlobal4.length; m++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>');
  
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (arrGlobal4[m].fecha==today_v&&arrGlobal4[m].ruta==rutas) {
  if(arrGlobal4[m].efectivo==null || arrGlobal4[m].efectivo==undefined){

      f_s_dia=parseInt(arrGlobal4[m].otros); 
//alert(f_s_dia);
  }else{
      f_s_dia=(parseInt(arrGlobal4[m].efectivo)+parseInt(arrGlobal4[m].otros))-parseInt(arrGlobal4[m].t_venta_merca); 
//alert(f_s_dia);

  }
}}
var mes=month-1;
var dia=day-1;
alert(mes);
saberSemana(dia,mes,year);

var cobrado=noSemana;
var t_vendido = today;
cobrado = cobrado +1;
if(t_vendido==1){



alert("Hoy es lunes xD")

alert (cobrado);


}else{
alert("otro dia de la semana..."); 
alert (cobrado);
}

//alert(creditos+" - "+otros);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido}
upRegistro3(id_vend, json2, 'ventaspasada', loadVentaspasadasTF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);

s_vent=0;
//getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);

}
//alert(day+" / "+ month+ " / "+year);

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
function selectUsuario(id){
  idGlobal = id;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idUsuario == id){
      $(".nombre").val(arrGlobal[a].usuario);
      $(".contrasenia").val(arrGlobal[a].contrasenia);
      $(".pin").val(arrGlobal[a].pin);
      $(".tipo").val(arrGlobal[a].tipo);
    }
  }
}

function selectInventario(id){
  idGlobal = id;

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
    }
  }
}

function selectVendedores(id){
  idGlobal = id;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
       $(".idVendedor").val(arrGlobal[a].idEmpleados);
       $(".nombre").val(arrGlobal[a].nombre_Emple);
       $(".a_paterno").val(arrGlobal[a].paterno_Emple);
       $(".a_materno").val(arrGlobal[a].materno_Emple);
       $(".n_seguro").val(arrGlobal[a].n_seguro);
       $(".curp").val(arrGlobal[a].curp);
       $(".domicilio").val(arrGlobal[a].domicilio);
       $(".rfc").val(arrGlobal[a].rfc);
   
       $(".n_licencia").val(arrGlobal[a].n_licencia);
       $(".f_licencia").val(arrGlobal[a].f_exp);
       $(".rutavende").val(arrGlobal[a].ruta);
       $(".tipoventa").val(arrGlobal[a].t_venta);
       $(".credito").val(arrGlobal[a].l_credito);
       $(".bonificacion").val(arrGlobal[a].l_bon);
       $(".merma").val(arrGlobal[a].merma);
    }
  }
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
function selectAdministracion(id){
  idGlobal = id;

  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].id == id){
       $(".idEmpleado").val(arrGlobal[a].idEmpleados);
       $(".nombre").val(arrGlobal[a].nombre_Emple);
       $(".a_paterno").val(arrGlobal[a].paterno_Emple);
       $(".a_materno").val(arrGlobal[a].materno_Emple);
       $(".n_seguro").val(arrGlobal[a].n_seguro);
       $(".curp").val(arrGlobal[a].curp);
       $(".domicilio").val(arrGlobal[a].domicilio);
       $(".rfc").val(arrGlobal[a].rfc);
       $(".tipoempleado").val(arrGlobal[a].tipo);
     
    }
  }
}

function selectVentas(id, valorM){
  idGlobal = id;
  var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso impre form-control clear peso" onchange="document.getElementById("add").focus();" placeholder="Kg.">';

  for(var a=0; a<arrGlobal3.length; a++){
    if(arrGlobal3[a].id == id){
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
}}

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
 $('#contenido').load('/html/menuempleados.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> EMPLEADOS </h3>');
 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/


}
function click_salidaventa(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/salida_venta.html');
 
var fecha = $(".selectfecha").val(); 
today_v = year+'-'+month+'-'+day;

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
function click_Despacho1(){
      $('#modalPin').modal('show');

}

function click_Despacho(){
 
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/salida_venta.html');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><input  type="text" class="form-control buscar text-rigth"  placeholder="BUSCAR"/><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" disabled aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div></ul> </div>');
  
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
  /*alert(fecha+"hey");*/
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

}else{
   today_v = fecha; 
$('.tituloPantalla').html('<h3 class="ventas impre"> DESPACHO </h3><p>( '+today_v+' )</p>');  
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasp);

}
 function click_Recepcion1(){
      $('#modalPin2').modal('show');

}
function click_Recepcion(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion3').load('/html/rec_venta.html');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><input  type="text" class="form-control buscar text-rigth"  placeholder="BUSCAR"/><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div></ul> </div>');

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
  //alert(fecha+"hey");
   getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
   
$('.tituloPantalla').html('<h3 class="ventas impre"> RECEPCIÓN  </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   

}else{
   today_v = fecha; 
$('.tituloPantalla').html('<h3 class="ventas impre"> RECEPCIÓN  </h3><p>( '+today_v+' )</p>');  
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
   
}
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadas);
$('.imprimir').html('');

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


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}

function click_mvehicular(){


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}

function click_logistica(){


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}

function click_nomina(){


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}

function click_reportes() {


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}
function click_bitacoras(){


$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');

}
function click_vendedores(){

$('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menu </h3>');
 $('#contenido').load('/html/vendedores.html');
 $('.tituloPantalla').html('<h3 class="vendedor"> VENDEDORES  </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVendedores);

}
function click_administracion(){



 $('#contenido').load('/html/administracion.html');

 $('.tituloPantalla').html('<h3 class="administracion">  ADMINISTRACIÓN   </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

}

function click_Salida(id , h, ruta, tipo, credito, bonificaciones){
  
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion2').load('/html/venta.html');
 nombre_vend = arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
 id_vend=id;
 n_vend=h;
 rutas=ruta;
 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 $('.tituloPantalla').html('<h3 class="vendedor impre"> VENTA </h3> <p>( '+today_v+' ) - Nombre: '+arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple+'. Ruta: ' +t_rutas[ruta-1]+'. Tipo: '+t_ventas[tipo-1]+ '. Credito: ' +credito+'. Bonificacion: '+bonificaciones+'. </p>');

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);

}

function click_Rec(id , h, ruta, tipo, credito, bonificaciones){
  
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion3').load('/html/recep.html');
 nombre_vend = 0;//arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
 id_vend=id;
 n_vend=h;
 rutas=ruta;
 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 $('.tituloPantalla').html('<h3 class="vendedor impre"> RECEPCIÓN </h3> <p>( '+today_v+' ) - Nombre: '+0+'. Ruta: ' +t_rutas[ruta-1]+'. Tipo: '+t_ventas[tipo-1]+ '. Credito: ' +credito+'. Bonificacion: '+bonificaciones+'. </p>');

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);

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
//alert(f_s_dia);
      f_s_dia=efectivo; 

  }else{
      f_s_dia=parseInt(efectivo)+parseInt(arrGlobalE[i].otros)-parseInt(arrGlobalE[i].t_venta_merca); 
//alert(f_s_dia);

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
      f_s_dia=parseInt(efectivo)+parseInt(arrGlobalE[i].otros)-parseInt(arrGlobalE[i].t_venta_merca); 

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
      if(data==upin[h].pin){
        closeModalPin();
        pin=upin[h].pin;

        click_Despacho();

        data=0;
      }
  }

  if(data!=0){
    closeModalPin();
    $('#modal .textModal').html('PIN incorrecto.'); 
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