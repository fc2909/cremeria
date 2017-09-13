class CreateUsuaarios < ActiveRecord::Migration[5.0]
  def change
    create_table :usuaarios do |t|
      t.string :usuario
      t.string :contrasenia
      t.integer :tipo
      t.integer :activo

      t.timestamps
    end
  end
end
