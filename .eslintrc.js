module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"airbnb",
	],
	parser: "babel-eslint",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: [
		"react",
	],
	rules: {
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"import/prefer-default-export": "off",
		"class-methods-use-this": "off",
		"max-len": ["error", { "code": 120 }],
		"no-underscore-dangle": "off",
		"no-unused-expressions":[2, { allowShortCircuit: true }]
	},
};
