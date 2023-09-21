<?php
class SpecialCharacter
{
    public $special_character_aid;
    public $special_character_is_active;
    public $special_character_name; 
    public $special_character_created_at;
    public $special_character_updated_at;

    public $employee_aid;

    public $special_character_start;
    public $special_character_total;
    public $special_character_search;

    public $connection;
    public $lastInsertedId;
    public $tblSpecialCharacter;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSpecialCharacter = "tmv2_1099_special_character";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSpecialCharacter} ";
            $sql .= "( special_character_name, "; 
            $sql .= "special_character_is_active, ";
            $sql .= "special_character_created_at, ";
            $sql .= "special_character_updated_at ) values ( ";
            $sql .= ":special_character_name, "; 
            $sql .= ":special_character_is_active, ";
            $sql .= ":special_character_created_at, ";
            $sql .= ":special_character_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_name" => $this->special_character_name,
                "special_character_is_active" => $this->special_character_is_active,
                "special_character_created_at" => $this->special_character_created_at,
                "special_character_updated_at" => $this->special_character_updated_at,
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
            $sql .= "from {$this->tblSpecialCharacter} ";
            $sql .= "order by special_character_is_active desc, ";
            $sql .= "special_character_name asc ";
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
            $sql .= "from {$this->tblSpecialCharacter} ";
            $sql .= "order by special_character_is_active desc, ";
            $sql .= "special_character_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->special_character_start - 1,
                "total" => $this->special_character_total,
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
            $sql .= "from {$this->tblSpecialCharacter} ";
            $sql .= "where special_character_name like :search ";  
            $sql .= "order by special_character_is_active desc, ";
            $sql .= "special_character_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->special_character_search}%",  
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
            $sql = "select * from {$this->tblSpecialCharacter} ";
            $sql .= "where special_character_aid = :special_character_aid ";
            $sql .= "order by special_character_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_aid" => $this->special_character_aid,
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
            $sql = "update {$this->tblSpecialCharacter} set ";
            $sql .= "special_character_name = :special_character_name, ";
            $sql .= "special_character_updated_at = :special_character_updated_at ";
            $sql .= "where special_character_aid = :special_character_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_name" => $this->special_character_name,
                "special_character_updated_at" => $this->special_character_updated_at,
                "special_character_aid" => $this->special_character_aid,
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
            $sql = "update {$this->tblSpecialCharacter} set ";
            $sql .= "special_character_is_active = :special_character_is_active, ";
            $sql .= "special_character_updated_at = :special_character_updated_at ";
            $sql .= "where special_character_aid = :special_character_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_is_active" => $this->special_character_is_active,
                "special_character_updated_at" => $this->special_character_updated_at,
                "special_character_aid" => $this->special_character_aid,
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
            $sql = "delete from {$this->tblSpecialCharacter} ";
            $sql .= "where special_character_aid = :special_character_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_aid" => $this->special_character_aid,
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
            $sql = "select special_character_name from {$this->tblSpecialCharacter} ";
            $sql .= "where special_character_name = :special_character_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "special_character_name" => "{$this->special_character_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
