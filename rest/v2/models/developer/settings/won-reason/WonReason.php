<?php
class WonReason
{
    public $won_reason_aid;
    public $won_reason_is_active;
    public $won_reason_description; 
    public $won_reason_created_at;
    public $won_reason_updated_at;

    public $employee_aid;

    public $won_reason_start;
    public $won_reason_total;
    public $won_reason_search;

    public $connection;
    public $lastInsertedId;
    public $tblWonReason;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblWonReason = "tmv2_won_reason";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblWonReason} ";
            $sql .= "( won_reason_description, "; 
            $sql .= "won_reason_is_active, ";
            $sql .= "won_reason_created_at, ";
            $sql .= "won_reason_updated_at ) values ( ";
            $sql .= ":won_reason_description, "; 
            $sql .= ":won_reason_is_active, ";
            $sql .= ":won_reason_created_at, ";
            $sql .= ":won_reason_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_description" => $this->won_reason_description,
                "won_reason_is_active" => $this->won_reason_is_active,
                "won_reason_created_at" => $this->won_reason_created_at,
                "won_reason_updated_at" => $this->won_reason_updated_at,
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
            $sql .= "from {$this->tblWonReason} ";
            $sql .= "order by won_reason_is_active desc, ";
            $sql .= "won_reason_description asc ";
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
            $sql .= "from {$this->tblWonReason} ";
            $sql .= "order by won_reason_is_active desc, ";
            $sql .= "won_reason_description asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->won_reason_start - 1,
                "total" => $this->won_reason_total,
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
            $sql .= "from {$this->tblWonReason} ";
            $sql .= "where won_reason_description like :search ";  
            $sql .= "order by won_reason_is_active desc, ";
            $sql .= "won_reason_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->won_reason_search}%",  
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
            $sql = "select * from {$this->tblWonReason} ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $sql .= "order by won_reason_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "update {$this->tblWonReason} set ";
            $sql .= "won_reason_description = :won_reason_description, ";
            $sql .= "won_reason_updated_at = :won_reason_updated_at ";
            $sql .= "where won_reason_aid = :won_reason_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_description" => $this->won_reason_description,
                "won_reason_updated_at" => $this->won_reason_updated_at,
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "update {$this->tblWonReason} set ";
            $sql .= "won_reason_is_active = :won_reason_is_active, ";
            $sql .= "won_reason_updated_at = :won_reason_updated_at ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_is_active" => $this->won_reason_is_active,
                "won_reason_updated_at" => $this->won_reason_updated_at,
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "delete from {$this->tblWonReason} ";
            $sql .= "where won_reason_aid = :won_reason_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_aid" => $this->won_reason_aid,
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
            $sql = "select won_reason_description from {$this->tblWonReason} ";
            $sql .= "where won_reason_description = :won_reason_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "won_reason_description" => "{$this->won_reason_description}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
