class CreateProducts < ActiveRecord::Migration[7.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, default: ""
      t.boolean :with_variants, null: false, default: false
      t.string :currency, null: false, default: "php"

      t.timestamps
    end
  end
end
