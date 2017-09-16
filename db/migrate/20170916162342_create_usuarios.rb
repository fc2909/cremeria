class CreateUsuarios < ActiveRecord::Migration[5.0]
  def change
    create_table :usuarios do |t|
      t.string :usuario
      t.string :contrasenia
      t.integer :tipo
      t.integer :activo

      t.timestamps
    end
  end
end
