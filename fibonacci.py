# Normal recursive function
def fib(n):
	if n == 1 or n == 2:
		return 1
	else:
		return fib(n-2) + fib(n-1)

# Simple memoized function, with memoization logic inside the function
memo = dict()

def fib_memo(n):
	"""Memoized version of fib(n)"""
	result = None
	if n in memo:
		result = memo[n]
	elif n == 1 or n == 2:
		result = 1
	else:
		result = fib(n-2) + fib(n-1)
	memo[n] = result
	return result

# Fancier memoized function, with logic in the memoize function
def memoize(f):
	memo = dict()

	# this is a closure, it keeps a reference of its local environment 
	#(including the memo dict)
	def memoized_f(n):	 # this assumes that f only takes one argument, n
		if n not in memo:
			result = f(n)
			memo[n] = result
		return memo[n]

	return memoized_f

# Create the memoized function like this
memo_fib = memoize(fib)
# Then call it like this
memo_fib(5)

