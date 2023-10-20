import emoji from 'react-easy-emoji'

import chattyio from '@/public/images/chattyio.png'
import eCommerce from '@/public/images/e-commerce.png'
import iRacingWeeklyScreenshot from '@/public/images/iracingweekly.png'
import ratingForm from '@/public/images/rating-component.png'

//require('dotenv').config({ path: '../.env' })

const greeting = {
  jobTitle: 'Junior Software Engineer',
  resumeLink:
    'https://docs.google.com/document/d/1uziqWB0PZMeOtWaplyu45jTNqNo6uaIc/edit?usp=sharing&ouid=108676278263961432674&rtpof=true&sd=true',
  subTitle: emoji(
    "A passionate engineer with experience in building web applications with React as well as experience with different frontend UI libraries and backend frameworks. I'm thrilled about the prospect of contributing my skills and passion to your team as a junior software engineer, and I look forward to discussing how we can work together to achieve great things.",
  ),
  title: "Hi, I'm Juan",
  username: 'Juan Saldana',
}

const socialMediaLinks = {
  github: 'https://github.com/saldanaj97',
  gmail: 'saldanaj97@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-saldana/',
}

const aboutMe = {
  goals: [
    "I'm on the lookout for new opportunities to join a dynamic team in building cutting-edge applications. As a junior software engineer, my top priority is to learn and grow as much as I can, while contributing to the development of exciting and impactful products. I'm excited to work my way up the ranks of software engineering and develop my skills alongside an experienced team.",
    'I have hands-on experience with a range of popular technologies, including but not limited to React.js, Node.js, MongoDB, HTML-5, CSS, and Python.',
    "In addition to my technical abilities, I'm a firm believer in the power of collaboration and teamwork. I'm eager to expand my knowledge and explore new technologies and fields through working with diverse teams within a company. I'm confident that with my dedication and enthusiasm, I can make a meaningful impact and help us achieve great things together.",
  ],
  title: 'Goals',
}

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saldanaj97', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
}

const deployedProjects = {
  projects: [
    {
      description:
        'An e-commerce website built with Next.js using designs provided by FrontendMentor.io. This app is fully responsive(mobile and desktop) and features a shopping cart, product page, and checkout widget with working state. ',
      name: 'E-Commerce Website',
      repoUrl: 'https://github.com/saldanaj97/ecommerce-product-page-main',
      screenshot: eCommerce,
      techUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      url: 'https://fe-ecommerce-site.netlify.app/',
    },
    {
      description:
        'This tool will be used for viewing which races for every series are occuring each week of the season along with the time of the next available race. The user can select which cars and tracks they own as well as select which series they want to follow. ',
      name: 'iRacingWeekly',
      repoUrl: 'https://github.com/saldanaj97/iRacing-Race-Info',
      screenshot: iRacingWeeklyScreenshot,
      techUsed: ['MongoDB', 'Express', 'React', 'Node', 'Axios', 'Material UI'],
      url: 'https://iracingweekly.netlify.app/',
    },
    {
      description:
        'Chatroom application built with React and Socket.io. This group chat app features user authentication, multi-user per group, online user lists, multi-group support per-user, and a chat history. ',
      name: 'Chatty.io',
      repoUrl: 'https://github.com/saldanaj97/ChatApp',
      screenshot: chattyio,
      techUsed: ['MongoDB', 'Express', 'React', 'Node', 'Socket.io', 'Axios', 'Chakra UI'],
      url: 'https://chattyio.netlify.app/',
    },
    {
      description:
        'A multi-step rating form built with React and Next.js with utilizing designs from FrontendMentor.io. This app features a form with two steps, error checking, and state management. ',
      name: 'Multi-Step Rating Form',
      repoUrl: 'https://github.com/saldanaj97/interactive-rating-component-main',
      screenshot: ratingForm,
      techUsed: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      url: 'https://cerulean-quokka-92dfde.netlify.app/',
    },
  ],
}

const contactInfo = {
  email_address: 'saldanaj97@gmail.com',
  number: '(469)432-9695',
  subtitle: "Let's connect and explore how my skills and expertise can contribute to your software engineering needs.",
  title: emoji('Contact Me ☎️'),
}

export { greeting, socialMediaLinks, aboutMe, openSource, deployedProjects, contactInfo }
