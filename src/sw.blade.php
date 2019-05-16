importScripts('{{ themes_url("$theme/blokks-sw.js") }}');

const prefix = '{{ $schedule->slug }}';
const version = '1.2.0';
const url = 'https://esns.nl/timetable/eurosonic/';

const files = [
	url,
	'{{ route('embeds.smartlink', ['schedule' => $schedule->slug]) }}',
	'{{ themes_url("$theme/modern.js") }}',
	'{{ themes_url("$theme/legacy.js") }}',
	'{{ themes_url("$theme/rows.css") }}',
	'{{ themes_url("$theme/screen.css") }}',
	'{{ themes_url("$theme/icons.svg") }}',
	'{{ themes_url("$theme/images/header.jpg") }}',
	'{{ themes_url("$theme/images/esns-logo.png") }}',
	'{{ themes_url("$theme/images/buma-logo.png") }}',
	'{{ themes_url("$theme/images/oosterpoort-logo.png") }}',
	'{{ themes_url("$theme/images/heineken-logo.png") }}',
	'{{ themes_url("$theme/images/logo-europa-1.png") }}',
	'{{ themes_url("$theme/images/logo-wildsea.png") }}',	
	'https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto:400,500',
];

enableOffline({ prefix, version, files, cdns: ['https://esns.nl/upload/media/'] });
enablePush({ url });
