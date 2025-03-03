import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// External Libraries
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LuArrowUpRight } from "react-icons/lu";
import { IoMdQuote } from "react-icons/io";

// Internal Components
import ImageComponent from '../ImageComponent/ImageComponent';
import useAnimation from '../../hooks/Animation'; // تأكد من صحة المسار

// Assets
import backgroundImage from '../img/assets/Home/scrollable banner home page .png';
import ceo from "../img/assets/Home/ceo home page .svg"
import aboutImage2 from '../img/jera.jpeg';
import svg1 from '../img/assets/Home/Contract Drafting and Review mac.svg'
import svg2 from '../img/assets/Home/Legal Consultation mac.svg'
import svg3 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg4 from '../img/assets/Home/Trademark and Intellectual Property Registration mac.svg'
import svg5 from '../img/assets/Home/Company Formation and Registration mac.svg'
import svg6 from '../img/assets/Home/Debt Collection mac.svg'
import svg7 from '../img/assets/Home/Litigation and Court Documents mac .svg'
import svg8 from '../img/assets/Home/Dispute Resolution mac .svg'
import svg9 from '../img/assets/Home/Contract Review and Analysis mac.svg'
import svg10 from '../img/assets/Home/Real Estate Legal Support mac .svg'
import svg11 from '../img/assets/Home/Tax and Financial Legal Services mac.svg'
import svg12 from '../img/assets/Home/Regulatory and Legal Compliance mac.svg'

//features icons
import icon1 from '../img/assets/final media/our features icon SVG/Experienced Legal Professionals .svg';
import icon2 from '../img/assets/final media/our features icon SVG/Client-Focused Approach.svg';
import icon3 from '../img/assets/final media/our features icon SVG/Modern Legal Solutions.svg';
import icon4 from '../img/assets/final media/our features icon SVG/Transparent Pricing .svg';



// Styles
import './Home.css';

const WORDPRESS_API_URL = 'https://nubislegal.com/wp-json/wp/v2/posts?_embed&order=desc&orderby=date';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب المقالات من API
  useEffect(() => {
    axios.get(WORDPRESS_API_URL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const testimonials = [
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      testimonial:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem...",
    },
    {
      name: "John Smith",
      role: "Marketing Specialist",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      testimonial:
        "At vero eos et accusamus et iusto odio dignissimos...",
    },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* -- Hero Section -- */}
      <section className="hero">
        <div className="hero-image-container">
          <img 
            src={backgroundImage} 
            alt="Decorative background" 
            className="hero-bg"
            role="presentation"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            <span className="highlight">
              NUBIS LEGAL CONSULTANCY SERVICES.<br /> YOUR TRUSTED LEGAL PARTNER.
            </span>
          </h1>
          <p className="hero-subtitle">
            Where Innovation Meets Expertise <br />Delivering Smarter Legal Solutions
          </p>
          <div className="hero-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* -- About Us Section -- */}
      <section className="about-us" id="about">
        <div className="about-us-container">
          <div className="about-us-content">
            <div className="about-us-blocks">
              <img src={aboutImage2} alt="About Us" />
            </div>
            <div className="about-us-text">
              <h2 className="about-us-title">ABOUT US</h2>
              <p>
                &quot;At Nubis legal consultancy, we combine legal expertise with a modern, client-focused approach...
              </p>
              <button className="about-us-btn">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* -- Features Section with Animation -- */}
      <section className="features">
        <div className="features-container">
          <div className="feature-header">
            <h2>
              <span className="features-title">OUR FEATURES</span>
            </h2>
          </div>
          <div className="features-layout">
            {[
              { 
                icon: icon1,
                title: "Experienced Legal Professionals",
                text: "Decades of combined expertise.",
              },
              {
                icon: icon2,
                title: "Client-Focused Approach",
                text: "Tailored solutions for your unique needs.",
              },
              {
                icon: icon3,
                title: "Modern Legal Solutions",
                text: "Leveraging technology for efficiency",
              },
              { 
                icon: icon4,
                title: "Transparent Pricing",
                text: "Clear, upfront costs with no hidden fees",
              },
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* باقي الأقسام ... */}
      
      {/* -- Blog Section -- */}
      <section className="blog-section" id="blog">
        <div className="blog-header">
          <h2 className="blog-title">
            OUR <span className="uppercase">BLOG</span>
          </h2>
        </div>
        {loading ? (
          <p className="text-center py-8">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post) => (
              <div key={post.id} className="blog-item bg-gray-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300">
                <div className="blog-image rounded-lg overflow-hidden mb-4">
                  <img
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://via.placeholder.com/150'}
                    alt={post.title.rendered}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-4">{post.title.rendered}</h3>
                <div 
                  className="text-base text-gray-700 leading-relaxed mb-4" 
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                />
                <a 
                  href={post.link} 
                  className="read-more flex items-center gap-1 text-primary hover:text-primary-dark"
                >
                  Read more
                  <span className="read-more-icon">
                    <LuArrowUpRight />
                  </span>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-8">No posts available.</p>
        )}
      </section>

      {/* -- Testimonials Section -- */}
      <section className="testimonials">
        <div className="container my-5 py-5">
          <h1 className="testimonials-title">TESTIMONIAL</h1>
          <div className="testimonial-wrapper position-relative">
            <div className="position-absolute top-0 start-50 translate-middle">
              <img
                src={testimonials[activeTestimonial].image}
                className="avatar rounded-circle border-4 border-white"
                alt={testimonials[activeTestimonial].name}
                style={{ width: '96px', height: '96px', objectFit: 'cover' }}
              />
            </div>
            <div className="testimonial-card bg-primary rounded-4 p-5 pt-5 position-relative">
              <span className="quote-mark fs-1 text-warning text-center d-block mb-3">
                <IoMdQuote />
              </span>
              <div className="testimonial-content">
                <p className="testimonial-text text-white text-center lh-base mb-0">
                  {testimonials[activeTestimonial].testimonial}
                </p>
                <div className="client-info text-center mt-4">
                  <h4 className="client-name text-white mb-1">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="client-role text-light mb-0">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
              <div className="dots d-flex justify-content-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot rounded-pill ${index === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    style={{
                      width: index === activeTestimonial ? '32px' : '8px',
                      height: '8px',
                      backgroundColor: index === activeTestimonial ? '#2563eb' : '#e5e5e5',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// مكون FeatureCard مع تأثير الأنيميشن
const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const isVisible = useAnimation(cardRef, 0.2);

  return (
    <div 
      ref={cardRef} 
      className={`feature-card fade-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="feature-icon">
        <img 
          src={feature.icon} 
          alt={feature.title}
          className="w-full h-full p-2 object-contain"
        />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
};

export default Home;
