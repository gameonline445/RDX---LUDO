<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Dashboard - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Dashboard</h3>

        <div class="row g-3">
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">ACTIVE LIVE USERS</small>
                    <h2 class="text-success mt-2 mb-0">0 Live</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">LIVE MATCHES</small>
                    <h2 class="mt-2 mb-0">0</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">PENDING KYC</small>
                    <h2 class="text-warning mt-2 mb-0">0</h2>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">TOTAL CUSTOMERS</small>
                    <h2 class="text-primary mt-2 mb-0">60</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">TOTAL BALANCE</small>
                    <h2 class="text-success mt-2 mb-0">₹5,350</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">TOTAL DEPOSIT PAID</small>
                    <h2 class="text-info mt-2 mb-0">₹7,100</h2>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">TOTAL WITHDRAWAL PAID</small>
                    <h2 class="text-danger mt-2 mb-0">₹570</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">PENDING DEPOSITS</small>
                    <h2 class="text-warning mt-2 mb-0">4</h2>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card p-3 shadow-sm border-0">
                    <small class="text-muted fw-bold">PENDING WITHDRAWALS</small>
                    <h2 class="text-danger mt-2 mb-0">0</h2>
                </div>
            </div>
        </div>

        <div class="card mt-4 p-3 shadow-sm border-0">
            <h5 class="fw-bold">Firebase Status</h5>
            <div class="alert alert-success mb-0 mt-2">
                ✅ Firebase Connected (All Data Loaded)
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
