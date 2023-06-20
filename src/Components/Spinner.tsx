import { ThreeDots } from "react-loader-spinner"
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
   <ThreeDots 
height="300" 
width="300" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
visible={true}
 />
  </div>
  )
}

export default Spinner