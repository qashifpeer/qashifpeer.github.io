
import {ContactForm,Experience,Footer,Hero,Knowledge ,Skill} from '../components'
import Nav from '../components/Header/Nav'

const Home = () => {
  return (
    <div name='experience' className='flex flex-col '>
        <Nav />
        <Hero />
        <Knowledge />
        <Experience />
        <Skill />
        <ContactForm /> 
       
        
    </div>
  )
}

export default Home