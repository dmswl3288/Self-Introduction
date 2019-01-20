import React, { Component } from 'react';
import "./Skill.css";
import AOS from 'C:/Users/Administrator/react/hello-react/node_modules/aos';
import 'aos/dist/aos.css';

class Skill extends Component {

    componentDidMount(){
        AOS.init();
    }

    render(){
        return(
            <div>
                <head>
                <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
                </head>

                <div className="SkillTable">
                <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
                    <div className="Box01">
                        <div data-aos="zoom-in-right" data-aos-duration="3000">
                            <div className="TitleSkill">Skills</div>
                            <div className="What">What can I do</div>
                            <div className="language">- C/C++</div>
                            <div className="language">- JAVA</div>
                            <div className="language">- C#</div>
                            <div className="language">- JavaScript</div>
                            <div className="language">- PHP</div>
                            <div className="language">- MySQL</div>
                            <div className="language">- Python</div>
                            <div className="language">- html</div>
                            <div className="language">- React/React-Native</div>
                            <div className="language">- Node.js</div>
                            <div className="language">- Unity3D</div>
                            <div className="language">- Android</div>
                            <div className="language">- Photoshop</div>
                            <div className="language">- 3D Max</div>
                        </div>
                    </div>

                    <div className="Box02">
                        <div data-aos="zoom-in-left" data-aos-duration="3000">
                            <div className="TitleSkill2">Activity</div>
                            <div className="Awards">Certifications and Awards</div>
                            <div className="language2">- 자격증</div>
                            <div className="AwardsInfo">정보처리기사 (2018.11.16)</div>
                            <div className="language2">- 수상</div>
                            <div className="AwardsTitle">창업아이디어 경진대회 최우수상 (2018.04.11)</div>
                            <div className="AwardsInfo">창업진흥원, 중소벤처사업부, 스마트창작터</div>
                            <div className="AwardsInfo">AR을 이용한 실시간 FPS 총 게임 개발과 사업계획서를 작성하여 수상</div>
                            <div style={{marginBottom: 40}}></div>
                            <div className="AwardsTitle">창의아이디어 공모전 동상 (2018.05.09)</div>
                            <div className="AwardsInfo">덕성여자대학교 창업센터, 산학협력단</div>
                            <div className="AwardsInfo">ICT, IoT 관련 주제로 지하철 임산부배려석 인증머신을 아이디어로 사업계획서 및 기술문서를 작성하여 수상</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;