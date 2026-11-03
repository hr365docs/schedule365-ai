import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Dialog, DialogContent } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App';
function TimesheetClients() {
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
            name: 'Anne Thompson',
            rating: 5,
            company: 'President ',
            location: 'Arizona, United States',
            testimonial: `Timesheet365 is exactly what we needed to enter and bill our client timesheets.`,
        },
        {
            id: 2,
            name: 'Irini',
            rating: 5,
            company: 'Senior Business Analyst',
            location: 'Athens, Greece',
            testimonial: 'It’s easy to track employees’ daily work hours, approvals, and reporting in one place. Everything works smoothly, and the overall experience has been excellent.',
        },
        {
            id: 3,
            name: 'Edward',
            rating: 5,
            company: 'IT Administrator',
            location: 'Pennsylvania, United States',
            testimonial: `Timesheet 365 integrates smoothly with Microsoft 365, making time tracking and performance management easier for our team. The platform is efficient and feature-rich, though it takes some training to fully explore all capabilities.`,
        },
        {
            id: 1,
            name: 'Wessam Baroudi',
            rating: 5,
            company: 'Head Of Information & Technology  ',
            testimonial: `Having recently joined ABC Mobility, I quickly realised we needed to invest in a helpdesk to streamline the IT operation and be the one-stop shop to manage all our users’ issues and requests.I evaluated several products, and I have decided on ${AppName}. Being a customizable SharePoint system, ${AppName} met most of our requirements. We wanted a system that is capable of multi teams and ${AppName} delivers this out of the box.`,
        },
        {
            id: 2,
            name: 'Jason Gardner',
            rating: 5,
            company: 'Director of Infrastructure ',
            testimonial: 'We were operating in an environment where we received support requests in many ways; email, teams messages, texts, phone calls, etc. For a smaller organization, this presented many challenges such as confusion within the teams as to the best way to receive service, no way to track service issues or verify they were completed and when, etc. We evaluated several options for a ticketing system, including building our own within the MS environment.',
        },
        {
            id: 3,
            name: 'Corey Jackson',
            rating: 5,
            company: 'Barton Associates ',
            testimonial: `Great App for SharePoint or MS Teams! 
We currently use within SharePoint and MS Teams to help employees find one another. We have been very happy with functionality and support provided by ${AppName}.`,
        },
        {
            id: 4,
            name: 'JP Nicols',
            rating: 5,
            company: 'Cofounder',
            testimonial: `Outstanding tech support! We use ${AppName} a little differently than most. We have a small internal team, but 1000+ association members and we use ${AppName} as a member directory. We had a rather complex permissions issue with making sure our members ("guest users" in MSFT parlance) have full access to everyone's info and Frank and the team spent nearly three hours extremely late on their Friday night making sure we got it resolved.`,
        },
        {
            id: 5,
            name: ' John Persons',
            rating: 5,
            company: 'Vice President of Operations ',
            testimonial: `Great product AND great support!
Having come from a very old version of Employee Directory 365, Frank and Sakshi were fantastic through the upgrade and implementation process of the new Modern SharePoint installation. All questions were answered in a timely fashion with remote support utilized where needed to address in full. It's great to see this level of service from a company. `,
        },

        //New Testimonials
        {
            id: 6,
            name: ' Alexander S',
            rating: 5,
            company: 'SharePoint Consultant, Raymond West',
            location: 'California',
            testimonial: `"Employee Directory 365 provided the perfect solution, offering both functionality and exceptional support. The team provided excellent service, walking us through every detail over a screenshare session and ensuring we knew everything we needed to know." `,
        },

        {
            id: 7,
            name: ' Amreen K.',
            rating: 5,
            company: 'Finance Manager, Exeevo',
            location: 'New York',
            testimonial: `“Timesheet 365 helps track work hours accurately across tasks, projects, and clients. With this app, we solved technical issues like Excel exports, custom columns, and other operational inefficiencies, making our workflow easier and more efficient!” `,
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
            id: 10,
            name: ' Carl G.',
            rating: 5,
            company: 'IT Manager, Pallas LLP',
            location: 'London, UK',
            testimonial: `"Employee Directory 365 is a great platform for displaying company employee information with user-selectable options. They offer excellent remote support and customisable features to enhance the experience."`,
        },

        {
            id: 11,
            name: ' Erik H.',
            rating: 5,
            company: 'System Admin',
            location: 'Oregon, US ',
            testimonial: `"Employee Directory 365 makes it easy to find coworkers by department, title, and more. My team praises its functionality and uses it regularly to connect with new employees. Setup was quick, and the customer support team has been great. SharePoint integration works smoothly, making it the best solution I have reviewed."`,
        },

        {
            id: 12,
            name: ' Kevin R',
            rating: 5,
            company: 'Director of IT, JConnelly',
            location: 'New York',
            testimonial: `"Asset 365 has simplified the way we manage our computers and mobile devices. It is efficient, user- friendly, and works seamlessly!”`,
        },

        {
            id: 13,
            name: ' Maggi Long',
            rating: 5,
            company: 'Business Manager, Cerilon',
            location: 'Canada',
            testimonial: `"HR365 has been a great fit for our business needs. The support team was always helpful and made the transition easy. It has improved our onboarding and offboarding processes, replacing manual work with a simpler system. I highly recommend HR365 for improving HR operations."`,
        },

        {
            id: 14,
            name: ' Sheila S',
            rating: 5,
            company: 'SharePoint Manager, Recor Medical',
            location: 'Washington, US',
            testimonial: `"The app is incredibly easy to implement, and training end users is a breeze. The customer service is outstanding, ensuring that any issues we encounter are resolved promptly."`,
        },

        {
            id: 15,
            name: 'Ted Brister',
            rating: 5,
            company: 'IT Director, Frontier Waste Solutions',
            location: 'Texas, US',
            testimonial: `"Helpdesk 365 has completely changed our support process by centralizing requests and improving efficiency. With integration into Teams, SharePoint and Azure AD, we have full control over our data & customization. Now, assigning tickets, escalating issues, enforcing SLAs, and staying organized is easier than ever."`,
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

export default TimesheetClients;