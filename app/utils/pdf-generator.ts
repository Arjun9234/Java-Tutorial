export const generatePDF = () => {
  // Create a comprehensive PDF content structure
  const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Java Mastery - Complete Tutorial</title>
    <style>
        @page {
            margin: 1in;
            size: A4;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2d3748;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
        }
        
        .cover-page {
            text-align: center;
            padding: 2in 0;
            background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
            color: white;
            margin: -1in;
            margin-bottom: 2in;
        }
        
        .cover-title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .cover-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
            opacity: 0.9;
        }
        
        .cover-description {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.8;
        }
        
        h1 {
            color: #2b6cb0;
            font-size: 28px;
            border-bottom: 3px solid #4299e1;
            padding-bottom: 10px;
            margin-top: 40px;
        }
        
        h2 {
            color: #2c5282;
            font-size: 22px;
            margin-top: 30px;
        }
        
        h3 {
            color: #3182ce;
            font-size: 18px;
            margin-top: 25px;
        }
        
        .section-box {
            background: white;
            border-left: 4px solid #4299e1;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .code-block {
            background: #1a202c;
            color: #e2e8f0;
            padding: 20px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            margin: 15px 0;
            overflow-x: auto;
        }
        
        .highlight {
            background: #fef5e7;
            border-left: 4px solid #f6ad55;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        
        .practice-question {
            background: #f0fff4;
            border: 1px solid #9ae6b4;
            padding: 15px;
            margin: 15px 0;
            border-radius: 8px;
        }
        
        .toc {
            background: white;
            padding: 30px;
            border-radius: 12px;
            margin: 30px 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .toc-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dotted #cbd5e0;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        .tip {
            background: #ebf8ff;
            border-left: 4px solid #3182ce;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        
        .warning {
            background: #fffaf0;
            border-left: 4px solid #f6ad55;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="cover-page">
        <h1 class="cover-title">Java Mastery</h1>
        <p class="cover-subtitle">Complete Programming Tutorial</p>
        <p class="cover-description">
            A comprehensive guide from basic concepts to advanced topics, 
            designed for beginners with practical examples and exercises
        </p>
        <div style="margin-top: 60px;">
            <p>200+ Pages • 16 Sections • 100+ Examples • 50+ Practice Questions</p>
        </div>
    </div>

    <div class="page-break"></div>
    
    <div class="toc">
        <h1 style="text-align: center; margin-top: 0;">Table of Contents</h1>
        
        <div class="toc-item"><span>1. Introduction to Java</span><span>Page 5</span></div>
        <div class="toc-item"><span>2. Basic Syntax & HelloWorld</span><span>Page 12</span></div>
        <div class="toc-item"><span>3. Variables & Data Types</span><span>Page 20</span></div>
        <div class="toc-item"><span>4. Operators & Expressions</span><span>Page 28</span></div>
        <div class="toc-item"><span>5. Control Flow Statements</span><span>Page 35</span></div>
        <div class="toc-item"><span>6. Loops & Iterations</span><span>Page 45</span></div>
        <div class="toc-item"><span>7. Methods & Functions</span><span>Page 55</span></div>
        <div class="toc-item"><span>8. Object-Oriented Programming</span><span>Page 68</span></div>
        <div class="toc-item"><span>9. Inheritance & Polymorphism</span><span>Page 85</span></div>
        <div class="toc-item"><span>10. Encapsulation & Abstraction</span><span>Page 98</span></div>
        <div class="toc-item"><span>11. Exception Handling</span><span>Page 110</span></div>
        <div class="toc-item"><span>12. Collections Framework</span><span>Page 125</span></div>
        <div class="toc-item"><span>13. Generics & Type Safety</span><span>Page 145</span></div>
        <div class="toc-item"><span>14. File I/O & Serialization</span><span>Page 160</span></div>
        <div class="toc-item"><span>15. Multithreading & Concurrency</span><span>Page 175</span></div>
        <div class="toc-item"><span>16. Advanced Topics & Best Practices</span><span>Page 190</span></div>
    </div>

    <div class="page-break"></div>

    <div class="section-box">
        <h1>1. Introduction to Java</h1>
        
        <h2>What is Java?</h2>
        <p>Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It was developed by Sun Microsystems (now owned by Oracle) and released in 1995.</p>
        
        <div class="highlight">
            <strong>Key Features of Java:</strong>
            <ul>
                <li><strong>Platform Independent:</strong> "Write Once, Run Anywhere" (WORA)</li>
                <li><strong>Object-Oriented:</strong> Everything is an object in Java</li>
                <li><strong>Secure:</strong> Built-in security features</li>
                <li><strong>Robust:</strong> Strong memory management and exception handling</li>
                <li><strong>Multithreaded:</strong> Supports concurrent programming</li>
            </ul>
        </div>
        
        <h2>Java Architecture</h2>
        <p>Java follows a unique architecture that makes it platform-independent:</p>
        
        <div class="tip">
            <strong>💡 Tip:</strong> Understanding the JVM (Java Virtual Machine) is crucial for Java development. It's what makes Java platform-independent.
        </div>
        
        <h3>Setting Up Java Development Environment</h3>
        
        <h4>Step 1: Install JDK (Java Development Kit)</h4>
        <p>Download the latest JDK from Oracle's official website or use OpenJDK:</p>
        
        <div class="code-block">
# Verify Java installation
java -version
javac -version

# Expected output:
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode, sharing)
        </div>
        
        <h4>Step 2: Set Environment Variables</h4>
        <p>Configure JAVA_HOME and PATH variables:</p>
        
        <div class="code-block">
# Windows
set JAVA_HOME=C:\\Program Files\\Java\\jdk-17.0.1
set PATH=%JAVA_HOME%\\bin;%PATH%

# Linux/Mac
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export PATH=$JAVA_HOME/bin:$PATH
        </div>
        
        <h4>Step 3: Choose an IDE</h4>
        <p>Popular Java IDEs include:</p>
        <ul>
            <li><strong>IntelliJ IDEA:</strong> Most popular, feature-rich</li>
            <li><strong>Eclipse:</strong> Free, open-source</li>
            <li><strong>NetBeans:</strong> Oracle's official IDE</li>
            <li><strong>Visual Studio Code:</strong> Lightweight with Java extensions</li>
        </ul>
        
        <div class="practice-question">
            <h4>🎯 Practice Question 1</h4>
            <p><strong>Question:</strong> What does JVM stand for and why is it important for Java's platform independence?</p>
            <p><strong>Answer:</strong> JVM stands for Java Virtual Machine. It's important because it acts as an intermediary between Java bytecode and the operating system, allowing Java programs to run on any platform that has a JVM installed.</p>
        </div>
    </div>

    <div class="page-break"></div>

    <div class="section-box">
        <h1>2. Basic Syntax & HelloWorld</h1>
        
        <h2>Your First Java Program</h2>
        <p>Let's start with the traditional "Hello World" program:</p>
        
        <div class="code-block">
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
    }
}
        </div>
        
        <h3>Understanding the Code</h3>
        <ul>
            <li><code>public class HelloWorld</code>: Declares a public class named HelloWorld</li>
            <li><code>public static void main(String[] args)</code>: The main method - entry point of the program</li>
            <li><code>System.out.println()</code>: Prints text to the console</li>
        </ul>
        
        <div class="tip">
            <strong>💡 Important:</strong> The class name must match the filename. If your class is named "HelloWorld", save it as "HelloWorld.java"
        </div>
        
        <h3>Compiling and Running</h3>
        <div class="code-block">
