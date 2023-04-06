import React from "react";

const useAutoCapitalize = (data: string) => {
  const username = data && data.charAt(0).toUpperCase() + data.slice(1);
  return username;
};

export default useAutoCapitalize;
