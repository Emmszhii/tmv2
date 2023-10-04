<?php
class Form1099
{
    public $zipcode_aid;
    public $zipcode_state_name;
    public $zipcode_zip; 
    public $zipcode_city;
    public $zipcode_state_id;
    public $zipcode_physical_delivery;
    public $zipcode_locale_name;
    public $zipcode_physical_zip;
    public $zipcode_physical_zip_4;

    public $employee_aid;

    public $zipcode_start;
    public $zipcode_total;
    public $zipcode_search;

    public $connection;
    public $lastInsertedId;
    public $tblForm1099;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblForm1099 = "tmv1_zipcode_list";
    }


    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblForm1099} ";
            $sql .= "order by zipcode_state_name asc, ";
            $sql .= "zipcode_zip desc ";
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
            $sql .= "from {$this->tblForm1099} ";
            $sql .= "order by zipcode_state_name asc, ";
            $sql .= "zipcode_zip desc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->zipcode_start - 1,
                "total" => $this->zipcode_total,
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
            $sql .= "from {$this->tblForm1099} ";
            $sql .= "where (zipcode_state_name like :search ";  
            $sql .= "or zipcode_zip like :zip ";  
            $sql .= "or zipcode_city like :city ";  
            $sql .= "or zipcode_locale_name like :locale_name) ";  
            $sql .= "order by zipcode_state_name asc, ";
            $sql .= "zipcode_zip desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->zipcode_search}%",  
                "zip" => "%{$this->zipcode_search}%",  
                "city" => "%{$this->zipcode_search}%",  
                "locale_name" => "%{$this->zipcode_search}%",  
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
            $sql = "select * from {$this->tblForm1099} ";
            $sql .= "where zipcode_aid = :zipcode_aid ";
            $sql .= "order by zipcode_state_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "zipcode_aid" => $this->zipcode_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
