class CreateEmpleados < ActiveRecord::Migration[5.0]
  def change
    create_table :empleados, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idEmpleados
      t.string :nombre_Emple
      t.string :paterno_Emple
      t.string :materno_Emple
      t.string :n_seguro
      t.string :curp
      t.string :domicilio
      t.string :rfc
      t.integer :tipo
      t.string :n_licencia
      t.string :f_exp
      t.string :ruta
      t.integer :t_venta
      t.integer :l_credito
      t.integer :l_bon
      t.integer :merma
      t.integer :activo
      t.string :tipocontrato
      t.string :iniciocontrato
      t.string :fincontrato
      t.string :telp
      t.string :tell
      t.string :fnacimiento
      t.string :estado
      t.string :ingreso
      t.string :vacaciones
      t.string :renuncia
      t.string :reingresos
      t.string :razon
      t.string :solicitud
      t.string :ine2
      t.string :curp2
      t.string :rfc2
      t.string :nss
      t.string :acta
      t.string :cdomicilio
      t.string :foto
      t.string :recomendaciones
      t.string :licenciac
      t.string :antecedentes
      t.string :ineaval
      t.string :predial
      t.string :comprobanted
      t.string :pagare




      t.timestamps
    end
  end
end
