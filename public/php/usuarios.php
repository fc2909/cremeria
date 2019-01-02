<?php
$archivo = $_FILES['archivo']['tmp_name'];
$nombre = $_FILES['archivo']['name'];
$tipo = $_FILES['archivo']['type'];
$tamanio = $_FILES['archivo']['size'];
$destino ="images/usuarios/".$nombre;!
$usuarios = move_uploaded_file($archivo, $destino);
?>