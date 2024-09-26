import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data ,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/imranmustafa030')
    //     .then(res => res.json())
    //     .then(data => {setData(data)})
    // },[])

  return (
    <div className='flex flex-wrap  flex-col justify-center items-center bg-gray-600 text-center text-3xl text-white'>
        <div className='mt-3'>
            Github Followers: {data.followers}
        </div>
        <div className='border-white border-2 rounded-full overflow-hidden my-3'>
            <img src={data.avatar_url} alt="Github picture" width={300} />
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/imranmustafa030')
    return response.json();
} 