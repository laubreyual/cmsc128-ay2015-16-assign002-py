

	/*********************************
			Ual, Laubrey Marie U.
			2013-09918
			CMSC 128 AB-7L
	********************************/



function numToWords(input){ //This is the function that will return the number in words form
	var divisor = 1000000; //since the input allowed is upto 7 digits only
	var word = ""; //array of the word equivalent, accumulating
	var thousands = false;	//boolean variable to check if the number is in thousands form
	
	if(input==0){ //special case for zero
		return "zero ";
	}
	while(input>0){
		if(Math.floor(input/divisor)>0 && (divisor==10000 || divisor==10)){ //tens or ten thousands case
		/*
			this case is separated from other numbers because the words ten, eleven, twelve, thirteen, fourteen, fifteen,
			sixteen, seventeen, eighteen and nineteen are used only for these decimal places
		*/
			switch(Math.floor(input/divisor)){ //cases for tens or thousands place
				case 1: //if number one it will check the following number in the right
					switch(Math.floor((input - (Math.floor(input/divisor)*divisor))/(divisor/10))){ //number in the right
						case 0:
							word = word + "ten ";
							break;
						case 1:
							word = word + "eleven ";
							break;
						case 2:
							word = word + "twelve ";
							break;
						case 3:
							word = word + "thirteen ";
							break;
						case 4:
							word = word + "fourteen ";
							break;
						case 5:
							word = word + "fifteen ";
							break;
						case 6:
							word = word + "sixteen ";
							break;
						case 7:
							word = word + "seventeen ";
							break;
						case 8:
							word = word + "eighteen ";
							break;
						case 9:
							word = word + "ninetten ";
							break;
					}
					input = input - (Math.floor(input/divisor)*divisor); //updates the number, moving to the right
					divisor = divisor / 10; //updates the divisor, one decimal place to the right
					if(divisor==1000) word = word + "thousand "; //if the number is in ten thousands, the 'thousand' word is appended
					break;
				case 2:
					word = word + "twenty ";
					if (divisor==10000) thousands = true;
					break;
				case 3:
					word = word + "thirty ";
					if (divisor==10000) thousands = true;
					break;
				case 4:
					word = word + "fourty ";
					if (divisor==10000) thousands = true;
					break;
				case 5:
					word = word + "fifty ";
					if (divisor==10000) thousands = true;
					break;
				case 6:
					word = word + "sixty ";
					if (divisor==10000) thousands = true;
					break;
				case 7:
					word = word + "seventy ";
					if (divisor==10000) thousands = true;
					break;
				case 8:
					word = word + "eighty ";
					if (divisor==10000) thousands = true;
					break;
				case 9:
					word = word + "ninety ";
					if (divisor==10000) thousands = true;
					break;
				
			}
			input = input - (Math.floor(input/divisor)*divisor); //updates the number, moving to the right
		}//end of tens or ten thousands case
		else if(Math.floor(input/divisor)>0){ //if it is not tens or ten thousands
			switch(Math.floor(input/divisor)){
				case 1:
					word = word + "one ";
					break;
				case 2:
					word = word + "two ";
					break;
				case 3:
					word = word + "three ";
					break;
				case 4:
					word = word + "four ";
					break;
				case 5:
					word = word + "five ";
					break;
				case 6:
					word = word + "six ";
					break;
				case 7:
					word = word + "seven ";
					break;
				case 8:
					word = word + "eight ";
					break;
				case 9:
					word = word + "nine ";
					break;
			}
			input = input - (Math.floor(input/divisor)*divisor); //updates the divisor
			if(divisor==1000000) word = word + "milion "; 
			else if(divisor==100000) {
				word = word + "hundred ";
				thousands = true
			}
			else if(divisor==1000) thousands = true;
			else if(divisor==100) word = word + "hundred ";
			else word = word +" ";
		}//end of case not in tens or ten thousands place
		if (thousands && divisor==1000) word = word + "thousand ";
		divisor = divisor/10;
	}//end of while loop
	return word;
}//end of numToWords function


function wordsToNum(word){//This is the function that will return the number in digit form
	var words = word.split(" "); //to put each word in an array, space is used as delimeter
	var num = 0;
	var i;
	var value = 0; //temporary storage of the words already "converted" to digits
	
	if(words[0]=="zero" && words.length==1){ //special case of zero
		return 0;
	}
	for(i=0; i<words.length; i++){//traverse the whole array (excluding the spaces)
		switch(words[i]){ //identifies each number
			case "one":
				value = 1;
				break;
			case "two":
				value = 2;
				break;
			case "three":
				value = 3;
				break;
			case "four":
				value = 4;
				break;
			case "five":
				value = 5;
				break
			case "six":
				value = 6;
				break;
			case "seven":
				value = 7;
				break;
			case "eight":
				value = 8;
				break;
			case "nine":
				value = 9;
				break;
			case "ten":
				value = 10;
				break;
			case "eleven":
				value = 11;
				break;
			case "twelve":
				value = 12;
				break;
			case "thirteen":
				value = 13;
				break;
			case "fourteen":
				value = 14;
				break;
			case "fifteen":
				value = 15;
				break;
			case "sixteen":
				value = 16;
				break;
			case "seventeen":
				value = 17;
				break;
			case "eighteen":
				value = 18;
				break;
			case "nineteen":
				value = 19;
				break;
			//words[i+2] since there can be another word after these words, e.g twenty one
			case "twenty":
				value = 20;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "thirty":
				value = 30;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "fourty":
				value = 40;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "fifty":
				value = 50;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "sixty":
				value = 60;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "seventy":
				value = 70;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "eighty":
				value = 80;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			case "ninety":
				value = 90;
				if(words [i+2]=="thousand")
					value = value*1000;
				break;
			default:
				value = 0;
		}//end of switch case
		if(i+1<words.length){ //for the numbers with number of digits>2
			switch(words[i+1]){
				case "million":
					value = value*1000000;
					i++;
					break;
				case "hundred": //this also holds the hundred thousands place
					if(i+2<words.length && (words[i+2]=="thousand"||words[i+3]=="thousand")||words[i+4]=="thousand"){
						value = value*100000;
						i++;
					}
					else{
						value = value*100;
						i++;
					}
					break;
				case "thousand":
					value = value*1000;
					i++;
					break;
			}
		}//end of case which handles the input with 3 or more digits
		num = num + value;
	}//end of for loop
	return num;
}//end of wordsToNum function


function wordsToCurrency(word, currency){//This is function that will return the number with currency using the words
//this uses the function wordsToNum to convert it to numeral form
	return currency +" "+ wordsToNum(word); //returns the currency together with the number, e.g USD 14
}//end of wordsToCurrency function


function numberDelimited(input, delimiter, limit){//This is the function that will and the specified delimiter and length to the input number
	var numbers = input.toString().split("");//adds numbers in an array, 123 -> 1, 2, 3
	var i = numbers.length - 1;
	var x = 1;
	var output = "";//accumulates the value
	
	while (i>-1){ //this will traverse the array and will add the delimiter
		if (x%limit==0 && i!=0){ //delimiter is placed to the left of the limit
			output = delimiter + numbers[i] + output;
		}else{
			output = numbers[i] + output;
		}
		i--;
		x++;
	}//end of while loop
	return output;
}//end of numberDelimited function






