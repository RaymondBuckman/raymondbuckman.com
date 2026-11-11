// All the words and pictures on the site live here, so you can edit text
// without touching layout.
// Facts below come from Raymond's LinkedIn profile and GitHub (checked Nov 2026).

export const links = {
  linkedin: 'https://www.linkedin.com/in/raymondbuckman/',
  github: 'https://github.com/RaymondBuckman',
}

// Sections the nav bar and drawer link to (ids must match the page)
export const navItems = [
  { id: 'about', label: 'About', icon: '/images/education-icon.png' },
  { id: 'resume', label: 'Résumé', icon: '/images/employment-icon.png' },
  { id: 'hobbies', label: 'Hobbies', icon: '/images/hobbies-icon.png' },
  { id: 'contact', label: 'Contact', icon: '/images/volunteer-icon.png' },
]

export const hero = {
  first: 'Raymond',
  last: 'Buckman',
  roles: ['Computer Engineer', 'React Developer'], // placeholder — to confirm
}

export const about = {
  text: 'I’m a computer engineer and an Information Technology Specialist at Fleet Readiness Center Southwest, where I’ve worked for the Department of the Navy since 2020. Outside of work I keep building: I’ve completed IBM’s full-stack developer program — React, Node.js, Django, microservices, containers and Kubernetes — and lately I’ve been diving into AI, prompt engineering and cybersecurity. “Learn something new every day” is a motto I live by, and I bring the same curiosity to cultures, languages and food.',
  facts: [
    { label: 'Day job', value: 'IT Specialist, FRCSW' },
    { label: 'Degree', value: 'B.S. Computer Engineering, SJSU' },
    { label: 'Building with', value: 'React since 2017' },
    { label: 'Speaks', value: 'English · French' },
  ],
}

export const ticker = [
  'React', 'JavaScript', 'Node.js', 'Express', 'Django', 'Python', 'HTML & CSS', 'Sass',
  'Java', 'C++', 'Oracle SQL', 'MongoDB', 'Redux Toolkit', 'Docker', 'Kubernetes', 'Git', 'Vite', 'GSAP',
]

export const education = {
  degree: 'B.S. Computer Engineering',
  school: 'San Jose State University',
  courses: [
    'Operating Systems', 'Database Systems', 'Computer Architecture', 'Digital Design I & II',
    'Algorithms & Data Structures', 'Computer Networking', 'Advanced Algorithm Design',
    'Microprocessor Design', 'Embedded Systems',
  ],
  // IBM Skills Network / edX courses — details checked against the GitHub repos
  coursework: [
    { title: 'Full-Stack Developer Capstone', detail: 'Car-dealership review app · React, Django, Express + MongoDB, Flask, Docker, Kubernetes' },
    { title: 'Node.js & Express', detail: 'Book-review REST API with JWT authentication' },
    { title: 'Embedded AI', detail: 'Emotion-detection web app · Python, Flask, IBM Watson NLP' },
    { title: 'React Projects', detail: 'e-plantShopping, conference event planner, Redux Toolkit store and more' },
  ],
  // From LinkedIn "Licenses & certifications", newest first
  certifications: [
    { title: 'AI Agents for Cybersecurity', detail: 'LinkedIn Learning · Sep 2026' },
    { title: 'Advanced Prompt Engineering Techniques', detail: 'LinkedIn Learning · Aug 2026' },
    { title: 'Prompt Engineering: How to Talk to the AIs', detail: 'LinkedIn Learning · Aug 2026' },
    { title: 'Cybersecurity Foundations', detail: 'LinkedIn Learning · Aug 2026' },
    { title: 'Full Stack Application Developer Capstone', detail: 'edX Verified · Jan 2026' },
    { title: 'Full Stack Application Development Project', detail: 'edX Verified · Aug 2025' },
    { title: 'Django Application Development with SQL & Databases', detail: 'edX Verified · Jun 2025' },
    { title: 'Microservices and Serverless', detail: 'edX Verified · May 2025' },
    { title: 'Containers, Kubernetes and OpenShift', detail: 'edX Verified · May 2025' },
    { title: 'Cloud Native, DevOps, Agile and NoSQL', detail: 'edX Verified · May 2025' },
  ],
}

