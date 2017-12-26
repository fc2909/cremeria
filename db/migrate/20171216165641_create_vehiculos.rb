class CreateVehiculos < ActiveRecord::Migration[5.0]
  def change
    create_table :vehiculos do |t|
      t.string :marca
      t.string :noserie
      t.string :placa
      t.string :modelo
      t.string :tipo
      t.string :color
      t.string :combustible
      t.string :km
      t.string :n1
      t.string :n2
      t.string :n3
      t.integer :activo
      t.string :numero
      t.string :aseguradora
      t.string :poliza
      t.string :iniciopoliza
      t.string :finpoliza
      t.string :endoso
      t.string :inciso
      t.string :tel


      t.timestamps
    end
  end
end
