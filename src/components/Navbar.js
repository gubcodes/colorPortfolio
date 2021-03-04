import Design from './Design';
import Develop from './Develop';
import Else from './Else';

function Navbar(props) {
  // passed in changeBackround, toggleHome, page

  return (
    <div>
      <div className="w-screen h-16 inline-grid grid-cols-12 tuffyBold tracking-widest">
        <nav className="col-start-1 col-end-7 text-right mt-auto mb-auto text-2xl"
        onClick={() => props.toggleHome(true)}>
          JESSE HELM
        </nav>
        <div className="col-start-7 col-end-13 text-right mt-auto mb-auto flex">
          <div className="inline-grid grid-cols-4 w-full ml-4">
            <div className="col-start-1 col-end-2">
              <div className="circleSmall white" onClick={() => props.changeBackground('white')}></div>
            </div>
            <div className="col-start-2 col-end-3">
              <div className="circleSmall yellow" onClick={() => props.changeBackground('yellow')}></div>
            </div>
            <div className="col-start-3 col-end-4">
              <div className="circleSmall blue" onClick={() => props.changeBackground('blue')}></div>
            </div>
            <div className="col-start-4 col-end-5">
              <div className="circleSmall dark" onClick={() => props.changeBackground('dark')}></div>
            </div>
          </div>
        </div>
      </div>
      {
        props.page === 'design'
          ?
          <Design />
          :
          null
      }
      {
        props.page === 'develop'
          ?
          <Develop />
          :
          null
      }
      {
        props.page === 'else'
          ?
          <Else />
          :
          null
      }
    </div>
  );
}

export default Navbar;