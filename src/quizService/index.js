const qBank = [
  {
    question:
      "which of the following is invalid identifiers?",
    answers: ["sum-1", "sum_1", "power", "power_1"],
    correct: "sum-1",
    questionId: "099099"
  },
  {
    question:
      "Which of the following is not a math function?",
    answers: ["acos", "sine", "cosh", "None of the above"],
    correct: "None of the above",
    questionId: "183452"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "which of the following is not a type of operator?",
    answers: [
      "Comma operator",
      "unary operator",
      "binary operator",
      "None of the above"
    ],
    correct: "None of the above",
    questionId: "333247"
  },
  {
    question: "Pick out the compound assignment statement",
    answers: ["x=x-5", "x=x/y", "x-=5", "x=x+5"],
    correct: "x-=5",
    questionId: "496293"
  },
  {
    question:
      "What is the use of dynamic_cast operator?",
    answers: [
      "It converts virtual base class to derived class",
      "It converts the virtual base object to derived objects",
      "It will convert the operator based on precedence",
      "It converts the virtual base object to derived class"
    ],
    correct: "It converts virtual base class to derived class",
    questionId: "588909"
  },
  {
    question:
      "Which operator is having the highest precedence?",
    answers: ["Postfix", "unary", "shift", "quality"],
    correct: "Postfix",
    questionId: "648452"
  },
  {
    question: "which data type can be used to declare the given statement -2x(10^6) <= n <= 2x(10^6)",
    answers: ["long int n", "int n", "unsigned int n", "unsigned long int n"],
    correct: "long int n",
    questionId: "786649"
  },
  {
    question:
      "What does ‘\a’ escape code represent?",
    answers: ["alert", "backslash", "tab", "form feed"],
    correct: "alert",
    questionId: "839754"
  },
  {
    question:
      "What is the size of wchar_t in C++",
    answers: [
        "2",
      "4",
      "2 or 4",
      "Based on the number of bits in the system"
    ],
    correct: "Based on the number of bits in the system",
    questionId: "98390"
  },
  {
    question: "Which of the following is a type of Arithmetic operator?",
    answers: ["Binary Operator", "Relational operator", "Logical operator", "None of the above"],
    correct: "Binary Operator",
    questionId: "1071006"
  },
  {
    question: "which of the following is considered as a relational operator?",
    answers: ["<,<=,>=", "+=,-=,*=", "++,--", "None of the above"],
    correct: "<,<=,>=",
    questionId: "1174154"
  },
  {
    question: "which of the following is considered as a logical operator?",
    answers: ["&,|,~", "+,-,*", "&&,||,!", "++,--,**"],
    correct: "&&,||,!",
    questionId: "1226535"
  },
  {
    question: "which of the following is not a set of binary operators?",
    answers: ["+,-,*", " ++,--,*", "+,*,/", "&&,||,!"],
    correct: "++,--,*",
    questionId: "1310938"
  },
  {
    question: "i++ is an example of..",
    answers: ["Post-increment", "Pre-increment", "post-decrement", "Pre-decrement"],
    correct: "Post-increment",
    questionId: "1436873"
  },
  {
    question: "In C++ the words that is already defined and is reserved for a single special purpose, is called as",
    answers: ["functions", "statements", "keywords", "identifiers"],
    correct: "keywords",
    questionId: "1515110"
  },
  {
    question: "which of the following does not belong to reserved words",
    answers: ["alignof", "dynamic_cast", "xor", "string"],
    correct: "string",
    questionId: "1642728"
  },
  {
    question:
      "Can we use keywords that cannot be used as an identifier?",
    answers: ["True", "False", "Statement is invalid", "None of the above"],
    correct: "False",
    questionId: "1747256"
  },
  {
    question:
      "choose the odd one out .",
    answers: ["auto", "case", "unsigned", "int"],
    correct: "int",
    questionId: "1822532"
  },
  {
    question: "C++ Language supports more than ____ keywords.",
    answers: [
      "64",
      "84",
      "36",
      "102"
    ],
    correct: "64",
    questionId: "195075"
  },
  {
    question: "Every Keyword exists in lower case",
    answers: ["True", "False"],
    correct: "True",
    questionId: "2019778"
  },
  {
    question: "Signed is the default modifier for char and int data types.",
    answers: ["True", "False"],
    correct: "True",
    questionId: "2134343"
  },
  {
    question: "What is the syntax of user-defined data types?",
    answers: [
      "typedef standard_type new_type;",
      "typedef new_type standard_type;",
      "def standard_type new_type;",
      "def new_type standard_type;"
    ],
    correct: "typedef standard_type new_type;",
    questionId: "2210799"
  },
  {
    question:
      "What is the size of void in bytes?",
    answers: ["0", "1", "2", "4"],
    correct: "0",
    questionId: "2379831"
  },
  {
    question: "If no data type is given to a variable, the compiler automatically converts it to ____ data type.",
    answers: ["integer", "float", "Charracter", "None of the above"],
    correct: "integer",
    questionId: "2426418"
  },
  {
    question: "What is the scope of typedef defined data types?",
    answers: ["inside that block only", "whole program", "outside the program", "main function"],
    correct: "whole program",
    questionId: "2510086"
  },
  {
    question: "Which of the following is considered as data modifier?",
    answers: [
      "signed",
      "unsigned",
      "short",
      "none of the above"
    ],
    correct: "none of the above",
    questionId: "2685745"
  },
  {
    question:
      "______ datatype represents a valueless entity",
    answers: ["enum", "union", "void", "none of the above"],
    correct: "void",
    questionId: "2796884"
  },
  {
    question: "Memory space required by the integer data type?",
    answers: ["2 byte", "4 byte", "8 byte", "Depend upon the system configuration"],
    correct: "Depend upon the system configuration",
    questionId: "2838900"
  },
  {
    question: "Select the user-defined data types among the following?",
    answers: ["int", "float", " reference ", " enum"],
    correct: "enum",
    questionId: "298060"
  },
  {
    question: "which of the following is not a valid Derived Data TypesDerived Data Types?",
    answers: ["Reference (int& ref)", "pointer(int *ptr)", "Array (int A[])", "none of the above"],
    correct: "none of the above",
    questionId: "3096579"
  },
  {
    question: "Which keyword is used to define the user-defined data types?",
    answers: [
      "def",
      "union",
      "typedef",
      "type"
    ],
    correct: "typedef",
    questionId: "3182461"
  },
  {
    question: "A variable can have alphabets, digits, underscore and keywords.",
    answers: [
      "True",
      "False",
    ],
    correct: "false",
    questionId: "3239112"
  },
  {
    question: "Which of the following is Invalid variable names?",
    answers: ["int 4;", "float double;", "int x,y;", "All of the above"],
    correct: "All of the above",
    questionId: "3318503"
  },
  {
    question:
      "The correct syntax to declare a variable?",
    answers: ["int variable_list;", "variable_list type;", "type_variable_list", "none of the above"],
    correct: "int variable_list;",
    questionId: "3410327"
  },
  {
    question: 'The "endl" is a predefined object of ______ class',
    answers: ["istream", "ostream", "iostream", "none of the above"],
    correct: "ostream",
    questionId: "3542596"
  },
  {
    question: 'The "cin" is a predefined object of ______ class.',
    answers: ["istream", "ostream", "iostream", "none of the above"],
    correct: "istream",
    questionId: "3667517"
  },
  {
    question: 'The "cout" is a predefined object of ______ class.',
    answers: ["istream", "ostream", "iostream", "none of the above"],
    correct: "ostream",
    questionId: "3791672"
  },
  {
    question: "All C++ variables must be identified with unique names. These unique names are called _________.",
    answers: ["constant", "identifiers", "variable", "none of the above"],
    correct: "identifiers",
    questionId: "3893585"
  },
  {
    question: "Which of the following is a correct identifier in C++?",
    answers: ["$var123", "var_123", "123_var", "none of the above"],
    correct: "var_123",
    questionId: "3913430"
  },
  {
    question: "Select the odd one out.",
    answers: ["int", "float", "enum", "bool"],
    correct: "enum",
    questionId: "4049121"
  },
  {
    question:
      "Is there any difference in below two statements? int var = 10; int var(10);",
    answers: ["yes", "no", "cannot say", "compile time error"],
    correct: "no",
    questionId: "4150746"
  },
  {
    question:
      "By default ,c++ uses______ to pass arguments .",
    answers: ["call by value", "call by pointer", "call by reference", "call by result"],
    correct: "call by value",
    questionId: "4235063"
  },
  {
    question: "____ method copies the reference of an argument into the formal parameter. Inside the function, the reference is used to access the actual argument used in the call.",
    answers: ["call by reference", "call by value", "call by pointer", "call by result"],
    correct: "call by reference",
    questionId: "4321002"
  },
  {
    question: "Which function can be called without using an object of a class in C++?",
    answers: [
      "static function",
      "inline function",
      "friend function",
      "constant function"
    ],
    correct: "static function",
    questionId: "4442286"
  },
  {
    question: "Can pass structure variables as parameters to function ?",
    answers: [
      "Yes",
      "No"
    ],
    correct: "Yes",
    questionId: "4564430"
  },
  {
    question: "when did the inline function is expended?",
    answers: ["run time", "compiler time", "end of program", "does not expand"],
    correct: "run time",
    questionId: "4630606"
  },
  {
    question:
      "what is abstract class?",
    answers: ["pure virtual function", "virtual function", "derived class", "base class"],
    correct: "pure virtual function",
    questionId: "4795960"
  },
  {
    question: "where the abstract class is used?",
    answers: ["base class only", "derived class", "both derived & base class", "virtual class"],
    correct: "base class only",
    questionId: "4811162"
  },
  {
    question: "which of the following is used to group together elements with different data types?",
    answers: ["array", "union", "structure", "both union & structure"],
    correct: "both union & structure",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
