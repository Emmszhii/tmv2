<?php
class Client
{ 
    public $client_aid;
    public $client_client_id;
    public $client_description;
    public $client_name;
    public $client_is_active;
    public $client_created_at;
    public $client_updated_at;

    public $employee_aid;

    public $settings_activity_start;
    public $settings_activity_total;
    public $settings_activity_search;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsActivity;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsActivity = "tmv2_settings_activity";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsActivity} ";
            $sql .= "( client_client_id, ";
            $sql .= "client_description, ";
            $sql .= "client_is_active, ";
            $sql .= "client_created_at, ";
            $sql .= "client_updated_at ) values ( ";
            $sql .= ":client_client_id, ";
            $sql .= ":client_description, ";
            $sql .= ":client_is_active, ";
            $sql .= ":client_created_at, ";
            $sql .= ":client_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_client_id" => $this->client_client_id,
                "client_description" => $this->client_description,
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
            $sql .= "from {$this->tblSettingsActivity} ";
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
            $sql .= "from {$this->tblSettingsActivity} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_client_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_activity_start - 1,
                "total" => $this->settings_activity_total,
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
            $sql .= "from {$this->tblSettingsActivity} ";
            $sql .= "where client_client_id like :search ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "client_client_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->settings_activity_search}%",
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
            $sql = "select * from {$this->tblSettingsActivity} ";
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
            $sql = "update {$this->tblSettingsActivity} set ";
            $sql .= "client_client_id = :client_client_id, ";
            $sql .= "client_description = :client_description, ";
            $sql .= "client_updated_at = :client_updated_at ";
            $sql .= "where client_aid = :client_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "client_client_id" => $this->client_client_id,
                "client_description" => $this->client_description,
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
            $sql = "update {$this->tblSettingsActivity} set ";
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
            $sql = "delete from {$this->tblSettingsActivity} ";
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
            $sql = "select client_client_id from {$this->tblSettingsActivity} ";
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
}
