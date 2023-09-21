<?php
class SettingsActivity
{
    public $settings_activity_aid;
    public $settings_activity_description;
    public $settings_activity_invoice_description;

    public $settings_activity_is_active;
    public $settings_activity_created_at;
    public $settings_activity_updated_at;

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
            $sql .= "( settings_activity_description, ";
            $sql .= "settings_activity_invoice_description, ";
            $sql .= "settings_activity_is_active, ";
            $sql .= "settings_activity_created_at, ";
            $sql .= "settings_activity_updated_at ) values ( ";
            $sql .= ":settings_activity_description, ";
            $sql .= ":settings_activity_invoice_description, ";
            $sql .= ":settings_activity_is_active, ";
            $sql .= ":settings_activity_created_at, ";
            $sql .= ":settings_activity_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_description" => $this->settings_activity_description,
                "settings_activity_invoice_description" => $this->settings_activity_invoice_description,
                "settings_activity_is_active" => $this->settings_activity_is_active,
                "settings_activity_created_at" => $this->settings_activity_created_at,
                "settings_activity_updated_at" => $this->settings_activity_updated_at,
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
            $sql .= "order by settings_activity_is_active desc, ";
            $sql .= "settings_activity_description asc ";
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
            $sql .= "order by settings_activity_is_active desc, ";
            $sql .= "settings_activity_description asc ";
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
            $sql .= "where settings_activity_description like :search ";
            $sql .= "order by settings_activity_is_active desc, ";
            $sql .= "settings_activity_description asc ";
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
            $sql .= "where settings_activity_aid = :settings_activity_aid ";
            $sql .= "order by settings_activity_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_aid" => $this->settings_activity_aid,
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
            $sql .= "settings_activity_description = :settings_activity_description, ";
            $sql .= "settings_activity_invoice_description = :settings_activity_invoice_description, ";
            $sql .= "settings_activity_updated_at = :settings_activity_updated_at ";
            $sql .= "where settings_activity_aid = :settings_activity_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_description" => $this->settings_activity_description,
                "settings_activity_invoice_description" => $this->settings_activity_invoice_description,
                "settings_activity_updated_at" => $this->settings_activity_updated_at,
                "settings_activity_aid" => $this->settings_activity_aid,
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
            $sql .= "settings_activity_is_active = :settings_activity_is_active, ";
            $sql .= "settings_activity_updated_at = :settings_activity_updated_at ";
            $sql .= "where settings_activity_aid = :settings_activity_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_is_active" => $this->settings_activity_is_active,
                "settings_activity_updated_at" => $this->settings_activity_updated_at,
                "settings_activity_aid" => $this->settings_activity_aid,
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
            $sql .= "where settings_activity_aid = :settings_activity_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_aid" => $this->settings_activity_aid,
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
            $sql = "select settings_activity_description from {$this->tblSettingsActivity} ";
            $sql .= "where settings_activity_description = :settings_activity_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_activity_description" => "{$this->settings_activity_description}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
