export const getStaffCountRecord = (staff) => {
  let active = 0;
  let inactive = 0;

  const resultActive = staff?.data.filter(
    (acItem) => acItem.staff_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = staff?.data.filter(
    (inacItem) => inacItem.staff_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
