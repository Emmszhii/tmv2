<?php
class SettingsOther
{
    public $settings_other_aid;
    public $settings_other_name;
    public $settings_other_email;
    public $settings_other_roles_id;
    public $settings_other_is_active;
    public $settings_other_created_at;
    public $settings_other_updated_at;

    public $employee_aid;

    public $settings_other_start;
    public $settings_other_total;
    public $settings_other_search;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsOther;
    public $tblSettingsRoles;


    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsOther = "tmv2_settings_other";
        $this->tblSettingsRoles = "tmv2_settings_roles";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsOther} ";
            $sql .= "( settings_other_name, ";
            $sql .= "settings_other_email, ";
            $sql .= "settings_other_roles_id, ";
            $sql .= "settings_other_is_active, ";
            $sql .= "settings_other_created_at, ";
            $sql .= "settings_other_updated_at ) values ( ";
            $sql .= ":settings_other_name, ";
            $sql .= ":settings_other_email, ";
            $sql .= ":settings_other_roles_id, ";
            $sql .= ":settings_other_is_active, ";
            $sql .= ":settings_other_created_at, ";
            $sql .= ":settings_other_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_name" => $this->settings_other_name,
                "settings_other_email" => $this->settings_other_email,
                "settings_other_roles_id" => $this->settings_other_roles_id,
                "settings_other_is_active" => $this->settings_other_is_active,
                "settings_other_created_at" => $this->settings_other_created_at,
                "settings_other_updated_at" => $this->settings_other_updated_at,
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
            $sql .= "from {$this->tblSettingsOther} ";
            $sql .= "order by settings_other_is_active desc, ";
            $sql .= "settings_other_name asc ";
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
            $sql .= "settings_roles_name, ";
            $sql .= "settings_other_aid, ";
            $sql .= "settings_other_created_at, ";
            $sql .= "settings_other_email, ";
            $sql .= "settings_other_is_active, ";
            $sql .= "settings_other_name, ";
            $sql .= "settings_other_aid, ";
            $sql .= "settings_other_roles_id, ";
            $sql .= "settings_other_updated_at ";
            $sql .= "from {$this->tblSettingsOther} as other , ";
            $sql .= "{$this->tblSettingsRoles} as roles ";
            $sql .= "where ";
            $sql .= "other.settings_other_roles_id = ";
            $sql .= "roles.settings_roles_aid ";
            $sql .= "order by settings_other_is_active desc, ";
            $sql .= "settings_other_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->settings_other_start - 1,
                "total" => $this->settings_other_total,
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
            $sql .= "from {$this->tblSettingsOther} ";
            $sql .= "where settings_other_name like :search ";
            $sql .= "order by settings_other_is_active desc, ";
            $sql .= "settings_other_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->settings_other_search}%",
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
            $sql = "select * from {$this->tblSettingsOther} ";
            $sql .= "where settings_other_aid = :settings_other_aid ";
            $sql .= "order by settings_other_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_aid" => $this->settings_other_aid,
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
            $sql = "update {$this->tblSettingsOther} set ";
            $sql .= "settings_other_name = :settings_other_name, ";
            $sql .= "settings_other_email = :settings_other_email, ";
            $sql .= "settings_other_roles_id = :settings_other_roles_id, ";
            $sql .= "settings_other_updated_at = :settings_other_updated_at ";
            $sql .= "where settings_other_aid = :settings_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_name" => $this->settings_other_name,
                "settings_other_email" => $this->settings_other_email,
                "settings_other_roles_id" => $this->settings_other_roles_id,
                "settings_other_updated_at" => $this->settings_other_updated_at,
                "settings_other_aid" => $this->settings_other_aid,
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
            $sql = "update {$this->tblSettingsOther} set ";
            $sql .= "settings_other_is_active = :settings_other_is_active, ";
            $sql .= "settings_other_updated_at = :settings_other_updated_at ";
            $sql .= "where settings_other_aid = :settings_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_is_active" => $this->settings_other_is_active,
                "settings_other_updated_at" => $this->settings_other_updated_at,
                "settings_other_aid" => $this->settings_other_aid,
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
            $sql = "delete from {$this->tblSettingsOther} ";
            $sql .= "where settings_other_aid = :settings_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_aid" => $this->settings_other_aid,
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
            $sql = "select settings_other_name from {$this->tblSettingsOther} ";
            $sql .= "where settings_other_name = :settings_other_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_name" => "{$this->settings_other_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // email
    public function checkEmail()
    {
        try {
            $sql = "select settings_other_email from {$this->tblSettingsOther} ";
            $sql .= "where settings_other_email = :settings_other_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_other_email" => "{$this->settings_other_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
