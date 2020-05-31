function ins_cine() {
    let cine_rec = {
    };
    cine_rec.id_cinema = document.getElementById("id_cinema").value;
    cine_rec.nom = document.getElementById("nom").value;
  
    const URL =
      "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/cinema/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cine_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }