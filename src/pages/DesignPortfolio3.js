import DesignTitle from '../components/DesignTitle';
import external from '../assets/icons/external.svg';

function DesignPortfolio3() {
  const image = 'portfolio3';
  const title = 'THIS PORTFOLIO';
  const url = 'https://www.figma.com/file/fS6G0JiqwC8aRNYyMqBq09/colorPortfolio?node-id=0%3A1';

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
          THIS IS WHAT LED TO WHERE YOU ARE RIGHT NOW!<br/><br/>I DESIGNED THIS ONE TO BE SORTA WEIRD BUT ALSO SIMPLE AND EASY-TO-USE, SPECIFICALLY ON MOBILE DEVICES. I WANTED TO INCORPORATE COLOR THEMES IN A NATURAL WAY AS OPPOSED TO A "DARK MODE" TOGGLE OR A DROP-DOWN MENU. THE DOTS QUICKLY BECAME THE FOCAL POINT AND THEME OF THE SITE, TO THE POINT THAT MOST EVERYTHING BECAME CIRCULAR AS I BEGAN ACTUAL DEVELOPMENT.<br/><br/>IF A PORTFOLIO SHOULD BE A REPRESENTATION OF ITS CREATOR, THEN MAYBE I DID A GOOD JOB. IF YOU SPEND SOME TIME GETTING TO KNOW THIS ONE, YOU'LL COME TO FIND THAT IT ISN'T JUST SOME GOOFY <del>DUDE</del> WEBSITE.
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - FIGMA
          <br/>
          - PHOTOSHOP
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

export default DesignPortfolio3;