<?php
// Read all
function checkReadAllDepartmentByIdAndStaffId($object)
{
    $query = $object->readAllDepartmentByIdAndStaffId();
    checkQuery($query, "Empty records. (read All Department By Id And Staff Id");
    return $query;
}

// Read search Entities
function checkSearchEntities($object)
{
    $query = $object->searchEntities();
    checkQuery($query, "Empty records. (search Entities)");
    return $query;
}
// Read search Partner
function checkSearchPartner($object)
{
    $query = $object->searchPartner();
    checkQuery($query, "Empty records. (search Partner)");
    return $query;
}
