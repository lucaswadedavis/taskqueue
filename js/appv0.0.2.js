$(document).ready(function(){
	app.c.init();
	app.v.init();
	app.c.listeners();
})
/////////////////////////////////////////////////////////////////////////////////

var app={m:{},v:{},c:{}};

/////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////

app.c.init=function(){
	app.m.metadata={"name":"Ziph","version":"0.0.1"};
};

app.c.listeners=function(){

$("input#count").click(function(){
	var input=$("#input").val();
	input=app.c.ziph(input);
	var sortable=[];
	for (key in input){sortable.push([key,input[key].count]);}
	sortable.sort(function(a,b){return b[1]-a[1];});
	var d="";
	for (var i=0;i<sortable.length;i++){d+=sortable[i][0]+" "+sortable[i][1]+"<br>";}
	$("#output").html(d);
});

};

app.c.ziph=function(sample,n){
	var n=n||7;
	var lex={};
	sample=sample.split("");

	for (var i=0;i<=(sample.length-n);i++){
		//then populate the lexicon
			var compilation=[];
			for (var j=0;j<n;j++){
				compilation.push(sample[i+j])
			}
			compilation=compilation.join("");

		if (!lex[compilation]){
			lex[compilation]={};
			lex[compilation].count=1;
		}
		else{
			lex[compilation].count++;
		}
	}
	return lex;
};


///////////////////////////////////////////

app.v.init=function(){
	app.v.style();
	var d="";
	d+="<h1>ziph</h1>";
	d+="<table width='100%' ><tr><td>";
		d+="<textarea rows='10' cols='5' id='input' autofocus></textarea>";
		d+="<input type='button' value='count' id='count'></input>";
	d+="</td><td id='output'>";
	d+="</td></tr></table>";
	$("body").html(d);
};


app.v.style=function(){
	davis.style("body",{
		"width":"100%",
		"margin":"0px",
		"padding":"0px",
		"text-align":"center",
		"background":"#555",
		"color":"#fff",
		"font-size":"3em"
	});
	davis.style("div",{
		"padding":"0",
		"font-size":"1.5em",
		"margin":"30px"
	});
	davis.style("input[type=button]",{
		"width":"100%",
		"font-size":"2em"
	});
	davis.style("textarea",{
		"width":"100%",
		"font-size":"1.5em",
		"margin":"0"
	});
	davis.style("table",{
		"width":"100%",
		"table-layout":"fixed"
	});
	davis.style("td",{
		"padding":"20px",
		"margin":"30px",
		"vertical-align":"top",
		"text-align":"center"
	});
};