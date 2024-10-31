type CountdownProps = {
  deadline: string;
  hours: number;
  minutes: number;
  seconds: number;
};

function Countdown({ deadline, hours, minutes, seconds }: CountdownProps) {
  return (
    <div className="mt-8 flex justify-center flex-col items-center border rounded-lg p-4 ">
      <h2 className="text-3xl uppercase">{deadline}</h2>
      <div className="flex mt-2">
        <div className="flex flex-col items-center w-28">
          <span>{hours}</span>
          <span className="font-bold">HOURS</span>
        </div>
        <div className="flex flex-col items-center w-28">
          <span>{minutes}</span>
          <span className="font-bold">MINUTES</span>
        </div>
        <div className="flex flex-col items-center w-28">
          <span>{seconds}</span>
          <span className="font-bold">SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
