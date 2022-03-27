import React, { useContext, useState } from "react";
import { RecipeeContext } from "../../providers/main.provider";
import { RecipeeCard } from "../Card";
import { datas } from "../../datas/recipee";

const Main = () => {
  const { idRecipee } = useContext(RecipeeContext);
  const [recipees, setRecipees] = useState(datas);

  const currentRecipee = recipees.filter((recipee) => recipee._id == idRecipee);
  console.log(currentRecipee[0]);

  return (
    <div className="w-2/3 h-full">
      {currentRecipee && <RecipeeCard recipee={currentRecipee[0]} />}
      {console.log("Inside render")}
      {console.log(currentRecipee[0])}
    </div>
  );
};

export default Main;
