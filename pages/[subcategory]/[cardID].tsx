import { useRouter } from "next/router";
import React from "react";
import useFilterDB from "hooks/useFilterDB";
const SingleCard = () => {
  const router = useRouter();
  const { cardID } = router.query;
  const { filterDB } = useFilterDB();
  const card = filterDB[0].find((item) => cardID === item.id);
  return (
    <div className="text-white text-2xl">
      <p>{card?.name}</p>
      <p>{card?.category}</p>
      <p>{card?.description}</p>
      <p>{card?.id}</p>
    </div>
  );
};

export default SingleCard;
