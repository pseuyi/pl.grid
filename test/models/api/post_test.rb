# == Schema Information
#
# Table name: api_posts
#
#  id         :integer          not null, primary key
#  url        :string           not null
#  source     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class Api::PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
