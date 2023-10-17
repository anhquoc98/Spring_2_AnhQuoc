public class Marth274 {
    public static void main(String[] args) {
        String time1 = "12:34:56";
        String time2 = "01:23:45";

        String totalTime = addTimeStrings(time1, time2);
        System.out.println("Tổng của hai thời gian: " + totalTime);
    }
    public static String addTimeStrings(String time1, String time2) {
        String[] parts1 = time1.split(":");
        String[] parts2 = time2.split(":");

        int hours1 = Integer.parseInt(parts1[0]);
        int minutes1 = Integer.parseInt(parts1[1]);
        int seconds1 = Integer.parseInt(parts1[2]);
        int hours2 = Integer.parseInt(parts2[0]);
        int minutes2 = Integer.parseInt(parts2[1]);
        int seconds2 = Integer.parseInt(parts2[2]);
        int totalHours = hours1 + hours2;
        int totalMinutes = minutes1 + minutes2;
        int totalSeconds = seconds1 + seconds2;
        if (totalSeconds >= 60) {
            totalMinutes += totalSeconds / 60;
            totalSeconds %= 60;
        }
        if (totalMinutes >= 60) {
            totalHours += totalMinutes / 60;
            totalMinutes %= 60;
        }
        return String.format("%02d:%02d:%02d", totalHours, totalMinutes, totalSeconds);
    }
}
