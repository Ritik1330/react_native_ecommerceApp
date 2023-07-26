const API_BASE_URL = 'https://ecommerce-659x.onrender.com';
const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const SIGNIN = getApiUrl('/api/v1/login');
export const SIGNOUT = getApiUrl('/api/v1/logout');
export const PROFILR = getApiUrl('/api/v1/me');
export const PRODUCT_LIST = getApiUrl('/api/v1/products');
export const PRODUCT_DETAILS = getApiUrl('/api/v1/product');
export const PAYMENT_PROCCESS = getApiUrl('/api/v1/payment/process');
export const NEW_ORDER = getApiUrl('/api/v1/order/new');
export const MY_ORDERS = getApiUrl('/api/v1/orders/me');

export const SIGNUP = getApiUrl('/user/registerUser');
export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile');
export const VERIFYOTP = getApiUrl('/user/v1/verifyOtp');
export const LOADUSERDATA = getApiUrl('/user/v1/getUserSearch');
export const SEARCHUSER = getApiUrl('/user/v1/getUserNearMe');
export const CHATUSERSLIST = getApiUrl('/user/v1/getAllConversations');
export const GETMESSAGESONETOONE = getApiUrl(
  '/user/v1/getConversationMessages',
);
