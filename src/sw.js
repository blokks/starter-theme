importScripts('http://themes.blokks.localhost/starter/blokks-sw.js');

const prefix = 'starter';
const version = '1.0.0';
const url = 'http://embeds.blokks.localhost/';

const files = [
	url,
	'http://embeds.blokks.localhost/local.embed.js',
	'http://themes.blokks.localhost/esns/2019/modern.js',
	'http://themes.blokks.localhost/esns/2019/legacy.js',
	'http://themes.blokks.localhost/esns/2019/rows.css',
	'http://themes.blokks.localhost/esns/2019/screen.css',
	'http://themes.blokks.localhost/esns/2019/icons.svg',

	'https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto:400,500',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/favicon-16x16.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/favicon-32x32.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/header.jpg',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/esns-logo.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/buma-logo.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/oosterpoort-logo.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/heineken-logo.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/logo-europa-1.png',
	'https://beta.themes.blokks.co/bespoke/esns/2019/images/logo-wildsea.png',
];

// enableOffline({
// 	prefix,
// 	version,
// 	files,
// 	cdns: ['https://esns.nl/upload/media/'],
// });

enablePush({ url });
