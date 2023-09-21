<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$clientClass = new ClientClass($conn);
// get should not be present
if (array_key_exists("clientClassId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$clientClass->client_class_name = checkIndex($data, "client_class_name");

$clientClass->client_class_is_active = 1;
$clientClass->client_class_created_at = date("Y-m-d H:i:s");
$clientClass->client_class_updated_at = date("Y-m-d H:i:s");
// // check name
// isNameExist($clientClass, $clientClass->department_name);
// create
$query = checkCreate($clientClass);
returnSuccess($clientClass, "ClientClass", $query);
