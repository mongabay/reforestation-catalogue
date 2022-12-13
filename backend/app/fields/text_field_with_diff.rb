class TextFieldWithDiff < Trestle::Form::Fields::TextField
  include WithDiff
  include TrestleHelper

  def field
    safe_join [diff_tag, builder.raw_text_field(name, options)]
  end
end
