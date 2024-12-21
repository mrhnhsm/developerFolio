/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raihan Hasyim",
  title: "Hallo, Saya Raihan",
  subTitle: emoji(
    "A Front-End software developer and GIS Developer 🚀 who is passionate about building Web and Mobile applications with JavaScript / ReactJs / React Native / NodeJs and several Other library frameworks"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mrhnhsm",
  linkedin: "https://www.linkedin.com/in/m-raihan-efdin-hasyim-78b15a2a2/",
  gmail: "rayhanhasyim00@gmail.com",
  gitlab: "https://gitlab.com/rayhanhasyim00",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What Are My Skills",
  subTitle: "FRONT-END DEVELOPER, GIS DEVELOPER, AND BACK-END DEVELOPER",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Sumatera Utara",
      logo: require("./assets/images/Raihan/logo_usu.png"),
      subHeader: "Ilmu Komputer",
      duration: "Agustus 2020 - April 2024",
      desc: "Memiliki Keahlian Software Engineer",
      descBullets: [
        "Bahasa Pemrograman (C, C++, C#, Java, Pascal)",
        "Web Development (HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL)",
        "Designer (Figma, Sketch, Adobe Ilustrator, Canva)",
        "Matematika Ilmiah (MATLAB)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Enginner",
      company: "Dinas PPKB Kota Tebing Tinggi",
      companylogo: require("./assets/images/Raihan/logo_tebing.png"),
      date: "Februari 2023 – Juni 2023",
      desc: "Membangun Aplikiasi Untuk Pemeriksaan Calon Pengantin",
      descBullets: [
        "Melakukan Analisis Keperluan User",
        "Membuat Arsitektur Umum Sistem",
        "Membangun Aplikasi Berbasis Website"
      ]
    },
    {
      role: "Social Media Marketing dan Software Engineer",
      company: "Forum GenRe Sumatera Utara",
      companylogo: require("./assets/images/Raihan/forum_genre_sumut.png"),
      date: "Agustus 2022 – Present",
      desc: "Manage Content dan Membangun Dashboard Forum GenRe Sumateara Utara",
      descBullets: [
        "Membuat Schedule Konten Setiap Harinya",
        "Membuat ide konten yang menarik",
        "Membuat Dashboard Forum GenRe Sumut"
      ]
    },
    {
      role: "Software Enginner dan GIS Enginner",
      company: "PT. Perkebunan Nusantara 4 Regional 2 Medan",
      companylogo: require("./assets/images/Raihan/Logo_PTPN4.png"),
      date: "Agustus 2024 – Present",
      desc: "Membangun Project aplikasi kebutuhan bisnis perusahaan",
      descBullets: [
        "Mengembangkan Sistem Informasi Berbasis GIS dengan React.Js",
        "Mengembangkan Antarmuka Pengguna untuk Data GIS Dengan React",
        "Menganalisis Data Spasial GIS",
        "Mengintegrasikan GIS dengan Sistem Yang Ada",
        "Membuat Aplikasi Kebutuhan Manjerial"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "DARI PERUSAHAAN DAN ORGANISASI YANG SAYA JALANI",
  projects: [
    {
      image: require("./assets/images/Raihan/lpk_jepang.jpeg"),
      projectName: "SPK dengan Metode SAW dan SWARA",
      projectDesc: "Project Akhir Kuliah"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/Raihan/catin_aplikasi.jpeg"),
      projectName: "Aplikiasi Pemeriksaan CATIN dengan Metode Certainty Factor",
      projectDesc: "Project Magang Dinas PPKB"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Raihan/dhbb.png"),
      projectName: "Aplikasi Catalogue Barang PTPN 4",
      projectDesc: "Project Perusahaan PTPN4 "
      // footerLink: [
      //   {
      //     name: "Kunjungi Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Raihan/eTracking.png"),
      projectName: "Aplikasi Etracking Komisaris PTPN 4",
      projectDesc: "Project Perusahaan PTPN4 "
      // footerLink: [
      //   {
      //     name: "Kunjungi Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Raihan/AlbumTBM.jpeg"),
      projectName: "Aplikasi Pemantau dan Manage Pokok TBM PTPN4",
      projectDesc: "Project Perusahaan PTPN4 "
      // footerLink: [
      //   {
      //     name: "Kunjungi Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Raihan/Produksi_Web.jpeg"),
      projectName: "Aplikasi Website Produksi PKS PTPN4",
      projectDesc: "Project Perusahaan PTPN4 "
      // footerLink: [
      //   {
      //     name: "Kunjungi Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Raihan/Aplikasi_Produksi_Mobile.jpeg"),
      projectName: "Aplikasi Mobile Produksi PKS PTPN4",
      projectDesc: "Project Perusahaan PTPN4 "
      // footerLink: [
      //   {
      //     name: "Kunjungi Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements And Certifications yang saya dapatkan!",

  achievementsCards: [
    {
      title: "Elticom 2024",
      subtitle: "Menjadi pemilik jurnal Internasional pada Event Elticom 2024",
      image: require("./assets/images/Raihan/eltciom.png"),
      imageAlt: "Elticom Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/18gRzba8KVV7JiaqeNv6TSzv3QTI_Z5EE/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dicoding",
      subtitle: "Belajar Dasar Pemrograman Web",
      image: require("./assets/images/Raihan/dicoding.jpeg"),
      imageAlt: "Dicoding Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1D0vdZmvRYBe7Tde8k9lYrFmy2BZr8RuQ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dinas PPKB Kota Tebing Tinggi",
      subtitle: "Magang Sebagai Backend Developer dan Front-End Developer",
      image: require("./assets/images/Raihan/logo_tebing.png"),
      imageAlt: "Tebing Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1lh5Su-X8juTHgCwzzcOc5Q4ApaJ4eg35/view?usp=sharing"
        }
      ]
    },
    {
      title: "PEMA FASILKOM-TI USU",
      subtitle: "IT Developer Academy : UI/UX Design",
      image: require("./assets/images/Raihan/pema.webp"),
      imageAlt: "Fasilkom Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1FmdmsXPByWYZEQJR4p4cTe2v6OlTIKPI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Dibimbing",
      subtitle: "Digital Skill Fair",
      image: require("./assets/images/Raihan/dibimbing_id_logo.jpeg"),
      imageAlt: "Dibimbing Logo",
      footerLink: [
        {
          name: "Certificat",
          url: "https://drive.google.com/file/d/1eJoJfNUQWAqFJLxvodv5fo7ZvIC5y8ik/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+6282161118140",
  email_address: "rayhanhasyim00@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
