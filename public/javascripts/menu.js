var arrGlobal, idGlobal, menu, today_v;

var tipoUsuario = ['Director','Administrador','Contador','Despachador','Vendedor']
var medidas = ['Kg.','Pzas.','L'];
var t_rutas = ['C1','C2','C3','C4','C5','C6','C7','C8'];
var t_ventas = ['Detalle','Mayoreo','Detalle Foraneo','Restaurantes'];
var t_Empleado = ['Ayudante General','Vendedor','Gerente de Ventas','Gerente de Operaciones','Supervisor','Administrador','Consejo'];
var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
$(document).ready(function(){
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
var fecha = "Hoy es " + day + " de " + months[month] + " del " + year;
var d = new Date();

/*
var d = new Date();
document.write('Fecha: '+d.getDate(),'<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),'<br>Año: '+d.getFullYear(),'<br>Hora: '+d.getHours(),'<br>Hora UTC: '+d.getUTCHours(),'<br>Minutos: '+d.getMinutes(),'<br>Segundos: '+d.getSeconds());
*/



/*--------------------- otros ------------------------------*/


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
   $('.btn-nav').html('<h3>Salir</h3>');

   $('#contenido').load(menu+'.html');
   $('.tituloPantalla').html('<h3> MENÚ </h3>');
 }
}
/*-------------------- cargar listas ---------------------------------*/
function loadUsuarios(lista){
  var html = '';
  for(var h=0;h<lista.length; h++){
    html+= '<tr class="seleccionar" onclick="selectUsuario('+ lista[h].idUsuario +')" data-id="'+ lista[h].idUsuario +'"><td>' + lista[h].usuario + '</td><td>' + lista[h].contrasenia + '</td><td>' + tipoUsuario[lista[h].tipo - 1] + '</td></tr>';
      $('.contCata').html('');
  $('.contCata').html(html);
  }
  arrGlobal = lista;
}
function loadInventarios(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    html+= '<tr class="seleccionar" onclick="selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + '</td><td>' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
  $('.contCata').html(html);
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
html+= '<tr class="seleccionar" onclick="click_Salida('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta - 1]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
    }
     $('.contCata').html(html);
  arrGlobal = lista;
}
function loadDays(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    if(lista[h].tipo==2){
html+= '<tr class="seleccionar" onclick="click_Salida('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + t_rutas[lista[h].ruta - 1]  + '</td><td>' + lista[h].nombre_Emple + '</td><td>' + lista[h].paterno_Emple + '</td><td>' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td>' + lista[h].l_credito + '</td><td>' + lista[h].l_bon + '</td></tr>';
    }
     $('.contCata').html(html);
  arrGlobal = lista;
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
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
 getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

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
  var tipo = $(".tipo").val();
  var json = {usuario: nombre, contrasenia: contrasenia, tipo: tipo};
  if(nombre != '' && contrasenia != '')
    upRegistro(idGlobal, json, 'usuarios', loadUsuarios);


  else{
     $('#modal .textModal').html('Seleccione de la tabla el usuario a modificar.'); 
      $('#modal').modal('show');
  }
  getFunction('usuarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadUsuarios);

}
/*----------------------- seleccionar en la tabla ------------------------*/
function selectUsuario(id){
  idGlobal = id;
  for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idUsuario == id){
      $(".nombre").val(arrGlobal[a].usuario);
      $(".contrasenia").val(arrGlobal[a].contrasenia);
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
       $(".ruta").val(arrGlobal[a].ruta);
       $(".tipoventa").val(arrGlobal[a].t_venta);
       $(".credito").val(arrGlobal[a].l_credito);
       $(".bonificacion").val(arrGlobal[a].l_bon);
       $(".merma").val(arrGlobal[a].merma);
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

/*-------------------- funciones globales -------------------------*/
function addRegistro(json, url, loadFuncion ){
    var mensajes = {success: "Registrado", error: "Ocurrio un error al insertar el registro", tipo: 'POST'};
    
  
    executeFunction(json, url, mensajes);

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
 $('.tituloPantalla').html('<h3 class="ventas"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');
 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);*/



}
function click_empleados(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/menuempleados.html');
 $('.tituloPantalla').html('<h3 class="ventas"> EMPLEADOS </h3>');
 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/


}
function click_salidaventa(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Venta </h3>');
 $('#contenido').load('/html/salida_venta.html');
 
var fecha = $(".selectfecha").val(); 
today_v = year+'-'+month+'-'+day;
alert(fecha+" "+today_v);
if( fecha == NaN || fecha == undefined || fecha == "" || fecha == today_v){
  /*alert(fecha+"hey");*/
   getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDays);
   
$('.tituloPantalla').html('<h3 class="ventas"> SALIDA </h3><p>( '+dias[today -1]+', '+day+' de '+months[month]+' del '+year+' )</p>');   
alert(today_v+"hey");
}else{
   today_v = fecha; 
$('.tituloPantalla').html('<h3 class="ventas"> SALIDA </h3><p>( '+today_v+' )</p>');  

alert(fecha+"hey");
}

}
function click_recepcionventa(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Venta </h3>');
 $('#contenido').load('/html/rec_venta.html');
 $('.tituloPantalla').html('<h3 class="ventas"> RECEPCIÓN  </h3>');
 /*getFunction('ventas', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/
$('#modal .textModal').html('Salida en construcción.'); 
      $('#modal').modal('show');

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

function click_Salida(id){
  
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menu </h3>');
 $('#contenido').load('/html/venta.html');
 $('.tituloPantalla').html('<h3 class="vendedor"> VENTA </h3> <p>( '+today_v+' ) - '+id+'</p>');

getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentadiaria);


}

/*-------------------- modales ----------------------*/
function modalEfectivos(){
$('#modal .textModal').html('Modulo en construcción.'); 
      $('#modal').modal('show');
      /*
      $('#modalEfectivo').modal('show')
*/
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

function updateListaModalMedida(){
  var tipo = $("#modalInventario .tipo").val();

   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo)
       $("#modalInventario .medidaInv").val(medidas[arrGlobal[a].medida - 1]); 
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