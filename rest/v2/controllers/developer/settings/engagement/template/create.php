<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$engagementTemplate = new EngagementTemplate($conn);
// get should not be present
if (array_key_exists("engagementTemplateId", $_GET)) {
    checkEndpoint();
}
// check data
checkPayload($data);
// get data
$engagementTemplate->engagement_template_id = checkIndex($data, "engagement_template_id");
$engagementTemplate->engagement_template_description = checkIndex($data, "engagement_template_description");
$engagementTemplate->engagement_template_invoice_description = checkIndex($data, "engagement_template_invoice_description");

$engagementTemplate->engagement_template_is_active = 1;
$engagementTemplate->engagement_template_created_at = date("Y-m-d H:i:s");
$engagementTemplate->engagement_template_updated_at = date("Y-m-d H:i:s");
// // check id
isNameExist($engagementTemplate, $engagementTemplate->engagement_template_id);
// create
$query = checkCreate($engagementTemplate);
returnSuccess($engagementTemplate, "EngagementTemplate", $query);
