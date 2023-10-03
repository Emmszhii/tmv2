<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$primaryContact = new PrimaryContact($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("clientId", $_GET)) {
    // check data
    checkPayload($data);
    // get data
    $primaryContact->primary_contact_client_id = $_GET['clientId'];
    $primaryContact->primary_contact_title = $data["primary_contact_title"];
    $primaryContact->client_partner_id = $data["client_partner_id"];
    $primaryContact->client_manager_id = $data["client_manager_id"];
    $primaryContact->client_associate_id = $data["client_associate_id"];
    $primaryContact->client_entities_id = $data["client_entities_id"];
    $primaryContact->client_updated_at = date("Y-m-d H:i:s");
    checkId($primaryContact->primary_contact_client_id);

    
    // $client_description_old = checkIndex($data, "client_description_old");

    // run if old id is not equal to the new id
    if ($client_client_id_old !== $primaryContact->client_client_id) {
        isNameExist($primaryContact, $primaryContact->client_client_id);
    }
    // 
    // if ($client_description_old !== $primaryContact->$client_description) {
    //     isNameExist($primaryContact, $primaryContact->client_description);
    // }


    // update
    $query = checkUpdate($primaryContact);
    returnSuccess($primaryContact, "Client", $query);
}

// return 404 error if endpoint not available
checkEndpoint();
