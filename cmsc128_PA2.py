#	Author: Laubrey Marie U. Ual
#			2013-09918
#			CMSC 128 AB-7L
# 	Description:
#			Simple Bioinfomatics Library



def isValidStrings(str1, alphabet):												#function which checks if the string is valid based on the alphabet
	if type(str1) != str or type(alphabet) != str:
		return "Invalid argument"
	for i in range (0, len(str1)):
		if str1[i] not in alphabet:												#checks if every character in the string is in the alphabet
			return False
	return True																	#return value (boolean)



def countSubstrPattern(str1, str2):												#function which returns the number of times 2nd string occured in the 1st
	count = 0
	flag = 1

	if type(str1) != str or type(str2) != str:									#checks if arguments are valid
		return "Invalid argument"
	for i in range (0, len(str1)-len(str2)+1):
		for j in range (0, len(str2)):											#counts number of occurence of 2nd string starting from each index of 1st string
			if str1[i+j]!=str2[j]:
				flag = 0
		if flag == 1:
			count = count + 1
		flag = 1
	return count																#return value



def getHammingDistance(str1, str2):												#function which gets the Hamming Distance between two strings
	distance = 0

	if type(str1) != str or type(str2) != str or len(str1) != len(str2):		#checks if arguments are valid
		return "Invalid argument"
	for i in range (0, len(str1)):
		if str1[i]!=str2[i]:													#compares character by character
			distance = distance + 1
	return distance																#return value



def getSkew(str1, n):															#function which solves for the difference of number of G's and number of C's from index 1 to n
	numberOfG = 0
	numberOfC = 0
	if type(str1) != str or type(n) != int:										#checks if arguments are valid
		return "Invalid argument"
	if n < 1 or n > len(str1)													#out of bounds
		return "Error"
	else:
		for i in range (0, n):
			if str1[i] == "G":
				numberOfG = numberOfG + 1										#counts the frequency of G's
			if str1[i] == "C":
				numberOfC = numberOfC + 1										#counts the frequency of C's
		return numberOfG - numberOfC											#return value



def getMinSkewN(str1, n):														#function which gets the min skew from 1 to n, function getSkew is used
	min = False

	if type(str1) != str or type(n) != int:										#checks if arguments are valid
		return "Invalid argument"
	if n < 1 or n > len(str1):													#out of bounds
		return "Error"
	for i in range(1, n+1):
		temp = getSkew(str1, i)
		if min == False:														#initial min is set
			min = temp
		if min > temp:
			min = temp
	return min																	#return value



def getMaxSkewN(str1, n):														#function which gets the max skew from 1 to n, function getSkew is used
	max = False

	if type(str1) != str or type(n) != int:										#checks if arguments are valid
		return "Invalid argument"
	if n < 1 or n > len(str1):													#out of bounds
		return "Error"
	for i in range(1, n+1):
		temp = getSkew(str1, i)
		if max == False:														#initial max is set
			max = temp
		if max < temp:
			max = temp
	return max																	#return value
