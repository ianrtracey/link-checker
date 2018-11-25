import request from 'request';
import { getHrefs } from './links'

export const getLinks = async (url) => {
  return await request(url, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      throw new Error('Request Error')
    }
    if (!response || response.statusCode !== 200) {
      console.log('statusCode:', response.statusCode); // Print the error if one occurred
      return false
    }

    const links = getHrefs(body)
    return links
  })
}