function calculateGrade(percentage) {
  //your code here
	if(percentage>=90){
		return 'A';
	}
	if else(percentage<=89 && percentage>=80){
		return 'B';
	}
	if else(percentage<=79 && percentage>=70){
		return 'C';
	}
	if else(percentage<=69 && percentage>=60){
		return 'D';
	}
	if else(percentage<60){
		return 'F';
	}
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
