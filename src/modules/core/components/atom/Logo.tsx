import logoImg from '../../../../assets/daoptimate_logo.png';

function Logo() {
  return (
    <div className="flex justify-center">
      <img src={logoImg} alt="daoptimate logo" className="w-10" />
    </div>
  );
}

export default Logo;
