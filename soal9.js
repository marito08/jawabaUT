 var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         var data=JSON.parse(xhttp.responseText);
         data.forEach(function(element) {
         document.getElementById("demo").innerHTML +="NIM :" + element.id + "<br>Nama :" + element.name + "<br>Alamat :" + element.age + "<br><br>";
    });
      }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();