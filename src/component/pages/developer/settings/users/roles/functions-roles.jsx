export const getRolesCountRecord = (roles) => {
  let active = 0;
  let inactive = 0;

  const resultActive = roles?.data.filter(
    (acItem) => acItem.settings_roles_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = roles?.data.filter(
    (inacItem) => inacItem.settings_roles_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
