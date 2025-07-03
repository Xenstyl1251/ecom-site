class Product < ApplicationRecord
  has_one :master_variant, lambda { where(master: true) }, class_name: "Variant", inverse_of: :product, dependent: :destroy

  validates :title, :master_variant, presence: true

  accepts_nested_attributes_for :master_variant

  def to_builder
  end
end
