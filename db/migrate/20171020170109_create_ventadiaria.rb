class CreateVentadiaria < ActiveRecord::Migration[5.0]
  def change
    create_table :ventadiaria, id: false do |t| 
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true t.integer :id 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idProducto
      t.string :descripcionventa
      t.string :piezas
      t.string :peso
      t.integer :medida
      t.string :piezasv
      t.string :pesov
      t.string :precioUnitario
      t.string :valorMercancia
      t.string :cantidadregresada
      t.string :venta
      t.string :horadespacho
      t.string :horarecepcion
      t.integer :empleado
      t.integer :vendedor
      t.integer :ruta
      t.string :fechadespacho
      t.string :fecharecepcion
      t.integer :activo
      t.string :user

      t.timestamps
    end
  end
end
