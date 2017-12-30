class CreateNotases < ActiveRecord::Migration[5.0]
  def change
    create_table :notases, id: false do |t|
    	t.column :id, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
      t.string :idnombre
      t.string :notas
      t.string :descripcion
      t.integer :activo

      t.timestamps
    end
  end
end
