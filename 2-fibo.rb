fibo_nums = [1, 2, 3, 5]
fibo_evens = []
total = 0

while fibo_nums.last < 4000000 do
    size = fibo_nums.length
    next_fib = fibo_nums[size-2] + fibo_nums[size-1]
    fibo_nums.push next_fib
end

fibo_evens = fibo_nums.select {|number| number % 2 == 0}

fibo_evens.each do |num|
    total = total + num
end

puts total
