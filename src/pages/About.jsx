import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";
import style from "../styles/About.module.css";
import AboutCard from "../components/reusables/AboutCard";
import TeamCard from "../components/reusables/TeamCard";

function About() {
  return ( 
    <div>
      <Header />
      <div className={style.home}>
        <h1 className={style.homeText1}>About Us</h1>
      </div>

      <div className={style.home2}>
        <div className={style.pictureDiv}>
          <div className={style.pictureD}>
            <p className={style.invest1}>
              Our Story: Building Wealth, One Investment at a Time
            </p>
            <p className={style.cardTitle}>Who We Are </p>
            <p className={style.cardPara}>
              At Gtext, we’re more than just a real estate investment
              company—we’re a community of forward-thinking individuals
              dedicated to helping people achieve financial growth through
              strategic property investments. With a foundation built on trust,
              transparency, and innovation, we have grown into a trusted partner
              for individuals and businesses alike.
            </p>
          </div>

          <div className={style.about}>
            <img
              src="./images/about.png"
              alt="about"
              className={style.aboutImg}
            />
          </div>
        </div>

        <div className={style.vismi}>
          <div className={style.cardTitleM}>
            <p className={style.cardTitle}>Our Mission</p>
            <p className={style.card}>
              To redefine real estate investment by providing transparent,
              secure and high-yield opportunities that empower our clients to
              build wealth sustainably.
            </p>
          </div>

          <div className={style.cardTitleMG}>
            <p className={style.cardTitle}>Our Vision</p>
            <p className={style.card}>
              To be a global leader in real estate investment solutions,
              fostering growth for investors while creating sustainable
              communities that stand the test of time.
            </p>
          </div>
        </div>

        <p className={style.cardTitle}>What Sets Us Apart </p>
        <div className={style.card}>
          <AboutCard
            imageSrc="./images/card5.svg"
            title="A Decade of Expertise:"
            paragraph=" With over 10 years of experience, our deep industry knowledge ensures your investments are in safe hands."
            bgColor="rgba(236, 252, 236, 1)"
            textColor="rgba(5, 69, 5, 1)"
          />

          <AboutCard
            imageSrc="./images/card6.svg"
            title="Diverse Portfolio:"
            paragraph="From luxury housing to prime land acquisitions, we offer something for every type of investor."
            bgColor="rgba(244, 245, 255, 1)"
            textColor="rgba(26, 35, 126, 1)"
          />
        </div>

        <div className={style.card}>
          <AboutCard
            imageSrc="./images/card5.svg"
            title="Proven Results:"
            paragraph="Our investors enjoy an average ROI of 15-20% annually, supported by our robust market analysis and strategic insights."
            bgColor="rgba(255, 248, 227, 1)"
            textColor="rgba(54, 41, 3, 1)"
          />

          <AboutCard
            imageSrc="./images/card6.svg"
            title="Ethical Practices"
            paragraph="We prioritize integrity and sustainability in all our projects, ensuring they benefit both investors and local communities."
            bgColor="rgba(246, 246, 246, 1)"
            textColor="rgba(66, 63, 63, 1)"
          />
        </div>

        <p className={style.cardTitle}>Our Journey</p>
        <p className={style.cardPara}>
          Since our inception in 2000, Gtext has consistently delivered
          innovative solutions in the real estate industry. What began as a
          small startup has grown into a trusted name with a diverse portfolio
          and a global reach. Each milestone in our journey is a testament to
          our commitment to excellence and our clients' trust in us.
        </p>

        <p className={style.cardTitle}>Our Core Values</p>
        <div className={style.benefit}>
          <p className={style.benefit1}>Integrity</p>
          <p className={style.benefit2}>Innovation</p>
          <p className={style.benefit3}>Customer-Centricity</p>
        </div>

        <p className={style.cardTitle}>Meet Our Team</p>
        <p className={style.cardPara}>
          Behind every successful investment is a team of dedicated
          professionals. From seasoned market analysts to customer support
          specialists, our team works tirelessly to ensure your success.
        </p>

        <div className={style.profiles}>
          <TeamCard
            imageSrc="./images/Team1.png"
            name="John Doe"
            title="With over 15 years of leadership experience, John has successfully guided organizations to achieve significant growth and innovation."
          />
          <TeamCard
            imageSrc="./images/Team2.png"
            name="John Doe"
            title="With over 15 years of leadership experience, John has successfully guided organizations to achieve significant growth and innovation."
          />
          <TeamCard
            imageSrc="./images/Team3.png"
            name="John Doe"
            title="With over 15 years of leadership experience, John has successfully guided organizations to achieve significant growth and innovation."
          />
          <TeamCard
            imageSrc="./images/boardadvisors.png"
            name="John Doe"
            title="With over 15 years of leadership experience, John has successfully guided organizations to achieve significant growth and innovation."
          />
          <TeamCard
            imageSrc="./images/Team4.png"
            name="John Doe"
            title="With over 15 years of leadership experience, John has successfully guided organizations to achieve significant growth and innovation."
          />
        </div>
      </div>

      <div className={style.join}>
        <p className={style.cardTitle}>Join the GText Family</p>
        <p className={style.cardPara}>
          Behind every successful investment is a team of dedicated
          professionals. From seasoned market analysts to customer support
          specialists, our team works tirelessly to ensure your success. Whether
          you're a first-time investor or a seasoned professional, Gtext offers
          opportunities tailored to your goals. Let’s build a future of
          financial freedom and sustainable growth together.
        </p>
      </div>

      <div className={style.home4}>
        <p className={style.cardTitle}>
          Ready to start your journey with Gtext?
        </p>

        <div className={style.btnri}>
          <button className={style.investConsult}>
            Schedule Your Free Investment Consultation
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
