export const validatePickerGenre = [
  {label: 'Selecionar', value: 0, key: 0},
  {label: 'Macho', value: 1, key: 1},
  {label: 'Fêmea', value: 2, key: 2},
]

export const maskDate = (value: any) => {
  const v = value?.replace(/\D/g, '').slice(0, 8);
  if (v?.length >= 5) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  }
  if (v?.length >= 3) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }

  return v;
};