//Create Questions
var questions = [
    new Question("Who was the first President of the United States?", [ "George Washington", "Thomas Jefferson","George Bush" ], "George Washington"),
    new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi","42","0"], "42"),
    new Question("What HTML stands for?", ["Hypertext Markup Language","HyperText Model Language","Hypertext Multiform Language"], "Hypertext Markup Language"),
    new Question("A phlebotomist extracts what from the human body?", ["Water","Blood","Vein"], "Blood"),
    new Question("How many feet are there in a fathom?", ["3","4","6"], "6"),
    new Question("What type of animal was inside Sputnik 2 when launched into orbit in 1957?", ["Dog","Cat","Monkey"], "Dog"),
    new Question("What type of creature is a dugite?", ["Frog","Rabbit","Snake"], "Snake"),
    new Question("In computing what does DMA normally stand for?", ["Direct Memory Available","Direct Memory Access","Deprecated Memory Accesscible"], "Direct Memory Access"),
    new Question("Which programming language has a coffee cup sign as a logo?", ["Python","C++","Java"], "Java"),
    new Question("Entomology is the science that studies?", ["Behavior of human beings","Insects","The origin and history of technical and scientific terms"], "Insects"),
    new Question("For which of the following disciplines is Nobel Prize awarded?", ["Physics and Chemistry","Physiology or Medicine","All of the above"], "All of the above"),
    new Question("FFC stands for?", ["Foreign Finance Corporation","Film Finance Corporation","Federation of Football Council"], "Film Finance Corporation"),
    new Question("First China War was fought between?", ["China-France","China-Britain","China-Japan"], "China-Britain"),
    new Question("Which scientist discovered the radioactive element radium?", ["	Isaac Newton","Albert Einstein","Marie Curie"], "Marie Curie"),
    new Question("In which decade was the telephone invented?", ["1850s","1860s","1870s"], "1870s"),
    new Question("Venezuela is a country in?", ["South Africa","South America","Northern Europe"], "South America"),
    new Question("A person who comes third in the Olympic Games wins", ["a brass medal","a bronze medal","a silver medal"], "a bronze medal"),
    new Question("How many sides has an isosceles triangle?", ["3","6","8"], "3"),
    new Question("In which country did the first organised motor race take place?", ["Italy","USA","France"], "France"),
    new Question("What is the language spoken in the Republic of Congo?", ["English","French","Spanish"], "French")
];
//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
