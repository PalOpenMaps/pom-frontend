export function parseProp(prop) {
  // References to items in other tables
  if (Array.isArray(prop) && prop[0].order) return prop.map(item => +item.order.split(".")[0] - 1);
  // Formula values in array
  if (Array.isArray(prop)) return !prop[0].value ? null : prop[0].value;
  // Single value dropdowns
  else if (prop?.value) return prop.value;
  // Standard items (including parsing of numbers)
  else return [null, ""].includes(prop) ? null : prop;
}

export function parseNumericProp(prop) {
  return prop === null ? null : +prop;
}