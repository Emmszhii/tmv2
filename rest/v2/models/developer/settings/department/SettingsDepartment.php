<?php
class SettingsDepartment
{
    public $settings_department_aid;
    public $settings_department_name;
    public $settings_roles_description;

    public $settings_department_is_active;
    public $settings_department_created_at;
    public $settings_department_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblSettingsDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblSettingsDepartment = "tmv2_settings_department";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblSettingsDepartment} ";
            $sql .= "( settings_department_name, ";
            $sql .= "settings_department_is_active, ";
            $sql .= "settings_department_created_at, ";
            $sql .= "settings_department_updated_at ) values ( ";
            $sql .= ":settings_department_name, ";
            $sql .= ":settings_department_is_active, ";
            $sql .= ":settings_department_created_at, ";
            $sql .= ":settings_department_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_name" => $this->settings_department_name,
                "settings_department_is_active" => $this->settings_department_is_active,
                "settings_department_created_at" => $this->settings_department_created_at,
                "settings_department_updated_at" => $this->settings_department_updated_at,
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
            $sql .= "from {$this->tblSettingsDepartment} ";
            $sql .= "order by settings_department_is_active desc, ";
            $sql .= "settings_department_name asc ";
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
    //         $sql .= "from {$this->tblSettingsDepartment} ";
    //         $sql .= "order by settings_department_is_active desc, ";
    //         $sql .= "settings_department_name asc ";
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
    //         $sql .= "from {$this->tblSettingsDepartment} ";
    //         $sql .= "where settings_department_name like :search ";
    //         $sql .= "order by settings_department_is_active desc, ";
    //         $sql .= "settings_department_name asc ";
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
            $sql = "select * from {$this->tblSettingsDepartment} ";
            $sql .= "where settings_department_aid = :settings_department_aid ";
            $sql .= "order by settings_department_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_aid" => $this->settings_department_aid,
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
            $sql = "update {$this->tblSettingsDepartment} set ";
            $sql .= "settings_department_name = :settings_department_name, ";
            $sql .= "settings_department_updated_at = :settings_department_updated_at ";
            $sql .= "where settings_department_aid = :settings_department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_name" => $this->settings_department_name,
                "settings_department_updated_at" => $this->settings_department_updated_at,
                "settings_department_aid" => $this->settings_department_aid,
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
            $sql = "update {$this->tblSettingsDepartment} set ";
            $sql .= "settings_department_is_active = :settings_department_is_active, ";
            $sql .= "settings_department_updated_at = :settings_department_updated_at ";
            $sql .= "where settings_department_aid = :settings_department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_is_active" => $this->settings_department_is_active,
                "settings_department_updated_at" => $this->settings_department_updated_at,
                "settings_department_aid" => $this->settings_department_aid,
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
            $sql = "delete from {$this->tblSettingsDepartment} ";
            $sql .= "where settings_department_aid = :settings_department_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_aid" => $this->settings_department_aid,
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
            $sql = "select settings_department_name from {$this->tblSettingsDepartment} ";
            $sql .= "where settings_department_name = :settings_department_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "settings_department_name" => "{$this->settings_department_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
