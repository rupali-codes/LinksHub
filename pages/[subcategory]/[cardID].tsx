import { useRouter } from "next/router";
import React from "react";
import useFilterDB from "hooks/useFilterDB";
const SingleCard = () => {
  const router = useRouter();
  const { cardID } = router.query;
  const { filterDB } = useFilterDB();
  const card = filterDB[0].find((item) => cardID === item.id);
  return (
    <div className="text-white text-2xl py-20">
      <p>name: {card?.name}</p>
      <p>category: {card?.category}</p>
      <p>description: {card?.description}</p>
      <p>card ID: {card?.id}</p>
    </div>
  );
};

export default SingleCard;
