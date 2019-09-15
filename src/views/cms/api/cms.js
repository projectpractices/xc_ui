import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('../../../../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//页面查询
export const page_pagelist = (page, size, params) => {
  let kv = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/' + page + '/' + size + '?' + kv);
};

//查询详情
export const page_one = (params) => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/cms/page/' + params);
};

//查询所有
export const page_list = () => {
  return http.requestQuickGet(apiUrl + '/cms/page/');
};

//新增页面
export const page_add = (params) => {
  return http.requestPost(apiUrl + '/cms/page/', params);
};

//编辑页面
export const page_edit = (pageId,params) => {
  return http.requestPost(apiUrl + '/cms/page/'+ pageId, params);
};


