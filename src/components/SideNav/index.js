import React, { useContext, useState } from "react";
import { MenuCard } from "../Card";
import { RecipeeContext } from "../../providers/main.provider";
import { datas } from "../../datas/recipee";

const SideNav = () => {
  const { setIdRecipee } = useContext(RecipeeContext);

  const [recipees, setRecipees] = useState(datas);

  return (
    <aside className="w-1/3 m-8">
      <h2 className="text-center text-2xl font-bold m-4">Menu</h2>
      <div className="flex flex-col">
        {recipees.map((recipee) => {
          return (
            <MenuCard
              key={recipee._id}
              text={recipee.label}
              clickHandler={() => {
                setIdRecipee(recipee._id);
              }}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default SideNav;
