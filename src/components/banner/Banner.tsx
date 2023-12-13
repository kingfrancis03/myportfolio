import React, { Component } from 'react';
import './Banner.css'

interface BannerState {
  // Define state properties if needed
}

class Banner extends Component<{}, BannerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Initialize state properties if needed
    };
  }

  render() {
   return(
     <div className="justify-content-center mx-auto md-mt-5 xs-mt-5 order-md-1 d-flex flex-column align-items-left">
        <h1 className="my-hello">Hello World!</h1>
        <h1 className="initial-name fs-sm-3 fs-md-4">I'm <span className='my-name'>FRANCIS MAGTUTO</span></h1>
        <h1 className='my-position'><span className='my-a'>A </span> <span className='actual-position'>Web Developer</span></h1>
     </div>
   )
  }
}

export default Banner;