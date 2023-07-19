# [CREDIT-CARD-VALIDATOR](https://ayush110404.github.io/CREDIT-CARD-VALIDATOR/)
Developed using **Luhn's Algorithm**

Used concepts of Arrays and Loops while learning JS.

## LUHN'S ALGORITHM
The Luhn Algorithm helps to determine the accuracy of identification numbers in major credit cards and number sequences, flagging any error in the numbers provided.  
## HOW IT WORKS
This will be explained with a Visa number: 4003600000000014

1. Multiply the digits from the back, starting from the second-to-last. Skip one number, double the next until you’re now on the first number. 

       4003600000000014

       1 x 2 + 0 x 2 + 0 x 2 + 0 x 2 + 0 x 2 + 6 x 2 + 0 x 2 + 4 x 2

2. Now, we have product digits for all doubled digits, e.g. the product digit of 1 × 2 is 2. However,  the product digit of 6 × 2 will be 1 + 2 (derived from its product '12') because 12 is higher than 10. Add all the derived product digits together. 

       = 2 + 0 + 0 + 0 + 0 + 1 + 2 + 0 + 8 = 13

3. The sum derived should be added to the sum of the digits that weren’t doubled. 

       13 + 4 + 0 + 0 + 0 + 0 + 0 + 3 + 0 = 20

4. If the last digit in the total is 0, then the set of numbers is valid.

The last digit in 20 is 0. So, the Visa number is correct.

## PREVIEW:

![Screenshot (41)](https://github.com/ayush110404/CREDIT-CARD-VALIDATOR/assets/114819135/b65d78bb-e440-47aa-bf39-0e0ec0cf60ff)
![Screenshot (40)](https://github.com/ayush110404/CREDIT-CARD-VALIDATOR/assets/114819135/592e17f2-f9a4-4cfe-bdf8-6e4d0d1d7a70)

