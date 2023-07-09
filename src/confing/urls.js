const API_BASE_URL = 'https://ecommerce-659x.onrender.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const PRODUCT_LIST = getApiUrl('/api/v1/products');
export const SIGNUP = getApiUrl('/user/registerUser');
export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile');
export const VERIFYOTP = getApiUrl('/user/v1/verifyOtp');
export const LOADUSERDATA = getApiUrl('/user/v1/getUserSearch');
export const SEARCHUSER = getApiUrl('/user/v1/getUserNearMe');
export const CHATUSERSLIST = getApiUrl('/user/v1/getAllConversations');
export const GETMESSAGESONETOONE = getApiUrl('/user/v1/getConversationMessages');


