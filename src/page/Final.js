import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import finalImage from '../images/success.png';
import gif from '../images/the origina.gif';
const Final = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 4200);
  }, [navigate]);
  return (
    <>
      <header className=" container final__header"></header>
      <main className="main__final container">
        <section className="final__section">
          <img className="final__image" src={finalImage} alt="final_image_goodluck"></img>
        </section>
        <section className="final__illustration">
          <h2>Payment Successful!!</h2>
          <img src={gif} alt="clapping_gif" className="final__giphy" />
        </section>
      </main>
      <footer className="footer final"></footer>
    </>
  );
};

export default Final;
