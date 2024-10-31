import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="h-screen bg-gray-800 text-white p-6">
      <h1 className="text-center text-4xl">Time Until</h1>
      <div className="mt-8 flex justify-center flex-col items-center border rounded-lg p-4 ">
        <h2 className="text-3xl">Noon</h2>
        <div className="flex mt-2">
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">HOURS</span>
          </div>
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">MINUTES</span>
          </div>
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">MINUTES</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center flex-col items-center border rounded-lg p-4 ">
        <h2 className="text-3xl">9PM</h2>
        <div className="flex mt-2">
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">HOURS</span>
          </div>
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">MINUTES</span>
          </div>
          <div className="flex flex-col items-center w-28">
            <span>3</span>
            <span className="font-bold">MINUTES</span>
          </div>
        </div>
      </div>
    </div>
  );
}
