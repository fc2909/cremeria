class CreateRutavendedors < ActiveRecord::Migration[5.0]
  def change
    create_table :rutavendedors, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.string :nombre
      t.string :descripcion
      t.string :fecha
      t.string :n1
      t.string :n2
      t.string :n3
      t.integer :activo

      t.timestamps
    end
  end
end
