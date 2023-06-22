// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
// 	resolve: {
// 		fallback: {
// 		  buffer: require.resolve("buffer/"),
// 		  stream: require.resolve("stream-browserify"),
// 		},
// 	  },
// 	},
// 	entry: "./client/src/index.js",
// 	module: {
// 		rules: [
// 			{
// 				test: /\.js$/,
// 				exclude: /node_modules/,
// 				use: {
// 					loader: "babel-loader",
// 					options: {
// 						cacheDirectory: true,
// 					},
// 				},
// 			},
// 			{
// 				test: /\.(png|svg|jpe?g|gif)$/,
// 				loader: "file-loader",
// 			},
// 			{
// 				test: /\.css$/,
// 				use: ["style-loader", "css-loader"],
// 			},
// 		],
// 	},
// 	output: {
// 		publicPath: "/",
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			favicon: "./client/src/favicon.ico",
// 			template: "./client/src/index.html",
// 		}),
// 	],
// };
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    fallback: {
      // buffer: require.resolve("buffer/"),
      // assert: require.resolve("assert/"),
      // stream: require.resolve("stream-browserify"),
      // crypto: require.resolve("crypto-browserify"),
      // path: require.resolve("path-browserify"),
      // util: require.resolve("util/"),
      // fs: false,
      // net: false,
      child_process: false,
        process:  false,
        fs: false,
        util: false,
        http: false,
        https: false,
        tls: false,
        net: false,
        crypto: false,
        path: false,
        os: false,
        stream: false,
        zlib: false,
	},
  },
  entry: "./client/src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./client/src/favicon.ico",
      template: "./client/src/index.html",
    }),
  ],
};
