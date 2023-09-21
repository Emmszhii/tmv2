<?php
class ClientClass
{
    public $client_class_aid;
    public $client_class_is_active;
    public $client_class_name; 
    public $client_class_created_at;
    public $client_class_updated_at;

    public $employee_aid;

    public $client_class_start;
    public $client_class_total;
    public $client_class_search;

    public $connection;
    public $lastInsertedId;
    public $tblClientClass;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClientClass = "tmv2_client_class";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClientClass} ";
            $sql .= "( client_class_name, "; 
            $sql .= "client_class_is_active, ";
            $sql .= "client_class_created_at, ";
            $sql .= "client_class_updated_at ) values ( ";
            $sql .= ":client_class_name, "; 
            $sql .= ":client_class_is_active, ";
            $sql .= ":client_class_created_at, ";
            $sql .= ":client_class_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_name" => $this->client_class_name,
                "client_class_is_active" => $this->client_class_is_active,
                "client_class_created_at" => $this->client_class_created_at,
                "client_class_updated_at" => $this->client_class_updated_at,
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
            $sql .= "from {$this->tblClientClass} ";
            $sql .= "order by client_class_is_active desc, ";
            $sql .= "client_class_name asc ";
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
            $sql .= "from {$this->tblClientClass} ";
            $sql .= "order by client_class_is_active desc, ";
            $sql .= "client_class_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->client_class_start - 1,
                "total" => $this->client_class_total,
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
            $sql .= "from {$this->tblClientClass} ";
            $sql .= "where client_class_name like :search ";  
            $sql .= "order by client_class_is_active desc, ";
            $sql .= "client_class_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_class_search}%",  
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
            $sql = "select * from {$this->tblClientClass} ";
            $sql .= "where client_class_aid = :client_class_aid ";
            $sql .= "order by client_class_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_aid" => $this->client_class_aid,
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
            $sql = "update {$this->tblClientClass} set ";
            $sql .= "client_class_name = :client_class_name, ";
            $sql .= "client_class_updated_at = :client_class_updated_at ";
            $sql .= "where client_class_aid = :client_class_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_name" => $this->client_class_name,
                "client_class_updated_at" => $this->client_class_updated_at,
                "client_class_aid" => $this->client_class_aid,
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
            $sql = "update {$this->tblClientClass} set ";
            $sql .= "client_class_is_active = :client_class_is_active, ";
            $sql .= "client_class_updated_at = :client_class_updated_at ";
            $sql .= "where client_class_aid = :client_class_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_is_active" => $this->client_class_is_active,
                "client_class_updated_at" => $this->client_class_updated_at,
                "client_class_aid" => $this->client_class_aid,
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
            $sql = "delete from {$this->tblClientClass} ";
            $sql .= "where client_class_aid = :client_class_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_aid" => $this->client_class_aid,
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
            $sql = "select client_class_name from {$this->tblClientClass} ";
            $sql .= "where client_class_name = :client_class_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_class_name" => "{$this->client_class_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
