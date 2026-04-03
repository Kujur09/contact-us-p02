import "../styles/contact-header.css";

export const ContactHeader = () => {
  return (
    <div className="main-container">
      <div>
        <div className="heading">
          <span className="contact">CONTACT</span>
          <span className="us">US</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nemo
          voluptates nostrum est ipsa molestiae! Voluptatem ipsam consectetur,
          modi, neque magnam odit et blanditiis iste rerum sint molestias
          inventore non ducimus repudiandae. Esse sunt eligendi voluptate
          impedit vitae officiis fugiat?
        </p>
      </div>
      <div className="sub-container">
        <div className="box-1">
          <div className="btn-box">
            <button className="btn">
              <img src="/image/chat-icon.png" alt="chat-icon" />
              Via Support Chat
            </button>
            <button className="btn">
              <img src="/image/call-icon.png" alt="call-icon" />
              Via Call
            </button>
          </div>
          <div className="form-box">
            <button>Via Email Form</button>
            <form action="" className="form">
              <div>
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">E-Mail</label>
                <input type="email" />
              </div>
              <div>
                <label htmlFor="">Text</label>
                <textarea rows={12} cols={50} />
              </div>
            </form>
          </div>
        </div>
        <div className="box-2">
          <img src="/image/customer-support-image.jpeg" alt="24/7 support" />
        </div>
      </div>
    </div>
  );
};
