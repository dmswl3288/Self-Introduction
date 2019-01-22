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
                        <div>
                            <div className="TitleSkill">Skills</div>
                            <div className="What">What can I do</div>
                            <div className="language">- C/C++</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 500, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>90%</div>
                            </div>
                            <div className="language">- JAVA</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 450, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>85%</div>
                            </div>
                            <div className="language">- C#</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 500, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>90%</div>
                            </div>
                            <div className="language">- JavaScript</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 400, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>80%</div>
                            </div>
                            <div className="language">- PHP</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 250, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>60%</div>
                            </div>
                            <div className="language">- MySQL</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 400, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>80%</div>
                            </div>
                            <div className="language">- Python</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 200, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>50%</div>
                            </div>
                            <div className="language">- html</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 300, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>70%</div>
                            </div>
                            <div className="language">- React/React-Native</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 400, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>80%</div>
                            </div>
                            <div className="language">- Node.js</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 250, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>60%</div>
                            </div>
                            <div className="language">- Unity3D</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 500, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>90%</div>
                            </div>
                            <div className="language">- Photoshop</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 550, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>95%</div>
                            </div>
                            <div className="language">- 3D Max</div>
                            <div data-aos="fade-right" data-aos-duration="2000" style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
                                <div style={{marginLeft: 50, width: 400, height: 10, backgroundColor: '#006666', borderRadius: 10}}></div>
                                <div style={{color: 'white', marginLeft: 10}}>80%</div>
                            </div>
                        </div>
                    </div>

                    <div className="Box02">
                        <div data-aos="zoom-in-left" data-aos-duration="3000">
                            <div className="TitleSkill2">Activity</div>
                            <div className="Awards">Certifications and Awards</div>
                            <div className="language2"><li>자격증</li></div>
                            <div className="AwardsInfo">정보처리기사 (2018.11.16)</div>
                            <div style={{marginTop: 70}}></div>
                            <div className="language2"><li>수상</li></div>
                            <div className="AwardsTitle">창업아이디어 경진대회 최우수상 (2018.04.11)</div>
                            <div className="AwardsInfo">주관 - 창업진흥원, 중소벤처사업부, 스마트창작터</div>
                            <div className="AwardsInfo">AR을 이용한 실시간 FPS 총 게임 개발과 사업계획서를 작성하여 수상</div>
                            <div style={{marginBottom: 40}}></div>
                            <div className="AwardsTitle">창의아이디어 공모전 동상 (2018.05.09)</div>
                            <div className="AwardsInfo">주관 - 덕성여자대학교 창업센터, 산학협력단</div>
                            <div className="AwardsInfo">ICT, IoT 관련 주제로 지하철 임산부배려석 인증머신을 아이디어로 사업계획서 및 기술문서를 작성하여 수상</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skill;