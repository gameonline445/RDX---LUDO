<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Deposits - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Deposit Requests</h3>

        <div class="card shadow-sm border-0">
            <div class="card-body p-0">
                <table class="table table-hover align-middle mb-0 text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Request ID</th>
                            <th>Customer UID</th>
                            <th>Amount</th>
                            <th>UTR</th>
                            <th>Screenshot</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#REQ1001</td>
                            <td>UID98765</td>
                            <td class="fw-bold text-success">₹500</td>
                            <td>123456789012</td>
                            <td>
                                <button class="btn btn-sm btn-info text-white" data-bs-toggle="modal" data-bs-target="#screenshotModal">View Screenshot</button>

                                <div class="modal fade" id="screenshotModal" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Payment Proof</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <div class="modal-body">
                                                <img src="uploads/screenshots/sample.jpg" class="img-fluid rounded" alt="Proof" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><span class="badge bg-warning text-dark">Pending</span></td>
                            <td>
                                <button class="btn btn-sm btn-success">Approve</button>
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
