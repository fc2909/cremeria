class CreateTNominas < ActiveRecord::Migration[5.0]
  def change
    create_table :t_nominas do |t|
      t.string :idEmpleado
      t.string :idColumna
      t.string :cantidad
      t.integer :activo
      t.string :n1
      t.string :n2
      t.string :n3

      t.timestamps
    end
  end
end
