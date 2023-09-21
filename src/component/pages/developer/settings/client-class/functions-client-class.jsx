export const getClientClassCountRecord = (clientClass) => {
  let active = 0;
  let inactive = 0;

  const resultActive = clientClass?.data.filter(
    (acItem) => acItem.client_class_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = clientClass?.data.filter(
    (inacItem) => inacItem.client_class_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
