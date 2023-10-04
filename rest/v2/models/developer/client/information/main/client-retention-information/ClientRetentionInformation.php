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

    // client search
    public $client_search;


    public $connection;
    public $lastInsertedId;
    public $tblClient;
    public $tblReferralSource;
    public $tblStaff;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "tmv2_client";
        $this->tblReferralSource = "tmv2_referral_source";
        $this->tblStaff = "tmv2_staff";
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
    // search Client
    public function searchContact()
    {
        try {
            $sql = "select ";
            $sql .= "client_aid as id, ";
            $sql .= "client_name as name ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where client_is_active = '1' ";
            $sql .= "and client_name like :search ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // search Client
    public function searchReferralSource()
    {
        try {
            $sql = "select ";
            $sql .= "referral_source_aid as id, ";
            $sql .= "referral_source_name as name ";
            $sql .= "from {$this->tblReferralSource} ";
            $sql .= "where referral_source_is_active = '1' ";
            $sql .= "and referral_source_name like :search ";
            $sql .= "order by referral_source_is_active desc, ";
            $sql .= "referral_source_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // search Client
    public function searchStaff()
    {
        try {
            $sql = "select ";
            $sql .= "client_aid as id, ";
            $sql .= "client_name as name ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where client_is_active = '1' ";
            $sql .= "and client_name like :search ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
