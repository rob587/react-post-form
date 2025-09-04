
import axios from 'axios'
import { useState } from 'react'


const Form = () => {

    const url =`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts`

   

    const[formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })

    const handleForm = (e) =>{
        const {name, value} = e.target

            setFormData({
                ...formData, [name] : value === "true" ? true : value === "false" ? false : value
            })
    }

    const handleSubmit = () => {
        axios.post(url, formData).then((res)=>{
            console.log("Risposta API:", res.data)
        })
        .catch((err)=>
        console.log("errore nella chiamata" + err))
    }


  return (
    <>

    <div className="box-title mt-5">
        <h1 className='text-center'>Idee da inserire dentro il blog</h1>
    </div>

    <div className="container my-5 p-4 rounded shadow-lg bg-light">
        <div className="row gy-4">
            <div className="col-6">
                <div>
                    <input type="text"
                    name='author'
                    placeholder='Nome Autore'
                    className='form-control rounded shadow-sm'
                    value={formData.author}
                    onChange={handleForm}
                    />
                </div>
            </div>
            <div className="col-6">
                <div>
                    <input type="text"
                    name='title'
                    placeholder='Nome Opera'
                    className='form-control rounded shadow-sm'
                    value={formData.title}
                    onChange={handleForm}
                    />
                </div>
            </div>
            <div className="col-6">
                <div>
                    <textarea type="text" 
                    name='body'
                    placeholder='Testo Opera'
                    className='form-control rounded shadow-sm'
                    value={formData.body}
                    onChange={handleForm}
                    

                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className='mt-4'>

                        <h2>Vorresti pubblicarlo o renderlo bozza?</h2>
                        <label>
                            
                            <p>Pubblico</p>

                            <input type="radio"
                            name='public'
                            value="true"
                            checked={formData.public===true}
                            onChange={handleForm}
                        
                            />
                            <p>Bozza</p>
                            <input type="radio"       
                            name='public'
                            value="false"
                            checked={formData.public===false}
                            onChange={handleForm}
                            />
                         </label>       
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-success fs-3 p-3 rounded-3 shadow" onClick={handleSubmit} >Aggiungi Post</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Form
