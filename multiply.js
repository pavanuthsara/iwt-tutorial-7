/* var btn = document.getElementById("btn");
btn.addEventListner("click", function(){
	//multiplication();
	
}); */

function multiplication(){
	var number = document.getElementById("number").value;
	var range = document.getElementById("range").value;

	for(let i=0; i<number; i++){
		for(let j=0; j<range; j++){
			document.write((i+1)*(j+1));
			document.write(" ");
		}
		document.write("<br>");
	}
}