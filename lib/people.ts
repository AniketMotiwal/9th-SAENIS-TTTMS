/**
 * Mentors & Organizing Committee — 9th SAENIS TTTMS'26.
 * Source: Mentors_9th_SAENIS_TTTMS_2026.pdf and SAENIS_TTTMS_Organizing_Committee_v3.pdf.
 * Photos live in /public/people (cropped from those PDFs).
 */

export type Person = {
  name: string;
  /** Designation / organisation lines */
  lines?: string[];
  /** Highlighted role (e.g. "Convener, Organizing Committee") */
  role?: string;
  /** Short organisation tag for committee members */
  org?: string;
  photo: string;
};

const m = (n: number) => `/people/mentor-${String(n).padStart(2, '0')}.webp`;
const o = (n: number) => `/people/oc-${String(n).padStart(2, '0')}.webp`;

export const MENTORS: Person[] = [
  { name: 'Mr. Saurabh Dalela', lines: ['Director-ICAT'], role: 'Chairman-SAENIS', photo: m(1) },
  { name: 'Mr. Tarun Agarwal', lines: ['Sr. Executive Officer', 'Engineering, MSIL'], role: 'Sr. Vice Chairman-SAENIS', photo: m(2) },
  { name: 'Dr. Tapan Sahoo', lines: ['Senior Executive Officer', 'Digital Enterprise, MSIL'], role: 'Past Chairman-SAENIS', photo: m(3) },
  { name: 'Mr. Balraj Bhanot', lines: ['Homologation Expert'], role: 'Chairman-TEDC (BIS)', photo: m(4) },
  { name: 'Dr. Prasad Kadle', lines: ['Fellow SAE', 'Fellow ASME'], photo: m(5) },
  { name: 'Mr. UD Bhangale', lines: ['Executive Director', 'SAE India Northern Section'], photo: m(6) },
  { name: 'Mr. Sangeet H Kapoor', lines: ['Advisor-General Management, Automotive Industry, MACC & Thermal Systems'], photo: m(7) },
  { name: 'Mr. Arun Kumar Goel', lines: ['Vice President-Ex-Subros', 'Independent Advisor'], photo: m(8) },
  { name: 'Mr. Sandeep Raina', lines: ['Executive Officer', 'Product Development & Planning, MSIL'], role: 'Vice Chairman-SAENIS', photo: m(9) },
  { name: 'Mr. Anoop Bhat', lines: ['Executive Officer', 'Powertrain & xEV, MSIL'], role: 'Sr. Vice Chairman-SAENIS', photo: m(10) },
  { name: 'Mr. Ramanathan Srinivasan', lines: ['Managing Director', 'Automotive Test Systems'], role: 'Vice Chairman-SAENIS', photo: m(11) },
  { name: 'Mr. Anup Kacker', lines: ['Past Executive Director', 'SAE India Northern Section'], photo: m(12) },
  { name: 'Mr. A. Prabhakaran', lines: ['Head-HVAC & ECM CoE', 'Principal Engineer-M&M'], photo: m(13) },
  { name: 'Mr. Ganesh Changavar', lines: ['Engineer & Researcher', 'Mercedes Benz R&D, India'], photo: m(14) },
];

export const OC_CORE: Person[] = [
  { name: 'Mr. Yogendra Singh Kushwah', lines: ['General Manager-R&D, Subros Ltd.'], role: 'Convener, Organizing Committee', photo: o(1) },
  { name: 'Prof. Akshay Dvivedi', lines: ['Professor & HoD, ME, IIT Roorkee'], role: 'Co-convenor, Organizing Committee', photo: o(2) },
  { name: 'Prof. Varun Sharma', lines: ['Professor, IIT Roorkee'], role: 'Co-convenor, Organizing Committee', photo: o(3) },
  { name: 'Prof. Amit Choudhary', lines: ['Professor, IIT Roorkee'], role: 'Co-convenor, Organizing Committee', photo: o(4) },
  { name: 'Mr. Sambhaji Jaybhay', lines: ['Gen. Manager Commv., Tata Motors'], role: 'Co-convenor, Organizing Committee', photo: o(5) },
  { name: 'Mr. Saurabh Suman', lines: ['Manager-R&D, Subros Ltd.'], role: 'Lead Co-ordinator', photo: o(6) },
  { name: 'Mr. Shrignaesh Umbarkar', lines: ['Vice President, MSIL'], role: 'Chair, Organizing Committee', photo: o(7) },
  { name: 'Prof. (Dr.) Pankaj Kalita', lines: ['Associate Professor, CoE, IIT Guwahati'], role: 'Co-Chair, Organizing Committee', photo: o(8) },
  { name: 'Mr. Prasanna V Nagarhalli', lines: ['GM, RFC-Tata Motors'], role: 'Co-Chair, Organizing Committee', photo: o(9) },
  { name: 'Mr. Aditya Pratap', lines: ['Manager-R&D, Subros Ltd.'], role: 'Lead Co-ordinator', photo: o(10) },
];

export const OC_COMMITTEES: { title: string; members: Person[] }[] = [
  {
    title: 'Technical Committee',
    members: [
      { name: 'Anugu Anil Kumar', org: 'M&M', photo: o(11) },
      { name: 'Somnath Sen', org: 'Gensol EV', photo: o(12) },
      { name: 'Dr. Shrutika Sharma', org: 'Subros', photo: o(13) },
      { name: 'Deepak Joshi', org: 'ICAT', photo: o(14) },
      { name: 'Santosh Venu', org: 'Tata Motors', photo: o(15) },
      { name: 'Kapil Singhal', org: 'BP Refcool', photo: o(16) },
    ],
  },
  {
    title: 'Finance & Sponsorship Committee',
    members: [
      { name: 'Dr. Babu Rao Ponangi', org: 'DTICI', photo: o(17) },
      { name: 'Gurpreet Singh Bijral', org: 'M&M', photo: o(18) },
      { name: 'Selvaraj Muthu', org: 'Mahle Engine', photo: o(19) },
      { name: 'Shekhar Bhangale', org: 'Maruti Suzuki', photo: o(20) },
      { name: 'Maneesh Arora', org: 'Mahle', photo: o(21) },
      { name: 'Anurag Maurya', org: 'Tata Motors', photo: o(22) },
    ],
  },
  {
    title: 'Networking & Operations Management Committee',
    members: [
      { name: 'Akanksha Mehra', org: 'Subros', photo: o(23) },
      { name: 'Manisha Thakur', org: 'Subros', photo: o(24) },
      { name: 'Ravi Garg', org: 'Volvo Group', photo: o(25) },
      { name: 'Naseeb Singh', org: 'SAENIS', photo: o(26) },
      { name: 'Megharia A', org: 'Subros', photo: o(27) },
      { name: 'Tarun Rana', org: 'Ola Electric', photo: o(28) },
    ],
  },
  {
    title: 'Academia & Student Interface Committee',
    members: [
      { name: 'Dr. Devendra Vashist', org: 'MRIIRS', photo: o(29) },
      { name: 'Tuhin Srivastava', org: 'KIET', photo: o(30) },
      { name: 'Shinjinee Mishra', org: 'IIT Roorkee', photo: o(31) },
      { name: 'Senthil Natarajan', org: 'Ashok Leyland', photo: o(32) },
      { name: 'Nitin Dewangan', org: 'TAFE', photo: o(33) },
      { name: 'Ankit Shukla', org: 'Subros', photo: o(34) },
    ],
  },
];
