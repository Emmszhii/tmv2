export const getReferralTypeCountRecord = (referralType) => {
  let active = 0;
  let inactive = 0;

  const resultActive = referralType?.data.filter(
    (acItem) => acItem.referral_type_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = referralType?.data.filter(
    (inacItem) => inacItem.referral_type_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
