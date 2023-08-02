import Avatar from '../../assets/avatar.jpg'

const Header = () => {
    return (
        <section data-aos="fade-in" data-aos-duration="1500">
            <div className='header'>
                <div className='header__image'>
                    <img height={"100%"} width={"100%"} src={Avatar} />
                </div>
                <div className='header__info'>
                    <span><h2>Phan Thien Quoc</h2></span>
                    <span><h3>Frontend Developer</h3></span>
                    <div>
                        <div>
                            <a href="tel:+84787875688">(+84) 787-875688</a>
                        </div>
                        <div>
                            <a href={`mailto:phanthienquoc@outlook.com`}>{`phanthienquoc@outlook.com`}</a>
                        </div>
                        <div>
                            <a href={`https://cv.tiemnaoco.store`}>{`https://cv.tiemnaoco.store`}</a>
                        </div>
                        <div>
                            <a href={`https://www.linkedin.com/in/phan-thien-quoc`}>{`https://www.linkedin.com/in/phan-thien-quoc`}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header