/** Full conference agenda — source: Agenda TTTMS26 R1.0 (PDF). */
export type SlotType = 'registration' | 'ceremony' | 'theme' | 'talk' | 'panel' | 'sponsor' | 'break' | 'lunch' | 'closing';

export type Slot = {
  time: string;
  type: SlotType;
  title: string;
  /** Talk speakers + organisation */
  speaker?: string;
  /** Panelists / dignitaries (name | designation) */
  people?: string[];
  note?: string;
};

export type AgendaDay = {
  day: string;
  date: string;
  weekday: string;
  slots: Slot[];
};

const tea = (time: string): Slot => ({ time, type: 'break', title: 'Tea Break & Networking Session' });
const lunch = (time: string): Slot => ({ time, type: 'lunch', title: 'Lunch Break' });

export const AGENDA: AgendaDay[] = [
  {
    day: 'Day 1',
    date: '3 December 2026',
    weekday: 'Thursday',
    slots: [
      { time: '09:15 – 10:00 AM', type: 'registration', title: 'Registration' },
      {
        time: '10:00 – 11:00 AM',
        type: 'ceremony',
        title: 'Inaugural Session',
        note: 'Lamp illumination by Chief Guest & Opening Speech · Key Note by SAEINDIA / SAENIS GB Members, Sponsors, TTTMS Mentors & OC Members',
        people: [
          'Mr. UD Bhangale | ED-SAENIS | Mentor-TTTMS (Welcome Address & Opening Remarks)',
          'Mr. Saurabh Dalela | Director-ICAT, Chairman-SAENIS, Mentor-TTTMS’26',
          'Mr. Balraj Bhanot | Chairman, TEDC (BIS) | Mentor & Executive Member, SAENIS | Mentor-TTTMS’26',
          'Mr. Yogendra Singh Kushwah | General Manager, Subros | Convener-TTTMS’26',
          'Mr. Shriganesh Umbarkar | VP, MSIL | Chair-Organizing Committee-TTTMS’26',
          'Mr. AK Goel | Vice Chairman - Technical (SAENIS GB) | Mentor-TTTMS’26',
          'Prof. Akshay Dvivedi | HoD (ME), IIT Roorkee | Co-Convener-TTTMS’26',
          'Mr. Sambhaji Jaybhay | DGM, Tata Motors | Co-Convener-TTTMS’26',
        ],
      },
      {
        time: '11:00 – 11:15 AM',
        type: 'theme',
        title: 'Theme Presentation: Emerging Thermal Technologies',
        note: 'Other Esteemed Invited Guests & Speakers',
      },
      tea('11:15 – 11:45 AM'),
      { time: '11:45 – 12:00 PM', type: 'talk', title: 'Overcoming challenges for integrating PFAS free refrigerant (R290) in Automotive Electric Vehicles', speaker: 'Sambhaji Jaybhay, Rishav Kumar — Tata Motors Ltd.' },
      { time: '12:00 – 12:15 PM', type: 'talk', title: 'Comparative Study of Solid-State Peltier HVAC and Conventional Automotive HVAC Systems', speaker: 'Viraj Shinde — Daimler Trucks Innovation Center India' },
      { time: '12:15 – 12:30 PM', type: 'talk', title: 'Intermittent Refrigerant Flow Control Strategy for Dual-Loop Thermal Management in Electric Vehicles Using TXV-Based Systems', speaker: 'Sunny Kumar, Santosh Venu — Tata Motors Ltd.' },
      { time: '12:30 – 12:45 PM', type: 'talk', title: 'Development of a Cost-Effective In-House Test Rig for Real-Time Leakage and Durability Evaluation of Servo Motor-Operated Heater Control Valves', speaker: 'Devender Thakur — Subros Ltd.' },
      { time: '12:45 – 01:00 PM', type: 'talk', title: 'Multifidelity Thermal Modelling of Electric Motor Through Different Development Stages', speaker: 'Nakul Joshi — Gamma Technologies' },
      lunch('01:00 – 02:00 PM'),
      {
        time: '02:00 – 02:30 PM',
        type: 'panel',
        title: 'Corporate Average Fuel Economy (Impact on Vehicles Thermal Management Systems) — Challenges & Opportunities',
        people: ['Mr. Deepak Joshi | Automotive Regulatory Strategist, Manager-ICAT', 'Other Esteemed Invited Guests & Speakers'],
      },
      { time: '02:30 – 02:45 PM', type: 'talk', title: 'No Refrigerant Contact Temperature Sensor for Car Automotive Air Conditioning System', speaker: 'Saniya Singh — Sanden Vikas India Ltd.' },
      { time: '02:45 – 03:00 PM', type: 'talk', title: 'Use of Lattice Boltzmann Method to validate flow-induced noise for a traction cooling system', speaker: 'Mustafa Nomani — Tata Motors Ltd.' },
      { time: '03:00 – 03:15 PM', type: 'talk', title: 'A generalized CFD-based optimization framework for dual-sided liquid cooling of multi-prismatic cell battery modules', speaker: 'Robin Thapa, Akhileshwar Singh — Pranav Vikas India Pvt. Ltd.' },
      { time: '03:15 – 03:30 PM', type: 'talk', title: 'Parametric Evaluation of Rectangular Channel Cooling Plates for HV Battery Packs using Analytical and Numerical Methods', speaker: 'Dittakavi Dwarakanath, Krishna Koli — Tata Passenger Electric Mobility' },
      tea('03:30 – 04:00 PM'),
      { time: '04:00 – 04:15 PM', type: 'talk', title: 'A numerical analysis to evaluate the impact of different louver-to-fin pitch ratio and different louver angle on the thermo-hydraulic performance of louvered fin', speaker: 'Bharat Saini, Robin Thapa — Pranav Vikas India Pvt. Ltd.' },
      { time: '04:15 – 04:30 PM', type: 'talk', title: 'Integrated Thermoelectric Cooling and Heating Architecture for Lithium-Ion Battery Packs', speaker: 'Sudhir Kushwah — TVS Motor Co. Ltd.' },
      { time: '04:30 – 04:45 PM', type: 'talk', title: 'ECU Thermal Management in Next-Generation Trucks: Heat Load Classification, Cooling Technology Selection, and System-Level Application', speaker: 'Shital Dubey — Volvo Group India Pvt. Ltd.' },
      { time: '04:45 – 05:00 PM', type: 'talk', title: 'An Assessment method for HVAC energy consumption in Indian transport sector: Amplifying India’s Climate Goal efforts', speaker: 'Divya Yadav — Maruti Suzuki India Ltd.' },
      { time: '05:00 – 05:15 PM', type: 'talk', title: 'HIL based simulation for an integrated VCU-BMS combined HIL system for a Battery Electric Vehicle (BEV)', speaker: 'Yugesh A. — Tata Passenger Electric Mobility Ltd.' },
      { time: '05:15 – 05:30 PM', type: 'talk', title: 'Improved Design of Manual HVAC Kinematic Linkages for Reduced Actuation Torque in Passenger Cars', speaker: 'Ridhamkumar Rabadiya — Subros Ltd.' },
      { time: '05:30 – 05:45 PM', type: 'talk', title: '1D Simulation-Driven Optimization and Experimental Validation of PWM-Controlled BLDC Radiator Fan for IC Engine Vehicles Thermal Management', speaker: 'Saptarshi Das, Vinod Kale — Tata Passenger Electric Mobility Ltd.' },
      { time: '05:45 – 06:00 PM', type: 'talk', title: 'System-Level Optimization of EV Battery Thermal Management', speaker: 'Shreyashi Srivastava, Alok Kumar — Pranav Vikas India Pvt. Ltd.' },
      { time: '06:00 – 06:15 PM', type: 'talk', title: 'Investigation of Effect of Design Parameters on Chiller Performance', speaker: 'Mohamed Thowfiq P. — L&T Technology Services' },
      { time: '07:00 PM onwards', type: 'closing', title: 'Day’s Summary & Gala Dinner' },
    ],
  },
  {
    day: 'Day 2',
    date: '4 December 2026',
    weekday: 'Friday',
    slots: [
      { time: '08:30 – 09:15 AM', type: 'registration', title: 'Registration' },
      { time: '09:15 – 09:30 AM', type: 'talk', title: 'Case study for exploring the applicability of ML methodologies for vehicular emission prediction', speaker: 'Archana Devi — Maruti Suzuki India Ltd.' },
      { time: '09:30 – 09:45 AM', type: 'talk', title: 'Teardown Based Electro-Thermal Simulation Framework for EV Traction Motors', speaker: 'Dileep Bahuroju, Vivek Kumar — Tata Passenger Electric Mobility' },
      { time: '09:45 – 10:00 AM', type: 'talk', title: 'A Data-Driven Method for Refrigeration Subsystem Performance Mapping with Mode-Based Equation Selection', speaker: 'Ravi Garg — Volvo Group India Pvt. Ltd.' },
      { time: '10:00 – 10:15 AM', type: 'talk', title: 'Optimization of Air-Cooled Battery Pack with Cylindrical Cells of Multiple Diameters and Spacing Using CFD and ML Model', speaker: 'Suvankar Manna — Aucsim Solutions LLP' },
      { time: '10:15 – 10:30 AM', type: 'talk', title: 'A System Test Bench Approach for Pre-Calibration in an Automotive Thermal Management System', speaker: 'Aurobindo Samanta — Mahle Anand Thermal Systems' },
      { time: '10:30 – 10:45 AM', type: 'talk', title: 'Design Optimization of EV AC Compressor Damper for Mitigation of Transient Induced Vibrations', speaker: 'Sandeep Subhash Shalgar — Tata Technologies Ltd.' },
      { time: '10:45 – 11:00 AM', type: 'talk', title: 'Bio-Based Rubber Seed Oil as a Dielectric Medium for Immersion Cooling in Lithium-Ion Battery Modules: A Numerical Investigation', speaker: 'Muthukumar Periyasamy — National Institute of Technology Trichy' },
      tea('11:00 – 11:30 AM'),
      {
        time: '11:30 – 11:45 AM',
        type: 'sponsor',
        title: 'Invited Sponsor’s Speakers Topics',
        note: 'Case Studies / Technology Trends Presentations by Sponsor’s Representatives (Gamma Technologies)',
      },
      {
        time: '11:45 – 12:15 PM',
        type: 'panel',
        title: 'Emerging Challenges & Awareness Session on ‘Phasing out Hydrofluorocarbons Under Kigali Amendment to the Montreal Protocol’',
        people: [
          'Mr. Rashid Hasan | Sr. Advisor, SIAM',
          'Mr. SH Kapoor | National Project Coordinator (India), UNIDO | Mentor-TTTMS’26',
          'Mr. Sunil Gulpadia | Sr. Vice President - CFO & IT Head, SRF Ltd.',
          'Mr. Santosh Venu | DGM, Tata Motors Ltd. | OC Member-TTTMS’26',
          'Esteemed Invited Guests & Speakers',
        ],
      },
      { time: '12:15 – 12:30 PM', type: 'talk', title: 'Molded AC Hose and its Requirements in Automotive AC System', speaker: 'Saniya Singh — Sanden Vikas India Ltd.' },
      { time: '12:30 – 12:45 PM', type: 'talk', title: 'CFD Study of Dielectric Azadirachta indica Oil Immersion Cooling for Lithium-ion Battery Thermal Management', speaker: 'Thiruppathi Rasu — National Institute of Technology Trichy' },
      { time: '12:45 – 01:00 PM', type: 'talk', title: 'Comparative Study of EPDM and HNBR O-Rings for Automotive Air Conditioning Hose and Pipe Sealing Applications', speaker: 'Pramod Kumar Yadav — Sanden Vikas India Ltd.' },
      lunch('01:00 – 02:00 PM'),
      {
        time: '02:00 – 02:30 PM',
        type: 'panel',
        title: 'Sustainable Mobility for India — Future Roadmap',
        people: ['Esteemed Invited Guests & Speakers'],
      },
      { time: '02:30 – 02:45 PM', type: 'talk', title: 'Phygital Framework for Reliability Study of Cabin Thermal Comfort Degradation', speaker: 'Geet Shah, Ganesh Deshmukh — Tata Passenger Electric Mobility' },
      { time: '02:45 – 03:00 PM', type: 'talk', title: 'CFD-Based Thermal Mixing Analysis of Automotive HVAC in Bi-level Mode Using a Dual-Stream Heat Exchanger Model', speaker: 'Subhash Chand Kanti — Subros Ltd.' },
      { time: '03:00 – 03:15 PM', type: 'talk', title: 'Electro Thermal Modelling Approach for Thermal Runaway Risk Assessment in EV Battery Packs', speaker: 'Vivek Kumar — Tata Passenger Electric Mobility Ltd.' },
      { time: '03:15 – 03:30 PM', type: 'talk', title: 'Dynamic Performance Analysis of Automotive HVAC System Using 1D Simulation', speaker: 'Devarajan Mudaliar — Tata Motors Ltd.' },
      tea('03:30 – 04:00 PM'),
      { time: 'Evening', type: 'closing', title: 'Day’s Summary & Close-up Speech' },
    ],
  },
  {
    day: 'Day 3',
    date: '5 December 2026',
    weekday: 'Saturday',
    slots: [
      { time: '08:15 – 09:00 AM', type: 'registration', title: 'Registration' },
      { time: '09:00 – 09:15 AM', type: 'talk', title: 'Venturi-Based Thermal Management System for Enhanced Cooling in Battery Charger Applications', speaker: 'Nagesh Digambarrao Jamge — Minda Corp. Ltd.' },
      { time: '09:15 – 09:30 AM', type: 'talk', title: 'Comprehensive Numerical Investigation of a Proton Exchange Membrane Hydrogen Fuel Cell Considering Various Model Parameters and Operating Conditions', speaker: 'Kundan Biswas — Tata Motors Ltd.' },
      { time: '09:30 – 09:45 AM', type: 'talk', title: 'Numerical Analysis of Advanced Battery Thermal Management Systems Using Nano-enhanced Coolants', speaker: 'K. Neelima — Mohan Babu University' },
      { time: '09:45 – 10:00 AM', type: 'talk', title: 'Learning-based regression surrogate modeling for prediction of in-cabin airflow', speaker: 'Ambica Prajapati — Tata Motors Ltd.' },
      { time: '10:00 – 10:15 AM', type: 'talk', title: 'Integrated CFD and Physical Validation Approach for Improving HVAC Cabin Temperature Homogeneity', speaker: 'Ganesh Deshmukh, Geet Shah — Tata Passenger Electric Mobility' },
      { time: '10:15 – 10:30 AM', type: 'talk', title: 'An integrated Electro-Thermal modeling framework for lithium-ion Batteries under Multi-C-Rate and Dynamic loading conditions', speaker: 'Abhay Gudi — Tata Consultancy Services' },
      { time: '10:30 – 10:45 AM', type: 'talk', title: 'Beyond Conventional Cooling: Benchmarking Innovative Immersion Tech against Indirect Liquid and Direct Refrigerant Systems for Battery Thermal Management', speaker: 'Vignaesh Subramaniam — Valeo India Pvt. Ltd.' },
      { time: '10:45 – 11:00 AM', type: 'talk', title: 'Study on dynamic & vibro-acoustic behavior of Automobile AC lines by using CAE simulation', speaker: 'Paulson Parayil — Subros Ltd.' },
      tea('11:00 – 11:30 AM'),
      { time: '11:30 – 11:45 AM', type: 'talk', title: 'Simulation of Heavy-Duty Transportation AC unit using Random Vibration, Shock Test and Vibro-Acoustic analysis', speaker: 'Akanksha Mehra — Subros Ltd.' },
      { time: '11:45 – 12:00 PM', type: 'talk', title: 'Calibration and Control Strategy for HVAC Actuator Motors in Automotive Thermal Control Systems', speaker: 'Soumya Ghosh, Ravindra Rajendra Shinde — Mahle Anand Thermal Systems Pvt. Ltd.' },
      { time: '12:00 – 12:15 PM', type: 'talk', title: 'Investigation of Dehumidification and Evaporator Drying Strategies in Electric Vehicle HVAC Systems for Odor Mitigation', speaker: 'Shivam Raj, Sunny Kumar — Tata Passenger Electric Mobility Ltd.' },
      { time: '12:15 – 12:30 PM', type: 'talk', title: 'Adaptive Cabin Climate Prediction Control for Energy-Efficient Electric Vehicle HVAC Systems', speaker: 'K. Neelima — Mohan Babu University' },
      { time: '12:30 – 12:45 PM', type: 'talk', title: 'Development of an Efficient Cooling System for Heavy Duty Truck Applications', speaker: 'Raja Sah — Tata Motors Ltd.' },
      { time: '12:45 – 01:00 PM', type: 'talk', title: 'Coupled Simulation of Commercial Vehicle Cabin Thermal Environment and Refrigeration System', speaker: 'Dattaji Panchare, Mustafa Nomani — Tata Motors Ltd.' },
      lunch('01:00 – 02:00 PM'),
      {
        time: '02:00 – 03:00 PM',
        type: 'ceremony',
        title: 'Valedictory Ceremony & Closing Remarks',
        note: 'Best Paper & Best Presentation Awards along with Sponsors’ Felicitation · TTTMS Mentors, OC Members, Industry Volunteers, Industry / Academia / Civil Society Delegates, Sponsors’ Delegates & Student Team Members',
        people: [
          'Mr. IV Rao | Visiting Senior Fellow, TERI | Mentor & Executive Member, SAENIS',
          'Mr. Shriganesh Umbarkar | VP, MSIL | Chair-Organizing Committee-TTTMS’26',
          'Mr. AK Goel | Vice Chairman - Technical (SAENIS GB) | Mentor-TTTMS’26',
          'Mr. Yogendra Singh Kushwah | GM, Subros | Convener-TTTMS’26',
          'Prof. Akshay Dvivedi | HoD (ME), IIT Roorkee | Co-Convener-TTTMS’26',
          'Mr. Sambhaji Jaybhay | DGM, Tata Motors | Co-Convener-TTTMS’26',
        ],
      },
    ],
  },
];
