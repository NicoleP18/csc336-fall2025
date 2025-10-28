async function loadWorld() {
  const res = await fetch("/world");
  const data = await res.json();

  const employees = data.regions[0].buildings[0].classrooms[0].employees;
  const list = employees.map(e => `<li>${e.name} (${e.major})</li>`).join("");
  document.getElementById("worldDiv").innerHTML = `<ul>${list}</ul>`;
}

loadWorld();

const nameForm = document.querySelector("#nameForm");

nameForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(nameForm);
  const formDataObj = Object.fromEntries(formData.entries());

  await fetch("/employee", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formDataObj)
  });

  loadWorld();
});
