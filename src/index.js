if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((register) => {
      console.log("register");
      console.log(register);
    })
    .catch((e) => {
      console.log("not register");
      console.log(e);
    });
}
