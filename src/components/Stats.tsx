import React from "react";
import StatItem from "./StatItem";

type StatsProps = {
  stats: {
    stat: string;
    value: number;
    shortStat: string;
    statGrade: string
  }[];
};

const Stats: React.FC<StatsProps> = ({ stats }) => {

  return (
    <div className="flex flex-col  w-full h-full justify-between px-4 py-12 ">
        {stats.map((s) => <StatItem key={s.shortStat} stats={s} />)}
    </div>
  );
};

export default Stats;