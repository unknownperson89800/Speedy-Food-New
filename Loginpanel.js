import React from 'react';
import "./Style.css"
import "./Style2.css"

export default function LoginPanel() {
    return (
        <div className='Lmain'>
            <div className="leftElips">

            </div>
            <div className="RightElips">
                
            </div>
            <div className="LoginText">
                <b> <h2 className='Line' >Speedy Food</h2> </b>
                <br />
                <div className="form__group field">
                    {/* <input type="input" class="form__field" placeholder="  Username" name="name" id='name' required /> */}
                </div>

                <div className="form__group field">
                    {/* <input type="input" class="form__field" placeholder="  Password" name="name" id='name' required /> */}
                </div>
                <div className="container my-5 mybtn">
                    {/* <button className="btn btn-danger" > Log in </button > */}
                    {/* <a className='mx-2 my-5' href="Dashborad">Go to Dashborad</a> */}
                </div>
            </div>
            <div className="loginBox">
                <div className="Text underline">
                    Log in
                </div>
                <div className="imageMarketing">
                    <img src="Marketing.png" alt="" />
                </div>
                <div className="form">
                <input type="input" class="form__field" placeholder="  Username" name="name" id='name' required />
                </div>
                <div className="form2">
                <input type="input" class="form__field" placeholder="  Password" name="name" id='name' required />
                </div>
                <div className="btnplace my-5">
                     <button className="btn" > Log in </button > 
                </div>
            </div>
        </div>
    )
}
