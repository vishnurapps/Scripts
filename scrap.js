var csv = ""

function calcTime(x)
{
	console.log(x)
	if (x.includes("min") && x.includes("hour"))
		{
			return (parseInt(x.split(" ")[0])*60 + parseInt(x.split(" ")[2]))
			
		}
	else if(x.includes("min"))
		{
			return(parseInt(x.split(" ")[0]))
		}
}

var x = document.getElementsByClassName("section-content");
for(i=0;i<x.length;i++){
	for(j=0;j<x[i].children.length;j++){
		if(i!=57)
		{
			csv += "\"" + x[i].children[j].getElementsByClassName("index")[0].innerText + "\"," +
				"\"" + x[i].children[j].getElementsByClassName("lesson-title course-item-title button-load-item")[0].innerText + "\"," +
				//"\"" + x[i].children[j].getElementsByClassName("meta duration")[0].innerText + "\"\n" ;
				"\"" + calcTime(x[i].children[j].getElementsByClassName("meta duration")[0].innerText) + "\"\n" ;
		}
		else
		{
			csv += "\"" + x[i].children[j].getElementsByClassName("index")[0].innerText + "\"," +
				"\"" + x[i].children[j].getElementsByClassName("lesson-title course-item-title button-load-item")[0].innerText + "\"," +
				"\"" + calcTime("0 min") + "\"\n" ;
		}
	}
}
console.log(csv);
