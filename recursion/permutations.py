# # Generate all the re-orderings of a set of letters. (permutations)

# def get_permutations(letters):
# 	"""INPUT: a set of letters; OUTPUT: a set of lists containing all permuations"""
# 	l_list = list(letters)
# 	#print "l_list: " + str(l_list)
	
# 	if len(l_list) == 1:
# 		perms = l_list

# 	else:
# 		perms = []

# 		for l in l_list:
# 			#print "l: " + l

# 			other_letters = [m for m in l_list if m != l]
# 			#print "other_letters: " + str(other_letters)
			
# 			other_perms = get_permutations(other_letters)
# 			for p in list(other_perms):
# 				perms.append(l + p)

# 				#print "perms: " + str(perms)

# 	return set(perms)

# print get_permutations(set(["a"]))
# #print get_permutations(set(["a", "b", "c"]))
# answer = get_permutations(set(["a", "b", "c", "d"]))
# print answer
# print len(answer)
# print len(answer) == (4 * 3 * 2 * 1)


def get_permutations2(letters):
	"""INPUT: a string; OUTPUT: a list containing all permuations of letters"""
	l_list = []
	#print "l_list: " + str(l_list)
	
	if len(letters) == 1:
		perms = [letters]

	else:
		perms = []

		for l in letters:
			#print "l: " + l

			other_letters = "".join([m for m in letters if m != l])
			#print "other_letters: " + str(other_letters)
			
			other_perms = get_permutations2(other_letters)
			print "other_perms: " + str(other_perms)
			for p in other_perms:
				perms.append(l + p)

				#print "perms: " + str(perms)

	return perms


#print get_permutations2("a")
for x in get_permutations2("abcde"):
	print x 