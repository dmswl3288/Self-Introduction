import React, { Component } from 'react';
import './MyWork01.css';
import tubeDown from './images/TubeDown.png';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class MyWork02 extends Component {

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

                <div className="MyWorksContent">
                    <div className="Info">
                        <div className="InfoLayout2">
                            <div className="Number">02</div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="Airlevel">Tube Downloader</div>
                            <div style={{fontSize: 15, fontWeight: 600}}>1인 개발</div>
                            <div>원하는 동영상을 다운받아 소장 가능한 어플리케이션입니다.
                                 소장하고 싶은 영상이 맞는지 미리보기가 가능하며, 동영상 파일을
                                 음원파일로 변환하여 저장할 수 있습니다.
                                <br/><br/><br/>
                                최신 영상이 매번 업데이트되어 확인할 수 있으며,
                                파일 이름을 사용자가 마음대로 설정하여 저장할 수 있습니다. 
                            </div>
                            <br/>
                            <div className="Tool">개발 언어 및 도구</div>
                            <br/>
                            <div style={{paddingLeft: 20}}>- JAVA Programming</div>
                            <div style={{paddingLeft: 20}}>- Android Studio</div>
                            <div style={{paddingLeft: 20}}>- YouTube Data API v3</div>
                            <br/>
                            <div style={{width: 100, height: 40}}>
                                <a href="https://github.com/dmswl3288/TubeDownloader" style={{textDecoration: 'none'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 40, background: '#2c1c3e', borderRadius: 40}}>
                                      <div style={{fontSize: 15, color: 'white', textAlign: 'center'}}>github</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="Capture2">
                        <img src={tubeDown} className="ImageSize"></img>
                    </div>
                    
                </div>
              </div>
            </div>
        );
    }
}

export default MyWork02;