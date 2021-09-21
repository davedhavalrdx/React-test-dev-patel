export const Flag = (data) => {
  return {
    type: "Flag",
    payload: data,
  };
};

export const Filter = (data) => {
  return {
    type: "Filter",
    payload: data,
  };
};

export const Delete = (id) => {
  return {
    type: "Delete",
    payload: id,
  };
};

export const Read = (data) => {
  return {
    type: "Read",
    payload: data,
  };
};
