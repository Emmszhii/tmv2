<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$preferredContact = new PreferredContact($conn);
// get $_GET data  



if (array_key_exists("preferredContactId", $_GET)) {
    $preferredContact->preferred_contact_client_id = $_GET['preferredContactId'];

    checkId($preferredContact->preferred_contact_client_id);
    $query = checkReadById($preferredContact);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($preferredContact);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();
