import React,  {useState, useEffect} from "react";

const CustomTable = () =>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json.products))
    },[])


    return (
        <div style={{margin : 50}}>
            {products?.length > 0 ? (
                <>
                <table style={{borderCollapse: "collapse"}}>
                    <thead>
                        <tr>
                            <td>Айди</td>
                            <td>Название</td>
                            <td>Описание</td>
                            <td>Цена</td>
                            <td>ИЗображение</td>
                        </tr>
                    </thead>
                    <tbody>
                {
                    products?.map(product=>{
                        return <tr key={product.id}>
                            <td style={{border: "solid red 1px"}}>{product.id}</td>
                            <td style={{border: "solid red 1px"}}>{product.title}</td>
                            <td style={{border: "solid red 1px"}}>{product.description}</td>
                            <td style={{border: "solid red 1px"}}>{product.price}</td>
                            <td style={{border: "solid red 1px"}}><img src={product.image[0]} width={100} height={100}/></td>
                        </tr>
                    })
                }        
                    </tbody>
                </table>
                </>
            ) : (<>У вас пустые полки</>)}

        </div>
       
    )
}

export default CustomTable;
