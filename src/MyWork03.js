import React, { Component } from 'react';
import './MyWork01.css';
import secret from './images/Secret.png';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class MyWork03 extends Component {

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
                        <div style={{ flex: 1, backgroundImage: "url("+secret+")", backgroundSize: 'cover', width: 800, height: 600}}></div>
                    </div>
                    <div className="Info">
                        <div style={{paddingTop: 20, paddingLeft: 20, paddingRight: 60}}>
                            <div className="Number">03</div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="Airlevel">Secret</div>
                            <div style={{fontSize: 15, fontWeight: 600}}>1인 개발</div>
                            <div>누구에게 알리고 싶지 않는 나만의 공간 Secret입니다.
                                남몰래 하고 싶은 일이나 버킷리스트, 해야 할 일 등을 메모해 두어
                                비밀을 유지하세요.
                                내가 가지고 있는 각 사이트의 수많은 아이디와 비밀번호를 한 곳에
                                모아 비밀을 유지하세요.
                                <br/><br/><br/>
                                자주 깜박깜박 잊어버리는 아이디와 비밀번호를 안전한 곳에 보관하여
                                기억이 나지 않을 때마다 로그인 인증을 통해 나만의 정보를 확인할 수 있습니다.  
                            </div>
                            <br/>
                            <div className="Tool">개발 언어 및 도구</div>
                            <br/>
                            <div style={{paddingLeft: 20}}>- JavaScript, PHP, JAVA</div>
                            <div style={{paddingLeft: 20}}>- React-Native / Navigation</div>
                            <div style={{paddingLeft: 20}}>- MySQL</div>
                            <div style={{paddingLeft: 20}}>- Android Studio</div>
                            <br/>
                            <div style={{width: 100, height: 40}}>
                                <a href="https://github.com/dmswl3288/RNN-Project01" style={{textDecoration: 'none'}}>
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

export default MyWork03;