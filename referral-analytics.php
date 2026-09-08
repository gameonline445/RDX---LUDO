<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Referral Analytics - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Referral Analytics</h3>

        <div class="card shadow-sm border-0">
            <div class="card-body p-0">
                <table class="table table-hover align-middle mb-0 text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Referrer UID</th>
                            <th>Total Referrals</th>
                            <th>Earnings</th>
                            <th>Referred Users</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UID101</td>
                            <td>12 Players</td>
                            <td class="text-success fw-bold">₹120</td>
                            <td>UID102, UID103, UID104...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