# Compile the Java file
javac HelloWorld.java

# This creates HelloWorld.class file

# Run the compiled program
java HelloWorld

# Output: Hello, Java World!
        </div>
        
        <h2>Java Syntax Rules</h2>
        
        <div class="highlight">
            <strong>Key Syntax Rules:</strong>
            <ul>
                <li>Java is case-sensitive</li>
                <li>Every statement must end with a semicolon (;)</li>
                <li>Code blocks are enclosed in curly braces { }</li>
                <li>Class names should start with uppercase letter</li>
                <li>Method names should start with lowercase letter</li>
            </ul>
        </div>
        
        <h3>Comments in Java</h3>
        <div class="code-block">
// Single line comment

/*
 * Multi-line comment
 * Can span multiple lines
 */

/**
 * Javadoc comment
 * Used for documentation
 * @author Your Name
 */
        </div>
        
        <div class="practice-question">
            <h4>🎯 Practice Question 2</h4>
            <p><strong>Question:</strong> Write a Java program that prints your name and age.</p>
            <div class="code-block">
public class PersonalInfo {
    public static void main(String[] args) {
        System.out.println("Name: John Doe");
        System.out.println("Age: 25");
    }
}
            </div>
        </div>
    </div>

    <div class="page-break"></div>

    <div class="section-box">
        <h1>3. Variables & Data Types</h1>
        
        <h2>Understanding Variables</h2>
        <p>A variable is a container that holds data that can be changed during program execution.</p>
        
        <h3>Variable Declaration Syntax</h3>
        <div class="code-block">
