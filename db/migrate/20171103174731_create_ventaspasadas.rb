class CreateVentaspasadas < ActiveRecord::Migration[5.0]
  def change
    create_table :ventaspasadas, id: false do |t|
      t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true t.integer :id 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.integer :idVentap
      t.string :fecha
      t.string :ruta
      t.string :nombre
      t.integer :tipo
      t.string :credito_p
      t.string :bonificacion_p
      t.string :v_mercancia
      t.string :t_venta
      t.string :cobrado
      t.string :t_vendido
      t.string :creditos
      t.string :efectivo
      t.string :otros
      t.string :t_venta_merca
      t.string :f_s_dia
      t.string :loquedeberiatraer
      t.string :f_s_real
      t.string :user
      t.string :despachador
      t.integer :activo

      t.timestamps
    end
  end
end
