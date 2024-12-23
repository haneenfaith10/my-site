function App() {
  return (
    <div>
      <header
        className="fixed top-0 left-0 w-full md:py-12 py-8 px-[9%] bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] flex justify-between items-center z-[100]"
        style={{
          backgroundImage: "url('/sss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="logo ">
          <a href="/" className="flex md:text-5xl text-md ">
            Ha <span className="text-[#04fffb]">neen</span> 
          </a>
        </div>
        <i className="bx bx-menu ml-[120px]" id="menu-icon"></i>

        <div>
          <nav className="navbar">
            <a href="/" className="active">
              Home
            </a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
          </nav>
        </div>
      </header>

      <section
        className="home min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: "url('/sss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="home-img">
          <img src="wwwe.png" width="300px" alt="" className="mt-[10px]" />
        </div>

        <div className="home-content">
          <h1>
            It's <span>Haneen</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/haneen-lisan-9148aa274/">
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/haneee.n/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.facebook.com/haneenhani.hani/">
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="https://twitter.com/Haneen480149149">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <a href="cv my.pdf" className="btn">
            Download CV
          </a>
        </div>
      </section>

      <section
        className="about"
        style={{
          backgroundImage: "url('/sss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about-content">
          <h2 className="heading font-bold">
            About<span>Me</span>
          </h2>
          <h3 className="text-animation">
            <span></span>
          </h3>
          <p>
            As a versatile creative professional, I bring a diverse skill set to
            the table, seamlessly blending expertise in web development, UI/UX
            design, graphic design, photography, and videography. With a
            deep-rooted passion for technology and design, I specialize in
            crafting immersive digital experiences and visually captivating
            content. In web development, I meticulously craft functional and
            visually appealing websites, ensuring seamless user interactions
            across various platforms. My expertise in UI/UX design enables me to
            create intuitive interfaces that prioritize user experience while
            maintaining aesthetic excellence. Additionally, my proficiency in
            graphic design allows me to translate ideas into visually compelling
            graphics and cohesive brand identities. Behind the lens, I capture
            moments and narratives, whether through photography or videography,
            aiming to evoke emotions and convey stories. With a commitment to
            excellence and a dedication to creativity, I am driven to exceed
            expectations and bring visions to life through my work. Let's
            collaborate to transform ideas into impactful digital realities.
          </p>
          <a href="/" className="btn">
            Read More
          </a>
        </div>
        <div className="about-img">
          <img src="sds.png" />
        </div>
      </section>

      <section
        className="services"
        style={{
          backgroundImage: "url('/sss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="heading font-bold">Services</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="service-info">
              <h4>Graphic Design</h4>
              <p>
                In graphic design, I offer a range of services including logo
                design, branding, print design, digital graphics, and
                illustration. With a focus on creativity and attention to
                detail, I aim to deliver visually striking designs that
                effectively communicate your message and elevate your brand
                presence. Let's collaborate to bring your vision to life with
                impactful graphic design solutions.
              </p>
            </div>
          </div>
          <div className="service-box">
            <div className="service-info">
              <h4>Frontend Development</h4>
              <p>
                In frontend development, I provide services encompassing
                responsive website design, interactive web application
                development, and optimization for accessibility and performance.
                Specializing in HTML, CSS, and JavaScript, I ensure seamless
                user experiences across devices and browsers. My expertise also
                extends to front-end frameworks like React and Vue.js for
                creating dynamic and scalable applications.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>UI / UX Design</h4>
              <p>
                In UI/UX design, I provide tailored services focused on
                optimizing user experiences through intuitive interfaces and
                visually engaging designs. From user research to prototyping, I
                ensure every aspect is finely tuned to meet the needs and
                preferences of your audience, resulting in memorable and
                user-friendly digital experiences.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Web Developing</h4>
              <p>
                In web development, I provide customized solutions for building
                responsive, user-friendly websites that effectively represent
                your brand and drive results. Services include website design,
                development, optimization, and ongoing maintenance to ensure
                your online presence remains seamless and impactful. Let's
                elevate your digital footprint together.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Editing</h4>
              <p className="">
                I offer comprehensive photo and video editing services tailored
                to meet your specific needs. With meticulous attention to detail
                and a keen eye for aesthetics, I enhance your visuals to ensure
                they are polished and professional. Whether it's color
                correction, retouching, or adding special effects, I utilize the
                latest editing techniques to elevate your content to the next
                level. From stunning photos to captivating videos, I'm here to
                bring your vision to life with expert editing expertise.
              </p>
            </div>
          </div>

          <div className="service-box">
            <div className="service-info">
              <h4>Backend Development</h4>
              <p>
                In backend development, I provide comprehensive solutions
                tailored to enhance the functionality and performance of your
                digital platforms. From database architecture to API design and
                security implementations, I ensure your backend infrastructure
                is robust and scalable to support your business goals
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact"
        style={{
          backgroundImage: "url('/sss.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="heading font-bold">
          Contact <span>Me</span>
        </h2>
        <form action={"#"}>
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      <footer
        className="footer"
        style={{
          backgroundImage: "url('/xxx.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="social">
          <a href="https://www.linkedin.com/in/haneen-lisan-9148aa274/">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://www.instagram.com/haneee.n/">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="https://www.facebook.com/haneenhani.hani/">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="https://twitter.com/Haneen480149149">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <ul className="list">
          <li>
            <a href="/">FAQ</a>
          </li>

          <li>
            <a href="/">Services</a>
          </li>

          <li>
            <a href="/">About Me</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>

          <li>
            <a href="/">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright"> &copy; Haneen lisan | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
