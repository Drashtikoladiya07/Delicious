import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import about from '../../assets/img/about.jpg';
import m1 from '../../assets/img/m1.jpg';
import m2 from '../../assets/img/m2.jpg';
import m3 from '../../assets/img/m3.jpg';
import m4 from '../../assets/img/m4.jpg';
import m5 from '../../assets/img/m5.jpg';
import m6 from '../../assets/img/m6.jpg';
import m7 from '../../assets/img/m7.jpg';
import m8 from '../../assets/img/m8.jpg';
import m9 from '../../assets/img/m9.jpg';
import specials from '../../assets/img/specials-1.jpg';
import event1 from '../../assets/img/events-slider-1.jpg';
import event2 from '../../assets/img/events-slider-2.jpg';
import event3 from '../../assets/img/events-slider-3.jpg';
import food from '../../assets/img/reservation.jpg';
import Gallery1 from '../../assets/img/gallery-1.jpg';
import Gallery2 from '../../assets/img/gallery-2.jpg';
import Gallery3 from '../../assets/img/gallery-3.jpg';
import Gallery4 from '../../assets/img/gallery-4.jpg';
import Gallery5 from '../../assets/img/gallery-5.jpg';
import Gallery6 from '../../assets/img/gallery-6.jpg';
import Gallery7 from '../../assets/img/gallery-7.jpg';
import Gallery8 from '../../assets/img/gallery-8.jpg';
import Chef1 from '../../assets/img/chefs-1.jpg';
import Chef2 from '../../assets/img/chefs-2.jpg';
import Chef3 from '../../assets/img/chefs-3.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    const data = {
        why: [
            { id: '01', head: 'Lorem Ipsum', p: 'Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat' },
            { id: '02', head: 'Repellat Nihil', p: 'Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest' },
            { id: '03', head: 'Ad ad velit qui', p: 'Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt defatis quo vel nam quis' },
        ],
        menu: [
            { img: m1, head1: 'Lobster fasque', head2: '$5.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m2, head1: 'Bread Barrel', head2: '$6.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m3, head1: 'Crab Cake', head2: '$7.95', p: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce' },
            { img: m4, head1: 'Caesar Selections', head2: '$8.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m5, head1: 'Tuscan Grilled', head2: '$9.95', p: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto' },
            { img: m6, head1: 'Mozzarella Stick', head2: '$4.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m7, head1: 'Greek Salad', head2: '$9.95', p: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives, tomatoes' },
            { img: m8, head1: 'Spinach Salad', head2: '$9.95', p: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette' },
            { img: m9, head1: 'Lobster Roll', head2: '$12.95', p: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll' },
        ],
        menu1: [
            { img: m1, head1: 'Lobster fasque', head2: '$5.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m3, head1: 'Crab Cake', head2: '$7.95', p: 'A delicate crab cake served on a toasted roll with lettuce and tartar sauce' },
            { img: m6, head1: 'Mozzarella Stick', head2: '$4.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
        ],
        menu2: [
            { img: m4, head1: 'Caesar Selections', head2: '$8.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m7, head1: 'Greek Salad', head2: '$9.95', p: 'Fresh spinach, crisp romaine, tomatoes, and Greek olives, tomatoes' },
            { img: m8, head1: 'Spinach Salad', head2: '$9.95', p: 'Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette' },
        ],
        menu3: [
            { img: m2, head1: 'Bread Barrel', head2: '$6.95', p: 'Lorem, deren, trataro, filede, nerada, Lorem, deren, trataro, filede, nerada' },
            { img: m5, head1: 'Tuscan Grilled', head2: '$9.95', p: 'Grilled chicken with provolone, artichoke hearts, and roasted red pesto' },
            { img: m9, head1: 'Lobster Roll', head2: '$12.95', p: 'Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll' },
        ],
        events: [
            {
                img: event1,
                title: 'farthday Parties',
                head: '$189',
                p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                l1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                l2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
                l3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                p2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur'
            },
            {
                img: event2,
                title: 'Private Parties',
                head: '$290',
                p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                l1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                l2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
                l3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                p2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur'
            },
            {
                img: event3,
                title: 'Castom Parties',
                head: '$99',
                p1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                l1: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                l2: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
                l3: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                p2: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur'
            },
        ],
        gallery: [
            { img: Gallery1 }, { img: Gallery2 }, { img: Gallery3 }, { img: Gallery4 }, { img: Gallery5 }, { img: Gallery6 }, { img: Gallery7 }, { img: Gallery8 },
        ],
        team: [
            { img: Chef1, name: 'Walter white', job: 'Master Chef' }, { img: Chef2, name: 'Sarah Jhonson', job: 'Patissier' }, { img: Chef3, name: 'William Anderson', job: 'Cook' },
        ],

    };

    return (
        <div>
            <section id="Home">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <div className="bg-bgImage1 w-screen bg-no-repeat bg-cover img-fluid">
                                <div className="py-64">
                                    <div className="text text-white text-center font-semibold">
                                        <h1 className='text-4xl'><span className='text-amber-500'>Delicious </span> Restaurant</h1>
                                        <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br />ex ea commodo consequat.</p>
                                        <div>
                                            <a href='#Menu'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Our Menu</button></a>
                                            <a href='#Book table'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Book a Table</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className="bg-bgImage2 w-screen bg-no-repeat bg-cover img-fluid">
                                <div className="py-64">
                                    <div className="text text-white text-center font-semibold">
                                        <h1 className='text-4xl'>At vero eos et accusamus</h1>
                                        <p className='py-4'>Nam libero tempore, cum soluta nofas est eligendi optio cumque nihil impedit quo minus id quod <br />maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus <br />autem quibusdam et aut officiis defatis aut.</p>
                                        <div>
                                            <a href='#Menu'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Our Menu</button></a>
                                            <a href='#Book table'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Book a Table</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="1000">
                            <div className="bg-bgImage3 w-screen bg-no-repeat bg-cover img-fluid">
                                <div className="py-64">
                                    <div className="text text-white text-center font-semibold">
                                        <h1 className='text-4xl'>Temporibus autem quibusdam</h1>
                                        <p className='py-4'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut <br />fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error <br />sit voluptatem accusantium.</p>
                                        <div>
                                            <a href='#Menu'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Our Menu</button></a>
                                            <a href='#Book table'><button className="btn py-2 text-sm px-4 mx-2 btn-outline-warning border-2 text-white rounded-5">Book a Table</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id="About">
                <div className='bg-amber-50'>
                    <Container className='pt-5'>
                        <Row>
                            <Col lg={6} md={12} className='py-3'>
                                <img src={about} className='img-fluid' />
                                <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"><i className='fa-solid fa-play text-white p-4 bg-amber-500 rounded-full position-relative bottom-64 left-72'></i></a>
                            </Col>
                            <Col lg={6} md={12} className='py-3'>
                                <div className='text text-neutral-700 pt-2'>
                                    <h1 className='text-black pb-3 font-semibold leading-8'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className='py-3'>
                                        <i className="fa-solid fa-check pe-2 py-2 text-amber-500"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                                        <i className="fa-solid fa-check pe-2 py-2 text-amber-500"></i> Duis aute irure dolor in reprehenderit in voluptate velit.<br />
                                        <div className='d-flex'><i className="fa-solid fa-check pe-3 py-2 text-amber-500"></i> <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor <br />in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla <br />pariatur.</p></div>
                                    </div>
                                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='text text-center py-5'>
                    <h2 className='text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto'>Why Us</h2>
                    <h1 className='text-2xl font-semibold py-2'>Why choose <span className='text-amber-500'>Our Restaurant</span></h1>
                </div>

                <Container>
                    <Row>
                        {data.why.map((item, index) => (
                            <Col lg={4} md={6} sm={12} key={index} className='pb-5'>
                                <a href='#'>
                                    <div className="py-5 px-4 text bg-zinc-50 hover:bg-amber-500 group">
                                        <h2 className='text-2xl text-amber-500 fw-bold group-hover:text-white'>{item.id}</h2>
                                        <h1 className='fw-bold pt-3 pb-2 group-hover:text-white'>{item.head}</h1>
                                        <h2 className='text-gray-500 pt-2 text-sm group-hover:text-white'>{item.p}</h2>
                                    </div>
                                </a>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id="Menu">
                <div className="text pb-20">
                    <div className="text-center pt-5">
                        <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Menu</h2>
                        <h1 className="text-2xl font-semibold py-3">Check Our Tasty <span className="text-amber-500">Menu</span></h1>
                    </div>
                    <h1 className="text-center pt-4 text-sm">
                        <button
                            onClick={() => handleCategoryClick("all")}
                            className={`px-3 ${selectedCategory === "all" ? "text-amber-500" : "text-neutral-700"} hover:text-amber-500`}>All</button>
                        <button
                            onClick={() => handleCategoryClick("Starters")}
                            className={`px-3 ${selectedCategory === "Starters" ? "text-amber-500" : "text-neutral-700"} hover:text-amber-500`}>Starters</button>
                        <button
                            onClick={() => handleCategoryClick("Salads")}
                            className={`px-3 ${selectedCategory === "Salads" ? "text-amber-500" : "text-neutral-700"} hover:text-amber-500`}>Salads</button>
                        <button
                            onClick={() => handleCategoryClick("Specialty")}
                            className={`px-3 ${selectedCategory === "Specialty" ? "text-amber-500" : "text-neutral-700"} hover:text-amber-500`}>Specialty</button>
                    </h1>

                    <section id="all" style={{ display: selectedCategory === "all" ? "block" : "none" }}>
                        <Container>
                            <Row>
                                {data.menu.map((item, index) => (
                                    <Col lg={6} md={12} sm={12} key={index} className="py-2">
                                        <div className="d-flex">
                                            <img src={item.img} className="h-20 rounded-full" />
                                            <div className="ps-3">
                                                <h2 className="fw-bold pt-2">{item.head1}</h2>
                                                <p className="text-neutral-400">{item.p}</p>
                                            </div>
                                            <h1 className="fw-bold justify-end pt-2 text-amber-500">{item.head2}</h1>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>

                    <section id="Starters" style={{ display: selectedCategory === "Starters" ? "block" : "none" }}>
                        <Container>
                            <Row>
                                {data.menu1.map((item, index) => (
                                    <Col lg={6} md={12} sm={12} key={index} className="py-2">
                                        <div className="d-flex">
                                            <img src={item.img} className="h-20 rounded-full" />
                                            <div className="ps-3">
                                                <h2 className="fw-bold pt-2">{item.head1}</h2>
                                                <p className="text-neutral-400">{item.p}</p>
                                            </div>
                                            <h1 className="fw-bold justify-end pt-2 text-amber-500">{item.head2}</h1>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>

                    <section id="Salads" style={{ display: selectedCategory === "Salads" ? "block" : "none" }}>
                        <Container>
                            <Row>
                                {data.menu2.map((item, index) => (
                                    <Col lg={6} md={12} sm={12} key={index} className="py-2">
                                        <div className="d-flex">
                                            <img src={item.img} className="h-20 rounded-full" />
                                            <div className="ps-3">
                                                <h2 className="fw-bold pt-2">{item.head1}</h2>
                                                <p className="text-neutral-400">{item.p}</p>
                                            </div>
                                            <h1 className="fw-bold justify-end pt-2 text-amber-500">{item.head2}</h1>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>

                    <section id="Specialty" style={{ display: selectedCategory === "Specialty" ? "block" : "none" }}>
                        <Container>
                            <Row>
                                {data.menu3.map((item, index) => (
                                    <Col lg={6} md={12} sm={12} key={index} className="py-2">
                                        <div className="d-flex">
                                            <img src={item.img} className="h-20 rounded-full" />
                                            <div className="ps-3">
                                                <h2 className="fw-bold pt-2">{item.head1}</h2>
                                                <p className="text-neutral-400">{item.p}</p>
                                            </div>
                                            <h1 className="fw-bold justify-end pt-2 text-amber-500">{item.head2}</h1>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>
                </div>
            </section>

            <section id='Specials'>
                <div className="text-center pt-5">
                    <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Specials</h2>
                    <h1 className="text-2xl font-semibold py-3">Check Our <span className="text-amber-500">Specials</span></h1>
                </div>
                <div className='text'>
                    <Container className='pb-20'>
                        <Row>
                            <Col lg={3} md={12} sm={12} className='font-semibold text-lg pt-14'>
                                <h2 className='pb-4 text-amber-500'>Modi sit est</h2>
                                <h2 className='pb-4 hover:text-amber-500'>Unde praesentium sed</h2>
                                <h2 className='pb-4 hover:text-amber-500'>Pariatur explicabo vel</h2>
                                <h2 className='pb-4 hover:text-amber-500'>Nostrum qui quasi</h2>
                                <h2 className='pb-4 hover:text-amber-500'>Iusto ut expedita aut</h2>
                            </Col>
                            <Col lg={6} md={12} sm={12} className='pt-12'>
                                <h1 className='font-semibold text-xl'>Architecto ut aperiam autem id</h1>
                                <p className='text-neutral-500 text-lg py-3'>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <p className='text-neutral-500 text-lg'>Et nofas maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </Col>
                            <Col lg={3} md={12} sm={12}>
                                <img src={specials} className='w-72' />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section id='Events'>
                <div className="bg-bgImage4 w-screen bg-no-repeat bg-cover img-fluid">
                    <div className="py-24 text" style={{ background: "rgba(0, 0, 0, 0.6)" }}>
                        <Container>
                            <Row>
                                <Slider {...settings}>
                                    {data.events.map((item, index) => (
                                        <Col lg={12} md={12} sm={12} key={index}>
                                            <Row>
                                                <Col lg={6} md={12} sm={12} key={index}>
                                                    <img src={item.img} alt="img" className='w-full' />
                                                </Col>
                                                <Col lg={6} md={12} sm={12} key={index} className='text-white text-lg'>
                                                    <h1 className='text-3xl'>{item.title}</h1>
                                                    <h1 className='text-3xl border-b-amber-500 border-b-2 leading-10 w-20 my-3'>{item.head}</h1>
                                                    <p>{item.p1}</p>
                                                    <ul className='py-3'>
                                                        <li className='py-2'><i class="fa-solid fa-check pe-3 text-amber-500"></i>{item.l1}</li>
                                                        <li className='py-2'><i class="fa-solid fa-check pe-3 text-amber-500"></i>{item.l2}</li>
                                                        <li className='py-2'><i class="fa-solid fa-check pe-3 text-amber-500"></i>{item.l3}</li>
                                                    </ul>
                                                    <p>{item.p2}</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    ))}
                                </Slider>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section id='Book table'>
                <div className="text text-center pt-5">
                    <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Book A Table</h2>
                    <h1 className="text-3xl font-semibold py-3">Book a <span className="text-amber-500">Table</span></h1>
                </div>
                <Container className='py-5'>
                    <Row className='bg-gray-50'>
                        <Col lg={4} md={12} sm={12}>
                            <img src={food} className='' />
                        </Col>
                        <Col lg={8} md={12} sm={12} className='py-32'>
                            <form>
                                <Row className='gap-y-4'>
                                    <Col lg={4} md={6}>
                                        <input type="text" className='border px-2 py-2 w-full' placeholder="Your Name" />
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <input type="email" className='border px-2 py-2 w-full' placeholder="Your Email" />
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <input type="text" className='border px-2 py-2 w-full' placeholder="Your Phone" />
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <input type="date" className='border px-2 py-2 w-full' placeholder="Date" />
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <input type="time" className='border px-2 py-2 w-full' placeholder="Time" />
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <input type="number" className='border px-2 py-2 w-full' placeholder="# of people" />
                                    </Col>
                                </Row>

                                <div class="form-group mt-3">
                                    <textarea className='border px-2 py-2 w-full' rows="5" placeholder="Message"></textarea>
                                </div>

                                <div class="text-center mt-3">
                                    <button type="submit" className='bg-amber-400 py-3 px-16 text-white rounded'>Book a Table</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='Gallery'>
                <div className="text text-center pt-5">
                    <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Gallery</h2>
                    <h1 className="text-2xl font-semibold py-3">Some photos from <span className="text-amber-500"> Our Restaurant</span></h1>
                </div>
                <Row className='g-0 px-2 py-5'>
                    {data.gallery.map((item, index) => (
                        <Col lg={3} md={6} sm={12} key={index} className="overflow-hidden">
                            <a href={item.img}><img src={item.img} className='w-full transition-transform duration-300 ease-in-out hover:scale-110' /></a>
                        </Col>
                    ))}
                </Row>
            </section>

            <section id='Chefs'>
                <div className="text text-center pt-5">
                    <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Chefs</h2>
                    <h1 className="text-3xl font-semibold py-3">Our Professional <span className="text-amber-500">Chefs</span></h1>
                </div>
                <Container>
                    <Row className='py-5 px-4'>
                        {data.team.map((item, index) => (
                            <Col lg={4} md={6} sm={12} key={index}>
                                <img src={item.img} className='' />
                                <div className='bg-white p-3 shadow mx-4 relative top-[-70px]'>
                                    <h3 className='border-b-2 font-semibold pb-2 w-36'>{item.name}</h3>
                                    <div className='flex justify-between'>
                                        <h1 className='py-2 text-sm text-gray-500'>{item.job}</h1>
                                        <div className='pt-2'>
                                            <i className="fa-brands px-2 fa-twitter  hover:text-amber-500 text-gray-400"></i>
                                            <i className="fa-brands px-2 fa-facebook  hover:text-amber-500 text-gray-400"></i>
                                            <i className="fa-brands px-2 fa-instagram hover:text-amber-500 text-gray-400"></i>
                                            <i className="fa-brands px-2 fa-linkedin  hover:text-amber-500 text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id='Contact'>
                <div className="text text-center pt-5">
                    <h2 className="text-amber-500 text-uppercase font-semibold py-2 px-3 rounded-full tracking-widest text-sm bg-amber-50 w-fit mx-auto">Contact</h2>
                    <h1 className="text-3xl font-semibold py-3">Check Our <span className="text-amber-500">Contact</span></h1>
                </div>
                <div className='py-5'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21926.62048584739!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e1!3m2!1sen!2sus!4v1743598231583!5m2!1sen!2sus" className='border-0' width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Container className='py-5 text text-gray-500'>
                    <Row>
                        <Col lg={4}>
                            <div class="contact-info bg-white shadow-xl p-5">
                                <h1 className='text-xl font-bold text-black'>Get in touch</h1>
                                <p className='py-2'>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>
                                <div className='flex'>
                                    <i className="fa-solid fa-location-dot text-amber-500 pt-3 pe-4"></i>
                                    <h2><h1 className='pt-3 font-semibold text-black'>Location:</h1><br />A108 Adam Street, New York, NY 535022</h2>
                                </div>
                                <div className='flex'>
                                    <i className="fa-regular fa-envelope text-amber-500 pt-3 pe-4"></i>
                                    <h2><h1 className='pt-3 font-semibold text-black'>Email:</h1><br />info@example.com</h2>
                                </div>
                                <div className='flex'>
                                    <i className="fa-solid fa-phone text-amber-500 pt-3 pe-4"></i>
                                    <h2><h1 className='pt-3 font-semibold text-black'>Call:</h1><br />+1 5589 55488 55</h2>
                                </div>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div class="contact-form">
                                <form>
                                    <Row class="mb-3">
                                        <Col lg={6} className='py-4'>
                                            <input type="text" class="form-control" placeholder="Your Name" />
                                        </Col>
                                        <Col lg={6} className='py-4'>
                                            <input type="email" class="form-control" placeholder="Your Email" />
                                        </Col>
                                    </Row>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" placeholder="Subject" />
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control" rows="9" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-custom bg-amber-500 text-white px-5">Send Message</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <footer className="bg-black text-light py-4 text">
                    <Container>
                        <Row className="text-center text-md-start py-5">
                            <Col lg={3} className='flex'>
                                <i className="fa fa-location-dot text-warning pe-3"></i>
                                <div>
                                    <h1 className="fw-bold">Address</h1>
                                    <p className='py-3'>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </Col>
                            <Col lg={3} className='flex'>
                                <i className="fa fa-phone text-warning pe-3"></i>
                                <div>
                                    <h1 className="fw-bold">Contact</h1>
                                    <p className='pt-3'><strong>Phone:</strong> +1 5589 55488 55</p>
                                    <p className='pb-3'><strong>Email:</strong> info@example.com</p>
                                </div>
                            </Col>
                            <Col lg={3} className='flex'>
                                <i className="fa fa-clock text-warning pe-3"></i>
                                <div>
                                    <h1 className="fw-bold">Opening Hours</h1>
                                    <p className='pt-3'><strong>Mon-Sat:</strong> 11AM - 11PM</p>
                                    <p className='pb-3'><strong>Sunday:</strong> Closed</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <h1 className="fw-bold">Follow Us</h1>
                                <div className="d-flex justify-content-center justify-content-md-start gap-3 py-3">
                                    <i className="fa-brands px-2 fa-twitter hover:text-amber-500 text-gray-400"></i>
                                    <i className="fa-brands px-2 fa-facebook hover:text-amber-500 text-gray-400"></i>
                                    <i className="fa-brands px-2 fa-instagram hover:text-amber-500 text-gray-400"></i>
                                    <i className="fa-brands px-2 fa-linkedin hover:text-amber-500 text-gray-400"></i>
                                </div>
                            </Col>
                        </Row>
                        <hr className="border-secondary" />
                        <div className="text-center py-3">
                            <p>&copy; Copyright <strong>Delicious</strong> All Rights Reserved</p>
                            <p>Designed by <a href="https://bootstrapmade.com/" className="text-warning">BootstrapMade</a></p>
                        </div>
                    </Container>
                </footer>
            </section>

        </div>
    );
};

export default Home;