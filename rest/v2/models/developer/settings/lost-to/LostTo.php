<?php
class LostTo
{
    public $lost_to_aid;
    public $lost_to_is_active;
    public $lost_to_description; 
    public $lost_to_created_at;
    public $lost_to_updated_at;

    public $employee_aid;

    public $lost_to_start;
    public $lost_to_total;
    public $lost_to_search;

    public $connection;
    public $lastInsertedId;
    public $tblLostTo;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblLostTo = "tmv2_lost_to";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblLostTo} ";
            $sql .= "( lost_to_description, "; 
            $sql .= "lost_to_is_active, ";
            $sql .= "lost_to_created_at, ";
            $sql .= "lost_to_updated_at ) values ( ";
            $sql .= ":lost_to_description, "; 
            $sql .= ":lost_to_is_active, ";
            $sql .= ":lost_to_created_at, ";
            $sql .= ":lost_to_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => $this->lost_to_description,
                "lost_to_is_active" => $this->lost_to_is_active,
                "lost_to_created_at" => $this->lost_to_created_at,
                "lost_to_updated_at" => $this->lost_to_updated_at,
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
            $sql .= "from {$this->tblLostTo} ";
            $sql .= "order by lost_to_is_active desc, ";
            $sql .= "lost_to_description asc ";
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
            $sql .= "from {$this->tblLostTo} ";
            $sql .= "order by lost_to_is_active desc, ";
            $sql .= "lost_to_description asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->lost_to_start - 1,
                "total" => $this->lost_to_total,
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
            $sql .= "from {$this->tblLostTo} ";
            $sql .= "where lost_to_description like :search ";  
            $sql .= "order by lost_to_is_active desc, ";
            $sql .= "lost_to_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->lost_to_search}%",  
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
            $sql = "select * from {$this->tblLostTo} ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $sql .= "order by lost_to_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_aid" => $this->lost_to_aid,
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
            $sql = "update {$this->tblLostTo} set ";
            $sql .= "lost_to_description = :lost_to_description, ";
            $sql .= "lost_to_updated_at = :lost_to_updated_at ";
            $sql .= "where lost_to_aid = :lost_to_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => $this->lost_to_description,
                "lost_to_updated_at" => $this->lost_to_updated_at,
                "lost_to_aid" => $this->lost_to_aid,
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
            $sql = "update {$this->tblLostTo} set ";
            $sql .= "lost_to_is_active = :lost_to_is_active, ";
            $sql .= "lost_to_updated_at = :lost_to_updated_at ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_is_active" => $this->lost_to_is_active,
                "lost_to_updated_at" => $this->lost_to_updated_at,
                "lost_to_aid" => $this->lost_to_aid,
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
            $sql = "delete from {$this->tblLostTo} ";
            $sql .= "where lost_to_aid = :lost_to_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_aid" => $this->lost_to_aid,
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
            $sql = "select lost_to_description from {$this->tblLostTo} ";
            $sql .= "where lost_to_description = :lost_to_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "lost_to_description" => "{$this->lost_to_description}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
