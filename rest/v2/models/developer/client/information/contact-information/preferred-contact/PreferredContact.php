<?php
class PreferredContact
{
    public $preferred_contact_client_id;
    public $preferred_contact_name;
    public $preferred_contact_title;
    public $preferred_contact_company;
    public $preferred_contact_file_as;
    public $preferred_contact_business_number;
    public $preferred_contact_mobile_number;
    public $preferred_contact_home_number;
    public $preferred_contact_address;
    public $preferred_contact_country;
    public $preferred_contact_zip;
    public $preferred_contact_email;
    public $preferred_contact_updated_at;

    public $employee_aid;

    public $connection;
    public $lastInsertedId;
    public $tblPreferredContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblPreferredContact = "tmv2_preferred_contact";
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblPreferredContact} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "preferred_contact_name asc ";
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
            $sql = "select * from {$this->tblPreferredContact} ";
            $sql .= "where preferred_contact_client_id = :preferred_contact_client_id ";
            $sql .= "order by preferred_contact_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "preferred_contact_client_id" => $this->preferred_contact_client_id,
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
            $sql = "update {$this->tblPreferredContact} set ";
            $sql .= "preferred_contact_name = :preferred_contact_name, ";
            $sql .= "preferred_contact_title = :preferred_contact_title, ";
            $sql .= "preferred_contact_company = :preferred_contact_company, ";
            $sql .= "preferred_contact_file_as = :preferred_contact_file_as, ";
            $sql .= "preferred_contact_business_number = :preferred_contact_business_number, ";
            $sql .= "preferred_contact_mobile_number = :preferred_contact_mobile_number, ";
            $sql .= "preferred_contact_home_number = :preferred_contact_home_number, ";
            $sql .= "preferred_contact_address = :preferred_contact_address, ";
            $sql .= "preferred_contact_country = :preferred_contact_country, ";
            $sql .= "preferred_contact_zip = :preferred_contact_zip, ";
            $sql .= "preferred_contact_email = :preferred_contact_email, ";
            $sql .= "preferred_contact_updated_at = :preferred_contact_updated_at ";
            $sql .= "where preferred_contact_client_id = :preferred_contact_client_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "preferred_contact_name" => $this->preferred_contact_name,
                "preferred_contact_title" => $this->preferred_contact_title,
                "preferred_contact_company" => $this->preferred_contact_company,
                "preferred_contact_file_as" => $this->preferred_contact_file_as,
                "preferred_contact_business_number" => $this->preferred_contact_business_number,
                "preferred_contact_mobile_number" => $this->preferred_contact_mobile_number,
                "preferred_contact_home_number" => $this->preferred_contact_home_number,
                "preferred_contact_address" => $this->preferred_contact_address,
                "preferred_contact_country" => $this->preferred_contact_country,
                "preferred_contact_zip" => $this->preferred_contact_zip,
                "preferred_contact_email" => $this->preferred_contact_email,
                "preferred_contact_updated_at" => $this->preferred_contact_updated_at,
                "preferred_contact_client_id" => $this->preferred_contact_client_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