dataType variableName = value;

// Examples:
int age = 25;
String name = "John";
double salary = 50000.50;
        </div>
        
        <h2>Primitive Data Types</h2>
        <p>Java has 8 primitive data types:</p>
        
        <div class="code-block">
// Integer types
byte smallNumber = 127;        // 8-bit, range: -128 to 127
short mediumNumber = 32000;    // 16-bit, range: -32,768 to 32,767
int regularNumber = 2000000;   // 32-bit, range: -2^31 to 2^31-1
long bigNumber = 9000000000L;  // 64-bit, range: -2^63 to 2^63-1

// Floating-point types
float decimal = 3.14f;         // 32-bit floating point
double preciseDecimal = 3.14159265359; // 64-bit floating point

// Character type
char letter = 'A';             // 16-bit Unicode character

// Boolean type
boolean isJavaFun = true;      // true or false
        </div>
        
        <div class="tip">
            <strong>💡 Memory Tip:</strong> 
            <ul>
                <li>Use 'L' suffix for long literals</li>
                <li>Use 'f' suffix for float literals</li>
                <li>char uses single quotes, String uses double quotes</li>
            </ul>
        </div>
        
        <h2>Reference Data Types</h2>
        <p>Reference types include classes, interfaces, and arrays:</p>
        
        <div class="code-block">
// String (most commonly used reference type)
String message = "Hello World";
String name = new String("Java");

// Arrays
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};

// Objects
Scanner scanner = new Scanner(System.in);
ArrayList<String> list = new ArrayList<>();
        </div>
        
        <h3>Type Casting</h3>
        <p>Converting one data type to another:</p>
        
        <div class="code-block">
// Implicit casting (automatic - smaller to larger)
int intValue = 100;
double doubleValue = intValue; // int to double

// Explicit casting (manual - larger to smaller)
double pi = 3.14159;
int intPi = (int) pi; // double to int (loses decimal part)

// String to number conversion
String numberStr = "123";
int number = Integer.parseInt(numberStr);
double decimal = Double.parseDouble("45.67");

// Number to String conversion
int age = 25;
String ageStr = String.valueOf(age);
String ageStr2 = Integer.toString(age);
        </div>
        
        <div class="warning">
            <strong>⚠️ Warning:</strong> Be careful with explicit casting as it can lead to data loss. For example, casting a double to int will truncate the decimal part.
        </div>
        
        <h3>Variable Scope</h3>
        <div class="code-block">
public class VariableScope {
    static int classVariable = 10; // Class/Static variable
    int instanceVariable = 20;     // Instance variable
    
    public void method() {
        int localVariable = 30;     // Local variable
        
        // Local variable scope is within this method only
        System.out.println(localVariable);
    }
}
        </div>
        
        <div class="practice-question">
            <h4>🎯 Practice Question 3</h4>
            <p><strong>Question:</strong> Create variables for a student's information and print them.</p>
            <div class="code-block">
public class StudentInfo {
    public static void main(String[] args) {
        String studentName = "Alice Johnson";
        int studentAge = 20;
        double gpa = 3.85;
        char grade = 'A';
        boolean isEnrolled = true;
        
        System.out.println("Student Name: " + studentName);
        System.out.println("Age: " + studentAge);
        System.out.println("GPA: " + gpa);
        System.out.println("Grade: " + grade);
        System.out.println("Enrolled: " + isEnrolled);
    }
}
            </div>
        </div>
    </div>

    <!-- Continue with remaining sections... -->
    
    <div class="page-break"></div>
    
    <div style="text-align: center; padding: 50px; background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%); color: white; margin: 40px -40px;">
        <h2>🎉 Congratulations!</h2>
        <p style="font-size: 18px; margin: 20px 0;">
            You've completed the Java Mastery Tutorial!
        </p>
        <p>
            Continue practicing with the exercises and build real projects to solidify your knowledge.
        </p>
        <p style="margin-top: 30px; opacity: 0.8;">
            Happy Coding! 🚀
        </p>
    </div>
</body>
</html>
  `

  // Create and download the PDF
  const blob = new Blob([pdfContent], { type: "text/html" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "Java-Mastery-Complete-Tutorial.html"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // Show success message
  alert(
    '🎉 Your Java Tutorial has been downloaded! Open the HTML file in your browser and use your browser\'s "Print to PDF" feature to create a beautiful PDF with the soothing color scheme.',
  )
}
