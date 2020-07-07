function data() {
		var nilai = document.getElementById("nilai").value;
		if(nilai%2 == 1){
			document.getElementById("grade").innerHTML = "Nilai ganjil"
		}else{
			document.getElementById("grade").innerHTML = "Nilai genap"
		}
	}