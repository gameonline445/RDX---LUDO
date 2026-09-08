<!DOCTYPE html>
<html lang="hi">
<head>
    <title>Deposits - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light d-flex">

    <!-- Sidebar Include -->
    <?php include('sidebar.php'); ?>

    <!-- Main Content Area -->
    <div class="p-4 w-100">
        <h3>Deposit Requests</h3>
        
        <table class="table table-bordered bg-white mt-3 align-middle text-center">
            <thead class="table-dark">
                <tr>
                    <th>Request ID</th>
                    <th>Customer UID</th>
                    <th>Amount</th>
                    <th>UTR</th>
                    <th>Screenshot</th> <!-- नया Screenshot Column -->
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>#REQ1001</td>
                    <td>UID98765</td>
                    <td>₹500</td>
                    <td>123456789012</td>
                    
                    <!-- Screenshot Button -->
                    <td>
                        <button class="btn btn-sm btn-info text-white" data-bs-toggle="modal" data-bs-target="#imgModal1">
                            View Image
                        </button>

                        <!-- Screenshot Modal -->
                        <div class="modal fade" id="imgModal1" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Payment Screenshot</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img src="uploads/screenshots/sample.jpg" class="img-fluid rounded" alt="Screenshot" onerror="this.src='https://via.placeholder.com/300?text=No+Screenshot'">
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

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
