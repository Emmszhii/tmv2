<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$billingContact = new BillingContact($conn);
// get $_GET data  



if (array_key_exists("billingContactId", $_GET)) {
    $billingContact->billing_contact_client_id = $_GET['billingContactId'];

    checkId($billingContact->billing_contact_client_id);
    $query = checkReadById($billingContact);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($billingContact);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
