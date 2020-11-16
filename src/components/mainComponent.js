import React, { Component }  from 'react';

class Main extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div class="col-6">
                        <img src="/assets/images/7Eleven.JPEG" alt="" className="img-fluid" />
                    </div>
                    <div class="col-6">
                        <img src="/assets/images/logo.png" alt="" class="img-fluid rounded" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;