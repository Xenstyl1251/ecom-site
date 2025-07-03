json.extract! product, :id, :title, :description, :with_variant, :currency

json.master_price product.master_variant.price
json.master_stocks product.master_variant.stocks
