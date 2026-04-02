import "../styles/contact-header.css";

export const ContactHeader = () => {
  return (
    <div>
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
      <div>
        <div>
          <div>
            <button>
              <img src="/image/chat-icon.png" alt="chat-icon" />
              Via Support Chat
            </button>
            <button>
              <img src="/image/call-icon.png" alt="call-icon" />
              Via Call
            </button>
          </div>
          <div>
            <button>Via Email Form</button>
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" />
              <label htmlFor="">E-Mail</label>
              <input type="email" />
              <label htmlFor="">Text</label>
              <textarea rows={10} cols={20} />
            </form>
          </div>
        </div>
        <div>
          <img src="/image/customer-support-image.jpeg" alt="24/7 support" />
        </div>
      </div>
    </div>
  );
};
