<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get $_GET data 

if (array_key_exists("clientClassId", $_GET) ) {
    $clientClass->client_class_aid = $_GET['clientClassId'];
    checkId($clientClass->client_class_aid);
    $query = checkReadById($clientClass);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($clientClass);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
