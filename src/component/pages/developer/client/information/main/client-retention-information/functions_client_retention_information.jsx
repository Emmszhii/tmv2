export const getReferredBy = (data, id) => {
  let name = "";
  const result = data?.data.filter((item) => item._aid === Number(id));
  name = result?.length > 0 ? result[0].entities_id : "";

  return name;
};
// get Referral type name
export const getReferralType = (data, id) => {
  let name = "";
  const result = data?.data.filter(
    (item) => item.referral_type_aid === Number(id)
  );
  name = result?.length > 0 ? result[0].referral_type_name : "";

  return name;
};
// get won reason description
export const getWonReason = (data, id) => {
  let name = "";
  const result = data?.data.filter(
    (item) => item.won_reason_aid === Number(id)
  );
  name = result?.length > 0 ? result[0].won_reason_description : "";

  return name;
};
// get lost to description
export const getLostTo = (data, id) => {
  let name = "";
  const result = data?.data.filter((item) => item.lost_to_aid === Number(id));
  name = result?.length > 0 ? result[0].lost_to_description : "";

  return name;
};
// get lost reason description
export const getLostReason = (data, id) => {
  let name = "";
  const result = data?.data.filter(
    (item) => item.lost_reason_aid === Number(id)
  );
  name = result?.length > 0 ? result[0].lost_reason_description : "";

  return name;
};
