export const info = {
  name: { en: "Chaebin Kim", ko: "김채빈" },
  role: { en: "CS Student @ Virginia Tech", ko: "버지니아텍 컴퓨터공학과" },
  tagline: {
    en: "Building thoughtful software — from multimodal AI pipelines to mobile apps.",
    ko: "멀티모달 AI 파이프라인부터 모바일 앱까지, 사려 깊은 소프트웨어를 만듭니다.",
  },
  email: "cbkim712@gmail.com",
  phone: "+1 (202)-704-5455",
  linkedin: "https://linkedin.com/in/ckim712",
  github: "https://github.com/ckim712",
  location: { en: "Blacksburg, VA", ko: "버지니아주 블랙스버그" },
  bio: {
    en: `I'm a Computer Science student at Virginia Tech (graduating May 2026) with a minor in HCI and Math. I care about building software that's both technically rigorous and genuinely usable — whether that's an AI evaluation pipeline, a SQL practice platform, or a birdwatching app.\n\nI've had the chance to do research at Queen Mary University of London, contribute to an educational platform as a research assistant, and teach introductory CS to hundreds of students as a TA. Outside of code, I serve as VP of the Korean Student Association at VT.`,
    ko: `저는 2026년 5월 졸업 예정인 버지니아텍 컴퓨터공학과 학생으로, HCI와 수학을 부전공하고 있습니다. AI 평가 파이프라인, SQL 연습 플랫폼, 탐조 앱 등 기술적으로 견고하면서도 실제로 사용하기 좋은 소프트웨어를 만드는 것에 관심이 있습니다.\n\n런던 퀸메리대학교에서 연구 인턴을 하고, 교육 플랫폼 연구 조교로 활동했으며, 수백 명의 학생들에게 입문 CS를 가르치는 조교로 일했습니다. 코딩 외에는 버지니아텍 한인학생회 부회장으로 활동하고 있습니다.`,
  },
  education: {
    school: "Virginia Tech",
    degree: {
      en: "B.S. Computer Science, Minor in HCI and Math",
      ko: "컴퓨터공학 학사, HCI·수학 부전공",
    },
    date: { en: "Expected May 2026", ko: "2026년 5월 졸업 예정" },
    gpa: "3.63 / 4.0",
    honors: {
      en: ["Dean's List: Fall 2023, Fall 2024, Spring 2025, and Fall 2025"],
      ko: ["우등생 명단: 2023년 가을, 2024년 가을, 2025년 봄, 2025년 가을"],
    },
    coursework: {
      en: ["HCI", "Cloud Dev", "GUI Programming", "Data Structures & Algorithms", "Mobile Dev", "Intro to AI"],
      ko: ["인간컴퓨터상호작용", "클라우드 개발", "GUI 프로그래밍", "자료구조 및 알고리즘", "모바일 개발", "AI 입문"],
    },
  },
  skills: {
    languages: ["Java", "Python", "C", "Swift", "JavaScript", "HTML/CSS", "SQL"],
    frameworks: ["React", "Node.js", "PostgreSQL", "Git", "Docker", "AWS EC2"],
    other: {
      en: ["Korean (Native)", "English (Fluent)"],
      ko: ["한국어 (모국어)", "영어 (유창)"],
    },
  },
  nav: {
    en: ["Home", "About", "Experience", "Projects", "Resume", "Contact"],
    ko: ["홈", "소개", "경력", "프로젝트", "이력서", "연락처"],
  },
  contactPage: {
    heading: { en: "Let's talk", ko: "연락해요" },
    sub: {
      en: "Whether it's an opportunity, collaboration, or just a hello — I'd love to hear from you! 🌸",
      ko: "취업 기회, 협업, 혹은 그냥 인사라도 — 언제든지 환영해요! 🌸",
    },
    quote: {
      en: '"Great things happen when people connect" 🌷',
      ko: '"사람과 사람이 연결될 때 멋진 일이 일어납니다" 🌷',
    },
  },
};

