import {useState} from 'react'
import AccountHeader from '../Components/AccountHeader'
import LinkCard from '../Components/LinkCard'
import CreateModal from '../Components/CreateModal'
const dummyData=[
    {
        id:"1",
        createdAt:new Date(),
        name:"my website",
        longURL:"https://google.com",
        shortCode:"masdo",
        totalClicks:313

    }
]
const Account = () => {
    const [links,setLinks]=useState([])
    const [modal,setModal]=useState(false)
    const closeModal=()=>{
        setModal(false)
    }
    const handleClick=()=>{
         setModal(true)
    }

  return (
    <div>
          {modal && <span 
        className= 'bg-[rgba(0,0,0,0.4)] w-full h-screen fixed z-1000'
      ></span> } 
        {modal && <CreateModal close={closeModal}/>}

       <AccountHeader />
       <main className='mx-auto max-w-[1000px]'>
       <section className='flex gap-5 py-5 mt-5'>
            <h1 className='text-[32px] font-semibold'>Links</h1>
            <button onClick={handleClick} className='bg-[#56b7ba] text-white px-5 py-1  rounded-md font-bold'>Create New</button>
        </section>
        <section>
            {
                dummyData.map(item=>{
                    return(
                        <LinkCard key={item.id} {...item}/>
                    )
                })
            }
        </section>
       </main>
   
    </div>
  )
}

export default Account