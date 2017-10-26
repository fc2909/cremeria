class CreateVentadiaria < ActiveRecord::Migration[5.0]
  def change
    create_table :ventadiaria, id: false do |t| 
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true t.integer :id 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idProducto
      t.string :descripcionventa
      t.string :piezas
      t.string :peso
      t.string :precioUnitario
      t.string :valorMercancia
      t.string :hora
      t.integer :empleado
      t.string :fecha
      t.integer :activo
      t.string :user

      t.timestamps
    end
  end
end
