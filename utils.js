
export function randomlyPickValueFromObject(object) {
  const values = Object.values(object)
  return values[Math.floor(Math.random() * values.length)]
}

export function randomlyPickValueFromArray(array) {
  const randomPosition = Math.floor(Math.random() * array.length);
  return array[randomPosition];
}