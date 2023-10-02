export const getReferredBy = (data, id) => {
    let name = "";
    const result = data?.data.filter((item) => item._aid === Number(id));
    name = result?.length > 0 ? result[0].entities_id : "";
  
    return name;
  };