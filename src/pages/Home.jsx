
import {Contact,Experience,Footer,Hero,Knowledge ,Skill} from '../components'
import Nav from '../components/Header/Nav'

const Home = () => {
  return (
    <div name='experience' className='flex flex-col '>
        <Nav />
        <Hero />
        <Knowledge />
        <Experience />
        <Skill />
        <Contact /> 
       
        
    </div>
  )
}

export default Home