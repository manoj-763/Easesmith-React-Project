import "./Hero.css";

const Hero = () => {
  return (
    <div className="container-fuild">
      <div className="row">
        <div className="gap-3 d-flex py-5">
          <div>
            <button className="plant-button py-2 px-5 text-white">Plants</button>
          </div>
          <div>
            <button className="pots-button py-2 px-5">Pots</button>
          </div>
        </div>
        <p style={{alignItems:"justify", fontSize:"16px"}}>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
