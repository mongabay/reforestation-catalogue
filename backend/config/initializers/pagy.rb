require 'pagy/extras/overflow'
Pagy::DEFAULT[:overflow] = :empty_page
Pagy::DEFAULT[:items] = 20


# When you are done setting your own default freeze it, so it will not get changed accidentally
Pagy::DEFAULT.freeze