import React from "react";

const PageCard = ({ show, show1, show2, isPage1, isPage2, isPage3, text }) => {
  return (
    <div
      className={`page1 ${isPage1 && show && "page_shado"} ${
        isPage1 && show1 && "page_rotter"
      }  ${isPage2 && show2 && "page_rotter zIndex_6"} ${
        isPage2 && show1 && "page_shado"
      } ${isPage3 && show2 && "page_shado"} ${isPage2 && "zIndex_4"} ${
        isPage3 && "zIndex_3"
      }`}
    >
      <h1>{text}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Consectetur purus ut
        faucibus pulvinar elementum integer enim neque. Semper eget duis at
        tellus at urna condimentum mattis. Ipsum nunc aliquet bibendum enim.
        Pellentesque massa placerat duis ultricies lacus. Sagittis id
        consectetur purus ut faucibus pulvinar elementum. Convallis tellus id
        interdum velit laoreet id donec ultrices tincidunt. Dignissim convallis
        aenean et tortor at risus viverra adipiscing.
        <br /> <br />
        Suspendisse in est ante in nibh. Consectetur adipiscing elit ut aliquam
        purus sit amet luctus. Sed vulputate odio ut enim blandit volutpat
        maecenas volutpat. Eget nulla facilisi etiam dignissim diam quis. Velit
        euismod in pellentesque massa placerat duis ultricies. Tincidunt ornare
        massa eget egestas purus viverra accumsan. Purus viverra accumsan in
        nisl nisi scelerisque. A erat nam at lectus urna. Posuere ac ut
        consequat semper viverra. Montes nascetur ridiculus mus mauris vitae
        ultricies leo. Proin sed libero enim sed faucibus turpis in eu. Orci
        dapibus ultrices in iaculis nunc sed augue.
      </p>
      <div
        className={`page-bg ${isPage1 && show1 && "page_show1"} ${
          isPage2 && show2 && "page_show1"
        }`}
        style={show1 ? { width: "99%" } : null}
      ></div>
    </div>
  );
};

export default PageCard;
