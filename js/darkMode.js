//Dark Mode con local Storage

let darkMode;

if (localStorage.getItem("darkMode")) {
  darkMode = localStorage.getItem("darkMode");
} else {
  darkMode = "light";
}

localStorage.setItem("darkMode", darkMode);

$(() => {
//Local Storage
  if (localStorage.getItem("darkMode") == "dark") {
    $("body").addClass("darkMode");
    $("#botonDark").hide();
    $("#botonLight").show();
  } else {
    $("#botonLight").hide();
  }

//Boton de Light Mode
  $("#botonLight").click(() => {
    $("#botonDark").show();
    $("#botonLight").hide();

    $("body").removeClass("darkMode");
    localStorage.setItem("darkMode", "light");
  });
  
//Boton de Dark Mode
  $("#botonDark").click(() => {
    $("#botonDark").hide();
    $("#botonLight").show();
    $("body").addClass("darkMode");
    localStorage.setItem("darkMode", "dark");
  });
});
