import React, { Component } from 'react';
import "../CSS/footer.css"
import FooterBox from './footerbox';

class Footer extends Component {
    state = {}
    render() {
        const heading1 = <h5>Track Attendence</h5>
        const heading2 = <h5>Monitor Productivity</h5>
        const heading3 = <h5>Protect Your Data</h5>

        return (
            <footer>
                <div className="footer" id="footer">
                    <div className="container line" >
                        <div className="footer-bottom">
                            <div className="row ">
                                <div className="  col-sm-6 col-lg-4 col-md-6">
                                    <FooterBox data={heading1} />
                                </div>
                                <div className="col-sm-6 col-lg-4 col-md-6">
                                    <FooterBox data={heading2} />
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <FooterBox data={heading3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;