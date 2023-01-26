module TrestleHelper
  def changed_badge
    content_tag(:span, "CHANGED", class: "badge badge-warning mr-1")
  end

  def added_badge
    content_tag(:span, "ADDED", class: "badge badge-info mr-1")
  end

  def removed_badge
    content_tag(:span, "REMOVED", class: "badge badge-danger mr-1")
  end

  def changed_info(info)
    formatted_info = info
    formatted_info = '(empty)' unless info.present?
    formatted_info = 'Yes' if info == true
    formatted_info = 'No' if info == false

    content_tag(:div, class: "diff my-1 p-1", style: "background-color: #eee") do
      changed_badge + content_tag(:span, formatted_info, class: "pl-1")
    end
  end
end
