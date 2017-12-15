define({ "api": [
  {
    "type": "post",
    "url": "/kenaikan-pangkat-otomatis-pegawai",
    "title": "Save New Jumlah Kenaikan Pangkat Otomatis Pegawai",
    "name": "PostKpo",
    "group": "Kenaikan_Pangkat_Otomatis_Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Kenaikan Pangkat Otomatis Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Kenaikan Pangkat Otomatis Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Kenaikan_Pangkat_Otomatis_Pegawai"
  },
  {
    "type": "put",
    "url": "/kenaikan-pangkat-otomatis-pegawai/:id",
    "title": "Update Jumlah Kenaikan Pangkat Otomatis Pegawai",
    "name": "PutKpo",
    "group": "Kenaikan_Pangkat_Otomatis_Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Kenaikan Pangkat Otomatis Pegawai unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Kenaikan Pangkat Otomatis Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Kenaikan Pangkat Otomatis Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Kenaikan_Pangkat_Otomatis_Pegawai"
  },
  {
    "type": "post",
    "url": "/pangkat-pegawai",
    "title": "Save New Jumlah Pangkat Pegawai",
    "name": "PostPangkat",
    "group": "Pangkat_Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pangkat",
            "description": "<p>Data Pangkat <code>Golongan 1, Golongan 2, Golongan 3, Golongan 4</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pangkat Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pangkat Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The pangkat field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pangkat_Pegawai"
  },
  {
    "type": "put",
    "url": "/pangkat-pegawai/:id",
    "title": "Update Jumlah Pangkat Pegawai",
    "name": "PutPangkat",
    "group": "Pangkat_Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Pangkat Pegawai unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pangkat",
            "description": "<p>Data Pangkat <code>Golongan 1, Golongan 2, Golongan 3, Golongan 4</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pangkat Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pangkat Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The pangkat field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pangkat_Pegawai"
  },
  {
    "type": "post",
    "url": "/pegawai",
    "title": "Save New Jumlah Pegawai",
    "name": "PostPegawai",
    "group": "Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai"
  },
  {
    "type": "put",
    "url": "/pegawai/:id",
    "title": "Update Jumlah Pegawai",
    "name": "PutPegawai",
    "group": "Pegawai",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Pegawai unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai"
  },
  {
    "type": "post",
    "url": "/pegawai-esselon",
    "title": "Save New Jumlah Pegawai Esselon",
    "name": "PostEsselon",
    "group": "Pegawai_Esselon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "esselon",
            "description": "<p>Data Esselon <code>Esselon 1, Esselon 2, Esselon 3, Esselon 4</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai Esselon Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai Esselon Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The esselon field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai_Esselon"
  },
  {
    "type": "put",
    "url": "/pegawai-esselon/:id",
    "title": "Update Jumlah Pegawai Esselon",
    "name": "PutEsselon",
    "group": "Pegawai_Esselon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Pegawai Esselon unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "esselon",
            "description": "<p>Data Esselon <code>Esselon 1, Esselon 2, Esselon 3, Esselon 4</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai Esselon Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai Esselon Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The esselon field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai_Esselon"
  },
  {
    "type": "post",
    "url": "/pegawai-yang-akan-pensiun",
    "title": "Save New Jumlah Pegawai yang akan pensiun",
    "name": "PostPensiun",
    "group": "Pegawai_yang_akan_pensiun",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai yang akan pensiun Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai yang akan pensiun Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai_yang_akan_pensiun"
  },
  {
    "type": "put",
    "url": "/pegawai-yang-akan-pensiun/:id",
    "title": "Update Jumlah Pegawai yang akan pensiun",
    "name": "PutPensiun",
    "group": "Pegawai_yang_akan_pensiun",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Pegawai yang akan pensiun unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pegawai yang akan pensiun Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pegawai yang akan pensiun Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pegawai_yang_akan_pensiun"
  },
  {
    "type": "post",
    "url": "/pendidik",
    "title": "Save New Jumlah Pendidik",
    "name": "PostPendidik",
    "group": "Pendidik",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pendidik Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pendidik Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pendidik"
  },
  {
    "type": "put",
    "url": "/pendidik/:id",
    "title": "Update Jumlah Pendidik",
    "name": "PutPendidik",
    "group": "Pendidik",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Pendidik unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Pendidik Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Pendidik Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Pendidik"
  },
  {
    "type": "post",
    "url": "/penduduk",
    "title": "Save New Jumlah Penduduk",
    "name": "PostPenduduk",
    "group": "Penduduk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Penduduk Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Penduduk Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Penduduk"
  },
  {
    "type": "put",
    "url": "/penduduk/:id",
    "title": "Update Jumlah Penduduk",
    "name": "PutPenduduk",
    "group": "Penduduk",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Penduduk unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Penduduk Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Penduduk Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Penduduk"
  },
  {
    "type": "post",
    "url": "/tim-medis",
    "title": "Save New Jumlah Tim Medis",
    "name": "PostTimMedis",
    "group": "Tim_Medis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Tim Medis Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Tim Medis Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Tim_Medis"
  },
  {
    "type": "put",
    "url": "/tim-medis/:id",
    "title": "Update Jumlah Tim Medis",
    "name": "PutTimMedis",
    "group": "Tim_Medis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Tim Medis unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tahun",
            "description": "<p>Tahun unique tahun.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Tim Medis Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Tim Medis Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tahun field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Tim_Medis"
  },
  {
    "type": "post",
    "url": "/usia-asn",
    "title": "Save New Jumlah Usia ASN",
    "name": "PostUsia",
    "group": "Usia_Asn",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usia",
            "description": "<p>Data Usia <code>20 - 100</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Usia ASN Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Usia ASN Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data created successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The usia field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Usia_Asn"
  },
  {
    "type": "put",
    "url": "/usia-asn/:id",
    "title": "Update Jumlah Usia ASN",
    "name": "PutUsia",
    "group": "Usia_Asn",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Jumlah Usia ASN Pegawai unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apikey",
            "description": "<p>Client Registered Api Key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tanggal",
            "description": "<p>Tanggal unique tanggal.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usia",
            "description": "<p>Data Usia <code>20 - 100</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pria",
            "description": "<p>Jumlah Usia ASN Pegawai Pria.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "wanita",
            "description": "<p>Jumlah Usia ASN Pegawai Wanita.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID User unique user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Server response title.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Server response type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Server response message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"title\": \"Success\",\n  \"type\": \"success\",\n  \"message\": \"Data updated successfully.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ParameterValidator",
            "description": "<p>The <code>parameters</code> are not complete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"title\": \"Error\",\n  \"type\": \"error\",\n  \"message\": [\n     \"The pria field is required.\",\n     \"The wanita field is required.\",\n     \"The tanggal field is required.\",\n     \"The usia field is required.\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/dashboard/api-src/dashboard.js",
    "groupTitle": "Usia_Asn"
  }
] });
