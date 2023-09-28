<?php
class Client
{
    public $client_aid;
    public $client_client_id;
    public $client_name;
    public $client_description;
    public $client_entities_id;
    public $client_partner_id;
    public $client_is_active;
    public $client_created_at;
    public $client_updated_at;

    public $employee_aid;

    public $client_start;
    public $client_total;
    public $client_search;

    public $connection;
    public $lastInsertedId;
    public $tblClient;
    public $tblEntities;
    public $tblStaff;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "tmv2_client";
        $this->tblEntities = "tmv2_entities";
        $this->tblStaff = "tmv2_staff";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClient} ";
            $sql .= "( client_client_id, ";
            $sql .= "client_name, ";
            $sql .= "client_description, ";
            $sql .= "client_entities_id, ";
            $sql .= "client_is_active, ";
            $sql .= "client_created_at, ";
            $sql .= "client_updated_at ) values ( ";
            $sql .= ":client_client_id, ";
            $sql .= ":client_name, ";
            $sql .= ":client_description, ";
            $sql .= ":client_entities_id, ";
            $sql .= ":client_is_active, ";
            $sql .= ":client_created_at, ";
            $sql .= ":client_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_client_id" => $this->client_client_id,
                "client_name" => $this->client_name,
                "client_description" => $this->client_description,
                "client_entities_id" => $this->client_entities_id,
                "client_is_active" => $this->client_is_active,
                "client_created_at" => $this->client_created_at,
                "client_updated_at" => $this->client_updated_at,
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
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_client_id asc ";
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
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_client_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->client_start - 1,
                "total" => $this->client_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblClient} ";
            $sql .= "where client_client_id like :search ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_client_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_search}%",
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
            $sql = "select * from {$this->tblClient} ";
            $sql .= "where client_aid = :client_aid ";
            $sql .= "order by client_client_id asc ";
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
            $sql .= "client_client_id = :client_client_id, ";
            $sql .= "client_name = :client_name, ";
            $sql .= "client_description = :client_description, ";
            $sql .= "client_entities_id = :client_entities_id, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_client_id" => $this->client_client_id,
                "client_name" => $this->client_name,
                "client_description" => $this->client_description,
                "client_entities_id" => $this->client_entities_id,
                "client_updated_at" => $this->client_updated_at,
                "client_aid" => $this->client_aid,
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
            $sql = "update {$this->tblClient} set ";
            $sql .= "client_is_active = :client_is_active, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_is_active" => $this->client_is_active,
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
            $sql = "select client_client_id from {$this->tblClient} ";
            $sql .= "where client_client_id = :client_client_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_client_id" => "{$this->client_client_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search Entities in add modal client of tbl Entities
    public function searchEntities()
    {
        try {
            $sql = "select ";
            $sql .= "entities_is_active, ";
            $sql .= "entities_aid as id, ";
            $sql .= "entities_id as name ";
            $sql .= "from {$this->tblEntities} ";
            $sql .= "where entities_is_active = '1' ";
            $sql .= "and entities_id like :entities_search_id ";
            $sql .= "order by entities_is_active desc, ";
            $sql .= "entities_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_search_id" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // search Partner in add modal client of tbl Staff
    public function searchPartner()
    {
        try {
            $sql = "select ";
            $sql .= "staff_is_active, ";
            $sql .= "staff_aid as id, ";
            $sql .= "staff_id as name ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where staff_is_active = '1' ";
            $sql .= "and staff_id like :staff_search_id ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_search_id" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
