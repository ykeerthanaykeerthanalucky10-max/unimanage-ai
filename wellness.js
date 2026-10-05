const API_PROFILE =
    "http://localhost:8080/api/health-profiles";

const API_APPOINTMENTS =
    "http://localhost:8080/api/health-appointments";

const API_ALERTS =
    "http://localhost:8080/api/health-alerts";

const STUDENT_ID = 1;


// Page load
document.addEventListener("DOMContentLoaded", function () {

    loadHealthProfile();

    loadAppointments();

    loadAlerts();

    loadAIInsight();

});


// ================================
// HEALTH PROFILE
// ================================

async function loadHealthProfile() {

    const bloodGroup =
        document.getElementById("dashboardBloodGroup");

    const emergency =
        document.getElementById("dashboardEmergency");

    const allergies =
        document.getElementById("dashboardAllergies");

    const medicalNotes =
        document.getElementById("dashboardMedicalNotes");


    try {

        const response = await fetch(
            `${API_PROFILE}/student/${STUDENT_ID}`
        );


        if (!response.ok) {
            throw new Error("Profile API Error");
        }


        const data = await response.json();


        const profile =
            Array.isArray(data) ? data[0] : data;


        if (!profile) {

            bloodGroup.textContent = "--";

            emergency.textContent = "--";

            allergies.textContent = "None";

            medicalNotes.textContent = "None";

            return;
        }


        bloodGroup.textContent =
            profile.bloodGroup ??
            profile.blood_group ??
            "--";


        emergency.textContent =
            profile.emergencyContact ??
            profile.emergency_contact ??
            "--";


        allergies.textContent =
            profile.allergies || "None";


        const notes =
            profile.medicalNotes ??
            profile.medical_notes;


        medicalNotes.textContent =
            notes ? "Available" : "None";

    }

    catch (error) {

        console.error(
            "Health Profile Error:",
            error
        );


        bloodGroup.textContent = "Error";

        emergency.textContent = "Error";

        allergies.textContent = "Error";

        medicalNotes.textContent = "Error";
    }
}



// ================================
// APPOINTMENTS
// ================================

async function loadAppointments() {

    const count =
        document.getElementById("appointmentCount");

    const doctor =
        document.getElementById("appointmentDoctor");

    const details =
        document.getElementById("appointmentDetails");


    try {

        const response =
            await fetch(API_APPOINTMENTS);


        if (!response.ok) {
            throw new Error("Appointment API Error");
        }


        const appointments =
            await response.json();


        const list =
            Array.isArray(appointments)
                ? appointments
                : [];


        count.textContent =
            list.length;


        if (list.length === 0) {

            doctor.textContent =
                "No Upcoming Appointment";

            details.textContent =
                "No appointment has been booked yet.";

            return;
        }


        const appointment =
            list[list.length - 1];


        const doctorName =
            appointment.doctorName ??
            appointment.doctor_name ??
            "Doctor";


        const date =
            appointment.appointmentDate ??
            appointment.appointment_date ??
            "Date unavailable";


        const time =
            appointment.appointmentTime ??
            appointment.appointment_time ??
            "Time unavailable";


        const reason =
            appointment.reason ??
            "General consultation";


        doctor.textContent =
            `Dr. ${doctorName}`;


        details.textContent =
            `📅 ${date}   ⏰ ${time}   •   ${reason}`;

    }

    catch (error) {

        console.error(
            "Appointment Error:",
            error
        );


        count.textContent = "0";


        doctor.textContent =
            "Unable to load appointment";


        details.textContent =
            "Please check Spring Boot and MySQL.";
    }
}



// ================================
// HEALTH ALERTS
// ================================

async function loadAlerts() {

    const count =
        document.getElementById("alertCount");

    const container =
        document.getElementById("recentAlerts");


    try {

        const response =
            await fetch(API_ALERTS);


        if (!response.ok) {
            throw new Error("Alert API Error");
        }


        const alerts =
            await response.json();


        const list =
            Array.isArray(alerts)
                ? alerts
                : [];


        count.textContent =
            list.length;


        if (list.length === 0) {

            container.innerHTML = `

                <div class="alert-card">

                    <div class="alert-icon">
                        ✅
                    </div>

                    <div class="alert-content">

                        <h3>
                            No Health Alerts
                        </h3>

                        <p>
                            You currently have
                            no health notifications.
                        </p>

                    </div>

                </div>

            `;

            return;
        }


        container.innerHTML = "";


        list.slice(-3)
            .reverse()
            .forEach(function (alert) {

                const type =
                    alert.alertType ??
                    alert.alert_type ??
                    "Health Alert";


                const message =
                    alert.message ??
                    "No message";


                const priority =
                    alert.priority ??
                    "Normal";


                container.innerHTML += `

                    <div class="alert-card">

                        <div class="alert-icon">
                            🔔
                        </div>

                        <div class="alert-content">

                            <h3>
                                ${type}
                            </h3>

                            <p>
                                ${message}
                            </p>

                            <span class="alert-priority">
                                Priority: ${priority}
                            </span>

                        </div>

                    </div>

                `;
            });

    }

    catch (error) {

        console.error(
            "Alert Error:",
            error
        );


        count.textContent = "0";


        container.innerHTML = `

            <div class="alert-card">

                <div class="alert-icon">
                    ⚠️
                </div>

                <div class="alert-content">

                    <h3>
                        Unable to Load Alerts
                    </h3>

                    <p>
                        Start Spring Boot and MySQL,
                        then refresh the page.
                    </p>

                </div>

            </div>

        `;
    }
}



// ================================
// AI WELLNESS INSIGHT
// ================================

async function loadAIInsight() {

    const insight =
        document.getElementById("aiInsight");

    const details =
        document.getElementById("aiDetails");


    try {

        const profileResponse =
            await fetch(
                `${API_PROFILE}/student/${STUDENT_ID}`
            );


        const appointmentResponse =
            await fetch(API_APPOINTMENTS);


        const alertResponse =
            await fetch(API_ALERTS);


        const profileData =
            profileResponse.ok
                ? await profileResponse.json()
                : [];


        const appointments =
            appointmentResponse.ok
                ? await appointmentResponse.json()
                : [];


        const alerts =
            alertResponse.ok
                ? await alertResponse.json()
                : [];


        const profile =
            Array.isArray(profileData)
                ? profileData[0]
                : profileData;


        const appointmentList =
            Array.isArray(appointments)
                ? appointments
                : [];


        const alertList =
            Array.isArray(alerts)
                ? alerts
                : [];


        const profileStatus =
            profile
                ? "Available"
                : "Not Available";


        insight.textContent =
            alertList.length > 0
                ? "🤖 Your wellness dashboard has recent health notifications. Please review them regularly."
                : "🤖 Your wellness information is currently up to date.";


        details.innerHTML = `

            <p>
                👤 Health Profile:
                ${profileStatus}
            </p>

            <p>
                📅 Appointments:
                ${appointmentList.length}
            </p>

            <p>
                🔔 Health Alerts:
                ${alertList.length}
            </p>

        `;

    }

    catch (error) {

        console.error(
            "AI Insight Error:",
            error
        );


        insight.textContent =
            "🤖 Unable to generate wellness insight right now.";


        details.innerHTML = `

            <p>
                ⚠️ Please check the backend connection.
            </p>

        `;
    }
}