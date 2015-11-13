focus = 600851475143

factors = []
nonprimes = []

i = 3

while i < Math.sqrt(focus) do

  if focus.modulo(i) == 0

    factors.push i 

  end

  i = i + 2

end


factors.each do |candidate|

  j = 2
  not_prime = false

  while j < candidate

    if candidate.modulo(j) == 0

       nonprimes.push candidate

    end

  j = j + 1

  end

end

primes = factors - nonprimes

puts primes.last.to_s

