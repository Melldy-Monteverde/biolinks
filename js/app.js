function portfolioError() {
  let btnPorfotlio = document.getElementById("btn-portfolio");

  btnPorfotlio.addEventListener("click", () => {
    Swal.fire({
      title: "Hi!",
      text: "Sorry, we still working here!",
      imageUrl: "../assets/img/devWorking.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "dev working",
    });
  });
}

portfolioError();
