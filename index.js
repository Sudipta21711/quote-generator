let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "When you reach the end of your rope, tie a knot in it and hang on.",
    "Always remember that you are absolutely unique. Just like everyone else.",
    "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart.",
    "It is during our darkest moments that we must focus to see the light.",
    "Whoever is happy will make others happy too.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Man will never be free until the last king is strangled with the entrails of the last priest.",
    "There will come a time when you believe everything is finished. That will be the beginning",
    "The only impossible journey is the one you never begin.",
    "In this life we cannot do great things. We can only do small things with great love.",
    "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "Life is really simple, but we insist on making it complicated.",
    "Money and success don’t change people; they merely amplify what is already there.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "In the long run, the sharpest weapon of all is a kind and gentle spirit.",
    "Science is what you know. Philosophy is what you don't know.",
    "If God did not exist, it would be necessary to invent Him.",
    "There are a terrible lot of lies going about the world, and the worst of it is that half of them are true.",
    "I think we consider too much the good luck of the early bird and not enough the bad luck of the early worm.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "Beware; for I am fearless, and therefore powerful.",
    "If I’m gonna tell a real story, I’m gonna start with my name.",
    "I could agree with you but then we’d both be wrong.",
    "There is no substitute for hard work.",
    "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    "Every child is an artist. The problem is how to remain an artist once he grows up.",
    "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Build your own dreams, or someone else will hire you to build theirs.",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect",
    "Stay hungry, stay foolish",
    "Insanity: doing the same thing over and over again and expecting different results.",
    "The successful warrior is the average man, with laser-like focus.",
    "Don’t count the days, make the days count.",
    "The journey of a thousand miles begins with one step.",
    "Be yourself; everyone else is already taken.",
    "The best things in life are free. The second best things are very expensive.",
    "You miss 100 percent of the shots you never take.",
    "Education is the most powerful weapon which you can use to change the world.",
    "The weak can never forgive. Forgiveness is the attribute of the strong.",
    "Life is a flower of which love is the honey.",
    "It’s not how much you have that makes people look up to you, it’s who you are.",
    "Little by little, one travels far.", 
    "If you even dream of beating me you'd better wake up and apologize."
];
let writer = [
    "Nelson Mandela",
    "Walt Disney",
    "Steve Jobs",
    "Eleanor Roosevelt",
    "James Cameron",
    "John Lennon",
    "Mother Teresa",
    "Franklin D. Roosevelt",
    "Margaret Mead",
    "Robert Louis Stevenson",
    "Eleanor Roosevelt",
    "Benjamin Franklin",
    "Helen Keller",
    "Aristotle",
    "Anne Frank",
    "Ralph Waldo Emerson",
    "Denis Diderot",
    "Louis L’Amour",
    "Tony Robbins",
    "Mother Teresa",
    "Confucius",
    "Henry David Thoreau",
    "Will Smith",
    "Albert Einstein",
    "Anne Frank",
    "Martin Luther King Jr",
    "Oprah Winfrey",
    "Shakespeare",
    "Mark Twain",
    "Henry Ford",
    "Muhammad Ali",
    "Bruce Lee",
    "Marilyn Monroe",
    "Ernesto “Che” Guevara",
    "Henry David Thoreau",
    "Mae West",
    "Michael Jordan",
    "Rosa Parks",
    "Diana, Princess of Wales",
    "René Descartes",
    "Eleanor Roosevelt",
    "Audrey Hepburn",
    "Maya Angelou",
    "Pablo Picasso",
    "Farrah Gray",
    "Dalai Lama",
    "ralph Waldo Emerson",
    "John F. Kennedy",
    "Lao Tzu",
    "Oscar Wilde",
    "Coco Chanel",
    "Wayne Gretzky",
    "Nelson Mandela",
    "Mahatma Gandhi",
    "Victor Hugo",
    "Elvis Presley",
    "J.R.R. Tolkien",
    "Muhammad Ali"
];

function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("newQuote").innerHTML = quotes[randomNumber];
    let randomWriters = Math.floor(Math.random() * writer.length);
    document.getElementById("writers").innerHTML = writer[randomWriters];
}
