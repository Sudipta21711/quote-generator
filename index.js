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
    "In the long run, the sharpest weapon of all is a kind and gentle spirit."

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
    "Anne Frank"
];

function getQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("newQuote").innerHTML = quotes[randomNumber];
    let randomWriters = Math.floor(Math.random() * writer.length);
    document.getElementById("writers").innerHTML = writer[randomWriters];
}
