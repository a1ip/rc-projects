# This is a tail-recursive function, which is bad:
def factorial(n):
	if n == 0:
		return 1
	else:
		return n * factorial(n-1) 
		# recursive part is NOT a tail call (still have to multiply by n)


# This one is tail call optimized (no longer tail-recursive):
def factorial(n):
	def fact(i, acc): # acc = accumulator
		if i == 0:
			return acc
		else:
			return fact(i-1, acc*i) # now the recursion is a tail call

	return fact(n, 1)


# This is just a simplification of the above, 
# where you call fact(n, 1) instead of factorial(n)
def fact(i, acc):
	if i == 0:
		return acc
	else:
		return fact(i-1, acc*i)

fact(4, 1)