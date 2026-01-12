export const checkIsProductSelected = (
  idProductInMenu: string,
  idProductClickedOn: string
): boolean => {
  return idProductInMenu === idProductClickedOn;
};
