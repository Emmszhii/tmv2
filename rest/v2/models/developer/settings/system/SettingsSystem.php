<?php
class SettingsSystem
{
    public $settings_system_aid;
    public $settings_system_name;
    public $settings_system_email;
    public $settings_system_role;
    public $settings_system_is_active;
    public $settings_system_created_at;
    public $settings_system_updated_at;

    public $employee_aid;

    public $settings_system_start;
    public $settings_system_total;
    public $settings_system_search;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsSystem;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsSystem = "tmv2_settings_system";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsSystem} ";
            $sql .= "( settings_system_name, ";
            $sql .= "settings_system_email, ";
            $sql .= "settings_system_role, ";
            $sql .= "settings_system_is_active, ";
            $sql .= "settings_system_created_at, ";
            $sql .= "settings_system_updated_at ) values ( ";
            $sql .= ":settings_system_name, ";
            $sql .= ":settings_system_email, ";
            $sql .= ":settings_system_role, ";
            $sql .= ":settings_system_is_active, ";
            $sql .= ":settings_system_created_at, ";
            $sql .= ":settings_system_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_name" => $this->settings_system_name,
                "settings_system_email" => $this->settings_system_email,
                "settings_system_role" => $this->settings_system_role,
                "settings_system_is_active" => $this->settings_system_is_active,
                "settings_system_created_at" => $this->settings_system_created_at,
                "settings_system_updated_at" => $this->settings_system_updated_at,
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
            $sql .= "from {$this->tblSettingsSystem} ";
            $sql .= "order by settings_system_is_active desc, ";
            $sql .= "settings_system_name asc ";
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
            $sql .= "from {$this->tblSettingsSystem} ";
            $sql .= "order by settings_system_is_active desc, ";
            $sql .= "settings_system_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_system_start - 1,
                "total" => $this->settings_system_total,
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
            $sql .= "from {$this->tblSettingsSystem} ";
            $sql .= "where settings_system_name like :search ";
            $sql .= "order by settings_system_is_active desc, ";
            $sql .= "settings_system_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->settings_system_search}%",
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
            $sql = "select * from {$this->tblSettingsSystem} ";
            $sql .= "where settings_system_aid = :settings_system_aid ";
            $sql .= "order by settings_system_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_aid" => $this->settings_system_aid,
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
            $sql = "update {$this->tblSettingsSystem} set ";
            $sql .= "settings_system_name = :settings_system_name, ";
            $sql .= "settings_system_email = :settings_system_email, ";
            $sql .= "settings_system_role = :settings_system_role, ";
            $sql .= "settings_system_updated_at = :settings_system_updated_at ";
            $sql .= "where settings_system_aid = :settings_system_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_name" => $this->settings_system_name,
                "settings_system_email" => $this->settings_system_email,
                "settings_system_role" => $this->settings_system_role,
                "settings_system_updated_at" => $this->settings_system_updated_at,
                "settings_system_aid" => $this->settings_system_aid,
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
            $sql = "update {$this->tblSettingsSystem} set ";
            $sql .= "settings_system_is_active = :settings_system_is_active, ";
            $sql .= "settings_system_updated_at = :settings_system_updated_at ";
            $sql .= "where settings_system_aid = :settings_system_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_is_active" => $this->settings_system_is_active,
                "settings_system_updated_at" => $this->settings_system_updated_at,
                "settings_system_aid" => $this->settings_system_aid,
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
            $sql = "delete from {$this->tblSettingsSystem} ";
            $sql .= "where settings_system_aid = :settings_system_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_aid" => $this->settings_system_aid,
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
            $sql = "select settings_system_name from {$this->tblSettingsSystem} ";
            $sql .= "where settings_system_name = :settings_system_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_system_name" => "{$this->settings_system_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
