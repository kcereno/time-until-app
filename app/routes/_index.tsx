import type { MetaFunction } from '@remix-run/node';
import Countdown from '~/components/Countdown';
import { timeUntilNextOccurrence } from '~/utils/time';

export const meta: MetaFunction = () => {
  return [
    { title: 'Time Until App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const timeUntilFollowingNoon = timeUntilNextOccurrence('12:00');
  const timeUntilFollowingNinePM = timeUntilNextOccurrence('21:00');

  return (
    <div className="h-screen bg-gray-800 text-white p-6">
      <h1 className="text-center text-4xl">Time Until</h1>

      <Countdown
        deadline="noon"
        hours={timeUntilFollowingNoon.hours}
        minutes={timeUntilFollowingNoon.minutes}
      />
      <Countdown
        deadline="9PM"
        hours={timeUntilFollowingNinePM.hours}
        minutes={timeUntilFollowingNinePM.minutes}
      />
    </div>
  );
}
