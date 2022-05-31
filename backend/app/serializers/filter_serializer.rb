class FilterSerializer
  include JSONAPI::Serializer
  
  attributes :slug,                                               
  :label,                                          
  :data_type,                                          
  :query_mode,                                            
  :hide,
  :form_order,
  :filter_group_order,
  :form_required
end
