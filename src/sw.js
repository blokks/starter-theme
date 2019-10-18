importScripts('http://themes.blokks.localhost/blokks-sw.js');

const prefix = 'blokks-default';
const version = '3.0.0';
const url = 'http://embeds.blokks.localhost/';

const files = [
	url,
	'http://embeds.blokks.localhost/launch.js',
	'http://themes.blokks.localhost/modern.js',
	'http://themes.blokks.localhost/legacy.js',
	'http://themes.blokks.localhost/rows.css',
	'http://themes.blokks.localhost/columns.css',
	'http://themes.blokks.localhost/list.css',
];

enableOffline({
	prefix,
	version,
	files,
	cdns: [],
});

enablePush({ url });
