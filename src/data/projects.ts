export type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Good Morning News',
    description:
      'Digital newspaper built as three separate front-ends — reader, admin and mobile — against a shared Rails API.',
    tech: ['React', 'React Native', 'Ruby on Rails'],
    image: '/images/projects/good-morning.png',
    repo: 'https://github.com/FacundoOs/client_user_good_morning_news',
  },
  {
    title: 'Data Warehouse',
    description:
      'App that lets a marketing company manage all of its clients’ contacts in one place.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Sass'],
    image: '/images/projects/data-warehouse.jpg',
    repo: 'https://github.com/FacundoOs/data_warehouse',
  },
  {
    title: 'Matchup',
    description:
      'B2B mobile application, final project at Craft Academy. React Native client on a Ruby on Rails backend.',
    tech: ['React Native', 'Ruby on Rails'],
    image: '/images/projects/develup.jpg',
    repo: 'https://github.com/FacundoOs/develUp_mobile',
  },
]
