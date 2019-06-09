class CreateDatapoints < ActiveRecord::Migration[5.2]
  def change
    create_table :datapoints do |t|
      t.decimal :x
      t.decimal :y

      t.timestamps
    end
  end
end
