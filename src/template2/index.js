import React from 'react'
import './index.css'
export default function index() {
    const isload = false
    return (
        <div className='body'>
            <div className='rhine-lab-title'>
                <p className='rhine-lab-text-1 rhine-lab-title1'><span>RHINE LAB</span></p>
                <p className='rhine-lab-text-2 rhine-lab-title2'><span>SYNTHESIZE INFORMATION</span></p>
                <p className=' rhine-lab-title3'><span className='rhine-lab-text-3'>ANALYSIS </span><span className='rhine-lab-text-5'>OS</span></p>
            </div>
            <div className='contant center'>
                {isload === false ?
                    <div className='flex'>
                        <div className='rhine-lab'>
                            <div className='rhine-lab-logo' />
                            <div className='rhine-lab-name rhine-lab-text-4'>
                                <p>R</p>
                                <p>H</p>
                                <p>I</p>
                                <p>N</p>
                                <p>E</p>
                                <p>∙</p>
                                <p>L</p>
                                <p>A</p>
                                <p>B</p>
                            </div>
                        </div>
                        <div className='singin-form'>
                            <form>
                                <div>USERNAME : <input className='rhine-lab-text-2' type={'text'} /></div>
                                <div>PASSWORD : <input className='rhine-lab-text-2' type={'password'} /></div>
                            </form>
                        </div>
                    </div> :
                    <div className='load'>
                        <div className='circle1 center'>
                            <div className='circle2 center'>
                                <div className='circle4' />
                                <div className='circle3 center'><div className='circle6' /><div className='circle5' /><div className='circle6' /></div>
                                <div className='circle4' />
                            </div>
                        </div>
                    </div>}
            </div>
            <div className='powered-by'>
                <p><span className='rhine-lab-text-2'>POWERED BY</span> <span className='rhine-lab-text-4'>RHINE LAB -</span></p>
            </div>
        </div>
    )
}
