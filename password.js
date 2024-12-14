let prefix = "/secrets/"
if (window.location.href.includes("127.0.0.1")) {
  prefix = "./"
}

let enterPassword = async () => {
  const password = document.getElementById("password").value
  console.log(password)

  let page = await fetch(`${prefix}${password}/index.html`).then((res) => res.text())

  if (page.includes(`<meta name="description" content="ALTERFALL">`)) {
    document.getElementById("Error").innerText = ""
    window.location.href = `${prefix}${password}`;
  } else {
    document.getElementById("Error").innerText = "Try again"
  }
}
