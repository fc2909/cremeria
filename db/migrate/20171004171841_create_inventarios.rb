class CreateInventarios < ActiveRecord::Migration[5.0]
  def change
    create_table :inventarios, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idInventario
      t.string :descripcion
      t.string :detalle
      t.string :mayoreo
      t.string :foraneo
      t.string :restaurante
      t.string :cantidad
      t.integer :medida
      t.string :medida
      t.string :s_min
      t.string :s_max
      t.string :tipoP
      t.integer :activo
     
      t.timestamps
    end
  end
end
