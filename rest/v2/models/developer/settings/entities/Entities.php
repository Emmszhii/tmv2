<?php
class Entities
{
    public $entities_aid;
    public $entities_is_active;
    public $entities_id; 
    public $entities_description;
    public $entities_created_at;
    public $entities_updated_at;

    public $employee_aid;

    public $entities_start;
    public $entities_total;
    public $entities_search;

    public $connection;
    public $lastInsertedId;
    public $tblEntities;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEntities = "tmv2_entities";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblEntities} ";
            $sql .= "( entities_id, "; 
            $sql .= "entities_description, ";
            $sql .= "entities_is_active, ";
            $sql .= "entities_created_at, ";
            $sql .= "entities_updated_at ) values ( ";
            $sql .= ":entities_id, "; 
            $sql .= ":entities_description, ";
            $sql .= ":entities_is_active, ";
            $sql .= ":entities_created_at, ";
            $sql .= ":entities_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_id" => $this->entities_id,
                "entities_description" => $this->entities_description,
                "entities_is_active" => $this->entities_is_active,
                "entities_created_at" => $this->entities_created_at,
                "entities_updated_at" => $this->entities_updated_at,
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
            $sql .= "from {$this->tblEntities} ";
            $sql .= "order by entities_is_active desc, ";
            $sql .= "entities_id asc ";
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
            $sql .= "from {$this->tblEntities} ";
            $sql .= "order by entities_is_active desc, ";
            $sql .= "entities_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->entities_start - 1,
                "total" => $this->entities_total,
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
            $sql .= "from {$this->tblEntities} ";
            $sql .= "where entities_id like :search ";  
            $sql .= "order by entities_is_active desc, ";
            $sql .= "entities_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->entities_search}%",  
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
            $sql = "select * from {$this->tblEntities} ";
            $sql .= "where entities_aid = :entities_aid ";
            $sql .= "order by entities_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_aid" => $this->entities_aid,
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
            $sql = "update {$this->tblEntities} set ";
            $sql .= "entities_id = :entities_id, ";
            $sql .= "entities_description = :entities_description, ";
            $sql .= "entities_updated_at = :entities_updated_at ";
            $sql .= "where entities_aid = :entities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_id" => $this->entities_id,
                "entities_description" => $this->entities_description,
                "entities_updated_at" => $this->entities_updated_at,
                "entities_aid" => $this->entities_aid,
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
            $sql = "update {$this->tblEntities} set ";
            $sql .= "entities_is_active = :entities_is_active, ";
            $sql .= "entities_updated_at = :entities_updated_at ";
            $sql .= "where entities_aid = :entities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_is_active" => $this->entities_is_active,
                "entities_updated_at" => $this->entities_updated_at,
                "entities_aid" => $this->entities_aid,
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
            $sql = "delete from {$this->tblEntities} ";
            $sql .= "where entities_aid = :entities_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_aid" => $this->entities_aid,
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
            $sql = "select entities_id from {$this->tblEntities} ";
            $sql .= "where entities_id = :entities_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_id" => "{$this->entities_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
