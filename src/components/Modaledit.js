
import React from "react";

const Modaledit = ({ isOpen, children }) => {
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
                    background: "#1b1a17",
                    height: 500,
                    width: 400,
                    margin: "auto",
                    padding: "2%",
                    borderTop: "4px solid #000",
                    boxShadow: "2px solid black",

                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modaledit;
