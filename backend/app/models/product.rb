class Product < ApplicationRecord
  has_one :master, lambda { where(master: true) }, class_name: "Variant", inverse_of: :product, dependent: :destroy

  validates :title, :master, presence: true

  accepts_nested_attributes_for :master
end
