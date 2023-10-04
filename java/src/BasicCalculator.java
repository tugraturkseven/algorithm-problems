import java.util.Scanner;

public class BasicCalculator {
    public static void main(String[] args) {
        calculate();
    }

    public static void calculate(){
        Scanner sc = new Scanner(System.in);
        System.out.println("What is gonna happen?");
        System.out.println("1-Add 2-Subtract 3-Multiply 4-Divide");
        int userSelect = sc.nextInt();
        System.out.println("Enter the first number");
        Double firstNumber = sc.nextDouble();
        System.out.println("Enter the second number");
        Double secondNumber = sc.nextDouble();

        switch (userSelect) {
            case 1 -> System.out.println("The sum is: " + (firstNumber + secondNumber));
            case 2 -> System.out.println("The result is: " + (firstNumber - secondNumber));
            case 3 -> System.out.println("The result is: " + (firstNumber * secondNumber));
            case 4 -> System.out.println("The result is: " + (firstNumber / secondNumber));
        }
    }
}
