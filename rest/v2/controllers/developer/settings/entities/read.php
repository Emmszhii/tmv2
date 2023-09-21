<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$entities = new Entities($conn);
// get $_GET data 

if (array_key_exists("entitiesId", $_GET) ) {
    $entities->entities_aid = $_GET['entitiesId'];
    checkId($entities->entities_aid);
    $query = checkReadById($entities);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($entities);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
