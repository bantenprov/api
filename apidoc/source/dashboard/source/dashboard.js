/*
* Contoh penggunaan api docs
*
* This is a basic example for apiDoc.
* Documentation blocks without @api (like this block) will be ignored.
*/

/**
* @api {post} /pegawai Save New Jumlah Pegawai
* @apiName PostPegawai
* @apiGroup Pegawai
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Pegawai Pria.
* @apiParam {Number} wanita Jumlah Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {put} /pegawai/:id Update Jumlah Pegawai
* @apiName PutPegawai
* @apiGroup Pegawai
*
* @apiParam {Number} id Jumlah Pegawai unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Pegawai Pria.
* @apiParam {Number} wanita Jumlah Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {post} /kenaikan-pangkat-otomatis-pegawai Save New Jumlah Kenaikan Pangkat Otomatis Pegawai
* @apiName PostKpo
* @apiGroup Kenaikan-Pangkat-Otomatis-Pegawai
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Date} tanggal Tanggal unique tanggal.
* @apiParam {Number} pria Jumlah Kenaikan Pangkat Otomatis Pegawai Pria.
* @apiParam {Number} wanita Jumlah Kenaikan Pangkat Otomatis Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required."
*       ]
*     }
*/

/**
* @api {put} /kenaikan-pangkat-otomatis-pegawai/:id Update Jumlah Kenaikan Pangkat Otomatis Pegawai
* @apiName PutKpo
* @apiGroup Kenaikan-Pangkat-Otomatis-Pegawai
*
* @apiParam {Number} id Jumlah Kenaikan Pangkat Otomatis Pegawai unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tanggal Tanggal unique tanggal.
* @apiParam {Number} pria Jumlah Kenaikan Pangkat Otomatis Pegawai Pria.
* @apiParam {Number} wanita Jumlah Kenaikan Pangkat Otomatis Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required."
*       ]
*     }
*/

/**
* @api {post} /pegawai-esselon Save New Jumlah Pegawai Esselon
* @apiName PostEsselon
* @apiGroup Pegawai-Esselon
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Date} tanggal Tanggal unique tanggal.
* @apiParam {String} esselon Data Esselon <code>Esselon 1, Esselon 2, Esselon 3, Esselon 4</code>.
* @apiParam {Number} pria Jumlah Pegawai Esselon Pria.
* @apiParam {Number} wanita Jumlah Pegawai Esselon Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The esselon field is required."
*       ]
*     }
*/

/**
* @api {put} /pegawai-esselon/:id Update Jumlah Pegawai Esselon
* @apiName PutEsselon
* @apiGroup Pegawai-Esselon
*
* @apiParam {Number} id Jumlah Pegawai Esselon unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tanggal Tanggal unique tanggal.
* @apiParam {String} esselon Data Esselon <code>Esselon 1, Esselon 2, Esselon 3, Esselon 4</code>.
* @apiParam {Number} pria Jumlah Pegawai Esselon Pria.
* @apiParam {Number} wanita Jumlah Pegawai Esselon Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The esselon field is required."
*       ]
*     }
*/

/**
* @api {post} /pangkat-pegawai Save New Jumlah Pangkat Pegawai
* @apiName PostPangkat
* @apiGroup Pangkat-Pegawai
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Date} tanggal Tanggal unique tanggal.
* @apiParam {String} pangkat Data Pangkat <code>Golongan 1, Golongan 2, Golongan 3, Golongan 4</code>.
* @apiParam {Number} pria Jumlah Pangkat Pegawai Pria.
* @apiParam {Number} wanita Jumlah Pangkat Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The pangkat field is required."
*       ]
*     }
*/

/**
* @api {put} /pangkat-pegawai/:id Update Jumlah Pangkat Pegawai
* @apiName PutPangkat
* @apiGroup Pangkat-Pegawai
*
* @apiParam {Number} id Jumlah Pangkat Pegawai unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tanggal Tanggal unique tanggal.
* @apiParam {String} pangkat Data Pangkat <code>Golongan 1, Golongan 2, Golongan 3, Golongan 4</code>.
* @apiParam {Number} pria Jumlah Pangkat Pegawai Pria.
* @apiParam {Number} wanita Jumlah Pangkat Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The pangkat field is required."
*       ]
*     }
*/

