import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
// import Image from 'next/image';
import Social from '@/components/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

interface HomeProps {
  user?: {
    name: string;
    title: string;
    bio: string;
    cvLink: string;
  }
}

const Home: React.FC<HomeProps> = ({
  user = {
    name: "Rong Sokheng",
    title: "Web Developer & UX/UI Design",
    bio: "Solution-driven Web Developer is adept at contributing to the highly collaboration work enviroment, finding solutions, and determining customer satisfaction. Proven experience developing consumer-focused websites using JavaScript, React.JS, Next.JS, Tailwind, and MongoDB.",
    cvLink: 'https://drive.google.com/file/d/1hwMTf2RGRwmVD61fAi_3_M8jNZ9KDhvf/view?usp=drive_link',
  }
}) => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span>{user.title}</span>
            <h1 className='h1 text-[4rem] mb-6'>
              Hello I'm <br />
              <span className='text-accent'>{user.name}</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>{user.bio}</p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button 
                variant="outline"
                size="lg"
                className='uppercase flex items-center gap-2'
              >
                <a href={user.cvLink} target='_blank' rel='noopener noreferrer'>
                  Check CV
                </a>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social containerStyle='flex gap-6' iconStyle='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500' />
              </div>
            </div>
          </div>

          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo width={298} height={298} className='' />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
