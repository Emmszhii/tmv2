export const getTemplateCountRecord = (template) => {
  let active = 0;
  let inactive = 0;

  const resultActive = template?.data.filter(
    (acItem) => acItem.engagement_template_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = template?.data.filter(
    (inacItem) => inacItem.engagement_template_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
