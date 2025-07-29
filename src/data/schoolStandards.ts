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
  maleStandards?: Record<string, EventStandards>;
  femaleStandards: Record<string, EventStandards>;
}

export const schoolStandards: SchoolStandards[] = [
  // MEAC Conference Schools (D1)
  {
    id: "meac_norfolk_state",
    schoolName: "Norfolk State University",
    division: "D1",
    conference: "MEAC",
    state: "VA",
    maleStandards: {
      "100m": { target: "10.55", recruit: "10.65", walkon: "10.75" },
      "200m": { target: "21.35", recruit: "21.47", walkon: "21.60" },
      "400m": { target: "47.90", recruit: "48.25", walkon: "48.60" },
      "800m": { target: "1:53.0", recruit: "1:54.25", walkon: "1:55.5" },
      "1600m": { target: "4:15.0", recruit: "4:17.5", walkon: "4:25.0" },
      "3200m": { target: "9:20.5", recruit: "9:35.25", walkon: "9:50.0" },
      "110m Hurdles": { target: "14.05", recruit: "14.20", walkon: "14.35" },
      "300m Hurdles": { target: "37.30", recruit: "37.90", walkon: "38.50" },
      "400m Hurdles": { target: "52.50", recruit: "53.00", walkon: "53.50" },
      "High Jump": { target: "6'9\"", recruit: "6'6\"", walkon: "6'4\"" },
      "Pole Vault": { target: "15'0\"", recruit: "14'3\"", walkon: "13'0\"" },
      "Long Jump": { target: "24'2\"", recruit: "23'0\"", walkon: "21'8\"" },
      "Triple Jump": { target: "48'5\"", recruit: "47'9\"", walkon: "47'2\"" },
      "Shot Put": { target: "58'0\"", recruit: "56'6\"", walkon: "55'0\"" },
      "Discus": { target: "165'0\"", recruit: "157'6\"", walkon: "150'0\"" },
      "Javelin": { target: "180'0\"", recruit: "175'0\"", walkon: "170'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.9", recruit: "12.1", walkon: "12.3" },
      "200m": { target: "24.4", recruit: "24.8", walkon: "25.2" },
      "400m": { target: "56.0", recruit: "57.0", walkon: "58.0" },
      "800m": { target: "2:13", recruit: "2:16", walkon: "2:19" },
      "1600m": { target: "5:20", recruit: "5:28", walkon: "5:36" },
      "3200m": { target: "19:15", recruit: "19:45", walkon: "20:15" },
      "5000m": { target: "19:15", recruit: "19:45", walkon: "20:15" },
      "55m": { target: "7.00", recruit: "7.15", walkon: "7.30" },
      "55m Hurdles": { target: "8.20", recruit: "8.40", walkon: "8.60" },
      "100m Hurdles": { target: "14.10", recruit: "14.40", walkon: "14.70" },
      "300m Hurdles": { target: "40.00", recruit: "41.00", walkon: "42.00" },
      "400m Hurdles": { target: "1:02.0", recruit: "1:04.0", walkon: "1:06.0" },
      "High Jump": { target: "5'6\"", recruit: "5'4\"", walkon: "5'2\"" },
      "Pole Vault": { target: "11'8\"", recruit: "11'3\"", walkon: "10'9\"" },
      "Long Jump": { target: "18'7\"", recruit: "18'0\"", walkon: "17'6\"" },
      "Triple Jump": { target: "40'0\"", recruit: "38'6\"", walkon: "37'0\"" },
      "Shot Put": { target: "43'0\"", recruit: "41'0\"", walkon: "39'0\"" },
      "Discus": { target: "125'0\"", recruit: "120'0\"", walkon: "115'0\"" },
      "Javelin": { target: "135'0\"", recruit: "130'0\"", walkon: "125'0\"" },
      "Heptathlon": { target: "4200", recruit: "4000", walkon: "3800" }
    }
  },
  {
    id: "meac_howard",
    schoolName: "Howard University",
    division: "D1",
    conference: "MEAC",
    state: "DC",
    maleStandards: {
      "100m": { target: "10.50", recruit: "10.60", walkon: "10.70" },
      "200m": { target: "21.30", recruit: "21.42", walkon: "21.55" },
      "400m": { target: "47.80", recruit: "48.15", walkon: "48.50" },
      "800m": { target: "1:52.5", recruit: "1:53.75", walkon: "1:55.0" },
      "1600m": { target: "4:13.0", recruit: "4:15.5", walkon: "4:23.0" },
      "3200m": { target: "9:15.0", recruit: "9:30.0", walkon: "9:45.0" },
      "110m Hurdles": { target: "14.00", recruit: "14.15", walkon: "14.30" },
      "300m Hurdles": { target: "37.20", recruit: "37.80", walkon: "38.40" },
      "400m Hurdles": { target: "52.30", recruit: "52.80", walkon: "53.30" },
      "High Jump": { target: "6'10\"", recruit: "6'7\"", walkon: "6'5\"" },
      "Pole Vault": { target: "15'3\"", recruit: "14'6\"", walkon: "13'3\"" },
      "Long Jump": { target: "24'6\"", recruit: "23'3\"", walkon: "22'0\"" },
      "Triple Jump": { target: "48'9\"", recruit: "48'0\"", walkon: "47'6\"" },
      "Shot Put": { target: "58'6\"", recruit: "57'0\"", walkon: "55'6\"" },
      "Discus": { target: "168'0\"", recruit: "160'0\"", walkon: "152'0\"" },
      "Javelin": { target: "182'0\"", recruit: "177'0\"", walkon: "172'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.8", recruit: "12.0", walkon: "12.2" },
      "200m": { target: "24.2", recruit: "24.6", walkon: "25.0" },
      "400m": { target: "55.5", recruit: "56.5", walkon: "57.5" },
      "800m": { target: "2:11", recruit: "2:14", walkon: "2:17" },
      "1600m": { target: "5:18", recruit: "5:26", walkon: "5:34" },
      "3200m": { target: "19:05", recruit: "19:35", walkon: "20:05" },
      "5000m": { target: "19:05", recruit: "19:35", walkon: "20:05" },
      "55m": { target: "6.95", recruit: "7.10", walkon: "7.25" },
      "55m Hurdles": { target: "8.15", recruit: "8.35", walkon: "8.55" },
      "100m Hurdles": { target: "14.00", recruit: "14.30", walkon: "14.60" },
      "300m Hurdles": { target: "39.50", recruit: "40.50", walkon: "41.50" },
      "400m Hurdles": { target: "1:01.0", recruit: "1:03.0", walkon: "1:05.0" },
      "High Jump": { target: "5'7\"", recruit: "5'5\"", walkon: "5'3\"" },
      "Pole Vault": { target: "12'0\"", recruit: "11'6\"", walkon: "11'0\"" },
      "Long Jump": { target: "18'9\"", recruit: "18'2\"", walkon: "17'8\"" },
      "Triple Jump": { target: "40'3\"", recruit: "38'9\"", walkon: "37'3\"" },
      "Shot Put": { target: "43'6\"", recruit: "41'6\"", walkon: "39'6\"" },
      "Discus": { target: "127'0\"", recruit: "122'0\"", walkon: "117'0\"" },
      "Javelin": { target: "137'0\"", recruit: "132'0\"", walkon: "127'0\"" },
      "Heptathlon": { target: "4300", recruit: "4100", walkon: "3900" }
    }
  },
  // Conference USA (CUSA) Schools (D1)
  {
    id: "cusa_liberty",
    schoolName: "Liberty University",
    division: "D1",
    conference: "CUSA",
    state: "VA",
    maleStandards: {
      "100m": { target: "10.25", recruit: "10.30", walkon: "10.60" },
      "200m": { target: "20.85", recruit: "20.90", walkon: "21.40" },
      "400m": { target: "46.40", recruit: "46.50", walkon: "48.50" },
      "800m": { target: "1:50.40", recruit: "1:50.70", walkon: "1:54.00" },
      "1600m": { target: "4:07.50", recruit: "4:08.00", walkon: "4:15.00" },
      "3200m": { target: "9:02.50", recruit: "9:03.00", walkon: "9:15.00" },
      "110m Hurdles": { target: "14.15", recruit: "14.20", walkon: "14.60" },
      "300m Hurdles": { target: "37.40", recruit: "37.50", walkon: "39.40" },
      "400m Hurdles": { target: "52.70", recruit: "52.80", walkon: "55.40" },
      "High Jump": { target: "6'11\"", recruit: "6'10\"", walkon: "6'6\"" },
      "Pole Vault": { target: "16'9\"", recruit: "16'6\"", walkon: "15'9\"" },
      "Long Jump": { target: "23'11\"", recruit: "23'8\"", walkon: "23'0\"" },
      "Triple Jump": { target: "49'3\"", recruit: "49'0\"", walkon: "46'0\"" },
      "Shot Put": { target: "60'6\"", recruit: "60'0\"", walkon: "56'0\"" },
      "Discus": { target: "182'0\"", recruit: "180'0\"", walkon: "170'0\"" },
      "Javelin": { target: "207'0\"", recruit: "205'0\"", walkon: "190'0\"" },
      "Hammer": { target: "192'0\"", recruit: "190'0\"", walkon: "175'0\"" },
      "Decathlon": { target: "7100", recruit: "7000", walkon: "6200" }
    },
    femaleStandards: {
      "100m": { target: "11.95", recruit: "12.00", walkon: "12.40" },
      "200m": { target: "23.95", recruit: "24.00", walkon: "24.50" },
      "400m": { target: "55.90", recruit: "56.00", walkon: "57.50" },
      "800m": { target: "2:09.50", recruit: "2:10.00", walkon: "2:19.00" },
      "1600m": { target: "4:51.50", recruit: "4:52.00", walkon: "5:10.00" },
      "3200m": { target: "10:34.50", recruit: "10:35.00", walkon: "10:55.00" },
      "100m Hurdles": { target: "14.15", recruit: "14.20", walkon: "14.60" },
      "300m Hurdles": { target: "43.40", recruit: "43.50", walkon: "45.00" },
      "400m Hurdles": { target: "61.10", recruit: "61.20", walkon: "63.00" },
      "High Jump": { target: "5'9\"", recruit: "5'8\"", walkon: "5'5\"" },
      "Pole Vault": { target: "13'3\"", recruit: "13'0\"", walkon: "12'6\"" },
      "Long Jump": { target: "19'3\"", recruit: "19'0\"", walkon: "18'0\"" },
      "Triple Jump": { target: "39'3\"", recruit: "39'0\"", walkon: "36'6\"" },
      "Shot Put": { target: "44'6\"", recruit: "44'0\"", walkon: "41'0\"" },
      "Discus": { target: "147'0\"", recruit: "145'0\"", walkon: "130'0\"" },
      "Javelin": { target: "137'0\"", recruit: "135'0\"", walkon: "125'0\"" },
      "Hammer": { target: "177'0\"", recruit: "175'0\"", walkon: "155'0\"" },
      "Heptathlon": { target: "4800", recruit: "4750", walkon: "4300" }
    }
  },
  // SAC Conference Schools (D2)
  {
    id: "sac_lenoir_rhyne",
    schoolName: "Lenoir-Rhyne University",
    division: "D2",
    conference: "SAC",
    state: "NC",
    maleStandards: {
      "100m": { target: "10.70", recruit: "10.80", walkon: "10.90" },
      "200m": { target: "21.85", recruit: "22.05", walkon: "22.25" },
      "400m": { target: "49.50", recruit: "49.80", walkon: "50.10" },
      "800m": { target: "1:58.00", recruit: "2:00.00", walkon: "2:02.00" },
      "1600m": { target: "4:28.00", recruit: "4:30.00", walkon: "4:38.00" },
      "3200m": { target: "9:50.00", recruit: "9:55.00", walkon: "10:05.00" },
      "110m Hurdles": { target: "14.90", recruit: "15.30", walkon: "15.50" },
      "300m Hurdles": { target: "39.00", recruit: "39.50", walkon: "40.00" },
      "High Jump": { target: "6'6\"", recruit: "6'4\"", walkon: "6'2\"" },
      "Pole Vault": { target: "15'6\"", recruit: "15'0\"", walkon: "14'6\"" },
      "Long Jump": { target: "23'6\"", recruit: "22'6\"", walkon: "22'0\"" },
      "Triple Jump": { target: "46'6\"", recruit: "45'0\"", walkon: "44'6\"" },
      "Shot Put": { target: "55'0\"", recruit: "54'0\"", walkon: "52'0\"" },
      "Discus": { target: "165'0\"", recruit: "160'0\"", walkon: "155'0\"" },
      "Javelin": { target: "180'0\"", recruit: "175'0\"", walkon: "165'0\"" }
    },
    femaleStandards: {
      "100m": { target: "12.20", recruit: "12.40", walkon: "12.60" },
      "200m": { target: "25.50", recruit: "25.80", walkon: "26.10" },
      "400m": { target: "57.50", recruit: "58.50", walkon: "59.50" },
      "800m": { target: "2:22.00", recruit: "2:24.00", walkon: "2:26.00" },
      "1600m": { target: "5:26.00", recruit: "5:30.00", walkon: "5:40.00" },
      "3200m": { target: "11:55.00", recruit: "12:00.00", walkon: "12:15.00" },
      "100m Hurdles": { target: "15.00", recruit: "15.40", walkon: "15.70" },
      "300m Hurdles": { target: "45.80", recruit: "46.50", walkon: "47.00" },
      "High Jump": { target: "5'6\"", recruit: "5'4\"", walkon: "5'2\"" },
      "Pole Vault": { target: "12'6\"", recruit: "12'0\"", walkon: "11'6\"" },
      "Long Jump": { target: "18'6\"", recruit: "18'0\"", walkon: "17'6\"" },
      "Triple Jump": { target: "37'6\"", recruit: "36'6\"", walkon: "36'0\"" },
      "Shot Put": { target: "40'0\"", recruit: "39'0\"", walkon: "37'0\"" },
      "Discus": { target: "125'0\"", recruit: "120'0\"", walkon: "110'0\"" },
      "Javelin": { target: "125'0\"", recruit: "120'0\"", walkon: "110'0\"" }
    }
  }
];

// Helper functions
export function searchSchools(query: string): SchoolStandards[] {
  const lowercaseQuery = query.toLowerCase();
  return schoolStandards.filter(school => 
    school.schoolName.toLowerCase().includes(lowercaseQuery) ||
    school.conference.toLowerCase().includes(lowercaseQuery) ||
    school.state.toLowerCase().includes(lowercaseQuery)
  );
}

export function findSchoolStandards(schoolName: string): SchoolStandards | undefined {
  return schoolStandards.find(school => 
    school.schoolName.toLowerCase() === schoolName.toLowerCase()
  );
}