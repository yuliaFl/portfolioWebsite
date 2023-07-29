
function Contact() {
  const handleClick = event => {
    console.log(event.target);
  };

    console.log('Image clicked');
  return (
    <div id="Contact" className="contact">
      <h4> © Yulia Flenova, 2023</h4>
      <a href="https://www.linkedin.com/in/yulia-fln/">
        <img src={'https://cdn-icons-png.flaticon.com/512/61/61109.png'} alt="linkedIn logo" className="footerLinkImg"></img>
      </a> 
      <a href="https://github.com/yuliaFl">
        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'} alt="Github logo" className="footerLinkImg"></img>
      </a>
    </div>
  );
}

export default Contact;