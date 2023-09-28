<?php
class Staff
{
    public $staff_aid;
    public $staff_id;
    public $staff_description;
    public $staff_last_name;
    public $staff_first_name;
    public $staff_middle_name;
    public $staff_department;
    public $staff_date_hired;
    public $staff_office;
    public $staff_is_active;
    public $staff_created_at;
    public $staff_updated_at;

    public $employee_aid;

    public $staff_start;
    public $staff_total;
    public $staff_search;

    public $connection;
    public $lastInsertedId;
    public $tblStaff;
    public $tblSettingsOffice;
    public $tblSettingsDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblStaff = "tmv2_staff";
        $this->tblSettingsOffice = "tmv2_settings_office";
        $this->tblSettingsDepartment = "tmv2_settings_department";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblStaff} ";
            $sql .= "( staff_id, ";
            $sql .= "staff_description, ";
            $sql .= "staff_last_name, ";
            $sql .= "staff_first_name, ";
            $sql .= "staff_middle_name, ";
            $sql .= "staff_department, ";
            $sql .= "staff_date_hired, ";
            $sql .= "staff_office, ";
            $sql .= "staff_is_active, ";
            $sql .= "staff_created_at, ";
            $sql .= "staff_updated_at ) values ( ";
            $sql .= ":staff_id, ";
            $sql .= ":staff_description, ";
            $sql .= ":staff_last_name, ";
            $sql .= ":staff_first_name, ";
            $sql .= ":staff_middle_name, ";
            $sql .= ":staff_department, ";
            $sql .= ":staff_date_hired, ";
            $sql .= ":staff_office, ";
            $sql .= ":staff_is_active, ";
            $sql .= ":staff_created_at, ";
            $sql .= ":staff_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_id" => $this->staff_id,
                "staff_description" => $this->staff_description,
                "staff_last_name" => $this->staff_last_name,
                "staff_first_name" => $this->staff_first_name,
                "staff_middle_name" => $this->staff_middle_name,
                "staff_department" => $this->staff_department,
                "staff_date_hired" => $this->staff_date_hired,
                "staff_office" => $this->staff_office,
                "staff_is_active" => $this->staff_is_active,
                "staff_created_at" => $this->staff_created_at,
                "staff_updated_at" => $this->staff_updated_at,
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
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
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
            $sql .= "from {$this->tblStaff} ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->staff_start - 1,
                "total" => $this->staff_total,
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
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where staff_id like :search ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->staff_search}%",
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
            $sql = "select * from {$this->tblStaff} ";
            $sql .= "where staff_aid = :staff_aid ";
            $sql .= "order by staff_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_aid" => $this->staff_aid,
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
            $sql = "update {$this->tblStaff} set ";
            $sql .= "staff_id = :staff_id, ";
            $sql .= "staff_description = :staff_description, ";
            $sql .= "staff_last_name = :staff_last_name, ";
            $sql .= "staff_first_name = :staff_first_name, ";
            $sql .= "staff_middle_name = :staff_middle_name, ";
            $sql .= "staff_department = :staff_department, ";
            $sql .= "staff_date_hired = :staff_date_hired, ";
            $sql .= "staff_office = :staff_office, ";
            $sql .= "staff_updated_at = :staff_updated_at ";
            $sql .= "where staff_aid = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_id" => $this->staff_id,
                "staff_description" => $this->staff_description,
                "staff_last_name" => $this->staff_last_name,
                "staff_first_name" => $this->staff_first_name,
                "staff_middle_name" => $this->staff_middle_name,
                "staff_department" => $this->staff_department,
                "staff_date_hired" => $this->staff_date_hired,
                "staff_office" => $this->staff_office,
                "staff_updated_at" => $this->staff_updated_at,
                "staff_aid" => $this->staff_aid,
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
            $sql = "update {$this->tblStaff} set ";
            $sql .= "staff_is_active = :staff_is_active, ";
            $sql .= "staff_updated_at = :staff_updated_at ";
            $sql .= "where staff_aid = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_is_active" => $this->staff_is_active,
                "staff_updated_at" => $this->staff_updated_at,
                "staff_aid" => $this->staff_aid,
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
            $sql = "delete from {$this->tblStaff} ";
            $sql .= "where staff_aid = :staff_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_aid" => $this->staff_aid,
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
            $sql = "select staff_id from {$this->tblStaff} ";
            $sql .= "where staff_id = :staff_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_id" => "{$this->staff_id}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

       // search
       public function searchOffice()
       {
           try {
               $sql = "select ";
               $sql .= "settings_office_is_active, ";
               $sql .= "settings_office_aid as id, ";
               $sql .= "settings_office_name as name ";
               $sql .= "from {$this->tblSettingsOffice} ";
               $sql .= "where settings_office_is_active = '1' ";
               $sql .= "and settings_office_name like :settings_office_name ";
               $sql .= "order by settings_office_is_active desc, ";
               $sql .= "settings_office_name asc ";
               $query = $this->connection->prepare($sql);
               $query->execute([
                   "settings_office_name" => "%{$this->staff_search}%",
               ]);
           } catch (PDOException $ex) {
               $query = false;
           }
           return $query;
       }

       // search
       public function searchDepartment()
       {
           try {
               $sql = "select ";
               $sql .= "settings_department_is_active, ";
               $sql .= "settings_department_aid as id, ";
               $sql .= "settings_department_name as name ";
               $sql .= "from {$this->tblSettingsDepartment} ";
               $sql .= "where settings_department_is_active = '1' ";
               $sql .= "and settings_department_name like :settings_department_name ";
               $sql .= "order by settings_department_is_active desc, ";
               $sql .= "settings_department_name asc ";
               $query = $this->connection->prepare($sql);
               $query->execute([
                   "settings_department_name" => "%{$this->staff_search}%",
               ]);
           } catch (PDOException $ex) {
               $query = false;
           }
           return $query;
       }

        // search
        public function officeSearch()
        {
            try {
                $sql = "select ";
                $sql .= "settings_office_is_active, ";
                $sql .= "settings_office_aid, ";
                $sql .= "settings_office_name ";
                $sql .= "from {$this->tblSettingsOffice} ";
                $sql .= "where settings_office_is_active = '1' ";
                $sql .= "and settings_office_name like :settings_office_name ";
                $sql .= "order by settings_office_is_active desc, ";
                $sql .= "settings_office_name asc ";
                $query = $this->connection->prepare($sql);
                $query->execute([
                    "settings_office_name" => "%{$this->staff_search}%",
                ]);
            } catch (PDOException $ex) {
                $query = false;
            }
            return $query;
        }

       // search
       public function departmentSearch()
       {
           try {
               $sql = "select ";
               $sql .= "settings_department_is_active, ";
               $sql .= "settings_department_aid, ";
               $sql .= "settings_department_name ";
               $sql .= "from {$this->tblSettingsDepartment} ";
               $sql .= "where settings_department_is_active = '1' ";
               $sql .= "and settings_department_name like :settings_department_name ";
               $sql .= "order by settings_department_is_active desc, ";
               $sql .= "settings_department_name asc ";
               $query = $this->connection->prepare($sql);
               $query->execute([
                   "settings_department_name" => "%{$this->staff_search}%",
               ]);
           } catch (PDOException $ex) {
               $query = false;
           }
           return $query;
       }
}
