<?php
class SettingsOffice
{
    public $settings_office_aid;
    public $settings_office_name;
    public $settings_office_description;
    public $settings_office_is_active;
    public $settings_office_created_at;
    public $settings_office_updated_at;

    public $employee_aid;

    public $settings_office_start;
    public $settings_office_total;
    public $settings_office_search;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsOffice;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsOffice = "tmv2_settings_office";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsOffice} ";
            $sql .= "( settings_office_name, ";
            $sql .= "settings_office_description, ";
            $sql .= "settings_office_is_active, ";
            $sql .= "settings_office_created_at, ";
            $sql .= "settings_office_updated_at ) values ( ";
            $sql .= ":settings_office_name, ";
            $sql .= ":settings_office_description, ";
            $sql .= ":settings_office_is_active, ";
            $sql .= ":settings_office_created_at, ";
            $sql .= ":settings_office_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_name" => $this->settings_office_name,
                "settings_office_description" => $this->settings_office_description,
                "settings_office_is_active" => $this->settings_office_is_active,
                "settings_office_created_at" => $this->settings_office_created_at,
                "settings_office_updated_at" => $this->settings_office_updated_at,
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
            $sql .= "from {$this->tblSettingsOffice} ";
            $sql .= "order by settings_office_is_active desc, ";
            $sql .= "settings_office_name asc ";
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
            $sql .= "from {$this->tblSettingsOffice} ";
            $sql .= "order by settings_office_is_active desc, ";
            $sql .= "settings_office_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_office_start - 1,
                "total" => $this->settings_office_total,
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
            $sql .= "from {$this->tblSettingsOffice} ";
            $sql .= "where settings_office_name like :search ";
            $sql .= "order by settings_office_is_active desc, ";
            $sql .= "settings_office_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->settings_office_search}%",
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
            $sql = "select * from {$this->tblSettingsOffice} ";
            $sql .= "where settings_office_aid = :settings_office_aid ";
            $sql .= "order by settings_office_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_aid" => $this->settings_office_aid,
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
            $sql = "update {$this->tblSettingsOffice} set ";
            $sql .= "settings_office_name = :settings_office_name, ";
            $sql .= "settings_office_description = :settings_office_description, ";
            $sql .= "settings_office_updated_at = :settings_office_updated_at ";
            $sql .= "where settings_office_aid = :settings_office_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_name" => $this->settings_office_name,
                "settings_office_description" => $this->settings_office_description,
                "settings_office_updated_at" => $this->settings_office_updated_at,
                "settings_office_aid" => $this->settings_office_aid,
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
            $sql = "update {$this->tblSettingsOffice} set ";
            $sql .= "settings_office_is_active = :settings_office_is_active, ";
            $sql .= "settings_office_updated_at = :settings_office_updated_at ";
            $sql .= "where settings_office_aid = :settings_office_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_is_active" => $this->settings_office_is_active,
                "settings_office_updated_at" => $this->settings_office_updated_at,
                "settings_office_aid" => $this->settings_office_aid,
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
            $sql = "delete from {$this->tblSettingsOffice} ";
            $sql .= "where settings_office_aid = :settings_office_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_aid" => $this->settings_office_aid,
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
            $sql = "select settings_office_name from {$this->tblSettingsOffice} ";
            $sql .= "where settings_office_name = :settings_office_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_office_name" => "{$this->settings_office_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
