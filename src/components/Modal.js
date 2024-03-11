// Modal.js

import React from "react";

const Modal = ({ isOpen, children }) => {
	if (!isOpen) return null;

	return (
		<div
			
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: "#1f1e1b",
					height: 120,
					width: 240,
					margin: "auto",
					padding: "2%",
					borderTop: "4px solid #a35709",
					boxShadow: "2px solid black",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
