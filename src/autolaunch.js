var blokks = blokks || {};

(function() {
	var currentScript = document.querySelector('script[src*="autolaunch.js"]');
	var isLegacyBrowser = !('noModule' in currentScript);

	// Set options by merging the ones from the database with
	var options = {
		layout: 'list',
		socialProvider: 'facebook',
	};

	Object.keys(blokks.options).forEach(function(key) {
		options[key] = blokks.options[key];
	});

	blokks.options = options;

	// Inject theme stylesheet to the head of the document
	const theme = document.createElement('link');
	theme.setAttribute('blokks-styles', '');
	theme.rel = 'stylesheet';
	theme.media = 'screen';
	theme.href = 'http://themes.blokks.localhost/' + options.layout + '.css';
	document.head.insertBefore(theme, document.head.firstChild);

	// Add custom theme styles to the head of the document
	const customStyles = document.createTextNode('.blokks {--theme-color: #348dd0;}');
	const styles = document.createElement('style');
	styles.setAttribute('blokks-styles', '');
	styles.media = 'screen';
	styles.appendChild(customStyles);
	document.head.insertBefore(styles, document.head.firstChild);

	// Add Polyfill for legacy browsers
	const useLegacy = isLegacyBrowser || (blokks.config && blokks.config.useLegacy);
	const usePolyfill = useLegacy || (blokks.config && blokks.config.usePolyfill);

	if (usePolyfill) {
		var polyfill = document.createElement('script');
		polyfill.crossorigin = 'anonymous';
		polyfill.src =
			'https://polyfill.io/v3/polyfill.min.js?features=default,Array.prototype.filter,Array.prototype.forEach,Array.prototype.map,Array.prototype.includes,Object.values,Object.keys,Array.prototype.findIndex,Array.prototype.find,Object.entries,URL,CustomEvent,Event,Promise';
		polyfill.setAttribute('blokks-script', '');
		// document.body.appendChild(polyfill);
	}

	// Finally inject the main script to the end of the body
	var script = document.createElement('script');
	script.setAttribute('blokks-script', '');
	script.src = 'http://themes.blokks.localhost/' + (useLegacy ? 'legacy.js' : 'modern.js');
	document.body.appendChild(script);
})();
