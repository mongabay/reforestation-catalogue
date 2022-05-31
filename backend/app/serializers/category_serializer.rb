class CategorySerializer
  include JSONAPI::Serializer
  attributes :slug,                                             
  :label,                                          
  :tooltip_description,                                          
  :form_description,                                            
  :step_by_step_description

  has_many :filters, serializer: FilterSerializer
end
