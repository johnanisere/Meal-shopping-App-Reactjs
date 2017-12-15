import React, { Component } from 'react';
import '../style/nochef.css';
import '../style/App.css';
import PageBackground from '../frontpage/PageBackground';
import Footer from '../frontpage/Footer';
import HeaderCheckout from './HeaderCheckout';


const Nochefavailable=(props)=>{
    return(
        <div className="deven">
        <HeaderCheckout user={props.user}
                        signout={props.signout}
                        cart={props.cart}
                        chefResult={props.chefResult} />
        <PageBackground loc={[props.address.lat,props.address.lng]}/>
        <div id="no-chef-available">
            <div id="no-chef-available-holder">
            {(!props.error.message)?
            <h3>
                We are deeply sorry!
                {" "+props.error.response.data}
            </h3>:
            <h3>
                We are deeply sorry!
                {" "+props.error.message}
            </h3>
            }
            {(props.error.response)?
                <h5>
                    My Bukka isn't available in this area right now. But we're continuing to expand please check back soon!
                </h5>:
                <h5>
                    Please try again
                </h5>
            }
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Nochefavailable;