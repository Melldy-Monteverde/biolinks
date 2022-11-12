function portfolioError() {
  let btnPorfotlio = document.getElementById("btn-portfolio");

  btnPorfotlio.addEventListener("click", () => {
    Swal.fire("Hi!", "Sorry, we still working here!", "info");
  });
}

portfolioError();
