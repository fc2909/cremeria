class CreateClientes < ActiveRecord::Migration[5.0]
  def change
    create_table :clientes do |t|
      t.string :local
      t.string :propietario
      t.string :telefono
      t.string :numero
      t.string :fechai
      t.string :credito
      t.string :bonificacion
      t.string :direccion
      t.string :lng
      t.string :lat
      t.string :email
      t.string :descripcion
      t.string :telefonop
      t.string :n1
      t.string :n2
      t.string :n3
      t.integer :activo

      t.timestamps
    end
  end
end
