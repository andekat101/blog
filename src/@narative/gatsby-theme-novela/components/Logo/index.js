import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="200">
      <path fill="#b71d1d" d="M81.40625,159.9609375l-17.1875,0l-18.701171875-30.078125l-6.396484375,4.58984375l0,25.48828125l-15.13671875,0l0-71.38671875l15.13671875,0l0,32.666015625l5.95703125-8.3984375l19.3359375-24.267578125l16.796875,0l-24.90234375,31.591796875z"/>
      <path fill="#b0b0b0" d="M114.52001953125,129.98046875l-1.4404296875-3.7109375l-0.1953125,0q-1.8798828125,2.3681640625-3.86962890625,3.28369140625t-5.18798828125,0.91552734375q-3.9306640625,0-6.18896484375-2.24609375t-2.25830078125-6.396484375q0-4.345703125,3.03955078125-6.40869140625t9.16748046875-2.28271484375l4.736328125-0.146484375l0-1.1962890625q0-4.150390625-4.248046875-4.150390625q-3.271484375,0-7.6904296875,1.9775390625l-2.4658203125-5.029296875q4.7119140625-2.4658203125,10.44921875-2.4658203125q5.4931640625,0,8.4228515625,2.392578125t2.9296875,7.275390625l0,18.1884765625l-5.2001953125,0z M112.32275390625,117.333984375l-2.880859375,0.09765625q-3.2470703125,0.09765625-4.833984375,1.171875t-1.5869140625,3.271484375q0,3.1494140625,3.61328125,3.1494140625q2.587890625,0,4.13818359375-1.4892578125t1.55029296875-3.955078125l0-2.24609375z M142.32202148438,124.5361328125q1.953125,0,4.6875-0.8544921875l0,5.5419921875q-2.783203125,1.2451171875-6.8359375,1.2451171875q-4.4677734375,0-6.50634765625-2.25830078125t-2.03857421875-6.77490234375l0-13.1591796875l-3.564453125,0l0-3.1494140625l4.1015625-2.490234375l2.1484375-5.76171875l4.7607421875,0l0,5.810546875l7.6416015625,0l0,5.5908203125l-7.6416015625,0l0,13.1591796875q0,1.5869140625,0.89111328125,2.34375t2.35595703125,0.7568359375z M155.646484375,95.6298828125q0-3.6376953125,4.052734375-3.6376953125t4.052734375,3.6376953125q0,1.7333984375-1.01318359375,2.69775390625t-3.03955078125,0.96435546875q-4.052734375,0-4.052734375-3.662109375z M163.41015625,129.98046875l-7.4462890625,0l0-27.294921875l7.4462890625,0l0,27.294921875z M185.96313476562,107.470703125q-2.3681640625,0-3.7109375,1.50146484375t-1.5380859375,4.26025390625l10.44921875,0q-0.048828125-2.7587890625-1.4404296875-4.26025390625t-3.759765625-1.50146484375z M187.01293945312,130.46875q-6.591796875,0-10.302734375-3.6376953125t-3.7109375-10.302734375q0-6.8603515625,3.43017578125-10.60791015625t9.48486328125-3.74755859375q5.7861328125,0,9.0087890625,3.2958984375t3.22265625,9.1064453125l0,3.61328125l-17.6025390625,0q0.1220703125,3.173828125,1.8798828125,4.9560546875t4.931640625,1.7822265625q2.4658203125,0,4.6630859375-0.5126953125t4.58984375-1.6357421875l0,5.76171875q-1.953125,0.9765625-4.1748046875,1.45263671875t-5.419921875,0.47607421875z"/>
    </svg>
  );
}