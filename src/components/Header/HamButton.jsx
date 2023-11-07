import { PiDotsNineBold, PiFunnelSimpleBold } from "react-icons/pi";

const HamButton = ({toggle ,setToggle}) => {
  return (
    <>
        <div className="" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <PiFunnelSimpleBold className="text-primary text-5xl font-bold md:hidden cursor-pointer" />
          ) : (
            <PiDotsNineBold className="text-primary text-5xl font-bold md:hidden cursor-pointer" />
          )}
        </div>
    </>
  )
}

export default HamButton