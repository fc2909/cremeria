class CreatePermisos < ActiveRecord::Migration[5.0]
  def change
    create_table :permisos do |t|
      t.string :user
      t.string :ventas
      t.string :movimientos
      t.string :inventario
      t.string :clientes
      t.string :vehiculos
      t.string :logistica
      t.string :nomina
      t.string :empleados
      t.string :usuarios
      t.string :reportes
      t.string :bitacoras
      t.string :manuales
      t.string :remisiones
      t.string :fabrica
      t.string :n1
      t.string :n2
      t.string :n3
      t.integer :activo

      t.timestamps
    end
  end
end
