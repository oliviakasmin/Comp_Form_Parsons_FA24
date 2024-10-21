// Create the download button
const button = document.createElement("button");
button.textContent = "Download";
button.addEventListener("click", () => downloadAsSVG("output.svg"));
document.body.appendChild(button);

function downloadAsSVG(fileName = "output.svg") {
	// create a data url of the file
	const svgData = paper.project.exportSVG({ asString: true });
	const url = "data:image/svg+xml;utf8," + encodeURIComponent(svgData);

	// create a link to the data, and "click" it
	const link = document.createElement("a");
	link.download = fileName;
	link.href = url;
	link.click();
}
