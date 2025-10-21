async function loadWorld() {
    const res = await fetch("/world");
    const data = await res.json();

    document.getElementById("worldDiv").innerHTML =
        `<ul><li>${data.regions[0].towns[0].notable_people[0].name}</li></ul>`;
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