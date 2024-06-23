import './intro.scss';

function Intro() {
    const introStyle = {
        // backgroundImage: url('intro')
        backgroundImage: "url('https://images.wallpaperscraft.com/image/single/cup_coffee_books_156306_1920x1080.jpg')",
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    }

    return (
        <div className="intro container" style={introStyle}>
            <div className="intro__inner">
                <p className="intro__inner-text">here you read your favorite bloggers, writers, publicists</p>
            </div>
        </div>
    );
}

export default Intro;