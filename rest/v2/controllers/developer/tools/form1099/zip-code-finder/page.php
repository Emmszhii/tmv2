<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/tools/form1099/Form1099.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$form1099 = new Form1099($conn); 
// validate api key 
if (array_key_exists("start", $_GET)) {
    
    $form1099->zipcode_start = $_GET['start'];
    $form1099->zipcode_total = 50;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($form1099->zipcode_start, $form1099->zipcode_total);

    $query = checkReadLimit($form1099);
    $total_result = checkReadAll($form1099);
    http_response_code(200);
    checkReadQuery(
            $query,
            $total_result,
            $form1099->zipcode_total,
            $form1099->zipcode_start
        );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
