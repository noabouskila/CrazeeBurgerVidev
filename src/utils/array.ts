export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = <T extends { id: string }>(
  array: T[],
  id: string
): T | undefined => array.find((item) => item.id === id);
