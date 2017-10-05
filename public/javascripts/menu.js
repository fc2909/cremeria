var arrGlobal, idGlobal, menu;

var tipoUsuario = ['Director','Administrador','Contador','Despachador','Vendedor']
var medidas = ['Kg.','Pzas.','L'];
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
  for(var h=0;h<lista.length; h++)
    html+= '<tr class="seleccionar" onclick="selectUsuario('+ lista[h].idUsuario +')" data-id="'+ lista[h].idUsuario +'"><td>' + lista[h].usuario + '</td><td>' + lista[h].contrasenia + '</td><td>' + tipoUsuario[lista[h].tipo - 1] + '</td></tr>';
  $('.contCata').html(html);
  arrGlobal = lista;
}
function loadInventarios(lista){
  var html = '';
  
  for(var h=0;h<lista.length; h++)
    html+= '<tr class="seleccionar" onclick="selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + '</td><td>' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
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
}

/*------------------- limpiar funciones --------------------------*/
function limpiar(){
  $(".clear").val("");
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

  delRegistro(idGlobal, 'inventarios', loadInventarios);
}else {
   $('#modal .textModal').html('Seleccione de la tabla el producto a eliminar.'); 
      $('#modal').modal('show');
 
}
}
/*-------------------- actualizar registro ------------------------*/
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
    if(arrGlobal[a].idInventario == id){
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
 /*getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/
}
function click_inventario(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/inventario.html');
 $('.tituloPantalla').html('<h3 class="inventario"> INVENTARIO </h3>');
 getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);

}
/*-------------------- modales ----------------------*/
function modalEfectivos(){

      $('#modalEfectivo').modal('show')
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
  var tipo = $("#modalInventario .descripcionInventario").val();

   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].descripcion == tipo)
      alert(tipo);
       $("#modalInventario .medidaInv").val(medidas[arrGlobal[a].medida-1]); 
    }
}

function closeModalInventario(){
      $('#modalInventario').modal('hide');
      limpiar();

}
function closeModalInventario2(lista){
      getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
      limpiar();
      $('#modalInventario').modal('hide');
            
}
function agregarCantidad(){
       var data = {descripcion: $("#modalInventario .descripcionInventario").val(),
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
        
      //alert(json);
      //document.documentElement.innerHTML = json;
      console.log(json);
    },    

    error : function(xhr, status) {  
         
      $('#modal').modal('show');
    },    
    complete : function(xhr, status) {        
    }});
}