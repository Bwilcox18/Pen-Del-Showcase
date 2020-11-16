
import React, { Component }  from 'react';

class Main extends Component {
    render() {
        return(
            <div className="container">
                <div className="row py-3">
                    <div className="col-6" >
                        <h1>
                            Before
                        </h1>
                    </div>
                    <div className="col-6" >
                        <h1>
                            After
                        </h1>
                    </div>
                </div>
                <div className="row pb-3">
                    <div class="col-6">
                        <img src="/assets/images/bai.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                    <div class="col-6">
                            <img src="/assets/images/Door.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                </div>
                <hr />
                <div className="row py-3">
                    <div class="col-6">
                        <img src="/assets/images/gatorade.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                    <div class="col-6">
                            <img src="/assets/images/milk.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                </div>
                <hr />
                <div className="row py-3">
                    <div class="col-6">
                        <img src="/assets/images/soda.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                    <div class="col-6">
                            <img src="/assets/images/water.jpg" alt="" width="400" className="rounded img-thumbnail" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;