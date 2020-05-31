function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const hor_ul = document.getElementById("horaires");
  const URL =
    "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/horaire/";
    
    function rech_horaire(){

      let rechercheHoraire=document.getElementById("nomHoraire").value;
        fetch(URL)
        .then((resp) => resp.json())
        .then(function (data) {
          let horaires = data.items; //.results;
          return horaires.map(function (horaire) {
            if(horaire.id_horaire === rechercheHoraire){
                                          let li = createNode("li"),
                                            span = createNode("span");
                                          span.innerHTML = `${horaire.id_horaire} ${horaire.heure}`;
                                          append(li, span);
                                          append(hor_ul, li);
            }
                                        
          });
        })
        .catch(function (error) {
          console.log(JSON.stringify(error));
      
        }) 
      };