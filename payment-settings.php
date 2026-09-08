<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Payment Settings - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Payment Settings</h3>

        <div class="card shadow-sm border-0 p-4" style="max-width: 600px;">
            <form>
                <div class="mb-3">
                    <label class="form-label font-bold">Admin UPI ID</label>
                    <input type="text" class="form-control" value="rdxludo@upi">
                </div>
                <div class="mb-3">
                    <label class="form-label font-bold">Payment QR Code Image</label>
                    <input type="file" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label font-bold">Minimum Deposit Amount (₹)</label>
                    <input type="number" class="form-control" value="50">
                </div>
                <div class="mb-3">
                    <label class="form-label font-bold">Minimum Withdrawal Amount (₹)</label>
                    <input type="number" class="form-control" value="100">
                </div>
                <button type="submit" class="btn btn-success w-100">Save Changes</button>
            </form>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
