import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexPage/ProductIndexItem';
import './SearchIndex.css'

const SearchIndex = () => {
    const dispatch = useDispatch();

    const [results, setResults] = useState([])
    const [searchField, setSearchField] = useState("")

    const products = useSelector(getProducts);

    useEffect(()=>{
        dispatch(fetchProducts())
    }, [])

    const handleChange = (e) => {
        setSearchField(e.target.value);

        if (e.target.value === ""){
            return setResults([])
        }

        const filteredProducts = [];
        products.map(product => {
            if (product.name.toLowerCase().includes(e.target.value.toLowerCase())){
                filteredProducts.push(product)
            }
        })
        setResults(filteredProducts)
    }

    return ( 
        <>
            <div id='search-bar-container'>
                <div id='search-nav-container'>
                    <input id='search-id' type="text" value={searchField} onChange={handleChange}></input>
                </div>
                <div id='search-container'>
                    {results.length !== 0 ? results.map(product => {
                        return <ProductIndexItem product={product} key={product.id}/>
                    }) : <div id='no-results'>Please Enter the Name of a Product you want to search</div> }
                </div>
            </div>
        </>
    )
}

export default SearchIndex