class CreateForos < ActiveRecord::Migration[5.0]
  def change
    create_table :foros do |t|
      t.string :nombre
      t.string :tipo
      t.integer :activo
      t.string :n1
      t.string :n2

      t.timestamps
    end
  end
end
