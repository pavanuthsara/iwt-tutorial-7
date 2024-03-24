const element = document.getElementById("btn");
element.addEventListener("click", multiplication);

function multiplication(){
	var number = document.getElementById("number").value;
	var range = document.getElementById("range").value;
	var answer;

	document.write("<table>");
	for(let i=0; i<number; i++){
		document.write("<tr>");
		for(let j=0; j<range; j++){
			answer = (i+1)*(j+1);
			document.write("<td>" + answer + "</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
}