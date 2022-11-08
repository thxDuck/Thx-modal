export let keyFrames = {
	"fade-out": [{ opacity: "1" }, { opacity: "0" }],
	"scale-down": [{ scale: "1" }, { scale: "0" }],
	"slide-up": [{ transform: "translateY(0)" }, { transform: "translateY(-100px)" }],
	"slide-down": [{ transform: "translateY(0)" }, { transform: "translateY(100px)" }],
	"slide-right": [{ transform: "translateX(0)" }, { transform: "translateX(100px)" }],
	"slide-left": [{ transform: "translateX(0)" }, { transform: "translateX(-100px)" }],
};
export let widths = {
	"mobile": {
		"sm": "50%",
		"md": "70%",
		"xl": "70%",
	},
	"tab": {
		"sm": "40%",
		"md": "50%",
		"xl": "70%",
	},
	"desktop": {
		"sm": "40%",
		"md": "50%",
		"xl": "70%",
	},
	"big": {
		"sm": "40%",
		"md": "50%",
		"xl": "70%",
	},
};

export let modal = {
	"display": "flex",
	"flexDirection": "column",
	"position": "absolute",
	"width": "40%",
	"height": "fit-content",
	"padding": "15px",
	"backgroundColor": "#fff",
	"borderRadius": "5px",
	"boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.5)",
	"top": "10%",
};
export const background = {
	"display": "flex",
	"justifyContent": "center",
	"alignItems": "center",
	"position": "fixed",
	"top": "0",
	"left": "0",
	"width": "100%",
	"height": "100%",
	"backgroundColor": "rgba(0, 0, 0, 0.5)",
};
