import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import '/Users/YanYang/test/src/css/Carousel.css';

function CArousel () {
    return (
    <Carousel autoplay >
      <div>
        <h3>
            Really ?
        </h3>
      </div>
      <div>
        <h3>
            I don't think so 
        </h3>
      </div>
      <div>
        <h3>
            DO YOUR JOB !!
        </h3>
      </div>
      <div>
        <h3>
            RUN FOR YOUR LIVES !!
        </h3>
      </div>
    </Carousel>
    );
}

export default CArousel ;