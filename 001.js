function data() {
		var nilai = document.getElementById("nilai").value;
		if(nilai < 0){
			document.getElementById("grade").innerHTML = "Input nilai positif";
		}else if(nilai >=90){
			document.getElementById("grade").innerHTML = "A";
		}else if(nilai >79 && nilai < 90){
			document.getElementById("grade").innerHTML = "B";
		}else if(nilai >69 && nilai < 80){
			document.getElementById("grade").innerHTML = "C";
		}else if(nilai >59 && nilai < 70){
			document.getElementById("grade").innerHTML = "D";
		}else if(nilai <=59){
			document.getElementById("grade").innerHTML = "E";
		}
	}