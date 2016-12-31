path = ["NORTH", "SOUTH", "EAST", "WEST"]
path2 =  ["NORTH", "WEST", "SOUTH", "EAST"] 
path3 = ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"]

BAD_PATHS = {
  "NORTH" => "SOUTH",
  "SOUTH" => "NORTH",
  "EAST" => "WEST",
  "WEST" => "EAST"
}

def path_finder(path)
  i = 1
  while i < path.length
    2.times {path.delete_at(i - 1)} && i = 0 if BAD_PATHS[path[i - 1]] == path[i]
    i += 1
  end
  path
end

p path_finder(path)
p path_finder(path2)
p path_finder(path3)

