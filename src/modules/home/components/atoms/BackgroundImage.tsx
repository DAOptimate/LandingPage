import handOfDaoImg from '../../../../assets/hand_of_dao.png';

function BackgroundImage() {
  return (
    <img src={handOfDaoImg} alt="robot hand holding pen" className="absolute top-0 m-auto w-96 lg:w-[32rem]" />
  );
}

export default BackgroundImage;
