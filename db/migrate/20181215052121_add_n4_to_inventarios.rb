class AddN4ToInventarios < ActiveRecord::Migration[5.0]
  def change
    add_column :inventarios, :n4, :string
  end
end
