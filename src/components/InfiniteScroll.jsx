import { useEffect,useState } from "react"

export function InfiniteScroll()
{  
    const [data,setData]=useState([])
    const [page,setPage]=useState(0)
    const [loading,setLoading]=useState(true)

   
    
    useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`).then((res)=>{
            return res.json()
        }).then((arr)=>{
            setLoading(false)
            setData((prev)=>[...prev,...arr])
        })
    
       
    },[page])

    useEffect(()=>{
        const observer=new IntersectionObserver((params)=>{
          
            if(params[0].isIntersecting)
            {
                //observer.unobserve(lastImg)
                setPage(page=>page+1)
            }
        },{})
        const lastImg=document.querySelector(".post:last-child")
        if(!lastImg) return
        observer.observe(lastImg)
        
        return ()=>{
            if(lastImg)
            {
                observer.unobserve(lastImg)
            }
            observer.disconnect()
        }
    },[data])
    
    if(loading)
    {
        return <div>Loading</div>
    }

    return <div className="flex flex-col items-center">
      {data.map((item,index)=>{
        return <img   className= "post h-[500px] w-[700px] object-cover mb-2 mt-2" key={index} src={item.download_url}></img>
      })}
    </div>
}