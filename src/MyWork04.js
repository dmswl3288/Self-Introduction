import React, { Component } from 'react';
import './MyWork01.css';
import shoot from './images/ShootingStar.png';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class MyWork04 extends Component {

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
                        <div style={{paddingTop: 20, paddingLeft: 80, paddingRight: 40}}>
                            <div className="Number">04</div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="Airlevel">슈팅스타</div>
                            <div>슈팅스타는 기존 FPS 게임에 증강현실(AR)기술을 더한 모바일 대전게임입니다.
                                사용자는 다른 기기 필요없이 방을 만들거나 이미 만들어진 방에 들어가 
                                상대와 겨루어 승패를 얻게 됩니다.
                                <br/><br/><br/>
                                이 게임은 졸업작품을 위해 제작된 학과 프로젝트입니다.
                            </div>
                            <br/><br/><br/>
                            <div className="Tool">개발 언어 및 도구</div>
                            <br/>
                            <div style={{paddingLeft: 20}}>- C# Programming</div>
                            <div style={{paddingLeft: 20}}>- Unity3D</div>
                            <div style={{paddingLeft: 20}}>- Vuforia SDK</div>
                            <div style={{paddingLeft: 20}}>- Photon Cloud</div>
                        </div>
                    </div>
                    <div className="Capture2">
                        <div style={{ flex: 1, backgroundImage: "url("+shoot+")", backgroundSize: 'cover', width: 800, height: 600}}></div>
                    </div>
                    
                </div>
              </div>
            </div>
        );
    }
}

export default MyWork04;