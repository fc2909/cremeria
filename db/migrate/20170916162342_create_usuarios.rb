class CreateUsuarios < ActiveRecord::Migration[5.0]
  def change
    create_table :usuarios, id: false do |t|
			t.column :idUsuario, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
			t.string :usuario, :limit => 10
			t.string :contrasenia
			t.integer :tipo
			
			t.integer :activo, null: false, default:1
			t.timestamp
    end
  end
end
