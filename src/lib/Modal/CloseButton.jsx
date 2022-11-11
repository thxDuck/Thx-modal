import React from "react";


const CloseButton = (props) => {
	const close = () => props.close();
	const style = {
		background: "unset",
		cursor: "pointer",
		fontWeight: "600",
		height: "fit-content",
		color: props.textColor
	};
	const btnStyle = {
		border: `1px solid ${props.textColor}`,
		borderRadius: "10px",
		padding: "0.4rem 1rem",
		color: props.textColor
	};
	const text = props.text || "Close";
	return !props.children ? (
		<button
			type="button"
			onClick={close}
			style={{ ...style, ...btnStyle }}
			title="Close this modal">
			{text}
		</button>
	) : (
		<div onClick={close} style={style}>
			{props.children}
		</div>
	);
};

export default CloseButton;
