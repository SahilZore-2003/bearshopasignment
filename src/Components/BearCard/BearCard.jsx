import React, { useEffect, useState } from 'react'
import "./BearCard.scss"
import Loader from '../Loader/Loader'

const BearCard = ({ search }) => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    const fetchData = () => {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
        setLoader(false)
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (
        <section className='bear-card-container'>
            {
                loader ? <Loader /> : data.filter((item) => {
                    return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                }).map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.image_url} alt="" />
                            <h2>{item.name}</h2>
                            <p>{item.description.slice(0, 50)}...</p>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default BearCard
