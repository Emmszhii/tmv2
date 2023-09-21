export const getCategoryCountRecord = (category) => {
  let active = 0;
  let inactive = 0;

  const resultActive = category?.data.filter(
    (acItem) => acItem.engagement_category_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = category?.data.filter(
    (inacItem) => inacItem.engagement_category_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
