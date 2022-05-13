import * as Sentry from '@sentry/vue';
import {Vue} from 'vue-property-decorator';
import {ExtraErrorData} from '@sentry/integrations';

Sentry.init({
	dsn: '<INSERT DSN>',
	environment: 'local',
	Vue: Vue,
	release: '1.0.0',
	integrations: [
		new ExtraErrorData({depth: 20})
	],
	normalizeDepth: 21,
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});
