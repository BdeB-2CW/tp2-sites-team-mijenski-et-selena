function createNode(element) {
    return document.createElement(element);
  }
  
  function append(parent, el) {
    return parent.appendChild(el);
  }
  
  const film_ul = document.getElementById("films");
  const URL =
    "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/film/";

  function rech_film(){

    let rechercheFilm=document.getElementById("nomFilm").value;
      fetch(URL)
      .then((resp) => resp.json())
      .then(function (data) {
        let films = data.items; //.results;
        return films.map(function (film) {
          if(film.titre === rechercheFilm){
                                        let li = createNode("li"),
                                          span = createNode("span");
                                        span.innerHTML = `${film.id_film} ${film.titre}`;
                                        append(li, span);
                                        append(film_ul, li);
          }
                                      
        });
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
    
      }) 
    };