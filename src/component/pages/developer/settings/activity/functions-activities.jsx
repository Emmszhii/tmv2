export const getActivityCountRecord = (activity) => {
    let active = 0;
    let inactive = 0;
  
    const resultActive = activity?.data.filter(
      (acItem) => acItem.settings_activity_is_active === 1
    );
    active = resultActive?.length;
  
    const resultInactive = activity?.data.filter(
      (inacItem) => inacItem.settings_activity_is_active === 0
    );
    inactive = resultInactive?.length;
  
    return { active, inactive };
  };
  