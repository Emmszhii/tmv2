<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$preferredContact = new PreferredContact($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("preferredContactId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $preferredContact->preferred_contact_client_id = $_GET['preferredContactId'];
    $preferredContact->preferred_contact_name = $data["preferred_contact_name"];
    $preferredContact->preferred_contact_title = $data["preferred_contact_title"];
    $preferredContact->preferred_contact_company = $data["preferred_contact_company"];
    $preferredContact->preferred_contact_file_as = $data["preferred_contact_file_as"];
    $preferredContact->preferred_contact_business_number = $data["preferred_contact_business_number"];
    $preferredContact->preferred_contact_mobile_number = $data["preferred_contact_mobile_number"];
    $preferredContact->preferred_contact_home_number = $data["preferred_contact_home_number"];
    $preferredContact->preferred_contact_address = $data["preferred_contact_address"];
    $preferredContact->preferred_contact_country = $data["preferred_contact_country"];
    $preferredContact->preferred_contact_zip = $data["preferred_contact_zip"];
    $preferredContact->preferred_contact_email = $data["preferred_contact_email"];
    $preferredContact->preferred_contact_updated_at = date("Y-m-d H:i:s");
    checkId($preferredContact->preferred_contact_client_id);

    // update
    $query = checkUpdate($preferredContact);
    returnSuccess($preferredContact, "Preferred Contact", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
