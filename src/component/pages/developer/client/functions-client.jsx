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
