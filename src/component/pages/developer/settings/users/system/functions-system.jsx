export const getSystemCountRecord = (system) => {
  let active = 0;
  let inactive = 0;

  const resultActive = system?.data.filter(
    (acItem) => acItem.settings_system_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = system?.data.filter(
    (inacItem) => inacItem.settings_system_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};

export const getRolesNameById = (object, id) => {
  return object.filter((item) => item.settings_system_aid === id);
};
