export interface EventStandards {
  target: string;
  recruit: string;
  walkon: string;
}

export interface SchoolStandards {
  id: string;
  schoolName: string;
  division: string;
  conference: string;
  state: string;
  maleStandards: Record<string, EventStandards>;
  femaleStandards: Record<string, EventStandards>;
}

export const schoolStandards: SchoolStandards[] = [
  {
    id: "1",
    schoolName: "Ohio State University",
    division: "D1",
    conference: "Big Ten",
    state: "OH",
    maleStandards: {
      "100m": { target: "10.20", recruit: "10.50", walkon: "10.80" },
      "200m": { target: "20.80", recruit: "21.20", walkon: "21.60" },
      "400m": { target: "46.50", recruit: "47.50", walkon: "48.50" },
      "800m": { target: "1:48.00", recruit: "1:52.00", walkon: "1:56.00" },
      "1500m": { target: "3:45.00", recruit: "3:52.00", walkon: "4:00.00" },
      "Mile": { target: "4:05.00", recruit: "4:15.00", walkon: "4:25.00" },
      "5000m": { target: "14:20.00", recruit: "14:50.00", walkon: "15:20.00" },
      "10000m": { target: "29:30.00", recruit: "30:30.00", walkon: "31:30.00" },
      "110m Hurdles": { target: "13.80", recruit: "14.20", walkon: "14.60" },
      "400m Hurdles": { target: "51.50", recruit: "53.00", walkon: "54.50" },
      "High Jump": { target: "7'0\"", recruit: "6'8\"", walkon: "6'4\"" },
      "Pole Vault": { target: "17'0\"", recruit: "16'0\"", walkon: "15'0\"" },
      "Long Jump": { target: "25'0\"", recruit: "24'0\"", walkon: "23'0\"" },
      "Triple Jump": { target: "52'0\"", recruit: "50'0\"", walkon: "48'0\"" },
      "Shot Put": { target: "60'0\"", recruit: "55'0\"", walkon: "50'0\"" },
      "Discus": { target: "180'0\"", recruit: "165'0\"", walkon: "150'0\"" },
      "Hammer": { target: "200'0\"", recruit: "180'0\"", walkon: "160'0\"" },
      "Javelin": { target: "220'0\"", recruit: "200'0\"", walkon: "180'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.50", recruit: "11.80", walkon: "12.10" },
      "200m": { target: "23.50", recruit: "24.00", walkon: "24.50" },
      "400m": { target: "53.00", recruit: "54.50", walkon: "56.00" },
      "800m": { target: "2:05.00", recruit: "2:10.00", walkon: "2:15.00" },
      "1500m": { target: "4:20.00", recruit: "4:30.00", walkon: "4:40.00" },
      "Mile": { target: "4:45.00", recruit: "4:55.00", walkon: "5:05.00" },
      "5000m": { target: "16:30.00", recruit: "17:00.00", walkon: "17:30.00" },
      "10000m": { target: "34:00.00", recruit: "35:00.00", walkon: "36:00.00" },
      "100m Hurdles": { target: "13.20", recruit: "13.60", walkon: "14.00" },
      "400m Hurdles": { target: "58.00", recruit: "60.00", walkon: "62.00" },
      "High Jump": { target: "5'8\"", recruit: "5'6\"", walkon: "5'4\"" },
      "Pole Vault": { target: "13'0\"", recruit: "12'0\"", walkon: "11'0\"" },
      "Long Jump": { target: "20'0\"", recruit: "19'0\"", walkon: "18'0\"" },
      "Triple Jump": { target: "42'0\"", recruit: "40'0\"", walkon: "38'0\"" },
      "Shot Put": { target: "50'0\"", recruit: "45'0\"", walkon: "40'0\"" },
      "Discus": { target: "160'0\"", recruit: "145'0\"", walkon: "130'0\"" },
      "Hammer": { target: "180'0\"", recruit: "160'0\"", walkon: "140'0\"" },
      "Javelin": { target: "160'0\"", recruit: "145'0\"", walkon: "130'0\"" }
    }
  },
  {
    id: "2",
    schoolName: "University of Akron",
    division: "D1",
    conference: "MAC",
    state: "OH",
    maleStandards: {
      "100m": { target: "10.60", recruit: "10.90", walkon: "11.20" },
      "200m": { target: "21.40", recruit: "21.80", walkon: "22.20" },
      "400m": { target: "48.00", recruit: "49.00", walkon: "50.00" },
      "800m": { target: "1:52.00", recruit: "1:56.00", walkon: "2:00.00" },
      "1500m": { target: "3:52.00", recruit: "4:00.00", walkon: "4:08.00" },
      "Mile": { target: "4:15.00", recruit: "4:25.00", walkon: "4:35.00" },
      "5000m": { target: "14:50.00", recruit: "15:20.00", walkon: "15:50.00" },
      "10000m": { target: "30:30.00", recruit: "31:30.00", walkon: "32:30.00" },
      "110m Hurdles": { target: "14.20", recruit: "14.60", walkon: "15.00" },
      "400m Hurdles": { target: "53.00", recruit: "54.50", walkon: "56.00" },
      "High Jump": { target: "6'8\"", recruit: "6'4\"", walkon: "6'0\"" },
      "Pole Vault": { target: "16'0\"", recruit: "15'0\"", walkon: "14'0\"" },
      "Long Jump": { target: "24'0\"", recruit: "23'0\"", walkon: "22'0\"" },
      "Triple Jump": { target: "50'0\"", recruit: "48'0\"", walkon: "46'0\"" },
      "Shot Put": { target: "55'0\"", recruit: "50'0\"", walkon: "45'0\"" },
      "Discus": { target: "165'0\"", recruit: "150'0\"", walkon: "135'0\"" },
      "Hammer": { target: "180'0\"", recruit: "160'0\"", walkon: "140'0\"" },
      "Javelin": { target: "200'0\"", recruit: "180'0\"", walkon: "160'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.80", recruit: "12.10", walkon: "12.40" },
      "200m": { target: "24.00", recruit: "24.50", walkon: "25.00" },
      "400m": { target: "54.50", recruit: "56.00", walkon: "57.50" },
      "800m": { target: "2:10.00", recruit: "2:15.00", walkon: "2:20.00" },
      "1500m": { target: "4:30.00", recruit: "4:40.00", walkon: "4:50.00" },
      "Mile": { target: "4:55.00", recruit: "5:05.00", walkon: "5:15.00" },
      "5000m": { target: "17:00.00", recruit: "17:30.00", walkon: "18:00.00" },
      "10000m": { target: "35:00.00", recruit: "36:00.00", walkon: "37:00.00" },
      "100m Hurdles": { target: "13.60", recruit: "14.00", walkon: "14.40" },
      "400m Hurdles": { target: "60.00", recruit: "62.00", walkon: "64.00" },
      "High Jump": { target: "5'6\"", recruit: "5'4\"", walkon: "5'2\"" },
      "Pole Vault": { target: "12'0\"", recruit: "11'0\"", walkon: "10'0\"" },
      "Long Jump": { target: "19'0\"", recruit: "18'0\"", walkon: "17'0\"" },
      "Triple Jump": { target: "40'0\"", recruit: "38'0\"", walkon: "36'0\"" },
      "Shot Put": { target: "45'0\"", recruit: "40'0\"", walkon: "35'0\"" },
      "Discus": { target: "145'0\"", recruit: "130'0\"", walkon: "115'0\"" },
      "Hammer": { target: "160'0\"", recruit: "140'0\"", walkon: "120'0\"" },
      "Javelin": { target: "145'0\"", recruit: "130'0\"", walkon: "115'0\"" }
    }
  }
];

export const findSchoolStandards = (schoolName: string): SchoolStandards | undefined => {
  return schoolStandards.find(school => 
    school.schoolName.toLowerCase().includes(schoolName.toLowerCase())
  );
};

export const searchSchools = (query: string): SchoolStandards[] => {
  if (!query.trim()) return schoolStandards;
  
  return schoolStandards.filter(school =>
    school.schoolName.toLowerCase().includes(query.toLowerCase()) ||
    school.conference.toLowerCase().includes(query.toLowerCase()) ||
    school.state.toLowerCase().includes(query.toLowerCase())
  );
};