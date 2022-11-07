import Navbar from '../Navbar'
import Collection from '../Collection'

const collection = [
  {
    id: '1',
    image: `https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720`,
    description: `Most popular around the world`,
  },

  {
    id: '2',
    image: `https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720`,
    description: `Great for team building`,
  },

  {
    id: '3',
    image: `https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720`,
    description: `Fun for the family`,
  },
]

const secondSection = [
  {
    id: '1',
    description: 'Great for groups',
  },
  {
    id: '2',
    description: 'Family-friendly',
  },
  {
    id: '3',
    description: 'Animals',
  },
  {
    id: '4',
    description: 'Arts & writing',
  },
  {
    id: '5',
    description: 'Baking',
  },
  {
    id: '6',
    description: 'Cooking',
  },
  {
    id: '7',
    description: 'Dance',
  },
  {
    id: '8',
    description: 'Drinks',
  },
  {
    id: '9',
    description: 'Entertainment',
  },
  {
    id: '10',
    description: 'Fitness',
  },
  {
    id: '11',
    description: 'History & culture',
  },
  {
    id: '12',
    description: 'Magic',
  },
  {
    id: '13',
    description: 'Music',
  },
  {
    id: '14',
    description: 'Social impact',
  },
  {
    id: '15',
    description: 'Wellness',
  },
  {
    id: '16',
    description: 'Olympians & Paralympians',
  },
  {
    id: '17',
    description: 'Designed for accessibility',
  },
]

const Home = () => (
  <div>
    <Navbar />
    <Collection collection={collection} secondSection={secondSection} />
  </div>
)

export default Home
