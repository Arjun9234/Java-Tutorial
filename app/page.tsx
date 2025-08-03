"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Download,
  FileText,
  Code,
  Star,
  CheckCircle,
  Circle,
  Clock,
  Award,
  Target,
  BookMarked,
  Lightbulb,
} from "lucide-react"
import { generateComprehensivePDF } from "./utils/comprehensive-pdf-generator"

const sections = [
  {
    id: 1,
    title: "Introduction to Java & JVM",
    description: "History, features, JVM architecture, and setting up the development environment",
    duration: "45 min",
    topics: [
      {
        name: "What is Java?",
        answer:
          "Java is a high-level, object-oriented programming language developed by James Gosling at Sun Microsystems in 1995. It's platform-independent, secure, and follows the 'Write Once, Run Anywhere' (WORA) principle.",
      },
      {
        name: "Key Java Features",
        answer:
          "Platform independence, Object-oriented, Secure, Robust, Multithreaded, High performance (JIT), Distributed, Dynamic.",
      },
      {
        name: "JVM Architecture Deep Dive",
        answer:
          "The JVM (Java Virtual Machine) is a specification for a computer that can execute compiled Java bytecode. It consists of the Class Loader Subsystem, Runtime Data Areas (Method Area, Heap Area, Stack Area, PC Registers, Native Method Stacks), and the Execution Engine (Interpreter, JIT Compiler, Garbage Collector).",
      },
      {
        name: "Setting up JDK & PATH Variables",
        answer:
          "Download the JDK from Oracle or OpenJDK. Install it, then set the JAVA_HOME environment variable to the JDK installation directory. Finally, add the `%JAVA_HOME%\\bin` directory to your system's PATH variable to run Java commands from any directory.",
      },
      {
        name: "Overview of Popular IDEs",
        answer:
          "IntelliJ IDEA (most popular for professional development), Eclipse (free and powerful with a large community), NetBeans (Oracle's official IDE, user-friendly), and VS Code (lightweight and highly customizable with extensions).",
      },
      {
        name: "Understanding the Compilation Process",
        answer:
          "The process starts with a Java source file (.java). The `javac` compiler translates this into Java bytecode (.class file). This bytecode is then interpreted by the JVM and executed on the specific operating system and hardware.",
      },
    ],
    exercises: [
      {
        question: "What does JVM stand for and why is it the core of Java's platform independence?",
        answer:
          "JVM stands for Java Virtual Machine. It is crucial for platform independence because it acts as an abstraction layer between the Java program (bytecode) and the underlying hardware. The JVM translates the bytecode into machine-specific instructions, allowing the same compiled code to run on different platforms.",
      },
      {
        question: "Explain the difference between JDK, JRE, and JVM.",
        answer:
          "**JDK (Java Development Kit)**: A full development environment for building applications. It includes the JRE and all development tools like the `javac` compiler, debugger, etc. **JRE (Java Runtime Environment)**: Provides the necessary components to run a Java application, including the JVM and standard libraries. It's a subset of the JDK. **JVM**: The core component that executes the bytecode. It is part of the JRE.",
      },
      {
        question: "Describe the function of the JIT (Just-In-Time) compiler within the JVM.",
        answer:
          "The JIT compiler is part of the JVM's Execution Engine. It dynamically compiles frequently executed bytecode into native machine code at runtime. This process significantly improves performance by reducing the overhead of interpreting the bytecode repeatedly.",
      },
      {
        question: "Create a simple `HelloWorld.java` file and describe how you would compile and run it.",
        answer:
          'File content: `public class HelloWorld { public static void main(String[] args) { System.out.println("Hello World"); } }` To compile: `javac HelloWorld.java`. This creates `HelloWorld.class`. To run: `java HelloWorld`.',
      },
      {
        question: "List and briefly describe the different memory areas in the JVM's Runtime Data Areas.",
        answer:
          "**Method Area**: Stores class structures. **Heap Area**: Stores all objects and their instance variables. **Stack Area**: Stores method calls and local variables. **PC Registers**: Holds the address of the current instruction. **Native Method Stacks**: Stores information for native methods (non-Java code).",
      },
    ],
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Basic Syntax & Your First Program",
    description: "Your first Java program, syntax rules, and code structure",
    duration: "50 min",
    topics: [
      {
        name: "HelloWorld Program",
        answer:
          'public class HelloWorld { public static void main(String[] args) { System.out.println("Hello World"); } }',
      },
      {
        name: "Java Syntax Rules",
        answer:
          "Java is case-sensitive. Every statement must end with a semicolon. Code blocks are enclosed in curly braces (`{}`). Class names should start with an uppercase letter, and method/variable names with a lowercase letter.",
      },
      { name: "Comments", answer: "There are three types: `//` for single-line comments, `/* ... */` for multi-line comments, and `/** ... */` for Javadoc comments used for documentation." },
      {
        name: "Code Structure",
        answer:
          "A typical Java file structure is: `package` declaration (optional) -> `import` statements (optional) -> `class` declaration -> class `fields` -> class `methods`.",
      },
      {
        name: "Understanding the `main` Method",
        answer:
          "The `public static void main(String[] args)` is the entry point for every Java application. `public` makes it accessible, `static` means it can be called without an object, `void` means it doesn't return a value, and `String[] args` is an array to receive command-line arguments.",
      },
    ],
    exercises: [
      {
        question: "Write a program that prints your name and age on separate lines.",
        answer:
          'public class PersonalInfo { public static void main(String[] args) { System.out.println("Name: Jane Doe"); System.out.println("Age: 30"); } }',
      },
      {
        question: "What's the difference between `System.out.print()` and `System.out.println()`?",
        answer:
          "`System.out.print()` outputs text to the console without a newline character at the end, so the next output will be on the same line. `System.out.println()` adds a newline after the output, so the next output will start on a new line.",
      },
      {
        question: "Why is the main method declared as `static`?",
        answer:
          "The `main` method must be `static` because the JVM calls it to start the program before any objects of the class are created. If it wasn't static, the JVM wouldn't know which object's `main` method to call.",
      },
      {
        question: "Create a program with an example of each type of comment.",
        answer:
          'public class CommentsExample { // This is a single-line comment. /* This is a multi-line comment that can span across multiple lines. */ /** * This is a Javadoc comment. * It is used for generating documentation. */ public static void main(String[] args) { System.out.println("Comments Example"); } }',
      },
      {
        question: "What happens if a public class name does not match the filename in Java?",
        answer:
          "A compilation error will occur. The Java compiler requires that a public class's name must be identical to the name of the file it resides in, including case. For example, a public class named `MyProgram` must be in a file named `MyProgram.java`.",
      },
    ],
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Variables & Data Types",
    description: "Primitive types, reference types, type casting, and memory management",
    duration: "60 min",
    topics: [
      { name: "Primitive Data Types", answer: "Java has eight primitive data types: `byte`, `short`, `int`, `long` (for integers); `float`, `double` (for floating-point numbers); `boolean` (for true/false); and `char` (for characters)." },
      { name: "Reference Types", answer: "Reference types refer to objects. They include classes, interfaces, and arrays. Unlike primitive types, they are not stored directly in the variable but instead, the variable holds a reference (memory address) to the object in the heap." },
      { name: "Type Casting", answer: "The process of converting one data type to another. It can be `implicit` (widening, automatic, e.g., `int` to `long`) or `explicit` (narrowing, manual, e.g., `double` to `int` which may result in data loss)." },
      { name: "Variable Scope", answer: "Determines the visibility and lifetime of a variable. There are four types of scope: `local` (within a block), `instance` (within a class, for each object), `static` (within a class, shared by all objects), and `parameter` (in a method signature)." },
      { name: "Memory Management", answer: "Java uses automatic garbage collection to manage memory. The JVM's garbage collector automatically reclaims memory that is no longer being used by objects, freeing up the developer from manual memory management." },
    ],
    exercises: [
      {
        question: "Declare and initialize variables of all primitive data types.",
        answer:
          "byte b = 10; short s = 20; int i = 30; long l = 40L; float f = 50.5f; double d = 60.5; boolean bool = true; char c = 'A';",
      },
      {
        question: "Explain the difference between `int` and `Integer`.",
        answer:
          "`int` is a primitive data type that stores a 32-bit signed integer value directly. `Integer` is a wrapper class from the `java.lang` package. It is an object that 'wraps' the primitive `int` value. `Integer` objects can be `null` and are used in collections, while `int` cannot be `null`.",
      },
      {
        question: "Provide an example of both implicit and explicit type casting.",
        answer:
          "Implicit (Widening): `int myInt = 10; double myDouble = myInt; // Automatic casting` Explicit (Narrowing): `double myDouble = 10.75; int myInt = (int) myDouble; // Manual casting, myInt will be 10`",
      },
      { question: "What is the scope of a local variable and an instance variable?", answer: "A local variable's scope is restricted to the block of code (e.g., a method) where it is declared. An instance variable's scope is the entire class, and its value is specific to each object instance." },
      {
        question: "How does Java handle memory management?",
        answer: "Java uses a process called Garbage Collection. The JVM automatically identifies objects that are no longer referenced by any part of the program and reclaims the memory they occupy. This prevents memory leaks and simplifies development.",
      },
    ],
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Operators & Expressions",
    description: "Arithmetic, logical, relational operators and expression evaluation",
    duration: "55 min",
    topics: [
      { name: "Arithmetic Operators", answer: "Perform mathematical operations: `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulus)." },
      { name: "Logical Operators", answer: "Used with boolean values: `&&` (logical AND), `||` (logical OR), `!` (logical NOT)." },
      { name: "Relational Operators", answer: "Compare two values and return a boolean: `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<`=` (less than or equal to)." },
      { name: "Bitwise Operators", answer: "Operate on individual bits: `&` (bitwise AND), `|` (bitwise OR), `^` (bitwise XOR), `~` (bitwise complement), `<<` (left shift), `>>` (right shift), `>>>` (unsigned right shift)." },
      {
        name: "Operator Precedence",
        answer: "The order in which operators in an expression are evaluated. For example, `*` and `/` have higher precedence than `+` and `-`. Parentheses can be used to override default precedence.",
      },
      {
        name: "Assignment Operators",
        answer:
          "Used to assign values to variables: `=` (simple assignment), `+=`, `-=`, `*=`, `/=`, `%=`, etc. (compound assignment). For example, `x += 5` is equivalent to `x = x + 5`.",
      },
    ],
    exercises: [
      {
        question: "Write an expression to calculate the area of a rectangle and the perimeter.",
        answer: "int length = 5; int width = 10; int area = length * width; int perimeter = 2 * (length + width);",
      },
      {
        question: "Explain the difference between `==` and `.equals()`.",
        answer:
          "`==` is a relational operator that compares the memory addresses (references) of two objects. `.equals()` is a method that compares the content of two objects. For primitive types, `==` compares values. For objects, `==` checks if they are the exact same object in memory.",
      },
      { question: "What is the result of `10 % 3` and `10 / 3` in Java?", answer: "`10 % 3` returns `1` (the remainder). `10 / 3` returns `3` (integer division). To get a floating-point result, at least one operand must be a floating-point type, e.g., `10.0 / 3`.", },
      {
        question: "Write a program to check if a number is even or odd using the modulus operator.",
        answer:
          'int num = 10; if (num % 2 == 0) { System.out.println("Even"); } else { System.out.println("Odd"); }',
      },
      {
        question: "What is operator precedence and why is it important?",
        answer:
          "Operator precedence is the set of rules that determines the order of evaluation in an expression. It is important to ensure that complex expressions are evaluated correctly and predictably, preventing logical errors. For example, `2 + 3 * 4` evaluates to `14` because multiplication has higher precedence than addition.",
      },
    ],
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Control Flow Statements",
    description: "If-else, switch statements, and conditional logic implementation",
    duration: "65 min",
    topics: [
      { name: "If-Else Statements", answer: "The `if-else` statement is used to execute a block of code based on a condition. The `if` block executes if the condition is `true`, and the `else` block executes if the condition is `false`. You can also use `else if` for multiple conditions." },
      { name: "Switch Statements", answer: "The `switch` statement provides a more efficient way to test a variable for equality against a list of values. It is often cleaner and more readable than a long chain of `if-else if` statements for specific cases." },
      { name: "Ternary Operator", answer: "A shorthand for a simple `if-else` statement. Its syntax is `condition ? value_if_true : value_if_false`. It is a concise way to assign a value to a variable based on a condition." },
      { name: "Nested Conditions", answer: "Placing `if-else` or `switch` statements inside another `if-else` or `switch` statement. This is used for more complex decision-making logic but should be used carefully to avoid code that is difficult to read and maintain." },
      {
        name: "Best Practices",
        answer: "Avoid deeply nested conditions (more than 3-4 levels deep). Use meaningful variable names. Use `switch` statements for simple, specific value checks. Use `break` and `default` cases in `switch` statements for robustness.",
      },
    ],
    exercises: [
      {
        question: "Write a program to find the largest of three numbers using `if-else if`.",
        answer:
          "int a = 10, b = 20, c = 30; if (a >= b && a >= c) { System.out.println(a); } else if (b >= a && b >= c) { System.out.println(b); } else { System.out.println(c); }",
      },
      {
        question: "Explain the use of `break` in a `switch` statement.",
        answer:
          "The `break` statement is used to exit the `switch` statement after a matching `case` block has been executed. Without it, the program will continue to execute the code in the next `case` block (fall-through), which is usually not the intended behavior.",
      },
      {
        question: "What is the difference between `if-else` and `switch` statements?",
        answer:
          "`if-else` statements can evaluate any boolean expression, allowing for complex conditions. `switch` statements are limited to checking a single variable for equality against a set of constant values (e.g., integers, strings, enums). The `switch` statement can be more performant and readable for these specific checks.",
      },
      {
        question: "Write a program to determine if a character is a vowel or consonant using a `switch` statement.",
        answer:
          'char ch = \'a\'; switch (ch) { case \'a\': case \'e\': case \'i\': case \'o\': case \'u\': System.out.println("Vowel"); break; default: System.out.println("Consonant"); }',
      },
      {
        question: "Rewrite the following `if-else` statement using a ternary operator: `if (x > 10) { y = 5; } else { y = 2; }`",
        answer:
          "The equivalent ternary operator expression is: `int y = (x > 10) ? 5 : 2;`",
      },
    ],
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Loops & Iterations",
    description: "For, while, do-while loops and advanced iteration techniques",
    duration: "70 min",
    topics: [
      { name: "For Loops", answer: "The `for` loop is used to execute a block of code a specific number of times. Its syntax is `for (initialization; condition; increment) { // code }`." },
      { name: "While Loops", answer: "The `while` loop is used when the number of iterations is not known beforehand. It continues to execute as long as its condition remains `true`. The condition is checked before each iteration." },
      { name: "Do-While Loops", answer: "Similar to a `while` loop, but the condition is checked at the end of the loop. This guarantees that the loop body will execute at least once, even if the condition is initially `false`." },
      { name: "Enhanced For Loop", answer: "A simplified `for` loop for iterating over arrays or collections. Its syntax is `for (type variable : array) { // code }`. It eliminates the need for an index variable." },
      { name: "Loop Control Statements", answer: "Java provides `break` to exit a loop completely and `continue` to skip the current iteration and proceed to the next one." },
    ],
    exercises: [
      {
        question: "Write a program to print numbers from 1 to 10 using a `for` loop.",
        answer: "for (int i = 1; i <= 10; i++) { System.out.println(i); }",
      },
      {
        question: "Explain the difference between `while` and `do-while` loops.",
        answer:
          "The main difference is the order of the condition check. A `while` loop checks the condition before executing the loop body, so the body may never run. A `do-while` loop executes the body at least once, and then checks the condition at the end of the iteration.",
      },
      {
        question: "What is the use of the `continue` statement?",
        answer: "The `continue` statement is used inside a loop to skip the rest of the code in the current iteration and immediately jump to the next iteration of the loop.",
      },
      {
        question: "Write a program to calculate the sum of all elements in an integer array using an enhanced `for` loop.",
        answer: "int[] arr = {1, 2, 3, 4, 5}; int sum = 0; for (int num : arr) { sum += num; } System.out.println(sum);",
      },
      { question: "How can you create an infinite loop and how can you break out of it?", answer: "An infinite loop can be created with `while (true) { ... }`. You can break out of it using a `break` statement inside a conditional block, for example, `if (condition) { break; }`." },
    ],
    difficulty: "Beginner",
  },
  {
    id: 7,
    title: "Methods & Functions",
    description: "Method declaration, parameters, return types, and method overloading",
    duration: "75 min",
    topics: [
      { name: "Method Declaration", answer: "A method is a block of code that performs a specific task. Its declaration includes an access specifier (e.g., `public`), an optional modifier (`static`), a return type, a name, and a list of parameters in parentheses." },
      { name: "Parameters & Arguments", answer: "Parameters are the variables listed in the method signature. Arguments are the actual values passed to the method when it is called. Java uses call-by-value, where a copy of the argument is passed to the method." },
      { name: "Return Types", answer: "The data type of the value that a method returns. If a method does not return a value, its return type is `void`." },
      { name: "Method Overloading", answer: "The ability to define multiple methods with the same name in the same class, but with different parameters (either in number, type, or order). The compiler decides which method to call based on the arguments provided." },
      { name: "Recursion", answer: "A technique where a method calls itself to solve a problem. It is often used for problems that can be broken down into smaller, self-similar subproblems, such as factorial or Fibonacci sequences. It requires a base case to terminate the calls." },
    ],
    exercises: [
      {
        question: "Write a recursive method to calculate the factorial of a number.",
        answer: "public static int factorial(int n) { if (n == 0) { return 1; } return n * factorial(n - 1); }",
      },
      {
        question: "Explain the difference between parameters and arguments.",
        answer:
          "Parameters are the variables declared in the method signature. Arguments are the actual values or expressions passed into the method when it is invoked. For example, in `public void myMethod(int x)`, `x` is a parameter. When you call it with `myMethod(5)`, `5` is the argument.",
      },
      { question: "What is the purpose of the `return` statement?", answer: "The `return` statement is used to exit a method and return a value to the caller. It can also be used in `void` methods to simply terminate the method's execution." },
      {
        question: "Write a program to demonstrate method overloading with an `add` method.",
        answer:
          "public class Overload { public int add(int a, int b) { return a + b; } public double add(double a, double b) { return a + b; } public int add(int a, int b, int c) { return a + b + c; } }",
      },
      {
        question: "What are the advantages of using recursion?",
        answer:
          "Recursion can lead to elegant and readable code for certain problems, especially those that are naturally recursive. It can simplify the logic and reduce the amount of code needed compared to an iterative approach. However, it can also lead to `StackOverflowError` if not handled correctly.",
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "Object-Oriented Programming (OOP) - Core Concepts",
    description: "Classes, objects, constructors, and fundamental OOP principles",
    duration: "90 min",
    topics: [
      { name: "Classes & Objects", answer: "A `class` is a blueprint or a template for creating objects. An `object` is an instance of a class, with its own unique state (instance variables) and behavior (methods)." },
      { name: "Constructors", answer: "A special type of method that is automatically called when an object is created using the `new` keyword. It is used to initialize the object's state. A class can have multiple constructors (overloaded)." },
      { name: "Instance Variables", answer: "Variables declared within a class but outside of any method. They are specific to each object instance, and each object has its own copy." },
      { name: "Methods", answer: "Functions defined within a class that define the behavior of the objects of that class. They can access and modify the object's state." },
      { name: "The `this` Keyword", answer: "A reference variable that refers to the current object. It is often used to differentiate between instance variables and local variables that have the same name, or to call other constructors from within a constructor (`this(...)`)." },
    ],
    exercises: [
      {
        question: "Create a class called `Dog` with private attributes `name` and `breed` and a constructor to initialize them.",
        answer:
          "public class Dog { private String name; private String breed; public Dog(String name, String breed) { this.name = name; this.breed = breed; } }",
      },
      { question: "Explain the purpose of a constructor and the difference between a default and a parameterized constructor.", answer: "The purpose of a constructor is to initialize an object's state when it is created. A `default constructor` is one with no parameters, often provided automatically by the compiler if no other constructor is defined. A `parameterized constructor` accepts arguments to set the initial values of the object's attributes." },
      {
        question: "What is the difference between a class and an object?",
        answer: "A class is a conceptual blueprint, a definition of a data type. An object is a concrete instance of that class. For example, `Car` is a class, while `myCar` (a specific car) is an object.",
      },
      {
        question: "Write a program to create an object of the `Dog` class and print its attributes using a `getName()` method.",
        answer:
          'public class Dog { private String name; private String breed; public Dog(String name, String breed) { this.name = name; this.breed = breed; } public String getName() { return this.name; } public static void main(String[] args) { Dog myDog = new Dog("Buddy", "Golden Retriever"); System.out.println("My dog\'s name is " + myDog.getName()); } }',
      },
      {
        question: "What is the significance of the `this` keyword?",
        answer: "The `this` keyword is used to refer to the current object within a method or constructor. It's essential for resolving ambiguity when a parameter has the same name as an instance variable, for example, `this.name = name;`",
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 9,
    title: "Inheritance & Polymorphism",
    description: "Extending classes, method overriding, and polymorphic behavior",
    duration: "85 min",
    topics: [
      { name: "Inheritance Basics", answer: "Inheritance is an OOP mechanism where one class (`child` or `subclass`) inherits properties and methods from another class (`parent` or `superclass`). It promotes code reuse and establishes an 'is-a' relationship." },
      { name: "The `super` Keyword", answer: "The `super` keyword is used to refer to the parent class. It is used to call the parent class's constructor (`super(...)`) or to access a method or variable from the parent class that has been overridden or shadowed in the child class." },
      {
        name: "Method Overriding",
        answer: "A subclass provides a specific implementation for a method that is already defined in its superclass. This is a key part of polymorphism. The `@Override` annotation is a best practice to ensure the method is correctly overriding a parent method.",
      },
      { name: "Polymorphism", answer: "Meaning 'many forms', polymorphism is the ability of an object to take on many forms. In Java, this is primarily seen through method overriding and interface implementation, where a single reference variable can refer to different types of objects, and the correct method is called at runtime." },
      { name: "Dynamic Method Dispatch", answer: "Also known as runtime polymorphism. It is the mechanism by which a call to an overridden method is resolved at runtime rather than at compile time. The JVM determines which version of the method to call based on the actual object type, not the reference type." },
    ],
    exercises: [
      {
        question: "Create a class `Animal` and a subclass `Dog` that inherits from `Animal` and overrides a `makeSound()` method.",
        answer:
          'public class Animal { public void makeSound() { System.out.println("The animal makes a sound"); } } public class Dog extends Animal { @Override public void makeSound() { System.out.println("Woof! Woof!"); } }',
      },
      { question: "Explain the use of the `super` keyword.", answer: "The `super` keyword is used to access members of the parent class, such as calling the parent's constructor with `super(args)` or a parent's method with `super.methodName()`." },
      {
        question: "What is the `@Override` annotation and why is it important?",
        answer: "The `@Override` annotation is a marker that tells the compiler that the method is intended to override a method in a parent class. It is important because it helps prevent errors, as the compiler will generate an error if the method does not correctly override a parent method.",
      },
      {
        question: "Write a program to demonstrate polymorphism using the `Animal` and `Dog` classes.",
        answer:
          'public class Main { public static void main(String[] args) { Animal myAnimal = new Dog(); // The reference type is Animal, but the object type is Dog. myAnimal.makeSound(); // Calls Dog\'s makeSound method at runtime. } }',
      },
      {
        question: "What is the difference between method overloading and method overriding?",
        answer: "Overloading happens in the same class and involves having multiple methods with the same name but different parameters. Overriding happens in a subclass and involves providing a new implementation for a method that already exists in the parent class.",
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 10,
    title: "Encapsulation & Abstraction",
    description: "Access modifiers, getters/setters, abstract classes and interfaces",
    duration: "80 min",
    topics: [
      { name: "Access Modifiers", answer: "Keywords that set the accessibility of classes, fields, and methods. Java has four: `public` (accessible everywhere), `protected` (accessible within the package and by subclasses), `default` (package-private, accessible only within the package), and `private` (accessible only within the class)." },
      { name: "Encapsulation", answer: "The process of bundling data (variables) and methods that operate on that data into a single unit (a class). It involves hiding the internal state of an object from the outside world and exposing only a public interface. This is typically achieved using `private` fields and `public` getter and setter methods." },
      { name: "Getters & Setters", answer: "Public methods used to access (`getter`) and modify (`setter`) the values of private instance variables. This controlled access allows for validation and ensures the integrity of the object's state." },
      { name: "Abstraction", answer: "The concept of hiding complex implementation details and showing only the essential features of an object. In Java, this is achieved using `abstract` classes and `interfaces`." },
      { name: "Abstract Classes & Methods", answer: "An `abstract` class cannot be instantiated. It can contain both abstract methods (methods with no body) and concrete methods. A class that extends an abstract class must provide an implementation for all of its abstract methods unless it is also declared as abstract." },
      { name: "Interfaces", answer: "A blueprint of a class. It can only contain abstract methods and constants (before Java 8). A class can implement multiple interfaces, defining a contract for the class to follow. Since Java 8, interfaces can also have `default` and `static` methods." },
    ],
    exercises: [
      {
        question: "Create a class `Person` with a private `name` and a public `age`, and provide a getter for the `name`.",
        answer:
          "public class Person { private String name; public int age; public Person(String name, int age) { this.name = name; this.age = age; } public String getName() { return name; } }",
      },
      { question: "Explain the purpose of encapsulation.", answer: "Encapsulation protects an object's internal state from being directly accessed and modified by external code. It provides data integrity, reduces complexity, and makes the code more secure and maintainable." },
      {
        question: "What is the difference between an abstract class and an interface?",
        answer: "An `abstract` class can have constructors, instance variables, and both abstract and concrete methods. A class can only extend one abstract class. An `interface` can only have abstract methods (pre-Java 8) and constants. A class can implement multiple interfaces. This is the key difference.",
      },
      {
        question: "Write an abstract class `Shape` with an abstract method `area()` and a concrete method `sayHello()`.",
        answer:
          'public abstract class Shape { public abstract double area(); public void sayHello() { System.out.println("Hello from Shape!"); } }',
      },
      {
        question: "Why is data hiding important in OOP?",
        answer: "Data hiding, a core part of encapsulation, is important because it prevents unintended modification of an object's state. It allows developers to change the internal implementation of a class without affecting the code that uses that class, as long as the public interface (getters/setters) remains the same.",
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 11,
    title: "Exception Handling",
    description: "Try-catch blocks, custom exceptions, and error handling strategies",
    duration: "75 min",
    topics: [
      { name: "Exception Hierarchy", answer: "Exceptions are objects that represent errors or abnormal conditions. The root of the hierarchy is `Throwable`, which has two subclasses: `Error` (severe, unrecoverable problems) and `Exception` (recoverable problems that can be handled)." },
      { name: "Try-Catch-Finally", answer: "The `try` block contains code that might throw an exception. The `catch` block handles the exception if it occurs. The `finally` block is optional and always executes, regardless of whether an exception was thrown or caught. It is typically used for cleanup code, like closing resources." },
      {
        name: "Checked vs. Unchecked Exceptions",
        answer:
          "**Checked Exceptions** are those that the compiler forces you to handle (e.g., `IOException`). They are subclasses of `Exception` but not `RuntimeException`. **Unchecked Exceptions** (e.g., `NullPointerException`) are not required to be handled. They are subclasses of `RuntimeException`.",
      },
      { name: "Throw & Throws", answer: "`throw` is used to explicitly throw an exception object. `throws` is used in a method signature to declare that the method might throw one or more specified types of checked exceptions, forcing the caller to handle them." },
      { name: "Custom Exceptions", answer: "You can create your own exception classes by extending `Exception` (for checked) or `RuntimeException` (for unchecked) to provide more specific and meaningful error handling for your application." },
    ],
    exercises: [
      {
        question: "Write a program to handle a `NullPointerException` using a `try-catch` block.",
        answer:
          'try { String str = null; System.out.println(str.length()); } catch (NullPointerException e) { System.out.println("A NullPointerException was caught. The string was null."); }',
      },
      {
        question: "Explain the purpose of the `finally` block.",
        answer: "The `finally` block is used to execute a block of code regardless of whether an exception was thrown or not. This makes it the ideal place for resource cleanup, such as closing files or database connections.",
      },
      {
        question: "What is the difference between `throw` and `throws`?",
        answer: "`throw` is a statement used inside a method body to throw a single exception. `throws` is a keyword used in a method's signature to declare that the method may throw one or more exceptions, obliging the calling code to handle them.",
      },
      {
        question: "Create a custom checked exception class named `InvalidAgeException`.",
        answer: "public class InvalidAgeException extends Exception { public InvalidAgeException(String message) { super(message); } }",
      },
      {
        question: "What are some best practices for exception handling?",
        answer:
          "Catch specific exceptions rather than a generic `Exception`. Do not swallow exceptions (e.g., catching and doing nothing). Use the `finally` block for resource cleanup. Document the exceptions a method can throw using `throws`.",
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 12,
    title: "Collections Framework",
    description: "Lists, sets, maps, iterators, and advanced data structures",
    duration: "95 min",
    topics: [
      { name: "Collections Hierarchy", answer: "The Java Collections Framework provides a unified architecture for storing and manipulating groups of objects. The main interfaces are `Collection`, `List`, `Set`, and `Map`." },
      { name: "List Implementations", answer: "`List` is an ordered collection that allows duplicate elements. Common implementations include `ArrayList` (resizable array, fast random access) and `LinkedList` (doubly-linked list, fast insertions/deletions)." },
      { name: "Set Implementations", answer: "`Set` is an unordered collection that does not allow duplicate elements. Common implementations are `HashSet` (uses a hash table for fast access) and `TreeSet` (stores elements in a sorted, natural order)." },
      { name: "Map Implementations", answer: "`Map` is an object that maps keys to values, where keys are unique. Implementations include `HashMap` (fast, unordered access) and `TreeMap` (sorted by key)." },
      { name: "Iterators", answer: "An `Iterator` is an object that enables you to traverse a collection and remove elements during the traversal. It provides a standard way to access elements regardless of the underlying collection type." },
      {
        name: "The `Collections` Utility Class",
        answer:
          "A utility class in `java.util.Collections` that provides static methods to operate on collections, such as `sort()`, `reverse()`, `shuffle()`, and searching methods.",
      },
    ],
    exercises: [
      {
        question: "Create an `ArrayList` of strings and add, remove, and access elements.",
        answer:
          'ArrayList<String> list = new ArrayList<>(); list.add("Apple"); list.add("Banana"); list.add("Orange"); System.out.println(list.get(1)); list.remove("Banana");',
      },
      {
        question: "Explain the performance differences between `ArrayList` and `LinkedList`.",
        answer:
          "`ArrayList` is efficient for random access (using `get(index)`) because it's backed by an array. However, insertions and deletions in the middle are slow as it requires shifting elements. `LinkedList` is efficient for insertions and deletions because it only needs to update pointers, but random access is slow as it requires traversing the list from the beginning.",
      },
      {
        question: "What is the key difference between a `HashSet` and a `TreeSet`?",
        answer: "`HashSet` stores elements in an unordered fashion and provides constant-time performance for basic operations (add, remove, contains). `TreeSet` stores elements in a sorted, ascending order and provides guaranteed `log(n)` time complexity for these operations.",
      },
      {
        question: "Write a program to iterate through a `HashMap` and print all key-value pairs.",
        answer:
          'HashMap<String, Integer> map = new HashMap<>(); map.put("A", 1); map.put("B", 2); map.put("C", 3); for (String key : map.keySet()) { System.out.println("Key: " + key + ", Value: " + map.get(key)); }',
      },
      {
        question: "How would you sort an `ArrayList` of strings in descending order?",
        answer:
          'ArrayList<String> list = new ArrayList<>(Arrays.asList("Banana", "Apple", "Orange")); Collections.sort(list, Collections.reverseOrder());',
      },
    ],
    difficulty: "Intermediate",
  },
  {
    id: 13,
    title: "Generics & Type Safety",
    description: "Generic classes, methods, wildcards, and type erasure",
    duration: "70 min",
    topics: [
      { name: "Generic Classes", answer: "Generic classes are classes that can work with different data types. They provide type safety at compile time and eliminate the need for casting, preventing `ClassCastException` at runtime." },
      { name: "Generic Methods", answer: "Methods that can be declared with type parameters, allowing them to accept and return different types. The type parameter is specified before the return type of the method." },
      { name: "Wildcards", answer: "A `?` is used as a wildcard in generic code to represent an unknown type. Bounded wildcards like `? extends T` (upper bound) and `? super T` (lower bound) are used to provide more flexibility and control over type parameters." },
      { name: "Type Erasure", answer: "A process where the Java compiler removes all generic type information during compilation. This is done for backward compatibility with older versions of Java that do not support generics. At runtime, a generic class or method is just a regular class or method with `Object` as the type." },
      { name: "Bounded Type Parameters", answer: "Used to restrict the types that can be used for a generic type parameter. For example, `<T extends Number>` means that `T` must be a subclass of `Number`. This is useful for enforcing certain behavior, such as being able to call methods from the `Number` class." },
    ],
    exercises: [
      {
        question: "Create a generic class `Box` that can store any type of data and provide a method to retrieve it.",
        answer:
          "public class Box<T> { private T data; public Box(T data) { this.data = data; } public T getData() { return data; } }",
      },
      { question: "Explain the purpose of generics.", answer: "The purpose of generics is to provide type safety at compile time, eliminating the need for explicit type casting and preventing runtime errors like `ClassCastException`. It also allows for more reusable and readable code." },
      { question: "What are wildcards in generics?", answer: "Wildcards (`?`) are a way to represent an unknown type. They are used in method signatures and variable declarations to make generic code more flexible. For example, `List<?>` can hold a list of any type." },
      {
        question: "Write a generic method to print an array of any type.",
        answer:
          "public static <T> void printArray(T[] arr) { for (T element : arr) { System.out.println(element); } }",
      },
      {
        question: "What is type erasure and what is its consequence?",
        answer:
          "Type erasure is the process where the Java compiler removes all generic type information at compile time. The consequence is that at runtime, generic types like `List<String>` and `List<Integer>` become simply `List`. This means you cannot perform type checks with `instanceof` on generic types or create arrays of generic types at runtime.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 14,
    title: "File I/O & Serialization",
    description: "Reading/writing files, streams, and object serialization",
    duration: "85 min",
    topics: [
      { name: "File Operations", answer: "The `java.io.File` class is used to represent files and directories. You can use it to create, delete, rename, and check the existence of files." },
      { name: "Input/Output Streams", answer: "Streams are a sequence of data. `InputStream` is for reading data, and `OutputStream` is for writing data. Java has different types of streams for various data types, such as `FileInputStream` and `FileOutputStream` for bytes, and `FileReader` and `FileWriter` for characters." },
      { name: "Buffered I/O", answer: "Classes like `BufferedReader` and `BufferedWriter` wrap around other streams (e.g., `FileReader`) to improve performance. They read or write data in larger chunks (buffers), reducing the number of I/O operations." },
      { name: "Serialization", answer: "The process of converting an object's state into a byte stream, which can then be saved to a file or sent over a network. The object must implement the `java.io.Serializable` interface." },
      { name: "Deserialization", answer: "The reverse of serialization. It is the process of reconstructing an object from a byte stream. This is done using `ObjectInputStream`." },
      { name: "The `try-with-resources` Statement", answer: "A statement that automatically closes resources (like streams) when the `try` block is exited. This helps prevent resource leaks and simplifies resource management, as it eliminates the need for a `finally` block for closing resources." },
    ],
    exercises: [
      {
        question: "Write a program to read data from a text file named 'input.txt' using `BufferedReader`.",
        answer:
          'try (BufferedReader br = new BufferedReader(new FileReader("input.txt"))) { String line; while ((line = br.readLine()) != null) { System.out.println(line); } } catch (IOException e) { e.printStackTrace(); }',
      },
      { question: "Explain the purpose of streams in Java I/O.", answer: "Streams provide a uniform way of handling I/O operations. They are a flow of data, and they abstract away the details of the underlying device, whether it's a file, a network socket, or a memory buffer." },
      { question: "What is the difference between a `FileInputStream` and a `FileReader`?", answer: "`FileInputStream` is a byte-stream class used for reading raw bytes from a file. `FileReader` is a character-stream class designed for reading text files, automatically handling character encodings. For text files, `FileReader` is generally preferred." },
      {
        question: "Create a class `Student` that is `Serializable` and write a program to serialize an object of this class to a file.",
        answer:
          'import java.io.*; public class Student implements Serializable { private String name; public Student(String name) { this.name = name; } public static void main(String[] args) { Student s = new Student("Alice"); try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("student.ser"))) { oos.writeObject(s); System.out.println("Object serialized"); } catch (IOException e) { e.printStackTrace(); } } }',
      },
      {
        question: "What are the advantages of using the `try-with-resources` statement?",
        answer:
          "It ensures that resources are always closed automatically, even if an exception occurs. This prevents resource leaks and results in cleaner, more readable code by removing the need for a `finally` block to manually close the resources.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 15,
    title: "Multithreading & Concurrency",
    description: "Threads, synchronization, concurrent collections, and parallel processing",
    duration: "100 min",
    topics: [
      { name: "Thread Creation", answer: "There are two main ways to create a thread: by extending the `java.lang.Thread` class or by implementing the `java.lang.Runnable` interface. Implementing `Runnable` is generally preferred as it allows the class to inherit from another class." },
      { name: "Thread States", answer: "A thread can be in one of six states: `NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, and `TERMINATED`. The JVM manages the transitions between these states." },
      { name: "Synchronization", answer: "The process of controlling access to shared resources by multiple threads. In Java, this is achieved using the `synchronized` keyword on methods or blocks of code, or using `java.util.concurrent.locks.ReentrantLock`." },
      { name: "Thread Pools", answer: "A collection of pre-instantiated, reusable threads. Instead of creating a new thread for every task, a task is submitted to the pool, and an available thread from the pool executes it. This reduces the overhead of creating and destroying threads." },
      { name: "Concurrent Collections", answer: "Thread-safe versions of standard collections. For example, `ConcurrentHashMap` is a thread-safe alternative to `HashMap`. These collections are designed for use in a multithreaded environment and offer better performance than synchronized wrappers." },
      { name: "The `CompletableFuture` API", answer: "A powerful API introduced in Java 8 for handling asynchronous computations. It allows you to write non-blocking code, perform a series of computations, and combine results from different tasks." },
    ],
    exercises: [
      {
        question: "Create a thread by implementing the `Runnable` interface.",
        answer:
          'public class MyRunnable implements Runnable { @Override public void run() { System.out.println("Thread is running"); } } public static void main(String[] args) { Thread thread = new Thread(new MyRunnable()); thread.start(); }',
      },
      {
        question: "Explain the purpose of the `synchronized` keyword.",
        answer: "The `synchronized` keyword is used to ensure that only one thread can execute a block of code or a method at a time. This prevents race conditions and ensures data integrity when multiple threads are accessing a shared resource.",
      },
      {
        question: "What is a thread pool and why is it useful?",
        answer: "A thread pool is a group of worker threads that are waiting to be assigned a task. It is useful because it reduces the overhead of creating and destroying threads for every task. It also provides a way to manage the number of threads and control resource usage.",
      },
      {
        question: "Write a program to demonstrate a race condition and how to fix it using `synchronized`.",
        answer:
          '// Race condition public class Counter { private int count = 0; public void increment() { count++; } } // Fixed public class Counter { private int count = 0; public synchronized void increment() { count++; } }',
      },
      {
        question: "What is a `CompletableFuture` and what are its advantages?",
        answer: "A `CompletableFuture` is a class that represents a future result of an asynchronous computation. It allows you to chain a series of dependent computations, handle errors, and combine results from multiple tasks in a clean, non-blocking way, which is a significant improvement over the traditional `Future` interface.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 16,
    title: "Java 8+ Features: Lambda, Streams & Optional",
    description: "Functional programming in Java, the Stream API, and the Optional class",
    duration: "90 min",
    topics: [
      { name: "Lambda Expressions", answer: "A concise way to represent an anonymous function. Lambda expressions are used to provide an implementation of a `functional interface` (an interface with a single abstract method). They simplify code by reducing boilerplate." },
      { name: "Functional Interfaces", answer: "An interface with exactly one abstract method. Examples include `Runnable`, `Comparator`, and new interfaces like `Predicate`, `Function`, and `Consumer` introduced in Java 8. The `@FunctionalInterface` annotation is a best practice." },
      { name: "The Stream API", answer: "A powerful API for processing collections of objects. It allows you to perform complex data manipulation operations in a declarative and functional style. Streams are not data structures; they are a sequence of elements from a source that supports various aggregate operations." },
      { name: "Stream Operations", answer: "Stream operations can be `intermediate` (e.g., `filter()`, `map()`) which return a new stream, or `terminal` (e.g., `forEach()`, `collect()`, `reduce()`) which produce a result or a side effect and close the stream." },
      { name: "The `Optional` Class", answer: "A container object that may or may not contain a non-null value. It was introduced to address the `NullPointerException` problem by providing a more explicit way of representing a value that might be absent. It forces the developer to handle the case where a value is not present." },
    ],
    exercises: [
      {
        question: "Rewrite the following code using a lambda expression: `Collections.sort(list, new Comparator<String>() { @Override public int compare(String a, String b) { return a.compareTo(b); } });`",
        answer: "The equivalent code using a lambda expression is: `Collections.sort(list, (a, b) -> a.compareTo(b));`",
      },
      {
        question: "Use the Stream API to filter a list of strings and print only the ones that start with 'A'.",
        answer:
          'List<String> list = Arrays.asList("Apple", "Banana", "Orange", "Apricot"); list.stream().filter(s -> s.startsWith("A")).forEach(System.out::println);',
      },
      {
        question: "Explain the difference between intermediate and terminal stream operations.",
        answer:
          "Intermediate operations are lazy and are not executed until a terminal operation is called. They transform the stream and return a new stream. Terminal operations are eager and trigger the processing of the entire stream, producing a final result or side effect.",
      },
      {
        question: "Write a program that uses `Optional` to handle a potential `null` value and print a default message if the value is absent.",
        answer:
          'String name = null; Optional<String> optionalName = Optional.ofNullable(name); String result = optionalName.orElse("Default Name"); System.out.println(result);',
      },
      {
        question: "What is a method reference and how is it related to lambda expressions?",
        answer:
          "A method reference is a shorthand syntax for a lambda expression that calls an existing method. For example, `s -> System.out.println(s)` can be replaced with `System.out::println`. It makes the code more concise and readable when the lambda body simply calls a method.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 17,
    title: "JDBC & Database Connectivity",
    description: "Connecting to a database, executing queries, and managing connections",
    duration: "95 min",
    topics: [
      { name: "What is JDBC?", answer: "JDBC (Java Database Connectivity) is a standard Java API for connecting to and interacting with databases. It provides a set of interfaces and classes for executing SQL statements and retrieving results." },
      { name: "JDBC Driver", answer: "A software component that enables a Java application to interact with a specific database. The JDBC API is independent of the driver, allowing you to switch databases by just changing the driver." },
      { name: "JDBC Workflow", answer: "The typical workflow involves: 1) Loading the driver, 2) Establishing a connection (`Connection`), 3) Creating a statement (`Statement`), 4) Executing the query, 5) Processing the result set (`ResultSet`), and 6) Closing the resources." },
      { name: "The `Connection` Interface", answer: "Represents a session with a specific database. It is used to create statements and manage transactions. A connection is a heavy resource and should always be closed after use." },
      { name: "Statements & Prepared Statements", answer: "`Statement` is used to execute simple, static SQL queries. `PreparedStatement` is a more efficient and secure way to execute precompiled SQL queries, especially when dealing with dynamic input, as it prevents SQL injection attacks." },
    ],
    exercises: [
      {
        question: "Write a complete JDBC program to connect to a MySQL database and retrieve all users from a `users` table.",
        answer:
          'import java.sql.*; public class JdbcExample { public static void main(String[] args) { String url = "jdbc:mysql://localhost:3306/mydb"; String user = "root"; String password = "password"; try (Connection conn = DriverManager.getConnection(url, user, password); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery("SELECT * FROM users")) { while (rs.next()) { System.out.println("User ID: " + rs.getInt("id") + ", Name: " + rs.getString("name")); } } catch (SQLException e) { e.printStackTrace(); } } }',
      },
      { question: "Explain the difference between `Statement` and `PreparedStatement`.", answer: "`Statement` is suitable for static SQL queries. `PreparedStatement` is pre-compiled by the database, making it faster for repeated execution. Crucially, it automatically escapes special characters in input, making it a powerful defense against SQL injection attacks." },
      {
        question: "What is the purpose of the `ResultSet` object?",
        answer: "The `ResultSet` object holds the data retrieved from a database after a query is executed. It provides methods like `next()` to iterate through the rows and `getString()`, `getInt()`, etc., to retrieve data from each column.",
      },
      {
        question: "Why is it important to close JDBC resources like `Connection`, `Statement`, and `ResultSet`?",
        answer: "These resources consume system resources (like memory and file handles) and should be closed to prevent resource leaks. The `try-with-resources` statement is the recommended way to ensure they are always closed.",
      },
      {
        question: "Write a `PreparedStatement` to insert a new user into a `users` table.",
        answer:
          'String sql = "INSERT INTO users (name, email) VALUES (?, ?)"; try (PreparedStatement pstmt = conn.prepareStatement(sql)) { pstmt.setString(1, "John Doe"); pstmt.setString(2, "john.doe@example.com"); pstmt.executeUpdate(); } catch (SQLException e) { e.printStackTrace(); }',
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 18,
    title: "Testing with JUnit 5",
    description: "Writing unit tests, assertions, and using testing frameworks",
    duration: "70 min",
    topics: [
      { name: "What is JUnit 5?", answer: "JUnit 5 is a modern testing framework for Java. It is composed of three modules: JUnit Platform (the foundation), JUnit Jupiter (the new programming model), and JUnit Vintage (for backward compatibility)." },
      { name: "Writing a Basic Test", answer: "A test class is created, and methods are annotated with `@Test`. Inside these methods, you use assertion methods (e.g., `assertEquals()`, `assertTrue()`) to check if the code behaves as expected." },
      { name: "Assertions", answer: "Assertions are methods that verify the expected outcome of a test. JUnit Jupiter's `Assertions` class provides a wide range of static methods for this purpose, like `assertEquals(expected, actual)`." },
      { name: "Lifecycle Annotations", answer: "Annotations like `@BeforeAll`, `@BeforeEach`, `@AfterEach`, and `@AfterAll` are used to run setup or teardown code before or after all tests, or before or after each individual test method." },
      { name: "Parameterized Tests", answer: "Allows you to run the same test method multiple times with different arguments. This is done using `@ParameterizedTest` and a source annotation like `@ValueSource` or `@CsvSource`." },
    ],
    exercises: [
      {
        question: "Write a JUnit 5 test class with a simple test method that asserts two integers are equal.",
        answer:
          'import static org.junit.jupiter.api.Assertions.assertEquals; import org.junit.jupiter.api.Test; public class CalculatorTest { @Test void additionTest() { Calculator calculator = new Calculator(); assertEquals(5, calculator.add(2, 3)); } }',
      },
      {
        question: "Explain the purpose of the `@Test` and `@DisplayName` annotations.",
        answer: "`@Test` marks a method as a test method. `@DisplayName` provides a custom name for a test, which is more readable and descriptive than the method name, especially in test reports.",
      },
      {
        question: "What is the purpose of `@BeforeAll` and `@BeforeEach`?",
        answer:
          "`@BeforeAll` is used to annotate a static method that runs once before all tests in the current class. It is ideal for expensive setup operations. `@BeforeEach` is used for a method that runs before each individual test method, ideal for resetting state.",
      },
      {
        question: "Write a parameterized test to check if a number is even, using `@ValueSource`.",
        answer:
          'import org.junit.jupiter.api.Assertions; import org.junit.jupiter.params.ParameterizedTest; import org.junit.jupiter.params.provider.ValueSource; class NumberCheckerTest { @ParameterizedTest @ValueSource(ints = {2, 4, 6, 8, 10}) void isEven_shouldReturnTrueForEvenNumbers(int number) { Assertions.assertTrue(number % 2 == 0); } }',
      },
      {
        question: "How does JUnit 5's architecture (Platform, Jupiter, Vintage) differ from JUnit 4?",
        answer: "JUnit 5 is modular, with `JUnit Platform` providing the foundation to run tests, `JUnit Jupiter` providing the new programming and extension model, and `JUnit Vintage` providing a test engine for running JUnit 3 and 4 tests. This modularity allows for greater flexibility and extensibility than the monolithic JUnit 4.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 19,
    title: "Java SE 11+ Features & Modules",
    description: "Modern Java features, the Module System, and new APIs",
    duration: "80 min",
    topics: [
      { name: "The Java Module System (JPMS)", answer: "Introduced in Java 9, JPMS provides a new way to organize code into modules. It aims to improve security, reliability, and performance by enforcing strong encapsulation and explicit dependencies between modules." },
      { name: "Records", answer: "Introduced in Java 14, `record` is a concise way to create immutable data carrier classes. The compiler automatically generates the constructor, getters, `equals()`, `hashCode()`, and `toString()` methods, reducing boilerplate code." },
      { name: "Sealed Classes", answer: "Introduced in Java 15, a `sealed` class or interface restricts which other classes or interfaces can extend or implement it. This allows for a more controlled inheritance hierarchy and can be used with `switch` expressions to ensure all possibilities are covered." },
      { name: "Switch Expressions", answer: "Introduced in Java 12, `switch` expressions can be used to assign a value to a variable based on a `switch` statement. They use the `->` operator and can be used as an expression, returning a value, which is more concise and less error-prone than traditional `switch` statements." },
      { name: "Text Blocks", answer: "Introduced in Java 15, `text blocks` are a multi-line string literal. They start and end with three double-quote characters (`\"\"\"`), making it easier to represent multi-line strings without needing to use escape sequences." },
    ],
    exercises: [
      {
        question: "Explain the main benefits of the Java Platform Module System.",
        answer: "The main benefits are: **Reliable Configuration**: Modules define their dependencies explicitly, which avoids the classpath hell problem. **Strong Encapsulation**: Modules can hide their internal implementation details. **Improved Security**: The attack surface is reduced. **Scalability**: The modular structure makes large applications easier to manage.",
      },
      {
        question: "Create a `record` to represent a `Point` with `x` and `y` coordinates.",
        answer: "public record Point(int x, int y) { }",
      },
      {
        question: "Rewrite a simple `switch` statement as a `switch` expression to assign a grade.",
        answer:
          'String grade = "A"; String message = switch (grade) { case "A" -> "Excellent"; case "B" -> "Good"; case "C" -> "Average"; default -> "Needs Improvement"; };',
      },
      {
        question: "Write a program that uses a `text block` to print a multi-line string.",
        answer:
          'String json = """ { "name": "John Doe", "age": 30, "city": "New York" } """; System.out.println(json);',
      },
      {
        question: "What is a `sealed` class and why would you use one?",
        answer: "`sealed` classes allow you to specify exactly which classes can extend a class or implement an interface. You would use one to model a limited set of known possibilities, such as a state machine, where you want to explicitly define all possible subtypes.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 20,
    title: "Regular Expressions",
    description: "Matching patterns in strings using the `java.util.regex` package",
    duration: "60 min",
    topics: [
      { name: "What are Regular Expressions?", answer: "Regular expressions, or regex, are a powerful way to define and match patterns in strings. They are used for tasks like data validation, searching, and replacing text." },
      { name: "The `Pattern` and `Matcher` Classes", answer: "The `java.util.regex` package is the core of Java's regex support. A `Pattern` object represents a compiled regular expression, and a `Matcher` object is used to perform match operations on a given input string." },
      { name: "Basic Regex Syntax", answer: "Basic syntax includes metacharacters like `.` (any character), `*` (zero or more), `+` (one or more), `?` (zero or one), `[]` (character set), and `()` (grouping)." },
      { name: "Quantifiers & Character Classes", answer: "Quantifiers specify how many times a part of a pattern can repeat. Character classes like `\\d` (digit), `\\w` (word character), and `\\s` (whitespace) simplify common patterns." },
      { name: "Using Regex in Java", answer: "The typical workflow is: 1) Compile a regex pattern using `Pattern.compile()`, 2) Create a `Matcher` object from the pattern and input string, and 3) Use `Matcher` methods like `find()`, `matches()`, and `group()` to perform the matching." },
    ],
    exercises: [
      {
        question: "Write a program to check if a string contains a valid email address using a regular expression.",
        answer:
          'import java.util.regex.*; public class EmailValidator { public static boolean isValidEmail(String email) { String regex = "^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"; Pattern pattern = Pattern.compile(regex); Matcher matcher = pattern.matcher(email); return matcher.matches(); } }',
      },
      {
        question: "Explain the difference between `Matcher.matches()` and `Matcher.find()`.",
        answer:
          "`Matcher.matches()` attempts to match the entire input string against the pattern. It returns `true` only if the entire string is a match. `Matcher.find()` scans the input string and returns `true` if a substring is found that matches the pattern.",
      },
      {
        question: "How would you use a regex to find all the numbers in a string?",
        answer:
          'String text = "I have 2 apples and 3 bananas."; Pattern pattern = Pattern.compile("\\d+"); Matcher matcher = pattern.matcher(text); while (matcher.find()) { System.out.println(matcher.group()); }',
      },
      {
        question: "What is a `backreference` in regex?",
        answer: "A backreference is a way to refer to a previously captured group within the same regular expression. For example, `(.)\\1` will match two identical adjacent characters.",
      },
      {
        question: "What is the purpose of the `Pattern.CASE_INSENSITIVE` flag?",
        answer: "The `Pattern.CASE_INSENSITIVE` flag is passed to `Pattern.compile()` to make the pattern matching case-insensitive. For example, with this flag, the pattern `[a-z]` would also match uppercase letters `A-Z`.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 21,
    title: "Networking & Sockets",
    description: "Building client-server applications with Java sockets",
    duration: "85 min",
    topics: [
      { name: "What are Sockets?", answer: "A socket is an endpoint for communication between two programs running on a network. It acts as a bidirectional communication link and is the foundation for building network applications." },
      { name: "Client-Server Architecture", answer: "A model where a central server provides a service to multiple clients. The server listens for incoming connections on a specific port, and clients connect to the server to request the service." },
      { name: "The `ServerSocket` Class", answer: "Used on the server side to create a socket that listens for incoming client connections. When a client connects, the `accept()` method returns a new `Socket` object for communication with that specific client." },
      { name: "The `Socket` Class", answer: "Represents the communication endpoint for both the client and the server. It provides methods to get `InputStream` and `OutputStream` objects for sending and receiving data." },
      { name: "Building a Simple Server", answer: "A simple server loop involves: 1) Creating a `ServerSocket` on a port, 2) Entering a loop, 3) Calling `accept()` to wait for a client, 4) Getting the streams from the new `Socket`, 5) Communicating, and 6) Closing the socket." },
    ],
    exercises: [
      {
        question: "Write a simple Java server that listens on port 12345 and accepts one client connection.",
        answer:
          'import java.net.*; import java.io.*; public class SimpleServer { public static void main(String[] args) throws IOException { ServerSocket serverSocket = new ServerSocket(12345); System.out.println("Server is listening on port 12345"); Socket clientSocket = serverSocket.accept(); System.out.println("Client connected: " + clientSocket.getInetAddress()); clientSocket.close(); serverSocket.close(); } }',
      },
      {
        question: "Explain the role of a port number in network communication.",
        answer: "A port number is a 16-bit number that identifies a specific process or service running on a computer. It allows the operating system to direct network traffic to the correct application, enabling multiple services to run on the same machine.",
      },
      {
        question: "What is the difference between TCP and UDP?",
        answer: "TCP (Transmission Control Protocol) is a connection-oriented protocol that guarantees reliable, ordered delivery of data. UDP (User Datagram Protocol) is a connectionless protocol that is faster but does not guarantee delivery or order. TCP is for applications where data integrity is critical, while UDP is for applications where speed is more important.",
      },
      {
        question: "Write a simple client program that connects to the server from the first exercise and sends a message.",
        answer:
          'import java.net.*; import java.io.*; public class SimpleClient { public static void main(String[] args) throws IOException { String serverAddress = "localhost"; int port = 12345; Socket socket = new Socket(serverAddress, port); System.out.println("Connected to server"); PrintWriter out = new PrintWriter(socket.getOutputStream(), true); out.println("Hello, Server!"); socket.close(); } }',
      },
      {
        question: "How would you handle multiple clients connecting to the server simultaneously?",
        answer: "To handle multiple clients, a multi-threaded server is needed. The main thread would listen for connections. When a new client connects, the main thread would create a new thread to handle communication with that client, freeing itself to listen for the next client connection. This is a common design pattern for servers.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 22,
    title: "Annotations & Reflection",
    description: "Using annotations for metadata and inspecting classes at runtime",
    duration: "75 min",
    topics: [
      { name: "What are Annotations?", answer: "Annotations are metadata about the code. They provide information to the compiler or the JVM, but they do not affect the program's logic. Examples include `@Override` and `@Deprecated`." },
      { name: "Custom Annotations", answer: "You can create your own annotations using the `@interface` keyword. You can define members in the annotation to hold values. You can specify the `RetentionPolicy` (`SOURCE`, `CLASS`, `RUNTIME`) and `ElementType` (e.g., `TYPE`, `METHOD`, `FIELD`)." },
      { name: "What is Reflection?", answer: "Reflection is the ability of a program to inspect and manipulate its own structure at runtime. It allows you to examine a class's members (fields, methods, constructors) and create objects, invoke methods, and access fields dynamically." },
      { name: 'The `Class` Class', answer: 'The entry point for reflection. The `Class` object represents the class itself. You can get a `Class` object using `.class` (e.g., `String.class`), `obj.getClass()`, or `Class.forName("className")`.' },
      { name: "Using Reflection to Invoke a Method", answer: "You can get a `Method` object from a `Class` object and then use `method.invoke(obj, args)` to call that method on an object dynamically." },
    ],
    exercises: [
      {
        question: "Create a custom annotation `@Author` with a `name` member.",
        answer:
          'import java.lang.annotation.*; @Retention(RetentionPolicy.RUNTIME) @Target(ElementType.TYPE) public @interface Author { String name(); }',
      },
      {
        question: "Explain the difference between `RetentionPolicy.RUNTIME` and `RetentionPolicy.SOURCE`.",
        answer: "`RetentionPolicy.RUNTIME` means the annotation is available to the JVM at runtime and can be accessed using reflection. `RetentionPolicy.SOURCE` means the annotation is discarded by the compiler and is not available in the compiled `.class` file. It is typically used for annotations that only provide information to the compiler, such as `@Override`.",
      },
      {
        question: "Write a program that uses reflection to get the name of a class and all its public methods.",
        answer:
          'import java.lang.reflect.*; public class ReflectionExample { public static void main(String[] args) { try { Class<?> clazz = Class.forName("java.lang.String"); System.out.println("Class Name: " + clazz.getName()); System.out.println("Public Methods:"); for (Method method : clazz.getMethods()) { System.out.println("  " + method.getName()); } } catch (ClassNotFoundException e) { e.printStackTrace(); } } }',
      },
      {
        question: "How would you create an object of a class and invoke a method on it using reflection?",
        answer:
          'try { Class<?> clazz = Class.forName("MyClass"); Object obj = clazz.getDeclaredConstructor().newInstance(); Method method = clazz.getMethod("myMethod"); method.invoke(obj); } catch (Exception e) { e.printStackTrace(); }',
      },
      {
        question: "What are the advantages and disadvantages of using reflection?",
        answer: "Advantages: It allows for dynamic runtime behavior and is essential for frameworks like Spring and JUnit. It enables introspection and metaprogramming. Disadvantages: It comes with a performance overhead, breaks encapsulation, and can make code harder to read and maintain. It should be used sparingly.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 23,
    title: "Design Patterns",
    description: "Common design patterns like Singleton, Factory, and Observer",
    duration: "90 min",
    topics: [
      { name: "What are Design Patterns?", answer: "Design patterns are reusable solutions to common problems in software design. They are not a specific implementation but rather a template that can be used in many different situations." },
      { name: "Singleton Pattern", answer: "Ensures that a class has only one instance and provides a global point of access to it. This is often used for logging, database connection pools, or other resources that should be shared globally." },
      { name: "Factory Pattern", answer: "Provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. It's used when the exact type of object to be created is not known at compile time." },
      { name: "Observer Pattern", answer: "Defines a one-to-many dependency between objects. When one object (the `subject`) changes state, all of its dependents (the `observers`) are notified and updated automatically. This is a key pattern for event-driven systems and GUI programming." },
      { name: "Strategy Pattern", answer: "Defines a family of algorithms, encapsulates each one, and makes them interchangeable. This allows the algorithm to vary independently from the clients that use it. It is an alternative to using a large `if-else` block for different behaviors." },
    ],
    exercises: [
      {
        question: "Implement the Singleton pattern for a class named `DatabaseConnection`.",
        answer:
          'public class DatabaseConnection { private static DatabaseConnection instance; private DatabaseConnection() { } public static DatabaseConnection getInstance() { if (instance == null) { instance = new DatabaseConnection(); } return instance; } }',
      },
      {
        question: "Explain a real-world example of the Factory pattern.",
        answer: "A real-world example is a `VehicleFactory` that has a `createVehicle()` method. Subclasses like `CarFactory` and `MotorcycleFactory` would implement this method to return a `Car` or a `Motorcycle` object, respectively. The client code uses the factory interface without needing to know the specific subclass that creates the object.",
      },
      {
        question: "Describe the roles of the Subject and Observer in the Observer pattern.",
        answer: "The `Subject` (or `Observable`) maintains a list of its dependents (`Observers`) and notifies them of state changes. The `Observer` is the dependent object that is notified by the subject. The `Observer` and `Subject` are loosely coupled, so changes in one do not require changes in the other.",
      },
      {
        question: "Write a program that uses the Strategy pattern to implement different tax calculation strategies.",
        answer:
          'interface TaxStrategy { double calculateTax(double income); } class SimpleTax implements TaxStrategy { ... } class ProgressiveTax implements TaxStrategy { ... } // Client: TaxCalculator calculator = new TaxCalculator(new SimpleTax());',
      },
      {
        question: "What are the advantages of using design patterns?",
        answer: "Design patterns provide a common vocabulary for developers, making communication easier. They offer proven, robust solutions to common problems, reducing the risk of design flaws. They lead to more maintainable, flexible, and scalable code.",
      },
    ],
    difficulty: "Advanced",
  },
  {
    id: 24,
    title: "JVM Internals & Performance Tuning",
    description: "Deep dive into the JVM, Garbage Collection, and performance optimization",
    duration: "100 min",
    topics: [
      { name: "JVM Memory Areas", answer: "Revisit the JVM memory areas with more detail: **Heap** (where objects reside, divided into Young, Old, and Permanent Generations), **Method Area**, **Stack**, and **PC Registers**." },
      { name: "Garbage Collection Algorithms", answer: "Explore different GC algorithms: **Serial GC** (for single-threaded environments), **Parallel GC** (for multi-threaded environments), and **G1 GC** (Garbage First), which is the default for modern JVMs and is designed for large heaps." },
      { name: "JIT Compiler", answer: "The Just-In-Time compiler identifies `hot spots` in the code (frequently executed methods) and compiles the bytecode into highly optimized native machine code. This is what makes Java so fast." },
      { name: "JVM Tuning", answer: "The process of adjusting JVM settings to optimize application performance. This involves setting heap size (`-Xmx`, `-Xms`), choosing the appropriate garbage collector, and configuring thread pools." },
      { name: "Monitoring Tools", answer: "Tools like **JConsole**, **VisualVM**, and **JProfiler** are used to monitor the JVM's memory usage, threads, and CPU utilization. They are essential for identifying performance bottlenecks." },
    ],
    exercises: [
      {
        question: "Explain the concept of `Generational Garbage Collection`.",
        answer: "Generational GC is an optimization strategy based on the observation that most objects are short-lived. The heap is divided into a **Young Generation** (for new objects) and an **Old Generation**. New objects are created in the Young Generation, and if they survive multiple GC cycles, they are moved to the Old Generation. This approach makes GC more efficient by focusing on the area where most garbage is located.",
      },
      {
        question: "What are the command-line options for setting the initial and maximum heap size?",
        answer: "The initial heap size is set with `-Xms` and the maximum heap size is set with `-Xmx`. For example, `java -Xms512m -Xmx2g MyProgram` sets the initial heap to 512 MB and the maximum to 2 GB.",
      },
      {
        question: "Describe the function of the `JIT Compiler` in detail.",
        answer:
          "The JIT compiler is part of the JVM's Execution Engine. It dynamically compiles Java bytecode into native machine code at runtime. Initially, the JVM uses an interpreter, but for methods that are called frequently ('hot spots'), the JIT compiles the bytecode to native code, which is then cached and reused. This hybrid approach provides both platform independence and high performance.",
      },
      {
        question: "What is a `Stop-the-World` event in Garbage Collection?",
        answer: "A `Stop-the-World` event is a temporary suspension of all application threads to perform garbage collection. This is necessary to ensure that the heap state remains consistent while the garbage collector is working. The goal of modern GCs like G1 is to minimize the duration and frequency of these pauses.",
      },
      {
        question: "What are some best practices for JVM performance tuning?",
        answer:
          "Use a modern JVM (like OpenJDK 17+). Choose the right garbage collector for your application's workload. Tune the heap size (`-Xms`, `-Xmx`) to prevent excessive GC. Use monitoring tools to identify memory leaks and CPU bottlenecks.",
      },
    ],
    difficulty: "Advanced",
  },
]

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Click through sections with progress tracking and completion status",
  },
  {
    icon: Target,
    title: "Progress Tracking",
    description: "Track your completion status across all 24 comprehensive sections",
  },
  {
    icon: Code,
    title: "150+ Exercises",
    description: "Hands-on coding exercises with detailed solutions and explanations",
  },
  {
    icon: Award,
    title: "Skill Levels",
    description: "Structured progression from beginner to advanced topics",
  },
]

export default function JavaTutorialHome() {
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState<number | null>(null)
  const [sectionTab, setSectionTab] = useState<{ [key: number]: string }>({})

  // Load completion status from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("javaCompletedSections")
    if (saved) {
      setCompletedSections(new Set(JSON.parse(saved)))
    }
  }, [])

  // Save completion status to localStorage
  useEffect(() => {
    localStorage.setItem("javaCompletedSections", JSON.stringify([...completedSections]))
  }, [completedSections])

  const toggleSectionCompletion = (sectionId: number) => {
    const newCompleted = new Set(completedSections)
    if (newCompleted.has(sectionId)) {
      newCompleted.delete(sectionId)
    } else {
      newCompleted.add(sectionId)
    }
    setCompletedSections(newCompleted)
  }

  const completionPercentage = (completedSections.size / sections.length) * 100

  const handleGeneratePDF = async () => {
    setIsGenerating(true)
    setProgress(0)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsGenerating(false)
          generateComprehensivePDF()
          return 100
        }
        return prev + 5
      })
    }, 150)
  }

  const handleSectionClick = (sectionId: number) => {
    setActiveSection(activeSection === sectionId ? null : sectionId)
    if (!sectionTab[sectionId]) {
      setSectionTab((prev) => ({ ...prev, [sectionId]: "topics" }))
    }
  }

  const handleTabChange = (sectionId: number, value: string) => {
    setSectionTab((prev) => ({ ...prev, [sectionId]: value }))
    console.log(`Section ${sectionId} switched to tab: ${value}, Exercises count: ${sections.find(s => s.id === sectionId)?.exercises.length}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-700 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Java Mastery</h1>
                <p className="text-sm text-slate-600">Interactive Learning Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-slate-700">
                  Progress: {completedSections.size}/{sections.length}
                </div>
                <div className="text-xs text-slate-500">{completionPercentage.toFixed(0)}% Complete</div>
              </div>
              <div className="w-24">
                <Progress value={completionPercentage} className="h-2" />
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Star className="w-3 h-3 mr-1" />
                Interactive
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Master Java Programming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Interactive Learning Experience
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A comprehensive, interactive tutorial with progress tracking, clickable sections, and a detailed 400+ page
              PDF guide with exercises and solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
                onClick={handleGeneratePDF}
                disabled={isGenerating}
              >
                <Download className="w-5 h-5 mr-2" />
                {isGenerating ? "Generating PDF..." : "Download Complete 400+ Page PDF"}
              </Button>
              <div className="text-sm text-slate-500">Free • 400+ Pages • 150+ Exercises • Instant Download</div>
            </div>

            {isGenerating && (
              <div className="max-w-md mx-auto mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-600">Generating comprehensive PDF...</span>
                  <span className="text-sm text-slate-600">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">{sections.length}</div>
                <div className="text-sm text-slate-600">Interactive Sections</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-indigo-600 mb-1">400+</div>
                <div className="text-sm text-slate-600">Pages of Content</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  {sections.reduce((total, section) => total + section.exercises.length, 0)}+
                </div>
                <div className="text-sm text-slate-600">Practice Exercises</div>
              </div>
              <div className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-600 mb-1">{completedSections.size}</div>
                <div className="text-sm text-slate-600">Completed by You</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-8 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center">
                  <BookMarked className="w-6 h-6 mr-2 text-blue-600" />
                  Your Learning Progress
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCompletedSections(new Set())}
                  className="text-slate-600 hover:text-slate-800"
                >
                  Reset Progress
                </Button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                  <span className="text-sm text-slate-600">
                    {completedSections.size} of {sections.length} sections completed
                  </span>
                </div>
                <Progress value={completionPercentage} className="h-3" />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {sections.filter((s) => s.difficulty === "Beginner" && completedSections.has(s.id)).length}
                  </div>
                  <div className="text-sm text-green-700">Beginner Sections</div>
                  <div className="text-xs text-green-600">
                    of {sections.filter((s) => s.difficulty === "Beginner").length} total
                  </div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">
                    {sections.filter((s) => s.difficulty === "Intermediate" && completedSections.has(s.id)).length}
                  </div>
                  <div className="text-sm text-yellow-700">Intermediate Sections</div>
                  <div className="text-xs text-yellow-600">
                    of {sections.filter((s) => s.difficulty === "Intermediate").length} total
                  </div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {sections.filter((s) => s.difficulty === "Advanced" && completedSections.has(s.id)).length}
                  </div>
                  <div className="text-sm text-red-700">Advanced Sections</div>
                  <div className="text-xs text-red-600">
                    of {sections.filter((s) => s.difficulty === "Advanced").length} total
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Interactive Learning Features</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience hands-on learning with our comprehensive tracking system and interactive content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSectionTab((prev) => ({ ...prev, [activeSection || 0]: "features" }))}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Interactive Learning Sections</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Click on any section to explore topics and track your progress. Each section is carefully designed for
              progressive learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {sections.map((section) => (
              <Card
                key={section.id}
                className={`border-0 shadow-md bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group ${
                  completedSections.has(section.id) ? "ring-2 ring-green-200 bg-green-50/50" : ""
                } ${activeSection === section.id ? "ring-2 ring-blue-200 bg-blue-50/50" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(section.difficulty)}`}>
                      {section.difficulty}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {section.duration}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleSectionCompletion(section.id)
                        }}
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        {completedSections.has(section.id) ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Circle className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-800 group-hover:text-blue-600 transition-colors flex items-center">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      {section.id}
                    </span>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 mb-4">{section.description}</CardDescription>

                  {activeSection === section.id && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <Tabs
                        value={sectionTab[section.id] || "topics"}
                        onValueChange={(value) => handleTabChange(section.id, value)}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="topics">Topics</TabsTrigger>
                          <TabsTrigger value="exercises">Exercises</TabsTrigger>
                        </TabsList>
                        <TabsContent value="topics" className="mt-4">
                          <div className="space-y-3">
                            <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                              <Lightbulb className="w-4 h-4 mr-1" />
                              Key Topics & Answers:
                            </h4>
                            {section.topics.map((topic, index) => (
                              <div key={index} className="bg-white p-3 rounded-lg border border-slate-200">
                                <div className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <div className="flex-1">
                                    <p className="font-medium text-slate-700 mb-1">{topic.name}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">{topic.answer}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="exercises" className="mt-4 min-h-[200px]">
                          <div className="space-y-3">
                            <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-1" />
                              Practice Exercises & Solutions:
                            </h4>
                            {section.exercises.length > 0 ? (
                              section.exercises.map((exercise, index) => (
                                <div
                                  key={index}
                                  className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200"
                                >
                                  <div className="mb-2">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium mb-2">
                                      Exercise {index + 1}
                                    </span>
                                    <p className="font-medium text-slate-800 mb-2">{exercise.question}</p>
                                  </div>
                                  <div className="bg-white p-3 rounded border-l-4 border-l-green-400">
                                    <p className="text-sm font-medium text-green-700 mb-1">✅ Solution:</p>
                                    <p className="text-sm text-slate-700 leading-relaxed font-mono bg-slate-50 p-2 rounded">
                                      {exercise.answer}
                                    </p>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-sm text-slate-600">No exercises available for this section.</p>
                            )}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200">
                    <span className="text-sm text-slate-500 flex items-center">
                      <FileText className="w-3 h-3 mr-1" />
                      {section.exercises.length} exercises
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleSectionClick(section.id)}
                    >
                      {activeSection === section.id ? "Collapse" : "Explore"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Master Java?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Download the complete 400+ page tutorial with interactive exercises and start your journey to becoming a
              Java expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={handleGeneratePDF}
                disabled={isGenerating}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Complete PDF Tutorial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg bg-transparent"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Java Mastery</span>
          </div>
          <p className="text-slate-400 mb-2">
            © 2024 Java Mastery Tutorial. Interactive learning platform for Java programming.
          </p>
          <p className="text-slate-500 text-sm">
            Progress: {completedSections.size}/{sections.length} sections completed • {completionPercentage.toFixed(0)}%
            complete
          </p>
        </div>
      </footer>
    </div>
  )
}
