const qs = require('qs')
const baseHttpClient = require('../common/baseHttpClient')
const userRequestUrlMappingResolver = require('../config/client/userRequestUrlMappingReolver')

/**
 * {
 *      result: {
 *          code: 0,
 *          description: 'success'
 *      }, data {
 *      
 *      }
 * }
 */

class UserController {
    
    async login(ctx) {
        const request = userRequestUrlMappingResolver.login

        console.log(ctx.request.body)

        const response = await baseHttpClient.doHttpPostRequest(ctx, request, JSON.stringify(ctx.request.body))
        
        const responseData = qs.parse(response.data)

        const responseDataCode = responseData.result.code
        
        //login successful
        if (0 === responseData) {
            ctx.body = responseData
        } else {
            ctx.body = responseData
        }
    }
}


module.exports = new UserController()