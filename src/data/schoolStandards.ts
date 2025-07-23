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
  },
  {
    id: "3",
    schoolName: "University of Alabama",
    division: "D1",
    conference: "SEC",
    state: "AL",
    maleStandards: {
      "100m": { target: "10.10", recruit: "10.40", walkon: "10.70" },
      "200m": { target: "20.50", recruit: "20.90", walkon: "21.30" },
      "400m": { target: "45.80", recruit: "46.80", walkon: "47.80" },
      "800m": { target: "1:46.00", recruit: "1:50.00", walkon: "1:54.00" },
      "1500m": { target: "3:42.00", recruit: "3:49.00", walkon: "3:57.00" },
      "Mile": { target: "4:02.00", recruit: "4:12.00", walkon: "4:22.00" },
      "5000m": { target: "14:10.00", recruit: "14:40.00", walkon: "15:10.00" },
      "10000m": { target: "29:10.00", recruit: "30:10.00", walkon: "31:10.00" },
      "110m Hurdles": { target: "13.60", recruit: "14.00", walkon: "14.40" },
      "400m Hurdles": { target: "50.80", recruit: "52.30", walkon: "53.80" },
      "High Jump": { target: "7'2\"", recruit: "6'10\"", walkon: "6'6\"" },
      "Pole Vault": { target: "17'6\"", recruit: "16'6\"", walkon: "15'6\"" },
      "Long Jump": { target: "25'6\"", recruit: "24'6\"", walkon: "23'6\"" },
      "Triple Jump": { target: "53'0\"", recruit: "51'0\"", walkon: "49'0\"" },
      "Shot Put": { target: "62'0\"", recruit: "57'0\"", walkon: "52'0\"" },
      "Discus": { target: "185'0\"", recruit: "170'0\"", walkon: "155'0\"" },
      "Hammer": { target: "210'0\"", recruit: "190'0\"", walkon: "170'0\"" },
      "Javelin": { target: "230'0\"", recruit: "210'0\"", walkon: "190'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.30", recruit: "11.60", walkon: "11.90" },
      "200m": { target: "23.20", recruit: "23.70", walkon: "24.20" },
      "400m": { target: "52.50", recruit: "54.00", walkon: "55.50" },
      "800m": { target: "2:03.00", recruit: "2:08.00", walkon: "2:13.00" },
      "1500m": { target: "4:15.00", recruit: "4:25.00", walkon: "4:35.00" },
      "Mile": { target: "4:40.00", recruit: "4:50.00", walkon: "5:00.00" },
      "5000m": { target: "16:20.00", recruit: "16:50.00", walkon: "17:20.00" },
      "10000m": { target: "33:50.00", recruit: "34:50.00", walkon: "35:50.00" },
      "100m Hurdles": { target: "13.00", recruit: "13.40", walkon: "13.80" },
      "400m Hurdles": { target: "57.50", recruit: "59.50", walkon: "61.50" },
      "High Jump": { target: "5'10\"", recruit: "5'8\"", walkon: "5'6\"" },
      "Pole Vault": { target: "13'6\"", recruit: "12'6\"", walkon: "11'6\"" },
      "Long Jump": { target: "20'6\"", recruit: "19'6\"", walkon: "18'6\"" },
      "Triple Jump": { target: "43'0\"", recruit: "41'0\"", walkon: "39'0\"" },
      "Shot Put": { target: "52'0\"", recruit: "47'0\"", walkon: "42'0\"" },
      "Discus": { target: "165'0\"", recruit: "150'0\"", walkon: "135'0\"" },
      "Hammer": { target: "185'0\"", recruit: "165'0\"", walkon: "145'0\"" },
      "Javelin": { target: "165'0\"", recruit: "150'0\"", walkon: "135'0\"" }
    }
  },
  {
    id: "4",
    schoolName: "University of Oregon",
    division: "D1",
    conference: "Big 12",
    state: "OR",
    maleStandards: {
      "100m": { target: "10.05", recruit: "10.35", walkon: "10.65" },
      "200m": { target: "20.40", recruit: "20.80", walkon: "21.20" },
      "400m": { target: "45.50", recruit: "46.50", walkon: "47.50" },
      "800m": { target: "1:45.00", recruit: "1:49.00", walkon: "1:53.00" },
      "1500m": { target: "3:40.00", recruit: "3:47.00", walkon: "3:55.00" },
      "Mile": { target: "4:00.00", recruit: "4:10.00", walkon: "4:20.00" },
      "5000m": { target: "14:00.00", recruit: "14:30.00", walkon: "15:00.00" },
      "10000m": { target: "29:00.00", recruit: "30:00.00", walkon: "31:00.00" },
      "110m Hurdles": { target: "13.50", recruit: "13.90", walkon: "14.30" },
      "400m Hurdles": { target: "50.50", recruit: "52.00", walkon: "53.50" },
      "High Jump": { target: "7'3\"", recruit: "7'0\"", walkon: "6'8\"" },
      "Pole Vault": { target: "18'0\"", recruit: "17'0\"", walkon: "16'0\"" },
      "Long Jump": { target: "26'0\"", recruit: "25'0\"", walkon: "24'0\"" },
      "Triple Jump": { target: "54'0\"", recruit: "52'0\"", walkon: "50'0\"" },
      "Shot Put": { target: "64'0\"", recruit: "59'0\"", walkon: "54'0\"" },
      "Discus": { target: "190'0\"", recruit: "175'0\"", walkon: "160'0\"" },
      "Hammer": { target: "220'0\"", recruit: "200'0\"", walkon: "180'0\"" },
      "Javelin": { target: "240'0\"", recruit: "220'0\"", walkon: "200'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.20", recruit: "11.50", walkon: "11.80" },
      "200m": { target: "23.00", recruit: "23.50", walkon: "24.00" },
      "400m": { target: "52.00", recruit: "53.50", walkon: "55.00" },
      "800m": { target: "2:02.00", recruit: "2:07.00", walkon: "2:12.00" },
      "1500m": { target: "4:12.00", recruit: "4:22.00", walkon: "4:32.00" },
      "Mile": { target: "4:37.00", recruit: "4:47.00", walkon: "4:57.00" },
      "5000m": { target: "16:10.00", recruit: "16:40.00", walkon: "17:10.00" },
      "10000m": { target: "33:40.00", recruit: "34:40.00", walkon: "35:40.00" },
      "100m Hurdles": { target: "12.90", recruit: "13.30", walkon: "13.70" },
      "400m Hurdles": { target: "57.00", recruit: "59.00", walkon: "61.00" },
      "High Jump": { target: "6'0\"", recruit: "5'10\"", walkon: "5'8\"" },
      "Pole Vault": { target: "14'0\"", recruit: "13'0\"", walkon: "12'0\"" },
      "Long Jump": { target: "21'0\"", recruit: "20'0\"", walkon: "19'0\"" },
      "Triple Jump": { target: "44'0\"", recruit: "42'0\"", walkon: "40'0\"" },
      "Shot Put": { target: "54'0\"", recruit: "49'0\"", walkon: "44'0\"" },
      "Discus": { target: "170'0\"", recruit: "155'0\"", walkon: "140'0\"" },
      "Hammer": { target: "190'0\"", recruit: "170'0\"", walkon: "150'0\"" },
      "Javelin": { target: "170'0\"", recruit: "155'0\"", walkon: "140'0\"" }
    }
  },
  {
    id: "5",
    schoolName: "Stanford University",
    division: "D1",
    conference: "ACC",
    state: "CA",
    maleStandards: {
      "100m": { target: "10.15", recruit: "10.45", walkon: "10.75" },
      "200m": { target: "20.60", recruit: "21.00", walkon: "21.40" },
      "400m": { target: "46.20", recruit: "47.20", walkon: "48.20" },
      "800m": { target: "1:47.00", recruit: "1:51.00", walkon: "1:55.00" },
      "1500m": { target: "3:43.00", recruit: "3:50.00", walkon: "3:58.00" },
      "Mile": { target: "4:03.00", recruit: "4:13.00", walkon: "4:23.00" },
      "5000m": { target: "14:15.00", recruit: "14:45.00", walkon: "15:15.00" },
      "10000m": { target: "29:20.00", recruit: "30:20.00", walkon: "31:20.00" },
      "110m Hurdles": { target: "13.70", recruit: "14.10", walkon: "14.50" },
      "400m Hurdles": { target: "51.20", recruit: "52.70", walkon: "54.20" },
      "High Jump": { target: "7'1\"", recruit: "6'9\"", walkon: "6'5\"" },
      "Pole Vault": { target: "17'3\"", recruit: "16'3\"", walkon: "15'3\"" },
      "Long Jump": { target: "25'3\"", recruit: "24'3\"", walkon: "23'3\"" },
      "Triple Jump": { target: "52'6\"", recruit: "50'6\"", walkon: "48'6\"" },
      "Shot Put": { target: "61'0\"", recruit: "56'0\"", walkon: "51'0\"" },
      "Discus": { target: "182'0\"", recruit: "167'0\"", walkon: "152'0\"" },
      "Hammer": { target: "205'0\"", recruit: "185'0\"", walkon: "165'0\"" },
      "Javelin": { target: "225'0\"", recruit: "205'0\"", walkon: "185'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.40", recruit: "11.70", walkon: "12.00" },
      "200m": { target: "23.30", recruit: "23.80", walkon: "24.30" },
      "400m": { target: "52.80", recruit: "54.30", walkon: "55.80" },
      "800m": { target: "2:04.00", recruit: "2:09.00", walkon: "2:14.00" },
      "1500m": { target: "4:18.00", recruit: "4:28.00", walkon: "4:38.00" },
      "Mile": { target: "4:43.00", recruit: "4:53.00", walkon: "5:03.00" },
      "5000m": { target: "16:25.00", recruit: "16:55.00", walkon: "17:25.00" },
      "10000m": { target: "33:55.00", recruit: "34:55.00", walkon: "35:55.00" },
      "100m Hurdles": { target: "13.10", recruit: "13.50", walkon: "13.90" },
      "400m Hurdles": { target: "57.80", recruit: "59.80", walkon: "61.80" },
      "High Jump": { target: "5'9\"", recruit: "5'7\"", walkon: "5'5\"" },
      "Pole Vault": { target: "13'3\"", recruit: "12'3\"", walkon: "11'3\"" },
      "Long Jump": { target: "20'3\"", recruit: "19'3\"", walkon: "18'3\"" },
      "Triple Jump": { target: "42'6\"", recruit: "40'6\"", walkon: "38'6\"" },
      "Shot Put": { target: "51'0\"", recruit: "46'0\"", walkon: "41'0\"" },
      "Discus": { target: "162'0\"", recruit: "147'0\"", walkon: "132'0\"" },
      "Hammer": { target: "182'0\"", recruit: "162'0\"", walkon: "142'0\"" },
      "Javelin": { target: "162'0\"", recruit: "147'0\"", walkon: "132'0\"" }
    }
  },
  {
    id: "6",
    schoolName: "University of Florida",
    division: "D1",
    conference: "SEC",
    state: "FL",
    maleStandards: {
      "100m": { target: "10.12", recruit: "10.42", walkon: "10.72" },
      "200m": { target: "20.55", recruit: "20.95", walkon: "21.35" },
      "400m": { target: "45.90", recruit: "46.90", walkon: "47.90" },
      "800m": { target: "1:46.50", recruit: "1:50.50", walkon: "1:54.50" },
      "1500m": { target: "3:41.00", recruit: "3:48.00", walkon: "3:56.00" },
      "Mile": { target: "4:01.00", recruit: "4:11.00", walkon: "4:21.00" },
      "5000m": { target: "14:05.00", recruit: "14:35.00", walkon: "15:05.00" },
      "10000m": { target: "29:05.00", recruit: "30:05.00", walkon: "31:05.00" },
      "110m Hurdles": { target: "13.55", recruit: "13.95", walkon: "14.35" },
      "400m Hurdles": { target: "50.70", recruit: "52.20", walkon: "53.70" },
      "High Jump": { target: "7'2\"", recruit: "6'10\"", walkon: "6'6\"" },
      "Pole Vault": { target: "17'9\"", recruit: "16'9\"", walkon: "15'9\"" },
      "Long Jump": { target: "25'9\"", recruit: "24'9\"", walkon: "23'9\"" },
      "Triple Jump": { target: "53'6\"", recruit: "51'6\"", walkon: "49'6\"" },
      "Shot Put": { target: "63'0\"", recruit: "58'0\"", walkon: "53'0\"" },
      "Discus": { target: "188'0\"", recruit: "173'0\"", walkon: "158'0\"" },
      "Hammer": { target: "215'0\"", recruit: "195'0\"", walkon: "175'0\"" },
      "Javelin": { target: "235'0\"", recruit: "215'0\"", walkon: "195'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.25", recruit: "11.55", walkon: "11.85" },
      "200m": { target: "23.10", recruit: "23.60", walkon: "24.10" },
      "400m": { target: "52.20", recruit: "53.70", walkon: "55.20" },
      "800m": { target: "2:02.50", recruit: "2:07.50", walkon: "2:12.50" },
      "1500m": { target: "4:14.00", recruit: "4:24.00", walkon: "4:34.00" },
      "Mile": { target: "4:39.00", recruit: "4:49.00", walkon: "4:59.00" },
      "5000m": { target: "16:15.00", recruit: "16:45.00", walkon: "17:15.00" },
      "10000m": { target: "33:45.00", recruit: "34:45.00", walkon: "35:45.00" },
      "100m Hurdles": { target: "12.95", recruit: "13.35", walkon: "13.75" },
      "400m Hurdles": { target: "57.20", recruit: "59.20", walkon: "61.20" },
      "High Jump": { target: "5'11\"", recruit: "5'9\"", walkon: "5'7\"" },
      "Pole Vault": { target: "13'9\"", recruit: "12'9\"", walkon: "11'9\"" },
      "Long Jump": { target: "20'9\"", recruit: "19'9\"", walkon: "18'9\"" },
      "Triple Jump": { target: "43'6\"", recruit: "41'6\"", walkon: "39'6\"" },
      "Shot Put": { target: "53'0\"", recruit: "48'0\"", walkon: "43'0\"" },
      "Discus": { target: "168'0\"", recruit: "153'0\"", walkon: "138'0\"" },
      "Hammer": { target: "188'0\"", recruit: "168'0\"", walkon: "148'0\"" },
      "Javelin": { target: "168'0\"", recruit: "153'0\"", walkon: "138'0\"" }
    }
  },
  {
    id: "7",
    schoolName: "University of Texas",
    division: "D1",
    conference: "SEC",
    state: "TX",
    maleStandards: {
      "100m": { target: "10.08", recruit: "10.38", walkon: "10.68" },
      "200m": { target: "20.45", recruit: "20.85", walkon: "21.25" },
      "400m": { target: "45.70", recruit: "46.70", walkon: "47.70" },
      "800m": { target: "1:45.50", recruit: "1:49.50", walkon: "1:53.50" },
      "1500m": { target: "3:39.00", recruit: "3:46.00", walkon: "3:54.00" },
      "Mile": { target: "3:59.00", recruit: "4:09.00", walkon: "4:19.00" },
      "5000m": { target: "13:55.00", recruit: "14:25.00", walkon: "14:55.00" },
      "10000m": { target: "28:55.00", recruit: "29:55.00", walkon: "30:55.00" },
      "110m Hurdles": { target: "13.45", recruit: "13.85", walkon: "14.25" },
      "400m Hurdles": { target: "50.40", recruit: "51.90", walkon: "53.40" },
      "High Jump": { target: "7'4\"", recruit: "7'1\"", walkon: "6'9\"" },
      "Pole Vault": { target: "18'3\"", recruit: "17'3\"", walkon: "16'3\"" },
      "Long Jump": { target: "26'3\"", recruit: "25'3\"", walkon: "24'3\"" },
      "Triple Jump": { target: "54'6\"", recruit: "52'6\"", walkon: "50'6\"" },
      "Shot Put": { target: "65'0\"", recruit: "60'0\"", walkon: "55'0\"" },
      "Discus": { target: "195'0\"", recruit: "180'0\"", walkon: "165'0\"" },
      "Hammer": { target: "225'0\"", recruit: "205'0\"", walkon: "185'0\"" },
      "Javelin": { target: "245'0\"", recruit: "225'0\"", walkon: "205'0\"" }
    },
    femaleStandards: {
      "100m": { target: "11.15", recruit: "11.45", walkon: "11.75" },
      "200m": { target: "22.90", recruit: "23.40", walkon: "23.90" },
      "400m": { target: "51.80", recruit: "53.30", walkon: "54.80" },
      "800m": { target: "2:01.00", recruit: "2:06.00", walkon: "2:11.00" },
      "1500m": { target: "4:11.00", recruit: "4:21.00", walkon: "4:31.00" },
      "Mile": { target: "4:36.00", recruit: "4:46.00", walkon: "4:56.00" },
      "5000m": { target: "16:05.00", recruit: "16:35.00", walkon: "17:05.00" },
      "10000m": { target: "33:35.00", recruit: "34:35.00", walkon: "35:35.00" },
      "100m Hurdles": { target: "12.85", recruit: "13.25", walkon: "13.65" },
      "400m Hurdles": { target: "56.80", recruit: "58.80", walkon: "60.80" },
      "High Jump": { target: "6'1\"", recruit: "5'11\"", walkon: "5'9\"" },
      "Pole Vault": { target: "14'3\"", recruit: "13'3\"", walkon: "12'3\"" },
      "Long Jump": { target: "21'3\"", recruit: "20'3\"", walkon: "19'3\"" },
      "Triple Jump": { target: "44'6\"", recruit: "42'6\"", walkon: "40'6\"" },
      "Shot Put": { target: "55'0\"", recruit: "50'0\"", walkon: "45'0\"" },
      "Discus": { target: "175'0\"", recruit: "160'0\"", walkon: "145'0\"" },
      "Hammer": { target: "195'0\"", recruit: "175'0\"", walkon: "155'0\"" },
      "Javelin": { target: "175'0\"", recruit: "160'0\"", walkon: "145'0\"" }
    }
  },
  {
    id: "8",
    schoolName: "UCLA",
    division: "D1",
    conference: "Big Ten",
    state: "CA",
    maleStandards: {
      "100m": { target: "10.18", recruit: "10.48", walkon: "10.78" },
      "200m": { target: "20.70", recruit: "21.10", walkon: "21.50" },
      "400m": { target: "46.40", recruit: "47.40", walkon: "48.40" },
      "800m": { target: "1:47.50", recruit: "1:51.50", walkon: "1:55.50" },
      "1500m": { target: "3:44.00", recruit: "3:51.00", walkon: "3:59.00" },
      "Mile": { target: "4:04.00", recruit: "4:14.00", walkon: "4:24.00" },
      "5000m": { target: "14:25.00", recruit: "14:55.00", walkon: "15:25.00" },
      "10000m": { target: "29:35.00", recruit: "30:35.00", walkon: "31:35.00" },
      "110m Hurdles": { target: "13.75", recruit: "14.15", walkon: "14.55" },
      "400m Hurdles": { target: "51.40", recruit: "52.90", walkon: "54.40" },
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
      "100m": { target: "11.45", recruit: "11.75", walkon: "12.05" },
      "200m": { target: "23.40", recruit: "23.90", walkon: "24.40" },
      "400m": { target: "53.20", recruit: "54.70", walkon: "56.20" },
      "800m": { target: "2:05.50", recruit: "2:10.50", walkon: "2:15.50" },
      "1500m": { target: "4:22.00", recruit: "4:32.00", walkon: "4:42.00" },
      "Mile": { target: "4:47.00", recruit: "4:57.00", walkon: "5:07.00" },
      "5000m": { target: "16:35.00", recruit: "17:05.00", walkon: "17:35.00" },
      "10000m": { target: "34:05.00", recruit: "35:05.00", walkon: "36:05.00" },
      "100m Hurdles": { target: "13.25", recruit: "13.65", walkon: "14.05" },
      "400m Hurdles": { target: "58.20", recruit: "60.20", walkon: "62.20" },
      "High Jump": { target: "5'8\"", recruit: "5'6\"", walkon: "5'4\"" },
      "Pole Vault": { target: "13'0\"", recruit: "12'0\"", walkon: "11'0\"" },
      "Long Jump": { target: "20'0\"", recruit: "19'0\"", walkon: "18'0\"" },
      "Triple Jump": { target: "42'0\"", recruit: "40'0\"", walkon: "38'0\"" },
      "Shot Put": { target: "50'0\"", recruit: "45'0\"", walkon: "40'0\"" },
      "Discus": { target: "160'0\"", recruit: "145'0\"", walkon: "130'0\"" },
      "Hammer": { target: "180'0\"", recruit: "160'0\"", walkon: "140'0\"" },
      "Javelin": { target: "160'0\"", recruit: "145'0\"", walkon: "130'0\"" }
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