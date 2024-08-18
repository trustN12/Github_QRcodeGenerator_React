import React, { useState } from 'react'

const Qrcode = () => {

  const[url, setUrl] = useState('')
  const[generateURL, SetGenerateURL] =useState('')
  const [showAlert, setShowAlert] = useState(false)

  const resetBtn = () => {
    setUrl('');
    SetGenerateURL('')
    setShowAlert(false)
  }

  const isValidURL = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  const handleGenerate = () => {

        if(url && isValidURL(url)){
            SetGenerateURL(url)
            setShowAlert(true)
        } else{
            setShowAlert(true)
        }
        
  }

  return (
    <>

    {/* INPUT AND THE ALL BUTTONS  */}

    <div className='flex shadow rounded-lg overflow-hidden mt-5 ml-5 mr-5'>

          <input type='url' name='url' value={url} placeholder='Type your link here' className='outline-none w-full py-2 px-3 ' onChange={(e) => setUrl(e.target.value)} />

          

    </div>



    <div className='flex justify-center gap-7 rounded-lg mt-10'>
               
                 {/* GENERATE BUTTON */}

          <button className='outline-none rounded-md  bg-gray-800 hover:bg-slate-950 active:bg-indigo-700  text-white px-14 py-2 shrink-1 font-mono'   onClick={handleGenerate}>Generate</button>

                  {/* RESET BUTTON */}

          <button className='font-mono text-white outline-none rounded-md bg-fuchsia-800 hover:bg-orange-700 active:bg-emerald-300 px-14 py-2 shrink-0.5' onClick={resetBtn}>Reset</button>

      </div>


      {/* CUSTOM ALERT MODAL */}
          {showAlert && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">QR Code Generator Says</h3>
                <p className="text-gray-700 mb-6">
                  {url && isValidURL(url) ? "Your QR code has been successfully generated!" : "Please enter a valid URL to generate the QR code."}
                </p>
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md"
                  onClick={() => setShowAlert(false)}
                >
                  OK
                </button>
              </div>
            </div>
      )}


    {/* QR CODE PNG SECTION */}


    <h3 className='text-xl bg-clip-text text-transparent bg-white font-bold mb-2 text-center font-mono mt-20'>Your QR Code Will Be Displayed Below</h3>
    


    <div className="flex justify-center mt-12">

        {
          
          generateURL && 
          (
          <img src={`https://quickchart.io/qr?text=${encodeURIComponent(url)}&format=png&margin=4&size=200`}/>
          )

        }

    </div>





   
    </>
  )
}

export default Qrcode