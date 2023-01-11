import React from 'react';
import "./electronic.css"

const Electronic = () => {
    return (
        <div className='product-type'>
            <form action="submit-form.php" method="post">
                <label for="name">Product Name   </label><br/>
                <input type="text" id="name" name="name" /><br />

                <label for="product">Product Category</label>
                <select id="product" name="product">
                    <option value="product1">Tv</option>
                    <option value="product2">Mobile</option>
                    <option value="product3">Laptop</option>
                </select><br /><br />
                <div className='product-condition'>
                    <h4>Product Condition</h4>
                    <input type="radio" id="brand-new" name="condition" value="" />
                    <span>&nbsp;New</span> &nbsp;
                    <input type="radio" id="used" name="condition" value="" />
                   <span> &nbsp;Used</span>&nbsp;
                    <input type="radio" id="Refurbished" name="condition" value="" />
                    <span> &nbsp;Refurbished</span>
                </div>
                <br />
                <label for="quantity">Price: <span>&nbsp;</span> <span>&nbsp;</span></label>
                <input type="number" id="quantity" name="quantity" min="1" max="100000" /><br /><br />
                <input type="submit" value="Submit" style={{ display: "flex", justifyItems: "center" }} />
            </form>
        </div>
    )
};

export default Electronic;