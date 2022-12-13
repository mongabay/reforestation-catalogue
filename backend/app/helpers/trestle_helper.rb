module TrestleHelper
  def update_badge
    content_tag(:span, "UPDATE", class: "badge badge-warning mr-1")
  end

  def update_info(info)
    content_tag(:div, class: "diff my-1 p-1", style: "background-color: #eee") do
      update_badge + content_tag(:span, info, class: "pl-1")
    end
  end
end