export const seniorProject = {
  name: 'RC Over IP',
  summary: 'A drone flown from a smartphone app over the drone’s own Wi-Fi. Two on-screen joysticks send roll, pitch, yaw and throttle as UDP packets, decoded on board into PWM signals for a 32-bit ARM Naze32 flight controller.',
  photos: ['/images/drone-1-mini.jpg', '/images/drone-2-mini.jpg', '/images/drone-3-mini.jpg'],
}

export const languages = ['React', 'JavaScript', 'HTML & CSS', 'Sass', 'Node.js', 'Python', 'Java', 'C++', 'Oracle SQL']

// Newest first
export const employment = [
  { title: 'Information Technology Specialist', detail: 'Fleet Readiness Center Southwest, Department of the Navy · Full-time · Aug 2020 – Present' },
  { title: 'Sortation Associate', detail: 'Amazon · Sep 2018 – Aug 2020' },
  { title: 'Apartment Renovator', detail: 'Small business, Los Angeles · Jan 2013 – Aug 2020 · Demolition, drywall, cabinets & counters, interior design, painting, staging' },
  { title: 'Exhibitor', detail: 'ARM TechCon · Oct 2012 · Presented the latest ARM-powered devices to potential customers' },
]

export const skills = [
  // Used at FRCSW
  'Information Design Tool', 'Toad', 'SAP BI 4.3', 'Jira', 'Agile Development',
  'Django', 'Microservices', 'Serverless', 'Docker & containers', 'Kubernetes & OpenShift',
  'DevOps', 'NoSQL', 'Prompt engineering', 'Cybersecurity', 'Git & GitHub',
  'Vite / Webpack', 'GSAP', 'Photoshop', 'French (intermediate)',
]

export const volunteer = [
  { title: 'Camera Operator', detail: 'The Church at Rancho Bernardo · Feb 2016 – Present · Runs the video cameras for Sunday services' },
  { title: 'Point of Sale Associate', detail: 'The Church at Rancho Bernardo · Oct 2014 – Present · Sorts and prices donated items for church events' },
  { title: 'Food Distributor', detail: 'Jacobs & Cushman San Diego Food Bank · Jun – Aug 2012 · 16 hours a week sorting, packaging and distributing food' },
  { title: 'Food Packager', detail: 'San Diego Food Bank · Jul – Aug 2012 · Packaged food for delivery to senior citizens' },
]

// Each hobby uses /images/<name>-mini.jpg (600×600, grayscale). The label is made
// from the name unless one is given, e.g. ['health-wellness', 'Health & Wellness'].
// Add { centered: true } to stop the sideways pan, for logos or photos cropped to fit exactly
// (a 600×800 image fills a centred card edge to edge).
export const hobbies = [
  'tennis', 'travel', 'foreign-languages', 'weight-lifting', 'running', ['cars', null, { centered: true }],
  'pingpong', 'geography', 'geopolitics', 'investing', ['health-wellness', 'Health & Wellness'], 'pets', 'gaming',
  'history', 'technology', ['ai', 'AI', { centered: true }], 'modern-design',
  'techno', 'trance', 'dubstep',
].map((item) => {
  const [name, label, options = {}] = Array.isArray(item) ? item : [item]
  return {
    name,
    label: label ?? name.replace('pingpong', 'ping pong').replace('-', ' '),
    image: `/images/${name}-mini.jpg`,
    centered: Boolean(options.centered),
  }
})

// Credits for photos whose license requires one (shown in the footer)
export const photoCredits = [
  {
    what: 'Porsche 911 GT3',
    who: 'Charles from Port Chester, New York',
    license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Porsche_911_GT3_(992,_2022)_(52574988848).jpg',
  },
  {
    what: 'Chongqing skyline',
    who: 'Maple Doctor',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Chongqing_Skyline_At_Night.png',
  },
  {
    what: 'Cryotherapy chamber',
    who: 'NáskokBrno',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Kryokomora_nov%C3%A9_generace_od_firmy_CryoAction.jpg',
  },
]

export const projects = [
  { name: 'Djokovic', image: '/images/djokovic-preview.jpg' },
  { name: 'M2', image: '/images/m2-preview.jpg' },
  { name: 'The Winter War', image: '/images/the-winter-war-preview.jpg' },
  { name: 'Turkey', image: '/images/turkey-preview.jpg' },
]
