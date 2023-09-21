<?php
class ReferralType
{
    public $referral_type_aid;
    public $referral_type_is_active;
    public $referral_type_name; 
    public $referral_type_created_at;
    public $referral_type_updated_at;

    public $employee_aid;

    public $referral_type_start;
    public $referral_type_total;
    public $referral_type_search;

    public $connection;
    public $lastInsertedId;
    public $tblReferralType;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblReferralType = "tmv2_referral_type";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblReferralType} ";
            $sql .= "( referral_type_name, "; 
            $sql .= "referral_type_is_active, ";
            $sql .= "referral_type_created_at, ";
            $sql .= "referral_type_updated_at ) values ( ";
            $sql .= ":referral_type_name, "; 
            $sql .= ":referral_type_is_active, ";
            $sql .= ":referral_type_created_at, ";
            $sql .= ":referral_type_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_created_at" => $this->referral_type_created_at,
                "referral_type_updated_at" => $this->referral_type_updated_at,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblReferralType} ";
            $sql .= "order by referral_type_is_active desc, ";
            $sql .= "referral_type_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
  
    // read all limit
    public function readLimit()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblReferralType} ";
            $sql .= "order by referral_type_is_active desc, ";
            $sql .= "referral_type_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->referral_type_start - 1,
                "total" => $this->referral_type_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblReferralType} ";
            $sql .= "where referral_type_name like :search ";  
            $sql .= "order by referral_type_is_active desc, ";
            $sql .= "referral_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->referral_type_search}%",  
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblReferralType} ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $sql .= "order by referral_type_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_name = :referral_type_name, ";
            $sql .= "referral_type_updated_at = :referral_type_updated_at ";
            $sql .= "where referral_type_aid = :referral_type_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => $this->referral_type_name,
                "referral_type_updated_at" => $this->referral_type_updated_at,
                "referral_type_aid" => $this->referral_type_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblReferralType} set ";
            $sql .= "referral_type_is_active = :referral_type_is_active, ";
            $sql .= "referral_type_updated_at = :referral_type_updated_at ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_is_active" => $this->referral_type_is_active,
                "referral_type_updated_at" => $this->referral_type_updated_at,
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "delete from {$this->tblReferralType} ";
            $sql .= "where referral_type_aid = :referral_type_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_aid" => $this->referral_type_aid,
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
            $sql = "select referral_type_name from {$this->tblReferralType} ";
            $sql .= "where referral_type_name = :referral_type_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "referral_type_name" => "{$this->referral_type_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
