package Main;

import java.text.DecimalFormat;
import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
    boolean test = isLove(2, 2);

    int findAverage1 = findAverage(new int[] { 1, 3, 5, 7 });

    double decimalPlaces = TwoDecimalPlaces(5.5589);

    System.out.println(decimalPlaces);

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
}
