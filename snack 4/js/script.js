const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  ];

  let autoBenzina = [];
  let autoDiesel = [];
  let altreAuto = [];

  autoBenzina = automobili.filter((curAuto) => {
    if (curAuto.alimentazione === "benzina") {
        return true;
    } else {
        return false;
    }

  });
 console.log(autoBenzina);

 autoDiesel = automobili.filter((curAuto) => {
    if (curAuto.alimentazione === "diesel") {
        return true;
    } else {
        return false;
    }

  });
 console.log(autoDiesel);

 altreAuto = automobili.filter((curAuto) => {
    if (curAuto.alimentazione !== "benzina" && curAuto.alimentazione !== "diesel" ) {
        return true;
    } else {
        return false;
    }

  });
 console.log(altreAuto);
