import Header from "./Header"
import HeroContent from "./HeroContent"
const Hero = ({login}:{ login: () => void; }) => {
  return (
    <div className="">
       <Header login={login}/>
       <HeroContent  login={login}/>
    </div>
  )
}

export default Hero