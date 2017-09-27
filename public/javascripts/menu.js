var arrGlobal, idGlobal, menu;

var tipoUsuario = ['Director','Administrador','Contador','Despachador','Vendedor']
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
function click_regresar(){
 //$('.btnMenu').addClass('hidden');
 var htm = $('.btn-nav').html();
 if(htm == 'Salir'){
  alert("saliendo");
    click_cerrarSesion();
 }
 else{
   $('.btn-nav').html('Salir');

   $('#contenido').load(menu+'.html');
   $('.tituloPantalla').html('<h3> ────── MENÚ ────── </h3>');
 }
}
/*-------------------- Click a los diferentes menu -------------------*/

function click_inventario(){
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/inventario.html');
 $('.tituloPantalla').html('<h3 class="inventario"> ────── INVENTARIO ────── </h3>');
 /*getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarios);
*/
}
/*-------------------- modales ----------------------*/
function modalInventario(){
      $('#modalInventario').modal('show');
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