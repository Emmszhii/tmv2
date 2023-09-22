<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$referralSource = new ReferralSource($conn);
// get should not be present
if (array_key_exists("referralSourceId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$referralSource->referral_source_name = checkIndex($data, "referral_source_name");

$referralSource->referral_source_is_active = 1;
$referralSource->referral_source_created_at = date("Y-m-d H:i:s");
$referralSource->referral_source_updated_at = date("Y-m-d H:i:s");
// // check name
isNameExist($referralSource, $referralSource->referral_source_name);
// create
$query = checkCreate($referralSource);
returnSuccess($referralSource, "ReferralSource", $query);
