class Product < ApplicationRecord
  validates :title, presense: true
end
