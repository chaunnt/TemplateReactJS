import React from 'react';
import { func } from 'prop-types';

const Detail = props => {
  return (
    <div className="d-flex">
      <div className="col-12">
        <div className="container">
          <div className="header">
            <div>
              <div className="main-title">
                <h1 className="title poppin">WiFi Master - Kết nối WiFi</h1>
                <a className="linksure">LINKSURE NETWORK HOLDING PTE. LIMITED</a>
                <br />
                <span className="qc">Chứa quảng cáo</span>
              </div>
              <div className="text-center row more">
                <div className="col">
                  4,4
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>3,23 Tr bài đánh giá</p>
                </div>
                <div className="col">
                  100 Tr+
                  <p>Nội dung tải xuống</p>
                </div>
                <div className="col">
                  <img
                    src="https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w48-h16-rw"
                    alt=""
                  />
                  <p>
                    Tất cả mọi người
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeƯidth="1.5"
                      stroke="currentColor"
                      className="star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="btn-install">
                <button className="opacity-25 disabled btn gray-300">Cài đặt trên thiết bị khác</button>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#6e6e6e"
                    height="1em"
                    viewBox="0 0 640 512"
                    className="mr-2 star"
                  >
                    <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                  </svg>
                  Ứng dụng này được dùng trên mọi thiết bị của bạn
                </p>
              </div>
            </div>
            <div className="banner-img">
              <img
                src="https://play-lh.googleusercontent.com/6G5T3mf_ZnzRb6CI8DmEOtOc4BPFFaZXx7bjIL8W_JcTKd-B2190HGiZ6Dl5p06uF81M=w240-h480-rw"
                alt=""
              />
            </div>
          </div>
          <div className="body">
            <div>
              <div className="mobile-view">
                <img
                  className=" img-detail"
                  src="https://play-lh.googleusercontent.com/IZrg9R1qLuCHouMmxssnGpQ8idhxW7BpTutZcQ2CMCcGW1REiefR-isaWifIjXdx0ok=w2560-h1440-rw"
                  alt=""
                />
                <img
                  className=" img-detail"
                  src="https://play-lh.googleusercontent.com/9BBhH96-FDX2ECdXPC9X5UjRFCNpKvY5leTPR6xnc5zUYjsFScZY_QIIejBwZM_nwFI=w2560-h1440-rw"
                  alt=""
                />
                <img
                  className=" img-detail"
                  src="https://play-lh.googleusercontent.com/IZrg9R1qLuCHouMmxssnGpQ8idhxW7BpTutZcQ2CMCcGW1REiefR-isaWifIjXdx0ok=w2560-h1440-rw"
                  alt=""
                />
                <img
                  className=" img-detail hidden-title"
                  src="https://play-lh.googleusercontent.com/NRz4cDJjyk4akBUGyhMTZGrYgZ_9fVJFeTIehRJA_jSt5cOTrI-JbL9Ly8fG-nfjgGsJ=w2560-h1440-rw"
                  alt=""
                />
              </div>
              <div className="content mbottom-3">
                <h2>Tính năng mới</h2>
                <p>- Trải nghiệm ổn định hơn, tốn ít bộ nhớ điện thoại hơn</p>
                <p>- Thêm người dùng thân thiện, dễ sử dụng</p>
                <p className="mbottom-1">- Kết nối hoàn thiện hơn với thuật toán mới</p>
                <p className="mbottom-1">
                  Nhiều hotspot được cập nhật với phiên bản mới giúp bạn có trải nghiệm tốt hơn
                </p>
                <p>đề nghị? officialwifimasterkey@gmail.com</p>
              </div>
              <div className="content mbottom-2">
                <h2>
                  An toàn dữ liệu{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </h2>
                <p>
                  Sự an toàn bắt đầu từ việc nắm được cách nhà phát triển thu thập và chia sẻ dữ liệu của bạn. Các biện
                  pháp bảo vệ quyền riêng tư và bảo mật dữ liệu có thể thay đổi tuỳ theo cách sử dụng, khu vực và độ
                  tuổi. Nhà phát triển đã cung cấp thông tin này và có thể sẽ cập nhật theo thời gian.
                </p>
              </div>
              <div className="talbe-more mbottom-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <span>
                    <p>Không chia sẻ dữ liệu với bên thứ ba</p>
                    <p>
                      <a href="">
                        <u>Tìm hiểu thêm </u>
                      </a>
                      về cách nhà phát triển khai báo thông tin về hoạt động chia sẻ dữ liệu
                    </p>
                  </span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  <span>
                    <p>Có thể ứng dụng này sẽ thu thập những loại dữ liệu này</p>
                    <p>Vị trí, Thông tin cá nhân và 2 loại dữ liệu khác</p>
                  </span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <span>
                    <p>Dữ liệu được mã hóa trong khi chuyển</p>
                  </span>
                </div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>
                    <p>Không thể xóa dữ liệu</p>
                  </span>
                </div>
                <p className="view-detail">Xem chi tiết</p>
              </div>
              <div className="content">
                <h2>
                  Xếp hạng và đánh giá{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </h2>
                <div className="d-flex device mbottom-2">
                  <p className="tools">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <span>Điện thoại</span>
                  </p>
                  <p className="tools">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    <span>Máy tính bản</span>
                  </p>
                  <p className="tools">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h2.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Đồng hồ</span>
                  </p>
                  <p className="tools">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className="mr-2 star">
                      <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
                    </svg>
                    <span>Chomebook</span>
                  </p>
                  <p className="tools">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="mr-2 star"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                    <span>Ti vi</span>
                  </p>
                </div>
              </div>
              <div className="row danhgia">
                <div className="col-lg-2 vote-poin">
                  <p className="vote-num">4,4</p>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p>3,1 Tr bài đánh giá</p>
                </div>
                <div className="col-lg">
                  <div className="d-flex align-items-center">
                    5
                    <div className="bg-vote">
                      <div className="vote v-5"></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    4
                    <div className="bg-vote">
                      <div className="vote v-4"></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    3
                    <div className="bg-vote">
                      <div className="vote v-3"></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    2
                    <div className="bg-vote">
                      <div className="vote v-2"></div>
                    </div>
                  </div>
                  <div className="d-flex">
                    1
                    <div className="bg-vote">
                      <div className="vote v-1"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment">
                <div className="main-cmt">
                  <div className="header-cmt">
                    <div className="info-user">
                      <img
                        className="rounded-circle"
                        src="https://play-lh.googleusercontent.com/a/AAcHTtcv_FOX0qzT1cf0DlqvUZPgdRjiwLAWwSidRJNT3S2O=s32-rw-mo"
                        alt=""
                      />
                      <div>Sơn Đặng</div>
                    </div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="body-cmt">
                    <div className="rate-cmt">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>8 tháng 7, 2023</span>
                  </div>
                  <p>dùng tốt</p>
                  <p className="cmt-like">8 người thấy bài đánh giá hữu ích</p>
                </div>
                <div className="main-cmt">
                  <div className="d-flex header-cmt">
                    <div className="d-flex info-user">
                      <img
                        className="rounded-circle"
                        src="https://play-lh.googleusercontent.com/a/AAcHTtcv_FOX0qzT1cf0DlqvUZPgdRjiwLAWwSidRJNT3S2O=s32-rw-mo"
                        alt=""
                      />
                      <div>Khang Trần</div>
                    </div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="body-cmt">
                    <div className="rate-cmt">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>6 tháng 7, 2023</span>
                  </div>
                  <p>Cần thêm tính năng bẻ nhiều wifi</p>
                  <p className="cmt-like">42 người thấy bài đánh giá hữu ích</p>
                </div>
                <div className="main-cmt">
                  <div className="d-flex header-cmt">
                    <div className="d-flex info-user">
                      <img
                        className="rounded-circle"
                        src="https://play-lh.googleusercontent.com/a/AAcHTtcv_FOX0qzT1cf0DlqvUZPgdRjiwLAWwSidRJNT3S2O=s32-rw-mo"
                        alt=""
                      />
                      <div>Khánh Nguyễn</div>
                    </div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="body-cmt">
                    <div className="rate-cmt">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="star">
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>6 tháng 7, 2023</span>
                  </div>
                  <p>Dễ dùng, tốt hơn bản cũ</p>
                  <p className="cmt-like">46 người thấy bài đánh giá hữu ích</p>
                </div>
                <p className="view-cmt">Xem thêm đánh giá</p>
              </div>
              <div className="content">
                <h2>
                  Thông tin về ứng dụng này{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </h2>
                <p className="mbottom-1">
                  WiFi Master là công cụ kết nối Wi-Fi cho phép bạn truy cập vào các điểm phát sóng mở và Wi-Fi gần bạn.
                </p>
                <p>Các tính năng chính của WiFi Master</p>
                <p>- WiFi Master giúp bạn có thể truy cập Wi-Fi một cách dễ dàng.</p>
                <p>- Tất cả những gì bạn cần làm là chọn một Wi-Fi được liệt kê trong ứng dụng của chúng tôi.</p>
                <p>...</p>
              </div>
              <div>
                <div className="mbottom-2">
                  <b>Lần cập nhật gần đây nhất</b>
                  <p>25 thg 6,2023</p>
                </div>
                <div className="tools mbottom-3" style={{ maxWidth: '100px' }}>
                  Công cụ
                </div>
                <div className="mbottom-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mr-4 star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                  Gắn cờ là không thích hợp
                </div>
              </div>
            </div>
            <div className="banner mbottom-3">
              <div className="banner-info">
                <h2>Thông tin liên hệ của nhà phát triển</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="star"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
              <div className="more-app">
                <div className="app-title">
                  <h2>Thử dùng ứng dụng khác</h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
                <div className="app-view">
                  <div className="app-content">
                    <img
                      src="https://play-lh.googleusercontent.com/OS-MhSWOPtlUZLt0_UP5TI4juSf0XhyHxGfJa6pA-UIYkZ1BB6QHTZwaMEzZDPqYsmk=s64-rw"
                      alt=""
                    />
                    <div className="app-info">
                      <p>TikTok</p>
                      <p>TikTok Pte. Ltd</p>
                      <p>
                        4,4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="star"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                      </p>
                    </div>
                  </div>
                  <div className="app-content">
                    <img
                      src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g=s64-rw"
                      alt=""
                    />
                    <div className="app-info">
                      <p>Adobe Acrobat</p>
                      <p>Adobe</p>
                      <p>
                        4,6
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="star"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                      </p>
                    </div>
                  </div>
                  <div className="app-content">
                    <img
                      src="https://play-lh.googleusercontent.com/wpRQkfqbkPztp1US6HDr8E41We8GyY-B4CG1PMmWI3WKDk9OeYh4ehXwKIfZB7dm-sc=s64-rw"
                      alt=""
                    />
                    <div className="app-info">
                      <p>Google Play Games</p>
                      <p>Google LLc</p>
                      <p>
                        4,3
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="star"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                      </p>
                    </div>
                  </div>
                  <div className="app-content">
                    <img
                      src="https://play-lh.googleusercontent.com/X64En0aW6jkvDnd5kr16u-YuUsoJ1W2cBzJab3CQ5lObLeQ3T61DpB7AwIoZ7uqgCn4=s64-rw"
                      alt=""
                    />
                    <div className="app-info">
                      <p>Bàn phím Google</p>
                      <p>Google LLC Pte. Ltd</p>
                      <p>
                        4,4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="star"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer-content">
              <ul>
                <li className="foo-title">Google Play</li>
                <li>Play Pass</li>
                <li>Play Points</li>
                <li>Thẻ Google Play</li>
                <li>Đổi phần thưởng</li>
                <li>Chính sách hoàn tiền</li>
              </ul>
              <ul>
                <li className="foo-title">Trẻ em và gia đình</li>
                <li>Hướng dẫn dành cho cha mẹ</li>
                <li>Chia sẻ với gia đình</li>
              </ul>
            </div>
            <div className="footer-more">
              <div className="foo-more">
                <div>Điều khoản dịch vụ</div>
                <div>Giới thiệu về Google Play</div>
                <div>Quyền riêng tư</div>
                <div>Nhà phát triển</div>
                <div>Google Store</div>
              </div>
              <div className="foo-img">
                <img src="https://ssl.gstatic.com/store/images/regionflags/us.png" alt="" />
                <div>Hoa kỳ(Tiếng Việt)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
