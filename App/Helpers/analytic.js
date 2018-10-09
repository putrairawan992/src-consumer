import {
    GoogleAnalyticsTracker,
    GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';
import constants from '@helpers/constants';

const tracker = new GoogleAnalyticsTracker(constants.tracker_id);

GoogleAnalyticsSettings.setDispatchInterval(30);


export const trackScreen = (screenName, hitPayload = null) => {
    // Setting `dryRun` to `true` lets you test tracking without sending data to GA
    console.log('check tracker', screenName);
    tracker.trackScreenView(screenName, hitPayload);
};
