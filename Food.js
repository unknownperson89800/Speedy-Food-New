import React from 'react'
import "./Style.css"
import "./Style2.css"

export default function Food() {
    return (
        <div className='MainBody'>
            <div className="SideDashBorad">
                <div className='TextBord '>Speedy Food</div>
                <div className='DashBoradOption1'>Dashborad</div>
                <div className='DashBoradOption2' >Total Table's</div>
                <div className='DashBoradOption3' style={{backgroundColor:"#3664F4"}}>Food</div>
                <div className='DashBoradOption4'>Analyse</div>
                <div className='DashBoradOption5'>Cash Payment</div>
                <div className='Reciptionist'>Reciptionist
                    <div className='imgRecept'></div>
                </div>
                <div className="DashBorde">
                    DashBoard
                </div>

                
            </div>
        </div>
    )
}