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
      t.integer :ruta
      t.integer :t_venta
      t.integer :l_credito
      t.integer :l_bon
      t.integer :merma
      t.integer :activo

      t.timestamps
    end
  end
end
