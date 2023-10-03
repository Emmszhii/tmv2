<?php
// Read all
function checkReadAllDepartmentByIdAndStaffId($object)
{
    $query = $object->readAllDepartmentByIdAndStaffId();
    checkQuery($query, "Empty records. (read All Department By Id And Staff Id");
    return $query;
}

// Read search office
function checkSearchOffice($object)
{
    $query = $object->searchOffice();
    checkQuery($query, "Empty records. (search office)");
    return $query;
}

function checkOfficeSearch($object)
{
    $query = $object->officeSearch();
    checkQuery($query, "Empty records. (search office)");
    return $query;
}

// Read search office
function checkSearchDepartment($object)
{
    $query = $object->searchDepartment();
    checkQuery($query, "Empty records. (search department)");
    return $query;
}

function checkDepartmentSearch($object)
{
    $query = $object->departmentSearch();
    checkQuery($query, "Empty records. (search department)");
    return $query;
}
 
// Update staff info
function checkUpdateStaffInfo($object)
{
    $query = $object->updateStaffInfo();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

// Update staff cpa info
function checkUpdateStaffCpaInfo($object)
{
    $query = $object->updateStaffCpaInfo();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

// Update staff contact info
function checkUpdateStaffContactInfo($object)
{
    $query = $object->updateStaffContactInfo();
    checkQuery($query, "There's a problem processing your request. (update staff contact)");
    return $query;
}