define({ "api": [
  {
    "type": "post",
    "url": "/createGroup",
    "title": "Menambahkan Group Baru",
    "name": "createGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_title",
            "description": "<p>Nama Group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "group_description",
            "description": "<p>Keterangan Group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"Successfully\",\n    \"generated\": 2.6346,\n    \"server_time\": 1514104358\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/getGroup?page=:page&limit=:limit&view=:view&order_field=:order_field&sort_field=:sort_field&keyword=:keyword",
    "title": "Menampilkan List Group",
    "name": "getGroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Halaman yang ditampilkan</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Jumlah Row yang ditampilkan</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Status data yang ditampilkan (0. Semua, 1.Aktif, 2.Tidak Aktif)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_field",
            "description": "<p>Sorting Data sesuai field (id, name, title, state)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_field",
            "description": "<p>(ASC, DESC)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Kata kunci untuk pencarian data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"\",\n    \"results\": {\n        \"groups\": [\n            {\n                \"group_id\": \"8b8b27b3-380a-403d-9235-73b6f17fb99e\",\n                \"group_name\": \"7e0d6057-76f5-4156-9e2e-9f2a8c618307\",\n                \"group_title\": \"Angka Harapan Hidup (AHH); Menurut Kabupaten/Kota Se-Provinsi Banten\",\n                \"group_image_url\": \"\",\n                \"group_created\": \"2017-12-18 16:00:11.689238\",\n                \"group_state\": \"active\"\n            },\n            {\n                \"group_id\": \"68326356-bd59-4e51-8ef9-768624b6a3ae\",\n                \"group_name\": \"02775299-0fc7-4e8f-835e-5add11c5decb\",\n                \"group_title\": \"Angka Partisipasi Kasar (APK);Menurut Kabupaten/Kota dan Jenjang Pendidikan Se-Provinsi Banten\",\n                \"group_image_url\": \"\",\n                \"group_created\": \"2017-12-18 16:00:51.475721\",\n                \"group_state\": \"active\"\n            }\n        ],\n        \"page_current\": \"1\",\n        \"page_max\": 1,\n        \"total_result\": 2\n    },\n    \"generated\": 4.4083,\n    \"server_time\": 1514103762\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/getGroupDetail?group_id=:group_id",
    "title": "Menampilkan Detil Group",
    "name": "getGroupDetail",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "group_id",
            "description": "<p>ID Group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"\",\n    \"results\": {\n        \"group\": {\n            \"group_id\": \"8b8b27b3-380a-403d-9235-73b6f17fb99e\",\n            \"group_name\": \"7e0d6057-76f5-4156-9e2e-9f2a8c618307\",\n            \"group_title\": \"Angka Harapan Hidup (AHH); Menurut Kabupaten/Kota Se-Provinsi Banten\",\n            \"group_description\": \"\",\n            \"group_image_url\": \"\",\n            \"group_created\": \"2017-12-18 16:00:11.689238\",\n            \"group_state\": \"active\",\n            \"group_additional\": []\n        }\n    },\n    \"generated\": 1.0888,\n    \"server_time\": 1514103871\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/createOrganization",
    "title": "Menambahkan Organisasi Baru",
    "name": "createOrganization",
    "group": "Organisasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization_name",
            "description": "<p>Kode Organisasi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization_title",
            "description": "<p>Nama Organisasi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization_description",
            "description": "<p>Keterangan Organisasi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "organization_parent_id",
            "description": "<p>Kode Induk Organisasi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"Successfully\",\n    \"generated\": 2.6346,\n    \"server_time\": 1514104358\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Organisasi"
  },
  {
    "type": "get",
    "url": "/getOrganization?page=:page&limit=:limit&view=:view&order_field=:order_field&sort_field=:sort_field&keyword=:keyword",
    "title": "Menampilkan List Organisasi",
    "name": "getOrganization",
    "group": "Organisasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Halaman yang ditampilkan</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Jumlah Row yang ditampilkan</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "view",
            "description": "<p>Status data yang ditampilkan (0. Semua, 1.Aktif, 2.Tidak Aktif)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order_field",
            "description": "<p>Sorting Data sesuai field (id, name, title, state)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sort_field",
            "description": "<p>(ASC, DESC)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>Kata kunci untuk pencarian data</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"\",\n    \"results\": {\n        \"organizations\": [\n            {\n                \"organization_id\": \"55c4835a-6aac-4064-ab12-7faafb023b22\",\n                \"organization_name\": \"00000000000000\",\n                \"organization_title\": \"Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat\",\n                \"organization_image_url\": \"\",\n                \"organization_created\": \"2017-12-21 08:17:15\",\n                \"organization_state\": \"active\"\n            },\n            {\n                \"organization_id\": \"a5ec8fbd-141a-49b6-be22-5b912030fd22\",\n                \"organization_name\": \"00000000000001\",\n                \"organization_title\": \"Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat 2\",\n                \"organization_image_url\": \"\",\n                \"organization_created\": \"2017-12-21 09:05:57\",\n                \"organization_state\": \"active\"\n            }\n        ],\n        \"page_current\": \"1\",\n        \"page_max\": 608,\n        \"total_result\": 1215\n    },\n    \"generated\": 5.3157,\n    \"server_time\": 1514104462\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Organisasi"
  },
  {
    "type": "get",
    "url": "/getOrganizationDetail?organization_id=:organization_id",
    "title": "Menampilkan Detil Organisasi",
    "name": "getOrganizationDetail",
    "group": "Organisasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>ID Organisasi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"\",\n    \"results\": {\n        \"organization\": {\n            \"organization_id\": \"55c4835a-6aac-4064-ab12-7faafb023b22\",\n            \"organization_name\": \"00000000000000\",\n            \"organization_title\": \"Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat\",\n            \"organization_description\": \"Ini adalah Test Organisasi dari WS :-D\",\n            \"organization_image_url\": \"\",\n            \"organization_created\": \"2017-12-21 08:17:15\",\n            \"organization_state\": \"active\",\n            \"organization_additional\": []\n        }\n    },\n    \"generated\": 5.095,\n    \"server_time\": 1514104588\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Organisasi"
  },
  {
    "type": "get",
    "url": "/getOrganizationHierarchy",
    "title": "Menampilkan Hirarki Organisasi",
    "name": "getOrganizationHierarchy",
    "group": "Organisasi",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "organization_id",
            "description": "<p>ID Organisasi</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result",
            "description": "<p>Server response data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 1,\n    \"code\": 200,\n    \"message\": \"\",\n    \"results\": {\n        \"organizations\": [\n            {\n                \"organization_id\": \"fd576bf5-e3db-4aa5-a13e-0352478b4a05\",\n                \"organization_parent_id\": null,\n                \"organization_name\": \"000100000000000\",\n                \"organization_title\": \"Sekretariat Daerah\",\n                \"organization_image_url\": \"\",\n                \"organization_childs\": [\n                    {\n                        \"organization_id\": \"ceefc646-bf4a-4c1c-afb9-cc5f2f5a63d0\",\n                        \"organization_parent_id\": \"fd576bf5-e3db-4aa5-a13e-0352478b4a05\",\n                        \"organization_name\": \"000101000000000\",\n                        \"organization_title\": \"Asisten Pemerintahan dan Kesejahteraan Rakyat\",\n                        \"organization_image_url\": \"\",\n                        \"organization_childs\": []\n                    }\n                ]\n            },\n            {\n                \"organization_id\": \"a5ec8fbd-141a-49b6-be22-5b912030fd22\",\n                \"organization_name\": \"00000000000001\",\n                \"organization_title\": \"Test Organisasi child dari Asisten Pemerintahan dan Kesejahteraan Rakyat 2\",\n                \"organization_image_url\": \"\",\n                \"organization_created\": \"2017-12-21 09:05:57\",\n                \"organization_state\": \"active\"\n            }\n        ],\n    },\n    \"generated\": 5.095,\n    \"server_time\": 1514104588\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/satu-data/api-src/satu-data.js",
    "groupTitle": "Organisasi"
  }
] });
