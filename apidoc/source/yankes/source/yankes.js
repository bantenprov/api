/*
* Contoh penggunaan api docs
*
* This is a basic example for apiDoc.
* Documentation blocks without @api (like this block) will be ignored.
*/

/**
* @api {get} /dokter/:id Get   Detail Dokter
* @apiName GetDokter
* @apiGroup Dokter
*
* @apiParam {Number} id Dokter unique ID.
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*{
*    "data": {
*        "id": 10,
*        "name": "R. Meliala, SpA",
*        "email": "meliala@gmail.com",
*        "photo": "15114151326942.png",
*        "data": {
*            "dokter": {
*                "id": 2,
*                "user_id": 10,
*                "about": "",
*                "nidn": "ID1071513353",
*                "spesialis": 1,
*                "pendidikan": "",
*                "phone": "081218643619",
*                "alamat": "",
*                "created_at": "2017-11-23 05:32:12",
*                "updated_at": "2017-12-03 22:13:05",
*                "visit": 2,
*                "id_player": ""
*            }
*        }
*    }
*}

*
* @apiError DataNotFound The <code>id</code> of the ID Dokter was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "DataNotFound"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 200 OK
*     {
*       "result": null
*     }
*/

/**
* @api {get} /dokter Data Dokter
* @apiName getAllDokter
* @apiGroup Dokter
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*    "data": [
*        {
*            "type": null,
*            "id": "9",
*            "attributes": {
*                "name": "Rachmat Sadeli, SpA",
*                "email": "rachmat@gmail.com",
*                "photo": "15114144716916.jpg",
*                "data": {
*                    "dokter": {
*                        "id": 1,
*                        "user_id": 9,
*                        "about": "",
*                        "nidn": "ID0971513353",
*                        "spesialis": 1,
*                        "pendidikan": "",
*                        "phone": "081212131415",
*                        "alamat": "",
*                        "created_at": "2017-11-23 05:21:12",
*                        "updated_at": "2017-12-04 11:33:39",
*                        "visit": 6,
*                        "id_player": ""
*                    }
*                }
*            }
*        },
*        {
*            "type": null,
*            "id": "10",
*            "attributes": {
*                "name": "R. Meliala, SpA",
*                "email": "meliala@gmail.com",
*                "photo": "15114151326942.png",
*                "data": {
*                    "dokter": {
*                        "id": 2,
*                        "user_id": 10,
*                        "about": "",
*                        "nidn": "ID1071513353",
*                        "spesialis": 1,
*                        "pendidikan": "",
*                        "phone": "081218643619",
*                        "alamat": "",
*                        "created_at": "2017-11-23 05:32:12",
*                        "updated_at": "2017-12-03 22:13:05",
*                        "visit": 2,
*                        "id_player": ""
*                    }
*                }
*            }
*        }
*    ],
*    "meta": {
*        "pagination": {
*            "total": 6,
*            "count": 2,
*            "per_page": 2,
*            "current_page": 1,
*            "total_pages": 3
*        }
*    },
*    "links": {
*        "self": "/dokter?page=1",
*        "first": "/dokter?page=1",
*        "next": "/dokter?page=2",
*        "last": "/dokter?page=3"
*   }
*}
*
*/



/**
* @api {get} /faskes/:id Get   Detail Rumah Sakit
* @apiName GetRumahsakit
* @apiGroup Rumah Sakit
*
* @apiParam {Number} id Rumah Sakit unique ID.
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*{
*    "data": {
*        "id": 5,
*        "rumah_sakit": "RS Sari Asih Serang",
*        "kode_rs": "0222R004",
*        "jenis": "RSU",
*        "kelas": "B",
*        "direktur": "-----",
*        "alamat": "Jl. Jendral Sudirman No. 38, Penancangan, Cipocok Jaya,",
*        "kab_kot": "Serang Banten",
*        "kode_pos": "42124",
*        "telp": "(0254) 220022",
*        "fax": "(0254) 220022",
*        "website": "https://www.sariasih.com",
*        "terdaftar": "2 weeks ago"
*    }
*}

*
* @apiError DataNotFound The <code>id</code> of the ID Rumah Sakit was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "DataNotFound"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 200 OK
*     {
*       "result": null
*     }
*/

