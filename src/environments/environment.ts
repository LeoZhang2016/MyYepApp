// let SERVER_URL = 'http://192.168.130.119:8082';
// let SERVER_URL = 'http://192.168.125.23:8082';
// let SERVER_URL = 'http://192.169.125.2:8082';
// let SERVER_URL = 'http://14.202.81.227:8082';

// let SERVER_URL = 'http://49.255.76.2';
let SERVER_URL = 'https://www.yephome.com.au';
// let SERVER_URL = 'http://14.200.15.10:8082';


// let SERVER_URL = 'http://60.240.18.65:8082';


export const environment = {
  SERVER_URL,
  // CHAT_SERVER_URL: ''
  VERIFICATION_CODE_URL: SERVER_URL === 'https://www.yephome.com.au' ? 'https://www.yephome.com.au/yhs' : (SERVER_URL === 'http://192.169.125.2' ? 'http://192.169.125.2' : ( SERVER_URL === 'http://49.255.76.2' ? 'http://49.255.76.2/yhs' : SERVER_URL)),
  // VERIFICATION_CODE_URL: SERVER_URL === 'http://192.168.130.104' ? 'http://192.168.130.104/yhs' : SERVER_URL,
  CUSTOMER_URL: 'http://localhost:4200',
  ADMIN_URL: '',
  production: false,
  hmr: false,
  googleApiKey: 'AIzaSyAffcIz1dwq1dTkg5I6jVZjE8pA3Tud190'
};


