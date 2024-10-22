import React, {useEffect, useState} from 'react';
import '../components/ShippingAddress.css';
import axios from 'axios'

const ShippingAddress = ({shippingAddress,setShippingAddress,isFieldsValid}) => {

    const caseChanger = (str) => {
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const getZipData = async () => {
        try {
            const response = await axios.get(`https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd?api-key=579b464db66ec23bdd000001240e8951c9cf467e58512d4fd7cca7a6&format=json&filters[pincode]=${shippingAddress.zipcode}`,{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log("zip data", response.data.records[0].statename)
            const data = response.data.records[0]
            setShippingAddress((prev)=>({...prev, state: data.statename}))
            setShippingAddress((prev)=>({...prev, city : data.officename.split(" ")[0]
                
            }))
          
        } catch (error) {
            console.log("error feting the zip data")
        }
    }

  const getShippingDetails = (e) => {
    const {name,value} = e.target;
    setShippingAddress( (prev) => ({...prev, [name] : value}))
  }

  const validateFields = () => {
   const {name,phone,zipcode,locality,deladdress,city,state,landmark,alternatephone} = shippingAddress;
   const isPhoneValid = phone && phone.length === 10 && /^\d+$/.test(phone);
   const isAltPhoneValid = alternatephone && alternatephone.length === 10 && /^\d+$/.test(alternatephone);
   const isZipCodeValid = zipcode && zipcode.length === 6 && /^\d+$/.test(zipcode);
   const areFieldsValid = name && locality && deladdress && city && state && landmark
   if(isAltPhoneValid && isZipCodeValid && isPhoneValid && areFieldsValid){
    isFieldsValid(true)
   }else{
    isFieldsValid(false)
   }
  }

  console.log(shippingAddress)

    useEffect(() => {
        getZipData()
    }, [shippingAddress.zipcode])

    useEffect(()=>{
      validateFields()
    },[shippingAddress])
 

  return (
    <div className='info-box'>
        <div className='info-title'>Shipping Address </div>
        <div className='info-first-lastname'>
              <div className='info-first-name'>
                  <div className='info-name-text'>NAME <span className='astrik'>*</span></div>
                  <div className='info-input'>
                  <input name='name' value={shippingAddress.name} onChange={getShippingDetails} className='info-input-field' placeholder='Name' />
                  </div>
              </div>

              <div className='info-first-name'>
                  <div className='info-name-text'>PHONE <span className='astrik'>*</span></div>
                  <div className='info-input'>
                      <input name='phone' value={shippingAddress.phone} onChange={getShippingDetails} className='info-input-field' placeholder='Phone' />
                  </div>
              </div>
          </div>
          <div className='info-first-lastname'>
              <div className='info-first-name'>
                  <div className='info-name-text'>ZIP CODE <span className='astrik'>*</span></div>
                  <div className='info-input'>
                  <input name='zipcode' value={shippingAddress.zipcode} onChange={getShippingDetails} className='info-input-field' placeholder='Zip Code' />
                  </div>
              </div>

              <div className='info-first-name'>
                  <div className='info-name-text'>LOCALITY <span className='astrik'>*</span></div>
                  <div className='info-input'>
                      <input name='locality' value={shippingAddress.locality} onChange={getShippingDetails} className='info-input-field' placeholder='Locality' />
                  </div>
              </div>
          </div>
          <div className='info-field-box'>
              <div className='info-name-text'>ADDRESS <span className='astrik'>*</span></div>
              <div className='info-input'>
                  <textarea name='deladdress' value={shippingAddress.deladdress} onChange={getShippingDetails} style={{height:"100px"}} className='info-input-field' placeholder='Your Address' />
              </div>
          </div>
          <div className='info-first-lastname'>
              <div className='info-first-name'>
                  <div className='info-name-text'>CITY/DISTRICT/TOWN <span className='astrik'>*</span></div>
                  <div className='info-input'>
                      <input name='city' value={shippingAddress.city} onChange={getShippingDetails} className='info-input-field' placeholder='Landmark'/>
                  </div>
              </div>

              <div className='info-first-name'>
                  <div className='info-name-text'>STATE <span className='astrik'>*</span></div>
                  <div className='info-input'>
                      <input name='state' value={caseChanger(shippingAddress.state)} onChange={getShippingDetails} className='info-input-field' placeholder='State' />
                  </div>
              </div>
          </div>
          <div className='info-first-lastname'>
              <div className='info-first-name'>
                  <div className='info-name-text'>LANDMARK</div>
                  <div className='info-input'>
                  <input name='landmark' value={shippingAddress.landmark} onChange={getShippingDetails} className='info-input-field' placeholder='Landmark' />
                  </div>
              </div>

              <div className='info-first-name'>
                  <div className='info-name-text'>ALTERNATE PHONE</div>
                  <div className='info-input'>
                      <input name='alternatephone' value={shippingAddress.alternatephone} onChange={getShippingDetails} className='info-input-field' placeholder='Phone' />
                  </div>
              </div>
          </div>
          
    </div>
  )
}

export default ShippingAddress