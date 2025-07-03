json.extract! product, :id, :title, :description, :with_variant, :currency

json.master_price product.master.price
json.master_stocks product.master.stocks
