<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$wonReason = new WonReason($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("wonReasonId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $wonReason->won_reason_aid = $_GET['wonReasonId'];
    $wonReason->won_reason_description = checkIndex($data, "won_reason_description");
    $wonReason->won_reason_updated_at = date("Y-m-d H:i:s");
    checkId($wonReason->won_reason_aid );

    $won_reason_description_old = checkIndex($data, "won_reason_description_old");
    if($won_reason_description_old !==  $wonReason->won_reason_description) {
        // check ID
        isNameExist($wonReason, $wonReason->won_reason_description);
  }
    // update
    $query = checkUpdate($wonReason);
    returnSuccess($wonReason, "WonReason", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
