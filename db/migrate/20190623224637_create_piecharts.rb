class CreatePiecharts < ActiveRecord::Migration[5.2]
  def change
    create_table :piecharts do |t|
      t.decimal :angle0
      t.decimal :angle
      t.decimal :opacity
      t.decimal :radius
      t.decimal :radius0

      t.timestamps
    end
  end
end
