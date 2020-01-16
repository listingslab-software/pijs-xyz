import React from "react";

const InvaderSVG = props => (
  <svg 
    {...props}
    viewBox="0 0 908 663"
  >
    <g id="invader-svg" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="invader-graphic" fill={props.color} fillRule="nonzero">
            <g id="Group" transform="translate(454.000000, 331.050000) scale(-1, 1) rotate(-180.000000) translate(-454.000000, -331.050000) translate(0.000000, -0.000000)">
                <path d="M164,620.8 C164,590 164.3,579.2 165.2,578.3 C166.1,577.4 176.6,577.1 206.2,577.1 L246,577.1 L246.1,538.4 C246.1,517 246.3,498.6 246.6,497.4 C246.8,496.2 246.3,494.5 245.4,493.7 C244.1,492.3 239.1,492.1 207.7,492.1 L171.5,492.1 L169,495.1 C164,501.2 164,501.2 164,457.1 L164,416.1 L122.8,415.9 L81.5,415.6 L81.2,374.6 L81,333.6 L41.9,333.9 C13.6,334.1 2.4,333.8 1.4,333 C0.2,332 0,312 0,207.5 L0,83.1 L42.5,83.1 C72.9,83.1 85,83.4 85,84.2 C85,84.9 84,85.1 82.4,84.7 C80.3,84.1 79.9,84.3 80.3,85.5 C80.6,86.3 80.2,87.5 79.4,88.1 C78.2,89.2 78,100.8 78,168.5 C78,212 78.4,248.2 78.9,248.9 C79.4,249.8 80.6,250 82.6,249.4 C84.2,249 103.3,248.5 125,248.4 L164.5,248.1 L164.2,165.6 L164,83.1 L205.2,83.1 L246.5,83.1 L246.2,42.4 C246,10.4 246.2,1.6 247.2,0.9 C249.1,-0.3 414,-0.1 414,1.1 C414,1.7 413.2,2.1 412.1,2.1 C411.1,2.1 409.9,3.1 409.4,4.4 C408.9,5.6 408.3,23 408,43.1 L407.5,79.6 L331.1,79.8 C253.1,80.1 248.1,80.3 249.4,83.8 C250,85.4 248.4,86.5 247.5,85.1 C246.5,83.6 244.7,83.9 245.3,85.5 C245.6,86.3 245.2,87.5 244.4,88.1 C243.2,89.2 243,95.4 243,127 C243,147.7 243.4,165.1 243.8,165.6 C244.3,166.3 314.4,166.5 451.8,166.3 L659,166.1 L659,126.2 C659,104.2 659.3,85.6 659.6,84.7 C660.1,83.4 665.1,83.2 699.5,83.1 C737.8,83.1 738.8,83.1 739.3,85 C739.6,86.1 739.2,87.5 738.4,88.2 C737.2,89.2 737,101.8 737,167.5 C737,210.4 737.3,246.6 737.6,247.8 C738,249.4 738.9,250 740.5,249.9 C742,249.7 742.6,249.2 742.3,248 C742,247.1 742.3,246.1 742.8,245.7 C743.3,245.4 743.7,245.7 743.6,246.4 C743.6,247 743.8,247.7 744.3,247.9 C744.7,248 762.6,248.1 784,248.1 L823,248.1 L823,165.6 L823,83.1 L865.5,83.1 C895,83.1 908,83.4 908,84.2 C908,84.8 907.1,85 905.8,84.6 C904.2,84 903.8,84.2 904.3,85.4 C904.6,86.3 904.2,87.5 903.4,88.1 C902.2,89.2 902,106.3 901.8,208 L901.5,326.6 L862.4,327.1 C831.3,327.5 823,327.9 821.7,329 C820.2,330.2 820,334.3 820,369.2 C820,390.5 819.6,408.2 819.1,408.5 C818.6,408.8 801.8,409.1 781.6,409.1 C758.2,409.2 743.9,409.6 742,410.3 C740.2,410.9 738.5,412.4 737.9,413.8 C737.4,415.1 737,433.2 737,454.1 L737,492 L697.4,492.3 C659.6,492.6 657.8,492.7 656.4,494.5 C655.3,496.1 655,503.4 655,535.3 L655,574.1 L649.3,574.3 C646.1,574.4 629.8,574.5 613.1,574.6 C591,574.7 582.5,575.1 582.2,575.9 C582,576.6 581.2,577.1 580.4,577.1 C578.7,577.1 578.5,578.8 580.3,579.4 C580.9,579.7 580.5,580 579.3,580 C578,580.1 577,579.5 577,578.9 C576.9,578.2 577,559.7 577,537.9 C577,512 576.7,498.1 576.1,498.1 C575.5,498.1 575.3,497.5 575.6,496.7 C575.9,496 575.4,494.6 574.5,493.7 C573,492.2 562.4,492.1 452.2,492.1 C356.9,492.1 331,492.4 329,493.4 L326.5,494.7 L326.2,533.5 C326.1,556.1 325.6,572.9 325,573.6 C324.4,574.4 313.9,574.7 288.8,574.8 C256.4,574.9 253.5,575.1 252.3,576.7 C251.6,577.7 250.7,578.2 250.4,577.8 C250,577.5 248.3,578.8 246.6,580.7 L243.5,584.2 L243,620.4 L242.5,656.6 L206.7,656.9 C176.1,657.1 170.8,657.3 170.4,658.6 C170,659.4 169.2,660.1 168.4,660.1 C167.6,660.1 167,660.6 167,661.1 C167,661.7 166.3,662.1 165.5,662.1 C164.2,662.1 164,656.8 164,620.8 Z M249.4,413.6 C249.9,412.3 255.2,412.1 289.2,412.1 L328.5,412.1 L328.5,373.1 L328.5,334.1 L290.3,334.1 C265.4,334.1 252,333.7 252,333.1 C252,332.5 264.5,332.1 287.4,332.1 C306.8,332.1 324.1,331.8 325.8,331.5 C328.5,330.9 328.8,330.6 327.9,329 C327,327.2 325.1,327.1 287.1,327.1 C247.9,327.1 247.3,327.1 245.4,329.2 C243.6,331.2 243.5,333.6 243.2,371.8 C243,401.3 243.2,412.7 244.1,413.7 C245.6,415.5 248.6,415.5 249.4,413.6 Z M579,413.6 C579,412.3 584.1,412.1 619,412.1 L659,412.1 L659,371.9 C659,340.6 658.7,332 657.8,332.9 C656.3,334.4 582.5,334.6 581.5,333.1 C581.2,332.6 581.5,332.1 582.2,332.1 C582.9,332.1 600.2,332 620.7,331.8 C641.1,331.7 658.1,331.3 658.4,331 C658.8,330.7 658.8,329.6 658.4,328.7 C657.8,327.3 653.9,327.1 617.2,327.1 C580.9,327.1 576.5,327.3 574.8,328.8 C573.1,330.3 573,333 573,372.1 C573,395 573.3,414.1 573.7,414.4 C575,415.7 579,415.1 579,413.6 Z M163.8,412.1 C163.1,411 161.2,409.9 159.5,409.5 C157.9,409.2 141.3,409.1 122.8,409.3 C89.3,409.6 89,409.6 86.8,411.9 L84.6,414.1 L124.8,414.1 C164.8,414.1 165,414.1 163.8,412.1 Z M78.8,331.5 C81.5,330.9 81.8,330.6 80.9,329 C80,327.2 78.1,327.1 42.9,327.1 C11,327.1 5.9,327.3 5.4,328.6 C5,329.4 4,330.1 3.1,330.2 C2.2,330.3 2.5,330.6 4,331.1 C6.9,332 74.3,332.4 78.8,331.5 Z" id="Shape"></path>
                <path d="M659,621.6 C659,583.7 658.9,581.1 657.3,581 C655.9,581 656,580.7 657.8,579.9 C659,579.3 660,578.4 660,577.9 C660,577.5 678.6,577.1 701.4,577.1 C738.2,577.1 742.9,577.3 743.4,578.7 C744.3,581.1 744.2,581.4 742.4,580.7 C741.4,580.3 740.1,581 738.9,582.3 C737.2,584.5 737.1,586.9 737,620.9 L737,657.1 L701,657.1 C669.9,657.1 664.9,657.3 664.4,658.6 C664,659.4 663.1,660.1 662.3,660.1 C661.5,660.1 661.2,660.6 661.5,661.1 C661.8,661.7 661.4,662.1 660.6,662.1 C659.2,662.1 659,657.6 659,621.6 Z" id="Path"></path>
                <path d="M828.5,333.1 C828.1,332.5 840.4,332.1 862.7,331.9 C899.9,331.6 904,331.7 904,333.2 C904,334.5 829.3,334.4 828.5,333.1 Z" id="Path"></path>
                <path d="M494,42.6 L494,0.1 L577.2,0.3 C659.6,0.6 660.5,0.6 660.8,2.6 C661.1,4.2 660.9,4.3 660.1,3.1 C659.2,1.8 658.8,2 657.3,4.1 C655.7,6.4 655.5,10.2 655,43.1 L654.5,79.6 L577.7,79.9 C510.9,80.1 500.6,80.3 499.3,81.6 C498.5,82.4 497.4,82.9 496.9,82.6 C496.4,82.2 496,82.4 496,83 C496,83.5 496.6,84.2 497.3,84.4 C497.9,84.7 497.5,85 496.3,85 L494,85.1 L494,42.6 Z" id="Path"></path>
            </g>
        </g>
    </g>
</svg>

);

export default InvaderSVG;

