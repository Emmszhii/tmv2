export const getLostToRecordCount = (lostTo) => {
  let active = 0;
  let inactive = 0;

  const resultActive = lostTo?.data.filter(
    (acItem) => acItem.lost_to_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = lostTo?.data.filter(
    (inacItem) => inacItem.lost_to_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
