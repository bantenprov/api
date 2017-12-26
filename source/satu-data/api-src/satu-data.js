/*
* Contoh penggunaan api docs
*
* This is a basic example for apiDoc.
* Documentation blocks without @api (like this block) will be ignored.
*/




/**
* @api {post} /createGroup Menambahkan Group Baru
* @apiName createGroup
* @apiGroup Group
*
* @apiParam {String} group_title Nama Group
* @apiParam {String} group_description Keterangan Group
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "Successfully",
*	    "generated": 2.6346,
*	    "server_time": 1514104358
*	}
*
*/

/**
* @api {get} /getGroupDetail?group_id=:group_id Menampilkan Detil Group
* @apiName getGroupDetail
* @apiGroup Group
*
* @apiParam {Number} group_id ID Group
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "",
*	    "results": {
*	        "group": {
*	            "group_id": "8b8b27b3-380a-403d-9235-73b6f17fb99e",
*	            "group_name": "7e0d6057-76f5-4156-9e2e-9f2a8c618307",
*	            "group_title": "Angka Harapan Hidup (AHH); Menurut Kabupaten/Kota Se-Provinsi Banten",
*	            "group_description": "",
*	            "group_image_url": "",
*	            "group_created": "2017-12-18 16:00:11.689238",
*	            "group_state": "active",
*	            "group_additional": []
*	        }
*	    },
*	    "generated": 1.0888,
*	    "server_time": 1514103871
*	}
*
*/

/**
* @api {get} /getGroup?page=:page&limit=:limit&view=:view&order_field=:order_field&sort_field=:sort_field&keyword=:keyword Menampilkan List Group
* @apiName getGroup
* @apiGroup Group
*
* @apiParam {Number} page Halaman yang ditampilkan
* @apiParam {Number} limit Jumlah Row yang ditampilkan
* @apiParam {Number} view Status data yang ditampilkan (0. Semua, 1.Aktif, 2.Tidak Aktif)
* @apiParam {String} order_field Sorting Data sesuai field (id, name, title, state)
* @apiParam {String} sort_field (ASC, DESC)
* @apiParam {String} keyword Kata kunci untuk pencarian data
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "",
*	    "results": {
*	        "groups": [
*	            {
*	                "group_id": "8b8b27b3-380a-403d-9235-73b6f17fb99e",
*	                "group_name": "7e0d6057-76f5-4156-9e2e-9f2a8c618307",
*	                "group_title": "Angka Harapan Hidup (AHH); Menurut Kabupaten/Kota Se-Provinsi Banten",
*	                "group_image_url": "",
*	                "group_created": "2017-12-18 16:00:11.689238",
*	                "group_state": "active"
*	            },
*	            {
*	                "group_id": "68326356-bd59-4e51-8ef9-768624b6a3ae",
*	                "group_name": "02775299-0fc7-4e8f-835e-5add11c5decb",
*	                "group_title": "Angka Partisipasi Kasar (APK);Menurut Kabupaten/Kota dan Jenjang Pendidikan Se-Provinsi Banten",
*	                "group_image_url": "",
*	                "group_created": "2017-12-18 16:00:51.475721",
*	                "group_state": "active"
*	            }
*	        ],
*	        "page_current": "1",
*	        "page_max": 1,
*	        "total_result": 2
*	    },
*	    "generated": 4.4083,
*	    "server_time": 1514103762
*	}
*
*/






/**
* @api {post} /createOrganization Menambahkan Organisasi Baru
* @apiName createOrganization
* @apiGroup Organisasi
*
* @apiParam {String} organization_name Kode Organisasi
* @apiParam {String} organization_title Nama Organisasi
* @apiParam {String} organization_description Keterangan Organisasi
* @apiParam {String} organization_parent_id Kode Induk Organisasi
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "Successfully",
*	    "generated": 2.6346,
*	    "server_time": 1514104358
*	}
*
*/

