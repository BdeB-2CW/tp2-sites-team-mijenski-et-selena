function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const cin_ul = document.getElementById("cinemas");
  const URL =
    "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/cinema/";
    
    function rech_cinema(){

      let rechercheCinema=document.getElementById("nomCine").value;
        fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
          let cinemas = data.items; //.results;
          return cinemas.map(function (cinema) {
            if(cinema.id_cinema === rechercheCinema){
                                          let li = createNode("li"),
                                            span = createNode("span");
                                          span.innerHTML = `${cinema.id_cinema} ${cinema.nom}`;
                                          append(li, span);
                                          append(cin_ul, li);
            }
                                        
          });
        })
        .catch(function (error) {
          console.log(JSON.stringify(error));
      
        }) 
      };