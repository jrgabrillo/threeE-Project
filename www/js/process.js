var app = new Framework7({material: true});			 
var $$ = Dom7;
/*
app.addNotification({
    title: 'Hello',
    message: "World",
    button:true,
    onClose:function(){
    	console.log("xx");
    }
});
*/

app.addNotification({
    title: "title",
    message: "message"
});


$('document').ready(function(){
	// variable declarations
	// string
		var var_name1 = "value";
		var var_name2 = 'value';

	// number
		var var_name = 143;

	// boolean
		var var_name1 = true;
		var var_name2 = false;

		var var_name3 = 1; // true
		var var_name4 = 0; // false

	// arrays
		var array_name1 = new Array(Name => 'Rufo', Age => 18);
		var array_name2 = [Name => "Rufo", Age => 18];


		console.log(array_name1);
		console.log(array_name1[0]);
		console.log(array_name2[1]);

	// objects JSON (JavaScript Object Notation)
	var object_name = {"Name":"Rufo","Age":18, "dim":{"idim":{"iidim":{"stop":"stop"}}}};
	console.log(object_name);
	console.log(object_name.Name);
	console.log(object_name.Age);

	// functions
		// anymous and named
			var func_name2 = function(){  //parent function
				'use strict';

				return {
					plus: function(num1,num2){ // child function
						return num1+num2;	
					},
					minus: function(num1,num2){
						return num1-num2;
					},
					devide:function(num1,num2){
						return num1/num2;
					},
					multiply:function(num1,num2){
						return num1*num2;
					},
					modulus:function(num1,num2){
						return num1%num2;
					},
					all:function(){

						// ipakita kung ano ung resulta kapag may nesting functions or a dimensions of functions.

						var num1 = 100, num2 = 0;
						var content = "";
						var res = func_name1.plus(num1,num2);
						content += num1+" + "+num2+" = "+res+"<br/>";

						var res = this.minus(num1,num2);
						content += num1+" - "+num2+" = "+res+"<br/>";

						var res = this.devide(num1,num2);
						content += num1+" / "+num2+" = "+res+"<br/>";

						var res = this.multiply(num1,num2);
						content += num1+" * "+num2+" = "+res+"<br/>";

						var res = this.modulus(num1,num2);
						content += num1+" % "+num2+" = "+res+"<br/>";

						return content;
					}
				}
			}

func_name();

var content = func_name().all();
console.log(content);

$(".content-block p").html(content);
});