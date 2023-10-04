import java.util.Scanner;

public class SumOfTwo {
    public static void main(String[] args) {
        handleSubmission();
    }
    public static void handleSubmission(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number:");
        int firstNumber = sc.nextInt();
        System.out.println("Enter second number:");
        int secNumber = sc.nextInt();
        int sum = firstNumber + secNumber;

        System.out.println("The result is: " + sum);
    }
}
