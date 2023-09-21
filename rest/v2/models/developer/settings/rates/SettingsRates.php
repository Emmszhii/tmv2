<?php
class SettingsRates
{	
    public $settings_rates_aid;
    public $settings_rates_description;
    public $settings_rates_is_active;
    public $settings_rates_created_at;
    public $settings_rates_updated_at;

    public $employee_aid;

    public $settings_rates_start;
    public $settings_rates_total;
    public $settings_rates_search;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsRates;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsRates = "tmv2_settings_rates";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsRates} ";
            $sql .= "( settings_rates_description, ";
            $sql .= "settings_rates_is_active, ";
            $sql .= "settings_rates_created_at, ";
            $sql .= "settings_rates_updated_at ) values ( ";
            $sql .= ":settings_rates_description, ";
            $sql .= ":settings_rates_is_active, ";
            $sql .= ":settings_rates_created_at, ";
            $sql .= ":settings_rates_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_description" => $this->settings_rates_description,
                "settings_rates_is_active" => $this->settings_rates_is_active,
                "settings_rates_created_at" => $this->settings_rates_created_at,
                "settings_rates_updated_at" => $this->settings_rates_updated_at,
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
            $sql .= "from {$this->tblSettingsRates} ";
            $sql .= "order by settings_rates_is_active desc, ";
            $sql .= "settings_rates_description asc ";
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
            $sql .= "from {$this->tblSettingsRates} ";
            $sql .= "order by settings_rates_is_active desc, ";
            $sql .= "settings_rates_description asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_rates_start - 1,
                "total" => $this->settings_rates_total,
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
            $sql .= "from {$this->tblSettingsRates} ";
            $sql .= "where settings_rates_description like :search ";
            $sql .= "order by settings_rates_is_active desc, ";
            $sql .= "settings_rates_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->settings_rates_search}%",
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
            $sql = "select * from {$this->tblSettingsRates} ";
            $sql .= "where settings_rates_aid = :settings_rates_aid ";
            $sql .= "order by settings_rates_description asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_aid" => $this->settings_rates_aid,
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
            $sql = "update {$this->tblSettingsRates} set ";
            $sql .= "settings_rates_description = :settings_rates_description, ";
            $sql .= "settings_rates_updated_at = :settings_rates_updated_at ";
            $sql .= "where settings_rates_aid = :settings_rates_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_description" => $this->settings_rates_description,
                "settings_rates_updated_at" => $this->settings_rates_updated_at,
                "settings_rates_aid" => $this->settings_rates_aid,
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
            $sql = "update {$this->tblSettingsRates} set ";
            $sql .= "settings_rates_is_active = :settings_rates_is_active, ";
            $sql .= "settings_rates_updated_at = :settings_rates_updated_at ";
            $sql .= "where settings_rates_aid = :settings_rates_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_is_active" => $this->settings_rates_is_active,
                "settings_rates_updated_at" => $this->settings_rates_updated_at,
                "settings_rates_aid" => $this->settings_rates_aid,
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
            $sql = "delete from {$this->tblSettingsRates} ";
            $sql .= "where settings_rates_aid = :settings_rates_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_aid" => $this->settings_rates_aid,
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
            $sql = "select settings_rates_description from {$this->tblSettingsRates} ";
            $sql .= "where settings_rates_description = :settings_rates_description ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_rates_description" => "{$this->settings_rates_description}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
