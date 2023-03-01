/* Exercise: Declaring Variables and Objects
- Open a code editor such as VS Code or Programiz Javascript Compiler
- Declare a variable x. Assign it a value which is the remainder from 17 divided by 3.
- Declare a variable y. Assign it a string value of ‘I am a Stackie'.
- Split y by the space in between the words. Assign the resulting array to a new variable z.
- Declare an object person. Give it 3 properties: firstName, age and eyeColor.
- For the firstName property, assign it the value of your StackUp username. However, you must use the z variable for this.
- For the age property, assign it the value of x multiplied by 10.
- For the eyeColor property, assign it the string value of ‘brown’.
- Finally, log in your console the value of the person’s age and the value of the person’s first name. Ensure that these two values are separated by a space.
- If you have successfully followed the instructions, your output should read '20 Stackie'.
*/

const x = 17%3
const y = "I am a Stackie"
const z = y.split(" ")
const person = {
    firstName: z[3],
    age:    x*10,
    eyeColor: 'brown'
}
console.log(person.age + " " + person.firstName)


