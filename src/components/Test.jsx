import {useEffect} from 'react'
// Replace this with your Google Apps Script deployment URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxePX7ohUNh_ZGi6ulUBlkdkGqUyrAR5UU9NgQmiPANkWZxd125QTHe8hYuheNRmbdT/exec'

function useAnalyticsTracker() {
  useEffect(() => {
    const collectAndSendData = async () => {
      try {
        // Generate or retrieve visitor ID
        let visitorId = localStorage.getItem('visitor_id');
        if (!visitorId) {
          visitorId = generateUUID();
          localStorage.setItem('visitor_id', visitorId);
        }

        // Create session ID for this visit
        const sessionId = generateUUID();

        // Collect all possible data
        const analyticsData = {
          // Basic Info
          timestamp: new Date().toISOString(),
          visitorId,
          sessionId,

          // User Agent & Platform
          userAgent: navigator. userAgent,
          platform: navigator.platform,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,

          // Screen Info
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          viewportSize: `${window.innerWidth}x${window.innerHeight}`,

          // Device Capabilities
          deviceMemory: navigator.deviceMemory || 'N/A',
          hardwareConcurrency: navigator.hardwareConcurrency || 'N/A',
          maxTouchPoints: navigator.maxTouchPoints || 0,
          deviceType: getDeviceType(),

          // Network & Connection
          onLine: navigator.onLine,
          connectionType: getConnectionType(),
          connectionSpeed: getConnectionSpeed(),
          rtt: getRoundTripTime(),
          saveDataMode: getSaveDataMode(),

          // Navigator Flags
          cookieEnabled: navigator.cookieEnabled,
          doNotTrack: navigator.doNotTrack || 'N/A',

          // Page Info
          referrer: document.referrer || 'direct',
          currentURL: window. location.href,
          pageTitle: document.title,

          // Performance Metrics
          pageLoadTime: getPageLoadTime(),
          domReadyTime: getDOMReadyTime(),
          responseTime: getResponseTime(),

          // Browser Features
          localStorageAvailable: isLocalStorageAvailable(),
          sessionStorageAvailable: isSessionStorageAvailable(),
          indexedDBAvailable: !!window.indexedDB,
          serviceWorkerAvailable: !!navigator.serviceWorker,
          webGLAvailable: isWebGLAvailable(),
          audioContextAvailable: !!window.AudioContext,
          geolocationAvailable: !!navigator. geolocation,
          notificationsAvailable: !!window.Notification,
          vibrationAvailable: !!navigator.vibrate,
          cameraAvailable: ! !(navigator.mediaDevices?. getUserMedia),

          // Location Data (IP-based)
          ... await getLocationFromIP(),
        };
        console.log(analyticsData)
        // Send data to Google Apps Script
        await sendToGoogleSheets(analyticsData);

      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    collectAndSendData();
  }, []);
}

// ============================================
// HELPER FUNCTIONS
// ============================================

// UUID Generator
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Device Type Detection
function getDeviceType() {
  const ua = navigator.userAgent;
  if (/mobile|android|iphone|ipad|phone/i.test(ua)) {
    if (/ipad/i.test(ua)) return 'Tablet';
    return 'Mobile';
  }
  return 'Desktop';
}

// Connection Type
function getConnectionType() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  return connection?. effectiveType || 'unknown';
}

// Connection Speed (Mbps)
function getConnectionSpeed() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  return connection?.downlink || 'N/A';
}

// Round Trip Time (ms)
function getRoundTripTime() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  return connection?.rtt || 'N/A';
}

// Save Data Mode
function getSaveDataMode() {
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  return connection?.saveData || false;
}

// Page Load Time (ms)
function getPageLoadTime() {
  if (window.performance && window.performance.timing) {
    const perf = window.performance.timing;
    return perf.loadEventEnd - perf.navigationStart;
  }
  return 'N/A';
}

// DOM Ready Time (ms)
function getDOMReadyTime() {
  if (window.performance && window.performance.timing) {
    const perf = window. performance.timing;
    return perf.domContentLoadedEventEnd - perf.navigationStart;
  }
  return 'N/A';
}

// Response Time (ms)
function getResponseTime() {
  if (window.performance && window.performance.timing) {
    const perf = window.performance.timing;
    return perf.responseEnd - perf.requestStart;
  }
  return 'N/A';
}

// LocalStorage Availability
function isLocalStorageAvailable() {
  try {
    const test = '__test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// SessionStorage Availability
function isSessionStorageAvailable() {
  try {
    const test = '__test__';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// WebGL Availability
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return ! !(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

// Get Location from IP
async function getLocationFromIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      country: data.country_name || 'N/A',
      city: data.city || 'N/A',
      ip: data.ip || 'N/A',
      isp: data.org || 'N/A',
      latitude: data.latitude || 'N/A',
      longitude: data.longitude || 'N/A',
    };
  } catch (error) {
    console.error('Failed to get location from IP:', error);
    return {
      country: 'N/A',
      city: 'N/A',
      ip: 'N/A',
      isp: 'N/A',
      latitude: 'N/A',
      longitude: 'N/A',
    };
  }
}

// Send data to Google Apps Script
async function sendToGoogleSheets(data) {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      // mode: 'no-cors',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify(data),
    });

    console.log(response);
    console.log('Analytics data sent successfully');
  } catch (error) {
    console. error('Failed to send analytics data:', error);
  }
}

export default useAnalyticsTracker;