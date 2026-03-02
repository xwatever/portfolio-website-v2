/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("professional_background_translations").del();
  await knex("professional_background_translations").insert([
    /* --------------------------------- */
    /*            Education              */
    /* --------------------------------- */

    {
      background_id: 1,
      locale: "en",
      institute_or_organization: "Public Vocational High School 2 Pekanbaru",
      occupation: "Graduate of Computer Software Engineering Major",
      location: "Pekanbaru City, Riau Province, Indonesia",
      details: "",
    },
    {
      background_id: 1,
      locale: "id",
      institute_or_organization: "Sekolah Menengah Kejuruan Negeri 2 Pekanbaru",
      occupation: "Lulusan Jurusan Rekayasa Perangkat Lunak",
      location: "Kota Pekanbaru, Provinsi Riau, Indonesia",
      details: "",
    },

    {
      background_id: 2,
      locale: "en",
      institute_or_organization:
        "Islamic University of Riau, Engineering Faculty",
      occupation: "Bachelor of Informatics Engineering",
      location: "Pekanbaru City, Riau Province, Indonesia",
      details: "",
    },
    {
      background_id: 2,
      locale: "id",
      institute_or_organization: "Universitas Islam Riau, Fakultas Teknik",
      occupation: "Lulusan Sarjana Teknik Informatika",
      location: "Kota Pekanbaru, Provinsi Riau, Indonesia",
      details: "",
    },

    /* --------------------------------- */
    /*               Work                */
    /* --------------------------------- */

    {
      background_id: 3,
      locale: "en",
      institute_or_organization: "Islamic University of Riau",
      occupation: "Laboratory Assistant",
      location: "Pekanbaru City, Riau Province, Indonesia",
      details: `<ul><li>Teaching juniors on practicum lessons: C++, DBMS, MySQL, Python, Matlab, PHP. Guided and mentored up to 150 students per semester, ensuring their understanding of programming concepts and practical implementation of programming basics.</li><li>Debugged and resolved coding issues from students, achieving an average resolution time of 1 to 2 minutes per issue, making sure that i can proceed to teach one to two more source codes by the length of time given for my class.</li><li>Designed teaching materials and exercises used for my classes and for few fellow lecturer assitant, receiving positive feedback from students, associates, and lecturers.</li></ul>`,
    },
    {
      background_id: 3,
      locale: "id",
      institute_or_organization: "Universitas Islam Riau",
      occupation: "Asisten Labor",
      location: "Kota Pekanbaru, Provinsi Riau, Indonesia",
      details:
        "<ul><li>Mengajari junior pada pelajaran praktikum: C++, DBMS, MySQL, Python, Matlab, PHP. Memandu dan membimbing hingga 150 mahasiswa per semester, memastikan pemahaman mereka terhadap konsep pemrograman dan implementasi praktis dari dasar pemrograman.</li><li>Melakukan debug dan menyelesaikan isu kodingan dari mahasiswa, mencapai rata-rata waktu resolusi/penyelesaian permasalahan source code selama 1 sampai dengan 2 menit per isu, memastikan bahwa saya dapat lanjut mengajari satu atau dua atau lebih source code lainnya seiring dengan jangka waktu yang diberikan untuk kelas saya.</li><li>Mendesain materi pembelajaran dan latihan yang akan digunakan pada kelas saya dan untuk membantu kawan asisten dosen lainnya, menerima timbal balik positif dari mahasiswa, rekan asisten lainnya, dan dosen-dosen</li></ul>",
    },

    {
      background_id: 4,
      locale: "en",
      institute_or_organization:
        "Department of Population and Civil Registration",
      occupation: "Back Office Employee",
      location: "Pekanbaru City, Riau Province, Indonesia",
      details: `<ul><li>As one of Social Media Officer, Assisted 150 to 250 users per week in navigating the department’s apps, resolving inquiries, and ensuring successful submission of citizenship-related documents.</li><li>Identified and reported recurring user challenges, resulting in the implementation of documentation or guides that reduced app-related complaints by 67%.</li><li>Created user-fiendly guides and step-by-step instructions for app functionality, improving user satisfaction as measured in our public satisfaction survey.</li></ul>`,
    },
    {
      background_id: 4,
      locale: "id",
      institute_or_organization: "Dinas Kependudukan dan Pencatatan Sipil",
      occupation: "Staf Pendukung Internal",
      location: "Kota Pekanbaru, Provinsi Riau, Indonesia",
      details:
        "<ul><li>Sebagai salah satu dari petugas sosial media, Memandu 150 sampai dengan 250 pengguna setiap minggunya dalam penggunaan aplikasi disdukcapil Pekanbaru, Menangani pertanyaan, dan memastikan pengajuan dokumen kependudukan dan pencatatan sipil berjalan lancar.</li><li>Mengidentifikasi dan melaporkan permasalahan yang ditemukan pengguna secara berkala, yang menghasilkan implementasi dokumentasi atau memberikan panduan-panduan yang mengurangi keluhan yang berkaitan dengan aplikasi sebesar 67%.</li><li>Membuat panduan yang ramah terhadap pengguna dan instruksi langkah demi langkah untuk fungsionalitas aplikasi, meningkatkan kepuasan pengguna sebagaimana diukur dalam survey kepuasan publik kami.</li></ul>",
    },
  ]);
};
