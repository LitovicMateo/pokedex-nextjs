import React from "react";

type PokemonStatItemProps = {
  stats: {
    stat: string;
    value: number;
    shortStat: string;
    statGrade: string;
  };
};


const PokemonStatItem: React.FC<PokemonStatItemProps> = ({stats}) => {


  return (
    <div className="flex gap-2 items-center">
      <span className="w-[20%] font-semibold">{stats.shortStat}</span>
      <div className="w-full bg-gray-800 p-1 h-[18px] rounded-full">
        <div
          style={{
            width: stats.statGrade,
          }}
          className={` bg-yellow-500 h-full rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default PokemonStatItem;