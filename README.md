# Bantenprov API

Dokumentasi API Pemerintah Provinsi Banten.

## API yang tersedia

1. [Profil API](http://api-01.dev.bantenprov.go.id/docs/profil)
2. [Dashboard API](http://api-01.dev.bantenprov.go.id/docs/dashboard)
3. [Yankes API](http://api-01.dev.bantenprov.go.id/docs/yankes)
[//]: # (4. [Simpeg API](http://api-01.dev.bantenprov.go.id/docs/simpeg))
5. [Simbada API](http://api-01.dev.bantenprov.go.id/docs/simbada)
6. [SOP Online API](http://api-01.dev.bantenprov.go.id/docs/sop-online)
7. [Otorisasi API](http://api-01.dev.bantenprov.go.id/docs/otorisasi)
8. [Satu Data API](http://api-01.dev.bantenprov.go.id/docs/satu-data)

## Penyiapan alat

Untuk dapat menggunakan *build system*, Anda membutuhkan kode sumber dan Node. Ikuti langkah-langkah di bawah ini:

1. [Download kode sumber.](https://github.com/bantenprov/api/archive/master.zip)
   - Atau clone: `git clone https://github.com/bantenprov/api.git`.
2. [Download dan install Node](https://nodejs.org/download), yang digunakan untuk manajemen dependensi.
3. Arahkan ke direktori root `/api` dan jalankan perintah `npm install` untuk instalasi dependensi yang sudah terdaftar di dalam berkas [package.json](/package.json).

Setelah selesai, Anda dapat menjalankan berbagai perintah yang disediakan dari *command line*.

## Menggunakan NPM scripts

[package.json](/package.json) meliputi *commands* dan *tasks* berikut:

| Task | Description |
| --- | --- |
| `npm run build` | Untuk menjalankan pengujian dan kompilasi. |
| `npm run test` | Untuk menjalankan pengujian. |

## Struktur

```plaintext
api/
├── dist/
│   └── docs/                   # Hasil build dari `source/`
└── source/                     # Sumber API dan template
    └── <api-name>              # Nama (tiap-tiap) direktori API
        ├── api-src             # Sumber API
        │   ├── apidoc.json     # Konfigurasi API
        │   └── <api-name>.js   # Data API
        └── template            # Sumber template
```

## Petunjuk penulisan dokumentasi API

Tulis data API di dalam berkas `api-src/<api-name>.js` dan konfigurasi API di dalam berkas `api-src/apidoc.json`. Silakan pelajari dari dokumentasi API yang sudah ada.

Dokumentasi API ini menggunakan **APIDOC**, silakan pelajari bagaimana menulis dokumentasi API menggunakan **APIDOC** di <http://apidocjs.com>.
