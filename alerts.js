<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>UniManage AI - Health Alerts</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <!-- ================= NAVBAR ================= -->

    <header class="navbar">

        <div class="logo">
            UniManage <span>AI</span>
        </div>

        <nav>

            <a href="index.html">
                Dashboard
            </a>

            <a href="health.html">
                Health
            </a>

            <a href="appointments.html">
                Appointments
            </a>

            <a href="alerts.html" class="active">
                Alerts
            </a>

        </nav>

    </header>


    <!-- ================= MAIN ================= -->

    <main class="container">

        <!-- PAGE HEADER -->

        <section class="page-header">

            <div>

                <p class="small-label">
                    HEALTH & WELLNESS
                </p>

                <h1>
                    Health Alerts 🔔
                </h1>

                <p>
                    Stay updated with your health
                    notifications and AI-powered alerts.
                </p>

            </div>

            <a href="health.html"
               class="btn">
                ❤️ View Health
            </a>

        </section>


        <!-- ================= ALERT LIST ================= -->

        <section class="section">

            <div class="section-title">

                <div>

                    <h2>
                        My Alerts
                    </h2>

                    <p>
                        Latest health notifications
                    </p>

                </div>

            </div>


            <!-- IMPORTANT:
                 JavaScript will load alerts here -->

            <div class="alert-list"
                 id="alertList">

                <div class="alert-card">

                    <div class="alert-icon">
                        🔄
                    </div>

                    <div class="alert-content">

                        <h3>
                            Loading Alerts...
                        </h3>

                        <p>
                            Please wait while we
                            load your health alerts.
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= AI SUMMARY ================= -->

        <section class="section">

            <div class="ai-card">

                <div class="ai-icon">
                    🤖
                </div>

                <div>

                    <p class="small-label">
                        AI WELLNESS ASSISTANT
                    </p>

                    <h2>
                        AI Alert Summary
                    </h2>

                    <p>
                        UniManage AI continuously monitors
                        your health-related information and
                        provides useful wellness notifications.
                    </p>

                </div>

            </div>

        </section>


        <!-- ================= QUICK ACTIONS ================= -->

        <section class="section">

            <div class="section-title">

                <div>

                    <h2>
                        Quick Actions
                    </h2>

                </div>

            </div>


            <div class="quick-actions">

                <a href="health.html"
                   class="quick-card">

                    <div class="quick-icon">
                        ❤️
                    </div>

                    <h3>
                        Health Profile
                    </h3>

                    <p>
                        View your health information
                    </p>

                </a>


                <a href="appointments.html"
                   class="quick-card">

                    <div class="quick-icon">
                        📅
                    </div>

                    <h3>
                        Book Appointment
                    </h3>

                    <p>
                        Schedule a health appointment
                    </p>

                </a>


                <a href="index.html"
                   class="quick-card">

                    <div class="quick-icon">
                        📊
                    </div>

                    <h3>
                        Dashboard
                    </h3>

                    <p>
                        Return to your dashboard
                    </p>

                </a>

            </div>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->

    <footer>

        <p>
            © 2026 UniManage AI
        </p>

        <p>
            AI Based Health & Wellness Management
        </p>

    </footer>


    <!-- ================= JAVASCRIPT ================= -->

    <script src="alerts.js"></script>

</body>

</html>