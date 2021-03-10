import DevelopTitle from '../components/DevelopTitle';
import external from '../assets/icons/external.svg';

function DevelopPorchswing() {
  const image = 'porchswing';
  const title = 'PORCHSWING';
  const url = 'http://porchswing.herokuapp.com/';

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
          MY FINAL PROJECT AT EFA.<br/><br/>A FULL-STACK pern? E-COMMERCE SITE FOR LOCAL MAKERS. FULLY FUNCTIONAL UP UNTIL PAYMENT PROCESSING. 
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - REACT JS
          <br/>
          - BOOTSTRAP
          <br/>
          - NODE JS
          <br/>
          - EXPRESS
          <br/>
          - POSTGRESQL
          <br/>
          - BCRYPT
          <br/>
          - JWT
          <br/>
          - HEROKU
          <br/>
          - FIREBASE
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

export default DevelopPorchswing;