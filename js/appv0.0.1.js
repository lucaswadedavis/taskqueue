$(document).ready(function(){
	app.c.init();
	app.v.init();
})
/////////////////////////////////////////////////////////////////////////////////

var app={m:{},v:{},c:{}};

/////////////////////////////////////////////////////////////////////////////////

app.m.tasks=[];
app.m.users=[];
app.m.colors={};
app.m.colors.primary="#f37";
app.m.colors.primaryDark="#f05";
app.m.colors.lightGrey="#555";
app.m.colors.darkGrey="#333";

/////////////////////////////////////////////////////////////////////////////////

app.c.init=function(){
	app.m.metadata={"title":"Taskqueue","version":"0.0.1"};
	app.c.users(30);
	app.c.tasks();
};

app.c.users=function(x){
	var x=x||10;
	for (var i=0;i<x;i++){
		app.m.users.push(davis.randomWord());
	}
}

app.c.tasks=function(x){
	var x=x||10;
	for (var i=0;i<x;i++){
		var t={};
		t.to=davis.pick(app.m.users);
		t.from=davis.pick(app.m.users);
		t.title=davis.randomWord(10);
		t.estimate=davis.random(10);
		app.m.tasks.push(t);
	}
};

///////////////////////////////////////////

app.v.init=function(){
	document.title=app.m.metadata.title;
	app.v.style();
	$("body").html(app.v.layout());
};

app.v.userList=function(x,id){
	var x=x||["luke"];
	var id=id||"";
	var d="";
	d+="<div class='wrapper'><input type='text'></input></div>";
	d+="<table id='"+id+"'>";
	d+="<tr><th>users</th><th>tasks</th></tr>";
	for (var i=0;i<x.length;i++){
		var rowClass="odd";
		if (i%2==0){rowClass='even'}
		d+="<tr class='"+rowClass+"'><td>"+x[i]+"</td><td>"+davis.random(10)+"</td></tr>";
	}
	d+="</table>";
	return d;
};

app.v.tasks=function(){
	var t=app.m.tasks;
	console.log(t);
	var d="";

	for (var i=0;i<t.length;i++){
		d+="<div class='task'>";
			d+="<p class='task-estimate'>"+t[i].estimate+" hours</p>";
			d+="<p class='task-text'>"+t[i].title+"</p>";
			d+="<p class='task-from'>from "+t[i].from+"</p>";
		d+="</div>";
	}
	return d;
};

app.v.layout=function(){
	var d="";
	//d+="<h1>"+app.m.metadata.title+"</h1>";
	d+="<div id='content'>";
		d+="<table id='layout'>";
		//d+="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
		d+="<tr>";
			d+="<td id='area-users'>";
				d+=app.v.userList(app.m.users,'user-list');
			d+="</td>";
			d+="<td colspan='7' id='area-tasks'>";
				d+="<h1>"+app.m.metadata.title.toLowerCase()+"</h1>";
				d+="<p id='selected-user'>lwdavis</p>";
				d+=app.v.tasks();
			d+="</td>";
		d+="</tr>";
		d+="</table>";
	d+="</div>";
	return d;
};

app.v.style=function(){
	davis.style("body",{
		"width":"100%",
		"margin":"0px",
		"padding":"0px",
		"text-align":"center",
		"background":app.m.colors.lightGrey,
		"font-size":"2em",
		"font-family":"sans-serif"
	});
	davis.style("#area-tasks h1",{
		"text-align":"right",
		"color":app.m.colors.primary,
		"padding":"30px 30px 0 0",
		"margin":"0"
	});
	davis.style("div",{
		"padding":"0",
		"margin":"30px"
	});
	davis.style(".wrapper",{
		"border":"0",
		"padding":"0",
		"margin":"0"
	});
	davis.style("div.wrapper input[type=text]",{
		"width":"100%",
		"text-align":"center",
		"font-size":"2em",
		"color":app.m.colors.primary,
		"background":app.m.colors.lightGrey
	});
	davis.style("#content",{
		"padding":"0",
		"margin":"0",
		"border":"0"
	});
	davis.style("div.task",{
		"border":"1px solid "+app.m.colors.primary,
		"background":"#fff",
		"color":app.m.colors.darkGrey,
		"padding":"0px",
		"margin":"20px",
		"cursor":"pointer"
	});
	davis.style("table",{
		"width":"100%",
	});
	davis.style("#area-tasks",{
		"background":"#fff",
		"border-left":"3px solid #000"
	});
	davis.style("table#user-list td",{
		"border":"0px solid #fff",
		"background":app.m.colors.darkGrey,
		"color":"#fff",
		"padding":"5px",
		"cursor":"pointer"
	});
	davis.style("table#user-list th",{
		"color":"#fff",
		"cursor":"pointer"
	});
	davis.style("table#user-list tr.odd td",{
		"border":"0px solid #fff",
		"background":app.m.colors.lightGrey,
		"padding":"5px",
		"cursor":"pointer"
	});
	davis.style("table#user-list tr.odd td:hover",{
		"color":"#fff",
		"background":app.m.colors.primary
	});
	davis.style("table#user-list tr.even td:hover",{
		"color":"#fff",
		"background":app.m.colors.primary
	});
	davis.style("table#layout",{
		"table-layout":"fixed",
		"min-height":"100%",
		"margin":"0",
		"padding":"0"
	});
	davis.style("table#layout td",{
		"vertical-align":"top",
		"margin":"0"
	});
	davis.style("textarea",{
		"width":"100%",
		"font-size":"1.5em"
	});
	davis.style(".task-from",{
		"font-size":"0.8em",
		"color":app.m.colors.primary,
		"text-align":"right",
		"margin":"0",
		"padding":"5px"
	});
	davis.style(".task-estimate",{
		"font-size":"0.8em",
		"text-align":"right",
		"margin":"0",
		"padding":"5px",
		"color":"#000"
	});
	davis.style(".task-text",{
		"padding":"0 20px 0 20px",
		"margin":"0"
	});
	davis.style("p#selected-user",{
		"margin":"0",
		"padding":"0",
		"text-align":"right",
		"padding-right":"30px",
		"color":app.m.colors.lightGrey
	});
};