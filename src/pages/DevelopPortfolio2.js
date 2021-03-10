import DevelopTitle from '../components/DevelopTitle';
import external from '../assets/icons/external.svg';

function DevelopPortfolio2() {
  const image = 'portfolio2';
  const title = 'OLD PORTFOLIO';
  const url = 'https://gubcodes.github.io/portfolio/';

  return (
    <div className="w-screen grid-cols-12 text-center tuffyBold tracking-widest">
      <DevelopTitle />
      <div className={`card bg-contain ${image}-XS sm:${image}-SM md:${image}-MD lg:${image}-LG xl:${image}-XL`}>
        </div>
        <div className="text-3xl mt-5 pb-5 ml-5 mr-5">
          {title}
        </div>
        <div className="text-lg pb-5 ml-5 mr-5 tracking-wide">
          {/* description here */}
          THE OTHER ONE.<br/><br/>WHAT BEGAN AS A PORTFOLIO TURNED INTO A PLAYGROUND FOR EXPERIMENTING WITH NEW FRAMEWORKS AND CONCEPTS. UNFORTUNATELY NOT VERY CROSS-COMPATIBLE OR UPDATABLE. BUT THE PHOTOS ARE RAD, AND I WILL KEEP USING THEM FOREVER.
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - P5 JS
          <br/>
          - TAILWIND CSS
        </div>
        {/* button */}
        <a href={url} target="_blank">
        <div className="text-base text-white bg-black border-black border-4 rounded-md ml-12 mr-12 pt-3 pb-3">
          {/* external link */}
          CHECK IT OUT<img className="external align-baseline ml-2" src={external} alt="external link"></img>
        </div>
        </a>
        <a href="https://whitneyretter.com/" target="_blank">
        <div className="text-base text-white bg-black border-black border-4 rounded-md ml-12 mr-12 mt-8 pt-3 pb-3">
          {/* external link */}
          WHITNEY RETTER PHOTOGRAPHY<img className="external align-baseline ml-2" src={external} alt="external link"></img>
        </div>
        </a>
        <div className="p-4"></div>
    </div>
  )
}

export default DevelopPortfolio2;