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
 