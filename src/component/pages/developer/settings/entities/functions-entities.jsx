export const getEntitiesCountRecord = (entities) => {
  let active = 0;
  let inactive = 0;

  const resultActive = entities?.data.filter(
    (acItem) => acItem.entities_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = entities?.data.filter(
    (inacItem) => inacItem.entities_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
