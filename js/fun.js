	function jp1() {
		var myEl = document.getElementById("mu");
		x = parseInt(myEl.value);
		if(x>0){
			
			x = x - 1;
			myEl.value = String(x);
		}
	}
	
	function eee()
	{
		
		console.log("Tas bija peles klikšķis");
	
	}
	
	
	var jpMaxSize = 50;
	var jpCSize = 5;
	let jps1 = 0;
	
	var prove = "Šis ir teksts un gaŗš..."
	function jpOnTimer()
	{
		var jpDa = document.getElementById("rez");
		jpDa.setAttributeNS =  String(jpCSize);
		//console.log(jpDiv1.);	
		jpCSize++;
		console.log(prove.substring(jps1,jps1+4));
		console.log(jpCSize);
		jps1++;
		if(jps1>13)
			jps1 = 0;	
		if(jpCSize >jpMaxSize)
			jpCSize = 5;	
	}
	//setInterval(jpOnTimer, 1000);
	
	
	
	function jp_f1() {
		console.log("Poga ar klikšķi");	
		//window.alert("Otrs variants");
		let lauk1 = document.getElementById("sk");
		let rezi = document.createElement("P");
		let my11 = document.getElementById("rez");

		in_dati = lauk1.value;
		kvadr = parseFloat(in_dati);
		out_dati = String(kvadr*kvadr);
		console.log(out_dati);

		rezi.innerHTML = "Skaitļa "+in_dati+ " kvadrāts = "+out_dati;		
		my11.appendChild(rezi);	
	}





	function jpplus() {
		var myEl = document.getElementById("mu");
		var myE2 = document.getElementById("m1");
		x = parseInt(myEl.value);
		if(x<12){
			
			x = x + 1;
			myEl.value = String(x);
		}
		myE2.innerHTML = "Teksts "+x
	}
	var aa=[1,2,3,45,6];
	function tests() {
		
		console.log(aa);
		}
	function myfu() {
		var i;
		var kk=10;
		var te="";
		var cars=["Buba","Opel","BMV","Audio"];
		for (i = 0; i < cars.length; i++) {
				te += cars[i] + "<br>";
				console.log(te);
			}
		}
	