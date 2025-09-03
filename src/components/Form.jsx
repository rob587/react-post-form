import React from 'react'
import App from '../App'
import axios from 'axios'
import { useState } from 'react'


const Form = () => {
  return (
    <>

    <div className="box-title mt-5">
        <h1 className='text-center'>Idee da inserire dentro il blog</h1>
    </div>

    <div className="container my-5">
        <div className="row gy-4">
            <div className="col-6">
                <div>
                    <input type="text"
                    name='name'
                    placeholder='Nome Autore'
                    className='form-control'
                    // value={}
                    // onChange={}
                    />
                </div>
            </div>
            <div className="col-6">
                <div>
                    <input type="text"
                    name='title'
                    placeholder='Nome Opera'
                    className='form-control'
                    // value={}
                    // onChange={}
                    />
                </div>
            </div>
            <div className="col-6">
                <div>
                    <input type="text"
                    name='body'
                    placeholder='Testo Opera'
                    className='form-control'
                    // value={}
                    // onChange={}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div>

                        <h2>Vorrebbe pubblicarlo o renderlo bozza?</h2>
                        <label>
                            
                            <p>Pubblico</p>

                            <input type="radio"
                            name='true'
                            // value={}
                            // onChange={}
                        
                            />
                            <p >Bozza</p>
                            <input type="radio"
                            
                            name='false'
                            // value={}
                            // onChange={}
                            />
                         </label>       
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Form
