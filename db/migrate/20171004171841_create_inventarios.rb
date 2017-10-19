class CreateInventarios < ActiveRecord::Migration[5.0]
  def change
    create_table :inventarios, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idInventario
      t.string :descripcion
      t.integer :detalle
      t.integer :mayoreo
      t.integer :foraneo
      t.integer :restaurante
      t.integer :cantidad
      t.integer :medida
      t.string :medida
      t.integer :s_min
      t.integer :s_max
      t.integer :activo

      t.timestamps
    end
  end
end
