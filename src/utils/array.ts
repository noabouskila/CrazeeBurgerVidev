export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array));
};

export const findObjectById = <T extends { id: string }>(
  array: T[],
  id: string
): T | undefined => array.find((item) => item.id === id);


export const findIndexById = <T extends { id: string }>(idWithUnknowwIndex: string, array: T[]): number => {
  return array.findIndex(
    (itemInArray) => itemInArray.id === idWithUnknowwIndex
  );
};

export const removeObjectById = <T extends { id: string }>(idOfItemToRemove: string, array: T[]): T[] => {
  return array.filter((item) => item.id !== idOfItemToRemove);
};

export const isEmpty = <T>(array: T[]): boolean => { 
  return array.length === 0;
};