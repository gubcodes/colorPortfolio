import DesignTitle from '../components/DesignTitle';
import external from '../assets/icons/external.svg';

function DesignWorthekik() {
  const image = 'worthekik';
  const title = 'WORTHEKIK ELEKTRONIK';
  const url = '';

  return (
    <div className="w-screen grid-cols-12 text-center tuffyBold tracking-widest">
      <DesignTitle />
      <div className={`card bg-contain ${image}-XS sm:${image}-SM md:${image}-MD lg:${image}-LG xl:${image}-XL`}>
        </div>
        <div className="text-3xl mt-5 pb-5 ml-5 mr-5">
          {title}
        </div>
        <div className="text-lg pb-5 ml-5 mr-5 tracking-wide">
          {/* description here */}
          MY BROTHER HAD AN IDEA.<br/><br/>ONLY A BRAND LOGO SET FOR NOW, IT'S A WORTH-IN-PROGRESS.
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - ILLUSTRATOR
          <br/>
          - SVG
          <br/>
          - CSS ANIMATION
        </div>
        <a href={url} target="_blank">
        <div className="text-base text-white bg-black border-black border-4 rounded-md ml-12 mr-12 pt-3 pb-3">
          {/* external link */}
          CHECK IT OUT<img className="external align-baseline ml-2" src={external} alt="external link"></img>
        </div>
        </a>
        <div className="p-4"></div>
    </div>
  )
}

export default DesignWorthekik;