package Main;

import java.text.DecimalFormat;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
    boolean test = isLove(2, 2);

    int findAverage1 = findAverage(new int[] { 1, 3, 5, 7 });

    double decimalPlaces = TwoDecimalPlaces(5.5589);

    Integer find = find(new int[] { 1, 2, 3, 4, 6, 7, 8 });

    String reverse = solution("world");

    System.out.println(findSmallestInt(new int[] { 78, 56, 232, 12, 11, 43 }));

  }

  // Opposites Attract
  public static boolean isLove(final int flower1, final int flower2) {
    return flower1 % 2 != flower2 % 2;
  }

  // Grasshopper - Array Mean
  public static int findAverage(int[] nums) {

    // int sum = Arrays.stream(nums)
    // .sum();
    // return sum / nums.length;

    return (int) Arrays.stream(nums)
        .average()
        .orElse(0);
  }

  // Formatting decimal places#0
  public static double TwoDecimalPlaces(double number) {

    DecimalFormat formatter = new DecimalFormat("0.00");

    return Double.parseDouble(formatter.format(number));
  }

  // Find the first non-consecutive number
  static Integer find(final int[] array) {

    for (int i = 1; i < array.length; i++) {
      // System.out.println(i);
      if (array[i] - array[i - 1] != 1) {
        return array[i];
      }
    }

    return null;
  }

  // Reversed Strings
  public static String solution(String str) {

    // Your code here...
    String result = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      result += str.charAt(i);
    }
    return result;

  }

  // Find the smallest integer in the array
  public static int findSmallestInt(int[] args) {

    Arrays.sort(args);

    System.out.println(args);

    return args[0];
  }

}
