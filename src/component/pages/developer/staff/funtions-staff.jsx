import { consoleLog } from "../../../helpers/functions-general";
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

export const getDepartmentName = (data, id) => {
  let name = "";

  if (data?.count > 0) {
    data?.data.filter((item) => {
      if (item.settings_department_aid === Number(id)) {
        name = `${item.settings_department_name}`;
      }
    });
  }

  return name;
};

export const getOfficeName = (data, id) => {
  let name = "";

  if (data?.count > 0) {
    data?.data.filter((item) => {
      if (item.settings_office_aid === Number(id)) {
        name = `${item.settings_office_name}`;
      }
    });
  }

  return name;
};

export const getNameDepartment = (data, id) => {
  let name = "";
  const result = data?.data.filter(
    (item) => item.settings_department_aid === Number(id)
  );
  name = result?.length > 0 ? result[0].settings_department_name : "";

  return name;
};

export const getNameOffice = (data, id) => {
  let name = "";
  const result = data?.data.filter(
    (item) => item.settings_office_aid === Number(id)
  );
  name = result?.length > 0 ? result[0].settings_office_name : "";

  return name;
};
