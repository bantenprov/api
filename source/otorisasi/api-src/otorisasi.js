/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 ^ * @api {get} /user/:id
 * @apiErrorUser {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {get} /role/:id Request Role information
 * @apiName GetRole
 * @apiGroup Role
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Roles unique ID.
 *
 * @apiSuccess {String} id ID of the Role.
 * @apiSuccess {String} name Name of the Role.
 */

/**
 * @api {post} /advantrust/role/
 * @apiName PostRole
 * @apiGroup Role
 * @apiVersion 1.0.0
 * @apiDescription API POST Role.
 * Untuk dapat menggunakan POST methos.
 * Anda harus menghibungi administrator
 * untuk mendapatkan informasi lengkap.
 *
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 * @apiParam {String} [firstname]  Optional Firstname of the User.
 * @apiParam {String} lastname     Mandatory Lastname.
 * @apiParam {String} country="DE" Mandatory with default value "DE".
 * @apiParam {Number} [age=18]     Optional Age with default 18.
 *
 * @apiParam (Login) {String} pass Only logged in users can post this.
 *                                 In generated documentation a separate
 *                                 "Login" Block will be generated.
 */


/**
 * @api {get} /permission/:id Request Permission information
 * @apiName GetRole
 * @apiGroup Permission
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} id Roles unique ID.
 *
 * @apiSuccess {String} id ID of the Permission.
 * @apiSuccess {String} name Name of the Permission.
 */

/**
 * @api {post} /advantrust/permission/
 * @apiName PostPermission
 * @apiGroup Role
 * @apiVersion 1.0.0
 * 
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Accept-Encoding": "Accept-Encoding: gzip, deflate"
 *     }
 * @apiParam {String} [firstname]  Optional Firstname of the User.
 * @apiParam {String} lastname     Mandatory Lastname.
 * @apiParam {String} country="DE" Mandatory with default value "DE".
 * @apiParam {Number} [age=18]     Optional Age with default 18.
 *
 * @apiParam (Login) {String} pass Only logged in users can post this.
 *                                 In generated documentation a separate
 *                                 "Login" Block will be generated.
 */