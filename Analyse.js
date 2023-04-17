import React from 'react'
import "./Style.css"
import "./Style2.css"

export default function Analyse() {
    return (
        <div className='MainBody'>
            <div className="SideDashBorad">
                <div className='TextBord '>Speedy Food</div>
                <div className='DashBoradOption1'>Dashborad</div>
                <div className='DashBoradOption2' >Total Table's</div>
                <div className='DashBoradOption3' >Food</div>
                <div className='DashBoradOption4' style={{backgroundColor:"#3664F4"}}>Analyse</div>
                <div className='DashBoradOption5'>Cash Payment</div>
                <div className='Reciptionist'>Reciptionist
                    <div className='imgRecept'></div>
                </div>
                <div className="DashBorde">
                    Analyse
                </div>

                <div className='Card1'> 
          <div className='CardDetail'>Today’s Coustmer's</div>
          <div className="Result" >250</div>
        </div>

        <div className='Card2'> 
          <div className='CardDetail'>   Week's in Coustmer</div>
          <div className="Result fontset" >12000</div>
        </div>

        <div className='Card3'> 
          <div className='CardDetail'>Mounth's in Coustmer</div>
          <div className="Result" >500</div>
        </div>

        <div className='Card4'> 
          <div className='CardDetail'>Mounthly income</div>
          <div className="Result" >500</div>
        </div>

        <div className='avgbar'>
          <div className='Textbar'>Avg review</div>
          <div className='parval'>87%</div>
          <div className='bar'>
            <div className='filedbar'></div>
          </div>
        </div>

        <div className='graph1'>
          <div className='graph1Text'>Coustmer</div>
          <div className="lines" ></div>
        </div>
        <div className='graph2'>
        <div className='graph2Text'>Income</div>
          <div className="lines" ></div>
        </div>
        <div className='graph3'>
        <div className='graph3Text'>Total Avalable Table's</div>
        </div>
            </div>
        </div>
    )
}