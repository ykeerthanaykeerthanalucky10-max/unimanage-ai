const appointmentForm =
    document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const doctorName =
        document.getElementById("doctorName").value;

    const appointmentDate =
        document.getElementById("appointmentDate").value;

    const appointmentTime =
        document.getElementById("appointmentTime").value;

    const reason =
        document.getElementById("reason").value;


    const appointmentData = {

        studentId: 1,

        doctorName: doctorName,

        appointmentDate: appointmentDate,

        appointmentTime: appointmentTime,

        reason: reason,

        status: "Booked"

    };


    try {

        const response = await fetch(
            "http://localhost:8080/api/health-appointments",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(appointmentData)
            }
        );


        if (!response.ok) {

            throw new Error(
                "Appointment could not be saved"
            );

        }


        const result =
            await response.json();


        document.getElementById(
            "appointmentMessage"
        ).innerHTML =
            "✅ Appointment booked successfully!";


        appointmentForm.reset();


        console.log(
            "Saved Appointment:",
            result
        );

    }

    catch (error) {

        console.error(error);

        document.getElementById(
            "appointmentMessage"
        ).innerHTML =
            "❌ Backend connection failed. Start Spring Boot and MySQL.";

    }

});