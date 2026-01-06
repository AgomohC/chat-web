import path from "path"
const buildEslintCommand = filenames =>
	`eslint --fix ${filenames
		.map(f => `"${path.relative(process.cwd(), f)}"`)
		.join(" ")}`

module.exports = {
	"*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
	"*.{css,scss,json,md}": "prettier --write",
}
