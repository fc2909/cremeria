class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs, id: false do |t|
			t.column :idLog, 'INT AUTO_INCREMENT PRIMARY KEY' #primary_key: true
			t.string :url
			t.text :data
			t.integer :idUsuario
			t.string :tipo
			t.date :fecha
			t.time :hora
			
			t.integer :activo, null: false, default:1
			t.timestamps
    end
  end
end
