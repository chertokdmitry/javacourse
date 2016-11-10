var allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 992229],
someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = ['это', 'массив', 'без', 'чисел'];


function isAllTrue(source, filterFn) {

	try {
		 if (!source) {
    	throw new Error ("Array is empty");
  	}
  	var a = 0;

	for (var i = 0; i < source.length; i++){
		if (filterFn(source[i])) {
			a++;
		}
	}

	if (a==source.length) {
		return true;
	}
	else {
		return false;
	}

	} catch (e) {
 		 console.log ( "Array is empty" );
	}
}

function isSomeTrue(source, filterFn) {

	try {
		 if (!source) {
    	throw new Error ("Array is empty");
  	}

	var a = 0,
	b = 0;


	for (var i = 0; i < source.length; i++){
		if (filterFn(source[i])) {
			a++;
		}
		else {
			b++;
		}
	}

	if (a==source.length) {
		return true;
	}
	
	else if (b==source.length) {
		return false;
	}

else {
		return true;
	}

	} catch (e) {
 		 console.log ( "Array is empty" );
	}
}

function isNumber(val) {
  return typeof val === 'number';
}


console.log(isAllTrue(someNumbers, isNumber)); 

console.log(isSomeTrue(someNumbers, isNumber)); 