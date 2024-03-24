const element = document.getElementById("btn");
element.addEventListener("click", multiplication);

function multiplication(){
	var number = document.getElementById("number").value;
	var range = document.getElementById("range").value;
	var answer;
	var result;

	for(let i=0; i<number; i++){
		result = "<tr>";
		for(let j=0; j<range; j++){
			answer = (i+1)*(j+1);
			result += "<td>" + answer + "</td>";
		}
		result += "<tr><br>";
		//document.write("<br>");
		document.write(result);
	}
}