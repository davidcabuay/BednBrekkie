class EditReviewTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :review, :body
  end
end
