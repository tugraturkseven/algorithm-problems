/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 */

import java.util.Stack;

public class validParentheses {
    public static void main(String[] args) {
        System.out.println(isValidParantheses("(){}}{"));
    }

    public static boolean isValidParantheses(String s){

        if(s.length() % 2 == 0){
            return false;
        }

        Stack<String> stack = new Stack<String>();
        String currLastItem = "";

        for (int i = 0; i <s.length() ; i++) {
            String currItem = String.valueOf(s.charAt(i));

            if(!stack.empty()) {
                currLastItem = stack.lastElement();
            }

           if(currItem.equals("(") || currItem.equals("{") || currItem.equals("[")){
               stack.push(currItem);
           }else if(currLastItem.equals("(") && currItem.equals(")")){
               stack.pop();
           }else if(currLastItem.equals("[") && currItem.equals("]")){
               stack.pop();
           }else if(currLastItem.equals("{") && currItem.equals("}")){
               stack.pop();
           }
        }

        return stack.empty();
    }

}
