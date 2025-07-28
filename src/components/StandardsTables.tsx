import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const StandardsTables = () => {
  const mensStandards = [
    { event: "60m", d1Top: "7.32", d1Low: "7.73" },
    { event: "3200m", d1Top: "10:20", d1Low: "10:50" },
    { event: "60mHH", d1Top: "8.31", d1Low: "8.83" },
    { event: "Weight Throw", d1Top: "70'6\"", d1Low: "50'10\"" },
    { event: "Pentathlon", d1Top: "4197", d1Low: "3049" },
    { event: "100m", d1Top: "11.49", d1Low: "11.84" },
    { event: "200m", d1Top: "22.78", d1Low: "23.9" },
    { event: "400m", d1Top: "52.23", d1Low: "57.89" },
    { event: "800m", d1Top: "2:07.54", d1Low: "2:15.30" },
    { event: "1500m", d1Top: "4:12.77", d1Low: "4:42.15" },
    { event: "1600m", d1Top: "4:32.84", d1Low: "5:02.56" },
    { event: "5K XC", d1Top: "15:46.50", d1Low: "19:08.67" },
    { event: "10,000m", d1Top: "33:14.56", d1Low: "43:50.99" },
    { event: "100mH", d1Top: "13.51", d1Low: "14.05" },
    { event: "400mH", d1Top: "59.92", d1Low: "1:01.33" },
    { event: "3000m Steeple", d1Top: "9:49.87", d1Low: "12:39.31" },
    { event: "High Jump", d1Top: "5'10\"", d1Low: "5'3\"" },
    { event: "Pole Vault", d1Top: "14'2\"", d1Low: "12'" },
    { event: "Long Jump", d1Top: "21'1\"", d1Low: "18'6\"" },
    { event: "Triple Jump", d1Top: "43'3\"", d1Low: "39'6\"" },
    { event: "Shot Put", d1Top: "56'", d1Low: "42'5\"" },
    { event: "Discus", d1Top: "176'9\"", d1Low: "132'6\"" },
    { event: "Hammer", d1Top: "208'5\"", d1Low: "143'1\"" },
    { event: "Javelin", d1Top: "173'4\"", d1Low: "115'7\"" },
    { event: "Heptathlon", d1Top: "5748", d1Low: "4470" }
  ];

  const womensStandards = [
    { event: "60m", d1Top: "6.69", d1Low: "6.88" },
    { event: "3200m", d1Top: "8:35", d1Low: "9:02" },
    { event: "60mHH", d1Top: "7.78", d1Low: "8.48" },
    { event: "Weight Throw", d1Top: "72'8\"", d1Low: "42'11\"" },
    { event: "Heptathlon", d1Top: "5758", d1Low: "3896" },
    { event: "100m", d1Top: "10.41", d1Low: "10.8" },
    { event: "200m", d1Top: "20.84", d1Low: "21.49" },
    { event: "400m", d1Top: "46.2", d1Low: "49.11" },
    { event: "800m", d1Top: "1:47.14", d1Low: "1:58.49" },
    { event: "1500m", d1Top: "3:45.75", d1Low: "4:16.77" },
    { event: "1600m", d1Top: "4:05.89", d1Low: "4:27.80" },
    { event: "5K XC", d1Top: "13:58.20", d1Low: "15:52" },
    { event: "10,000m", d1Top: "29:13.12", d1Low: "35:39.84" },
    { event: "110mHH", d1Top: "14.01", d1Low: "15.62" },
    { event: "400mH", d1Top: "50.76", d1Low: "55.29" },
    { event: "3000m Steeple", d1Top: "8:41.24", d1Low: "12:20" },
    { event: "High Jump", d1Top: "7'2\"", d1Low: "6'5\"" },
    { event: "Pole Vault", d1Top: "17'11\"", d1Low: "14'6\"" },
    { event: "Long Jump", d1Top: "25'10\"", d1Low: "22'11\"" },
    { event: "Triple Jump", d1Top: "52'10\"", d1Low: "44'11\"" },
    { event: "Shot Put", d1Top: "66'3\"", d1Low: "52'6\"" },
    { event: "Discus", d1Top: "186'1\"", d1Low: "139'5\"" },
    { event: "Hammer", d1Top: "233'11\"", d1Low: "139'6\"" },
    { event: "Javelin", d1Top: "230'6\"", d1Low: "187'9\"" },
    { event: "Decathlon", d1Top: "7695", d1Low: "5244" }
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 mb-8">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-center">Men's D1 Standards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3 font-semibold">Track and Field Event</th>
                  <th className="text-center py-2 px-3 font-semibold">D1 (Top)</th>
                  <th className="text-center py-2 px-3 font-semibold">D1 (Low)</th>
                </tr>
              </thead>
              <tbody>
                {mensStandards.map((standard, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-2 px-3">{standard.event}</td>
                    <td className="text-center py-2 px-3">{standard.d1Top}</td>
                    <td className="text-center py-2 px-3">{standard.d1Low}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="text-center">Women's D1 Standards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3 font-semibold">Track & Field Event</th>
                  <th className="text-center py-2 px-3 font-semibold">D1 (Top)</th>
                  <th className="text-center py-2 px-3 font-semibold">D1 (Low)</th>
                </tr>
              </thead>
              <tbody>
                {womensStandards.map((standard, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-2 px-3">{standard.event}</td>
                    <td className="text-center py-2 px-3">{standard.d1Top}</td>
                    <td className="text-center py-2 px-3">{standard.d1Low}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};