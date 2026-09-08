<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <title>Notifications - RDX Ludo Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">

<div class="d-flex">
    <?php include('sidebar.php'); ?>

    <div class="p-4 w-100">
        <h3 class="fw-bold mb-4">Send Notifications</h3>

        <div class="card shadow-sm border-0 p-4" style="max-width: 600px;">
            <form>
                <div class="mb-3">
                    <label class="form-label font-bold">Target Audience</label>
                    <select class="form-select">
                        <option>All Users</option>
                        <option>Active Users Only</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label font-bold">Notification Title</label>
                    <input type="text" class="form-control" placeholder="e.g. Deposit Bonus Available!">
                </div>
                <div class="mb-3">
                    <label class="form-label font-bold">Message Content</label>
                    <textarea class="form-control" rows="4" placeholder="Type your message here..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Send Notification</button>
            </form>
        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
