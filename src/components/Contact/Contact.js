import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [iconColor, setIconColor] = useState({
    color1: "#8892b0",
    color2: "#8892b0",
    color3: "#8892b0",
    color4: "#8892b0",
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
    <div
      className="contact-bar"
      data-aos={"fade-zoom-in"}
      data-aos-duration={"1500"}
    >
      <ul className="contact-list">
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://github.com/AbhishekPragada"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color3: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color3: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color3}>
                  <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://www.instagram.com/abhishek_130101/"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color2: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color2: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color2}>
                  <path d="M57.33333,21.5c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333v57.33333c0,19.7585 16.07483,35.83333 35.83333,35.83333h57.33333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333v-57.33333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM57.33333,35.83333h57.33333c11.85367,0 21.5,9.64633 21.5,21.5v57.33333c0,11.85367 -9.64633,21.5 -21.5,21.5h-57.33333c-11.85367,0 -21.5,-9.64633 -21.5,-21.5v-57.33333c0,-11.85367 9.64633,-21.5 21.5,-21.5zM121.83333,43c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,50.16667c-19.7585,0 -35.83333,16.07483 -35.83333,35.83333c0,19.7585 16.07483,35.83333 35.83333,35.83333c19.7585,0 35.83333,-16.07483 35.83333,-35.83333c0,-19.7585 -16.07483,-35.83333 -35.83333,-35.83333zM86,64.5c11.85367,0 21.5,9.64633 21.5,21.5c0,11.85367 -9.64633,21.5 -21.5,21.5c-11.85367,0 -21.5,-9.64633 -21.5,-21.5c0,-11.85367 9.64633,-21.5 21.5,-21.5z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li className="contact-item">
          <a
            className="contact-a"
            href="https://www.linkedin.com/in/abhishek-pragada/"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color4: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color4: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill={iconColor.color4}>
                  <path d="M35.83333,21.5c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v100.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h100.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-100.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM35.83333,35.83333h100.33333v100.33333h-100.33333zM55.75163,45.26758c-6.14183,0 -9.82617,3.69207 -9.82617,8.6084c0,4.91633 3.68479,8.5944 9.21029,8.5944c6.14183,0 9.82617,-3.67807 9.82617,-8.5944c0,-4.91633 -3.68479,-8.6084 -9.21029,-8.6084zM46.41536,71.66667v50.16667h18.08464v-50.16667zM79.42122,71.66667v50.16667h18.08464v-27.4209c0,-8.16283 5.82392,-9.33626 7.57259,-9.33626c1.74867,0 6.42481,1.75393 6.42481,9.33626v27.4209h17.49674v-27.4209c0,-15.74517 -6.99657,-22.74577 -15.74707,-22.74577c-8.7505,0 -13.4179,2.91369 -15.74707,6.99869v-6.99869z"></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
        <li class="contact-item">
          <a
            className="contact-a contact-twitter"
            href="https://twitter.com/APragada"
            target="_blank"
            onMouseEnter={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color1: "#64ffda" };
              });
            }}
            onMouseLeave={() => {
              setIconColor((prevalue) => {
                return { ...prevalue, color1: "#8892b0" };
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
            >
              <g transform="translate(2.408,2.408) scale(0.972,0.972)">
                <g
                  fill="none"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="none"
                  stroke-linecap="butt"
                  stroke-linejoin="none"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g
                    fill={iconColor.color1}
                    stroke={iconColor.color1}
                    stroke-width="5"
                    stroke-linejoin="round"
                  >
                    <path d="M142.975,29.24c6.86656,-1.49156 13.37031,-3.93719 19.2425,-7.4175c1.22281,-0.73906 2.78156,-0.63156 3.89688,0.24188c1.11531,0.88687 1.58562,2.37844 1.15562,3.73562c-1.26312,3.96406 -3.35937,7.48469 -5.805,10.75c1.85438,-0.63156 3.92375,-0.71219 5.6975,-1.505c1.3975,-0.65844 3.07719,-0.29562 4.07156,0.88688c1.00781,1.1825 1.10187,2.88906 0.22844,4.16562c-4.4075,6.61125 -10.03781,12.26844 -16.34,17.0925c0.02688,0.9675 0.1075,1.92156 0.1075,2.9025c0,23.24688 -8.80156,48.13313 -25.6925,67.295c-16.89094,19.16188 -42.07281,32.5725 -74.175,32.5725c-19.80687,0 -38.22969,-5.84531 -53.75,-15.8025c-1.38406,-0.84656 -1.98875,-2.55312 -1.43781,-4.085c0.5375,-1.53187 2.08281,-2.4725 3.69531,-2.2575c2.49938,0.29563 5.01219,0.43 7.6325,0.43c12.10719,0 23.3275,-3.38625 33.0025,-9.1375c-12.1475,-3.3325 -21.95687,-12.45656 -25.8,-24.4025c-0.34937,-1.14219 -0.09406,-2.39187 0.69875,-3.29219c0.79281,-0.90031 1.98875,-1.31688 3.17125,-1.11531c0.1075,0.02688 0.215,-0.01344 0.3225,0c-9.675,-6.74562 -16.2325,-17.75094 -16.2325,-30.4225v-0.43c0.01344,-1.19594 0.645,-2.31125 1.67969,-2.92937c1.03469,-0.61813 2.31125,-0.645 3.37281,-0.08063c0.83313,0.47031 1.80063,0.68531 2.6875,1.075c-4.56875,-6.20812 -7.525,-13.77344 -7.525,-22.0375c0,-6.82625 1.84094,-13.18219 5.0525,-18.705c0.56438,-0.99437 1.58563,-1.65281 2.72781,-1.73344c1.15562,-0.08063 2.2575,0.40312 2.96969,1.30344c15.27844,18.74531 37.77281,31.00031 63.21,33.4325c-0.12094,-1.20937 -0.43,-2.41875 -0.43,-3.655c0,-20.57281 16.72969,-37.3025 37.3025,-37.3025c9.82281,0 18.5975,4.1925 25.2625,10.4275zM87.29,56.115c0,2.39188 0.33594,4.75688 0.86,6.9875c0.24188,1.04813 -0.02687,2.15 -0.72562,2.98313c-0.69875,0.81969 -1.74688,1.26312 -2.82188,1.20937c-27.1975,-1.37062 -51.2775,-13.90781 -68.4775,-32.7875c-1.34375,3.44 -2.365,7.04125 -2.365,10.965c0,10.58875 5.375,19.90094 13.545,25.37c1.33031,0.83313 1.92156,2.4725 1.43781,3.96406c-0.48375,1.49156 -1.90813,2.4725 -3.48031,2.37844c-3.84312,-0.12094 -7.39062,-1.06156 -10.8575,-2.2575c2.12313,12.38938 11.30094,22.36 23.5425,24.8325c1.53188,0.33594 2.64719,1.67969 2.70094,3.25188c0.05375,1.57219 -0.98094,2.96969 -2.48594,3.41312c-3.13094,0.86 -6.49031,1.29 -9.89,1.29c-0.18812,0 -0.34937,0 -0.5375,0c5.06594,9.32563 14.56625,15.92344 25.9075,16.125c1.43781,0.04031 2.70094,0.98094 3.15781,2.35156c0.45687,1.37062 0.01344,2.87562 -1.11531,3.77594c-10.80375,8.47906 -24.1875,13.61219 -38.7,14.7275c11.70406,5.34813 24.65781,8.385 38.3775,8.385c30.2075,0 53.29313,-12.48344 69.015,-30.315c15.72188,-17.83156 23.9725,-41.1725 23.9725,-62.6725c0,-1.41094 -0.05375,-2.795 -0.1075,-4.1925c-0.08062,-1.1825 0.44344,-2.31125 1.3975,-3.01c3.50719,-2.53969 6.73219,-5.41531 9.675,-8.6c-3.27875,0.87344 -6.3425,2.27094 -9.7825,2.6875c-1.70656,0.37625 -3.42656,-0.57781 -3.99094,-2.21719c-0.57781,-1.65281 0.16125,-3.46688 1.73344,-4.23281c3.46688,-2.08281 6.42313,-4.8375 8.815,-8.0625c-4.15219,1.67969 -8.41187,2.98313 -12.9,3.87c-1.16906,0.25531 -2.39187,-0.1075 -3.225,-0.9675c-5.54969,-5.92594 -13.47781,-9.675 -22.2525,-9.675c-16.85062,0 -30.4225,13.57188 -30.4225,30.4225z"></path>
                  </g>
                  <path
                    d="M0,172v-172h172v172z"
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  ></path>
                  <g
                    fill={iconColor.color1}
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  >
                    <path d="M117.7125,18.8125c-20.57281,0 -37.3025,16.72969 -37.3025,37.3025c0,1.23625 0.30906,2.44563 0.43,3.655c-25.43719,-2.43219 -47.93156,-14.68719 -63.21,-33.4325c-0.71219,-0.90031 -1.81406,-1.38406 -2.96969,-1.30344c-1.14219,0.08062 -2.16344,0.73906 -2.72781,1.73344c-3.21156,5.52281 -5.0525,11.87875 -5.0525,18.705c0,8.26406 2.95625,15.82938 7.525,22.0375c-0.88687,-0.38969 -1.85437,-0.60469 -2.6875,-1.075c-1.06156,-0.56437 -2.33812,-0.5375 -3.37281,0.08063c-1.03469,0.61812 -1.66625,1.73344 -1.67969,2.92937v0.43c0,12.67156 6.5575,23.67688 16.2325,30.4225c-0.1075,-0.01344 -0.215,0.02688 -0.3225,0c-1.1825,-0.20156 -2.37844,0.215 -3.17125,1.11531c-0.79281,0.90031 -1.04812,2.15 -0.69875,3.29219c3.84313,11.94594 13.6525,21.07 25.8,24.4025c-9.675,5.75125 -20.89531,9.1375 -33.0025,9.1375c-2.62031,0 -5.13312,-0.13437 -7.6325,-0.43c-1.6125,-0.215 -3.15781,0.72563 -3.69531,2.2575c-0.55094,1.53188 0.05375,3.23844 1.43781,4.085c15.52031,9.95719 33.94313,15.8025 53.75,15.8025c32.10219,0 57.28406,-13.41062 74.175,-32.5725c16.89094,-19.16187 25.6925,-44.04812 25.6925,-67.295c0,-0.98094 -0.08062,-1.935 -0.1075,-2.9025c6.30219,-4.82406 11.9325,-10.48125 16.34,-17.0925c0.87344,-1.27656 0.77938,-2.98312 -0.22844,-4.16562c-0.99438,-1.1825 -2.67406,-1.54531 -4.07156,-0.88688c-1.77375,0.79281 -3.84312,0.87344 -5.6975,1.505c2.44563,-3.26531 4.54188,-6.78594 5.805,-10.75c0.43,-1.35719 -0.04031,-2.84875 -1.15562,-3.73562c-1.11531,-0.87344 -2.67406,-0.98094 -3.89688,-0.24188c-5.87219,3.48031 -12.37594,5.92594 -19.2425,7.4175c-6.665,-6.235 -15.43969,-10.4275 -25.2625,-10.4275zM117.7125,25.6925c8.77469,0 16.70281,3.74906 22.2525,9.675c0.83313,0.86 2.05594,1.22281 3.225,0.9675c4.48813,-0.88687 8.74781,-2.19031 12.9,-3.87c-2.39187,3.225 -5.34812,5.97969 -8.815,8.0625c-1.57219,0.76594 -2.31125,2.58 -1.73344,4.23281c0.56437,1.63937 2.28437,2.59344 3.99094,2.21719c3.44,-0.41656 6.50375,-1.81406 9.7825,-2.6875c-2.94281,3.18469 -6.16781,6.06031 -9.675,8.6c-0.95406,0.69875 -1.47812,1.8275 -1.3975,3.01c0.05375,1.3975 0.1075,2.78156 0.1075,4.1925c0,21.5 -8.25062,44.84094 -23.9725,62.6725c-15.72187,17.83156 -38.8075,30.315 -69.015,30.315c-13.71969,0 -26.67344,-3.03687 -38.3775,-8.385c14.5125,-1.11531 27.89625,-6.24844 38.7,-14.7275c1.12875,-0.90031 1.57219,-2.40531 1.11531,-3.77594c-0.45688,-1.37063 -1.72,-2.31125 -3.15781,-2.35156c-11.34125,-0.20156 -20.84156,-6.79937 -25.9075,-16.125c0.18813,0 0.34938,0 0.5375,0c3.39969,0 6.75906,-0.43 9.89,-1.29c1.505,-0.44344 2.53969,-1.84094 2.48594,-3.41312c-0.05375,-1.57219 -1.16906,-2.91594 -2.70094,-3.25188c-12.24156,-2.4725 -21.41937,-12.44312 -23.5425,-24.8325c3.46688,1.19594 7.01438,2.13656 10.8575,2.2575c1.57219,0.09406 2.99656,-0.88687 3.48031,-2.37844c0.48375,-1.49156 -0.1075,-3.13094 -1.43781,-3.96406c-8.17,-5.46906 -13.545,-14.78125 -13.545,-25.37c0,-3.92375 1.02125,-7.525 2.365,-10.965c17.2,18.87969 41.28,31.41688 68.4775,32.7875c1.075,0.05375 2.12313,-0.38969 2.82188,-1.20937c0.69875,-0.83313 0.9675,-1.935 0.72562,-2.98313c-0.52406,-2.23062 -0.86,-4.59562 -0.86,-6.9875c0,-16.85062 13.57188,-30.4225 30.4225,-30.4225z"></path>
                  </g>
                  <path
                    d=""
                    fill="none"
                    stroke="none"
                    stroke-width="1"
                    stroke-linejoin="miter"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
    </React.Fragment>
  );
}
