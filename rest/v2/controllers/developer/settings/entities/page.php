<?php
// set http header
require '../../../../core/header.php';
// use needed functions
require '../../../../core/functions.php';
// use needed classes
require '../../../../models/developer/settings/entities/Entities.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$entities = new Entities($conn); 
// validate api key 
if (array_key_exists("start", $_GET)) {
    
    $entities->entities_start = $_GET['start'];
    $entities->entities_total = 20;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($entities->entities_start, $entities->entities_total);

    $query = checkReadLimit($entities);
    $total_result = checkReadAll($entities);
    http_response_code(200);
    checkReadQuery(
            $query,
            $total_result,
            $entities->entities_total,
            $entities->entities_start
        );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
