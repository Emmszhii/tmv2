export const getClientCountRecord = (client) => {
  let active = 0;
  let inactive = 0;

  const resultActive = client?.data.filter(
    (acItem) => acItem.client_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = client?.data.filter(
    (inacItem) => inacItem.client_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};

export const getStaffName = (data, id) => {
  let name = "";

  if (data?.count > 0) {
    data?.data.filter((item) => {
      if (item.staff_aid === Number(id)) {
        name = `${item.staff_first_name} ${item.staff_last_name}`;
      }
    });
  }

  return name;
};

export const getEntity = (data, id) => {
  let name = "";

  if (data?.count > 0) {
    data?.data.filter((item) => {
      if (item.entities_aid === Number(id)) {
        name = item.entities_id;
      }
    });
  }
  return name;
};
