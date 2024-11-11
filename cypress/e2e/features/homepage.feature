Feature: Visit Homepage

    As user I want to visit homepage

Scenario: Visit homepage
Given the user visit homepage
When the user select answer "Text direction"
And the user select answer "Background color"
And the user select answer "Img"
And the user select answer "Div"
And the user select answer "Table"
And the user select answer "Form"
And the user select answer "Meta"
And the user select answer "Link"
And the user select answer "Frame"
And the user click on submit answers
Then the user see score "You got 6 correct out of 10, or 60%"
And the user see score letter "C"
Then the user see for question "1" correction "Wrong"
Then the user see for question "1" correction "The correct answer is Marquee"
Then the user see for question "2" correction "Wrong"
Then the user see for question "2" correction "The correct answer is Bgcolor"
Then the user see for question "3" correction "Correct"
Then the user see for question "4" correction "Wrong"
Then the user see for question "4" correction "The correct answer is Blink"
Then the user see for question "5" correction "Correct"
Then the user see for question "6" correction "Correct"
Then the user see for question "7" correction "Correct"
Then the user see for question "8" correction "Correct"
Then the user see for question "9" correction "Wrong"
Then the user see for question "9" correction "The correct answer is A"
Then the user see for question "10" correction "Correct"
