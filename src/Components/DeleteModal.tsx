import {GrClose} from 'react-icons/gr'
type DeleteModal={
    close:()=>void,
    deleteLink:() => Promise<void>
}
const DeleteModal = ({close,deleteLink}:DeleteModal) => {
   
  return (
    <div className='z-[1000000] fixed w-full h-full flex items-center justify-center'>
    <section className='bg-white p-6  '>
        <div className='flex justify-between items-center'>
            <p>Are you sure you want to delete this link</p>
             <span className='cursor-pointer' onClick={close}><GrClose /></span>
        </div>

       <div className='flex justify-between mt-10'>
       <button onClick={close} className=' bg-blue-400 rounded text-white py-0.5  px-2'>No</button>
        <button onClick={deleteLink} className=' bg-[#e92556] rounded text-white py-0.5  px-2'>yes</button>
       </div>
         
    </section>
    </div>
  )
}

export default DeleteModal