export const projects = [
  {
    title: "DBWorkout",
    tech: ["Python", "React", "PostgreSQL"],
    date: { en: "Oct 2025 – Present", ko: "2025년 10월 – 현재" },
    description: {
      en: "A web-based SQL practice platform supporting real-time feedback and instructor-led sessions. Contributed to backend data models and implemented filterable views for scalable question and session management.",
      ko: "실시간 피드백과 교수자 주도 세션을 지원하는 웹 기반 SQL 연습 플랫폼입니다. 백엔드 데이터 모델 개선 및 질문·세션 관리를 위한 필터 뷰를 구현했습니다.",
    },
    link: null,
  },
  {
    title: "LLM-Guided Segmentation Assessment",
    tech: ["Python", "Gradio", "LISA", "LLaMA"],
    date: { en: "Jul 2025 – Aug 2025", ko: "2025년 7월 – 8월" },
    description: {
      en: "End-to-end multimodal evaluation pipeline integrating LISA (segmentation), DAM (captioning), and a LLaMA-based critic to assess spatial (IoU) and semantic similarity. Built an interactive Gradio interface to visualize results.",
      ko: "LISA(분할), DAM(캡셔닝), LLaMA 기반 평가자를 통합한 멀티모달 평가 파이프라인입니다. 공간적(IoU) 및 의미적 유사도를 평가하고, Gradio 인터페이스로 결과를 시각화했습니다.",
    },
    link: null,
  },
  {
    title: "Event Tracker",
    tech: ["Swift", "SwiftData", "MapKit", "TicketMaster API"],
    date: { en: "", ko: "" },
    description: {
      en: "iOS app for tracking events and artists. Implemented core data architecture using SwiftData with artist tracking and a map view showing events geographically with venue-based filtering.",
      ko: "이벤트와 아티스트를 추적하는 iOS 앱입니다. SwiftData로 핵심 데이터 아키텍처를 구현하고, 지도 뷰에서 공연장 기반 필터링을 통해 이벤트를 지리적으로 표시합니다.",
    },
    link: null,
  },
  {
    title: "Feather Finder",
    tech: ["Java", "HTML/CSS", "AWS EC2", "eBird API", "Google Maps API"],
    date: { en: "", ko: "" },
    description: {
      en: "Birdwatching web app with sighting logging and map integration. Designed backend schema, deployed on AWS EC2, and collaborated in a 6-person team.",
      ko: "탐조 기록 및 지도 통합 기능이 있는 웹 앱입니다. 백엔드 스키마를 설계하고 AWS EC2에 배포했으며, 6인 팀으로 협업했습니다.",
    },
    link: null,
  },
];

export const experience = [
  {
    role: { en: "Undergraduate Research Assistant", ko: "학부 연구 조교" },
    org: { en: "Virginia Tech — DBWorkout", ko: "버지니아텍 — DBWorkout" },
    location: { en: "Blacksburg, VA", ko: "버지니아주 블랙스버그" },
    date: { en: "Oct 2025 – Present", ko: "2025년 10월 – 현재" },
    bullets: {
      en: [
        "Contributed to SQL practice platform with focus on feedback, usability, and classroom workflows",
        "Improved database schema and filtering logic for instructor tools",
      ],
      ko: [
        "피드백, 사용성, 수업 워크플로우에 중점을 둔 SQL 연습 플랫폼 개발에 기여",
        "교수자 도구의 데이터베이스 스키마 및 필터링 로직 개선",
      ],
    },
  },
  {
    role: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" },
    org: { en: "Queen Mary University of London — CIS Lab", ko: "런던 퀸메리대학교 — CIS 연구실" },
    location: { en: "London, United Kingdom", ko: "영국 런던" },
    date: { en: "Jul 2025 – Aug 2025", ko: "2025년 7월 – 8월" },
    bullets: {
      en: [
        "Built a multimodal evaluation pipeline integrating LISA, DAM, and a LLaMA-based critic to assess spatial (IoU) and semantic similarity",
        "Developed an interactive Gradio interface to visualize model outputs and generate feedback for prompt refinement",
      ],
      ko: [
        "LISA, DAM, LLaMA 기반 평가자를 통합한 멀티모달 평가 파이프라인 구축 — 공간적(IoU) 및 의미적 유사도 측정",
        "모델 출력 시각화 및 프롬프트 개선 피드백 생성을 위한 Gradio 인터페이스 개발",
      ],
    },
  },
  {
    role: { en: "Undergraduate Teaching Assistant", ko: "학부 교육 조교" },
    org: { en: "Virginia Tech — CS1114", ko: "버지니아텍 — CS1114" },
    location: { en: "Blacksburg, VA", ko: "버지니아주 블랙스버그" },
    date: { en: "Aug 2025 – Present", ko: "2025년 8월 – 현재" },
    bullets: {
      en: [
        "Assisted Intro to Software Design (CS1114) students in weekly lab sessions and office hours, guiding students through Java programming",
        "Held office hours for a course of 400+ students to assist with assignments and concept clarification",
      ],
      ko: [
        "소프트웨어 설계 입문(CS1114) 학생들의 주간 실습 세션 및 오피스아워에서 Java 프로그래밍 지도",
        "400명 이상의 수강생을 대상으로 오피스아워를 진행하며 과제 및 개념 이해 지원",
      ],
    },
  },
  {
    role: { en: "Vice President & Webmaster", ko: "부회장 및 웹마스터" },
    org: { en: "Korean Student Association at VT (VTKSA)", ko: "버지니아텍 한인학생회 (VTKSA)" },
    location: { en: "Blacksburg, VA", ko: "버지니아주 블랙스버그" },
    date: { en: "Jan 2025 – Present", ko: "2025년 1월 – 현재" },
    bullets: {
      en: [
        "Lead club operations, coordinate events, and manage communications for the student community",
        "Managed club website and maintained a job board to support Korean international students",
      ],
      ko: [
        "클럽 운영 총괄, 행사 기획, 학생 커뮤니티 커뮤니케이션 관리",
        "클럽 웹사이트 관리 및 한인 유학생 지원을 위한 취업 게시판 운영",
      ],
    },
  },
];
