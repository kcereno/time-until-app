import type { MetaFunction } from '@remix-run/node';
import Countdown from '~/components/Countdown';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  function timeUntilNextOccurrence(targetTime: string): {
    hours: number;
    minutes: number;
    seconds: number;
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
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

    // Step 7: Return the result
    return { hours, minutes, seconds };
  }

  const timeUntilFollowingNoon = timeUntilNextOccurrence('12:00');
  const timeUntilFollowingNinePM = timeUntilNextOccurrence('21:00');

  return (
    <div className="h-screen bg-gray-800 text-white p-6">
      <h1 className="text-center text-4xl">Time Until</h1>

      <Countdown
        deadline="noon"
        hours={timeUntilFollowingNoon.hours}
        minutes={timeUntilFollowingNoon.minutes}
        seconds={timeUntilFollowingNoon.seconds}
      />
      <Countdown
        deadline="9PM"
        hours={timeUntilFollowingNinePM.hours}
        minutes={timeUntilFollowingNinePM.minutes}
        seconds={timeUntilFollowingNinePM.seconds}
      />
    </div>
  );
}
