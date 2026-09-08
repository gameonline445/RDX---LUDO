<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Withdrawals - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Withdrawal Requests</h3>

        <div class="card shadow-sm border-0">
            <div class="card-body p-0">
                <table class="table table-hover align-middle mb-0 text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Request ID</th>
                            <th>Customer UID</th>
                            <th>Amount</th>
                            <th>Payment Details</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#WDR2001</td>
                            <td>UID98765</td>
                            <td class="fw-bold text-danger">₹200</td>
                            <td>
                                <small class="d-block">UPI: user@upi</small>
                                <small class="d-block text-muted">Phone: 9876543210</small>
                            </td>
                            <td><span class="badge bg-warning text-dark">Pending</span></td>
                            <td>
                                <button class="btn btn-sm btn-success">Approve & Pay</button>
                                <button class="btn btn-sm btn-danger">Reject</button>
                            </td>
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
