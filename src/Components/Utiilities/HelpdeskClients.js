import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Dialog, DialogContent } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App';
function HelpdeskClients() {
    const AppName = React.useContext(MyContext)
    //Mobile View
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        };
    }, [])
    //Swiper Slides
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const slidesData = [
        {
            id: 1,
            name: 'Alesha S',
            rating: 5,
            company: 'Director of Marketing, HanmKlein & Hoffman',
            location: 'Chicago, US',
            testimonial: `My first experience with Helpdesk 365 was excellent. The team made setting up our new employee directory easy, providing clear and patient guidance. Their friendly support helped me learn the platform quickly, saving time and reducing stress.`,
        },
       
        {
            id: 8,
            name: ' Andreas C.',
            rating: 5,
            company: 'ICT Manager, SMT Shipping',
            location: 'Europe',
            testimonial: `“Helpdesk 365 integrates effortlessly with Microsoft Teams and SharePoint. With their excellent support, we customized it to fit our needs, greatly improving our internal IT helpdesk ticket management.”`,
        },

        {
            id: 9,
            name: ' Ahmed A.',
            rating: 5,
            company: 'IT Officer, HanmiGlobal Saudi',
            location: 'Saudi Arabia',
            testimonial: `"Helpdesk 365 has been a great fit for our support operations. Its interface is easy to use, and automation features help manage tickets efficiently. The reporting tools give clear insights into performance. The support team has been responsive & reliable."`,
        },

        {
            id: 16,
            name: 'Alicia Ally ',
            rating: 5,
            company: 'Educator,  Department of Education',
            location: 'New York',
            testimonial: `"The no-obligation free trial 
gave us the confidence to get started. Helpdesk 365 is simple, customizable, & makes resolving 
IT & HR issues quick & easy. 
Our team loves how user-friendly 
it is & the cost fits perfectly within 
the budget of our growing 
small business."`,
        },
        {
            id: 17,
            name: 'David Rafiq',
            rating: 5,
            company: 'IT Lead',
            location: 'Aberdeen, Scotland',
            testimonial: `"Helpdesk 365 makes it super easy to track requests and fix issues fast. We can set SLAs, monitor progress, and stay on top of every ticket. Plus, support was easy to reach and solved my problem right away"`,
        },
        {
            id: 18,
            name: 'Luis De Ande',
            rating: 5,
            company: 'System Administrator',
            location: 'San Antonio, Texas',
            testimonial: `“What I really like about Helpdesk 365 is how well it fits into our SharePoint setup. It works with what we already use. It’s straightforward, easy for the team to learn & has made ticket tracking so much easier. We’re more organized now & it definitely saves us time every day”`,
        },
        {
            id: 19,
            name: 'Raquan Lindsey',
            rating: 5,
            company: 'IT Manager',
            location: 'Indiana',
            testimonial: `“Helpdesk 365 was super easy to set up, and I could start using it with very little prior experience. The solution helps me track issues and also gather data to understand what’s causing them.”	`,
        },
        {
            id: 20,
            name: 'Victor Rojas',
            rating: 5,
            company: 'IT Admin ',
            location: 'United States',
            testimonial: `"Great experience with quick issue resolution and knowledgeable support. Helpdesk 365 makes it easy to track work and resolve issues efficiently through its user-friendly ticketing system."`,
        },
        {
            id: 21,
            name: 'Alan M',
            rating: 5,
            company: 'Senior Manager, IT & Facilities ',
            location: 'Waterloo, Ontario, Canada',
            testimonial: `"Helpdesk 365 is highly customizable and fits our processes perfectly. It helps us manage finance requests efficiently, automatically assign tickets to the right agents, and track work seamlessly. The Microsoft 365 integration made adoption simple and streamlined our support operations."`,
        },
        {
            id: 22,
            name: 'Jan van Os',
            rating: 5,
            company: 'ICT Manager',
            location: 'Netherlands',
            testimonial: `"Helpdesk 365 makes it easy to manage support requests across multiple teams. The multi-mailbox functionality and reporting dashboards give us complete visibility into ongoing work, helping us centralize requests and ensure no customer inquiry is missed."`,
        },


    ];
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
        }, 5000); // Move to the next slide every 2 seconds for a smoother effect
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    const visibleLogos = Array.from({ length: 3 }).map((_, i) =>
        slidesData[(currentIndex + i) % slidesData.length]
    );



    const [isOpen, setIsOpen] = React.useState(false);
    const isTruncated = true;
    const [currentSlide, setCurrentSlide] = React.useState();
    const toggleModal = () => setIsOpen(!isOpen);
    const handleClose = () => {
        setIsOpen(false);
    };

    function openModal(slide) {
        toggleModal();
        setCurrentSlide(slide);

    }

    return (
        <>
            <Swiper
                slidesPerView={isMobile ? 1 : 3}
                spaceBetween={30}
                scrollbar
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className="mySwiper"
            >
                {visibleLogos.map((slide) => {
                    const showLogo = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15,].includes(slide.id); // ✅ control by ID

                    return (
                        <SwiperSlide key={slide.id} className="swiperSlidestyles">
                            <div className="CardHeaderStyle">
                                <div>
                                    {showLogo ? (

                                        <div className='gtwoimgemain'>
                                            <img
                                                className='gtwoimage'
                                                src="https://ik.imagekit.io/zn4au2jftpm5/SVG_g2-logo-png_seeklogo-407782_07Y3ytbtC.svg"
                                                alt="G2 Logo"
                                            />
                                        </div>
                                    ) : (
                                        <div className='no-logo-placeholder'>{/* Optional fallback */}</div>
                                    )}
                                </div>
                                <div>
                                    <div className='outcustomercontent'>
                                        <span className="UserNameStyles">{slide.name}</span>
                                        <span className="elementor-testimonial__title">{slide.company}</span>
                                        <span className="elementor-testimonial__title">{slide.location}</span>
                                        <div className="elementor-star-rating">
                                            {[...Array(slide.rating)].map((_, i) => (
                                                <i key={i} className="elementor-star-full">★</i>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="elementor-testimonial__content">
                                        <div className="elementor-testimonial__text">
                                            {isTruncated
                                                ? `${slide.testimonial.slice(0, 100)}...`
                                                : slide.testimonial}
                                            {slide.testimonial.length > 100 && (
                                                <div>
                                                    <button onClick={() => openModal(slide)} className="read-more-btn">
                                                        Read More
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <span id="Integration-ET"></span>
                                        <span id="Integration-ET"></span>
                                        <span id="pricing-section"></span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                maxWidth={"xl"}
                className="ClinetModal"
            >
                <DialogContent>

                    <div className="CardHeaderStyleModal">
                        <div className='flexEnd'>
                            <IoClose onClick={handleClose} />
                        </div>
                        <span className="UserNameStyles">{currentSlide?.name}</span>
                        <span className="elementor-testimonial__title">{currentSlide?.company}</span>
                        <span className="elementor-testimonial__title">{currentSlide?.location}</span>
                        <div className="elementor-star-rating">
                            {[...Array(currentSlide?.rating)].map((_, i) => (
                                <i key={i} className="elementor-star-full">★</i>
                            ))}
                        </div>
                        <div className="elementor-testimonial__content">
                            <div className="elementor-testimonial__text">
                                "{currentSlide?.testimonial}"
                            </div>
                        </div>
                    </div>
                    {/* <h2>{currentSlide?.name}</h2>
                    <p>{currentSlide?.testimonial}</p> */}
                    {/* <button onClick={toggleModal} className="close-btn">Close</button> */}
                </DialogContent>

            </Dialog>
        </>
    )
}

export default HelpdeskClients;