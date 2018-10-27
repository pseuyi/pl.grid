class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :url, null: false
      t.string :source, null: false

      t.timestamps
    end
  end
end
