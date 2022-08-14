import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import MyPicture from "../../assets/images/my_picture.jpg";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={MyPicture} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Nghiệp Nguyễn</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">
                    tannghiepnguyen123@gmail.com
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">0908918318</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">
                    30/6 Thích Quảng Đức, phường 05, quận Phú Nhuận, TP.HCM
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Việt Nam</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
