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
            <div  data-aos="fade-up" data-aos-duration="3000" className="Contents">
            안녕하세요. 저는 IT미디어공학을 전공으로 컴퓨터와 디자인, 미디어 등의 다양한 분야를 배워 온 한은지입니다. 
            C/C++ Programming을 시작으로 JAVA, C#, JavaScript, Python, Html 등의 언어와 자료구조, 컴퓨터 통신, 운영체제 등의 컴퓨터 과학을 배웠습니다. 
            <div style={{marginTop: 20}}></div>
            Android, IoT, Unity3D, 3D max, openGL, Photoshop, After Effect, Illustrator 등의 다양한 프로그램과 
            기술을 통해 디자인, 그래픽, 게임, Application 개발을 공부했습니다. 이것들을 기반으로 여러 소프트웨어를 
            개발하였고 점점 개발의 재미를 느끼기 시작했습니다.
            <div style={{marginTop: 20}}></div>
            휴학 기간 중 게임, 환경, 실생활, 미디어 등과 관련된 다양한 앱을 개발하였고 몇 가지 완성된 앱은 Google Play와 
            One Store에 출시를 했습니다. 저는 이 경험을 통해 다른 사람들이 제가 개발한 앱을 공유하고 즐기는 모습을 볼 수 있었고 스스로 열정을 느꼈습니다.
            <div style={{marginTop: 20}}></div>
            단 하나의 컴퓨터만으로도 수많은 사람들에게 행복과 편리함을 줄 수 있는 직업은 개발자가 유일하다고 생각합니다. 
            저는 프로그래밍을 배워야 하는 목적을 깨닫고 나서 개발할 수 있다는 것에 감사했습니다. 
            받는 것보다 누군가에게 주는 것을 좋아하는 저는 많은 사람들에게 즐거움을 주기 위해 개발하는 일 자체만으로도 행복합니다.
            </div>
          </div>
        </body>
        <Skill/>
        <MyWork01/>
        <MyWork02/>
        <MyWork03/>
        <MyWork04/>
        <MyWork05/>
        <div style={{ display: 'flex', marginTop: 250, height: 400, backgroundColor: '#2c1c3e'}}>
          <div className="ContactLayout">
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
