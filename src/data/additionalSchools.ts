import { SchoolStandards } from "./schoolStandards";

// Long Island University standards template
const longIslandMaleStandards = {
  "100m": { target: "10.75", recruit: "10.90", walkon: "11.05" },
  "200m": { target: "22.00", recruit: "22.40", walkon: "22.60" },
  "400m": { target: "49.05", recruit: "49.80", walkon: "50.30" },
  "800m": { target: "1:56.00", recruit: "1:57.00", walkon: "1:58.50" },
  "1500m": { target: "4:06.00", recruit: "4:08.00", walkon: "4:10.00" },
  "Mile": { target: "4:20.00", recruit: "4:22.00", walkon: "4:26.00" },
  "5000m": { target: "15:25.00", recruit: "15:40.00", walkon: "15:50.00" },
  "110m Hurdles": { target: "14.40", recruit: "14.60", walkon: "14.90" },
  "400m Hurdles": { target: "54.50", recruit: "55.50", walkon: "56.50" },
  "High Jump": { target: "6'6\"", recruit: "6'4\"", walkon: "6'2\"" },
  "Pole Vault": { target: "14'6\"", recruit: "14'0\"", walkon: "13'6\"" },
  "Long Jump": { target: "23'2\"", recruit: "22'6\"", walkon: "22'0\"" },
  "Triple Jump": { target: "46'0\"", recruit: "44'6\"", walkon: "43'0\"" },
  "Shot Put": { target: "56'0\"", recruit: "52'0\"", walkon: "48'0\"" },
  "Discus": { target: "170'0\"", recruit: "160'0\"", walkon: "145'0\"" },
  "Hammer": { target: "175'0\"", recruit: "165'0\"", walkon: "155'0\"" },
  "Javelin": { target: "185'0\"", recruit: "175'0\"", walkon: "165'0\"" }
};

const longIslandFemaleStandards = {
  "100m": { target: "12.10", recruit: "12.40", walkon: "12.60" },
  "200m": { target: "24.70", recruit: "25.20", walkon: "25.50" },
  "400m": { target: "56.90", recruit: "57.90", walkon: "58.40" },
  "800m": { target: "2:19.00", recruit: "2:21.00", walkon: "2:23.00" },
  "1500m": { target: "4:50.00", recruit: "4:53.00", walkon: "4:58.00" },
  "Mile": { target: "5:15.00", recruit: "5:18.00", walkon: "5:22.00" },
  "5000m": { target: "18:00.00", recruit: "18:12.00", walkon: "18:40.00" },
  "100m Hurdles": { target: "14.20", recruit: "14.40", walkon: "14.80" },
  "400m Hurdles": { target: "62.00", recruit: "63.00", walkon: "64.50" },
  "High Jump": { target: "5'5\"", recruit: "5'3\"", walkon: "5'1\"" },
  "Pole Vault": { target: "12'6\"", recruit: "11'9\"", walkon: "11'3\"" },
  "Long Jump": { target: "17'9\"", recruit: "17'2\"", walkon: "16'8\"" },
  "Triple Jump": { target: "37'0\"", recruit: "35'6\"", walkon: "34'0\"" },
  "Shot Put": { target: "47'0\"", recruit: "44'0\"", walkon: "41'0\"" },
  "Discus": { target: "135'0\"", recruit: "125'0\"", walkon: "115'0\"" },
  "Hammer": { target: "140'0\"", recruit: "130'0\"", walkon: "120'0\"" },
  "Javelin": { target: "130'0\"", recruit: "120'0\"", walkon: "110'0\"" }
};

export const additionalSchools: SchoolStandards[] = [
  // Conference Carolinas continued
  {
    id: "conf_carolinas_unc_pembroke",
    schoolName: "UNC Pembroke",
    division: "D2",
    conference: "Conference Carolinas",
    state: "NC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_belmont_abbey",
    schoolName: "Belmont Abbey College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "NC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_southern_wesleyan",
    schoolName: "Southern Wesleyan University",
    division: "D2",
    conference: "Conference Carolinas",
    state: "SC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_lees_mcrae",
    schoolName: "Lees-McRae College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "NC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_north_greenville",
    schoolName: "North Greenville University",
    division: "D2",
    conference: "Conference Carolinas",
    state: "SC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_shorter",
    schoolName: "Shorter University",
    division: "D2",
    conference: "Conference Carolinas",
    state: "GA",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_king",
    schoolName: "King University",
    division: "D2",
    conference: "Conference Carolinas",
    state: "TN",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_young_harris",
    schoolName: "Young Harris College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "GA",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_emmanuel",
    schoolName: "Emmanuel College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "GA",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_francis_marion",
    schoolName: "Francis Marion University",
    division: "D2",
    conference: "Conference Carolinas",
    state: "SC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_barton",
    schoolName: "Barton College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "NC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "conf_carolinas_erskine",
    schoolName: "Erskine College",
    division: "D2",
    conference: "Conference Carolinas",
    state: "SC",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },

  // ECC Conference Schools
  {
    id: "ecc_roberts_wesleyan",
    schoolName: "Roberts Wesleyan University",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_st_thomas_aquinas",
    schoolName: "St. Thomas Aquinas College",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_staten_island",
    schoolName: "College of Staten Island",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_daemen",
    schoolName: "Daemen University",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_queens_ny",
    schoolName: "Queens College",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_molloy",
    schoolName: "Molloy University",
    division: "D2",
    conference: "ECC",
    state: "NY",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },

  // ECC Women's Only Schools
  {
    id: "ecc_district_of_columbia",
    schoolName: "University of the District of Columbia",
    division: "D2",
    conference: "ECC",
    state: "DC",
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "ecc_dyouville",
    schoolName: "D'Youville University",
    division: "D2",
    conference: "ECC",
    state: "NY",
    femaleStandards: longIslandFemaleStandards
  },

  // Great American Conference Schools
  {
    id: "gac_harding",
    schoolName: "Harding University",
    division: "D2",
    conference: "Great American",
    state: "AR",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_oklahoma_baptist",
    schoolName: "Oklahoma Baptist University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_southern_arkansas",
    schoolName: "Southern Arkansas University",
    division: "D2",
    conference: "Great American",
    state: "AR",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_northwestern_oklahoma",
    schoolName: "Northwestern Oklahoma State University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_east_central",
    schoolName: "East Central University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_ouachita_baptist",
    schoolName: "Ouachita Baptist University",
    division: "D2",
    conference: "Great American",
    state: "AR",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_southern_nazarene",
    schoolName: "Southern Nazarene University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    maleStandards: longIslandMaleStandards,
    femaleStandards: longIslandFemaleStandards
  },

  // Great American Conference Women's Only Schools
  {
    id: "gac_southwestern_oklahoma",
    schoolName: "Southwestern Oklahoma State University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_southeastern_oklahoma",
    schoolName: "Southeastern Oklahoma State University",
    division: "D2",
    conference: "Great American",
    state: "OK",
    femaleStandards: longIslandFemaleStandards
  },
  {
    id: "gac_arkansas_tech",
    schoolName: "Arkansas Tech University",
    division: "D2",
    conference: "Great American",
    state: "AR",
    femaleStandards: longIslandFemaleStandards
  }
];