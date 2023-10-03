<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$primaryContact = new PrimaryContact($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("primaryContactId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $primaryContact->primary_contact_client_id = $_GET['primaryContactId'];
    $primaryContact->primary_contact_name = $data["primary_contact_name"];
    $primaryContact->primary_contact_title = $data["primary_contact_title"];
    $primaryContact->primary_contact_company = $data["primary_contact_company"];
    $primaryContact->primary_contact_file_as = $data["primary_contact_file_as"];
    $primaryContact->primary_contact_business_number = $data["primary_contact_business_number"];
    $primaryContact->primary_contact_home_number = $data["primary_contact_home_number"];
    $primaryContact->primary_contact_address = $data["primary_contact_address"];
    $primaryContact->primary_contact_country = $data["primary_contact_country"];
    $primaryContact->primary_contact_zip = $data["primary_contact_zip"];
    $primaryContact->primary_contact_email = $data["primary_contact_email"];
    $primaryContact->primary_contact_updated_at = date("Y-m-d H:i:s");
    checkId($primaryContact->primary_contact_client_id);

    // update
    $query = checkUpdate($primaryContact);
    returnSuccess($primaryContact, "Primary Contact", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
