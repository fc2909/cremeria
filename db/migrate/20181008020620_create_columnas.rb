class CreateColumnas < ActiveRecord::Migration[5.0]
  def change
    create_table :columnas do |t|
      t.string :nombre
      t.string :tipo
      t.string :modulo
      t.string :n1
      t.string :n2
      t.integer :activo

      t.timestamps
    end
  end
end
