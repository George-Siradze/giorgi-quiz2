document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const submitButton = document.getElementById("submit");
    const submissionsList = document.querySelector(".cc");
  
    submitButton.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const age = ageInput.value.trim();
  
      
      if (!name || !email || !age) return;
  
      
      const submissionItem = document.createElement("div");
      submissionItem.className = "submission-item";
  
      const submissionDetails = document.createElement("div");
      submissionDetails.className = "submission-details";
  
     
      const nameRow = document.createElement("div");
      nameRow.className = "detail-row";
      nameRow.innerHTML = `
        <p class="detail-label">Name:</p>
        <p class="detail-value">${name}</p>
      `;
  
      const emailRow = document.createElement("div");
      emailRow.className = "detail-row";
      emailRow.innerHTML = `
        <p class="detail-label">Email:</p>
        <p class="detail-value">${email}</p>
      `;
  
      
      const ageRow = document.createElement("div");
      ageRow.className = "detail-row";
      ageRow.innerHTML = `
        <p class="detail-label">Age:</p>
        <p class="detail-value">${age}</p>
      `;
  
      
      submissionDetails.appendChild(nameRow);
      submissionDetails.appendChild(emailRow);
      submissionDetails.appendChild(ageRow);
  
      submissionItem.appendChild(submissionDetails);
  
      
      submissionsList.appendChild(submissionItem);
  
      
      nameInput.value = "";
      emailInput.value = "";
      ageInput.value = "";
    });
  });
  