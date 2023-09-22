<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$entities = new Entities($conn);
// get should not be present
if (array_key_exists("entitiesId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$entities->entities_id = checkIndex($data, "entities_id");
$entities->entities_description = checkIndex($data, "entities_description");

$entities->entities_is_active = 1;
$entities->entities_created_at = date("Y-m-d H:i:s");
$entities->entities_updated_at = date("Y-m-d H:i:s");
// check name
isNameExist($entities, $entities->entities_id);
// create
$query = checkCreate($entities);
returnSuccess($entities, "Entities", $query);
