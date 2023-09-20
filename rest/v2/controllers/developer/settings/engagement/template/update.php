<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementTemplate($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("engagementTemplateId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $engagementTemplate->engagement_template_aid = $_GET['engagementTemplateId'];
    $engagementTemplate->engagement_template_id = checkIndex($data, "engagement_template_id");
    $engagementTemplate->engagement_template_description = checkIndex($data, "engagement_template_description");
    $engagementTemplate->engagement_template_invoice_description = checkIndex($data, "engagement_template_invoice_description");
    $engagementTemplate->engagement_template_updated_at = date("Y-m-d H:i:s");
    checkId($engagementTemplate->engagement_template_aid);
    // update
    $query = checkUpdate($engagementTemplate);
    returnSuccess($engagementTemplate, "EngagementTemplate", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
