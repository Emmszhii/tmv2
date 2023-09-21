<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/engagement/template/Template.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementTemplate($conn); 
// validate api key 
if (array_key_exists("start", $_GET)) {
    
    $engagementTemplate->engagement_template_start = $_GET['start'];
    $engagementTemplate->engagement_template_total = 10;

    //check to see if task id in query string is not empty and is number, if not return json error
    checkLimitId($engagementTemplate->engagement_template_start, $engagementTemplate->engagement_template_total);

    $query = checkReadLimit($engagementTemplate);
    $total_result = checkReadAll($engagementTemplate);
    http_response_code(200);
    checkReadQuery(
            $query,
            $total_result,
            $engagementTemplate->engagement_template_total,
            $engagementTemplate->engagement_template_start
        );
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
