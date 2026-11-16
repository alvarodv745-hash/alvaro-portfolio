import { useEffect, useState, useRef } from "react";
import { Github, Download, ExternalLink, Terminal } from "lucide-react";

/* ─── constants ─── */

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663409244183/gDgPsEnWTTNS5RbR5A8hnT/hero-bg-UYKMePmPr9B43D6hXBr8dE.webp";

const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" /></svg>
);

const IconFlutter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" /></svg>
);

const IconPython = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" /></svg>
);

const IconJava = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" fill="currentColor" {...props}><path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" /><path d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" /><path d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" /><path d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" /><path d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" /></svg>
);

const IconNode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" /></svg>
);

const IconMySQL = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z" /></svg>
);

const IconJavaScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" /></svg>
);

const IconTypeScript = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></svg>
);



const techStack = [
  { name: "React", Icon: IconReact },
  { name: "Flutter", Icon: IconFlutter },
  { name: "Python", Icon: IconPython },
  { name: "Java", Icon: IconJava },
  { name: "Node.js", Icon: IconNode },
  { name: "MySQL", Icon: IconMySQL },
  { name: "JavaScript", Icon: IconJavaScript },
  { name: "TypeScript", Icon: IconTypeScript },
];

/*
 * Tiny 64×64 SVG grid encoded as a data-URI.
 * Replaces the two linear-gradient background-image layers
 * with a single, cacheable, GPU-friendly pattern.
 */
