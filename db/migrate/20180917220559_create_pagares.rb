class CreatePagares < ActiveRecord::Migration[5.0]
  def change
    create_table :pagares do |t|
      t.string :nombre
      t.integer :activo

      t.timestamps
    end
  end
end
