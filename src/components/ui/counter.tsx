import CountUp from "react-countup";

type PropsType = {
  number: number;
};

export const Counter = ({ number }: PropsType) => {
  return (
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:font-extrabold">
      <CountUp end={number} duration={2} delay={0} enableScrollSpy />+
    </h1>
  );
};
