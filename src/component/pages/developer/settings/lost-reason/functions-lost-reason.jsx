export const getLostReasonCountRecord = (lostReason) => {
  let active = 0;
  let inactive = 0;

  const resultActive = lostReason?.data.filter(
    (acItem) => acItem.lost_reason_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = lostReason?.data.filter(
    (inacItem) => inacItem.lost_reason_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
