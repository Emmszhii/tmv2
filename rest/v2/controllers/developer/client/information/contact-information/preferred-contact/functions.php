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
// Read search Staff in Table Staff
function checkSearchStaff($object)
{
    $query = $object->searchStaff();
    checkQuery($query, "Empty records. (search Staff)");
    return $query;
}
function checkCreateContactPrimary($object)
{
    $query = $object->createContactPrimary();
    checkQuery($query, "Empty records. (create Primary Contact)");
    return $query;
}
function checkCreateContactPreferred($object)
{
    $query = $object->createContactPreferred();
    checkQuery($query, "Empty records. (create Preferred Contact)");
    return $query;
}
function checkCreateContactBilling($object)
{
    $query = $object->createContactBilling();
    checkQuery($query, "Empty records. (create Billing Contact)");
    return $query;
}
function checkCreateContactCustomeField($object)
{
    $query = $object->createContactCustomeField();
    checkQuery($query, "Empty records. (create Custome Field)");
    return $query;
}
