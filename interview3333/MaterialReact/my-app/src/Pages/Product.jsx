import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import DisplayProduct from './DisplayProduct';
import {Box} from '@mui/material'

function Product() {

    const [datas , setDatas] = useState([])
    const [currentPage , setCurrentPage] = useState(1)
    let url = `https://fakestoreapi.com/products`

    const fetchData = async() =>{
        try {
            const response = await axios.get(url);
            setDatas(response.data)
            // console.log(response);
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() =>{
        fetchData()

    },[])

    console.log('rammmmmmmmmmmmmmmmmmmmmmmm' , datas)
  return (
    <>
       <DisplayProduct datas={datas}/>
      
    </>
  )
}

export default Product