/**
* @api {get} /getOrganizationDetail?organization_id=:organization_id Menampilkan Detil Organisasi
* @apiName getOrganizationDetail
* @apiGroup Organisasi
*
* @apiParam {Number} organization_id ID Organisasi
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "",
*	    "results": {
*	        "organization": {
*	            "organization_id": "55c4835a-6aac-4064-ab12-7faafb023b22",
*				"organization_parent_id": "ceefc646-bf4a-4c1c-afb9-cc5f2f5a63d0",
*	            "organization_name": "00000000000000",
*	            "organization_title": "Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat",
*	            "organization_description": "Ini adalah Test Organisasi dari WS :-D",
*	            "organization_image_url": "",
*	            "organization_created": "2017-12-21 08:17:15",
*	            "organization_state": "active",
*	            "organization_additional": []
*	        }
*	    },
*	    "generated": 5.095,
*	    "server_time": 1514104588
*	}
*
*/

/**
* @api {get} /getOrganizationHierarchy Menampilkan Hirarki Organisasi
* @apiName getOrganizationHierarchy
* @apiGroup Organisasi
*
* @apiParam {Number} organization_id ID Organisasi
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "",
*	    "results": {
*	        "organizations": [
*	            {
*	                "organization_id": "fd576bf5-e3db-4aa5-a13e-0352478b4a05",
*	                "organization_parent_id": null,
*	                "organization_name": "000100000000000",
*	                "organization_title": "Sekretariat Daerah",
*	                "organization_image_url": "",
*	                "organization_childs": [
*	                    {
*	                        "organization_id": "ceefc646-bf4a-4c1c-afb9-cc5f2f5a63d0",
*	                        "organization_parent_id": "fd576bf5-e3db-4aa5-a13e-0352478b4a05",
*	                        "organization_name": "000101000000000",
*	                        "organization_title": "Asisten Pemerintahan dan Kesejahteraan Rakyat",
*	                        "organization_image_url": "",
*	                        "organization_childs": []
*	                    }
*	                ]
*	            },
*	            {
*	                "organization_id": "a5ec8fbd-141a-49b6-be22-5b912030fd22",
*	                "organization_name": "00000000000001",
*	                "organization_title": "Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat 2",
*	                "organization_image_url": "",
*	                "organization_created": "2017-12-21 09:05:57",
*	                "organization_state": "active"
*	            }
*	        ],
*	    },
*	    "generated": 5.095,
*	    "server_time": 1514104588
*	}
*
*/

/**
* @api {get} /getOrganization?page=:page&limit=:limit&view=:view&order_field=:order_field&sort_field=:sort_field&keyword=:keyword Menampilkan List Organisasi
* @apiName getOrganization
* @apiGroup Organisasi
*
* @apiParam {Number} page Halaman yang ditampilkan
* @apiParam {Number} limit Jumlah Row yang ditampilkan
* @apiParam {Number} view Status data yang ditampilkan (0. Semua, 1.Aktif, 2.Tidak Aktif)
* @apiParam {String} order_field Sorting Data sesuai field (id, name, title, state)
* @apiParam {String} sort_field (ASC, DESC)
* @apiParam {String} keyword Kata kunci untuk pencarian data
*
*
* @apiSuccess {Array} result Server response data.
*
* @apiSuccessExample Success-Response:
*	HTTP/1.1 200 OK
*	{
*	    "status": 1,
*	    "code": 200,
*	    "message": "",
*	    "results": {
*	        "organizations": [
*	            {
*	                "organization_id": "55c4835a-6aac-4064-ab12-7faafb023b22",
*					"organization_parent_id": "ceefc646-bf4a-4c1c-afb9-cc5f2f5a63d0",
*	                "organization_name": "00000000000000",
*	                "organization_title": "Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat",
*	                "organization_image_url": "",
*	                "organization_created": "2017-12-21 08:17:15",
*	                "organization_state": "active"
*	            },
*	            {
*	                "organization_id": "a5ec8fbd-141a-49b6-be22-5b912030fd22",
*					"organization_parent_id": "ceefc646-bf4a-4c1c-afb9-cc5f2f5a63d0",
*	                "organization_name": "00000000000001",
*	                "organization_title": "Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat 2",
*	                "organization_image_url": "",
*	                "organization_created": "2017-12-21 09:05:57",
*	                "organization_state": "active"
*	            }
*	        ],
*	        "page_current": "1",
*	        "page_max": 608,
*	        "total_result": 1215
*	    },
*	    "generated": 5.3157,
*	    "server_time": 1514104462
*	}
*
*/

