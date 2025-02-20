import { useEffect, useState } from 'react'
import './App.css'
import ProductList from './ProductList'
import { getProductList } from './api';
import NoMatching from './NoMatching';
import Loading from './Loading';


function ProductListPage() {

  const [productList, setproductList] = useState([]);
  const [loading, setLoading] = useState(true)

  const [query , setQuery] = useState('')
  const [sort, setSort] = useState('default') 
   
  useEffect(function(){
    const xyz=getProductList();

    xyz.then(function (products) {
      setproductList(products)
      setLoading(false)
    })  
  },[])  


  let data = productList.filter(function(item){
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1; 
  })


  function handlechange(event){

    setQuery(event.target.value);

  }

  if(sort == 'price')
  {
    data = data.sort(function(x,y)
  {
    return x.price - y.price;
  })
  } else if(sort == 'name')
  {
    data.sort(function(x,y){
      return x.title < y.title ? -1 : 1;
    })
  }

  function handleSortChange(event){
    setSort(event.target.value)
  }

  if(loading)
  {
    return <Loading/>
  }

  return (
    <div className='p-2 max-w-6xl mx-auto bg-white px-9 py-12 my-16'>
      <input 
      value={query}
      placeholder='search' 
      className='border border-gray-800 rounded-md mb-2'
      onChange={handlechange}
      />
      <select onChange={handleSortChange} 
      value={sort}
      className='border border-gray-700 rounded-md ml-2'> 
        <option value = 'default'>default sort</option>
        <option value = 'name'>sort by name</option>
        <option value = 'price'>sort by price</option>
      </select>
      {data.length > 0 && <ProductList products={data}/>}
      {data.length == 0 && <NoMatching/>}
    </div>
  )
}

export default ProductListPage

