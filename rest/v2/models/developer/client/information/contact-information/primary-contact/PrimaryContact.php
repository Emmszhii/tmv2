<?php
class PrimaryContact
{
    public $primary_contact_client_id;
    public $primary_contact_name;
    public $primary_contact_title;
    public $primary_contact_company;
    public $primary_contact_file_as;
    public $primary_contact_business_number;
    public $primary_contact_home_number;
    public $primary_contact_address;
    public $primary_contact_country;
    public $primary_contact_zip;
    public $primary_contact_email;
    public $primary_contact_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblPrimaryContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPrimaryContact = "tmv2_primary_contact";
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPrimaryContact} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "primary_contact_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblPrimaryContact} ";
            $sql .= "where primary_contact_client_id = :primary_contact_client_id ";
            $sql .= "order by primary_contact_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_client_id" => $this->primary_contact_client_id,
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
            $sql = "update {$this->tblPrimaryContact} set ";
            $sql .= "primary_contact_name = :primary_contact_name, ";
            $sql .= "primary_contact_title = :primary_contact_title, ";
            $sql .= "primary_contact_company = :primary_contact_company, ";
            $sql .= "primary_contact_file_as = :primary_contact_file_as, ";
            $sql .= "primary_contact_business_number = :primary_contact_business_number, ";
            $sql .= "primary_contact_home_number = :primary_contact_home_number, ";
            $sql .= "primary_contact_address = :primary_contact_address, ";
            $sql .= "primary_contact_country = :primary_contact_country, ";
            $sql .= "primary_contact_zip = :primary_contact_zip, ";
            $sql .= "primary_contact_email = :primary_contact_email, ";
            $sql .= "primary_contact_updated_at = :primary_contact_updated_at ";
            $sql .= "where primary_contact_client_id = :primary_contact_client_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_name" => $this->primary_contact_name,
                "primary_contact_title" => $this->primary_contact_title,
                "primary_contact_company" => $this->primary_contact_company,
                "primary_contact_file_as" => $this->primary_contact_file_as,
                "primary_contact_business_number" => $this->primary_contact_business_number,
                "primary_contact_home_number" => $this->primary_contact_home_number,
                "primary_contact_address" => $this->primary_contact_address,
                "primary_contact_country" => $this->primary_contact_country,
                "primary_contact_zip" => $this->primary_contact_zip,
                "primary_contact_email" => $this->primary_contact_email,
                "primary_contact_updated_at" => $this->primary_contact_updated_at,
                "primary_contact_client_id" => $this->primary_contact_client_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
