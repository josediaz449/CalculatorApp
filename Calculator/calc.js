/*
 * Implement all your JavaScript in this file!
 */
 //inputField variable
 var inputField = $('#display');
 var reset = false;
 var lastNum = 0;
 var operation = '';
 //number buttons functionality
 $('#button1').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button1').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button2').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button2').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button3').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button3').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button4').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button4').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button5').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button5').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button6').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button6').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button7').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button7').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button8').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button8').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button9').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button9').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});
 $('#button0').click(function() {
	 if(reset){
		 inputField.val('');
		 reset=false;
	 }
	var bVal = $('#button0').val();
	var inputVal = inputField.val();
	inputField.val(inputVal+bVal);
});

//clearButton functionality
 $('#clearButton').click(function() {
	inputField.val('');
	reset=true;
	lastNum=0;
});

//arithmetic buttons functionality
 $('#equalsButton').click(function() {
	var inputNum = Number(inputField.val());
	if(operation=='+'){
		inputField.val(inputNum+lastNum);
		if(!reset){
			lastNum=inputNum;
		}
		
	}
	if(operation=='-'){
		if(!reset){
			inputField.val(lastNum-inputNum);
			lastNum=inputNum;
		}
		else{
			inputField.val(inputNum-lastNum);
		}
	}
	if(operation=='*'){
		inputField.val(inputNum*lastNum);
		if(!reset){
			lastNum=inputNum;
		}
	}
	if(operation=='/'){
		if(!reset){
			if(inputNum==0){
				inputField.val('infinity');
			}
			else{
				inputField.val(lastNum/inputNum);
				lastNum=inputNum;
			}
		}
		else{
			if(lastNum==0){
				inputField.val('infinity');
			}
			else{
				inputField.val(inputNum/lastNum);
			}
		}
	}
	reset=true;
	
});
 $('#addButton').click(function() {
	lastNum = Number(inputField.val());
	operation = '+';
	reset=true;
});
$('#subtractButton').click(function() {
	lastNum = Number(inputField.val());
	operation = '-';
	reset=true;
});
$('#multiplyButton').click(function() {
	lastNum = Number(inputField.val());
	operation = '*';
	reset=true;
});
$('#divideButton').click(function() {
	lastNum = Number(inputField.val());
	operation = '/';
	reset=true;
});









