<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementCategory($conn);
// get $_GET data 

if (array_key_exists("engagementTemplateId", $_GET) ) {
    $engagementTemplate->engagement_template_aid = $_GET['engagementTemplateId'];
    checkId($engagementTemplate->engagement_template_aid);
    $query = checkReadById($engagementTemplate);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($engagementTemplate);
    http_response_code(200);
    getQueriedData($query);
     
}

// return 404 error if endpoint not available
checkEndpoint();
