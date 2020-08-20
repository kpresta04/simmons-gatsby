import React from "react"
import Layout from "~/components/Layout/Layout"
import tw from "twin.macro"

const Heading = tw.h1`text-3xl xl:text-4xl text-center mt-12 mb-6 font-extrabold`

export default function Services() {
  return (
    <Layout>
      <div style={{ minHeight: "70vh" }}>
        {/* <table width="637">
          <tbody>
            <tr>
              <td width="441">
                <strong>Description</strong>
              </td>
              {/* <td width="92">&nbsp;</td> */}
        {/* <td width="104">
                <strong>Price</strong>
              </td>
            </tr>
            {/* <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr> 
            <tr>
              <td colSpan="2">  
			*/}
        <Heading>Simmons Services - Full List</Heading>
        <table
          width="356"
          style={{ margin: "3rem auto", width: "100%", maxWidth: "1000px" }}
        >
          <thead>
            <tr>
              <th>Description</th>
              <th>&nbsp;</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="2" width="292">
                BARREL-DENTS REMOVED( AT CUSTOMER RISK)
              </td>
              <td width="64">$95.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                BARREL-STRAIGHTEN BARREL( AT CUSTOMER RISK)110
              </td>
              <td width="64">$95.00</td>
            </tr>
            <tr>
              <td width="228">BLUE O/U BARREL ONLY</td>
              <td width="64">&nbsp;</td>
              <td width="64">$305.00</td>
            </tr>
            <tr>
              <td width="228">BLUE OVER/UNDER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$485.00</td>
            </tr>
            <tr>
              <td width="228">BLUE RECEIVER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$180.00</td>
            </tr>
            <tr>
              <td width="228">BLUE SINGLE BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$180.00</td>
            </tr>
            <tr>
              <td width="228">BLUE SINGLE BARREL GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$315.00</td>
            </tr>
            <tr>
              <td width="228">BLUE SMALL PARTS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$55.00</td>
            </tr>
            <tr>
              <td width="228">BLUE SXS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$485.00</td>
            </tr>
            <tr>
              <td width="228">BLUE SXS&nbsp; BARREL ONLY</td>
              <td width="64">&nbsp;</td>
              <td width="64">$305.00</td>
            </tr>
            <tr>
              <td width="228">BLUE-RUST BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$70.00</td>
            </tr>
            <tr>
              <td width="228">BORE SIGHT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td width="228">CASE COLOR</td>
              <td width="64">&nbsp;</td>
              <td width="64">$695.00</td>
            </tr>
            <tr>
              <td width="228">CENTER SIGHT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                CHAMBER CASTING TO DETERMINE CALIBER/ CHECK HEADSPACE+TEST
                FIRE&nbsp;
              </td>
              <td width="64">$120.00</td>
            </tr>
            <tr>
              <td width="228">CHARGE FOR SHIPPING COD</td>
              <td width="64">&nbsp;</td>
              <td width="64">$15.00</td>
            </tr>
            <tr>
              <td width="228">CHECK HEADSPACE&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">CHOKE -OPEN CHOKE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$80.00</td>
            </tr>
            <tr>
              <td width="228">CHOKE TUBE SIEZED-REMOVE FROM BBL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">CHOKE TUBES TRU CHOKE TUBES</td>
              <td width="64">&nbsp;</td>
              <td width="64">$220.00</td>
            </tr>
            <tr>
              <td width="228">CHOKE TUBES-BRILEY&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$345.00</td>
            </tr>
            <tr>
              <td width="228">CHOKE-POLY CHOKE-INSTALLED</td>
              <td width="64">&nbsp;</td>
              <td width="64">$185.00</td>
            </tr>
            <tr>
              <td width="228">FUNCTION TEST GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN, OIL AND TEST FIRE HANDGUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN, OIL, TESTFIRE – O/U</td>
              <td width="64">&nbsp;</td>
              <td width="64">$145.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN, OIL, TESTFIRE – SXS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$145.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN–OIL–AND TEST FIRE-RIFLE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN-OIL-TEST FIRE SHOTGUNS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">CLEAN-REMOVE COSMOLINE&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$100.00</td>
            </tr>
            <tr>
              <td width="228">CROWN BARREL SHOTGUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$30.00</td>
            </tr>
            <tr>
              <td width="228">CUSTOMER SATISFACTION&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$0.00</td>
            </tr>
            <tr>
              <td width="228">CUT &amp; CROWN AND RE-BEAD BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$70.00</td>
            </tr>
            <tr>
              <td width="228">CUT &amp; CROWN BARREL SHOTGUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">CUT &amp; CROWN RIFLE BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$140.00</td>
            </tr>
            <tr>
              <td width="228">CUTTS COMP.-INSTALLED</td>
              <td width="64">&nbsp;</td>
              <td width="64">$185.00</td>
            </tr>
            <tr>
              <td width="228">DELUXE CLEANING ON WOOD</td>
              <td width="64">&nbsp;</td>
              <td width="64">$135.00</td>
            </tr>
            <tr>
              <td width="228">DEPOSIT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$0.00</td>
            </tr>
            <tr>
              <td width="228">DIAGNOSTIC&nbsp;&nbsp;&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">DISASSEMBLE &amp; REASSEMBLE GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                DISASSEMBLE UPPER THREAD BARREL 1/2 X 28 TPI
              </td>
              <td width="64">$175.00</td>
            </tr>
            <tr>
              <td width="228">DONUT POSTS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$80.00</td>
            </tr>
            <tr>
              <td width="228">DRAW FILE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">DRILL AND TAP (PER HOLE)</td>
              <td width="64">&nbsp;</td>
              <td width="64">$30.00</td>
            </tr>
            <tr>
              <td width="228">DRILL AND TAP-SETUP FEE&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">DUCK BILL ON&nbsp; RECEIVER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$120.00</td>
            </tr>
            <tr>
              <td width="228">FINISH GRIPS HAND GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$135.00</td>
            </tr>
            <tr>
              <td width="228">FINISH STOCK &amp; FOREND</td>
              <td width="64">&nbsp;</td>
              <td width="64">$325.00</td>
            </tr>
            <tr>
              <td width="228">FINISH STOCK- RIFLE&nbsp;</td>
              <td rowSpan="3" width="64">
                &nbsp;
              </td>
              <td width="64">$425.00</td>
            </tr>
            <tr>
              <td width="228">&nbsp;</td>
              <td width="64">&nbsp;</td>
            </tr>
            <tr>
              <td width="228">
                FINISH STOCK &amp; FOREND -SXS OR&nbsp; O/U&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </td>
              <td width="64">$525.00</td>
            </tr>
            <tr>
              <td width="228">FREIGHT CHARGES BOX ONLY</td>
              <td width="64">&nbsp;</td>
              <td width="64">$35.00</td>
            </tr>
            <tr>
              <td width="228">FREIGHT CHARGES WITH HARD CASE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$55.00</td>
            </tr>
            <tr>
              <td width="228">FULL LENGTH RAMP RECEIVER 5/16″</td>
              <td width="64">&nbsp;</td>
              <td width="64">$115.00</td>
            </tr>
            <tr>
              <td width="228">GOLD PLATE TRIGGER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$9 0.00</td>
            </tr>
            <tr>
              <td width="228">GUN TRANSFER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$35.00</td>
            </tr>
            <tr>
              <td width="228">HANDLING / PACKING</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                HAZARDOUS WASTE / DISPOSAL / TEST FIRE
              </td>
              <td width="64">$15.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                HAZARDOUS WASTE/ DISPOSAL / TEST FIRE&nbsp; AMMO PROVIDED
              </td>
              <td width="64">$5.00</td>
            </tr>
            <tr>
              <td width="228">HEADSPACE-&nbsp; SET THE HEADSPACE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                <p>HOURLY RATE O/U &amp; SXS</p>
                <p>
                  INSPECTION, CHECKED HEADSPACE,TIMNG
                  GUN.&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </td>
              <td width="64">
                <p>$120.00/hr</p>
                <p>$150.00</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3" width="356">
                INTERNET SPECIAL-INCLUDES 5/16″ VENT RIB-REBLUE,&nbsp;
              </td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                JEWEL BOLT/CARRIER,&nbsp; MEDIUM FANCY WOOD,&nbsp;
              </td>
              <td width="64">$1,575.00</td>
            </tr>
            <tr>
              <td width="228">JEWEL RIFLE BOLT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">JEWELL BOLT AND CARRIER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">LENGTHEN FORCING CONE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">LIGHTEN TRIGGER PULL ON&nbsp; RIFLE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$125.00</td>
            </tr>
            <tr>
              <td width="228">LIGHTEN TRIGGER PULL ON HANDGUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$135.00</td>
            </tr>
            <tr>
              <td width="228">MINIMUM CHARGE.</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                MONOBLOCK SEPERATION REPAIR &amp; BLUE
              </td>
              <td width="64">$395.00</td>
            </tr>
            <tr>
              <td width="228">MOUNT SCOPE AND BORE SIGHT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$75.00</td>
            </tr>
            <tr>
              <td width="228">MUZZLE BRAKE RIFLE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$345.00</td>
            </tr>
            <tr>
              <td width="228">MUZZLE BREAK PROVIDED</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">PAD-CUSTOMER PAD INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">PAD-INSTALL SPACER AND FIT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td width="228">PAD-KICKEEZ -INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$140.00</td>
            </tr>
            <tr>
              <td width="228">PAD-SHORTEN STOCK AND RESET PAD</td>
              <td width="64">&nbsp;</td>
              <td width="64">$125.00</td>
            </tr>
            <tr>
              <td width="228">PAD-WINCHESTER-INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$145.00</td>
            </tr>
            <tr>
              <td width="228">PARTS.</td>
              <td width="64">&nbsp;</td>
              <td width="64">&nbsp;</td>
            </tr>
            <tr>
              <td width="228">PATTERN CHECK BY TEST FIRE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">PLANO GUN CASE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$35.00</td>
            </tr>
            <tr>
              <td width="228">POLISH BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">POLISH BOLT &amp; CARRIER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">RAMP RECEIVER M12&nbsp; 5/16″ &amp; BLUE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$80.00</td>
            </tr>
            <tr>
              <td width="228">REHINGE GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$145.00</td>
            </tr>
            <tr>
              <td width="228">REPAIR CRACK IN BUTT STOCK</td>
              <td width="64">&nbsp;</td>
              <td width="64">$75.00</td>
            </tr>
            <tr>
              <td width="228">SAFETY CHECK ON GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SHIPPING&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$55.00</td>
            </tr>
            <tr>
              <td width="228">SHIPPING&nbsp; CARDBOAD BOX</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SIGHT CTR INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td width="228">SIGHT FRT&nbsp; &amp; CTR INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SIGHT FRT NSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td width="228">SIGHT HI VIZ-INSTALL&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">$30.00</td>
            </tr>
            <tr>
              <td width="228">SIGHTS HI VIZ- COMP SIGHT</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SIGHTS ON HANDGUN-INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SIMGUARD COATING FOR GUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$260.00</td>
            </tr>
            <tr>
              <td width="228">SIMGUARD O/U</td>
              <td width="64">&nbsp;</td>
              <td width="64">$360.00</td>
            </tr>
            <tr>
              <td width="228">SIMGUARD SCOPE RINGS &amp; BASES</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            <tr>
              <td width="228">SLING SWIVELS INSTALL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$60.00</td>
            </tr>
            <tr>
              <td width="228">SOLDER FOREND LUG</td>
              <td width="64">&nbsp;</td>
              <td width="64">$90.00</td>
            </tr>
            <tr>
              <td width="228">SOLDER SIDE RIBS</td>
              <td width="64">&nbsp;</td>
              <td width="64">$220.00</td>
            </tr>
            <tr>
              <td width="228">SOLDER SOLID RIB</td>
              <td width="64">&nbsp;</td>
              <td width="64">$180.00</td>
            </tr>
            <tr>
              <td colSpan="2" width="292">
                SOLDER VENT RIB &amp; REBLUE BARREL ONLY
              </td>
              <td width="64">$360.00</td>
            </tr>
            {/* <tr>
              <td width="228">&nbsp;</td>
              <td width="64">&nbsp;</td>
              <td width="64">&nbsp;</td>
            </tr> */}
            <tr>
              <td width="228">STAKE FEED LATCH</td>
              <td rowSpan="3" width="64">
                &nbsp;
              </td>
              <td width="64">$25.00</td>
            </tr>
            <tr>
              <td width="228">STAMP RIFLE CALIBER ON BARREL</td>
              <td width="64">$75.00</td>
            </tr>
            <tr>
              <td width="228">THREAD BARREL-for Suppressor etc.</td>
              <td width="64">$175.00</td>
            </tr>
            <tr>
              <td width="228">TRAP RAMP</td>
              <td width="64">&nbsp;</td>
              <td width="64">$115.00</td>
            </tr>
            <tr>
              <td width="228">ULTRA PORTING SHOTGUN</td>
              <td width="64">&nbsp;</td>
              <td width="64">$180.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB AND REBLUE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$435.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB BBL ONLY REBLUE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$325.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB REPAIR &amp; BLUE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$225.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB-OLYMPIC &amp; REBLUE</td>
              <td width="64">&nbsp;</td>
              <td width="64">$590.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB-REMOVE&nbsp; RIB</td>
              <td width="64">&nbsp;</td>
              <td width="64">$50.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB-RIB &amp; REBLUE OVER/UNDER</td>
              <td width="64">&nbsp;</td>
              <td width="64">$585.00</td>
            </tr>
            <tr>
              <td width="228">VENT RIB-RIB AND REBLUE O/U BARREL</td>
              <td width="64">&nbsp;</td>
              <td width="64">$435.00</td>
            </tr>
            <tr>
              <td width="228">VENTILATED RIB-STRAIGHTED</td>
              <td width="64">&nbsp;</td>
              <td width="64">$45.00</td>
            </tr>
            {/* <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr> */}
            {/* <tr>
                      <td colSpan="2">
                        Simmons Gun Repair and Sales since 1945!
                      </td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr> */}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
