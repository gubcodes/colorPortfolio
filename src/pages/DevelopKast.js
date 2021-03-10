import DevelopTitle from '../components/DevelopTitle';
import external from '../assets/icons/external.svg';

function DevelopKast() {
  const image = 'kast';
  const title = 'KAST APP';
  const url = 'https://gubcodes.github.io/staticLayout/';

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
          A STATIC RE-CREATION PROJECT FROM EFA.<br/><br/>I CREATED A NON-FUNCTIONING VERSION OF THE DESKTOP KAST APP LANDING PAGE TO PRACTICE THE FUNDAMENTALS OF WEB DEVELOPMENT.
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - HTML
          <br/>
          - CSS
          <br/>
        </div>
        {/* button */}
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

export default DevelopKast;