import React, { Component } from 'react';
import './MyWork01.css';
import reBrain from './images/ReBrain.png';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class MyWork05 extends Component {

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
                    <div className="Capture">
                       <img src={reBrain} className="ImageSize"></img>
                    </div>
                    <div className="Info">
                        <div className="InfoLayout">
                            <div className="Number">05</div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="Airlevel">리브레인 RE-Brain : 기억게임</div>
                            <div style={{fontSize: 15, fontWeight: 600}}>1인 개발</div>
                            <div>짧은 시간 동안 색이 바뀐 사각형을 단시간안에 기억하여 그 사각형의 위치를
                                맞추는 Application입니다.
                                <br/><br/><br/>
                                사각형의 위치를 정확하게 한번에 맞추게 되면, 다음 단계로 바로 넘어 갈 수
                                있습니다.  
                            </div>
                            <br/><br/>
                            <div className="Tool">개발 언어 및 도구</div>
                            <br/>
                            <div style={{paddingLeft: 20}}>- C# Programming</div>
                            <div style={{paddingLeft: 20}}>- Unity3D</div>
                            <br/><br/>
                            <div style={{width: 100, height: 40}}>
                                <a href="https://github.com/dmswl3288/GameProjects/tree/master/RE-Brain/Scripts" style={{textDecoration: 'none'}}>
                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 100, height: 40, background: '#2c1c3e', borderRadius: 40}}>
                                      <div style={{fontSize: 15, color: 'white', textAlign: 'center'}}>github</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        );
    }
}

export default MyWork05;