let items = []; 

function populateItemInfoDiv() {
  let itemInfoDiv = document.querySelector("#all-item-info");
  itemInfoDiv.innerHTML = "";

  for (let item of items) {
    let itemHTML = createItemDiv(item);
    itemInfoDiv.innerHTML += itemHTML;
  }
}

function createItemDiv(item) {
  return `
    <div class="item">
      <h3>${item.type}</h3>
      <div class="stats">
        <div>Importance: ${item.importance}</div>
        <div>Day Due: ${item.dayDue}</div>
        <div>Notes: ${item.notes}</div>
      </div>
    </div>
  `;
}

function addNewItem(e) {
  e.preventDefault();
  let errorDiv = document.querySelector("#error-message");
  errorDiv.textContent = "";

  let typeInput = document.querySelector("#item-type-field").value.trim();
  let importanceInput = document.querySelector("#item-importance-field").value.trim();
  let dayDueInput = document.querySelector("#item-dayDue-field").value.trim();
  let notesInput = document.querySelector("#notes-type-field").value.trim();

  
  if (!typeInput || !importanceInput || !dayDueInput || !notesInput) {
    errorDiv.textContent = "All fields are required.";
    return;
  }
  if (typeInput.length < 3) {
    errorDiv.textContent = "Item must be at least 3 characters long.";
    return;
  }
  if (isNaN(importanceInput) || importanceInput < 1 || importanceInput > 5) {
    errorDiv.textContent = "Importance must be a number between 1 and 5.";
    return;
  }

  let newItem = {
    type: typeInput,
    importance: importanceInput,
    dayDue: dayDueInput,
    notes: notesInput,
  };

  items.push(newItem);
  populateItemInfoDiv();
  e.target.reset();
}

let addItemForm = document.querySelector("#add-item-form"); 
addItemForm.addEventListener("submit", addNewItem);


populateItemInfoDiv();
