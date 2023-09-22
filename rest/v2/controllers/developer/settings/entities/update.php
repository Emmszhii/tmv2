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
    // check data
    checkPayload($data);
    // get data
    $entities->entities_aid = $_GET['entitiesId'];
    $entities->entities_id = checkIndex($data, "entities_id");
    $entities->entities_description = checkIndex($data, "entities_description");
    $entities->entities_updated_at = date("Y-m-d H:i:s");
    checkId($entities->entities_aid);
    isNameExist($entities, $entities->entities_id);
    // update
    $query = checkUpdate($entities);
    returnSuccess($entities, "Entities", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
