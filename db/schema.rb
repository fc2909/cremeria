# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180801221733) do

  create_table "categoria", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "idCategoria"
    t.string   "nombre"
    t.string   "descripcion"
    t.string   "unidades"
    t.string   "jerarquia"
    t.integer  "activo"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.string   "n4"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "categors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "idCategoria"
    t.string   "nombre"
    t.string   "descripcion"
    t.string   "unidades"
    t.integer  "jerarquia"
    t.integer  "activo"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.string   "n4"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "checklists", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "nombre"
    t.string   "fecha"
    t.integer  "n1"
    t.integer  "n2"
    t.integer  "n3"
    t.integer  "n4"
    t.integer  "n5"
    t.integer  "n6"
    t.integer  "n7"
    t.integer  "n8"
    t.integer  "n9"
    t.integer  "n10"
    t.integer  "n11"
    t.integer  "n12"
    t.integer  "n13"
    t.integer  "n14"
    t.integer  "n15"
    t.integer  "n16"
    t.integer  "n17"
    t.integer  "n18"
    t.integer  "n19"
    t.integer  "n20"
    t.integer  "n21"
    t.integer  "n22"
    t.integer  "n23"
    t.integer  "n24"
    t.integer  "n25"
    t.integer  "n26"
    t.integer  "n27"
    t.integer  "n28"
    t.integer  "n29"
    t.integer  "n30"
    t.integer  "n31"
    t.integer  "n32"
    t.integer  "n33"
    t.integer  "n34"
    t.integer  "n35"
    t.integer  "n36"
    t.integer  "n37"
    t.integer  "n38"
    t.integer  "n39"
    t.integer  "n40"
    t.integer  "n41"
    t.integer  "n42"
    t.integer  "n43"
    t.integer  "n44"
    t.integer  "n45"
    t.integer  "n46"
    t.integer  "n47"
    t.integer  "n48"
    t.integer  "n49"
    t.integer  "n50"
    t.integer  "n51"
    t.integer  "n52"
    t.integer  "n53"
    t.integer  "n54"
    t.integer  "n55"
    t.integer  "n56"
    t.integer  "n57"
    t.integer  "n58"
    t.integer  "n59"
    t.integer  "n60"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clientes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "local"
    t.string   "propietario"
    t.string   "telefono"
    t.string   "numero"
    t.string   "fechai"
    t.string   "credito"
    t.string   "bonificacion"
    t.string   "direccion"
    t.string   "lng"
    t.string   "lat"
    t.string   "email"
    t.string   "descripcion"
    t.string   "telefonop"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.integer  "activo"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "empleados", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "idEmpleados"
    t.string   "nombre_Emple"
    t.string   "paterno_Emple"
    t.string   "materno_Emple"
    t.string   "n_seguro"
    t.string   "curp"
    t.string   "domicilio"
    t.string   "rfc"
    t.integer  "tipo"
    t.string   "n_licencia"
    t.string   "f_exp"
    t.string   "ruta"
    t.integer  "t_venta"
    t.integer  "l_credito"
    t.integer  "l_bon"
    t.integer  "merma"
    t.integer  "activo"
    t.string   "tipocontrato"
    t.string   "iniciocontrato"
    t.string   "fincontrato"
    t.string   "telp"
    t.string   "tell"
    t.string   "fnacimiento"
    t.string   "estado"
    t.string   "ingreso"
    t.string   "vacaciones"
    t.string   "renuncia"
    t.string   "reingresos"
    t.string   "razon"
    t.string   "solicitud"
    t.string   "ine2"
    t.string   "curp2"
    t.string   "rfc2"
    t.string   "nss"
    t.string   "acta"
    t.string   "cdomicilio"
    t.string   "foto"
    t.string   "recomendaciones"
    t.string   "licenciac"
    t.string   "antecedentes"
    t.string   "ineaval"
    t.string   "predial"
    t.string   "comprobanted"
    t.string   "pagare"
    t.string   "km"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "infonavit"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.string   "n4"
  end

  create_table "inventarios", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "idInventario"
    t.string   "descripcion"
    t.string   "detalle"
    t.string   "mayoreo"
    t.string   "foraneo"
    t.string   "restaurante"
    t.string   "cantidad"
    t.string   "medida"
    t.string   "s_min"
    t.string   "s_max"
    t.string   "tipoP"
    t.integer  "activo"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "proporcion"
    t.string   "pesaje"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
  end

  create_table "logs", primary_key: "idLog", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "url"
    t.text     "data",       limit: 65535
    t.integer  "idUsuario"
    t.string   "tipo"
    t.date     "fecha"
    t.time     "hora"
    t.integer  "activo",                   default: 1, null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "mantenimientos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "descripcion"
    t.string   "fecha"
    t.string   "nombre"
    t.string   "vehiculo"
    t.string   "jerarquia"
    t.integer  "activo"
    t.string   "servicio"
    t.string   "n1"
    t.string   "n2"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "notases", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "idnombre"
    t.string   "notas"
    t.string   "descripcion"
    t.integer  "activo"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "rutavendedors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "nombre"
    t.string   "descripcion"
    t.string   "fecha"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.integer  "activo"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "tallers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "idTaller"
    t.string   "nombre"
    t.string   "direccion"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "activo"
  end

  create_table "usuarios", primary_key: "idUsuario", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string  "usuario",     limit: 20
    t.string  "contrasenia"
    t.string  "pin"
    t.integer "tipo"
    t.integer "activo",                 default: 1, null: false
  end

  create_table "vehiculos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "marca"
    t.string   "noserie"
    t.string   "placa"
    t.string   "modelo"
    t.string   "tipo"
    t.string   "color"
    t.string   "combustible"
    t.string   "km"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.integer  "activo"
    t.string   "numero"
    t.string   "aseguradora"
    t.string   "poliza"
    t.string   "iniciopoliza"
    t.string   "finpoliza"
    t.string   "endoso"
    t.string   "inciso"
    t.string   "tel"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "ventadiaria", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "idProducto"
    t.string   "descripcionventa"
    t.string   "piezas"
    t.string   "peso"
    t.integer  "medida"
    t.string   "piezasv"
    t.string   "pesov"
    t.string   "precioUnitario"
    t.string   "valorMercancia"
    t.string   "cantidadregresada"
    t.string   "venta"
    t.string   "horadespacho"
    t.string   "horarecepcion"
    t.integer  "empleado"
    t.string   "vendedor"
    t.integer  "ruta"
    t.string   "fechadespacho"
    t.string   "fecharecepcion"
    t.integer  "activo"
    t.string   "user"
    t.string   "dc"
    t.string   "sc"
    t.string   "dfc"
    t.string   "sfc"
    t.string   "fechadespachof"
    t.string   "fecharecepcionf"
    t.string   "merma"
    t.string   "tipoP"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "ventaspasadas", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "idVentap"
    t.string   "fecha"
    t.string   "ruta"
    t.string   "nombre"
    t.integer  "tipo"
    t.string   "credito_p"
    t.string   "bonificacion_p"
    t.string   "v_mercancia"
    t.string   "t_venta"
    t.string   "cobrado"
    t.string   "t_vendido"
    t.string   "creditos"
    t.string   "efectivo"
    t.string   "otros"
    t.string   "t_venta_merca"
    t.string   "f_s_dia"
    t.string   "loquedeberiatraer"
    t.string   "f_s_real"
    t.string   "user"
    t.string   "despachador"
    t.string   "dsc"
    t.string   "sc"
    t.string   "dsd"
    t.string   "sd"
    t.string   "dsfc"
    t.string   "sfc"
    t.string   "n1"
    t.string   "n2"
    t.string   "n3"
    t.string   "n4"
    t.string   "fechaf"
    t.string   "despachador2"
    t.string   "km"
    t.string   "gas"
    t.string   "gasolina"
    t.string   "diesel"
    t.string   "tipoCombustible"
    t.string   "fechaCarga"
    t.string   "vehiculo"
    t.integer  "activo"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "n5"
    t.string   "n6"
    t.string   "n7"
  end

end
