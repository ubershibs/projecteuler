# Requires a file called "p022_names.txt" which you can download from the ProjectEuler.net
alphabet = %w(0 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
namesBlob = File.open("p022_names.txt", "r").readlines
names = namesBlob[0].split(',').map {|i| i = i[1..-2]}
names = names.sort
names.each_with_index do |name, i|
  nameArr = name.split('')
  nameArr = nameArr.map { |j| j = alphabet.index(j) }
  product = nameArr.reduce(:+)
  names[i] = product * (i + 1)
end
sum = names.reduce(:+)
puts sum
