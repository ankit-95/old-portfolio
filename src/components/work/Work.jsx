import { useState } from "react";
import "./Work.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "ServiceXchange (HCL Tech.)",
            desc:
                "I was the owner of four micro-services where one of them was the transaction module of our tool. In my tenure, I played a key role in launching our tool for two major clients i.e Thomson Reuters and HCL itself having a consumer base of 30,000 and 1,50,000 consumers respectively.",
            img:
                "./assets/SX.jpg",
        },
        {
            id: "2",
            icon: "./assets/mobile.png",
            title: "Company Management System (Northern Railway)",
            desc:
                "This project gave me an exposure to learn new languages and get myself familiarise with the new web frameworks. The Company Management System is a Web based application, in which the Employees can check their performance and HR can too have a holistic view of all the staff's performance.",
            img:
                "./assets/CompantMngSt.png",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Group Fund Bank (NIIT Delhi)",
            desc:
                "Group Fund Bank is a multinational bank with 1500 branches and 8000 ATM centers around the world. It employs over 10,000 people. Group Fund offers various services, such as savings accounts, current accounts, and fixed deposit schemes. In addition, it offers various investment options to its 3 million customers.",
            img:
                "./assets/GroupManagementSystem.png",
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="work" id="work">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    {/* <span>Projects</span>*/}
                                </div>
                            </div>
                            <div className="right">
                                <img
                                    src={d.img}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );
}