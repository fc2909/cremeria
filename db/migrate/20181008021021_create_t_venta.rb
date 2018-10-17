class CreateTVenta < ActiveRecord::Migration[5.0]
  def change
    create_table :t_venta do |t|
      t.string :idProduct
      t.string :nProduct
      t.string :idColumna
      t.string :nColumna
      t.integer :activo
      t.string :n1

      t.timestamps
    end
  end
end
