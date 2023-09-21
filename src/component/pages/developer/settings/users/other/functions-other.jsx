export const getOtherCountRecord = (other) => {
    let active = 0;
    let inactive = 0;
  
    const resultActive = other?.data.filter(
      (acItem) => acItem.settings_other_is_active === 1
    );
    active = resultActive?.length;
  
    const resultInactive = other?.data.filter(
      (inacItem) => inacItem.settings_other_is_active === 0
    );
    inactive = resultInactive?.length;
  
    return { active, inactive };
  };
  