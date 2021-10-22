import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

class PageFront extends Component {
    state = {}
    render() {
        return (

            <React.Fragment>
                <Navbar />
                <div className="container xyz">
                    <center>
                        <h3 style={{ marginTop: "10%" }}> Get started with <button className="btn-primary btn-lg"> REMKIT CLOUD </button> in less than 100 seconds.  </h3>
                        <h3 style={{ marginTop: "20px" }}> Take control of your data with <button className="btn-primary btn-lg"> REMKIT SELF HOSTED </button> in less than 50 USD.  </h3>
                    </center>
                </div >
                <Footer />
            </React.Fragment >
        );
    }
}

export default PageFront;