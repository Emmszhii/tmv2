<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$client = new ClientRetentionInformation($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientRetentionId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $client->client_aid = $_GET['clientRetentionId'];
    $client->client_retention_referred_type_id = $data["client_retention_referred_type_id"];
    $client->client_retention_referred_by_id = $data["client_retention_referred_by_id"];
    $client->client_retention_won_date = $data["client_retention_won_date"];
    $client->client_retention_won_reason_id = $data["client_retention_won_reason_id"];
    $client->client_retention_lost_to_id = $data["client_retention_lost_to_id"];
    $client->client_retention_lost_reason_id = $data["client_retention_lost_reason_id"];
    $client->client_updated_at = date("Y-m-d H:i:s");
    checkId($client->client_aid);

    // update
    $query = checkUpdate($client);
    returnSuccess($client, "Client Retention Information", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
