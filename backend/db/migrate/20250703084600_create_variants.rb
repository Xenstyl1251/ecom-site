class CreateVariants < ActiveRecord::Migration[7.2]
  def change
    create_table :variants, id: :uuid do |t|
      t.references :product, null: false, foreign_key: true, type: :uuid
      t.decimal :price, null: false, precision: 10, scale: 2
      t.boolean :master, null: false, default: false
      t.integer :stocks, null: false, default: 0

      t.timestamps
    end
  end
end
