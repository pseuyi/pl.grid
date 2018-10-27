# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  source     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :url, :source, presence: true
end
