const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const PATHS = {
	src: path.join(__dirname, "./src"),
	dist: path.join(__dirname, "./dist"),
};

const PAGES_DIR = `${PATHS.src}/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith(".pug"));

const filename = (ext) => `[name].${ext}`;

const plugins = () => {
	const basePlugins = [
		...PAGES.map(
			(page) =>
				new HTMLWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page.replace(/\.pug/, ".html")}`,
				})
		),
		new MiniCssExtractPlugin({
			filename: `./css/${filename("css")}`,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(__dirname, "src/assets"), to: path.resolve(`${PATHS.dist}`) },
				{ from: path.resolve(__dirname, "src/img"), to: path.resolve(`${PATHS.dist}/img/`) },
			],
		}),
	];

	return basePlugins;
};

module.exports = {
	context: path.resolve(`${PATHS.src}`),
	mode: "development",
	entry: "./js/main.js",
	output: {
		filename: `./js/${filename("js")}`,
		path: path.resolve(`${PATHS.dist}`),
		publicPath: "",
		clean: true,
	},
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	devServer: {
		historyApiFallback: true,
		static: path.resolve(`${PATHS.dist}`),
		open: true,
		compress: true,
		hot: true,
		port: 3000,
	},
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	plugins: plugins(),
	devtool: isProd ? false : "source-map",
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: "pug-loader",
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => {
								return path.relative(path.dirname(resourcePath), context) + "/";
							},
						},
					},
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ["postcss-preset-env"],
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(?:|gif|png|jpg|jpeg|svg|webp|mp4)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: `./img/${filename("[ext]")}`,
						},
					},
				],
			},
			{
				test: /\.(woff2|woff)$/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},
};
