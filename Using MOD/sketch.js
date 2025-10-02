function setup() {
  createCanvas(400, 400);
  print("How do you tell if a number is even or odd?");
  print("Use the MOD operator (%) to find the remainder.");
  print("If the remainder is 0, then the number is even.");
  print("If the remainder is 1, then the number is odd.");
  print("For example, 10 % 2 = " + (123 % 2));
  print("And 11 % 2 = " + (224 % 2));

  print("Divide the class of 31 into groups of 4.");
  let groupSize = 4;
  let classSize = 31;
  let numGroups = classSize / groupSize;
  let studentsInLastGroup = classSize % groupSize;
  print("There will be " + floor(numGroups) + " groups of " + groupSize);
  print("The last group will have " + studentsInLastGroup + " students.");
  print("floor() rounds down to the nearest whole number.");
}
