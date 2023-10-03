<?php
class ClientRetentionInformation
{
    public $client_aid;
    public $client_retention_referred_type_id;
    public $client_retention_referred_by_id;
    public $client_retention_won_date;
    public $client_retention_won_reason_id;
    public $client_retention_lost_to_id;
    public $client_retention_lost_reason_id;
    public $client_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblClient;
    // public $tblEntities;
    // public $tblStaff;
    // public $tblPrimaryContact;
    // public $tblPreferredContact;
    // public $tblBillingContact;
    // public $tblCustomeField;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "tmv2_client";
        // $this->tblEntities = "tmv2_entities";
        // $this->tblStaff = "tmv2_staff";
        // $this->tblPrimaryContact = "tmv2_primary_contact";
        // $this->tblPreferredContact = "tmv2_preferred_contact";
        // $this->tblBillingContact = "tmv2_billing_contact";
        // $this->tblCustomeField = "tmv2_custom_field";
    }


    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_retention_referred_type_id asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblClient} ";
            $sql .= "where client_aid = :client_aid ";
            $sql .= "order by client_retention_referred_type_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_retention_referred_type_id = :client_retention_referred_type_id, ";
            $sql .= "client_retention_referred_by_id = :client_retention_referred_by_id, ";
            $sql .= "client_retention_won_date = :client_retention_won_date, ";
            $sql .= "client_retention_won_reason_id = :client_retention_won_reason_id, ";
            $sql .= "client_retention_lost_to_id = :client_retention_lost_to_id, ";
            $sql .= "client_retention_lost_reason_id = :client_retention_lost_reason_id, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_retention_referred_type_id" => $this->client_retention_referred_type_id,
                "client_retention_referred_by_id" => $this->client_retention_referred_by_id,
                "client_retention_won_date" => $this->client_retention_won_date,
                "client_retention_won_reason_id" => $this->client_retention_won_reason_id,
                "client_retention_lost_to_id" => $this->client_retention_lost_to_id,
                "client_retention_lost_reason_id" => $this->client_retention_lost_reason_id,
                "client_updated_at" => $this->client_updated_at,
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }




    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblClient} ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_aid" => $this->client_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select client_retention_referred_type_id from {$this->tblClient} ";
            $sql .= "where client_retention_referred_type_id = :client_retention_referred_type_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_retention_referred_type_id" => "{$this->client_retention_referred_type_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
