class AddActivoToTaller < ActiveRecord::Migration[5.0]
  def change
    add_column :tallers, :activo, :integer
  end
end
