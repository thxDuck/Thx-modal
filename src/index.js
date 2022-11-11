/**
 * ! WARNING, THIS FILE IS FOR TESTING !
 */

import React from "react";
import ReactDOM from "react-dom/client";

import Modal, { useModal } from "./lib/Modal/Modal";
export { useModal };
export default Modal;

const title_small = "Look my modal";
const content_small = "Hey, this is a modal !";
const getLongContent = () => {
	return (
		<form>
			<fieldset style={{ display: "flex", flexDirection: "column" }}>
				<legend>The cake is a lie ! It's a trap !</legend>
				<p>
					<label htmlFor="username" style={{ marginRight: "1rem" }}>
						UserName
					</label>
					<input type="text" id="username" placeholder="..." />
				</p>

				<p>
					<label htmlFor="pwd" style={{ marginRight: "1rem" }}>
						Password
					</label>
					<input type="password" id="pwd" placeholder="..." />
				</p>
			</fieldset>
		</form>
	);
};

const App = () => {
	const { openedModals, toggleModal } = useModal();
	const getAsyncContent = async () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve("Content resolved !");
			}, 1000);
		});
	};

	return (
		<main style={{ width: "100vw", height: "100vh" }}>
			<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
				<button onClick={() => toggleModal("minimal")}>Minimal modal</button>
				<button onClick={() => toggleModal("multiple-1")}>multiple-1</button>
				<button onClick={() => toggleModal("multiple-2")}>multiple-2</button>
				<button onClick={() => toggleModal("multiple-3")}>multiple-3</button>
				<button onClick={() => toggleModal("red-modal")}>Red modal</button>
				<button onClick={() => toggleModal("blue-modal")}>Blue modal</button>
				<button onClick={() => toggleModal("gray-modal")}>Gray modal</button>
				<button onClick={() => toggleModal("async-modal")}>Async content in modal</button>
				<button onClick={() => toggleModal("styled-modal")}>Ultra styled modal</button>
			</div>
			{/* Minimal modal */}
			<Modal
				id={"minimal"}
				isOpen={openedModals["minimal"]}
				onClose={toggleModal}
				content={content_small}
			/>
			{/* Red modal */}
			<Modal
				id={"red-modal"}
				isOpen={openedModals["red-modal"]}
				onClose={toggleModal}
				content={content_small}
				title={title_small}
				theme="#ff4747"
			/>
			{/* Blue modal */}
			<Modal
				id={"blue-modal"}
				isOpen={openedModals["blue-modal"]}
				onClose={toggleModal}
				content={content_small}
				title={title_small}
				theme="#0000FF"
			/>
			{/* gray modal */}
			<Modal
				id={"gray-modal"}
				isOpen={openedModals["gray-modal"]}
				onClose={toggleModal}
				content={content_small}
				title={title_small}
				theme="#888888"
			/>
			{/* AsyncContent */}
			<Modal
				id={"async-modal"}
				isOpen={openedModals["async-modal"]}
				onClose={toggleModal}
				content={"Loading ..."}
				asyncContent={() => getAsyncContent()}
				title={title_small}
				theme="#888888"
			/>
			{/* AsyncContent */}
			<Modal
				id={"styled-modal"}
				isOpen={openedModals["styled-modal"]}
				onClose={toggleModal}
				exitOnClick={false}
				exitOnEscape={false}
				closeBtn={false}
				header={<h1>My maxi styled modal !</h1>}
				content={getLongContent()}
				footer={
					<button onClick={() => toggleModal("styled-modal")}>
						There is only way to close modal
					</button>
				}
				modalStyle={{
					color: "#FFF",
					backgroundColor: "#222",
					border: "2px solid white",
					minHeight: "500px",
					display: "flex",
					flexDirection: "column",
				}}
				headerStyle={{
					fontSize: "1.5rem",
					paddingTop: "0",
					lineHeight: "0",
					color: "#FFF",
				}}
				contentStyle={{
					flex: "1",
				}}
				footerStyle={{
					display: "flex",
					flexDirection: "row-reverse",
				}}
			/>
			{/* Multiple modals */}
			<Modal
				id={"multiple-1"}
				isOpen={openedModals["multiple-1"]}
				index={1}
				height={"300px"}
				onClose={toggleModal}
				backgroundStyle={false}
				modalSize="xl"
				title="Muliple modal 1"
				content={"Modal number 1"}
			/>
			<Modal
				id={"multiple-2"}
				isOpen={openedModals["multiple-2"]}
				index={2}
				height={"250px"}
				onClose={toggleModal}
				backgroundStyle={false}
				modalSize="md"
				title="Muliple modal 2"
				content={"Modal number 2"}
			/>
			<Modal
				id={"multiple-3"}
				isOpen={openedModals["multiple-3"]}
				index={3}
				height={"150px"}

				onClose={toggleModal}
				backgroundStyle={false}
				modalSize="sm"
				title="Muliple modal 3"
				content={"Modal number 3"}
			/>
		</main>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