/**
* @api {post} /usia-asn Save New Jumlah Usia ASN
* @apiName PostUsia
* @apiGroup Usia-Asn
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Date} tanggal Tanggal unique tanggal.
* @apiParam {String} usia Data Usia <code>20 - 100</code>.
* @apiParam {Number} pria Jumlah Usia ASN Pegawai Pria.
* @apiParam {Number} wanita Jumlah Usia ASN Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The usia field is required."
*       ]
*     }
*/

/**
* @api {put} /usia-asn/:id Update Jumlah Usia ASN
* @apiName PutUsia
* @apiGroup Usia-Asn
*
* @apiParam {Number} id Jumlah Usia ASN Pegawai unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tanggal Tanggal unique tanggal.
* @apiParam {String} usia Data Usia <code>20 - 100</code>.
* @apiParam {Number} pria Jumlah Usia ASN Pegawai Pria.
* @apiParam {Number} wanita Jumlah Usia ASN Pegawai Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required.",
*          "The usia field is required."
*       ]
*     }
*/

/**
* @api {post} /pegawai-yang-akan-pensiun Save New Jumlah Pegawai yang akan pensiun
* @apiName PostPensiun
* @apiGroup Pegawai-yang-akan-pensiun
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Date} tanggal Tanggal unique tanggal.
* @apiParam {Number} pria Jumlah Pegawai yang akan pensiun Pria.
* @apiParam {Number} wanita Jumlah Pegawai yang akan pensiun Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required."
*       ]
*     }
*/

/**
* @api {put} /pegawai-yang-akan-pensiun/:id Update Jumlah Pegawai yang akan pensiun
* @apiName PutPensiun
* @apiGroup Pegawai-yang-akan-pensiun
*
* @apiParam {Number} id Jumlah Pegawai yang akan pensiun unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tanggal Tanggal unique tanggal.
* @apiParam {Number} pria Jumlah Pegawai yang akan pensiun Pria.
* @apiParam {Number} wanita Jumlah Pegawai yang akan pensiun Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tanggal field is required."
*       ]
*     }
*/

/**
* @api {post} /penduduk Save New Jumlah Penduduk
* @apiName PostPenduduk
* @apiGroup Penduduk
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Penduduk Pria.
* @apiParam {Number} wanita Jumlah Penduduk Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {put} /penduduk/:id Update Jumlah Penduduk
* @apiName PutPenduduk
* @apiGroup Penduduk
*
* @apiParam {Number} id Jumlah Penduduk unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Penduduk Pria.
* @apiParam {Number} wanita Jumlah Penduduk Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {post} /tim-medis Save New Jumlah Tim Medis
* @apiName PostTimMedis
* @apiGroup Tim-Medis
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Tim Medis Pria.
* @apiParam {Number} wanita Jumlah Tim Medis Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {put} /tim-medis/:id Update Jumlah Tim Medis
* @apiName PutTimMedis
* @apiGroup Tim-Medis
*
* @apiParam {Number} id Jumlah Tim Medis unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Tim Medis Pria.
* @apiParam {Number} wanita Jumlah Tim Medis Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {post} /pendidik Save New Jumlah Pendidik
* @apiName PostPendidik
* @apiGroup Pendidik
*
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Pendidik Pria.
* @apiParam {Number} wanita Jumlah Pendidik Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data created successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/

/**
* @api {put} /pendidik/:id Update Jumlah Pendidik
* @apiName PutPendidik
* @apiGroup Pendidik
*
* @apiParam {Number} id Jumlah Pendidik unique ID.
* @apiParam {String} apikey Client Registered Api Key.
* @apiParam {Number} tahun Tahun unique tahun.
* @apiParam {Number} pria Jumlah Pendidik Pria.
* @apiParam {Number} wanita Jumlah Pendidik Wanita.
* @apiParam {Number} user_id ID User unique user.
*
* @apiSuccess {String} title Server response title.
* @apiSuccess {String} type Server response type.
* @apiSuccess {String} message Server response message.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       "title": "Success",
*       "type": "success",
*       "message": "Data updated successfully."
*     }
*
* @apiError ParameterValidator The <code>parameters</code> are not complete.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "title": "Error",
*       "type": "error",
*       "message": [
*          "The pria field is required.",
*          "The wanita field is required.",
*          "The tahun field is required."
*       ]
*     }
*/
