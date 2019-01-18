import React, { Component } from 'react';
import pcImage from './images/pcImage.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="Title"> {/* App.css 스타일 참조*/}
            <div>EUNJI HAN</div>
        </div>
        <div className="Body">
          <div className="Bodyed">
            <div style={{ flex: 1,backgroundImage: "url("+pcImage+")", backgroundSize: 'cover', width: window.width, height: window.outerHeight}}>
              <div className="BG"> 
                <div className="MySelf">
                    <div className="MyselfContent">
                        <div className="MyName">Eunji Han</div>
                        <div className="PhoneNumber">Phone Number</div>
                        <div className="Input">+82 10 2881 9649</div>
                        <div className="PhoneNumber">Email</div>
                        <div className="Input">dmswl3288@naver.com</div>
                        <div className="PhoneNumber">Address</div>
                        <div className="Input">36, Doyak-ro, Bucheon-si, Gyeonggi-do, Republic of Korea</div>
                    </div>
                    <div style={{ alignItems: 'center', justifyContent: 'center'}}>
                      <div className="SNS">
                         <div className="Welcome">Welcome!</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="Contents">덕성여자대학교 IT미디어공학과에 입학하여 컴퓨터와 디자인, 미디어 등
            다양한 분야를 배웠습니다. 3학년이 되고 나서 전공과목으로 Android와 IoT 등을 배웠고 점점 개발에 
            재미를 느끼기 시작했습니다. 그때 이후로 열정이 생겨 오로지 하고 싶은 마음으로 게임, 환경, 실생활과 관련된 
            다양한 앱과 소프트웨어를 개발했습니다. 몇가지 만든 앱은 구글 플레이에 프로덕션 출시를 했고, 다른 사람들이
            제가 만든 앱을 공유하고 즐기는 것에 너무 가슴이 뛰었습니다. 
            <div style={{marginTop: 40}}></div>
            프로그래밍을 배워야 하는 목적을 깨닫고 나서 개발할 수 있다는 것에 
            너무 감사했습니다. 또한, 저는 많은 사람들에게 즐거움을 주기 위해 개발하는 그 자체만으로도 행복합니다.
            그리고 제 열정은 현재진행중입니다.</div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
