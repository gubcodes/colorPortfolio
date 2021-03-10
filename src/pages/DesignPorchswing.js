import DesignTitle from '../components/DesignTitle';
import external from '../assets/icons/external.svg';

function DesignPorchswing() {
  const image = 'porchswing';
  const title = 'PORCHSWING';
  const url = 'https://www.figma.com/file/R5PlUxCPIOPHS7pW4CMsuO/red-badge-porchSwing?node-id=0%3A1';

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
          MY FINAL PROJECT AT EFA.<br/><br/>INSPIRED BY TRADING GOODS DURING A PANDEMIC, PORCHSWING WAS AIMED AT CREATING AN ONLINE OPTION TO SIMULATE A BRICK-AND-MORTAR SHOP FOR LOCAL MAKERS. THIS WAS MY FIRST TIME USING FIGMA TO BRAND AND DESIGN A CONCEPT. THERE IS EVEN A LO-FI PAGE STRUCTURE PROTOTYPE INCLUDED!
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - FIGMA
          <br/>
          - BETH ELLEN
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

export default DesignPorchswing;