<?php
class EngagementCategory
{
    public $engagement_category_aid;
    public $engagement_category_is_active;
    public $engagement_category_id; 
    public $engagement_category_description;
    public $engagement_category_invoice_description;
    public $engagement_category_created_at;
    public $engagement_category_updated_at;

    public $employee_aid;

    public $engagement_category_start;
    public $engagement_category_total;
    public $engagement_category_search;

    public $connection;
    public $lastInsertedId;
    public $tblEngagementCategory;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEngagementCategory = "tmv2_engagement_category";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblEngagementCategory} ";
            $sql .= "( engagement_category_id, "; 
            $sql .= "engagement_category_description, ";
            $sql .= "engagement_category_invoice_description, ";
            $sql .= "engagement_category_is_active, ";
            $sql .= "engagement_category_created_at, ";
            $sql .= "engagement_category_updated_at ) values ( ";
            $sql .= ":engagement_category_id, "; 
            $sql .= ":engagement_category_description, ";
            $sql .= ":engagement_category_invoice_description, ";
            $sql .= ":engagement_category_is_active, ";
            $sql .= ":engagement_category_created_at, ";
            $sql .= ":engagement_category_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_id" => $this->engagement_category_id,
                "engagement_category_description" => $this->engagement_category_description,
                "engagement_category_invoice_description" => $this->engagement_category_invoice_description,
                "engagement_category_is_active" => $this->engagement_category_is_active,
                "engagement_category_created_at" => $this->engagement_category_created_at,
                "engagement_category_updated_at" => $this->engagement_category_updated_at,
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
            $sql .= "from {$this->tblEngagementCategory} ";
            $sql .= "order by engagement_category_is_active desc, ";
            $sql .= "engagement_category_id asc ";
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
            $sql .= "from {$this->engagement_category_is_active} ";
            $sql .= "order by engagement_category_is_active desc, ";
            $sql .= "engagement_category_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->engagement_category_start - 1,
                "total" => $this->engagement_category_total,
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
            $sql .= "from {$this->tblEngagementCategory} ";
            $sql .= "where engagement_category_id like :search ";  
            $sql .= "order by engagement_category_is_active desc, ";
            $sql .= "engagement_category_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->engagement_category_search}%",  
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
            $sql = "select * from {$this->tblEngagementCategory} ";
            $sql .= "where engagement_category_aid = :engagement_category_aid ";
            $sql .= "order by engagement_category_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_aid" => $this->engagement_category_aid,
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
            $sql = "update {$this->tblEngagementCategory} set ";
            $sql .= "engagement_category_id = :engagement_category_id, ";
            $sql .= "engagement_category_description = :engagement_category_description, ";
            $sql .= "engagement_category_invoice_description = :engagement_category_invoice_description, ";
            $sql .= "engagement_category_updated_at = :engagement_category_updated_at ";
            $sql .= "where engagement_category_updated_at = :engagement_category_updated_at ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_id" => $this->engagement_category_id,
                "engagement_category_description" => $this->engagement_category_description,
                "engagement_category_invoice_description" => $this->engagement_category_invoice_description,
                "engagement_category_updated_at" => $this->engagement_category_updated_at,
                "engagement_category_updated_at" => $this->engagement_category_updated_at,
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
            $sql = "update {$this->tblEngagementCategory} set ";
            $sql .= "engagement_category_is_active = :engagement_category_is_active, ";
            $sql .= "engagement_category_updated_at = :engagement_category_updated_at ";
            $sql .= "where engagement_category_aid = :engagement_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_is_active" => $this->engagement_category_is_active,
                "engagement_category_updated_at" => $this->engagement_category_updated_at,
                "engagement_category_aid" => $this->engagement_category_aid,
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
            $sql = "delete from {$this->tblEngagementCategory} ";
            $sql .= "where engagement_category_aid = :engagement_category_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_aid" => $this->engagement_category_aid,
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
            $sql = "select engagement_category_id from {$this->tblEngagementCategory} ";
            $sql .= "where engagement_category_id = :engagement_category_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_category_id" => "{$this->engagement_category_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
