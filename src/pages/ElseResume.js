import React, { useState } from 'react';
import ElseTitle from '../components/ElseTitle';
import external from '../assets/icons/external.svg';

function ElseResume() {
  const [school, setSchool] = useState(true);
  const image = 'resume';
  const title = 'RESUME';
  const url = '';

  function toggleSchool(value) {
    setSchool(value)
  };

  return (
    <div className="w-screen grid-cols-12 text-center tuffyBold tracking-widest">
      <ElseTitle />
      <div className={`card bg-contain ${image}-XS sm:${image}-SM md:${image}-MD lg:${image}-LG xl:${image}-XL`}>
      </div>
      <div className="text-3xl mt-5 pb-5 ml-5 mr-5">
        {title}
      </div>
      <div className="text-lg pb-5 ml-5 mr-5 tracking-wide">
        {/* INTRODUCTION */}
          THERE ONCE WAS A BOY FROM INDIANA...<br />
      </div>

      <div className="text-xl mt-5 pb-5 ml-5 mr-5 grid grid-cols-2 text-white ">
        {/* SECTION HEADER */}
        <div className="bg-black border-black border-4 rounded-md ml-2 mr-2 pt-3 pb-3"
          onClick={() => toggleSchool(true)}>
          {
            school
              ?
              <u>SCHOOL</u>
              :
              <span>SCHOOL</span>
          }
        </div>
        <div className="bg-black border-black border-4 rounded-md ml-2 mr-2 pt-3 pb-3"
          onClick={() => toggleSchool(false)}>
          {
            !school
              ?
              <u>WORK</u>
              :
              <span>WORK</span>
          }
        </div>
      </div>
      {
        school
          ?
          <div>
            
              <div className="text-2xl mt-5 pb-5 ml-5 mr-5">
                {/* SECTION HEADER */}
                <u>EDUCATION</u>
              </div>
            
              <div className="border-black border-4 rounded-md ml-2 mr-2">
                <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                  {/* BUSINESS, LOCATION, YEARS */}
                  ELEVEN FIFTY ACADEMY<br />INDIANAPOLIS, IN<br />2020-2021<br />
                </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                EFA IS A FULL-TIME IMMERSIVE CODING AND DESIGN BOOTCAMP. I AM A GRADUATE OF BOTH THEIR WEB DEVELOPMENT AND UX/UI PROGRAMS. MANY OF MY PROJECTS AS A STUDENT ARE FEATURED IN THIS PORTFOLIO.
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* technologies */}
                - HONORED WITH CORE VALUES AWARD FOR MY INTEGRITY
                <br />
                - OBTAINED CIW USER INTERFACE DESIGNER CERTIFICATION
              </div>
            </div>
          </div>

          :

          <div>
            <div className="text-2xl mt-5 pb-5 ml-5 mr-5">
              {/* SECTION HEADER */}
              <u>EMPLOYMENT HISTORY</u>
            </div>

            <div className="border-black border-4 rounded-md ml-2 mr-2">
              <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                {/* BUSINESS, LOCATION, YEARS */}
                PROVIDER COFFEE & LONG DRINKS<br />INDIANAPOLIS, IN<br />2020<br />
              </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                BEER & WINE MANAGEMENT, BARTENDING, COFFEE SERVICE
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* LIST */}
                - CO-DEVELOPED AN ENTIRELY NEW BAR CONCEPT TO COMPLIMENT THE BEST COFFEE PROGRAM IN INDY
                <br />
                - ITEM 2
              </div>
            </div>

            <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
              {/* BUSINESS, LOCATION, YEARS */}
              UPLAND BREWING CO. FTN SQ<br />INDIANAPOLIS, IN<br />2019-2020
            </div>
            <div className="text-base pb-5 ml-2 mr-2">
              {/* DESCRIPTION */}
              DRAFT SYSTEM MAINTENANCE, SHIFT MANAGEMENT, BARTENDING
            </div>
            <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
              {/* LIST */}
              - ITEM 1
              <br />
              - ITEM 2
            </div>

            <div className="border-black border-4 rounded-md ml-2 mr-2">
              <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                {/* BUSINESS, LOCATION, YEARS */}
                CENTRAL STATE BREWING<br/>+ THE KOELSCHIP<br />INDIANAPOLIS, IN<br />2017-2019<br />
                </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                SALES REPRESENTATION, TAPROOM MANAGEMENT, EVENT PLANNING
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* LIST */}
                - ITEM 1
                <br />
                - ITEM 2
              </div>
            </div>

            <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
              {/* BUSINESS, LOCATION, YEARS */}
              CAVALIER DISTRIBUTING<br />INDIANAPOLIS, IN<br />2016-2017
            </div>
            <div className="text-base pb-5 ml-2 mr-2">
              {/* DESCRIPTION */}
              SALES SUPPORT, MERCHANDISING
            </div>
            <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
              {/* LIST */}
              - ITEM 1
              <br />
              - ITEM 2
            </div>
              
            <div className="border-black border-4 rounded-md ml-2 mr-2">
              <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                {/* BUSINESS, LOCATION, YEARS */}
                BIG WOODS BLOOMINGTON<br/>+ QUAFF ON! BREWING<br />BLOOMINGTON/NASHVILLE, IN<br />2014-2017<br />
                </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                RESTAURANT MANAGEMENT, BREWERY TOUR COORDINATION, EVENT PLANNING, BARTENDING
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* LIST */}
                - ITEM 1
                <br />
                - ITEM 2
              </div>
            </div>

            <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
              {/* BUSINESS, LOCATION, YEARS */}
              AIM TO PLEASE<br />BLOOMINGTON, IN<br />2014-2016
            </div>
            <div className="text-base pb-5 ml-2 mr-2">
              {/* DESCRIPTION */}
              RESIDENTIAL PLUMBING AND ELECTRICAL SERVICE
            </div>
            <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
              {/* LIST */}
              - ITEM 1
              <br />
              - ITEM 2
            </div>

            <div className="border-black border-4 rounded-md ml-2 mr-2">
              <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                {/* BUSINESS, LOCATION, YEARS */}
                PITA PIT<br />BLOOMINGTON, IN<br />2012-2014<br />
                </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                RESTAURANT MANAGEMENT
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* LIST */}
                - ITEM 1
                <br />
                - ITEM 2
              </div>
            </div>

            <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
              {/* BUSINESS, LOCATION, YEARS */}
              P.I.P.E., INC<br />INDIANAPOLIS, IN<br />2011-2014
            </div>
            <div className="text-base pb-5 ml-2 mr-2">
              {/* DESCRIPTION */}
              LARGE-SCALE COMMERCIAL PLUMBING
            </div>
            <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
              {/* LIST */}
              - ITEM 1
              <br />
              - ITEM 2
            </div>

            <div className="border-black border-4 rounded-md ml-2 mr-2">
              <div className="text-lg pb-5 pt-5 ml-5 mr-5 tracking-wide">
                {/* BUSINESS, LOCATION, YEARS */}
                BRUNO'S PIZZERIA<br />INDIANAPOLIS, IN<br />2007-2009<br />
                </div>
              <div className="text-base pb-5 ml-2 mr-2">
                {/* DESCRIPTION */}
                RESTAURANT MANAGEMENT, FOOD PREP, DELIVERY
              </div>
              <div className="text-base tuffyItalic pb-5 ml-2 mr-2">
                {/* LIST */}
                - ITEM 1
                <br />
                - ITEM 2
              </div>
            </div>

          </div>
      }

      <div className="p-4"></div>
    </div>
  )
}

export default ElseResume;