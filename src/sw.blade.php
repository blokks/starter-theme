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
	'{{ themes_url("$theme/columns.css") }}',
	'{{ themes_url("$theme/list.css") }}',
	'{{ themes_url("$theme/icons.svg") }}',
];

enableOffline({ prefix, version, files, cdns: ['https://esns.nl/upload/media/'] });
enablePush({ url });
