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
    checkQuery($query, "Empty records. (search individual)");
    return $query;
}
 