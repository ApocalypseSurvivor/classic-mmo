export const AUTH_ID = 'AUTH_ID'
export const AUTH_NAME = 'AUTH_NAME'
export const AUTH_TOKEN = 'AUTH_TOKEN'
export const ENDPOINT_URL = 'http://localhost:4444/endpoint'

export const postOp = ( obj ) => {
  let body = ''
  Object.keys(obj).forEach((key)=>{ body += (body.length?'&':'') + key + '=' + encodeURIComponent( obj[key] ) })
  //return Object.assign({}, {
  //  method: 'post',
  //  headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
  //  mode: 'cors',
  //  credentials: 'omit',
  //  body: body
  //})  //  return
  return ({
    method: 'post',
    headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    mode: 'cors',
    credentials: 'omit',
    body: body
  })  //  return
}  //  postOp

export const getVarByName = function ( name, url ) {
  if ( !url ) url = window.location.href
  name = name.replace( /[[\]]/g, "\\$&" )
  var regex = new RegExp( "[?&]" + name + "(=([^&#]*)|&|#|$)" ), results = regex.exec( url )
  if ( !results ) return null
  if ( !results[2] ) return ''
  return decodeURIComponent( results[2].replace( /\+/g, " " ) )
}  //  getVarByName
