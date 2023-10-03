<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$primaryContact = new BillingContact($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("billingContactId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $primaryContact->billing_contact_client_id = $_GET['primaryContactId'];
    $primaryContact->billing_contact_name = $data["billing_contact_name"];
    $primaryContact->billing_contact_title = $data["billing_contact_title"];
    $primaryContact->billing_contact_company = $data["billing_contact_company"];
    $primaryContact->billing_contact_file_as = $data["billing_contact_file_as"];
    $primaryContact->billing_contact_business_number = $data["billing_contact_business_number"];
    $primaryContact->billing_contact_home_number = $data["billing_contact_home_number"];
    $primaryContact->billing_contact_address = $data["billing_contact_address"];
    $primaryContact->billing_contact_country = $data["billing_contact_country"];
    $primaryContact->billing_contact_zip = $data["billing_contact_zip"];
    $primaryContact->billing_contact_email = $data["billing_contact_email"];
    $primaryContact->billing_contact_updated_at = date("Y-m-d H:i:s");
    checkId($primaryContact->billing_contact_client_id);

    // update
    $query = checkUpdate($primaryContact);
    returnSuccess($primaryContact, "Billing Contact", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
