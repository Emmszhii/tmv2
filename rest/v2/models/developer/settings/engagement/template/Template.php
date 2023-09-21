<?php
class EngagementTemplate
{
    public $engagement_template_aid;
    public $engagement_template_is_active;
    public $engagement_template_id; 
    public $engagement_template_description;
    public $engagement_template_invoice_description;
    public $engagement_template_created_at;
    public $engagement_template_updated_at;

    public $employee_aid;

    public $engagement_template_start;
    public $engagement_template_total;
    public $engagement_template_search;

    public $connection;
    public $lastInsertedId;
    public $tblEngagementTemplate;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblEngagementTemplate = "tmv2_engagement_template";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblEngagementTemplate} ";
            $sql .= "( engagement_template_id, "; 
            $sql .= "engagement_template_description, ";
            $sql .= "engagement_template_invoice_description, ";
            $sql .= "engagement_template_is_active, ";
            $sql .= "engagement_template_created_at, ";
            $sql .= "engagement_template_updated_at ) values ( ";
            $sql .= ":engagement_template_id, "; 
            $sql .= ":engagement_template_description, ";
            $sql .= ":engagement_template_invoice_description, ";
            $sql .= ":engagement_template_is_active, ";
            $sql .= ":engagement_template_created_at, ";
            $sql .= ":engagement_template_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_id" => $this->engagement_template_id,
                "engagement_template_description" => $this->engagement_template_description,
                "engagement_template_invoice_description" => $this->engagement_template_invoice_description,
                "engagement_template_is_active" => $this->engagement_template_is_active,
                "engagement_template_created_at" => $this->engagement_template_created_at,
                "engagement_template_updated_at" => $this->engagement_template_updated_at,
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
            $sql .= "from {$this->tblEngagementTemplate} ";
            $sql .= "order by engagement_template_is_active desc, ";
            $sql .= "engagement_template_id asc ";
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
            $sql .= "from {$this->tblEngagementTemplate} ";
            $sql .= "order by engagement_template_is_active desc, ";
            $sql .= "engagement_template_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->engagement_template_start - 1,
                "total" => $this->engagement_template_total,
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
            $sql .= "from {$this->tblEngagementTemplate} ";
            $sql .= "where engagement_template_id like :search ";  
            $sql .= "order by engagement_template_is_active desc, ";
            $sql .= "engagement_template_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->engagement_template_search}%",  
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
            $sql = "select * from {$this->tblEngagementTemplate} ";
            $sql .= "where engagement_template_aid = :engagement_template_aid ";
            $sql .= "order by engagement_template_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_aid" => $this->engagement_template_aid,
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
            $sql = "update {$this->tblEngagementTemplate} set ";
            $sql .= "engagement_template_id = :engagement_template_id, ";
            $sql .= "engagement_template_description = :engagement_template_description, ";
            $sql .= "engagement_template_invoice_description = :engagement_template_invoice_description, ";
            $sql .= "engagement_template_updated_at = :engagement_template_updated_at ";
            $sql .= "where engagement_template_aid = :engagement_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_id" => $this->engagement_template_id,
                "engagement_template_description" => $this->engagement_template_description,
                "engagement_template_invoice_description" => $this->engagement_template_invoice_description,
                "engagement_template_updated_at" => $this->engagement_template_updated_at,
                "engagement_template_aid" => $this->engagement_template_aid,
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
            $sql = "update {$this->tblEngagementTemplate} set ";
            $sql .= "engagement_template_is_active = :engagement_template_is_active, ";
            $sql .= "engagement_template_updated_at = :engagement_template_updated_at ";
            $sql .= "where engagement_template_aid = :engagement_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_is_active" => $this->engagement_template_is_active,
                "engagement_template_updated_at" => $this->engagement_template_updated_at,
                "engagement_template_aid" => $this->engagement_template_aid,
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
            $sql = "delete from {$this->tblEngagementTemplate} ";
            $sql .= "where engagement_template_aid = :engagement_template_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_aid" => $this->engagement_template_aid,
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
            $sql = "select engagement_template_id from {$this->tblEngagementTemplate} ";
            $sql .= "where engagement_template_id = :engagement_template_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "engagement_template_id" => "{$this->engagement_template_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