const GRID_SVG = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">` +
  `<line x1="0" y1="0" x2="64" y2="0" stroke="rgb(74,222,128)" stroke-opacity="0.025" stroke-width="1"/>` +
  `<line x1="0" y1="0" x2="0" y2="64" stroke="rgb(74,222,128)" stroke-opacity="0.025" stroke-width="1"/>` +
  `</svg>`
)}`;

/* ─── neon mesh constants ─── */

/** The neon green in sRGB (equivalent to oklch(0.82 0.22 145)) */
const NEON_R = 74;
const NEON_G = 222;
const NEON_B = 128;

/** Desktop mesh grid definition */
const MESH_COLS = 18;
const MESH_ROWS = 14;
const CURSOR_RADIUS = 260;          // px – influence area around cursor
const MAX_NODE_ALPHA = 0.45;        // peak node brightness
const MAX_LINE_ALPHA = 0.14;        // peak connection brightness
const LINE_CONNECT_DIST = 130;      // px – max distance to draw a line
const NODE_SIZE = 1.6;              // px radius of mesh dots
const LERP_FACTOR = 0.08;           // cursor smoothing per 60fps frame (lower = smoother)
const AMBIENT_X_RATIO = 0.28;       // ambient fallback position (desktop)
const AMBIENT_Y_RATIO = 0.35;

/** Narrow / touch layouts */
const MOBILE_BREAKPOINT = 768;      // px – below this the mesh uses square cells
const MOBILE_CELL = 40;             // px – target spacing between mesh nodes
const MOBILE_RADIUS_RATIO = 0.42;   // influence radius relative to section width
const MOBILE_NODE_SIZE = 1.2;       // px radius of mesh dots on phones
const TOUCH_LERP_FACTOR = 0.14;     // follow the finger a bit tighter than the mouse
const RELEASE_LERP_FACTOR = 0.045;  // slow, soft glide back after lifting the finger
const IDLE_DRIFT_SPEED = 0.00035;   // rad/ms – ambient wander when not touching
const MAX_DPR = 2;                  // cap canvas resolution (perf on 3x phones)
const FRAME_MS = 1000 / 60;

/* ─── TypewriterText ─── */

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (idx < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx((prev) => prev + 1);
      }, 55);
      return () => clearTimeout(timeout);
    }
  }, [idx, text, started]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-[oklch(0.82_0.22_145)]">|</span>
    </span>
  );
}

/* ─── NeonMeshCanvas ─── */

interface MeshNode {
  /** grid position (never changes) */
  baseX: number;
  baseY: number;
}

interface MeshLayout {
  cols: number;
  rows: number;
  radius: number;
  connectDist: number;
  nodeSize: number;
  /** narrow layout: square cells + idle drift */
  compact: boolean;
}

interface Point {
  x: number;
  y: number;
}

/**
 * Desktop keeps the original 18×14 grid. Narrow screens get roughly square
 * cells (~52px) so the mesh isn't squashed horizontally and stretched
 * vertically, and the influence radius scales with the width.
 */
function getMeshLayout(w: number, h: number): MeshLayout {
  if (w >= MOBILE_BREAKPOINT) {
    return {
      cols: MESH_COLS,
      rows: MESH_ROWS,
      radius: CURSOR_RADIUS,
      connectDist: LINE_CONNECT_DIST,
      nodeSize: NODE_SIZE,
      compact: false,
    };
  }
  const cols = Math.max(4, Math.round(w / MOBILE_CELL) + 1);
  const rows = Math.max(4, Math.round(h / MOBILE_CELL) + 1);
  const cellX = w / (cols - 1);
  const cellY = h / (rows - 1);
  return {
    cols,
    rows,
    radius: Math.min(w * MOBILE_RADIUS_RATIO, CURSOR_RADIUS),
    // reach the diagonal neighbour, never the next ring
    connectDist: Math.hypot(cellX, cellY) * 1.05,
    nodeSize: MOBILE_NODE_SIZE,
    compact: true,
  };
}

function buildNodes(w: number, h: number, layout: MeshLayout): MeshNode[] {
  const nodes: MeshNode[] = [];
  for (let r = 0; r < layout.rows; r++) {
    for (let c = 0; c < layout.cols; c++) {
      nodes.push({
        baseX: (c / (layout.cols - 1)) * w,
        baseY: (r / (layout.rows - 1)) * h,
      });
    }
  }
  return nodes;
}

function NeonMeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.closest("section");
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !section || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mutable state lives in the effect closure (no re-renders)
    let w = 0;
    let h = 0;
    let dpr = 1;
    let layout = getMeshLayout(0, 0);
    let nodes: MeshNode[] = [];
    let raf = 0;
    let running = false;
    let lastTime = 0;
    let driftTime = 0;
    let inputActive = false;
    let activeLevel = 0; // 0 → ambient, 1 → following input (eases the glow)
    const cursor: Point = { x: 0, y: 0 };
    const smooth: Point = { x: 0, y: 0 };

    /** Where the light rests when nobody is interacting. */
    const ambientPoint = (): Point => {
      if (!layout.compact) {
        return { x: w * AMBIENT_X_RATIO, y: h * AMBIENT_Y_RATIO };
      }
      // Gentle Lissajous wander so the mesh never looks frozen on phones
      const t = reducedMotion ? 0 : driftTime * IDLE_DRIFT_SPEED;
      return {
        x: w * (0.5 + 0.3 * Math.sin(t)),
        y: h * (0.32 + 0.14 * Math.sin(t * 0.73 + 1.1)),
      };
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const focus = smooth;
      const radius = layout.radius;
      const radiusSq = radius * radius;
      const connectSq = layout.connectDist * layout.connectDist;

      // Collect only lit nodes so the line pass stays small
      const lit: number[] = [];
      const intensity = new Float32Array(nodes.length);
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].baseX - focus.x;
        const dy = nodes[i].baseY - focus.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < radiusSq) {
          intensity[i] = 1 - Math.sqrt(distSq) / radius;
          lit.push(i);
        }
      }

      // Lines between neighbouring lit nodes
      ctx.lineWidth = 0.8;
      for (let a = 0; a < lit.length; a++) {
        const i = lit[a];
        for (let b = a + 1; b < lit.length; b++) {
          const j = lit[b];
          const dx = nodes[i].baseX - nodes[j].baseX;
          const dy = nodes[i].baseY - nodes[j].baseY;
          if (dx * dx + dy * dy > connectSq) continue;

          const lineAlpha = Math.min(intensity[i], intensity[j]) * MAX_LINE_ALPHA;
          ctx.strokeStyle = `rgba(${NEON_R},${NEON_G},${NEON_B},${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].baseX, nodes[i].baseY);
          ctx.lineTo(nodes[j].baseX, nodes[j].baseY);
          ctx.stroke();
        }
      }

      // Nodes
      for (const i of lit) {
        ctx.fillStyle = `rgba(${NEON_R},${NEON_G},${NEON_B},${intensity[i] * MAX_NODE_ALPHA})`;
        ctx.beginPath();
        ctx.arc(nodes[i].baseX, nodes[i].baseY, layout.nodeSize + intensity[i] * 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft radial glow at focus
      const glowAlpha = 0.04 + 0.03 * activeLevel;
      const grad = ctx.createRadialGradient(focus.x, focus.y, 0, focus.x, focus.y, radius * 0.65);
      grad.addColorStop(0, `rgba(${NEON_R},${NEON_G},${NEON_B},${glowAlpha})`);
      grad.addColorStop(1, `rgba(${NEON_R},${NEON_G},${NEON_B},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    const tick = (now: number) => {
      // Frame-rate independent easing (same feel at 60Hz and 120Hz)
      const dt = lastTime ? Math.min(now - lastTime, 100) : FRAME_MS;
      lastTime = now;
      if (!inputActive) driftTime += dt;

      const factor = !layout.compact
        ? LERP_FACTOR
        : inputActive
          ? TOUCH_LERP_FACTOR
          : RELEASE_LERP_FACTOR;
      const k = 1 - Math.pow(1 - factor, dt / FRAME_MS);
      const target = inputActive ? cursor : ambientPoint();
      smooth.x += (target.x - smooth.x) * k;
      smooth.y += (target.y - smooth.y) * k;
      activeLevel += ((inputActive ? 1 : 0) - activeLevel) * k;

      draw();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reducedMotion) return;
      running = true;
      lastTime = 0;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const resize = () => {
      const rect = section.getBoundingClientRect();
      if (Math.abs(rect.width - w) < 1 && Math.abs(rect.height - h) < 1) return;
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      layout = getMeshLayout(w, h);
      nodes = buildNodes(w, h, layout);

      if (!inputActive) {
        const p = ambientPoint();
        smooth.x = p.x;
        smooth.y = p.y;
      }
      if (!running) draw();
    };

    const setCursor = (clientX: number, clientY: number) => {
      const rect = section.getBoundingClientRect();
      cursor.x = clientX - rect.left;
      cursor.y = clientY - rect.top;
      inputActive = true;
    };

    // Mouse / pen: classic hover tracking
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      setCursor(e.clientX, e.clientY);
    };
    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType !== "touch") inputActive = false;
    };

    // Touch: touchmove keeps firing while the page scrolls (pointer events
    // get cancelled), so the light follows the finger as you swipe.
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setCursor(t.clientX, t.clientY);
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) inputActive = false;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);

    // Only animate while the hero is on screen
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    visibilityObserver.observe(section);

    if (!reducedMotion) {
      section.addEventListener("pointermove", onPointerMove, { passive: true });
      section.addEventListener("pointerleave", onPointerLeave);
      section.addEventListener("touchstart", onTouch, { passive: true });
      section.addEventListener("touchmove", onTouch, { passive: true });
      section.addEventListener("touchend", onTouchEnd, { passive: true });
      section.addEventListener("touchcancel", onTouchEnd, { passive: true });
    }

    return () => {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
      section.removeEventListener("touchstart", onTouch);
      section.removeEventListener("touchmove", onTouch);
      section.removeEventListener("touchend", onTouchEnd);
      section.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />
  );
}

/* ─── HeroSection ─── */

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/*
       * Consolidated overlays (was 4 divs → now 2):
       * Layer 1: vertical + horizontal gradient merged via CSS stacked backgrounds
       * Layer 2: grid pattern (single SVG data-URI)
       */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            // Directional fade left
            "linear-gradient(to right, oklch(0.09 0.005 285 / 0.6), transparent, transparent)",
            // Vertical depth fade
            "linear-gradient(to bottom, oklch(0.09 0.005 285 / 0.75), oklch(0.09 0.005 285 / 0.80) 50%, oklch(0.09 0.005 285 / 0.95))",
          ].join(", "),
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* Grid overlay — single SVG, GPU-composited */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("${GRID_SVG}")`,
          backgroundSize: "64px 64px",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        aria-hidden="true"
      />

      {/* Neon mesh — Canvas, follows cursor, GPU composited */}
      <NeonMeshCanvas />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            {/* Terminal badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-sm border border-[oklch(0.82_0.22_145/0.25)] bg-[oklch(0.82_0.22_145/0.05)] transition-[opacity,transform] duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Terminal size={12} className="text-[oklch(0.82_0.22_145)]" />
              <span className="font-mono text-xs text-[oklch(0.82_0.22_145)] tracking-wider">
                portfolio.tsx
              </span>
              <span className="font-mono text-xs text-[oklch(0.45_0.01_285)]">— Álvaro Durán Valor</span>
            </div>

            {/* Name */}
            <h1
              className={`font-display font-extrabold leading-[0.9] tracking-tight mb-6 transition-[opacity,transform] duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              <span className="text-white block">Álvaro</span>
              <span className="text-white block">Durán</span>
              <span
                className="block"
                style={{
                  color: "oklch(0.82 0.22 145)",
                  textShadow: "0 0 40px oklch(0.82 0.22 145 / 0.35)",
                }}
              >
                Valor
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`mb-5 transition-[opacity,transform] duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <p className="font-display text-xl md:text-2xl font-semibold text-[oklch(0.72_0.01_285)]">
                <TypewriterText text="Desarrollador de Aplicaciones Multiplataforma" />
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-[oklch(0.58_0.01_285)] text-base md:text-lg max-w-2xl leading-relaxed mb-10 transition-[opacity,transform] duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              Construyo todo tipo de servicios digitales desde, páginas fullstack web, como aplicaciones multiplataforma,
              hasta sistemas de gestión de datos, con foco en rendimiento, experiencia de usuario y código limpio.
              Por lo general soy un apasionado por las nuevas tecnologías y el desarrollo de soluciones reales.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-[opacity,transform] duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <button
                onClick={() => handleScroll("projects")}
                className="btn-neon px-7 py-3.5 rounded-sm text-sm font-semibold flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={14} />
                  Ver proyectos
                </span>
              </button>

              <a
                href="/cv-alvaro-duran.pdf"
                download="cv-alvaro-duran.pdf"
                className="flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium border border-[oklch(0.28_0.008_285)] text-[oklch(0.70_0.01_285)] hover:border-white hover:text-white transition-colors duration-200"
              >
                <Download size={14} />
                Descargar CV
              </a>

              <a
                href="https://github.com/alvarodv745-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-sm text-sm font-medium border border-[oklch(0.20_0.007_285)] text-[oklch(0.50_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>

            {/* Tech stack pills */}
            <div
              className={`transition-[opacity,transform] duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <p className="font-mono text-xs text-[oklch(0.40_0.01_285)] mb-3 tracking-wider uppercase">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => {
                  const Icon = tech.Icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[oklch(0.20_0.007_285)] bg-[oklch(0.12_0.006_285/0.7)] hover:border-[oklch(0.82_0.22_145/0.35)] hover:bg-[oklch(0.82_0.22_145/0.05)] transition-colors duration-200 group cursor-default"
                      style={{
                        transitionDelay: `${500 + i * 40}ms`,
                        opacity: visible ? 1 : 0,
                        transform: visible ? "scale(1)" : "scale(0.9)",
                        transition: `opacity 0.4s ease ${500 + i * 40}ms, transform 0.4s ease ${500 + i * 40}ms, border-color 0.2s, background-color 0.2s`,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5 text-[oklch(0.82_0.22_145)] group-hover:text-white transition-colors duration-200" />
                      <span className="font-mono text-xs text-[oklch(0.52_0.01_285)] group-hover:text-[oklch(0.75_0.01_285)] transition-colors duration-200">
                        {tech.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right: Decorative stats card */}
          <div
            className={`hidden lg:flex lg:col-span-4 justify-end transition-[opacity,transform] duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="border border-[oklch(0.22_0.008_285)] bg-[oklch(0.12_0.006_285/0.8)] backdrop-blur-sm rounded-sm p-6 w-64">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.22_145)] animate-pulse-neon" />
                  <span className="font-mono text-xs text-[oklch(0.55_0.01_285)]">status.json</span>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { label: "Estado", value: "Disponible", accent: true },
                    { label: "Ubicación", value: "España" },
                    { label: "Proyectos", value: "+10 completados" },
                    { label: "Especialidad", value: "Full-Stack" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2">
                      <span className="font-mono text-xs text-[oklch(0.40_0.01_285)]">
                        {item.label}:
                      </span>
                      <span
                        className={`font-mono text-xs text-right ${item.accent
                          ? "text-[oklch(0.82_0.22_145)]"
                          : "text-[oklch(0.72_0.01_285)]"
                          }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[oklch(0.18_0.007_285)]">
                  <div className="font-mono text-[0.65rem] text-[oklch(0.35_0.01_285)]">
                    <span className="text-[oklch(0.82_0.22_145)]">const</span>{" "}
                    <span className="text-white">dev</span>{" "}
                    <span className="text-[oklch(0.55_0.01_285)]">= </span>
                    <span className="text-[oklch(0.82_0.22_145)]">&#123;</span>
                    <br />
                    <span className="pl-3 text-[oklch(0.55_0.01_285)]">passion: </span>
                    <span className="text-[oklch(0.72_0.01_285)]">"∞"</span>
                    <br />
                    <span className="text-[oklch(0.82_0.22_145)]">&#125;</span>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[oklch(0.82_0.22_145/0.4)]" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[oklch(0.82_0.22_145/0.4)]" />
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
