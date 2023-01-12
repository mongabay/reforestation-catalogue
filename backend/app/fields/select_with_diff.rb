class SelectWithDiff < Trestle::Form::Fields::Select
  include WithDiff
  include TrestleHelper

  def field
    safe_join [diff_tag, builder.raw_select(name, choices, options, html_options, &block)]
  end
end
