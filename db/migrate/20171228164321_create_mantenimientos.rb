class CreateMantenimientos < ActiveRecord::Migration[5.0]
  def change
    create_table :mantenimientos do |t|
      t.string :descripcion
      t.string :fecha
      t.string :nombre
      t.string :vehiculo
      t.string :jerarquia
      t.integer :activo
      t.string :servicio
      t.string :n1
      t.string :n2
      


      t.timestamps
    end
  end
end
