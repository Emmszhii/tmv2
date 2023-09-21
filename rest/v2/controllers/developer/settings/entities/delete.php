<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$entities = new Entities($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("entitiesId", $_GET)) {
    // get data
    $entities->entities_aid = $_GET['entitiesId'];
    checkId($entities->entities_aid);

    $query = checkDelete($entities);
    returnSuccess($entities, "Entities", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