/**
* @api {get} /faskes Data Rumah Sakit
* @apiName getAllRumahsakit
* @apiGroup Rumah Sakit
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*   "data": [
*       {
*            "type": null,
*            "id": "4",
*            "attributes": {
*                "rumah_sakit": "RSIA Budi Asih Serang",
*                "kode_rs": "0470R001",
*                "jenis": "RSIA",
*                "kelas": "B",
*                "direktur": "----",
*                "alamat": "Jl. KH. Sokhari No. 39 kec.Serang",
*                "kab_kot": "Serang",
*                "kode_pos": "42117",
*                "telp": "(0254) 212484",
*                "fax": "(0254) 212484",
*                "website": "http://rsiabudiasih.co.id",
*                "terdaftar": "2 weeks ago"
*            }
*        },
*        {
*            "type": null,
*            "id": "5",
*            "attributes": {
*                "rumah_sakit": "RS Sari Asih Serang",
*                "kode_rs": "0222R004",
*                "jenis": "RSU",
*                "kelas": "B",
*                "direktur": "-----",
*                "alamat": "Jl. Jendral Sudirman No. 38, Penancangan, Cipocok Jaya,",
*                "kab_kot": "Serang Banten",
*                "kode_pos": "42124",
*                "telp": "(0254) 220022",
*                "fax": "(0254) 220022",
*                "website": "https://www.sariasih.com",
*                "terdaftar": "2 weeks ago"
*            }
*        }
*    ],
*    "meta": {
*        "pagination": {
*            "total": 4,
*            "count": 2,
*            "per_page": 2,
*            "current_page": 1,
*            "total_pages": 2
*        }
*    },
*    "links": {
*        "self": "/faskes?page=1",
*        "first": "/faskes?page=1",
*        "next": "/faskes?page=2",
*        "last": "/faskes?page=2"
*   }
*}
*
*/


/**
* @api {get} /kamar/:id Get   Detail Kamar Inap
* @apiName GetKamarInap
* @apiGroup Kamar Inap
*
* @apiParam {Number} id Rumah Sakit unique ID.
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*{
*    "data": {
*        "id": 4,
*        "rumahsakit": "RSIA Budi Asih Serang",
*        "photo": "15112358959310.JPG",
*        "kode": "0470R001",
*        "kategori": "RSIA",
*        "grade": "B",
*        "alamat": "Jl. KH. Sokhari No. 39 kec.Serang",
*        "kab_kot": "Serang",
*        "kodepos": "42117",
*        "total_bed": 8,
*        "bed_terpakai": 3,
*        "bed_kosong": 5,
*        "rawat_inap": {
*            "kamar": [
*                {
*                    "status": 0,
*                    "id": 17,
*                    "ruang_id": 8,
*                    "kode_bed": "VVIP",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:00:21",
*                    "updated_at": "2017-11-23 06:30:39",
*                    "nama_kelas": "VVIP",
*                    "nama_ruang": "R. VVIP"
*                },
*                {
*                    "status": 1,
*                    "id": 18,
*                    "ruang_id": 8,
*                    "kode_bed": "VVIP",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:29:50",
*                    "updated_at": "2017-11-23 06:30:33",
*                    "nama_kelas": "VVIP",
*                    "nama_ruang": "R. VVIP"
*                },
*                {
*                    "status": 0,
*                    "id": 19,
*                    "ruang_id": 10,
*                    "kode_bed": "R. VIP",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:31:05",
*                    "updated_at": "2017-11-23 06:31:05",
*                    "nama_kelas": "VIP",
*                    "nama_ruang": "R. VIP"
*                },
*                {
*                    "status": 0,
*                    "id": 20,
*                    "ruang_id": 10,
*                    "kode_bed": "R. VIP",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:31:16",
*                    "updated_at": "2017-11-23 06:31:16",
*                    "nama_kelas": "VIP",
*                    "nama_ruang": "R. VIP"
*                },
*                {
*                    "status": 1,
*                    "id": 21,
*                    "ruang_id": 12,
*                    "kode_bed": "R.K.I",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:31:29",
*                    "updated_at": "2017-11-23 06:31:54",
*                    "nama_kelas": "R.K.I",
*                    "nama_ruang": "R.K.I"
*                },
*                {
*                    "status": 0,
*                    "id": 22,
*                    "ruang_id": 13,
*                    "kode_bed": "R.K.II",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:31:48",
*                    "updated_at": "2017-11-23 06:31:48",
*                    "nama_kelas": "R.K.II",
*                    "nama_ruang": "R.K.II"
*                },
*                {
*                    "status": 0,
*                    "id": 23,
*                    "ruang_id": 14,
*                    "kode_bed": "R.K.III",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:32:59",
*                    "updated_at": "2017-11-23 06:32:59",
*                    "nama_kelas": "R.K.III",
*                    "nama_ruang": "R.K.III"
*                },
*                {
*                    "status": 1,
*                    "id": 24,
*                    "ruang_id": 14,
*                    "kode_bed": "R.K.III",
*                    "created_by": 14,
*                    "created_at": "2017-11-23 06:33:07",
*                    "updated_at": "2017-11-23 06:33:15",
*                    "nama_kelas": "R.K.III",
*                    "nama_ruang": "R.K.III"
*                }
*            ]
*        }
*    }
*}

*
* @apiError DataNotFound The <code>id</code> of the ID Rumah Sakit was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "DataNotFound"
*     }
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 200 OK
*     {
*       "result": null
*     }
*/

