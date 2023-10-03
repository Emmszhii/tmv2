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
    public $primary_contact_created_at;
    public $primary_contact_updated_at;

    public $employee_aid;

    public $client_start;
    public $client_total;
    public $client_search;

    public $connection;
    public $lastInsertedId;
    public $tblClient;
    public $tblEntities;
    public $tblStaff;
    public $tblPrimaryContact;
    public $tblPreferredContact;
    public $tblBillingContact;
    public $tblCustomeField;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblClient = "tmv2_client";
        $this->tblEntities = "tmv2_entities";
        $this->tblStaff = "tmv2_staff";
        $this->tblPrimaryContact = "tmv2_primary_contact";
        $this->tblPreferredContact = "tmv2_preferred_contact";
        $this->tblBillingContact = "tmv2_billing_contact";
        $this->tblCustomeField = "tmv2_custom_field";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblClient} ";
            $sql .= "( primary_contact_name, ";
            $sql .= "primary_contact_title, ";
            $sql .= "primary_contact_company, ";
            $sql .= "primary_contact_file_as, ";
            $sql .= "primary_contact_business_number, ";
            $sql .= "primary_contact_home_number, ";
            $sql .= "primary_contact_address, ";
            $sql .= "primary_contact_created_at, ";
            $sql .= "primary_contact_updated_at ) values ( ";
            $sql .= ":primary_contact_name, ";
            $sql .= ":primary_contact_title, ";
            $sql .= ":primary_contact_company, ";
            $sql .= ":primary_contact_file_as, ";
            $sql .= ":primary_contact_business_number, ";
            $sql .= ":primary_contact_home_number, ";
            $sql .= ":primary_contact_address, ";
            $sql .= ":primary_contact_created_at, ";
            $sql .= ":primary_contact_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_name" => $this->primary_contact_name,
                "primary_contact_title" => $this->primary_contact_title,
                "primary_contact_company" => $this->primary_contact_company,
                "primary_contact_file_as" => $this->primary_contact_file_as,
                "primary_contact_business_number" => $this->primary_contact_business_number,
                "primary_contact_home_number" => $this->primary_contact_home_number,
                "primary_contact_address" => $this->primary_contact_address,
                "primary_contact_created_at" => $this->primary_contact_created_at,
                "primary_contact_updated_at" => $this->primary_contact_updated_at,
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
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "primary_contact_name asc ";
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
            $sql .= "from {$this->tblClient} ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "primary_contact_name asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->client_start - 1,
                "total" => $this->client_total,
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
            $sql .= "from {$this->tblClient} ";
            $sql .= "where primary_contact_name like :search ";
            $sql .= "order by client_is_active desc, ";
            $sql .= "primary_contact_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "search" => "%{$this->client_search}%",
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
            $sql = "select * from {$this->tblClient} ";
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
            $sql = "update {$this->tblClient} set ";
            $sql .= "primary_contact_name = :primary_contact_name, ";
            $sql .= "primary_contact_title = :primary_contact_title, ";
            $sql .= "primary_contact_company = :primary_contact_company, ";
            $sql .= "primary_contact_file_as = :primary_contact_file_as, ";
            $sql .= "primary_contact_business_number = :primary_contact_business_number, ";
            $sql .= "primary_contact_home_number = :primary_contact_home_number, ";
            $sql .= "primary_contact_address = :primary_contact_address, ";
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
                "primary_contact_updated_at" => $this->primary_contact_updated_at,
                "primary_contact_client_id" => $this->primary_contact_client_id,
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
            $sql = "delete from {$this->tblClient} ";
            $sql .= "where primary_contact_client_id = :primary_contact_client_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_client_id" => $this->primary_contact_client_id,
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
            $sql = "select primary_contact_name from {$this->tblClient} ";
            $sql .= "where primary_contact_name = :primary_contact_name ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_name" => "{$this->primary_contact_name}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search Entities in add modal client of tbl Entities
    public function searchEntities()
    {
        try {
            $sql = "select ";
            $sql .= "entities_is_active, ";
            $sql .= "entities_aid as id, ";
            $sql .= "entities_id as name ";
            $sql .= "from {$this->tblEntities} ";
            $sql .= "where entities_is_active = '1' ";
            $sql .= "and entities_id like :entities_search_id ";
            $sql .= "order by entities_is_active desc, ";
            $sql .= "entities_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "entities_search_id" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // search Partner in add modal client of tbl Staff
    public function searchPartner()
    {
        try {
            $sql = "select ";
            $sql .= "staff_is_active, ";
            $sql .= "staff_aid as id, ";
            $sql .= "staff_id as name ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where staff_is_active = '1' ";
            $sql .= "and staff_id like :staff_search_id ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_search_id" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // search Staff in add modal client of tbl Staff
    public function searchStaff()
    {
        try {
            $sql = "select ";
            $sql .= "staff_is_active, ";
            $sql .= "staff_aid as id, ";
            $sql .= "staff_id as name ";
            $sql .= "from {$this->tblStaff} ";
            $sql .= "where staff_is_active = '1' ";
            $sql .= "and staff_id like :staff_search_id ";
            $sql .= "order by staff_is_active desc, ";
            $sql .= "staff_id asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "staff_search_id" => "%{$this->client_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // create Contact Primary
    public function createContactPrimary()
    {
        try {
            $sql = "insert into {$this->tblPrimaryContact} ";
            $sql .= "( primary_contact_client_id, ";
            $sql .= "primary_contact_created_at, ";
            $sql .= "primary_contact_updated_at ) values ( ";
            $sql .= ":primary_contact_client_id, ";
            $sql .= ":primary_contact_created_at, ";
            $sql .= ":primary_contact_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "primary_contact_client_id" => $this->lastInsertedId,
                "primary_contact_created_at" => $this->primary_contact_created_at,
                "primary_contact_updated_at" => $this->primary_contact_updated_at,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // create Contact Preferred
    public function createContactPreferred()
    {
        try {
            $sql = "insert into {$this->tblPreferredContact} ";
            $sql .= "( preferred_contact_client_id, ";
            $sql .= "preferred_contact_created_at, ";
            $sql .= "preferred_contact_updated_at ) values ( ";
            $sql .= ":preferred_contact_client_id, ";
            $sql .= ":preferred_contact_created_at, ";
            $sql .= ":preferred_contact_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "preferred_contact_client_id" => $this->lastInsertedId,
                "preferred_contact_created_at" => $this->primary_contact_created_at,
                "preferred_contact_updated_at" => $this->primary_contact_updated_at,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // create Contact Billing
    public function createContactBilling()
    {
        try {
            $sql = "insert into {$this->tblBillingContact} ";
            $sql .= "( billing_contact_client_id, ";
            $sql .= "billing_contact_created_at, ";
            $sql .= "billing_contact_updated_at ) values ( ";
            $sql .= ":billing_contact_client_id, ";
            $sql .= ":billing_contact_created_at, ";
            $sql .= ":billing_contact_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "billing_contact_client_id" => $this->lastInsertedId,
                "billing_contact_created_at" => $this->primary_contact_created_at,
                "billing_contact_updated_at" => $this->primary_contact_updated_at,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
    // create custom field
    public function createContactCustomeField()
    {
        try {
            $sql = "insert into {$this->tblCustomeField} ";
            $sql .= "( custom_field_client_id, ";
            $sql .= "custom_field_created_at, ";
            $sql .= "custom_field_updated_at ) values ( ";
            $sql .= ":custom_field_client_id, ";
            $sql .= ":custom_field_created_at, ";
            $sql .= ":custom_field_updated_at ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "custom_field_client_id" => $this->lastInsertedId,
                "custom_field_created_at" => $this->primary_contact_created_at,
                "custom_field_updated_at" => $this->primary_contact_updated_at,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
