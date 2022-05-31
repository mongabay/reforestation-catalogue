class StaticPageSerializer
  include JSONAPI::Serializer
  attributes :slug,                                             
  :title,                                          
  :body
end
