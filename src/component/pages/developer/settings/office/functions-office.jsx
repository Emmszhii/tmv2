export const getOfficeCountRecord = (office) => {
  let active = 0;
  let inactive = 0;

  const resultActive = office?.data.filter(
    (acItem) => acItem.settings_office_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = office?.data.filter(
    (inacItem) => inacItem.settings_office_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
