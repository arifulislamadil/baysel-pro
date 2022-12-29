import { useState } from 'react';
import "./sell.css"

function Sell() {
  const [imgfile, uploadimg] = useState([])
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
        <label for="country"><h4>Select Your Product Type</h4></label>
        <select id="country" name="country">
          <option value="australia">Electronic</option>
          <option value="canada">Fashion</option>
          <option value="usa">Services</option>
          <option value="usa">Luxury</option>
          <option value="usa">Clothes</option>
          <option value="usa">Mobile</option>
          <option value="usa">Cars</option>
          <option value="usa">House staff</option>
          <option value="usa">Books</option>
        </select>
      </div>
    </div>
  );
}
export default Sell;