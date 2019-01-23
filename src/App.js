import React, { Component } from 'react';
import pcImage from './images/pcImage.jpg';
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';
import './App.css';
import Skill from "./Skill";
import MyWork01 from "./MyWork01";
import MyWork02 from "./MyWork02";
import MyWork03 from "./MyWork03";
import MyWork04 from "./MyWork04";
import MyWork05 from "./MyWork05";

class App extends Component {

  componentDidMount(){
    AOS.init();
  }

  render() {
    return (
      <div className="Total">
        <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
        </head>
        <div className="Title">
            <div>EUNJI HAN</div>
        </div>
        <body className="Body">
        <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
          <div className="Bodyed">
            <div className="PcImg">
              <div className="BG"> 
                  <div  data-aos="zoom-in-down" data-aos-duration="2000" className="MySelf">
                    <div>
                        <div className="Software">Software</div>
                        <div style={{textAlign: 'center', color: '#292929', fontSize: 60, fontWeight: 800}}>&amp;</div>
                        <div className="MyName">Development</div>
                    </div>
                    <div>
                        <div className="SNS">
                          <div  data-aos="zoom-in" data-aos-duration="2000" className="Welcome">About me</div>
                        </div>
                    </div>
                </div>
              </div>
           </div>
            <div  data-aos="fade-up" data-aos-duration="3000" className="Contents">덕성여자대학교 IT미디어공학과에 입학하여 컴퓨터와 디자인, 미디어 등
            다양한 분야를 배웠습니다. 3학년이 되고 나서 전공과목으로 Android와 IoT 등을 배웠고 점점 개발에 
            재미를 느끼기 시작했습니다. 그때 이후로 열정이 생겨 오로지 하고 싶은 마음으로 게임, 환경, 실생활과 관련된 
            다양한 앱과 소프트웨어를 개발했습니다. 몇가지 만든 앱은 구글 플레이에 프로덕션 출시를 했고, 다른 사람들이
            제가 만든 앱을 공유하고 즐기는 것에 너무 가슴이 뛰었습니다. 
            <div style={{marginTop: 40}}></div>
            프로그래밍을 배워야 하는 목적을 깨닫고 나서 개발할 수 있다는 것에 
            너무 감사했습니다. 또한, 저는 많은 사람들에게 즐거움을 주기 위해 개발하는 그 자체만으로도 행복합니다.
            그리고 제 열정은 현재진행중입니다.</div>
          </div>
        </body>
        <Skill/>
        <MyWork01/>
        <MyWork02/>
        <MyWork03/>
        <MyWork04/>
        <MyWork05/>
        <div style={{ display: 'flex', marginTop: 250, height: 400, backgroundColor: '#2c1c3e'}}>
          <div style={{display: 'flex', flexDirection: "column", paddingLeft: 50, justifyContent: 'center'}}>
            <div style={{color: 'yellow', fontSize: 25, marginBottom: 40, fontWeight: 700}}>CONTACT</div>
            <div className="PhoneNumber">Phone Number</div>
            <div className="Input">+82 10 2881 9649</div>
            <div className="PhoneNumber">Email</div>
            <div className="Input">dmswl3288@naver.com</div>
            <div className="PhoneNumber">Address</div>
            <div className="Input">36, Doyak-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
