export const readAllSystem = (item) => {
  const arr = [];
  item?.pages.map((item) => item.data.map((data) => arr.push(data)));
  return arr;
};

export const getSystemCountRecord = (system) => {
  let active = 0;
  let inactive = 0;

  const resultActive = system?.data.filter(
    (acItem) => acItem.setting_system_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = system?.data.filter(
    (inacItem) => inacItem.setting_system_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};

export const getStatusCountRecord = (item) => {
  //   const inactive = results.filter(
  //     (result) => result.settings_system_is_active === 0
  //   ).length;
  //   const active = results.filter(
  //     (result) => result.settings_system_is_active === 1
  //   ).length;
  const arr = [];
  item?.pages.map((item) => item.data.map((data) => arr.push(data)));
  const active = arr.filter(
    (item) => item.settings_system_is_active === 1
  ).length;
  const inactive = arr.filter(
    (item) => item.settings_system_is_active === 0
  ).length;
  return { active, inactive };
};
