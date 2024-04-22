const colorMenu = () => {
  const menu = document.querySelector("#Portfolio");
  menu.style.color = "#ff4300";
};

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const dataF = new FormData(form);
  const data = Object.fromEntries(dataF);
  fetch("https://forms.nicepagesrv.com/v2/form/process", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  alert("Message sent successfully!");
});
