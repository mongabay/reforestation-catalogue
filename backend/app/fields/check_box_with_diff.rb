class CheckBoxWithDiff < Trestle::Form::Fields::CheckBox
  include WithDiff
  include TrestleHelper

  def field
    wrapper_class = options.delete(:class)
    wrapper_class = default_wrapper_class if wrapper_class.empty?

    safe_join [
      diff_tag,
      content_tag(:div, class: wrapper_class) do
        safe_join([
          builder.raw_check_box(name, options.merge(class: input_class), checked_value, unchecked_value),
          builder.label(name, options[:label] || admin.human_attribute_name(name), class: label_class, value: (checked_value if options[:multiple]))
        ])
      end
    ]
  end
end
