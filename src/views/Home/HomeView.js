import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './HomeView.css';
const HomeView = () => {
  const { t } = useTranslation();
  let personalInfo = {
    avatar: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg',
    fullName: 'Nguyễn Văn A',
    code: '79846521351',
    dob: '01/01/1990',
    idc: '06798465213',
    phoneNumber: '0987654321',
    address: '01 Lê Duẩn, Quận 1, TPHCM',
  };
  let action = [
    {
      path: '/bhty',
      title: 'THẺ BHYT',
      icon: 'fa-regular fa-address-card',
    },
    {
      path: '/qttg',
      title: 'QUÁ TRÌNH THAM GIA',
      icon: 'fa-solid fa-clock-rotate-left',
    },
    {
      path: '/tth',
      title: 'THÔNG TIN HƯỞNG',
      icon: 'fa-regular fa-user',
    },
    {
      path: '/tskb',
      title: 'THẺ SỔ KHÁM CHỮA BỆNH',
      icon: 'fa-solid fa-square-plus',
    },
  ];
  let renderPerInfo = () => {
    return (
      <div className="personal-card p-3">
        <div className="d-flex justify-content-center border-bot-bold">
          <img src={personalInfo.avatar} alt="" style={{ width: '60px', height: '60px', borderRadius: '100%' }} />
          <div className="ml-2">
            <h3>{personalInfo.fullName}</h3>
            <p>Mã số BHXH: {personalInfo.code}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between border-bot pt-3">
          <p>Ngày sinh</p>
          <p>{personalInfo.dob}</p>
        </div>
        <div className="d-flex justify-content-between border-bot pt-3">
          <p>CCCD/CMND/Hộ chiếu</p>
          <p>{personalInfo.idc}</p>
        </div>
        <div className="d-flex justify-content-between border-bot pt-3">
          <p>Số điện thoại</p>
          <p>{personalInfo.phoneNumber}</p>
        </div>
        <div className="d-flex justify-content-between pt-3">
          <p>Địa chỉ</p>
          <p>{personalInfo.address}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="position-relative">
      <h1 className="text-center mt-2">QUẢN LÝ CÁ NHÂN</h1>
      <div className="d-flex justify-content-center">{renderPerInfo()}</div>
      <div className="d-flex justify-content-center navigate">
        <div className="navigate-container">
          {action.map((route, index) => {
            return (
              <NavLink to={route.path} key={index} className="d-flex">
                <div className="">
                  <div className="icon mr-4">
                    <i className={route.icon}></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between w-100 ">
                  <div className="navigate-link">
                    <p>{route.title}</p>
                  </div>
                  <i className="fa-solid fa-chevron-right"></i>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="footer d-flex justify-content-center position-fixed fixed-bottom">
        <div className="d-flex footer-container justify-content-between text-center py-2">
          <div>
            <NavLink to={'/'}>
              <div className="bottom-icon">
                <i className="fa-solid fa-circle-user active"></i>
              </div>
              <p>QL Cá nhân</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={'/dvc'}>
              <div className="bottom-icon">
                <i className="fa-solid fa-tablet"></i>
              </div>
              <p>Dịch vụ công</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={'/search'}>
              <div className="bottom-icon">
                <i className="fa-brands fa-searchengin"></i>
              </div>
              <p>Tra cứu</p>
            </NavLink>
          </div>
          <div>
            <NavLink to={'/help'}>
              <div className="bottom-icon">
                <i class="fa-solid fa-headphones-simple"></i>
              </div>
              <p>Trợ giúp</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
