class CreateSuperCategoria < ActiveRecord::Migration[5.0]
  def change
    create_table :super_categoria do |t|
      t.string :nombre
      t.string :descripcion
      t.string :n1
      t.string :n2
      t.string :n3
      t.integer :activo

      t.timestamps
    end
  end
end
