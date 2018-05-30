class AddN2ToEmpleado < ActiveRecord::Migration[5.0]
  def change
    add_column :empleados, :n2, :string
  end
end
