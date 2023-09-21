export const getRatesCountRecord = (rates) => {
    let active = 0;
    let inactive = 0;
  
    const resultActive = rates?.data.filter(
      (acItem) => acItem.settings_rates_is_active === 1
    );
    active = resultActive?.length;
  
    const resultInactive = rates?.data.filter(
      (inacItem) => inacItem.settings_rates_is_active === 0
    );
    inactive = resultInactive?.length;
  
    return { active, inactive };
  };
  