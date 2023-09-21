export const getSpecialCharacterCountRecord = (specialCharacter) => {
  let active = 0;
  let inactive = 0;

  const resultActive = specialCharacter?.data.filter(
    (acItem) => acItem.special_character_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = specialCharacter?.data.filter(
    (inacItem) => inacItem.special_character_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};
