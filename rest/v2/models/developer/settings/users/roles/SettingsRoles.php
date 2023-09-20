<?php
class SettingsRoles
{
    public $settings_roles_aid;
    public $settings_roles_name;
    public $settings_roles_description;
    public $settings_system_role;
    public $settings_roles_is_active;
    public $settings_roles_created_at;
    public $settings_roles_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsRoles;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsRoles = "tmv2_settings_roles";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsRoles} ";
            $sql .= "( settings_roles_name, ";
            $sql .= "settings_roles_description, ";
            $sql .= "settings_roles_is_active, ";
            $sql .= "settings_roles_created_at, ";
            $sql .= "settings_roles_updated_at ) values ( ";
            $sql .= ":settings_roles_name, ";
            $sql .= ":settings_roles_description, ";
            $sql .= ":settings_roles_is_active, ";
            $sql .= ":settings_roles_created_at, ";
            $sql .= ":settings_roles_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_name" => $this->settings_roles_name,
                "settings_roles_description" => $this->settings_roles_description,
                "settings_roles_is_active" => $this->settings_roles_is_active,
                "settings_roles_created_at" => $this->settings_roles_created_at,
                "settings_roles_updated_at" => $this->settings_roles_updated_at,
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
            $sql .= "from {$this->tblSettingsRoles} ";
            $sql .= "order by settings_roles_is_active desc, ";
            $sql .= "settings_roles_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all limit
    // public function readLimit()
    // {
    //     try {
    //         $sql = "select ";
    //         $sql .= "* ";
    //         $sql .= "from {$this->tblSettingsRoles} ";
    //         $sql .= "order by settings_roles_is_active desc, ";
    //         $sql .= "settings_roles_name asc ";
    //         $sql .= "limit :start, ";
    //         $sql .= ":total ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "start" => $this->settings_system_start - 1,
    //             "total" => $this->settings_system_total,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    // public function search()
    // {
    //     try {
    //         $sql = "select ";
    //         $sql .= "* ";
    //         $sql .= "from {$this->tblSettingsRoles} ";
    //         $sql .= "where settings_roles_name like :search ";
    //         $sql .= "order by settings_roles_is_active desc, ";
    //         $sql .= "settings_roles_name asc ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "search" => "%{$this->settings_system_search}%",
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblSettingsRoles} ";
            $sql .= "where settings_roles_aid = :settings_roles_aid ";
            $sql .= "order by settings_roles_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_aid" => $this->settings_roles_aid,
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
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "settings_roles_name = :settings_roles_name, ";
            $sql .= "settings_roles_description = :settings_roles_description, ";
            $sql .= "settings_roles_updated_at = :settings_roles_updated_at ";
            $sql .= "where settings_roles_aid = :settings_roles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_name" => $this->settings_roles_name,
                "settings_roles_description" => $this->settings_roles_description,
                "settings_roles_updated_at" => $this->settings_roles_updated_at,
                "settings_roles_aid" => $this->settings_roles_aid,
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
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "settings_roles_is_active = :settings_roles_is_active, ";
            $sql .= "settings_roles_updated_at = :settings_roles_updated_at ";
            $sql .= "where settings_roles_aid = :settings_roles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_is_active" => $this->settings_roles_is_active,
                "settings_roles_updated_at" => $this->settings_roles_updated_at,
                "settings_roles_aid" => $this->settings_roles_aid,
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
            $sql = "delete from {$this->tblSettingsRoles} ";
            $sql .= "where settings_roles_aid = :settings_roles_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_aid" => $this->settings_roles_aid,
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
            $sql = "select settings_roles_name from {$this->tblSettingsRoles} ";
            $sql .= "where settings_roles_name = :settings_roles_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_roles_name" => "{$this->settings_roles_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
