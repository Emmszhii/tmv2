<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientClassId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $clientClass->client_class_aid = $_GET['clientClassId'];
    $clientClass->client_class_name = checkIndex($data, "client_class_name");
    $clientClass->client_class_updated_at = date("Y-m-d H:i:s");
    checkId($clientClass->client_class_aid );
    // // check name
    isNameExist($clientClass, $clientClass->client_class_name);
    // update
    $query = checkUpdate($clientClass);
    returnSuccess($clientClass, "ClientClass", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
