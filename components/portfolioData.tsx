import emoji from 'react-easy-emoji'

// require('dotenv').config()

const greeting = {
  resumeLink: 'https://drive.google.com/file/d/1J6__84YcylqPMCjDeGiMm1hTPPxoIRzr/view?usp=sharing',
  subTitle: emoji(
    'A highly motivated Software Developer based in Dallas, TX looking for opportunities in developing Web and Mobile applications. My goal is to help make others lives easier by taking part in creating new exciting products for people with the use of cutting edge technology.',
  ),
  title: "Hi, I'm Juan",
  username: 'Juan Saldana',
}

const socialMediaLinks = {
  github: 'https://github.com/saldanaj97',
  gmail: 'saldanaj97@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-saldana/',
}

const skillsSection = {
  skills: [
    emoji('⚡ Developed highly interactive and user friendly interfaces for both mobile and web applcations.'),
    emoji(
      '⚡ Experience with integration of third party services such as Firebase, Microsoft Azure, and Microsoft SQL Server.',
    ),
  ],
  // https://fontawesome.com/icons?d=gallery
  softwareSkills: [
    {
      fontAwesomeClassname: 'fab fa-java',
      skillName: 'Java',
    },
    {
      fontAwesomeClassname: 'fab fa-python',
      skillName: 'Python',
    },
    {
      fontAwesomeClassname: 'fab fa-html5',
      skillName: 'HTML-5',
    },
    {
      fontAwesomeClassname: 'fab fa-css3-alt',
      skillName: 'CSS',
    },
    {
      fontAwesomeClassname: 'fab fa-js',
      skillName: 'JavaScript',
    },
    {
      fontAwesomeClassname: 'fab fa-react',
      skillName: 'React.js',
    },
    {
      fontAwesomeClassname: 'fas fa-database',
      skillName: 'SQL',
    },
  ],
  subTitle: 'Seeking oppurtunities develop new products with the following technologies.',

  title: 'About Me',
}

const educationSection = {
  courses: [
    {
      courseName: 'Data Structures',
    },
    {
      courseName: 'Algorithms',
    },
    {
      courseName: 'Human Computer Interfaces (UI Development)',
    },
    {
      courseName: 'Intro to Databases',
    },
    {
      courseName: 'Software Engineering',
    },
    {
      courseName: 'Computer Networking',
    },
    {
      courseName: 'Technical Writing',
    },
  ],
  subtitle: 'Relevant Coursework',
  title: 'Education',
}

const techStack = {
  experience: [
    {
      Stack: 'Web Development',
      progressPercentage: '90%',
    },
    {
      Stack: 'Mobile App Development',
      progressPercentage: '50%',
    },
  ],
  viewSkillBars: true, //Set it to true to show Proficiency Section
}

const languageStack = {
  experience: [
    {
      Stack: 'Javascript',
      progressPercentage: '35%',
    },
    {
      Stack: 'Python',
      progressPercentage: '50%',
    },
    {
      Stack: 'Flutter',
      progressPercentage: '15%',
    },
  ],
  viewSkillBars: true, //Set it to true to show Proficiency Section,
}

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saldanaj97', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
}

// const achievementSection = {
//   achivementsCards: [
//     {
//       footerLink: [],
//       image: require('./assets/images/cplusplus.png'),
//       subtitle: 'Passed C++ LinkedIn Assessment displaying solid foundational knowledge of C++.',
//       title: 'C++ LinkedIn Assessment',
//     },
//     {
//       footerLink: [],
//       image: require('./assets/images/git.png'),
//       subtitle: 'Passed Git LinkedIn Assessment displaying solid foundational knowledge of Git.',
//       title: 'Git LinkedIn Assessment',
//     },
//     {
//       footerLink: [],
//       image: require('./assets/images/python.png'),
//       subtitle: 'Passed Python LinkedIn Assessment displaying solid foundational knowledge of python.',
//       title: 'Python LinkedIn Assessment',
//     },
//   ],
//   subtitle: 'Achievements and Certifications I have acquired! ',

//   title: emoji('Achievements And Certifications 🏆 '),
// }

const contactInfo = {
  email_address: 'saldanaj97@gmail.com',
  number: '(469)432-9695',
  subtitle: 'Feel free to reach me at my email, through the phone, or on LinkedIn.',
  title: emoji('Contact Me ☎️'),
}

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationSection,
  techStack,
  languageStack,
  openSource,
  // achievementSection,
  contactInfo,
}
