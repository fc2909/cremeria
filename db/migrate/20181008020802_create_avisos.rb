class CreateAvisos < ActiveRecord::Migration[5.0]
  def change
    create_table :avisos do |t|
      t.string :descripcion
      t.string :fecha1
      t.string :fecha2
      t.integer :activo
      t.string :n1
      t.string :n2

      t.timestamps
    end
  end
end
