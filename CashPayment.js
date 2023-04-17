import React from 'react'
import "./Style.css"
import "./Style2.css"

export default function CashPayment() {
    return (
        <div className='MainBody'>
            <div className="SideDashBorad">
                <div className='TextBord '>Speedy Food</div>
                <div className='DashBoradOption1'>Dashborad</div>
                <div className='DashBoradOption2' >Total Table's</div>
                <div className='DashBoradOption3' >Food</div>
                <div className='DashBoradOption4'>Analyse</div>
                <div className='DashBoradOption5' style={{backgroundColor:"#3664F4"}}>Cash Payment</div>
                <div className='Reciptionist'>Reciptionist
                    <div className='imgRecept'></div>
                </div>
                <div className="DashBorde">
                    CashPayment
                </div>

                <div className='Row1'> Scan Qr To Pay</div>
                <div className='Row1space'> Scan Now</div>
                <h3 className='header'>Cash Payment List</h3>

                <div className='Tableheader'> Order Id</div>
                <div className='Tableheaderspace'> Price</div>
                <hr className='hrline'></hr>

                <div className='Order1'>1234567</div>
                <div className='Order1Price'>467</div>

                <div className='Order2'>12347</div>
                <div className='Order2Price' >467</div>

                <div className='Order3'>12347</div>
                <div className='Order3Price' >467</div>

                <div className='Order4'>12347</div>
                <div className='Order4Price' >467</div>

                <div className='Order5'>12347</div>
                <div className='Order5Price' >467</div>
            </div>
        </div>
    )
}