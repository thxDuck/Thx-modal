import React, { useState } from "react";

const useModal = () => {
	const [openedModals, setModals] = useState({});
	const toggleModal = (id) => {
		setModals({ ...openedModals, [id]: !openedModals[id] });
	};
	return { openedModals, toggleModal };
};

export default useModal;
