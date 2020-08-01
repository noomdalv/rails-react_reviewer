class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :product_id
end
