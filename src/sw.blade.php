importScripts('{{ themes_url("$theme/blokks-sw.js") }}');

const prefix = '{{ $schedule->slug }}';
const version = '3.0.0';
const url = '{{ route('embeds.dedicated', ['schedules' => $schedule->slug ]) }}/';

const files = [
	url,
	'{{ route('embeds.launcher', ['schedules' => $schedule->slug ]) }}',
	'{{ themes_url("$theme/modern.js") }}',
	'{{ themes_url("$theme/legacy.js") }}',
	'{{ themes_url("$theme/rows.css") }}',
	'{{ themes_url("$theme/columns.css") }}',
	'{{ themes_url("$theme/list.css") }}',
	'{{ themes_url("$theme/icons.svg") }}',
];

enableOffline({ 
	prefix, 
	version, 
	files, 
	cdns: [] 
});

enablePush({ url });
