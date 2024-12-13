
let enterPassword = async () => {
  const password = document.getElementById("password").value
  console.log(password)

  let page = await fetch(`./${password}/index.html`).then((res) => res.text())

  if (page.includes("Error")) {
    document.getElementById("Error").innerText = "Try again"
  } else {
    document.getElementById("Error").innerText = ""
    window.location.href = `./${password}/index.html`;
  }
}