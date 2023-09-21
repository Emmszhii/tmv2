<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$lostTo = new LostTo($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("lostToId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $lostTo->lost_to_aid = $_GET['lostToId'];
    $lostTo->lost_to_description = checkIndex($data, "lost_to_description");
    $lostTo->lost_to_updated_at = date("Y-m-d H:i:s");
    checkId($lostTo->lost_to_aid );
    // update
    $query = checkUpdate($lostTo);
    returnSuccess($lostTo, "LostReason", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