/**
* @api {get} /kamar Data Rumah Sakit
* @apiName getAllKamarInap
* @apiGroup Kamar Inap
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*    "data": [
*        {
*            "type": null,
*            "id": "4",
*            "attributes": {
*                "rumahsakit": "RSIA Budi Asih Serang",
*                "photo": "15112358959310.JPG",
*                "kode": "0470R001",
*                "kategori": "RSIA",
*                "grade": "B",
*                "alamat": "Jl. KH. Sokhari No. 39 kec.Serang",
*                "kab_kot": "Serang",
*                "kodepos": "42117",
*                "total_bed": 8,
*                "bed_terpakai": 3,
*                "bed_kosong": 5,
*                "rawat_inap": {
*                    "kamar": [
*                        {
*                            "status": 0,
*                            "id": 17,
*                            "ruang_id": 8,
*                            "kode_bed": "VVIP",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:00:21",
*                            "updated_at": "2017-11-23 06:30:39",
*                            "nama_kelas": "VVIP",
*                            "nama_ruang": "R. VVIP"
*                        },
*                        {
*                            "status": 1,
*                            "id": 18,
*                            "ruang_id": 8,
*                            "kode_bed": "VVIP",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:29:50",
*                            "updated_at": "2017-11-23 06:30:33",
*                            "nama_kelas": "VVIP",
*                            "nama_ruang": "R. VVIP"
*                        },
*                        {
*                            "status": 0,
*                            "id": 19,
*                            "ruang_id": 10,
*                            "kode_bed": "R. VIP",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:31:05",
*                            "updated_at": "2017-11-23 06:31:05",
*                            "nama_kelas": "VIP",
*                            "nama_ruang": "R. VIP"
*                        },
*                        {
*                            "status": 0,
*                            "id": 20,
*                            "ruang_id": 10,
*                            "kode_bed": "R. VIP",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:31:16",
*                            "updated_at": "2017-11-23 06:31:16",
*                            "nama_kelas": "VIP",
*                            "nama_ruang": "R. VIP"
*                        },
*                        {
*                            "status": 1,
*                            "id": 21,
*                            "ruang_id": 12,
*                            "kode_bed": "R.K.I",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:31:29",
*                            "updated_at": "2017-11-23 06:31:54",
*                            "nama_kelas": "R.K.I",
*                            "nama_ruang": "R.K.I"
*                        },
*                        {
*                            "status": 0,
*                            "id": 22,
*                            "ruang_id": 13,
*                            "kode_bed": "R.K.II",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:31:48",
*                            "updated_at": "2017-11-23 06:31:48",
*                            "nama_kelas": "R.K.II",
*                            "nama_ruang": "R.K.II"
*                        },
*                        {
*                            "status": 0,
*                            "id": 23,
*                            "ruang_id": 14,
*                            "kode_bed": "R.K.III",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:32:59",
*                            "updated_at": "2017-11-23 06:32:59",
*                            "nama_kelas": "R.K.III",
*                            "nama_ruang": "R.K.III"
*                        },
*                        {
*                            "status": 1,
*                            "id": 24,
*                            "ruang_id": 14,
*                            "kode_bed": "R.K.III",
*                            "created_by": 14,
*                            "created_at": "2017-11-23 06:33:07",
*                            "updated_at": "2017-11-23 06:33:15",
*                            "nama_kelas": "R.K.III",
*                            "nama_ruang": "R.K.III"
*                        }
*                    ]
*                }
*            }
*        }
*    ],
*    "meta": {
*        "pagination": {
*            "total": 4,
*            "count": 2,
*            "per_page": 2,
*            "current_page": 1,
*            "total_pages": 2
*        }
*    },
*    "links": {
*        "self": "/kamar?page=1",
*        "first": "/kamar?page=1",
*        "next": "/kamar?page=2",
*        "last": "/kamar?page=2"
*    }
*}
*
*/


/**
* @api {get} /yankes Get Yankes
* @apiName GetYankes
* @apiGroup Yankes
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
{
    "data": {
        "rumahsakit": 4,
        "dokter": 6,
        "bed": 21,
        "bed_terpakai": 3,
        "bed_kosong": 18
    }
}
*/