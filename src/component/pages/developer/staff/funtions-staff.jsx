import { queryData } from "../../../helpers/queryData";

export const getStaffCountRecord = (staff) => {
  let active = 0;
  let inactive = 0;

  const resultActive = staff?.data.filter(
    (acItem) => acItem.staff_is_active === 1
  );
  active = resultActive?.length;

  const resultInactive = staff?.data.filter(
    (inacItem) => inacItem.staff_is_active === 0
  );
  inactive = resultInactive?.length;

  return { active, inactive };
};

export const handleSearch = async (
  e,
  setSearch,
  setIsSearch,
  setLoading,
  endpoint,
  setData,
  value
) => {
  if (e.target.value.trim() === "") {
    setSearch("");
    setIsSearch(false);
    return;
  }
  setLoading(true);
  setIsSearch(true);
  setSearch(e.target.value);

  const data = await queryData(endpoint, "post", { search: value });

  if (typeof data === "undefined") {
    setLoading(true);
    console.log("undefined");
    return;
  }

  if (!data.success) {
    setLoading(true);
    setData([]);
    setIsSearch(false);
    return;
  }

  if (data.success) {
    setData(data.data);
    setLoading(false);
  }
};

export const handleClick = (name, id, setSearch, setIsSearch, setId) => {
  setSearch(name);
  setIsSearch(false);
  setId(id);
};
