import { useState } from 'react';
import Electronic from '../productType/electronic/Electronic';
import "./sell.css"

function Sell() {
  const [imgfile, uploadimg] = useState([]);
  const [product, setProduct] = useState("");



  const handleChange = e => {
    setProduct(e.target.value)
  }
  console.log("Image FIles", imgfile);
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
    }
  }
  return (
    <div className="sell-main">
      <div className='upload-sell-images'>
        <div>
          <h3>Select Photos</h3>
          <input type="file" onChange={imgFilehandler} />
          <hr style={{ width: "500px" }} />
        </div>

        <div>
          <h2>Preview</h2>
          {imgfile.map((elem) => {
            return <>
              <span key={elem}>
                <img src={elem} height="100" width="100" alt="med1" />
              </span>
            </>
          })}
        </div>
      </div>
      <div className='product-type-info'>
        <div>
          <label for="product"><h4>Select Your Product Type</h4></label>
          <select onClick={handleChange} id="product" name="product">
            <option >select your product type</option>
            <option value="electronic">Electronic</option>
            <option value="fashion">Fashion</option>
            <option value="services">Services</option>
            <option value="luxury">Luxury</option>
            <option value="clothes">Clothes</option>
            <option value="mobile">Mobile</option>
            <option value="cars">Cars</option>
            <option value="house-staff">House staff</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div>
          {
            product == "electronic" ? <Electronic /> :
              product == "fashion" ? <div><h3>Fashion</h3></div> :
                product == "services" ? <div><h3>Services</h3></div> :
                  product == "luxury" ? <div><h3>Luxury</h3></div> :
                    product == "clothes" ? <div><h3>Clothes</h3></div> :
                      product == "mobile" ? <div><h3>Mobile</h3></div> :
                        product == "cars" ? <div><h3>Cars</h3></div> :
                          product == "house-staff" ? <div><h3>House staff</h3></div> :
                          product == "books" ? <div><h3>Book</h3></div> :
                            <div><h3></h3></div>
          }
        </div>
      </div>
    </div>
  );
}
export default Sell;