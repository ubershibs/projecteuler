def sum_of_multiples num
	total = 0
	i = 1
	until i == num do 
		if ( i.modulo(3) == 0 || i.modulo(5) == 0)
			total = total + i
		end
		i = i + 1
	end	

puts total.to_s

end

sum_of_multiples 1000