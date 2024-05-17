import React from "react";

type MovesProps = {
  moves: {
    name: string;
    accuracy: string;
    powerPoints: number;
    power: number;
    damage_class: {
      name: string;
    };
    type: {
      name: string;
    };
  }[];
};

const Moves: React.FC<MovesProps> = ({ moves }) => {
  return (
    <div className="h-full w-full p-2">
      <ul className="p-4 flex flex-col gap-2">
        {moves.map((i) => (
          <li className="truncate py-1 border-b-2 border-solid border-black flex justify-between items-center">
            <span>{i.name.toUpperCase()}</span>
            <span>{i.power || "-"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Moves;
