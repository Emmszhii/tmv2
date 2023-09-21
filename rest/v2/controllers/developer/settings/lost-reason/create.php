<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostReason = new LostReason($conn);
// get should not be present
if (array_key_exists("lostReasonId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$lostReason->lost_reason_description = checkIndex($data, "lost_reason_description");

$lostReason->lost_reason_is_active = 1;
$lostReason->lost_reason_created_at = date("Y-m-d H:i:s");
$lostReason->lost_reason_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($lostReason, $lostReason->department_name);
// create
$query = checkCreate($lostReason);
returnSuccess($lostReason, "LostReason", $query);
