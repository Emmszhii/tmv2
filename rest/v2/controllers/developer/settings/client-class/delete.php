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
    // get data
    $clientClass->client_class_aid = $_GET['clientClassId'];
    checkId($clientClass->client_class_aid);

    $query = checkDelete($clientClass);
    returnSuccess($clientClass, "ClientClass", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
