import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const hostname = "http://localhost:5000";

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        let result = await fetch(`${hostname}/products`, {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
                userid: JSON.parse(localStorage.getItem('user'))._id
            }
        });
        result = await result.json();
        console.log("Product", result)
        let userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log("useid:", userId)
        setProducts(result);
    }

    const deleteProduct = async (id) => {
        console.warn(id)
        let result = await fetch(`${hostname}/product/${id}`, {
            method: "Delete",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if (result) {
            getProducts();
        }

    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`${hostname}/search/${key}`, {
                method: "get",
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
            result = await result.json()
    
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }

    }

    return (
        <div className="product-box">
            <h1>Product List</h1>
            <input className='search-product-box' placeholder='Search Product'
                onChange={searchHandle}
            />
            <ul className='product-list'>
                <li>S. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>

            </ul>
            {
                products.length > 0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li >{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button className='update-btn'>
                                <Link to={"/update/" + item._id} >UPDATE </Link>
                            </button>
                            <button className='delete-btn' onClick={() => deleteProduct(item._id)}>DELETE</button>
                        </li>

                    </ul>
                )
                    : <h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList;