import React, { useState } from "react";
const useModal = () => {
  const [openedModals, setModals] = useState({});
  const toggleModal = id => {
    if (openedModals[id] === undefined) setModals({
      ...openedModals,
      [id]: true
    });else setModals({
      ...openedModals,
      [id]: !openedModals[id]
    });
  };
  return {
    openedModals,
    toggleModal
  };
};
export default useModal;