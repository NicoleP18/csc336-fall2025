async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    document.getElementById("worldDiv").innerHTML =
        `<ul><li>${data.places[0].buildings[0].classrooms[0].employees[0].name}</li></ul>`;

}

loadWorld();

let nameForm = document.querySelector("#nameForm");


nameForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    
    let formData = new FormData(nameForm);
    let formDataInObjectForm = Object.fromEntries(formData.entries());

    const res = await fetch("/excite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataInObjectForm)
    });

    const updatedWorld = await res.json();
    
    loadWorld();
});