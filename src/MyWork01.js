import React, { Component } from 'react';
import './MyWork01.css';
import airLevel from './images/Airlevel.png';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class MyWork01 extends Component {

    componentDidMount(){
        AOS.init();
    }

    render(){
        return(
            <div>
              <head>
              <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
              </head>

              <div className="Entire">
              <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
                <div className="Top">
                    <div className="Portfolio">Portfolio</div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="MyWorks">My Works</div>
                    <div data-aos="fade-up" data-aos-duration="1000" className="Line"></div>
                </div>

                <div className="MyWorksContent">
                    <div className="Capture">
                        <div style={{ flex: 1, backgroundImage: "url("+airLevel+")", backgroundSize: 'cover', width: 800, height: 600}}></div>
                    </div>
                    <div className="Info">
                        <div style={{paddingTop: 20, paddingLeft: 20, paddingRight: 80}}>
                            <div className="Number">01</div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="Airlevel">AirLevel 에어레벨</div>
                            <div style={{fontSize: 15, fontWeight: 600}}>1인 개발</div>
                            <div>한국환경공단에서 제공하는 기본적인 미세먼지 수치를 매시간마다 확인 할 수 있으며,
                                그에 따른 (좋음/보통/나쁨/매우나쁨)단계를 나누어 위험도를 쉽게 알 수 있는 앱입니다.
                                <br/><br/><br/>
                                실시간으로 미세먼지 위성지도 확인이 가능하며, 다른 미세먼지 정보 사이트와 비교 할 수 있습니다. 
                            </div>
                            <br/><br/><br/>
                            <div className="Tool">개발 언어 및 도구</div>
                            <br/>
                            <div style={{paddingLeft: 20}}>- JAVA Programming</div>
                            <div style={{paddingLeft: 20}}>- Android Studio</div>
                            <div style={{paddingLeft: 20}}>- Open API</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

export default MyWork01;