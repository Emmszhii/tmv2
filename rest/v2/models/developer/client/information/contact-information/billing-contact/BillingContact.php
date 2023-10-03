<?php
class BillingContact
{
    public $billing_contact_client_id;
    public $billing_contact_name;
    public $billing_contact_title;
    public $billing_contact_company;
    public $billing_contact_file_as;
    public $billing_contact_business_number;
    public $billing_contact_mobile_number;
    public $billing_contact_home_number;
    public $billing_contact_address;
    public $billing_contact_country;
    public $billing_contact_zip;
    public $billing_contact_email;
    public $billing_contact_updated_at;

    public $employee_aid;


    public $connection;
    public $lastInsertedId;
    public $tblBillingContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblBillingContact = "tmv2_billing_contact";
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblBillingContact} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "billing_contact_name asc ";
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
            $sql = "select * from {$this->tblBillingContact} ";
            $sql .= "where billing_contact_client_id = :billing_contact_client_id ";
            $sql .= "order by billing_contact_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "billing_contact_client_id" => $this->billing_contact_client_id,
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
            $sql = "update {$this->tblBillingContact} set ";
            $sql .= "billing_contact_name = :billing_contact_name, ";
            $sql .= "billing_contact_title = :billing_contact_title, ";
            $sql .= "billing_contact_company = :billing_contact_company, ";
            $sql .= "billing_contact_file_as = :billing_contact_file_as, ";
            $sql .= "billing_contact_business_number = :billing_contact_business_number, ";
            $sql .= "billing_contact_mobile_number = :billing_contact_mobile_number, ";
            $sql .= "billing_contact_home_number = :billing_contact_home_number, ";
            $sql .= "billing_contact_address = :billing_contact_address, ";
            $sql .= "billing_contact_country = :billing_contact_country, ";
            $sql .= "billing_contact_zip = :billing_contact_zip, ";
            $sql .= "billing_contact_email = :billing_contact_email, ";
            $sql .= "billing_contact_updated_at = :billing_contact_updated_at ";
            $sql .= "where billing_contact_client_id = :billing_contact_client_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "billing_contact_name" => $this->billing_contact_name,
                "billing_contact_title" => $this->billing_contact_title,
                "billing_contact_company" => $this->billing_contact_company,
                "billing_contact_file_as" => $this->billing_contact_file_as,
                "billing_contact_business_number" => $this->billing_contact_business_number,
                "billing_contact_mobile_number" => $this->billing_contact_mobile_number,
                "billing_contact_home_number" => $this->billing_contact_home_number,
                "billing_contact_address" => $this->billing_contact_address,
                "billing_contact_country" => $this->billing_contact_country,
                "billing_contact_zip" => $this->billing_contact_zip,
                "billing_contact_email" => $this->billing_contact_email,
                "billing_contact_updated_at" => $this->billing_contact_updated_at,
                "billing_contact_client_id" => $this->billing_contact_client_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
