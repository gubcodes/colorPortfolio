import DesignTitle from '../components/DesignTitle';

function DesignTest() {
  const image = 'test';
  const title = 'TEST PROJECT';

  return (
    <div className="w-screen grid-cols-12 text-center tuffyBold tracking-widest">
      <DesignTitle />
      <div className={`card bg-contain ${image}-XS sm:${image}-SM md:${image}-MD lg:${image}-LG xl:${image}-XL`}>
        </div>
        <div className="text-3xl mt-5 pb-5 ml-5 mr-5">
          {title}
        </div>
        <div className="text-lg">
          {/* description here */}
          description
        </div>
        <div className="text-base tuffyItalic">
          {/* technologies */}
          - React.js
        </div>
        <div className="text-base">
          {/* external link */}
          link here
        </div>
    </div>
  )
}

export default DesignTest;