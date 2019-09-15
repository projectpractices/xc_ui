import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('../../../../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_list = (page, size, params) => {
  console.log(params);
  let kv = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/pagelist/' + page + '/' + size+'?'+kv);
};

//查询所有
export const all_list = (params) => {
  return http.requestQuickGet(apiUrl + '/cms/page/list/');
};


