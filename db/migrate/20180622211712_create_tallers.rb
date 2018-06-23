class CreateTallers < ActiveRecord::Migration[5.0]
  def change
    create_table :tallers do |t|
      t.string :idTaller
      t.string :nombre
      t.string :direccion
      t.string :n1
      t.string :n2
      t.string :n3

      t.timestamps
    end
  end
end
