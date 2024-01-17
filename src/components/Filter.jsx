import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, page } from '../Redux/appSlice';





var pages = 0;
function Filter() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.products.page)


    const [filter, setFilter] = useState({
        product: '',
        category: 'all',
        company: 'all',
        sort: 'a-z',
        price: 100000
    })



    const [re_get, setRe_get] = useState(true)

    useEffect(() => {
        getDate()
    }, [re_get])

    useEffect(() => {
        getDate()
    }, [page])

    const getDate = async () => {
        const res = await axios.get(`https://strapi-store-server.onrender.com/api/products?search=${filter.product}&category=${filter.category}&company=${filter.company}&order=${filter.sort}&price=${filter.price}&page=${page}`)
        dispatch(addData(res.data.data))
        pages = res.data.meta.pagination.pageCount
    }



    function submit(e) {
        e.preventDefault();
        setRe_get(!re_get)
    }

    return (

        <form onSubmit={submit} className='grid items-center dark:bg-[#181920] dark:text-white sm:grid-cols-2 md:grid-cols-3 rounded-md lg:grid-cols-4 bg-[#F0F6FF] p-5 gap-5'>
            <div>
                <label htmlFor="price">Serarch Product</label>
                <br />
                <input type='search' name='product' value={filter.product} onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })} className='w-full rounded-xl dark:bg-[#272935] dark:text-white p-1 px-2 my-3' />
            </div>
            <div>
                <label className='' htmlFor="category">Category</label>
                <br />
                <select id='category' className='w-full dark:bg-[#272935] rounded-xl p-1 px-2 my-3' name='category' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="all">all</option>
                    <option value="kids">Kids</option>
                    <option value="chairs">Chairs</option>
                    <option value="tables">Tables</option>
                    <option value="beds">Beds</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>
            <div>
                <label className='' htmlFor="company">Company</label>
                <br />
                <select id='company' className='w-full dark:bg-[#272935] rounded-xl p-1 px-2 my-3' name='company' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="all">all</option>
                    <option value="modenza">Modenza</option>
                    <option value="luxora">Luxora</option>
                    <option value="homestead">Homestead</option>
                    <option value="cumfora">Cumfora</option>
                    <option value="sofas">Sofas</option>
                </select>
            </div>

            <div>
                <label htmlFor="sort">Sort By  </label>
                <br />
                <select id='sort' className='w-full  dark:bg-[#272935] rounded-xl p-1 px-2 my-3' name='sort' onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value
                })}>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                    <option value="high">high</option>
                    <option value="low">low</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Select Price {filter.price / 100}.00</label>
                <br />
                <input type="range" className='w-[90%] mx-auto' value={filter.price / 1000} onChange={(e) => setFilter({
                    ...filter,
                    [e.target.name]: e.target.value * 1000
                })} id="price" name="price" min="0" max="100" />
            </div>
            <button className='bg-blue-600 text-white font-bold rounded-lg h-6'>SEARCH</button>
        </form>
    )
}

export default Filter

export const Pagination = () => {
    const dispatch = useDispatch();

    const [active, setActive] = useState(0)

    return (
        <div className='flex justify-end my-5'>
            <div className='grid grid-cols-3 gap-  md:w-[35%] lg:w-[28%] bg-[#F0F6FF] rounded-lg border overflow-hidden'>
                {
                    Array.from(Array(pages).keys()).map(p => <button key={p} onClick={() => (dispatch(page(String(p + 1))), setActive(p))} className={`px-10  text-[#394E6A] ${active == p ? 'bg-[#b3b8c9]' : ''}`}>{p + 1}</button>)
                }
            </div>
        </div>
    );
}