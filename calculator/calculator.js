var app = new Vue({
	el: "#app",
	data: {
		"current": '',
	},
methods: {
	press: function (event) {
		let key = event.target.innerText;
		if (key != "=" && key!="C"){
			app.current += key;
		}
		else if (key === "="){
			equals();
		} else if (key === "C"){
			clear();
		} else if (key === "*"){
			multiply();
		} else if (key ==="/"){
			divide();
		} else if (key === "+"){
			add();
		} else if (key === "-"){
			substract();
		}
	}
}
});

function equals(){
app.current = eval(app.current)
}

function clear(){
//app.current="";
app.current = "";

}
function multiply(){
app.current +="*";
}
function divide(){
app.current +="/";
}
function add(){
app.current+="+";
}
function substract(){
app.current+="-";
}

