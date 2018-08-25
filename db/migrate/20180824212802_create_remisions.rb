class CreateRemisions < ActiveRecord::Migration[5.0]
  def change
    create_table :remisions do |t|
      t.string :folio
      t.string :importe
      t.string :ppd
      t.string :fc
      t.string :fechaf
      t.string :totalValor
      t.string :depositoT
      t.string :tipo
      t.string :totaDepos
      t.string :totalFacturarString
      t.integer :activo

      t.timestamps
    end
  end
end
