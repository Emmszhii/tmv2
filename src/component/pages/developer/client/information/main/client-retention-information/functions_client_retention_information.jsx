export const getReferredBy = (data, id) => {
  let name = "";
  const result = data?.data.filter((item) => item._aid === Number(id));
  name = result?.length > 0 ? result[0].entities_id : "";

  return name;
};

export const getReferralType = (data, id) => {
  let name = "";
  console.log(data);
  const result = data?.data.filter(
    (item) => item.client_retention_referred_type_id === Number(id)
  );
  name = result?.length > 0 ? result[0].entities_id : "";

  return name;
};
