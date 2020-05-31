function ins_horaire() {
    let horaire_rec = {
    };
    horaire_rec.id_horaire = document.getElementById("id_horaire").value;
    horaire_rec.heure = document.getElementById("heure").value;
  
    const URL =
      "https://IQ7DM8TRH8LN68R-DB202005142013.adb.ca-montreal-1.oraclecloudapps.com/ords/tp2/horaire/";
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(horaire_rec),
    })
      .then((resp) => resp.json())
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(JSON.stringify(error));
      });
  }