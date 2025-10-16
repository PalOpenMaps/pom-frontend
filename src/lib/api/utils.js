export function parseProp(prop) {
  // Single/null values in array
  if (Array.isArray(prop) && prop.length <= 1) return !prop[0].value ? null : prop[0].value;
  // Multi-references items in array
  if (Array.isArray(prop)) return prop.map(item => item.value);
  // Single value dropdowns
  if (prop?.value) return prop.value;
  // Standard items (including parsing of numbers)
  return [null, ""].includes(prop) ? null : prop;
}

export function parseNumericProp(prop) {
  return prop === null ? null : +prop;
}