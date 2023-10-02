<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$staff = new Staff($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("staffId", $_GET)) {
    // check data
    checkPayload($data);
$isUpdate = checkIndex($data, "isUpdate");
if ($isUpdate === "staffInfo") {
    // get staff info data
    $staff->staff_aid = $_GET['staffId'];
    $staff->staff_id = strtoupper(checkIndex($data, "staff_id"));
    $staff->staff_description = checkIndex($data, "staff_description");
    $staff->staff_last_name = checkIndex($data, "staff_last_name");
    $staff->staff_first_name = checkIndex($data, "staff_first_name");
    $staff->staff_middle_name = $data["staff_middle_name"];
    $staff->staff_department =  $data["staff_department"];
    $staff->staff_date_hired = checkIndex($data, "staff_date_hired");
    $staff->staff_office = $data["staff_office"];
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);

    $staff_id_old = checkIndex($data, "staff_id_old");
    if($staff_id_old !== $staff-> staff_id){
     // // check name
    isNameExist($staff, $staff->staff_id);
    }
    
    // update
    $query = checkUpdateStaffInfo($staff);
    returnSuccess($staff, "Staff", $query);

}

if ($isUpdate === "cpaInfo") {
    // get staff info data
    $staff->staff_aid = $_GET['staffId'];
    $staff->staff_education_met = $data["staff_education_met"];
    $staff->staff_experience_met = $data["staff_experience_met"];
    $staff->staff_exam_passed = $data["staff_exam_passed"];
    $staff->staff_date_certified = $data["staff_date_certified"];
    $staff->staff_certification_number = $data["staff_certification_number"];
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);
    
    // update staff cpa info
    $query = checkUpdateStaffCpaInfo($staff);
    returnSuccess($staff, "Staff", $query);

}

if ($isUpdate === "contactInfo") {
    // get staff info data
    $staff->staff_aid = $_GET['staffId'];
    $staff->staff_contact_name = $data["staff_contact_name"];
    $staff->staff_contact_email = $data["staff_contact_email"];
    $staff->staff_contact_mobile_no = $data["staff_contact_mobile_no"];
    $staff->staff_contact_home_no =  $data["staff_contact_home_no"];
    $staff->staff_contact_file_as = $data["staff_contact_file_as"];
    $staff->staff_contact_company = $data["staff_contact_company"];
    $staff->staff_contact_business_no = $data["staff_contact_business_no"];
    $staff->staff_updated_at = date("Y-m-d H:i:s");
    checkId($staff->staff_aid);
    
    // update staff cpa info
    $query = checkUpdateStaffContactInfo($staff);
    returnSuccess($staff, "Staff", $query);

}
    
}

// return 404 error if endpoint not available
checkEndpoint();
