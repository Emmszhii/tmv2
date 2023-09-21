export const getWonReasonCountRecord = (wonReason) => {
  let active = 0;
  let inactive = 0;

  const resultActive = wonReason?.data.filter(
    (acItem) => acItem.won_reason_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = wonReason?.data.filter(
    (inacItem) => inacItem.won_reason_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
