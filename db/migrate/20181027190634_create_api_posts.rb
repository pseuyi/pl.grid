class CreateApiPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :api_posts do |t|
      t.string :url, null: false
      t.string :source, null: false

      t.timestamps
    end
  end
end
