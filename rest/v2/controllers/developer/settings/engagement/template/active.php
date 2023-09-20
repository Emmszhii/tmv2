<?php
// set http header
require '../../../../../core/header.php';
// use needed functions
require '../../../../../core/functions.php';
// use needed classes
require '../../../../../models/developer/settings/engagement/template/template.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementTemplate($conn);
// // get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);
// get $_GET data
// validate api key 
if (array_key_exists("engagementTemplateId", $_GET)) {
    // check data
    checkPayload($data);
    $engagementTemplate->engagement_template_aid = $_GET['engagementTemplateId'];
    $engagementTemplate->engagement_template_is_active = trim($data["isActive"]);
    // $engagementTemplate->department_datetime = date("Y-m-d H:i:s");
    checkId($engagementTemplate->engagement_template_aid);
    $query = checkActive($engagementTemplate);
    http_response_code(200);
    returnSuccess($engagementTemplate, "EngagementTemplate", $query);
}
// return 404 error if endpoint not available
checkEndpoint();

http_response_code(200);
