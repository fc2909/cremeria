class AddPictureToUsuarios < ActiveRecord::Migration[5.0]
  def change
    add_column :usuarios, :picture, :string
  end
end
