datapoints = [
    { 
        "x" => "0", 
        "y" => "8" 
    },
    { 
        "x" => "1", 
        "y" => "5" 
    },
    { 
        "x" => "2", 
        "y" => "4" 
    },
    { 
        "x" => "3", 
        "y" => "9" 
    },
    { 
        "x" => "4", 
        "y" => "1" 
    },
    { 
        "x" => "5", 
        "y" => "7" 
    },
    { 
        "x" => "6", 
        "y" => "6" 
    },
    { 
        "x" => "7", 
        "y" => "3" 
    },
    { 
        "x" => "8", 
        "y" => "2" 
    },
    { 
        "x" => "9", 
        "y" => "5" 
    }
]

datapoints.each do |point|
  datapoint = Datapoint.create!(x: point["x"], y: point["y"])
end

piechartdata = [
    {
      "angle0" => "0",
      "angle" => "3.1415926 / 4",
      "opacity" => "0.2",
      "radius" => "10",
      "radius0" => "60"
    },
    {
      "angle0" => "3.1415926 / 4",
      "angle" => "(2 * 3.1415926) / 4",
      "opacity" => "0.4",
      "radius" => "30",
      "radius0" => "50"
    },
    {
      "angle0" => "(2 * 3.1415926) / 4",
      "angle" => "(3 * 3.1415926) / 4",
      "opacity" => "0.6",
      "radius" => "20",
      "radius0" => "75"
    },
    {
      "angle0" => "(3 * 3.1415926) / 4",
      "angle" => "(4 * 3.1415926) / 4",
      "opacity" => "0.8",
      "radius" => "10",
      "radius0" => "30"
    },
    {
      "angle0" => "(4 * 3.1415926) / 4",
      "angle" => "(5 * 3.1415926) / 4",
      "opacity" => "1",
      "radius" => "10",
      "radius0" => "20"
    },
    { 
      "angle0" => "0",
      "angle" => "(5 * 3.1415926) / 4",
      "opacity" => ".2",
      "radius" => "0",
      "radius0" => "5"
    }
  ]

  piechartdata.each do |point|
    piechartdata = Piechart.create!(    angle0: point["angle0"] \
                                    ,   angle: point["angle"] \
                                    ,   opacity: point["opacity"] \
                                    ,   radius: point["radius"] \
                                    ,   radius0: point["radius0"])
  end