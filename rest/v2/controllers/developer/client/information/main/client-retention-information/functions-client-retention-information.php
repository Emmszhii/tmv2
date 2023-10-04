<?php
function checkSearchClient($object)
{
    $query = $object->searchClient();
    checkQuery($query, "Empty records. (create Client Field)");
    return $query;
}
function checkSearchContact($object)
{
    $query = $object->searchContact();
    checkQuery($query, "Empty records. (create Contact Field)");
    return $query;
}
function checkSearchReferralSource($object)
{
    $query = $object->searchReferralSource();
    checkQuery($query, "Empty records. (create Referral Source Field)");
    return $query;
}
function checkSearchStaff($object)
{
    $query = $object->searchStaff();
    checkQuery($query, "Empty records. (create Staff Field)");
    return $query;
}
