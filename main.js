export function doFreeBuzz(numberStart, numberEnd) {
  const result = [];
  if (
    numberStart >= numberEnd ||
    numberStart < 0 ||
    typeof numberStart === "string" ||
    typeof numberEnd === "string"
  )
    return null;
  if (numberStart === 0) return result;

  for (let i = numberStart; i <= numberEnd; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    }

    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }

    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }

    result.push(i);
  }

  return result;
}
