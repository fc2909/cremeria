class CreateCategors < ActiveRecord::Migration[5.0]
  def change
    create_table :categors, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      
      t.string :idCategoria
      t.string :nombre
      t.string :descripcion
      t.string :unidades
      t.string :jerarquia
      t.integer :activo
      t.string :n1
      t.string :n2
      t.string :n3
      t.string :n4

      t.timestamps
    end
  end
end
