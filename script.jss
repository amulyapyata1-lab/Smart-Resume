
// Get form input elements and connect them to preview elements

const fields = [
    ["name", "previewName", "Your Name"],
    ["jobTitle", "previewJob", "Professional Title"],
    ["objective", "previewObjective", "Your career objective will appear here."],
    ["education", "previewEducation", "Your education details will appear here."],
    ["skills", "previewSkills", "Your skills will appear here."],
    ["projects", "previewProjects", "Your projects will appear here."],
    ["experience", "previewExperience", "Your experience will appear here."],
    ["certifications", "previewCertifications", "Your certifications will appear here."]
];

// Update the resume preview whenever the user types

fields.forEach(function(field) {

    const input = document.getElementById(field[0]);
    const preview = document.getElementById(field[1]);
    const defaultText = field[2];

    input.addEventListener("input", function() {

        preview.textContent = input.value.trim() || defaultText;

    });

});

// Update contact information

const contactFields = ["email", "phone", "location"];

contactFields.forEach(function(id) {

    document.getElementById(id).addEventListener("input", updateContact);

});

function updateContact() {

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;

    const contact = [email, phone, location]
        .filter(value => value.trim() !== "")
        .join(" | ");

    document.getElementById("previewContact").textContent =
        contact || "Email | Phone | Location";

}

// Download or print resume as PDF

document.getElementById("downloadBtn").addEventListener("click", function() {

    window.print();

});

// Clear all form fields

document.getElementById("clearBtn").addEventListener("click", function() {

    const confirmation = confirm(
        "Are you sure you want to clear all resume details?"
    );

    if (!confirmation) {
        return;
    }

    document.getElementById("resumeForm").reset();

    fields.forEach(function(field) {

        document.getElementById(field[1]).textContent = field[2];

    });

    updateContact();

});
