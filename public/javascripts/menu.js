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
function ninguno(){
    var combustible2='';
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gasolinaygas(){
    var combustible2=' <label for="">KMS:</label><input type="text" class="col-md-12 km1"><label for="">GASOLINA (L)</label><input type="text" class="col-md-12 gasolina1"><label for="">GAS (L)</label><input type="text" class="col-md-12 gas1">';
        tipoCombustible=3;
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gas2(){
    var combustible2=' <label for="">KMS:</label><input type="text" class="col-md-12 km1"><label for="">GAS (L)</label><input type="text" class="col-md-12 gas1">';
        tipoCombustible=2
        $('#modalDesp2 .combustible2').html(combustible2);
}
function gasolina2(){
    var combustible2=' <label for="">KMS:</label><input type="text" class="col-md-12 km1"><label for="">GASOLINA (L)</label><input type="text" class="col-md-12 gasolina1">';
        tipoCombustible=1
        $('#modalDesp2 .combustible2').html(combustible2);
}
function diesel2(){
    var combustible2=' <label for="">KMS:</label><input type="text" class="col-md-12 km1"><label for="">DIESEL (L)</label><input type="text" class="col-md-12 diesel1">';
        tipoCombustible=4
        $('#modalDesp2 .combustible2').html(combustible2);
}
function makeArray() {
    for (i = 0; i<makeArray.arguments.length; i++)
        this[i + 1] = makeArray.arguments[i];
}



/*--------------------- otros ------------------------------*/
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
        usuario="CAPTURISTA: <u> "+ upin[h].usuario+". </u>";
      }
  }
        formatNumber(parseFloat(total_merc));
        document.getElementById('oculto').style.display = 'block';
        document.getElementById('oculto2').style.display = 'block';
        document.getElementById('oculto3').style.display = 'block';
        document.getElementById('oculto4').style.display = 'block';
        document.getElementById('oculto5').style.display = 'block';
        document.getElementById('oculto6').style.display = 'block';
        document.getElementById('oculto7').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
            
    var nombreVendedor = "RUTA _<u>"+ruta3+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_  VEHICULO: _<u> "+vehiculoA+". </u>_";
    var despachadorV = "DESPACHADOR: "+despachador+"";
    var controlC = '<strong class="text-center">CONTROL DE VENTAS Y COBRANZA</strong>';
    var pagare = '<p class="text-justify " >YO _<u> '+ nombre_vend+' </u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u> '+fechaDespachoD+' </u>_ LA CANTIDAD DE _<u> $ '+cantidad +' ('+cantidadEnTexto+') </u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center">'+nombre_vend+'.</p>';
    var fechaDespachoDD ='FECHA DE DESPACHO : '+fechaDespachoD;
        $('.pagareD').html(pagare);
        $('.controlC').html(controlC);
        $('.nombreVendedor').html(nombreVendedor);
        $('.nombreCapturista').html(usuario);
        $('.nombreDespachador').html(despachadorV);
        $('.fechaDespacho').html(fechaDespachoDD);
        window.print();
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
    document.getElementById('oculto88').style.display = 'block';
    document.getElementById('oculto89').style.display = 'block';
    document.getElementById('oculto90').style.display = 'block';
    document.getElementById('oculto91').style.display = 'block';
    document.getElementById('oculto9').style.display = 'block';
    document.getElementById('oculto10').style.display = 'block';
    document.getElementById('oculto11').style.display = 'block';
    document.getElementById('oculto12').style.display = 'block';
    document.getElementById('ocultoImagen').style.display = 'block';
    //getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasPrint);
    var nombreVendedor = "RUTA _<u>"+ruta3+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_  ";
    var despachadorV = "DESPACHADOR: "+despachadorR+"";
    var controlC = "<strong>CONTROL DE VENTAS Y COBRANZA</strong>";
    var pagare = '<p class="text-justify " >YO _<u> '+ nombre_vend+' </u>_ POR ESTE PAGARE ME OBLIGO A PAGAR INCONDICIONALMENTE A LA ORDEN DE RUBI ALEIDE ORTIZ TORRES EN ESTA CIUDAD EL DIA _<u> '+fechaRecepcionD+' </u>_ LA CANTIDAD DE _<u> $ '+parseFloat(total_merc).toFixed(2)+' ('+cantidadEnTexto+') </u>_ ESTE PAGARE CAUSARA EL ______ % MENSUAL SIN QUE SE DE POR AMPLIADO EL PAGO DE SU VENCIMIENTO.</p><p class="text-center">___________________________________________</p><p class="text-center">'+nombre_vend+'.</p>';
    var fechaRecepcionDD ='FECHA DE RECEPCIÓN: '+fechaRecepcionD;
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
    if(tipoCombustible==4){
        $('.diesel').html("DIESEL: "+diesel+" L.");
        $('.km').html("KM: "+km);
    }
        $('.pagareD').html(pagare);
      //$('.fondoImagen').html(imagenFondo);
        $('.controlC').html(controlC);
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
}
function imprimirVD3(){
        document.getElementById('oculto2').style.display = 'block';
        document.getElementById('oculto7').style.display = 'block';
        document.getElementById('ocultoVD').style.display = 'block';
        document.getElementById('ocultoVD2').style.display = 'block';
        document.getElementById('ocultoVD33').style.display = 'block';
        document.getElementById('ocultoVD333').style.display = 'block';
        document.getElementById('ocultoImagen').style.display = 'block';
    var nombreVendedor = "RUTA _<u>"+ruta3+"</u>_ VENDEDOR: _<u> "+nombre_vend+". </u>_  ";
    var controlC = 'VENTA DIARIA (SEMANA: '+(scv+1)+' )';
        $('.nombreVendedor').html(nombreVendedor);
        $('.controlC').html(controlC);
        window.print(); 
        document.getElementById('oculto2').style.display = 'none';
        document.getElementById('oculto7').style.display = 'none';
        document.getElementById('ocultoVD').style.display = 'none';
        document.getElementById('ocultoVD2').style.display = 'none';
        document.getElementById('ocultoVD33').style.display = 'none';
        document.getElementById('ocultoVD333').style.display = 'none';
        document.getElementById('ocultoImagen').style.display = 'none';
}
function cambio(){
    var peso = $(".peso").val();
    if(peso == ""){
        document.getElementById('peso').focus();
    }else{
        document.getElementById('add').focus();
    }  
}
function cambioMerma(){
    var peso = $("#modalMerma .peso").val();
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
}
function loadEmpleados2(lista){
        var html = '';
        for(var h=0;h<lista.length; h++){
        html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); click_notas('+ lista[h].id +', '+h+')" data-id="'+ lista[h].idUsuario +'"><td>' +  lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple +'</td></tr>';
        $('.contCata2').html(html);
        }
        arrGlobalEmpleados = lista; 
}
function loadNotas(lista){
        var html = '';
        var v= 0;
        for(var h=0;h<lista.length; h++){ 
          if(lista[h].idnombre==id_vend){
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
        for(var h=0;h<lista.length; h++)
          html+= '<tr class="seleccionar" onclick="cambiarcolor(this); selectInventario('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].idInventario + '</td><td>' + lista[h].descripcion + '</td><td>' + lista[h].detalle + '</td><td>' + lista[h].mayoreo + '</td><td>' + lista[h].foraneo + '</td><td>' + lista[h].restaurante + '</td><td>' + lista[h].cantidad  + ' ' + medidas[lista[h].medida-1] + '</td><td>' + lista[h].s_min + '</td><td>' + lista[h].s_max + '</td></tr>';
          $('.contCata').html(html);
          arrGlobal = lista;
}
function loadInventario2(lista){
        
          arrGlobalInventario = lista;
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
            if( rutas==lista[h].ruta&&fechacaptura == lista[h].fechadespachof&&lista[h].merma!=1 ){
              //alert(rutas+" == "+lista[h].ruta+" && "+fechacaptura+" == "+lista[h].fechadespachof+" = "+lista[h].id+" ---- "+h);
              if(lista[h].venta==''||lista[h].venta==NaN||lista[h].venta==undefined||lista[h].venta==null){
             $('.imprimir').html('');   
                if(parseFloat(lista[h].peso)==0){
                  if(lista[h].piezasv==0){

                  $('#rec'+h+'').val('');

                  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                  //suma2(valor, h);
                  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
                  //alert(lista[h].piezasv);
                  t_v2[num]=parseFloat(lista[h].valorMercancia);
                  //alert("Venta___: "+lista[h].valorMercancia);
                  num++;
                  total = total+valor;

                  }else{

                    $('#rec'+h+'').val(lista[h].piezasv);
                  valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                  //suma2(valor, h);
                  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
                  //alert(lista[h].piezasv);
                  t_v2[num]=parseFloat(lista[h].valorMercancia);
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
                  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
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
                  $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
                //alert("Venta____: "+lista[h].valorMercancia);
                  t_v2[num]=parseFloat(lista[h].valorMercancia);
                  num++;
                //alert(lista[h].valorMercancia);
                  total = total+valor;
                //alert(total+" - "+valor);

}

                 
                }
                }else{
                if(parseFloat(lista[h].peso)==0){
                    $('#rec'+h+'').val(lista[h].piezasv);
                    valor=(lista[h].piezas-lista[h].piezasv)*lista[h].precioUnitario;
                    $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
                    t_v2[num]=lista[h].venta;
                    num++;
                    total = total+valor;
                    }else{
                    $('#p'+h+'').val(lista[h].piezasv);
                    $('#rec'+h+'').val(lista[h].pesov);
                    valor=(lista[h].peso-lista[h].pesov)*lista[h].precioUnitario;
                    $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
                    t_v2[num]=parseFloat(lista[h].venta);
                    num++;
                    total = total+valor;
                }
              }
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
                formatNumber2(parseFloat(l));l=cantidad2;formatNumber2(parseFloat(lp));lp=cantidad2;formatNumber2(parseFloat(l4));l4=cantidad2;formatNumber2(parseFloat(l2));l2=cantidad2;formatNumber2(parseFloat(l3));l3=cantidad2;formatNumber2(parseFloat(l5));l5=cantidad2;formatNumber2(parseFloat(l6));l6=cantidad2;formatNumber2(parseFloat(l7));l7=cantidad2;
              var p =(diferenciaT*100)/(ventaT-bonT); 
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td><strong>$ '+ parseFloat(bonT).toFixed(2) +'</strong> </td></tr>';  
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td><strong> $ '+ parseFloat(ventaT).toFixed(2) +'</strong> </td></tr>';
                  html2+= '<tr  class="text-right"  style="font-size:9px;   "><td class="text-left">NO VENTA</td><td><strong> % '+parseFloat(l3).toFixed(2)+'</strong> </td><td><strong> % '+parseFloat(m3).toFixed(2)+' </strong></td><td> <strong>% '+ parseFloat(x3).toFixed(2) +' </strong></td><td><strong> % '+ parseFloat(j3).toFixed(2) +'  </strong></td><td><strong> % '+ parseFloat(v3).toFixed(2) +'</strong> </td><td><strong> % '+ parseFloat(s3).toFixed(2) +' </strong></td><td><strong> % '+  (p).toFixed(2) +' </strong></td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td><strong> $ '+ parseFloat(efecT).toFixed(2) +'</strong> </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">FALT/SOB DIA</td><td>$ '+parseFloat(l6).toFixed(2)+' </td><td >$ '+parseFloat(m6).toFixed(2)+'</td><td> $ '+ parseFloat(x6).toFixed(2) +' </td><td>$ '+ parseFloat(j6).toFixed(2)+'  </td><td>$ '+ parseFloat(v6).toFixed(2) +' </td><td> $ '+ parseFloat(s6).toFixed(2) +' </td><td> $ '+ parseFloat(f_s_t).toFixed(2) +' </td></tr>';
                  html2+= '<tr  class="text-right" style="font-size:9px;   "><td class="text-left">FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td><strong> $ '+ parseFloat(f_s_tR).toFixed(2) +'</strong> </td></tr>';
                  htmlC+='<tr  class="text-right" style="font-size:9px;   "><td></td><td class="text-right"> $ '+parseFloat(creditosFTemp).toFixed(2)+'</td><td class="text-right"> $ - '+parseFloat(creditosITemp).toFixed(2)+'</td><td> $ '+(creditosFTemp-creditosITemp).toFixed(2) +'</td><td> $ '+(f_s_t).toFixed(2)+'</td><td><strong> $ '+((creditosFTemp-creditosITemp)+parseFloat(f_s_t)).toFixed(2)+' </strong></td></tr>'
                  
            }

                  $('.contCataModalDC').html(htmlC);
                  $('.contCataModalDP').html(html2);
                  $('.ventaDiariaSemanal').html(htmlp);
                  imprimirVD3();
}
function loadVDiariaR3(lista){
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
                  if(0==lista[h].merma&&(scv+1)==lista[h].sfc&&year==((lista[h].fechadespachof).substring(0,4))){
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
                if(lp==0){lp=""}else{lp=" ("+parseFloat(lp).toFixed(3)+" KG)"}
                if(m==0){m="0"}else{m=parseFloat(m).toFixed(2)}
                if(mp==0){mp=""}else{mp=" ("+parseFloat(mp).toFixed(3)+" KG)"}
                if(x==0){x="0"}else{x=parseFloat(x).toFixed(2)}
                if(xp==0){xp=""}else{xp=" ("+parseFloat(xp).toFixed(3)+" KG)"}
                if(j==0){j="0"}else{j=parseFloat(j).toFixed(2)}
                if(jp==0){jp=""}else{jp=" ("+parseFloat(jp).toFixed(3)+" KG)"}
                if(v==0){v="0"}else{v=parseFloat(v).toFixed(2)}
                if(vp==0){vp=""}else{vp=" ("+parseFloat(vp).toFixed(3)+" KG)"}
                if(s==0){s="0"}else{s=parseFloat(s).toFixed(2)}
                if(sp==0){sp=""}else{sp=" ("+parseFloat(sp).toFixed(3)+" KG)"}
                if(suma==0){suma="0"}else{suma=parseFloat(suma).toFixed(2)}
                if(suma2==0){suma2=""}else{suma2=" ("+parseFloat(suma2).toFixed(3)+" KG)"}
                  html+= '<tr class="seleccionar" id ="'+h+'" ><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' '+lp+'</td><td>'+m+' '+mp+'</td><td>'+ x +' '+xp+' </td><td>'+ j+' '+jp+'  </td><td>'+ v +' '+vp+' </td><td>'+ s +' '+sp+' </td><td style="background:green;">'+suma+' '+suma2+' </td></tr>';
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
                      if(l==0){l="0"}else{l=parseFloat(l).toFixed(2)}
                      if(lp==0){lp=""}else{lp=" ("+parseFloat(lp).toFixed(3)+" KG)"}
                      if(m==0){m="0"}else{m=parseFloat(m).toFixed(2)}
                      if(mp==0){mp=""}else{mp=" ("+parseFloat(mp).toFixed(3)+" KG)"}
                      if(x==0){x="0"}else{x=parseFloat(x).toFixed(2)}
                      if(xp==0){xp=""}else{xp=" ("+parseFloat(xp).toFixed(3)+" KG)"}
                      if(j==0){j="0"}else{j=parseFloat(j).toFixed(2)}
                      if(jp==0){jp=""}else{jp=" ("+parseFloat(jp).toFixed(3)+" KG)"}
                      if(v==0){v="0"}else{v=parseFloat(v).toFixed(2)}
                      if(vp==0){vp=""}else{vp=" ("+parseFloat(vp).toFixed(3)+" KG)"}
                      if(s==0){s="0"}else{s=parseFloat(s).toFixed(2)}
                      if(sp==0){sp=""}else{sp=" ("+parseFloat(sp).toFixed(3)+" KG)"}
                      if(suma==0){suma="0"}else{suma=parseFloat(suma).toFixed(2)}
                      if(suma2==0){suma2=""}else{suma2=" ("+parseFloat(suma2).toFixed(3)+" KG)"}
                        html+= '<tr class="seleccionar" id ="'+h+'" style="font-size:12px;   "><td>' +  arrGlobalInventario[hh].descripcion +'</td><td>'+ l +' '+lp+'</td><td>'+m+' '+mp+'</td><td>'+ x +' '+xp+' </td><td>'+ j+' '+jp+'  </td><td>'+ v +' '+vp+' </td><td>'+ s +' '+sp+' </td><td style="background:green;">'+suma+' '+suma2+' </td></tr>';
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
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>CRÉDITOS</td><td>$ '+parseFloat(l).toFixed(2)+' </td><td>$ '+parseFloat(m).toFixed(2)+'</td><td>$ '+ parseFloat(x).toFixed(2) +' </td><td>$ '+ parseFloat(j).toFixed(2)+'  </td><td>$ '+ parseFloat(v).toFixed(2) +' </td><td>$ '+ parseFloat(s).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>BONIFICACIÓN</td><td> $ '+parseFloat(lp).toFixed(2)+' </td><td>$ '+parseFloat(mp).toFixed(2)+'</td><td>$ '+ parseFloat(xp).toFixed(2) +' </td><td>$ '+ parseFloat(jp).toFixed(2)+'  </td><td>$ '+ parseFloat(vp).toFixed(2) +' </td><td>$ '+ parseFloat(sp).toFixed(2) +' </td><td>$ '+ parseFloat(bonT).toFixed(2) +' </td></tr>';  
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>MERCANCIA</td><td> $ '+parseFloat(l4).toFixed(2)+' </td><td>$ '+parseFloat(m4).toFixed(2)+'</td><td>$ '+ parseFloat(x4).toFixed(2) +' </td><td>$ '+ parseFloat(j4).toFixed(2)+'  </td><td>$ '+ parseFloat(v4).toFixed(2) +' </td><td>$ '+ parseFloat(s4).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>VENTA</td><td>$ '+parseFloat(l2).toFixed(2)+' </td><td>$ '+parseFloat(m2).toFixed(2)+'</td><td> $ '+ parseFloat(x2).toFixed(2) +' </td><td>$ '+ parseFloat(j2).toFixed(2)+'  </td><td>$ '+ parseFloat(v2).toFixed(2) +' </td><td> $ '+ parseFloat(s2).toFixed(2) +' </td><td> $ '+ parseFloat(ventaT).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>EFECTIVO</td><td>$ '+parseFloat(l5).toFixed(2)+' </td><td>$ '+parseFloat(m5).toFixed(2)+'</td><td> $ '+ parseFloat(x5).toFixed(2) +' </td><td>$ '+ parseFloat(j5).toFixed(2)+'  </td><td>$ '+ parseFloat(v5).toFixed(2) +' </td><td> $ '+ parseFloat(s5).toFixed(2) +' </td><td> $ '+ parseFloat(efecT).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB DIA</td><td style="background:'+lC2+'">$ '+parseFloat(l6).toFixed(2)+' </td><td style="background:'+mC2+'">$ '+parseFloat(m6).toFixed(2)+'</td><td style="background:'+xC2+'"> $ '+ parseFloat(x6).toFixed(2) +' </td><td style="background:'+jC2+'">$ '+ parseFloat(j6).toFixed(2)+'  </td><td style="background:'+vC2+'">$ '+ parseFloat(v6).toFixed(2) +' </td><td style="background:'+sC2+'"> $ '+ parseFloat(s6).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>FALT/SOB REAL</td><td>$ '+parseFloat(l7).toFixed(2)+' </td><td>$ '+parseFloat(m7).toFixed(2)+'</td><td> $ '+ parseFloat(x7).toFixed(2) +' </td><td>$ '+ parseFloat(j7).toFixed(2)+'  </td><td>$ '+ parseFloat(v7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td><td> $ '+ parseFloat(s7).toFixed(2) +' </td></tr>';
                  html2+= '<tr class="seleccionar"  style="font-size:12px;   "><td>NO VENTA</td><td  id="lunes" style="background:'+lC+'"> % '+parseFloat(l3).toFixed(2)+' </td><td  id="martes" style="background:'+mC+'"> % '+parseFloat(m3).toFixed(2)+'</td><td  id="miercoles" style="background:'+xC+'"> % '+ parseFloat(x3).toFixed(2) +' </td><td  id="jueves" style="background:'+jC+'"> % '+ parseFloat(j3).toFixed(2) +'  </td><td  id="viernes" style="background:'+vC+'"> % '+ parseFloat(v3).toFixed(2) +' </td><td id="sabado" style="background:'+sC+'"> % '+ parseFloat(s3).toFixed(2) +' </td><td id="totalP" style="background:'+tC+'"> % '+  (p).toFixed(2) +' </td></tr>';
                  $('.contCataModalD').html(html2);
                  $('.contCataModal').html(html);
                  $('.ventaDiariaSemanal').html(htmlp);
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
                  $('.ventaDiariaSemanal').html(htmlp);
}
function loadVentas(lista){
              var html = '';
              var htmlm = '';
              var htmlp = '';
              var no=1;
                  total_merc =0;
              var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare();"  >IMPRIMIR</button></li>';
              var num=0;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof){
                  if( total_merc==0){      
                    var nombreV='<th colspan="7" class="nombreV" style="font-size:8px;">Nombre: '+lista[h].vendedor+'</th>'
                        $('nombreV').html(nombreV);
                  }
                  if(lista[h].merma==1){
                        htmlm+= '<tr class="seleccionar" id ="'+h+'" onclick="selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" style="background: gray;" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td style="color:red;">' + lista[h].descripcionventa + ' (MERMA)</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                  }else{
                        formatNumber(parseFloat(lista[h].valorMercancia));
                        html+= '<tr class="seleccionar" id ="'+h+'" onclick="cambiarcolor(this); selectVentas('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" data-id="'+ lista[h].id +'"><td>' + lista[h].horadespacho + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + cantidad +'</td></tr>';
                        htmlp+= '<tr class=" fila" style="font-size:8px;"><td class="text-center">' + no + '</td><td class="text-center">' + lista[h].horadespacho + '</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td class="text-right">' +parseFloat(lista[h].peso).toFixed(3) + '</td><td class="text-right"> $ ' + parseFloat(lista[h].precioUnitario).toFixed(2) + '</td><td class="text-right"><strong> $ ' + cantidad +'<strong></td></tr>';
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
                  htmlp+= '<tr class=" " style="font-size:10px;"><td colspan="6"></td><td class="text-right"><strong> Total: </strong></td><td class="text-right"><strong> $ '+cantidad+'</strong></td></tr>';
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
function loadMerma(lista){
              var htmlm = '';
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta && today_v == lista[h].fechadespachof&&lista[h].merma==1){
                  htmlm+= '<tr class="seleccionar"  onclick="cambiarcolor(this); selectMerma('+ lista[h].id +', '+lista[h].valorMercancia+', '+h+')" ><td>' + dias[parseInt(lista[h].dfc)-1]+ '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3) + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) +'</td></tr>';
                }
              }
                  $('#modalMerma .contCataMerma').html(htmlm);
}
function totalrec(h,piezas,pUnitario,rec){
              var piezas1 = $('#rec'+h+'').val();
              if(piezas1==undefined){
                piezas1=0;
                }
                valor = (piezas-piezas1)*pUnitario;
                t_v[h]=parseFloat(piezas1).toFixed(2);
                piezasT[h]=parseFloat(piezas1).toFixed(2) ;
                suma(valor, h,rec);
                $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
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
                $('#'+h+'').html('$ '+parseFloat(valor).toFixed(2));
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
              totales = ' <h3 class="letras">VENTA TOTAL: $ '+(s_vent).toFixed(2)+'</h3>';
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
              var imprimir = '<li role="presentation" class="impre" ><button class="btn btn-warning impre totala" value="Imprimir" onclick="pagare2();"  >IMPRIMIR</button></li>';
              var cantidad=0;
              var num=1;
              var total_merc2=0;
              var p=0;
              var saltos=0;
              for(var h=0;h<lista.length; h++){
                if(rutas==lista[h].ruta&&lista[h].fechadespachof==fechacaptura&&lista[h].merma!=1){
                  if(parseFloat(lista[h].peso)==0){
                    p++;
                var p2=p+1;
                    idConta[saltos]='rec'+h;
                    saltos++;
                    html+= '<tr style="font-size:13px; " class=""  data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td></td><td> <input type="text"   class="p'+p+' form-control " id="rec'+h+'" placeholder="0.00" onchange="totalrec('+h+', '+lista[h].piezas+', '+lista[h].precioUnitario+', '+v+'); nextInput('+h+');">' + '</td><td>  ' + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td>  <div id="'+h+'"> $ 0.00</div></td></tr>';
                    htmlp+= '<tr class="" style="font-size:7px; "><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td ><td class="text-right">0.000</td><td class="text-right">'+parseFloat(lista[h].piezasv).toFixed(2) + '</td><td class="text-right">0.000</td><td class="text-right">'+(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv)).toFixed(2)+'</td><td class="text-right">0.000</td><td class="text-right"> $ ' +parseFloat(lista[h].precioUnitario).toFixed(2) + '</td><td class="text-right"> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td class="text-right"> $ '+parseFloat(lista[h].venta).toFixed(2)+'</td></tr>';
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
                    html+= '<tr class="" style="font-size:13px; " data-id="'+ lista[h].id +'"><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td>' +parseFloat(lista[h].peso).toFixed(3)+ '</td><td> ' + '<input type="text" id="p'+h+'" class="p'+p+' form-control " placeholder="0.00" onchange="nextInput2('+h+');" >' + '</td><td>  ' + '<input type="text"  class="p'+(p+1)+' form-control " id="rec'+h+'" placeholder="0.00" onchange="totalrec2('+h+', '+lista[h].peso+', '+lista[h].precioUnitario+','+v+'); nextInput('+h+');">'  + '</td><td> $ ' + lista[h].precioUnitario + '</td><td> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td><div id="'+h+'"> $ 0.00</div></td></tr>';
                    p++;
                    htmlp+= '<tr class="" style="font-size:7px; "><td class="text-center">'+num+'</td><td class="text-center">' + lista[h].idProducto + '</td><td class="text-center">' + lista[h].descripcionventa + '</td><td class="text-right">' + parseFloat(lista[h].piezas).toFixed(2) + '</td><td  class="text-right">'+parseFloat(lista[h].peso).toFixed(3)+'</td><td class="text-right">'+ parseFloat(lista[h].piezasv).toFixed(2) + '</td><td class="text-right">'+parseFloat(lista[h].pesov).toFixed(3)+'</td><td class="text-right">'+(parseFloat(lista[h].piezas)-parseFloat(lista[h].piezasv)).toFixed(2)+'</td><td class="text-right">'+(parseFloat(lista[h].peso)-parseFloat(lista[h].pesov)).toFixed(3)+'</td><td class="text-right"> $ ' +parseFloat(lista[h].precioUnitario).toFixed(2) + '</td><td class="text-right"> $ ' + parseFloat(lista[h].valorMercancia).toFixed(2) + '</td><td class="text-right"> $ '+parseFloat(lista[h].venta).toFixed(2)+'</td></tr>';
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
                    htmlp+= '<tr class=" " style="font-size:8px;"><td colspan="9"></td><td class="text-right"> Totales: </td><td class="text-right"> $ '+parseFloat(total_merc2).toFixed(2)+'</td><td class="text-right"> $ '+parseFloat(total_vent).toFixed(2)+'</td></tr>';
                    htmlp+= '<tr class=" " style="font-size:8px;"><td colspan="9"></td><td class="text-right"> No venta: </td><td class="text-center" colspan="2"> $ '+parseFloat(noVenta).toFixed(2)+'</td></tr>';
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
                  document.getElementById(idConta[h]).selectionStart = 0;
                }else{
                  document.getElementById(idConta[j]).focus();
                  document.getElementById(idConta[j]).selectionStart = 0;
                }
              }
            }
}
function nextInput2(num){
            for(var h=0;h<idConta.length; h++){
               if(idConta[h]==('rec'+num)){
              var j=h+1;
                  document.getElementById(idConta[h]).focus();
                  document.getElementById(idConta[h]).selectionStart = 0;
                }
              }
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
          for(var h=0;h<lista.length; h++){
            if(lista[h].fechaf == today_vv && lista[h].efectivo != null){
              for (var ii=0; ii < arrGlobalRuta.length; ii++) {
                if(arrGlobalRuta[ii].id==lista[h].ruta){
                  ruta3=arrGlobalRuta[ii].nombre;
                }
              }
                  html3+= '<tr class="seleccionar" onclick="selectEV('+lista[h].id+');" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].efectivo +'</td></tr>';
            }
          }
                  $('#modalEfectivo .contCataModal').html(html3);
                  arrGlobalE = lista;
                  arrGlobalF = lista;    
}
function loadVentaspasadasVF(lista){
          for(var h=0;h<lista.length; h++){
            if (lista[h].fechaf==fechacaptura&&lista[h].ruta==rutas) {
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
            }else{
                efect=parseFloat(lista[h].efectivo).toFixed(2);
                sumaefe=parseFloat(lista[h].efectivo)+parseFloat(lista[h].otros);
              }
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
                html+= '<tr class=" seleccionar"  onclick="selectEV('+lista[h].id+');"  data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].efectivo +'</td></tr>';
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
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[parseInt(lista[h].ruta)-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>';
            }
          }else{
            if(lista[h].fechaf==today_v||lista[h].sfc==(noSemana+1)) {//alert(lista[h].sfc+" --- "+lista[h].sfc);
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + t_rutas[parseInt(lista[h].ruta)-1] + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+lista[h].fechaf +'</td></tr>'; 
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
              html2+= '<tr class="seleccionar" onclick="click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+')" data-id="'+ lista[h].id +'"><td>' + ruta3 + '</td><td>' + lista[h].nombre + '</td><td>' + t_ventas[lista[h].tipo-1] + '</td><td> $ '+ parseFloat(lista[h].credito_p).toFixed(2) + '</td><td> $ ' + parseFloat(lista[h].bonificacion_p).toFixed(2) +  '</td><td> $ ' + parseFloat(lista[h].v_mercancia).toFixed(2) + '</td><td>'+fechap +'</td></tr>';
              km=lista[h].km;
              gas=lista[h].gas;
              diesel=lista[h].diesel;
              gasolina=lista[h].gasolina;
          }
        }
              $('.contCata').html(html2);
              arrGlobal4 = lista;
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
        if (lista[h].sfc==(noSemana+1)&&lista[h].ruta==rutas&&lista[h].f_s_real!=undefined) {
              html2+= '<tr class="" onclick="cambiarcolor(this);click_Rec('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].tipo+', '+lista[h].credito_p+', '+lista[h].bonificacion_p+', '+(lista[h].fechaf+"")+','+lista[h].dsfc+','+lista[h].sfc+');" data-id="'+ lista[h].id +'"><td> ' +dias[lista[h].dsfc-1]+'</td><td> $' + parseFloat(lista[h].creditos).toFixed(2) + '</td><td> $' + parseFloat(lista[h].f_s_dia).toFixed(2) + '</td><td> $ ' +parseFloat(lista[h].loquedeberiatraer).toFixed(2) + '</td><td> $ '+parseFloat(lista[h].f_s_real).toFixed(2) + '</td></tr>';
              htmlp+= '<tr  style="font-size:7px; "><td class="text-center"> ' +dias[lista[h].dsfc-1]+'</td><td class="text-center"> $' + parseFloat(lista[h].creditos).toFixed(2) + '</td><td class="text-center"> $' + parseFloat(lista[h].f_s_dia).toFixed(2) + '</td><td class="text-center"> $ ' +parseFloat(lista[h].loquedeberiatraer).toFixed(2) + '</td><td class="text-center"> $ '+parseFloat(lista[h].f_s_real).toFixed(2) + '</td></tr>';
        }
      }
              $('.contCata2').html(html2);
              $('.contCatapp').html(html2);
              html2='';
              arrGlobal4 = lista;
              arrGlobal41 = lista;
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
}
function  loadRutasUp(lista){
              arrGlobalRuta=lista;
}
function  loadRutas3(lista){
          var html = '';
          var numeroclientes=0;
      for(var h=0;h<lista.length; h++){
        if(n==lista[h].numero){
              html+= '<tr class="seleccionar letras" onclick="cambiarcolor(this); " data-id="'+ lista[h].id +'"><td>' + lista[h].local  + '</td><td>' + lista[h].propietario+'</td><td>' + lista[h].direccion+'</td><td>' + lista[h].telefono + '</td><td style="width:40px" ><div class="btn-group"  data-toggle="buttons"><button type="button" class="btn btn-primary btn-sm" onclick="upCliente1('+ lista[h].id +');">Editar</button> <button type="button" class="btn btn-danger btn-sm" onclick="delCliente('+ lista[h].id +');">Eliminar</button></div> </td></tr>';  
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
              html+= '<tr class="seleccionar text-center" onclick="click_Salida('+ lista[h].id +', '+h+', '+lista[h].ruta+', '+lista[h].t_venta+', '+lista[h].l_credito + ', ' + lista[h].l_bon +')" data-id="'+ lista[h].id +'"><td>' + ruta3  + '</td><td>' + lista[h].nombre_Emple + ' ' + lista[h].paterno_Emple + ' ' + lista[h].materno_Emple + '</td><td>' + t_ventas[lista[h].t_venta - 1] + '</td><td> $ ' + parseFloat(lista[h].l_credito).toFixed(2) + '</td><td> $ ' + parseFloat(lista[h].l_bon).toFixed(2) + '</td></tr>';
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

    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes, ineaval: ineaval, predial: predial, comprobanted: comprobanted, pagare:pagare };
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
  var idProducto = $(".idProducto").val();
  var descripcionventa = $(".descripcion").val();
  var piezas = $(".piezas").val();
  var peso = $(".peso").val();
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
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistro3(json, 'ventadiaria', loadVentas);
   var dsc= dc;
    //alert(dfc+" ---- "+sfc);
   
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta, dsc: dsc, sc: sc, fechaf: fechaf, dsfc: dsfc, sfc: sfc, vehiculo: vehiculo, despachador2: despachador2};

   //alert("num = "+num+" num 2 = "+num2);

  if(num==0 && num2==0){
   //alert("registrar ruta: "+rutas);
   //alert("add "+sc+" == "+sfc+" && "+dsfc+" == "+dfc+" && "+fechadespacho+" == "+fechadespachof);
   var json2 = {idVentap: idVentap, fecha: fecha, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia, t_venta: t_venta, dsc: dsc, sc: sc, fechaf: fechaf, dsfc: dsfc, sfc: sfc, vehiculo: vehiculo, despachador2: despachador2, t_venta_merca: t_venta_merca};

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


function addMerma(){   
  var idProducto = $("#modalMerma .idProducto").val();
  var descripcionventa = $("#modalMerma .descripcion").val();
  var piezas = $("#modalMerma .piezas").val();
  var peso = $("#modalMerma .peso").val();
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
              if(arrGlobal4[n_vend].tipo==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(arrGlobal4[n_vend].tipo==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==4){
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
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   addRegistro3(json, 'ventadiaria', loadMerma);
  
getFunction('ventadiaria','error al agregar registro',loadMerma );
   
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




function delMerma(){
  var idProducto = $("#modalMerma .idProducto").val();
  var descripcionventa = $("#modalMerma .descripcionventa").val();
  var piezas = $("#modalMerma .piezas").val();
  var peso = $("#modalMerma .peso").val();

  if(idProducto != "" && descripcionventa != "" && piezas != ""){






  delRegistro(idGlobal,'ventadiaria', loadMerma);

   getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);



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

  var upCliente1='<button type="button" class="btn btn-info addVendedor1" id="agregarp" onclick="upCliente()">Guardar</button>'
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

  if(idInventario != "" && descripcion != "" && detalle != "" && mayoreo != "" && foraneo != "" && restaurante != "" && cantidad != "" && medida != "" && s_min != "" && s_max != ""){

    var json = {idInventario: idInventario, descripcion: descripcion, detalle: detalle, mayoreo: mayoreo, foraneo: foraneo, restaurante: restaurante, cantidad: cantidad, medida: medida, s_min: s_min, s_max: s_max};
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
    var json = {idEmpleados: idEmpleados, nombre_Emple: nombre_Emple, paterno_Emple: paterno_Emple, materno_Emple: materno_Emple, n_seguro: n_seguro, curp: curp, domicilio: domicilio, rfc: rfc, tipo: tipo, n_licencia: n_licencia, f_exp: f_exp, ruta: ruta, t_venta: t_venta, l_credito: l_credito, l_bon: l_bon, merma: merma, tipocontrato: tipocontrato, iniciocontrato: iniciocontrato, fincontrato: fincontrato, telp: telp, tell: tell, fnacimiento: fnacimiento, estado: estado, ingreso: ingreso, vacaciones:vacaciones, renuncia:renuncia, reingresos: reingresos, razon: razon, solicitud: solicitud, ine2: ine2, curp2: curp2, rfc2:rfc2, nss: nss, acta: acta, cdomicilio: cdomicilio, foto: foto, recomendaciones: recomendaciones, licenciac: licenciac, antecedentes: antecedentes, ineaval: ineaval, predial: predial, comprobanted: comprobanted, pagare:pagare };
  
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

  var upControlVehicular1='<button type="button" class="btn btn-info addControlVehicular1" id="agregarp" onclick="upControlVehicular()">Guardar</button>'
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
  
 var gasolinaT = $('#modalDesp2 .gasolina1').val();
 var gasT = $('#modalDesp2 .gas1').val();
 var dieselT = $('#modalDesp2 .diesel1').val();
 var kmT = $('#modalDesp2 .km1').val();

//if(gasolinaT!=null||gasolinaT!=""||gasolinaT!=undefined||gasolinaT!=NaN||gasolina!=""||gasolina!=undefined||gasolina!=NaN){
gasolina=gasolinaT;
//}
//if(kmT!=null||kmT!=""||kmT!=undefined||km!=NaN||km!=""||km!=undefined||km!=NaN){
km=kmT;
//}
//if(gasT!=null||gasT!=""||gasT!=undefined||gasT!=NaN||gas!=""||gas!=undefined||gas!=NaN){
gas=gasT;
//}
//if(dieselT!=null||dieselT!=""||dieselT!=undefined||dieselT!=NaN||diesel!=""||diesel!=undefined||diesel!=NaN){
diesel=dieselT;
//}





var idc, creditos, otros,temp;
var piezasv, pesov, validar, dsd, sd, lo;

var credito_manual=0;
   $(".totalVentas").html('');
var fecharecepcion=today_vv;

creditos=$(".creditos").val();
otros=$(".otros").val();

if(creditos!="" && otros !=""){


for (var i = 0; i < arrGlobalT.length; i++) {
 if(rutas==arrGlobalT[i].ruta &&arrGlobalT[i].dfc==dscv&&arrGlobalT[i].sfc==scv&&arrGlobalT[i].merma!=1 ){
//alert(dscv+"- semana= "+scv);
validar==1;
if(parseFloat(arrGlobalT[i].peso)==0){
piezasv= $('#rec'+i+'').val();
if(piezasv==""){
  piezasv=0;
}
pesov=0;
//alert("("+parseInt(arrGlobalT[i].piezas)+"-"+piezasv+")*"+parseInt(arrGlobalT[i].precioUnitario));
venta=(parseFloat(arrGlobalT[i].piezas)-parseFloat(piezasv))*parseFloat(arrGlobalT[i].precioUnitario);
var json1={piezasv: piezasv, venta: venta, fecharecepcion: fecharecepcion};
idc=arrGlobalT[i].id;
//suma2(venta, i);
upRegistro3(idc, json1, 'ventadiaria', loadVentasp);
//alert( t_v[i] +" = "+t_v2[i]);
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
//alert(piezasT[i]+"------");
venta=(parseFloat(arrGlobalT[i].peso)-parseFloat(pesov))*parseFloat(arrGlobalT[i].precioUnitario);

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
//alert("fechaf: "+dia+"/"+mes+"/"+year+" -- "+noSemana);
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
//alert(user);
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
//alert("Hoy es: "+dia31+" -- "+fechaf);
//alert("modalc "+modalCreditos1);


if(dia31==1){

//alert("Hoy es lunes xD");

//alert (cobrado+" - "+scv);

for(var h=0;h<arrGlobal4.length; h++){
   //alert(today_v+" - "+lista[h].fecha);
      //alert(lista[h].hora + '</td><td>' + lista[h].idProducto + '</td><td>' + lista[h].descripcionventa + '</td><td>' + lista[h].piezas + '</td><td>' + lista[h].peso + '</td><td>' + lista[h].precioUnitario + '</td><td>' + lista[h].valorMercancia +'</td></tr>'); 
//alert('<tr class="seleccionar" onclick="selectVentasp('+ lista[h].id +')" data-id="'+ lista[h].id +'"><td>' + lista[h].ruta + '</td><td>' + lista[h].nombre + '</td><td>' + lista[h].tipo + '</td><td>'+lista[h].credito_p + '</td><td> $ ' + lista[h].bonificacion_p +  '</td><td> $ ' + lista[h].v_mercancia + '</td><td>'+lista[h].fecha +'</td></tr>');
if (arrGlobal4[h].id==id_vend) {
for(var hh=0;hh<arrGlobal4.length; hh++){
  //alert(arrGlobal4[hh].cobrado+" == "+(cobrado-1)+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+6+" == "+arrGlobal4[hh].t_venta);

if (arrGlobal4[hh].sfc==(scv-1)&&arrGlobal4[hh].ruta==rutas&&6==arrGlobal4[hh].dsfc) {
loquedeberiatraer=parseFloat(arrGlobal4[hh].creditos)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(creditos+" entraaaaaaaa en semana:"+arrGlobal4[hh].sfc);
 credito_manual=1;

 //alert(arrGlobal4[hh].creditos+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador, user: user }
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
json2={creditos: creditos, t_venta_merca: t_venta_merca, otros: otros, f_s_dia: f_s_dia, cobrado: cobrado, t_vendido: t_vendido, loquedeberiatraer: loquedeberiatraer, f_s_real: f_s_real, dsd: dsd, sd: sd, km: km, gasolina: gasolina, gas: gas, diesel: diesel, tipoCombustible: tipoCombustible, despachador: despachador,user: user}


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
 // alert(arrGlobal4[hh].sfc+" == "+cobrado+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+(dscv-1)+" == "+arrGlobal4[hh].dsfc);

if (arrGlobal41[hh].sfc==cobrado&&arrGlobal41[hh].ruta==rutas&&(dscv-1)==arrGlobal41[hh].dsfc) {
  //alert(arrGlobal4[hh].sfc+" == "+cobrado+" && "+arrGlobal4[hh].ruta+" == "+rutas+" && "+(dscv-1)+" == "+arrGlobal4[hh].dsfc);
hk=80;
loquedeberiatraer=parseFloat(arrGlobal41[hh].loquedeberiatraer)-parseFloat(f_s_dia);
f_s_real=parseFloat(creditos)-parseFloat(loquedeberiatraer);
 //alert(loquedeberiatraer+" - "+f_s_real);
 //alert(arrGlobal4[hh].f_s_real);
 if(arrGlobal4[hh].loquedeberiatraer!=null){
  //alert(arrGlobal4[hh].loquedeberiatraer+" - "+f_s_dia+" = "+ loquedeberiatraer);
 //alert(creditos+" - "+loquedeberiatraer+" = "+f_s_real);
credito_manual=1;
  //alert("entra");
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

if(hk==20&&lo==1){

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
  var fechaDespacho = today_v;
  var ruta = rutas;
  var nombre = nombre_vend;
  var tipo = t_vende;
  var credito_p = cred;
  var bonificacion_p = boni;
  var v_mercancia = total_mercancia-valor+valorMercancia;
  var json2 = {id: id, idVentap: idVentap, fechaDespacho: fechaDespacho, ruta: ruta, nombre: nombre, tipo: tipo, credito_p: credito_p, bonificacion_p: bonificacion_p, v_mercancia: v_mercancia};
 
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






function upMerma(){   
  var idProducto = $("#modalMerma .idProducto").val();
  var descripcionventa = $("#modalMerma .descripcion").val();
  var piezas = $("#modalMerma .piezas").val();
  var peso = $("#modalMerma .peso").val();
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
              if(arrGlobal4[n_vend].tipo==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                 
                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
                

                 //alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
            

                 //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==4){
                precioUnitario=arrGlobalInventario[h].restaurante;
                 valorMercancia=precioUnitario*piezas;
                 peso=0;
             

                //  alert(arrGlobal2[n_vend].t_venta+" restaurantes: "+p_unitario+" Precio total"+v_mercancia);
              }

         }else{//si es kg
              medida=arrGlobalInventario[h].medida;
               if(arrGlobal4[n_vend].tipo==1){
                 precioUnitario=arrGlobalInventario[h].detalle;
                 valorMercancia=precioUnitario*peso;
              

                 //alert(arrGlobal2[n_vend].t_venta+" Detalle: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==2){
                precioUnitario=arrGlobalInventario[h].mayoreo;
                 valorMercancia=precioUnitario*peso;//
         

                 // alert(arrGlobal2[n_vend].t_venta+" Mayoreo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==3){
                precioUnitario=arrGlobalInventario[h].foraneo;
                 valorMercancia=precioUnitario*peso;
                

                //alert(arrGlobal2[n_vend].t_venta+" foraneo: "+p_unitario+" Precio total"+v_mercancia);
              }
              if(arrGlobal4[n_vend].tipo==4){
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
  var json = {idProducto: idProducto, descripcionventa: descripcionventa, piezas: piezas, peso: peso, piezasv: piezasv, pesov: pesov, medida: medida, precioUnitario: precioUnitario, valorMercancia: valorMercancia, horadespacho: horadespacho, empleado: empleado, ruta:ruta, fechadespacho: fechadespacho, user: user, dc: dc, sc: sc, vendedor: vendedor, fechadespachof: fechadespachof, dfc: dfc, sfc: sfc, merma: merma};
   upRegistro3(idGlobal, json, 'ventadiaria', loadMerma);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);

  
   
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
  var guardau=' <button type="button" class="btn usuario1 modificar" onclick="upUsuario()">Guardar</button>';
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
  var guardari='<button type="button" class="btn botoninv modificar" onclick="upInventario()">Guardar</button>';

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
      $(".guardari").html(guardari);
    }
  }
}
function selectnotas(id){
  idGlobal = id;
  var eliminarN='<button type="button" class="btn usuario1 eliminar" onclick="delNota()">Eliminar</button>';
  var guardarN='<button type="button" class="btn usuario1 modificar" onclick="upNota()">Guardar</button>';

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
  
}

function selectMantenimiento(id){
  idGlobal = id;

 var upMantenimiento1='<button type="button" class="btn usuario1 modificar" onclick="upMantenimiento()">Guardar</button>';
 var delMantenimiendo1 = '<button type="button" class="btn usuario1 eliminar" onclick="delMantenimiento1()">Eliminar</button>';
  var vehiculo3='<label >Vehiculo</label><input type="text" id="peso" disabled class="form-control clear vehiculo2" placeholder="">';
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
function selectMerma(id, valorM,h){
  idGlobal = id;
  idVentas2=id;
  var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso impre form-control clear peso" onchange="document.getElementById("add").focus();" placeholder="Kg.">';
 var upventas1='<button type="button" class="btn btn-ventas btn-ventas modificar" onclick="upMerma()">Guardar</button>';
 var delventas1 = '<button type="button" class="btn btn-ventas btn-ventas eliminar" onclick="delMerma()">Eliminar</button>';
  var seleccionado;
  for(var a=0; a<arrGlobalVF.length; a++){
    if(arrGlobalVF[a].id == id){
       $("#modalMerma .upventa").html(upventas1);
       $("#modalMerma .delventa").html(delventas1);
       $("#modalMerma .idProducto").val(arrGlobalVF[a].idProducto);
       $("#modalMerma .descripcion").val(arrGlobalVF[a].descripcionventa);
       $("#modalMerma .piezas").val(arrGlobalVF[a].piezas);
       if(arrGlobalVF[a].medida == "1"){
            $("#modalMerma .pesos").html(peso);
            $("#modalMerma .peso").val(arrGlobalVF[a].peso);
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
  if(today==0)
    today=7;
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('#contenido').load('/html/ventas.html');
 $('.tituloPantalla').html('<h3 class="ventas impre"> VENTAS </h3><p>( '+dias[today -1]+', '+day+' DE '+months[parseInt(month)]+' DEL '+year+' )</p>');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1(); " role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion1(); ">RECEPCIÓN </button></li><div class="imprimir"></div></ul> </div>');




 
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
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="click_empleados();">Notas </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_vendedores()" role="tab">Ventas</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_administracion()">Administración</button></li><div class="imprimir"></div></ul> </div>');
 
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

function click_Despacho(){
 
  $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion2').load('/html/salida_venta.html');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" disabled aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button> </li><div class="imprimir"></div></ul> </div>');
  
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
function modal_VDiaria(){
  $('#modalVDiaria').modal('show');
}
function click_Recepcion(){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú </h3>');
 $('.seccion3').load('/html/rec_venta.html');
 $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" disabled id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho1()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li><div class="imprimir"></div><div class="ventaDiaria"></div><div type="button" class="btn btn-dark totala text-center" onclick="VentaspasadasRS()">RUTA SEMANAL</div><div type="button" class="btn btn-dark totala text-center" onclick="">U. RECEPCIÓN</div></ul> </div>');

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
/*
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
var coordenada21 = "lat: "+results[0].geometry.location.lat()+', lng: '+results[0].geometry.location.lng()+"";
//alert(coordenada21+" ---- "+umarcador);

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

*/
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




      }
function click_Mapa(){
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
 $('.tituloPantalla').html('<h3 class="ventas impre"> CLIENTES </h3><p>Ruta: '+arrGlobalRuta[h].nombre+'</p>');
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
  $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><br class="impre"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" onclick="">Ventas</button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class=" btn btn-dark totala impre" onclick="" role="tab">Movimientos</button></li><li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="">Inventario</button><button href="#seccion4" aria-controls="seccion4" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="" role="tab">Clientes</button><button href="#seccion5" aria-controls="seccion5" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="" role="tab">M. Vehicular</button><button href="#seccion6" aria-controls="seccion6" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="" role="tab">Logística</button><button href="#seccion7" aria-controls="seccion7" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="" role="tab">Empleados</button><button href="#seccion8" aria-controls="seccion8" id="desp" data-toggle="tab" class="btn btn-dark totala impre" onclick="" role="tab">Usuarios</button></li><div class="imprimir"></div></ul> </div>');
 

}
function ventaDiariaR(){
  $('.tituloResp').html('<h3 class="text-center impre">VENTA DIARIA</h3>');
  $('.contenidoR').load('/html/ventaDiariaR.html');
getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaR);


//alert(day+month+year);
}
function rutasR(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR);
saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
//alert(ruta)
}
function rutasR2(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR);

//alert(ruta)
}
function rutasRP(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;
saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR2);


//alert(ruta)
}
function rutasRP2(ruta, h){
rutas=ruta;
nombre_vend=arrGlobal2[h].nombre_Emple+' '+arrGlobal2[h].paterno_Emple+' '+arrGlobal2[h].materno_Emple;

getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR2);


//alert(ruta)
}
function ventaDiariaRS(){
  $('.tituloResp').html('<h3 class="text-center impre">VENTA SEMANAL</h3><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVD()">BUSCAR</button></div>  ');

  $('.contenidoR').load('/html/ventaDiariaR.html');
  $('.contenidoR').html('');


}
function click_buscarVD(){

//getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaRS);
var semanaVS = $('.semanaVD').val();
if(semanaVS!=""){


year =  parseInt(semanaVS.substring(0,4));
scv = parseInt(semanaVS.substring(6,8))-1;
  $('.tituloResp').html('<h3 class="text-center impre">SEMANA: '+semanaVS.substring(6,8)+'</h3><div class=" impre col-md-6 form-group row"><input class="form-control col-md-6 semanaVD" type="week" value="" id=""><button class="btn btn-dark form-control col-md-6" onClick="click_buscarVD()">BUSCAR</button></div>  ');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaDiariaR2);
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
  $('.tituloResp').html('<h3 class="text-center impre">VENTA GENERAL</h3>');
  $('.contenidoR').load('/html/ventaGeneral.html');
  saberSemana(parseInt(day), (parseInt(month)-1) ,parseInt(year));
scv=noSemana;
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiariaR3);

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

function click_administracion(){



 $('.seccion3').load('/html/administracion.html');

 $('.tituloPantalla').html('<h3 class="administracion">  ADMINISTRACIÓN   </h3>');

getFunction('empleados', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadAdministracion);

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
function click_Salida(id , h, ruta, tipo, credito, bonificaciones){
  var num = 0;
  var num2 = 0;
   $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion2').load('/html/venta.html');
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><div class="imprimir"></div></ul> </div>');



  

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
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentas);


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
   
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li><li role="presentation" class="impre"><button href="#seccion2" aria-controls="seccion2" id="desp" data-toggle="tab" class="btn btn-success totala impre" onclick="click_Despacho()" role="tab">DESPACHO</button></li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</button> </li><li role="presentation" class="impre" > <button  class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalVehiculo()">D & V</button> </li> <div class="imprimir"></div></ul> </div>');

   despachador = '<u style="width:100px;">'+ arrGlobal4[j].despachador2+'. </u>';
   vehiculoA = '<u style="width:100px;">'+arrGlobal4[j].vehiculo+ '</u>';
vehiculoA2=arrGlobal4[j].vehiculo;
despachador22=arrGlobal4[j].despachador2;
$("#modalDesp .despachadorl").html("Despachador: "+despachador22);
$("#modalDesp .vehiculol").html("Vehiculo: "+vehiculoA2);

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
  
  }}


}
function closeModalDesp(){
$('#modalDesp').modal('hide');
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
var despachadorR;
function click_Rec(id , h, ruta, tipo, credito, bonificaciones, fechacap, dsc, sc){
 $('.btn-nav').removeClass('hidden');
 $('.btn-nav').html('<h3> Menú  </h3>');
 $('.seccion3').load('/html/recep.html');

 nombre_vend = arrGlobal4[h].nombre;
 id_vend=id;
 n_vend=h;
 rutas=arrGlobal4[h].ruta;

 t_vende=tipo;
 cred=credito;
 boni=bonificaciones;
 fechacaptura=arrGlobal4[h].fechaf;
 dscv=dsc;
 scv=sc;
 if(arrGlobal4[h].despachador==undefined){
  modalDespachador2();
  $('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li>  <li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li> <li role="presentation" class="impre"> <div type="button" class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalMerma()">MERMA</div> </li> <li role="presentation" class="impre" >  <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modal_VDiaria()">VENTA DIARIA</div>  </li>     <li role="presentation" class="impre" >   <div href="" aria-controls="" type="button" class="btn btn-warning totala" data-toggle="tab" role="tab" onclick="imprimirVD3();">VENTA DIARIA</div>  </li></div></ul> </div>');
  
}else{
  despachadorR=arrGlobal4[h].despachador;

$('#modalDesp2 .despachador819').html(despachadorR);
$('.barraIzq').html('<div class="fondo impre" style="height: 100%"><ul class="nav flex-column col-md-12" role="tablist"><li role="presentation" actived class="impre" ><button href="#seccion1" aria-controls="seccion1" class="btn btn-danger totala" data-toggle="tab" role="tab" disabled onclick="ocultar()">VENTAS </button></li>  <li role="presentation" class="impre" ><button href="#seccion3" aria-controls="seccion3" class="btn btn-primary impre totala" data-toggle="tab" role="tab" onclick="click_Recepcion()">RECEPCIÓN </button></li> <li role="presentation" class="impre"> <div type="button" class="btn btn-dark impre totala" data-toggle="tab" role="tab" onclick="click_modalProducto()">PRODUCTOS</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalMerma()">MERMA</div> </li> <li role="presentation" class="impre" > <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalDespachador2();">D & C</div> </li> <li role="presentation" class="impre" >  <div href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modal_VDiaria()">VENTA DIARIA</div>  </li>     <li role="presentation" class="impre" >   <div href="" aria-controls="" type="button" class="btn btn-warning totala" data-toggle="tab" role="tab" onclick="imprimirVD3();">VENTA DIARIA</div>  </li></div></ul> </div>');
  
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

getFunction('inventarios', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadInventarioVenta);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasr);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentasF);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadMerma);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasVF);
getFunction('ventaspasada', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVentaspasadasTF);
 
  //var vDiaria ='';

//<button href="" aria-controls="" type="button" class="btn btn-dark totala" data-toggle="tab" role="tab" onclick="modalRecarga()">RECARGA</div>



//$('.ventaDiaria').html(vDiaria);
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadVDiaria);
if(arrGlobal4[h].despachador==undefined){
  $('.imprimir').html('');
}
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
getFunction('ventadiaria', "Ocurrio un error al cargar el formulario, reintentar más tarde.", loadDiaRec);

}

function addEfectivo(){
var efectivo = $("#modalEfectivo .cash").val();
var rVendedor = $("#modalEfectivo .rv").val();
var fechacash = $("#modalDateC .dateVC").val();
//alert(rVendedor+" - "+efectivo+" - "+dateCash2);
if(fechacash==""){
fechacash=dateCash2;
}

var f_s_dia;



//alert(fechacash);
for (var i = 0; i < arrGlobalE.length; i++) {
  

  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==dateCash2 && arrGlobalE[i].fechaf!=today_v){
   

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
  if (arrGlobalE[i].id==rVendedor && arrGlobalE[i].fechaf==today_vv){
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
 daycambiomodalE = dateCash2.substring(8,10);
 monthcambiomodalE = dateCash2.substring(5,7);
 yearcambiomodalE = dateCash2.substring(0,4);
 var nomdia2 = new Date((parseInt(monthcambiomodalE))+' '+parseInt(daycambiomodalE)+' ,'+parseInt(yearcambiomodalE));

var fecha2E = dias[nomdia2.getUTCDay()-1]+", "+ daycambiomodalE + " DE " + months[parseInt(monthcambiomodalE)] + " DEL " + yearcambiomodalE;



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


function updateListaMerma(){
    var tipo = $(" .idProducto").val();
    var html ="";
     var add = "'add'";
    var encontrado = 0;
    var peso = ' <label class="letras impre" >Peso</label><input type="text" id="peso" class="peso form-control clear peso impre" onchange="document.getElementById('+add+').focus();" placeholder="Kg.">';
   for (var f=0; f<arrGlobalInventario.length;f++){
        if(arrGlobalInventario[f].idInventario == tipo){   
          encontrado = 1;     
          $("#modalMerma .descripcion").val(arrGlobalInventario[f].descripcion);

      if(arrGlobalInventario[f].medida ==1){
        
$("#modalMerma .pesos").html(peso);
      }else{
     $('#modalMerma .pesos').removeClass('hidden');
     $('#modalMerma .pesos').html('');
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


function updateListaVentaMedida(){
  var tipo = $(".idProducto").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $(".descripcion").val(arrGlobal[a].descripcion); 

    }
       
    
    }

}
function updateListaVentaMedidaMerma(){
  var tipo = $("#modalMerma .idProducto").val();
 //alert(tipo);
   for(var a=0; a<arrGlobal.length; a++){
    if(arrGlobal[a].idInventario == tipo){
       
      $("#modalMerma .descripcion").val(arrGlobal[a].descripcion); 

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