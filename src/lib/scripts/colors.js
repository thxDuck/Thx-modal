export const generateColorTheme = (baseColor) => {
	const regexp = /#[a-zA-Z0-9]{6}/;
	if (baseColor.length === 7 && regexp.test(baseColor)) {
		const base = baseColor;
		const dark = colorLighter(base, -100);
		const light = hexToRgba(colorLighter(base, 100), 0.8);
		const text = getBrightness(base) > 50 ? "#000" : "#fff";
		return { base, light, dark, text };
	} else {
		console.error("Bad color templates, please use hexadecimal colors");
		const base = "#ffffff";
		const dark = "rgba(0, 0, 0, 0.8)";
		const light = "rgba(0, 0, 0, 0.5)";
		const text = "#000000";
		return { base, light, dark, text };
	}
};

const colorLighter = (col, amt) => {
	let usePound = false;
	if (col[0] === "#") {
		col = col.slice(1);
		usePound = true;
	}
	const num = parseInt(col, 16);

	let red = (num >> 16) + amt;
	if (red > 255) red = 255;
	else if (red < 0) red = 0;

	let blue = ((num >> 8) & 0x00ff) + amt;
	if (blue > 255) blue = 255;
	else if (blue < 0) blue = 0;

	let green = (num & 0x0000ff) + amt;
	if (green > 255) green = 255;
	else if (green < 0) green = 0;
	
	return (usePound ? "#" : "") + (green | (blue << 8) | (red << 16)).toString(16);
};

const getBrightness = (hex) => {
	const color = hexToRgba(hex);
	let rgb = `rgb(${color})`;
	rgb = rgb.replace(/[^\d,]/g, "").split(",");
	const red = rgb[0];
	const green = rgb[1];
	const blue = rgb[2];
	return Math.floor((red * 299 + green * 587 + blue * 114) / 1000);
};

export const hexToRgba = (hex, opacity) => {
	let color;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		color = hex.substring(1).split("");
		if (color.length === 3) {
			color = [color[0], color[0], color[1], color[1], color[2], color[2]];
		}
		color = "0x" + color.join("");
		return `rgba(${[(color >> 16) & 255, (color >> 8) & 255, color & 255].join(
			","
		)}, ${opacity})`;
	}
	return new Error("Bad color templates, please use Hexadecimal colors");
};
