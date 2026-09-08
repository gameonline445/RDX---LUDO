<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Battles Management - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-bold">Battles Management</h3>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createBattleModal">+ Create Battle</button>
        </div>

        <div class="card shadow-sm border-0">
            <div class="card-body p-0">
                <table class="table table-hover align-middle mb-0 text-center">
                    <thead class="table-dark">
                        <tr>
                            <th>Match ID</th>
                            <th>Players</th>
                            <th>Entry Fee</th>
                            <th>Prize</th>
                            <th>Room Code</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#BAT8001</td>
                            <td>UID101 vs UID102</td>
                            <td>₹50</td>
                            <td class="text-success fw-bold">₹90</td>
                            <td>
                                <input type="text" class="form-control form-control-sm d-inline-block text-center" style="width: 110px;" value="05432198">
                            </td>
                            <td><span class="badge bg-primary">Running</span></td>
                            <td>
                                <button class="btn btn-sm btn-warning">Set Result</button>
                                <button class="btn btn-sm btn-danger">Cancel</button>
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
