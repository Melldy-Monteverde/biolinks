function portfolioError() {
  let btnPorfotlio = document.getElementById("btn-portfolio");

  btnPorfotlio.addEventListener("click", () => {
    Swal.fire("Hola!", "Disculpa, sigo trabjando en esta sección!", "info");
  });
}

portfolioError();

const sent = () => {
  Swal.fire("Enviado", "Tu consulta fue enviada con exito", "succes");
};

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  const formID = document.getElementById("form-id");

  formID.setAttribute(
    "action",
    "https://formsubmit.co/b5e83f79958bd859bd2f89880fde2ac2"
  );

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          sent();
          setTimeout(() => {
            form.classList.add("was-validated");
          }, 3000);
        }
      },
      false
    );
  });
})();
