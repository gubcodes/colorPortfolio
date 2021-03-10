import DevelopTitle from '../components/DevelopTitle';

function DevelopPortfolio3() {
  const image = 'portfolio3';
  const title = 'THIS PORTFOLIO';
  const url = '';

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
          THIS IS WHERE YOU ARE RIGHT NOW!<br/>I DESIGNED IT TO BE SORTA WEIRD BUT ALSO EASY-TO-USE. I WROTE IT TO BE PERFORMANT, ACCESSIBLE, AND A MOBILE-FIRST-TO-A-FAULT. ALL IMAGES ARE DYNAMICALLY SERVED BASED ON YOUR DEVICE'S SCREEN SIZE. AND REUSABLE COMPONENTS MAKE IT A BREEZE FOR ME TO UPDATE WITH NEW PROJECTS AS I FINISH THEM.<br/>IF YOU HAVE NOT DONE SO YET, PLEASE TAP ONE OF THE COLORFUL CIRCLES AT THE TOP OF THE PAGE.
        </div>
        <div className="text-base tuffyItalic pb-5">
          {/* technologies */}
          - REACT JS
          <br/>
          - TAILWIND CSS
        </div>
        <div className="text-base pb-5">
          {/* external link */}
          {/* <a href={url} target="_blank">CHECK IT OUT</a> */}
        </div>
    </div>
  )
}

export default DevelopPortfolio3;