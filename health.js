const API_URL =
    "http://localhost:8080/api/health-profiles";

const STUDENT_ID = 1;

document.addEventListener("DOMContentLoaded", () => {
    loadHealthProfile();

    const form =
        document.getElementById("healthForm");

    if (form) {
        form.addEventListener(
            "submit",
            saveHealthProfile
        );
    }
});


// Load existing health profile
async function loadHealthProfile() {

    try {

        const response = await fetch(
            `${API_URL}/student/${STUDENT_ID}`
        );

        if (!response.ok) {
            return;
        }

        const profiles = await response.json();

        if (!profiles || profiles.length === 0) {
            return;
        }

        const profile = profiles[0];

        document.getElementById("bloodGroup").value =
            profile.bloodGroup || "";

        document.getElementById("emergencyContact").value =
            profile.emergencyContact || "";

        document.getElementById("allergies").value =
            profile.allergies || "";

        document.getElementById("medicalNotes").value =
            profile.medicalNotes || "";

        // Store existing ID for update
        document
            .getElementById("healthForm")
            .dataset.healthId =
            profile.healthId;

    } catch (error) {

        console.error(
            "Health profile loading error:",
            error
        );

    }
}


// Save / Update Health Profile
async function saveHealthProfile(event) {

    event.preventDefault();

    const message =
        document.getElementById("healthMessage");

    const form =
        document.getElementById("healthForm");

    const healthId =
        form.dataset.healthId;

    const healthData = {

        studentId: STUDENT_ID,

        bloodGroup:
            document
                .getElementById("bloodGroup")
                .value
                .trim(),

        emergencyContact:
            document
                .getElementById("emergencyContact")
                .value
                .trim(),

        allergies:
            document
                .getElementById("allergies")
                .value
                .trim(),

        medicalNotes:
            document
                .getElementById("medicalNotes")
                .value
                .trim()
    };


    try {

        let response;

        // Existing profile → UPDATE
        if (healthId) {

            response = await fetch(
                `${API_URL}/${healthId}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(healthData)
                }
            );

        }

        // New profile → CREATE
        else {

            response = await fetch(
                API_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(healthData)
                }
            );

        }


        if (!response.ok) {
            throw new Error(
                "Failed to save health profile"
            );
        }


        const savedProfile =
            await response.json();


        form.dataset.healthId =
            savedProfile.healthId;


        message.textContent =
            "✅ Health Profile saved successfully!";

        message.style.color =
            "#00e5ff";


    } catch (error) {

        console.error(
            "Health profile error:",
            error
        );

        message.textContent =
            "❌ Unable to save health profile. Make sure Spring Boot and MySQL are running.";

        message.style.color =
            "#ff6b6b";
    }
}