<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$primaryContact = new PrimaryContact($conn);
// get $_GET data  



if (array_key_exists("primaryContactId", $_GET)) {
    $primaryContact->primary_contact_client_id = $_GET['primaryContactId'];

    checkId($primaryContact->primary_contact_client_id);
    $query = checkReadById($primaryContact);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($primaryContact);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
