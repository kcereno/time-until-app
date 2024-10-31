export function timeUntilNextOccurrence(targetTime: string): {
  hours: number;
  minutes: number;
} {
  // Step 1: Get the current date and time
  const now = new Date();

  // Step 2: Extract hours and minutes from the target time (formatted as "HH:mm")
  const [targetHour, targetMinute] = targetTime.split(':').map(Number);

  // Step 3: Create a Date object for the target time today
  const nextOccurrence = new Date(now);
  nextOccurrence.setHours(targetHour, targetMinute, 0, 0);

  // Step 4: If the target time today has already passed, set the target for the next day
  if (nextOccurrence <= now) {
    nextOccurrence.setDate(nextOccurrence.getDate() + 1);
  }

  // Step 5: Calculate the difference in milliseconds
  const diffInMs = nextOccurrence.getTime() - now.getTime();

  // Step 6: Convert milliseconds to hours, minutes, and seconds
  const hours = Math.floor(diffInMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  // Step 7: Return the result
  return { hours, minutes };
}
