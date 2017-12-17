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

ActiveRecord::Schema.define(version: 20171216165641) do

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
    t.integer  "ruta"
    t.integer  "t_venta"
    t.integer  "l_credito"
    t.integer  "l_bon"
    t.integer  "merma"
    t.integer  "activo"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
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
    t.integer  "activo"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
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
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
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
    t.integer  "activo"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
