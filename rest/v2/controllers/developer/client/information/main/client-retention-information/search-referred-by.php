<?php
// local function
require 'functions-client-retention-information.php';
// set http header
require '../../../../../../core/header.php';
// use needed functions
require '../../../../../../core/functions.php';
// use needed classes
require '../../../../../../models/developer/client/information/main/client-retention-information/ClientRetentionInformation.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientRetention = new ClientRetentionInformation($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// check data
checkPayload($data);

if (empty($_GET)) {
    // get task id from query string
    $clientRetention->client_search = checkIndex($data, "search");
    $referralByType = checkIndex($data, 'referralByType');

    if ($referralByType == "Client") {
        $query = checkSearchClient($clientRetention);
        http_response_code(200);
        getQueriedData($query);
    }
    if ($referralByType == "Contact") {
        $query = checkSearchContact($clientRetention);
        http_response_code(200);
        getQueriedData($query);
    }
    if ($referralByType == "Referral Source") {
        $query = checkSearchReferralSource($clientRetention);
        http_response_code(200);
        getQueriedData($query);
    }
    if ($referralByType == "Staff") {
        $query = checkSearchStaff($clientRetention);
        http_response_code(200);
        getQueriedData($query);
    }

    http_response_code(200);
    getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
