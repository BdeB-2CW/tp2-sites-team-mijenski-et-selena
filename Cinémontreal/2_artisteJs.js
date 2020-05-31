function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const art_ul = document.getElementById("artistes");
  const URL =
  "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/artiste/";

  function rech_art(){

    let rechercheArt=document.getElementById("nomArtiste").value;
      fetch(URL)
      .then((resp) => resp.json())
      .then(function (data) {
        let artistes = data.items; //.results;
        return artistes.map(function (artiste) {
          if(artiste.nom === rechercheArt){
                                        let li = createNode("li"),
                                          span = createNode("span");
                                        span.innerHTML = `${artiste.id_artiste} ${artiste.nom}`;
                                        append(li, span);
                                        append(art_ul, li);
          }
                                      
        });
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
    
      }) 
    };