export const getReferralSourceCountRecord = (referralSource) => {
  let active = 0;
  let inactive = 0;

  const resultActive = referralSource?.data.filter(
    (acItem) => acItem.referral_source_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = referralSource?.data.filter(
    (inacItem) => inacItem.referral_source_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
